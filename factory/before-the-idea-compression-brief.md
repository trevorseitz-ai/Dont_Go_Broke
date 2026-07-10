# Before the Idea Becomes Reality — Compression Brief

## Diagnosis

All 8 flagged page-pairs (5/6, 10/11, 13/14, 20/21, 22/23, 25/26, 33/34, 40/41) share the same root cause: the manuscript's recurring "question → blockquote → short reflective paragraph" rhythm, combined with `orphans: 3` / `widows: 3` and generous paragraph/blockquote spacing, means a short 1-2 sentence closing paragraph regularly gets pushed onto its own near-empty page rather than staying on the fuller page above it. This isn't a bug in the earlier fixes — it's just that the current spacing rules leave less headroom than these borderline paragraphs need.

I tested this locally (rendered the full manuscript through the same CSS pipeline in a sandbox, verified page-by-page). No text was changed in any test — only spacing values.

**Verified result: tightening 5 CSS values takes the booklet from 41 pages to 36 pages**, with no single-line orphans or ugly stray fragments introduced (I checked — an even more aggressive version briefly produced a 7-word orphan page and was rejected in favor of this safer version).

## 1. Update `products/dont-go-broke/booklets/layout/style.css`

Change the `p` rule from:

```css
p {
  orphans: 3;
  widows: 3;
  margin-top: 0.75em;
  margin-bottom: 0;
}
```

to:

```css
p {
  orphans: 2;
  widows: 2;
  margin-top: 0.5em;
  margin-bottom: 0;
}
```

Change the `blockquote` rule's margin/padding from:

```css
  margin: 0.75em 0;
  padding: 0.75em 1em 2em 1em;
```

to:

```css
  margin: 0.4em 0;
  padding: 0.4em 1em 1.5em 1em;
```

(This still leaves 1.5em — about one and a half lines — of blank space at the bottom of every fill-in box for handwriting; it was 2em before. Top padding/margin only tightened, since that space doesn't serve a writing purpose.)

These two changes apply to `style.css`, so they'll affect all 5 booklets identically — consistent with how every other format rule in this pipeline has been applied. Recommend rebuilding all 5 proofs after this change, not just booklet 1, and doing a quick page-count sanity check on the other 4 (should also shrink slightly, which is a good thing, not a regression).

## 2. Fix the "next booklet" back page

Right now this booklet's build entry has `skipAutoNextStep: true`, because the manuscript's own back matter ("Next Step," near the very end) already contains a manual mention of the next booklet — including a literal placeholder line `[NEXT BOOKLET COVER — insert when available]` sitting inside a plain text blockquote, not an actual styled cover page.

**In the manuscript** (`before-the-idea-becomes-reality/05-final-copy.md`, "Next Step" subsection near the end), change:

```markdown
> *Before the Build Starts*
>
> [NEXT BOOKLET COVER — insert when available]
```

to:

```markdown
> *Before the Build Starts*
```

(Just removing the bracketed placeholder line — it's a production marker, not instructional content, and it's being replaced by an actual styled page below, not deleted outright.)

**In `scripts/build-booklet-proofs.mjs`**, change this booklet's entry from:

```js
{ slug: "before-the-idea-becomes-reality", title: "Before the Idea Becomes Reality", sequence: "1 of 5", skipAutoNextStep: true },
```

to:

```js
{ slug: "before-the-idea-becomes-reality", title: "Before the Idea Becomes Reality", sequence: "1 of 5" },
```

This lets the script's normal logic append a proper styled `.next-booklet-cover` page at the very end, matching how booklets 2 and 3 already get their next-booklet page — so there's exactly one next-booklet mention (inline in the back matter, unchanged) plus one dedicated cover-style page (new), instead of the current bare bracketed text with no actual page.

## 3. Small cleanup while touching this file

`.illustration-placeholder` and `.next-booklet-cover` in `style.css` still have `font-size: 14.7pt` left over from before the typography correction (should be scaled to the new 11pt body). Change both to `font-size: 12pt` for consistency with the rest of the updated type scale.

## Claude Code prompt

"Apply before-the-idea-compression-brief.md: update the `p` and `blockquote` rules in layout/style.css per section 1, fix the stale 14.7pt font-sizes per section 3, remove the bracketed placeholder line from the Next Step blockquote in before-the-idea-becomes-reality's manuscript per section 2, and remove `skipAutoNextStep: true` from that booklet's entry in scripts/build-booklet-proofs.mjs. Then rebuild all 5 proofs."
