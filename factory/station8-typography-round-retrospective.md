# Station 8 — Typography & Length Round: Retrospective

**Scope of this round:** brought the shared typography (font, size, margins) into conformance with the locked reference across all 5 booklets, then did a section-length and pagination pass on each one individually, plus one content-architecture change (a subsection promoted to a full section in `before-the-build-starts`).

## Wins

**Found a real, unnoticed conformance gap.** The shared `style.css` had drifted to Times New Roman at 14.7pt, while the actual Payhip-approved master uses an 11pt sans-serif body. This wasn't a hunch — it came from measuring the master PDF's embedded font data directly (`pdfplumber` character-level inspection), the same way the conformance standard requires. Fixing it meant reflowing every booklet, but it closed a gap that would otherwise have shipped.

**A local verification sandbox paid for itself repeatedly.** Copying each manuscript + `style.css` into a scratch folder and rendering with WeasyPrint (a stand-in for the Puppeteer/Chrome pipeline, which isn't reachable from this sandbox) meant every CSS tweak and every "will this fit on one page" question got tested *before* it went into a brief, not after a round-trip through a real rebuild. Caught several fixes that looked right on paper but weren't — see "Struggles" below.

**Found and removed several truly obsolete leftovers.** Multiple booklets had manual `<div class="page-break">` inserts and forced list-spacing left over from the old, much larger font size — at 11pt they were just forcing unnecessary blank pages. Found and removed real instances in `before-the-idea-becomes-reality` (Section 9), `before-the-agent-starts` (back matter checklist), and `before-you-trust-the-first-draft` (back matter, partially — see below).

**Not all "identical-looking" fixes were actually identical.** In `before-you-trust-the-first-draft`, three manual page-breaks in back matter looked like the same leftover pattern at a glance. Testing each one individually (rather than batch-removing all three, which was the faster-looking option) showed only one was actually safe: removing a different one caused a real regression — an orphaned heading with its content pushed to the next page. Batch-fixing would have shipped that bug.

**Held the advisor/verifier line for the whole round.** After the early boundary-crossing correction, every fix in this round — no exceptions — was measured, tested locally, written into a brief file, and handed off with an explicit Claude Code prompt. Nothing was edited directly in the repo.

**Content-architecture decisions were tested against the actual standard, not vibes.** When asked whether a subsection should be promoted to a full section, five candidates were evaluated against the conformance standard's own Core Principle (new lesson/decision/behavior vs. restated example) rather than just picking based on length. Only one of five actually qualified.

## Struggles

**The boundary-crossing itself.** Early in this project, direct edits were made to the same repo files Claude Code was also editing, with no coordination between the two. This was the most significant process error of the whole engagement — caught and corrected by Trevor, not by self-catching it first.

**Word-to-page estimates were miscalibrated at first.** The first big content-addition round (`before-the-agent-starts`, 9 additions) used an estimate of roughly 320 words per page. Every single addition landed short of its target — the real ratio was closer to half that. Needed a second "top-up" round to close the gap. Recalibrated for every round after, but it cost an extra cycle.

**An earlier fix (before this round) was based on a wrong technical assumption.** The original cover-folio suppression fix relied on a `<script>` tag inside a Puppeteer footer template — footer/header templates don't execute scripts at all, only a handful of static placeholders. Trevor's report that "I still see the page number on the cover" is what surfaced this; the actual fix (drawing a white rectangle over the folio with `pdf-lib` post-processing) came after.

**A page-numbering mismatch nearly caused wasted work.** When auditing `before-the-agent-starts`, Trevor's notes ("compress pages 11/12," "nothing after Section 18") didn't match what was actually in the file being measured. Rather than guess which interpretation was right, the mismatch was flagged and Trevor was asked to re-upload — which revealed he'd been looking at a different or older copy. Asking first avoided drafting fixes for the wrong problem.

**Scope estimate for "add 10 pages" landed short.** The `before-the-build-starts` expansion (5 section extensions + new back matter) was estimated to add roughly 8-9 pages; the real result was +6. Trevor accepted this as within range, but it's the same underlying miscalibration as the word-to-page issue above, just at a larger scale.

**A predicted "this will fix itself" turned out wrong.** Assumed that removing a stray duplicate title page in `before-the-build-starts` would, as a side effect, also resolve an unrelated sentence-splitting bug further down the document (since everything would reflow up a page). It didn't. Needed to go back, measure the actual page fill again, and find the real cause: a long paragraph getting caught by a keep-together CSS rule meant for short labels, which was resolved by inserting a short transition sentence rather than touching the shared rule.

## Takeaways for next time

- Measure before estimating word counts for a target page-fill; when in doubt, estimate high rather than low, since a top-up round costs more than a small overshoot.
- Test "obviously the same" fixes individually before batching them — the back-matter page-break case in booklet 4 is proof that visual similarity isn't proof of identical behavior.
- When a fix depends on how a page will reflow, don't predict — re-measure after the dependency change lands, even when the prediction seems obvious.
- Flag any mismatch between what's being described and what's actually in a file immediately, rather than guessing which one is right.
