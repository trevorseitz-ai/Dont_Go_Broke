# Brief: Transfer Illustrations into Before the Build Starts

## What's already there

The 7 real illustrations are already sitting in the repo at
`products/dont-go-broke/booklets/before-the-build-starts/assets/`:

- `asset-01-unclear-blueprint-construction-site.png` — cover
- `asset-02-wrong-order-vs-right-order.png`
- `asset-03-blueprint-stack-diagram.png`
- `asset-04-user-path-process-diagram.png`
- `asset-05-ai-guessing-zone-diagram.png`
- `asset-06-build-receipt-card.png`
- `asset-07-pre-build-readiness-checklist.png`

I pulled the same 7 images directly out of the locked master (`/reference/before-the-build-starts-payhip-approved.pdf`, both the repo copy and the one Trevor uploaded) and confirmed these asset files are pixel-identical to what's embedded in the approved PDF. So no re-extraction is needed — these are the real, final, Payhip-approved art. The task is wiring them into the current (post-edit) manuscript correctly, not sourcing them.

There's also an existing `layout/asset-placement-recommendation.md` in that folder. **Treat it as superseded** — it gives vague, generic placement guidance ("near Section 1", "towards the end") that doesn't match where these images actually sit in the shipped master, and it incorrectly labels asset-06 and asset-07 as "optional... can be omitted if space is tight." Both are required: they appear in every copy of the approved PDF. The mapping below is measured directly from that PDF, page by page, not inferred.

## Where each illustration actually sits in the master, and where it goes now

The master has 8 sections; this booklet's manuscript now has 9 (Section 5, "Review the Output Against the Blueprint," was promoted from a subsection this round, pushing the old Sections 5–8 to 6–9). Mapping each image to the section boundary it followed in the master, then translating to current section numbers:

| Image | Sat between (master) | Sits between (current manuscript) |
|---|---|---|
| asset-01 | — (cover) | Cover |
| asset-02 | Section 1 → Section 2 | Section 1 → Section 2 (unchanged) |
| asset-03 | Section 4 → Section 5 (old, "Map the User Journey") | Section 4 → **Section 5** (new, "Review the Output Against the Blueprint") |
| asset-04 | Section 5 (old) → Section 6 (old, "Agent Boundaries") | Section 6 (new, "Map the User Journey") → Section 7 |
| asset-05 | Section 6 (old) → Section 7 (old, "Prepare the Handoff") | Section 7 → Section 8 |
| asset-06 | Section 7 (old) → Section 8 (old, "Final Pre-Build Review") | Section 8 → Section 9 |
| asset-07 | Section 8 (old) → Field Note Closing | Section 9 → Field Note Closing |

All 7 still fit content-wise. Worth flagging directly: asset-03 (Blueprint Stack Diagram) now lands right before the new Section 5, which is literally about reviewing output *against the blueprint* — arguably a better fit than its original position. Nothing needs replacing.

One real gap: nothing sits at the new Section 5 → Section 6 boundary, because Section 5 didn't exist when these illustrations were placed. Not a defect — just an option. If you want tighter illustration rhythm you could commission an 8th image for that boundary later; I'd treat that as a separate, optional decision rather than something blocking this transfer.

## Exact manuscript insertion points

`products/dont-go-broke/booklets/before-the-build-starts/05-final-copy.md` currently ends every section with a bare `---` right before the next `## Section N` heading. Insert each image immediately **after that `---`, before the heading** — same relative position the illustrations occupy in the master, and it matches how illustrations sit in the other 4 booklets (content → illustration → heading). I tested this ordering in a local render; it produces one clean image-only page per illustration with no extra blank pages (see Verification below). Six insertion points, identified by the heading each one precedes:

1. Before `## Section 2 – Define the Job Before Defining the App` → asset-02
2. Before `## Section 5 – Review the Output Against the Blueprint` → asset-03
3. Before `## Section 7 – Define Agent Boundaries Before the Agent Starts` → asset-04
4. Before `## Section 8 – Prepare the Handoff` → asset-05
5. Before `## Section 9 – The Final Pre-Build Review` → asset-06
6. Before `## Field Note Closing` → asset-07

Plus the cover: asset-01 replaces the `[COVER ILLUSTRATION — style-match required]` placeholder text, cover for this booklet only.

## Technical note: these need to be real embedded images, not text placeholders

`build-booklet-proofs.mjs` currently has no image-embedding path at all — the cover is a literal text placeholder (`<div class="cover-illustration">[COVER ILLUSTRATION — style-match required]</div>`), and the other 4 booklets' `.illustration-placeholder` divs are plain text too, because no real art exists for them yet. For this booklet we have real art, so it needs actual `<img>` output.

Important constraint: the build script renders via `page.setContent(html, ...)` with no base URL, so a relative `<img src="assets/asset-02....png">` won't resolve — Puppeteer has no file-system context to find it. Base64 data-URI embedding is the reliable approach (there's already a precedent for this exact technique in `scripts/build-pamphlets.mjs`, `buildImageCover()`, for a different product line — same idea, different pipeline).

Suggested approach, reusable when the other 4 booklets get real art later:
- In the markdown, mark each slot with a simple comment, e.g. `<!-- ILLUSTRATION: asset-02-wrong-order-vs-right-order.png -->`, in place of the text placeholder divs, at each of the 6 points above (and swap the cover placeholder similarly, e.g. `<!-- COVER: asset-01-....png -->`).
- In `build-booklet-proofs.mjs`, before/after the `marked.parse()` step, regex-replace each marker with a base64-embedded `<img>` tag read from that booklet's own `assets/` folder, wrapped in the existing `.illustration-placeholder` div (interior) or swapped into `.cover-illustration` (cover). If a referenced file doesn't exist in that booklet's `assets/` folder, fall back to the current text-placeholder behavior — this keeps booklets 1/3/4/5 working unchanged until their art exists.
- Suggested image CSS: `width:100%; height:auto; max-height:8in; object-fit:contain;` inside the existing placeholder div — confirmed below to render full-page with no cropping or stretching.

## Verification (done locally, not yet in the real pipeline)

I mirrored the manuscript + style.css + the actual 7 asset PNGs in a local sandbox, applied the marker substitution and base64 embedding described above, and rendered with WeasyPrint (stand-in for Puppeteer/Chrome, which isn't reachable from this sandbox):

- All 6 interior illustrations plus the cover landed exactly at the intended section boundaries, each alone on its own page — no bleed onto adjacent text, no extra blank pages introduced by the `page-break-before/after: always` pair on `.illustration-placeholder` colliding with the `page-break-before: always` on the next `h2`.
- Visually spot-checked two of the rendered pages (Wrong Order/Right Order, and the Pre-Build Readiness Checklist) — both display full-page, correctly proportioned, no cropping or stretching. The images are slightly wider than the content box's aspect ratio, so there's a bit of even vertical whitespace top and bottom — expected and fine, not a defect.

This confirms the *mechanism* works. It does not confirm the real build script's output will look identical, because of the next item.

## Confirmed bug, fix this in the same pass: margin mismatch

`build-booklet-proofs.mjs`'s `page.pdf()` call hardcodes `margin: { top: '1.25in', bottom: '1.25in', left: '1.25in', right: '1.25in' }`. `style.css`'s `@page` rule was corrected to `1.3in` during this round's typography fix, to match the measured locked master — but this file's `page.pdf()` margin was never updated to match. (One more piece of evidence this is an oversight rather than intentional: the same file's `FOLIO_TEMPLATE` footer div already has `padding: 0 1.3in`, so whoever did the typography fix touched this file and updated the folio padding, but missed the margin object a few lines below it.)

I checked Puppeteer's own docs to confirm which one actually wins: `margin` in `PDFOptions` is a standalone PDF-generation setting sent straight to Chrome's print-to-PDF backend, independent of page CSS. The only option that gives CSS any say over page geometry is `preferCSSPageSize`, and it only affects page **size** (width/height/format), not margins — and it isn't set here anyway (defaults to `false`). There's no mechanism by which `style.css`'s `@page { margin: 1.3in }` can override or blend with the hardcoded `1.25in`. The hardcoded value wins outright.

**Conclusion:** every proof this script has produced since the typography fix has very likely been rendering at 1.25in margins, not the 1.3in the standard calls for. This is a real, currently-shipping conformance gap across all 5 booklets, not a hypothetical.

**Fix, do this now rather than later:**
1. In `build-booklet-proofs.mjs`, change the `margin` object in `page.pdf()` from `1.25in` to `1.3in` on all four sides, matching `style.css` and the folio padding.
2. Rebuild one booklet and confirm directly against the output PDF (e.g. measure the x-position of the first line of body text with pdfplumber) that body text now starts at 1.3in from the trim edge, not 1.25in.
3. This shrinks the usable content area slightly on every page, so re-run the page-count check across all 5 booklets afterward, the same way the original typography fix was reverified — expect small increases, likely a page or less per booklet, not a repeat of this round's larger compression/expansion work.

## Suggested order of work

1. Fix the margin mismatch above first — it's a one-line change with a two-minute verification, and it affects the geometry every other measurement in this round was based on.
2. Add the marker-substitution logic to `build-booklet-proofs.mjs` for illustrations, with the safe fallback described above.
3. Swap the cover placeholder and the 6 interior placeholders in `before-the-build-starts/05-final-copy.md` to the marker comments, at the exact points listed above.
4. Rebuild this booklet (now with both fixes in) and produce a proof for review — this is the "does it still work" checkpoint, and it'll also confirm the margin fix landed correctly.
5. Re-check page counts on the other 4 booklets for the margin fix's effect.
6. Once all of that's confirmed, illustration work for the other 4 booklets (real art doesn't exist yet for those) can reuse the same marker/asset-folder mechanism — that's Station 5 work, separate from this transfer.
