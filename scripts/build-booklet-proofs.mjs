#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { marked } from "marked";
import puppeteer from "puppeteer";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "..");

const BOOKLETS = [
  { slug: "before-the-idea-becomes-reality", title: "Before the Idea Becomes Reality", sequence: "1 of 5" },
  { slug: "before-the-build-starts", title: "Before the Build Starts", sequence: "2 of 5" },
  { slug: "before-the-agent-starts", title: "Before the Agent Starts", sequence: "3 of 5" },
  { slug: "before-you-trust-the-first-draft", title: "Before You Trust the First Draft", sequence: "4 of 5" },
  { slug: "after-launch-the-meter-still-runs", title: "After Launch, the Meter Still Runs", sequence: "5 of 5" }
];

async function generateProof() {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  
  for (let i = 0; i < BOOKLETS.length; i++) {
    const b = BOOKLETS[i];
    const bookletDir = path.join(ROOT, "products", "dont-go-broke", "booklets", b.slug);
    const msPath = path.join(bookletDir, "05-final-copy.md");
    
    if (!fs.existsSync(msPath)) {
      console.log(`Skipping ${b.slug}, manuscript not found.`);
      continue;
    }

    const nextBooklet = BOOKLETS[i + 1];
    let nextStepHtml = "";
    if (nextBooklet) {
      nextStepHtml = `<h2>The Next Step</h2><p>You are ready for the next phase. Proceed to booklet: <strong>${nextBooklet.title}</strong>.</p>`;
    } else {
      nextStepHtml = `<h2>The Next Step</h2><p>Congratulations, you have completed the series!</p>`;
    }

    const msContent = fs.readFileSync(msPath, "utf8");
    
    // Custom renderer for checklists
    const renderer = new marked.Renderer();
    const originalListitem = renderer.listitem.bind(renderer);
    renderer.listitem = function(item) {
      if (item.text.startsWith('[ ]') || item.text.startsWith('[]')) {
        const text = item.text.replace(/^\[\s?\]\s?/, '');
        return `<li class="checklist-item">${text}</li>`;
      }
      return originalListitem(item);
    };

    let bodyHtml = marked.parse(msContent, { renderer });

    // Very naive ToC generation by extracting H2s
    const h2Regex = /<h2[^>]*>(.*?)<\/h2>/g;
    let match;
    let tocHtml = "<h2>Table of Contents</h2><ul>";
    while ((match = h2Regex.exec(bodyHtml)) !== null) {
      // Create slug for bookmarking if needed, but for now just list the title
      tocHtml += `<li>${match[1]}</li>`;
    }
    tocHtml += "</ul>";

    const cssPath = path.join(ROOT, "products", "dont-go-broke", "booklets", "layout", "style.css");
    const cssContent = fs.existsSync(cssPath) ? fs.readFileSync(cssPath, "utf8") : "";

    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>${b.title}</title>
        <style>${cssContent}</style>
        <style>
          li.checklist-item { list-style-type: none; position: relative; }
          li.checklist-item::before { content: '☐'; position: absolute; left: -1.5em; top: 0; font-size: 14pt; }
        </style>
      </head>
      <body>
        <div class="front-matter">
          <div class="series-label">Don’t Go Broke</div>
          <h1>${b.title}</h1>
          <div class="context-note">
            <strong>Where This Booklet Fits:</strong><br/>
            This is booklet ${b.sequence} in the Don’t Go Broke series.
          </div>
          <div class="disclaimer">
            <strong>Disclaimer:</strong> This booklet provides general educational information and is not formal financial, legal, or professional engineering advice.
          </div>
        </div>
        
        <div class="toc" style="page-break-before: always;">
          ${tocHtml}
        </div>

        <div class="manuscript-body" style="page-break-before: always;">
          ${bodyHtml}
        </div>

        <div class="back-matter">
          ${nextStepHtml}
        </div>
      </body>
      </html>
    `;

    const distDir = path.join(bookletDir, "dist");
    if (!fs.existsSync(distDir)) fs.mkdirSync(distDir, { recursive: true });

    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: 'networkidle0' });
    
    const outPath = path.join(distDir, `${b.slug}-layout-proof-v1.0.pdf`);
    await page.pdf({ path: outPath, format: 'Letter', printBackground: true, margin: { top: '20mm', bottom: '20mm', left: '15mm', right: '15mm' } });
    console.log(`Generated ${outPath}`);
    await page.close();
  }
  
  await browser.close();
}

generateProof().catch(err => {
  console.error("PDF Generation Error:", err);
  process.exit(1);
});
