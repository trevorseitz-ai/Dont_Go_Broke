# Corrections Log

After any session where Trevor corrects output, append an entry below. Tag each as `one-off` or `missing-rule`. Missing-rule entries must also be applied to the relevant station's skill file the same day.

Format:

```
## YYYY-MM-DD — Station N — [one-off | missing-rule]

**Booklet:** <slug>
**What happened:** <brief description of the output problem>
**Correction:** <what was changed>
**Action:** <none (one-off) | added to skill file: <filename>>
```

---

## 2026-07-08 — Station 8 — one-off

**Booklet:** before-the-idea-becomes-reality
**What happened:** Page 2 was blank. The "Where This Booklet Fits" / disclaimer front-matter content existed in the pre-conformance template but was dropped (not relocated) when the cover was rebuilt to match the master's cover-only page style.
**Correction:** Restored as its own page between the cover and the Table of Contents (`.fits-page` in style.css, markup in `scripts/build-booklet-proofs.mjs`). Applies to all five booklets since the build script is shared.
**Action:** none (one-off) — content restoration, not a new rule.

## 2026-07-08 — Station 8 — one-off

**Booklet:** before-the-idea-becomes-reality
**What happened:** Major section headings render as two lines ("Section N" / title, via `<br>`), left-aligned by default. Trevor requested both lines be centered.
**Correction:** Added `text-align: center` to the shared `h2` rule in style.css.
**Action:** none (one-off) — **flagged:** the locked reference (`before-the-build-starts`) sets its section headings left-aligned, and uses a single continuous "Section N – Title" string (natural wrap) rather than a deliberate two-line `<br>` split. This booklet now diverges from the master on both points. Needs Trevor's confirmation on whether to (a) keep this divergence for all remaining siblings, or (b) match the master's left-aligned single-line convention instead.

## 2026-07-08 — Station 8 — missing-rule

**Booklet:** before-the-idea-becomes-reality
**What happened:** The Section 9 "Ask:" question box split across pages 23/24 mid-sentence. Boxed/blockquote content had no protection against splitting internally, and a label immediately followed by its box (e.g. "Ask:" + question) had no protection against separating across a page break.
**Correction:** Added a manual page break before "Ask:" on page 23 (per Trevor's specific instruction). Also added `page-break-inside: avoid` to `blockquote` and a `p.worksheet-item` pairing rule (`page-break-after: avoid` / `+ blockquote { page-break-before: avoid }`) in style.css so labeled boxes don't split or separate from their label anywhere in the pipeline.
**Action:** added to skill file — style.css hardening (shared across all siblings); no change needed to `booklet-payhip-format-conformance-standard-v2_1.md` since this is a build-pipeline robustness fix, not a visual-matching rule.

## 2026-07-08 — Station 8 — one-off

**Booklet:** before-the-idea-becomes-reality
**What happened:** All nine numbered items in the "Idea Readiness Audit Worksheet" (back matter) used a plain bold paragraph for the label, with no protection keeping the label on the same page as its answer box below it.
**Correction:** Converted each label to `<p class="worksheet-item">` and paired it with the new keep-together CSS rule above. Applied the same treatment to the "Next Step" label/box pair for consistency.
**Action:** none — same underlying CSS fix as the entry above.

## 2026-07-08 — Station 8 — one-off

**Booklet:** before-the-idea-becomes-reality
**What happened:** Found while fixing the above: the manuscript (`05-final-copy.md`) was truncated mid-edit at the "One-Page 'Not Yet' List" heading — the three "Not included yet" prompt blocks and the entire "Next Step" closing section (present in the last committed version) were missing from the working copy.
**Correction:** Restored the missing content from git HEAD, reformatted to match the current blockquote/spacing conventions already used elsewhere in this manuscript. No content was reworded or cut.
**Action:** none (one-off) — flagging in case this reflects a session that was cut off mid-task; worth checking other in-progress booklets for the same kind of truncation before their conformance pass runs.

## 2026-07-08 — Station 8 — missing-rule

**Booklet:** before-the-idea-becomes-reality
**What happened:** Root cause of the original "page 2 is blank" report found. `.cover-page` (and the new `.fits-page`) were set to `height: 8.5in` — exactly the full `@page` content-area height (11in page − 1.25in × 2 margins) — with `page-break-after: always`. In real Chrome/Puppeteer this overflows by a sub-pixel margin (font metrics/box-model rounding), spilling an empty sliver onto a second page. Confirmed by rebuilding on Trevor's machine: the fits-page content landed on document page 3, with a genuinely blank page 2 in between — the same symptom as the original bug report, just moved one page later, proving the page-2 fix in the prior entry only masked the real defect rather than fixing it.
**Correction:** Reduced both `.cover-page` and `.fits-page` to `height: 8.3in` and added `overflow: hidden` as a clipping safety net, in style.css.
**Action:** added to skill file — style.css hardening (shared across all siblings, so this protects every full-page flex-centered block, not just this booklet's cover). **Confirmed 2026-07-08:** rebuilt on Trevor's machine, page 2 now shows the fits-page content directly, no blank pages anywhere in the 42-page proof. Closed.

## 2026-07-08 — Station 8 — missing-rule

**Booklet:** before-you-trust-the-first-draft
**What happened:** Independently audited the proof PDF the Claude Code session generated for this booklet (its own change receipt didn't surface either issue). Found two real defects: (1) the same "label separated from its box across a page break" problem as booklet 1's page 23, this time in Back Matter — "Copy and paste this into your chat..." stranded on page 26 while its quoted prompt box started on page 27. The booklet-1 fix only covered `p.worksheet-item`, a manually-tagged class, so it didn't protect this untagged label+box pair. (2) Checklist items (`- [ ] text` in the manuscript) rendered with a bullet AND a checkbox stacked together — marked's GFM parser converts `- [ ]` into a native `<input type="checkbox">` and a task-list flag *before* the custom renderer runs, so the existing `item.text.startsWith('[ ]')` check in the renderer never matched and never fired; the default bullet was never suppressed.
**Correction:** (1) Added a general rule to style.css: `p:has(+ blockquote) { page-break-after: avoid }`, covering any label immediately before a box, everywhere, without needing a manual class. (2) Rewrote the custom `renderer.listitem`/`renderer.checkbox` in `scripts/build-booklet-proofs.mjs` to key off `item.task` (the real marked flag) instead of raw text matching, suppress the native checkbox input, and tag the `<li>` with `.checklist-item` so the existing CSS-drawn box (already fixed to a bordered square instead of a Unicode glyph) renders cleanly with no bullet. Verified visually (rendered to PNG) with WeasyPrint since Chrome/Puppeteer is unavailable in this sandbox.
**Action:** added to skill file — both fixes are in the shared style.css / build script, so they retroactively protect booklet 1 too and apply automatically to the two remaining siblings. Needs a rebuild + visual check on Trevor's machine to confirm in real Chrome.
**Minor flag (not fixed):** on the Back Matter page, the subheading "The 'What Did You Assume?' Interrogation" now lands alone at the bottom of its page with its content pushed to the next page. Cosmetic orphan-heading edge case, not a standard violation — left as-is.
