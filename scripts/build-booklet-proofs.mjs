#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { marked } from "marked";
import puppeteer from "puppeteer";
import { fileURLToPath } from "url";
import { PDFDocument, rgb } from "pdf-lib";

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

const slugFilter = (() => {
  const idx = process.argv.indexOf('--slug');
  return idx !== -1 ? process.argv[idx + 1] : null;
})();

const FOLIO_TEMPLATE = `
  <div style="width:100%;text-align:center;font-family:'Times New Roman',Times,serif;font-size:6.7pt;color:#000;padding:0 1.3in;box-sizing:border-box;">
    <span class="pageNumber"></span>
  </div>
`;

async function generateProof() {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });

  for (let i = 0; i < BOOKLETS.length; i++) {
    const b = BOOKLETS[i];
    if (slugFilter && b.slug !== slugFilter) continue;
    const bookletDir = path.join(ROOT, "products", "dont-go-broke", "booklets", b.slug);
    const msPath = path.join(bookletDir, "05-final-copy.md");
    
    if (!fs.existsSync(msPath)) {
      console.log(`Skipping ${b.slug}, manuscript not found.`);
      continue;
    }

    const nextBooklet = BOOKLETS[i + 1];
    // Booklets whose manuscript already ends with its own boxed next-booklet
    // bridge (see "Back Matter > Next Step" in the manuscript) skip this
    // generic placeholder page — otherwise the next-booklet mention would be
    // duplicated across two separate trailing pages.
    const nextStepHtml = b.skipAutoNextStep
      ? null
      : nextBooklet
        ? `<div class="next-booklet-cover">[NEXT BOOKLET COVER — insert when available]</div>`
        : `
      <div class="series-recap">
        <p class="series-recap-heading">The Complete Don&rsquo;t Go Broke in the Age of AI Series</p>
        ${BOOKLETS.map((bk, idx) => `
          <div class="series-recap-item">
            <div class="series-recap-label">Don&rsquo;t Go Broke in the Age of AI &mdash; Booklet ${idx + 1} of ${BOOKLETS.length}</div>
            <div class="series-recap-title">${bk.title}</div>
          </div>
        `).join('')}
      </div>
    `;

    const msContent = fs.readFileSync(msPath, "utf8");
    
    // Custom renderer for checklists.
    // marked's GFM parser converts "- [ ] text" into a task-list item
    // (item.task = true) and a native <input type="checkbox"> BEFORE this
    // renderer ever sees it — checking item.text for a literal "[ ]" prefix
    // never matches. Override checkbox() to suppress the native input (its
    // OS-themed appearance isn't controlled by our CSS) and tag the <li>
    // with our class instead, so the existing .checklist-item::before box
    // (style.css) draws it consistently everywhere, and the default bullet
    // marker gets removed via that same class.
    const renderer = new marked.Renderer();
    renderer.checkbox = () => '';
    const originalListitem = renderer.listitem.bind(renderer);
    renderer.listitem = function(item) {
      const html = originalListitem(item);
      if (item.task) {
        return html.replace('<li>', '<li class="checklist-item">');
      }
      return html;
    };

    let bodyHtml = marked.parse(msContent, { renderer });

    // Resolve image markers using assets from this booklet's assets/ folder.
    // Falls back to text placeholder if the file doesn't exist, keeping the
    // other 4 booklets working unchanged until their art is ready.
    const assetsDir = path.join(bookletDir, "assets");

    let coverImageHtml = '[COVER ILLUSTRATION — style-match required]';
    const coverMatch = bodyHtml.match(/<!-- COVER: ([^\s>]+\.png) -->/);
    if (coverMatch) {
      const imgPath = path.join(assetsDir, coverMatch[1]);
      if (fs.existsSync(imgPath)) {
        const b64 = fs.readFileSync(imgPath).toString('base64');
        coverImageHtml = `<img src="data:image/png;base64,${b64}" style="width:100%;height:auto;max-height:8in;object-fit:contain;">`;
      }
      bodyHtml = bodyHtml.replace(/<!-- COVER: [^\s>]+\.png -->/g, '');
    }

    bodyHtml = bodyHtml.replace(/<!-- ILLUSTRATION: ([^\s>]+\.png) -->/g, (match, filename) => {
      const imgPath = path.join(assetsDir, filename);
      if (fs.existsSync(imgPath)) {
        const b64 = fs.readFileSync(imgPath).toString('base64');
        return `<div class="illustration-placeholder"><img src="data:image/png;base64,${b64}" style="width:100%;height:auto;max-height:8in;object-fit:contain;"></div>`;
      }
      return `<div class="illustration-placeholder">[Illustration: ${filename}]</div>`;
    });

    // Very naive ToC generation by extracting H2s
    const h2Regex = /<h2[^>]*>(.*?)<\/h2>/g;
    let match;
    let tocHtml = "<h2>Table of Contents</h2><ul>";
    while ((match = h2Regex.exec(bodyHtml)) !== null) {
      const tocEntry = match[1].replace(/<br\s*\/?>/gi, ' – ').replace(/<[^>]+>/g, '');
      tocHtml += `<li>${tocEntry}</li>`;
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
          li.checklist-item::before {
            content: '';
            position: absolute;
            left: -1.5em;
            top: 0.2em;
            width: 0.75em;
            height: 0.75em;
            border: 1pt solid #000;
          }
        </style>
      </head>
      <body>
        <div class="cover-page">
          <div class="cover-series-label">Don&rsquo;t Go Broke in the Age of AI</div>
          <h1 class="cover-title">${b.title}</h1>
          <div class="cover-illustration">${coverImageHtml}</div>
        </div>

        <div class="fits-page">
          <p><strong>Where This Booklet Fits:</strong> This is booklet ${b.sequence} in the Don&rsquo;t Go Broke series.</p>
          <p><strong>Disclaimer:</strong> This booklet provides general educational information and is not formal financial, legal, or professional engineering advice.</p>
        </div>

        <div class="toc" style="page-break-before: always;">
          ${tocHtml}
        </div>

        <div class="manuscript-body" style="page-break-before: always;">
          ${bodyHtml}
        </div>
        ${nextStepHtml ? `
        <div class="back-matter">
          ${nextStepHtml}
        </div>` : ''}
      </body>
      </html>
    `;

    const distDir = path.join(bookletDir, "dist");
    if (!fs.existsSync(distDir)) fs.mkdirSync(distDir, { recursive: true });

    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: 'networkidle0' });
    
    const outPath = path.join(distDir, `${b.slug}-layout-proof-v1.0.pdf`);
    await page.pdf({
      path: outPath,
      format: 'Letter',
      printBackground: true,
      margin: { top: '1.3in', bottom: '1.3in', left: '1.3in', right: '1.3in' },
      displayHeaderFooter: true,
      headerTemplate: '<span></span>',
      footerTemplate: FOLIO_TEMPLATE
    });
    console.log(`Generated ${outPath}`);

    // Cover page (page 1) must carry no folio. Puppeteer's footerTemplate
    // applies to all pages with no per-page conditional, so suppress it
    // post-render by drawing a white rectangle over the bottom margin on page 1.
    const pdfBytes = fs.readFileSync(outPath);
    const pdfDoc = await PDFDocument.load(pdfBytes);
    const firstPage = pdfDoc.getPages()[0];
    const { width } = firstPage.getSize();
    firstPage.drawRectangle({
      x: 0,
      y: 0,
      width: width,
      height: 100, // covers the full 1.3in (93.6pt) bottom margin where the folio sits, plus a small buffer
      color: rgb(1, 1, 1),
    });
    fs.writeFileSync(outPath, await pdfDoc.save());

    await page.close();
  }
  
  await browser.close();
}

generateProof().catch(err => {
  console.error("PDF Generation Error:", err);
  process.exit(1);
});
