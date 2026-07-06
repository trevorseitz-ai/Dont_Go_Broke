# CSS Reconciliation Implementation Plan

## Purpose
This plan details how the shared booklet layout (`style.css` and the build script) will be reconciled with the locked Payhip-approved reference measurements. This layout correction must be implemented and verified *before* any booklet-specific structural compression occurs, as the expanded text column and increased density will inherently reduce page counts and dictate exactly how many art breaks fit on the remaining pages.

## Source Files
- `conformance-measurements.md`
- `standards/booklet-payhip-format-conformance-standard.md`
- `products/dont-go-broke/booklets/layout/style.css`
- `scripts/build-booklet-proofs.mjs`

## Measurement Summary
The binding Payhip layout values extracted from the locked standard are:
* **Page Size:** US Letter (8.5in × 11in)
* **Text Column Width:** ~418.3pt (5.81in)
* **Left Margin:** ~95.9pt (1.33in)
* **Right Margin:** ~97.8pt (1.35in)
* **Body Text:** 11pt size, 18pt leading (1.63 line-height)
* **Heading Sizing:** 16.5pt size (1.5x ratio)
* **Text Measure:** ~67 characters per line
* **Prose Density:** ~293 average words per page (375 max)
* **Internal Art:** 6 full-page internal illustrations at major conceptual breaks

## Current CSS Drift
The current `style.css` is exhibiting severe drift across nearly every layout metric:
* **Page Size:** Currently set to `A5` (5.8" x 8.3"), which physically breaks the US Letter standard.
* **Margins:** Currently set to `20mm 15mm` (top/bottom, left/right), leaving the text column extremely narrow.
* **Text Column Width:** Driven by the A5 size, the text column is constrained to roughly 4.6 inches, ruining the required characters-per-line measure.
* **Body Font Family:** Currently set to `"Georgia", serif`. The Payhip reference font family requires verification, but `Georgia` is a standard serif placeholder for now until explicitly changed.
* **Body Font Size:** `11pt` (Matches baseline).
* **Line Height:** Currently `1.5`, which drifts from the measured `1.63` (18pt) leading.
* **Paragraph Spacing:** Currently unstated beyond orphans/widows, relying on line-height and block margins.
* **Heading Sizing:** `h2` is currently `16pt`. Matches closely to `16.5pt`.
* **Title Page Hierarchy:** Needs tighter alignment on the front-matter spacing to prevent excessive whitespace.
* **Field Note Treatment:** Uses `blockquote` natively. Needs verification that it doesn't artificially balloon page counts.
* **Folio Behavior:** Handled natively by Puppeteer, but `style.css` currently does not explicitly style page numbers.

## Proposed CSS Changes
No edits have been made yet. The planned modifications to `products/dont-go-broke/booklets/layout/style.css` are:

1. **`@page` Size:**
   - **Current:** `size: A5; margin: 20mm 15mm;`
   - **Target:** `size: letter; margin: 1in 1.33in;` (adjusting top/bottom to 1in or keeping 20mm, but enforcing 1.33in horizontal margins).
   - **Reason:** To match US Letter geometry and restore the 5.81" text column width.

2. **`body` Line-Height:**
   - **Current:** `line-height: 1.5;`
   - **Target:** `line-height: 1.63;` (or exactly `18pt` on `11pt` font).
   - **Reason:** To match the measured leading of the Payhip standard.

3. **`h2` Heading Size:**
   - **Current:** `font-size: 16pt;`
   - **Target:** `font-size: 16.5pt;`
   - **Reason:** To match the exact 1.5x body-to-heading ratio.

## Build Script Considerations
An inspection of `scripts/build-booklet-proofs.mjs` revealed a critical conflict. The script explicitly enforces the A5 size and margins via Puppeteer's PDF rendering options:
```javascript
await page.pdf({ path: outPath, format: 'A5', printBackground: true, margin: { top: '20mm', bottom: '20mm', left: '15mm', right: '15mm' } });
```
**Proposed Script Change:**
Modify the Puppeteer `pdf()` arguments to:
`format: 'Letter'`
`margin: { top: '1in', bottom: '1in', left: '1.33in', right: '1.33in' }`
(or rely purely on the `@page` CSS rule by removing the Puppeteer overrides). This is necessary because Puppeteer's configuration overrides CSS `@page` declarations if they conflict.

## Temporary Audit File Handling
The untracked diagnostic scripts from the previous measurement pass (`count_sections.py` and `pdf_audit.py`) are still present in the working directory. They will be retained for now to run the required geometric verification pass once the CSS is updated. They should not be deleted during this planning phase.

## Verification Plan
Once the CSS and script edits are approved and implemented, they will be verified by:
1. Regenerating the proof PDFs for all 5 booklets.
2. Re-running the `pdf_audit.py` extraction script on the rendered layout.
3. Comparing the new metrics directly against `conformance-measurements.md`.
4. **Pass Criteria:** The average characters per line must return to 63–69 (ideal 66). Full prose pages must return to roughly 300–350 words (max 380). 

## Booklet Impact Forecast
Implementing these CSS changes will radically alter the physical layout of the existing expanded manuscripts. By moving from A5 to US Letter and expanding the text column, the text density per page will jump significantly. This will immediately slash the artificial 35-40 page counts down to approximately 18-24 text pages per booklet. This massive page reduction creates the precise architectural space necessary to insert the 6 full-page internal art breaks, cleanly targeting the 27-page limit before any manual structural markdown compression occurs.

## Approval Gate
- **CSS EDITS REQUIRE APPROVAL BEFORE EXECUTION.** 
- Booklet-specific structural compression begins **only after** CSS reconciliation is implemented, generated, and fully measured. 
- Later manuscript conformance must proceed strictly one booklet per pass.
