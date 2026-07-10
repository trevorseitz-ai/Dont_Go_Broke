# Conformance Measurements

Measured from the locked reference PDF:
`/reference/before-the-build-starts-payhip-approved.pdf`

Measured: 2026-07-07. Method: PyPDF2 extraction from embedded PDF data.

---

## Trim Size

**8.5 × 11 in (US Letter)**
612 × 792 pts. All 27 pages are this size — no bleed variation.

---

## Page Count (reference only — not a requirement for siblings)

27 pages total.

---

## Typeface

| Role | Face |
|---|---|
| Body | Times Roman |
| Body bold | Times Roman Bold (inferred) |
| Monospace | Menlo-Regular |
| Monospace bold | Menlo-Bold |

No Helvetica Neue, Arial, or other sans-serif faces are embedded.

---

## Body Point Size

**~14.7pt** — dominant size across body pages (appeared 3261× on sampled pages 3–6).

---

## Heading Size

**~22pt** — second-most-common size (appeared 69× on sampled pages 3–6), consistent with major section headings.

Ratio: 22 / 14.7 = **1.49×** body (the standard previously stated 1.6–1.8×; the standard has been updated to reflect the measured value).

---

## Margins

**90 pts = 1.25 in = 31.75 mm — all four sides (equal margins).**

Measured 2026-07-08 from the page clipping path in the raw PDF content stream. The outer coordinate transform `[0.24, 0, 0, -0.24, 0, 792]` applied to the clip rectangle `375 375 1800 2550` yields exactly 90 pts on every side. Verified across multiple body pages — all identical.

Text area: 432 × 612 pts (6.0 × 8.5 in) within the US Letter page.

---

## Line Spacing / Leading

Line spacing equals the line height — no additional leading above or below. The `line-height` value is the full baseline-to-baseline distance; no extra paragraph-level space is added between lines.

---

## Folio (Page Number)

All pages are counted. Cover is page 1 and carries **no folio**. Numbering begins at page 2 and runs through page 27. The displayed folio number equals the document page number (no offset). No folio suppression on any other page type.

---

## Notes

- The build script (`scripts/build-booklet-proofs.mjs`) generates A5 format. Must be updated to US Letter before any conformant proof generation.
- Margins, leading, and folio measurements require manual PDF inspection or a tool capable of extracting glyph positions (PyPDF2 visitor pattern or pdfminer).
