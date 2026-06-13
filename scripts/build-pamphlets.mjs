#!/usr/bin/env node

/**
 * build-pamphlets.mjs
 *
 * Reads each provider's final body copy and cover copy, then outputs
 * dist/<provider>/pamphlet.html and pamphlet.pdf.
 *
 * Usage:
 *   npm run build:pamphlets
 *   node scripts/build-pamphlets.mjs
 *   node scripts/build-pamphlets.mjs replit vercel   # build specific providers only
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { marked } from "marked";
import puppeteer from "puppeteer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "..");
const BRIEFS = path.join(ROOT, "briefs");
const DIST = path.join(ROOT, "dist");
const CSS_PATH = path.join(ROOT, "styles", "pamphlet-theme.css");

// ── Helpers ──────────────────────────────────────────────────────────

function exists(p) {
  return fs.existsSync(p);
}

function read(p) {
  return fs.readFileSync(p, "utf-8");
}

/**
 * Find a cover image asset in briefs/<provider>/assets/.
 * Returns the absolute path if found, null otherwise.
 */
function findCoverImage(providerDir) {
  const assetsDir = path.join(providerDir, "assets");
  if (!exists(assetsDir)) return null;

  const extensions = [".png", ".jpg", ".jpeg", ".webp"];
  for (const ext of extensions) {
    const candidate = path.join(assetsDir, `cover${ext}`);
    if (exists(candidate)) return candidate;
  }
  return null;
}

/**
 * Parse the structured fields from 08-final-cover-copy.md.
 *
 * Expected format:
 *   **Series Title:**
 *   DON'T GO BROKE IN THE AGE OF AI
 *
 *   **Top Line / Series Kicker:**
 *   Early User Notes for Solo AI App Builders
 *
 *   **Cover Subtitle:**
 *   Replit: When the Agent Outpaces You
 *
 *   **Bottom Line:**
 *   A short warning for first-time builders...
 *
 *   **Badge:**
 *   5 PAGES · SHORT & PRACTICAL
 */
function parseCoverCopy(markdown) {
  const fields = {};
  const fieldMap = {
    "Series Title": "seriesTitle",
    "Top Line / Series Kicker": "kicker",
    "Cover Subtitle": "coverSubtitle",
    "Bottom Line": "bottomLine",
    "Badge": "badge",
    // Legacy field names (backward compat)
    "Provider Edition": "providerEdition",
    "Short Warning Line": "warningLine",
    "CTA / Positioning Line": "cta",
  };

  const lines = markdown.split("\n");
  let currentKey = null;

  for (const line of lines) {
    // Match **Field Name:**
    const match = line.match(/^\*\*(.+?):\*\*$/);
    if (match) {
      const label = match[1].trim();
      currentKey = fieldMap[label] || null;
      continue;
    }

    // Non-empty line after a field label → field value
    if (currentKey && line.trim()) {
      fields[currentKey] = line.trim();
      currentKey = null;
    }
  }

  return fields;
}

/**
 * Build a text-based cover page from parsed cover-copy fields.
 * Mirrors the approved Replit cover image layout.
 */
function buildTextCover(fields) {
  const kicker = fields.kicker || "Early User Notes for Solo AI App Builders";
  const title = fields.seriesTitle || "DON\u2019T GO BROKE IN THE AGE OF AI";
  const subtitle = fields.coverSubtitle || "";
  const bottomLine = fields.bottomLine || fields.warningLine || fields.cta || "";
  const badge = fields.badge || "5 PAGES \u00b7 SHORT & PRACTICAL";

  return `
    <div class="cover-text-page">
      <div class="cover-top">
        <p class="cover-kicker">${esc(kicker)}</p>
        <div class="cover-rule"></div>
        <h1 class="cover-title">${esc(title)}</h1>
        <p class="cover-subtitle">${esc(subtitle)}</p>
      </div>
      <div class="cover-middle">
        <!-- Reserved for future illustration -->
      </div>
      <div class="cover-bottom">
        <div class="cover-rule"></div>
        <div class="cover-bottom-row">
          <p class="cover-bottom-line">${esc(bottomLine)}</p>
          <p class="cover-badge">${esc(badge)}</p>
        </div>
      </div>
    </div>
  `;
}

/**
 * Build an image-based cover page from a local image file.
 * Embeds as base64 data URI so the HTML is self-contained.
 */
function buildImageCover(imagePath) {
  const ext = path.extname(imagePath).slice(1).toLowerCase();
  const mimeMap = { png: "image/png", jpg: "image/jpeg", jpeg: "image/jpeg", webp: "image/webp" };
  const mime = mimeMap[ext] || "image/png";
  const data = fs.readFileSync(imagePath);
  const b64 = data.toString("base64");

  return `
    <div class="cover-image-page">
      <img src="data:${mime};base64,${b64}" alt="Cover" />
    </div>
  `;
}

/**
 * Escape HTML special characters.
 */
function esc(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * Preprocess the body markdown before conversion:
 *  - Strip the title block (already on the cover)
 *  - Convert checklist items
 */
function preprocessBody(markdown) {
  let body = markdown;

  // Remove the title block: everything from the start through the first ---
  // The title block is: # SERIES TITLE \n\n ## Edition \n\n ### Subtitle \n\n ---
  const firstHrIndex = body.indexOf("\n---\n");
  if (firstHrIndex !== -1 && firstHrIndex < 400) {
    body = body.slice(firstHrIndex + 5); // skip past the ---\n
  }

  return body;
}

// ── Main Build ───────────────────────────────────────────────────────

async function buildProvider(providerSlug, browser, cssContent) {
  const providerDir = path.join(BRIEFS, providerSlug);
  const bodyPath = path.join(providerDir, "05-final-copy.md");
  const coverPath = path.join(providerDir, "08-final-cover-copy.md");

  // Check required files
  if (!exists(bodyPath)) {
    console.log(`  ⏭  Skipping ${providerSlug}: missing 05-final-copy.md`);
    return null;
  }
  if (!exists(coverPath)) {
    console.log(`  ⏭  Skipping ${providerSlug}: missing 08-final-cover-copy.md`);
    return null;
  }

  console.log(`  📄 Building ${providerSlug}...`);

  // Parse cover copy
  const coverMd = read(coverPath);
  const coverFields = parseCoverCopy(coverMd);

  // Check for cover image
  const coverImage = findCoverImage(providerDir);
  const coverType = coverImage ? "image" : "text";

  // Build cover HTML
  const coverHtml = coverImage
    ? buildImageCover(coverImage)
    : buildTextCover(coverFields);

  // Process body
  const bodyMd = read(bodyPath);
  const processedBody = preprocessBody(bodyMd);

  // Configure marked
  marked.setOptions({ gfm: true, breaks: false });
  const bodyHtml = marked(processedBody);

  // Assemble full HTML
  const title = `${coverFields.coverSubtitle || providerSlug} — DON\u2019T GO BROKE IN THE AGE OF AI`;
  const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${esc(title)}</title>
  <style>${cssContent}</style>
</head>
<body class="provider-${providerSlug}">
  <div class="page-wrapper">
    ${coverHtml}
    <div class="body-content">
      ${bodyHtml}
    </div>
  </div>
</body>
</html>`;

  // Write HTML
  const outDir = path.join(DIST, providerSlug);
  fs.mkdirSync(outDir, { recursive: true });

  const htmlPath = path.join(outDir, "pamphlet.html");
  fs.writeFileSync(htmlPath, fullHtml, "utf-8");
  console.log(`    ✓ HTML → ${path.relative(ROOT, htmlPath)}`);

  // Generate PDF
  const pdfPath = path.join(outDir, "pamphlet.pdf");
  const page = await browser.newPage();
  await page.setContent(fullHtml, { waitUntil: "domcontentloaded", timeout: 60000 });
  await page.pdf({
    path: pdfPath,
    format: "Letter",
    printBackground: true,
    margin: { top: "0in", right: "0in", bottom: "0in", left: "0in" },
  });
  await page.close();
  console.log(`    ✓ PDF  → ${path.relative(ROOT, pdfPath)}`);

  return { provider: providerSlug, coverType };
}

async function main() {
  console.log("\n🔨 DON\u2019T GO BROKE — Pamphlet Builder\n");

  // Check CSS
  if (!exists(CSS_PATH)) {
    console.error(`❌ Missing CSS theme: ${CSS_PATH}`);
    process.exit(1);
  }
  const cssContent = read(CSS_PATH);

  // Discover providers
  const args = process.argv.slice(2);
  let providers;

  if (args.length > 0) {
    // Build specific providers
    providers = args;
  } else {
    // Build all providers with required files
    providers = fs
      .readdirSync(BRIEFS)
      .filter((d) => {
        if (d.startsWith("_")) return false; // skip _template
        const stat = fs.statSync(path.join(BRIEFS, d));
        return stat.isDirectory();
      })
      .sort();
  }

  console.log(`  Providers: ${providers.join(", ")}\n`);

  // Launch Puppeteer
  console.log("  Launching browser...");
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const results = [];
  for (const provider of providers) {
    const result = await buildProvider(provider, browser, cssContent);
    if (result) results.push(result);
  }

  await browser.close();

  // Summary
  console.log("\n── Summary ─────────────────────────────────────────\n");
  if (results.length === 0) {
    console.log("  No providers built.\n");
  } else {
    for (const r of results) {
      const coverLabel = r.coverType === "image" ? "🖼  image cover" : "📝 text cover";
      console.log(`  ✅ ${r.provider.padEnd(14)} ${coverLabel}`);
    }
    console.log(`\n  ${results.length} pamphlet(s) generated in dist/\n`);
  }
}

main().catch((err) => {
  console.error("\n❌ Build failed:", err.message || err);
  process.exit(1);
});
