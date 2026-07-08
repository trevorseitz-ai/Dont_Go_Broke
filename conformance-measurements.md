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

Not yet measured. Requires visual inspection or image-based extraction of the locked reference PDF. Measure all four margins from a standard body page and record here before any booklet layout pass.

---

## Leading

Not yet measured. Requires visual/image-based extraction. Target: match the locked reference exactly per the conformance standard.

---

## Folio (Page Number)

Not yet measured. Inspect the locked reference for position, size, and suppression behavior on cover/illustration pages.

---

## Notes

- The build script (`scripts/build-booklet-proofs.mjs`) generates A5 format. Must be updated to US Letter before any conformant proof generation.
- Margins, leading, and folio measurements require manual PDF inspection or a tool capable of extracting glyph positions (PyPDF2 visitor pattern or pdfminer).
