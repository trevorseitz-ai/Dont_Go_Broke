# Typography Correction Brief — bring style.css into conformance with the locked master

Per your decisions: match the master (`before-the-build-starts-payhip-approved.pdf`) exactly on all measured values, including its wider-than-standard line length, its 1.5x heading ratio, and its serif folio.

## 1. Create `conformance-measurements.md` at repo root

```markdown
# Conformance Measurements — from before-the-build-starts-payhip-approved.pdf

- Trim size: US Letter, 612 x 792pt
- Body font: sans-serif (Helvetica Neue family; embedded as Apple system sans in the
  master — use "Helvetica Neue", Arial, sans-serif for cross-platform rendering)
- Body size: 11pt
- Leading: 1.5x body (16.5pt line-height at 11pt)
- Margins: 1.3in on all sides (measured 1.27-1.33in; within the standard's ±0.1in tolerance)
- Heading size: 1.5x body = 16.5pt, bold, matches master exactly (standard's stated
  1.6-1.8x range is superseded per your decision to match the master as-shipped)
- Line measure: matches the master's native ~78-84 characters / 13-17 words per line
  at the above settings — do NOT narrow the column to hit the standard's 63-69 char
  target; the master itself runs wider and we are matching it exactly
- Folio: bottom of page, within the bottom margin band, serif face (Times New Roman),
  ~6.7pt — replicated exactly even though it contrasts with the sans-serif body
- Monospace: Menlo, Courier New fallback, 1pt smaller than body (10pt)
```

## 2. Replace the following in `products/dont-go-broke/booklets/layout/style.css`

```css
@page {
  size: letter;
  margin: 1.3in;
}

body {
  font-family: "Helvetica Neue", Arial, sans-serif;
  font-size: 11pt;
  line-height: 1.5;
  color: #000;
}
```

(was: `Times New Roman... 14.7pt; line-height: 1;` with `margin: 1.25in`)

```css
h1, h2, h3, h4 {
  font-family: "Helvetica Neue", Arial, sans-serif;
  font-weight: bold;
  color: #000;
  page-break-after: avoid;
  break-after: avoid;
}
```

```css
h2 {
  font-size: 16.5pt;
  margin-top: 0;
  margin-bottom: 0.5em;
  text-align: center;
  page-break-before: always;
  break-before: always;
}
```

(was: `font-size: 22pt`)

```css
h3 { font-size: 12pt; font-weight: bold; margin-top: 1.2em; margin-bottom: 0.3em; }
h4 { font-size: 12pt; font-weight: bold; margin-top: 1em; margin-bottom: 0.25em; }
```

(was: `14.7pt` for both — subsection headings should read as "body size or slightly larger" against the new 11pt body; verify against render and adjust to 11pt flat if 12pt reads too large)

```css
pre, code {
  font-family: Menlo, "Courier New", monospace;
  font-size: 10pt;
  background-color: #f4f4f4;
  border: 0.5pt solid #ccc;
}
```

(was: `13.7pt`)

Leave all `.cover-page`/`.fits-page` height values, `page-break`/`break` rules, `:has()` selectors, `.keep-together`, `.series-recap`, etc. structurally as-is — only the type sizes, font family, and margin above change. (Height values like `8.3in` were tuned to avoid sub-pixel overflow at the old type size; flag these for re-check after rebuild since a smaller font may no longer need `overflow: hidden` clipping, or may need a different height.)

## 3. Update the folio in `scripts/build-booklet-proofs.mjs`

Change `FOLIO_TEMPLATE`'s font-size from `14.7pt` to `6.7pt`, keep `'Times New Roman',Times,serif` as-is (it already matches the master's serif folio by coincidence):

```js
const FOLIO_TEMPLATE = `
  <div style="width:100%;text-align:center;font-family:'Times New Roman',Times,serif;font-size:6.7pt;color:#000;padding:0 1.3in;box-sizing:border-box;">
    <span class="pageNumber"></span>
  </div>
`;
```

## 4. Critical — this will reflow every page of every booklet

Dropping from 14.7pt/line-height:1 to 11pt/line-height:1.5 changes the page density substantially. Expect roughly 60-80% more text to fit per page. This means:

- Every prior page-break fix in this project (booklet 1's page 2/23 fixes, booklet 4's extensions and 8-item length pass, booklet 5's three pagination bugs and section extensions) was tuned against the old, much larger type size and will land completely differently now.
- Page counts for all 4 sibling booklets will likely drop significantly.
- The illustration-placeholder rhythm ("one per 2-3 major sections") and cover/fits-page fixed heights (`8.3in`) need re-checking against the new density.

**Recommended sequence once this is applied:** rebuild all 5 proofs, then re-audit each of the 4 sibling booklets from scratch for pagination (not content — no text changes here) before doing anything else with them. Treat every previous "fix confirmed working" status in this project's briefs as provisional until re-verified at the new type size.

## Claude Code prompt

"Apply typography-correction-brief.md: create conformance-measurements.md at repo root with the measured values, update layout/style.css per section 2, update FOLIO_TEMPLATE in scripts/build-booklet-proofs.mjs per section 3, then rebuild all 5 proofs. Do not modify before-the-build-starts or any manuscript text."
