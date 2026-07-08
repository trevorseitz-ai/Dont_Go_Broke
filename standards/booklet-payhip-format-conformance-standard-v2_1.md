> Amended 2026-07-07 per Factory v2 Rulings Log (see /factory/station-map-v2.md).

# Booklet Payhip Format Conformance Standard — v2 (Tightened)

## Purpose

This standard defines how the remaining Don't Go Broke non-platform booklets must conform to the locked Payhip-approved format established by `Before the Build Starts`.

Booklets may differ in content, examples, section count, and page count. They must be identical in every rule defined below. **Where this document is silent, match the locked reference exactly. Where this document and the locked reference conflict, this document wins. Where neither resolves a question, stop and ask — do not improvise.**

This standard applies to the remaining sibling booklets:

- `before-the-idea-becomes-reality`
- `before-the-agent-starts`
- `before-you-trust-the-first-draft`
- `after-launch-the-meter-still-runs`

Do not modify any file in the `before-the-build-starts` folder during this conformance pass. If that folder has drifted from the Payhip-approved state, flag it for human review. Do not attempt the revert autonomously.

---

## Locked Reference

The locked master reference is the Payhip-approved PDF stored in this repo at:

```text
/reference/before-the-build-starts-payhip-approved.pdf
```

**Path resolved 2026-07-07.** Add the approved PDF to `/reference/` under this exact filename before any agent conformance run. The halt condition below stands until the file is present.

**If this file cannot be opened, halt. Do not proceed from memory, training data, or the repo manuscript files.** The repo version of `before-the-build-starts` is NOT the source of truth for this pass.

### Descriptive vs. Prescriptive

The following describe the master and are **NOT requirements** for siblings:

- 27 total pages
- 8 major numbered sections
- The master's specific illustration subjects

The following are **requirements** for all siblings:

- Cover page with large illustration
- Field Note Opening as the first content after front matter
- Numbered major sections using the heading convention below
- Full-page illustration breaks at the rhythm defined below
- Final readiness-checklist material as the last major section before closing
- Field Note Closing as the final content before back matter
- Dense practical field-guide page texture as defined by the measurable rules below

**Section count is free.** A sibling may have 6 sections or 19. Do not add, delete, merge, or demote sections to approach the master's count of 8. Structural changes are governed only by the Core Principle below, and only through its approval gate.

---

## Core Principle

A major section earns its place only if it gives the reader one or more of: a new lesson, a new decision, a new behavior, a new risk to recognize, or a new way to stay in control.

A section does not earn major-section status if it is only: a list, a worksheet, a receipt, a prompt pack, a diagnostic table, a repeated warning, a small tool, or a restated version of an earlier lesson.

**Demotion rules:**

1. Demoted sections are **merged or relocated, never deleted.** A demoted section becomes a subsection of the most relevant parent section, or moves to back matter as a tool/appendix. No sentence of instructional content may be removed under this standard. Content cuts are an editorial decision reserved for the human.
2. **Approval gate:** Before restructuring any booklet, output a demotion plan listing every section, its proposed status (keep as major / merge into X / move to back matter), and a one-line justification. **Wait for explicit human approval before touching any file.** If the plan is not approved, do not proceed with a modified plan — revise and resubmit.
3. Toolkits, prompt packs, checklists, and templates are load-bearing content in this series, not filler. Demoting their *heading level* is permitted with approval; reducing their *content* is not.

---

## Typeface Rule

- **Body:** Helvetica Neue, regular weight. Fallback: Arial. No other substitutions. No serif body text. No light or thin weights. True bold only for emphasis and run-in labels — no faux bold, no semibold.
- **Headings:** Same family as body, bold. No display or decorative faces.
- **Monospace:** All code, terminal commands, file paths, and copy-paste prompts use a single monospace face throughout all five booklets: Menlo. Fallback: Courier New. Monospace blocks are set 1pt smaller than body text, with a light background tint or 0.5pt rule box — match whichever treatment appears in the locked reference; if the reference contains no monospace, use the tint, and use it identically in every sibling.

**Font confirmation pending 2026-07-07.** Verify Helvetica Neue and Menlo against the embedded fonts in the approved PDF before the first agent conformance run. If the PDF uses different faces, update the body and monospace entries above to match.

---

## Page Geometry Rule

- **Trim size:** must match the locked reference exactly. Measure it from the PDF; do not assume US Letter.
- **Body point size:** must match the locked reference exactly (measure; expected range 10–11pt). All siblings use the same value.
- **Margins:** measure all four margins from a standard body page of the locked reference and match within ±0.1 inch. Do not interpret "comfortable white space" — there is nothing to interpret; copy the measured values.

---

## Body Text Measure Rule

With geometry locked above, verify the result:

- 12–14 words per normal prose line
- 63–69 characters per line; ideal 66

**Hard failures:** 8–10 words per line (column too narrow); below 58 characters (too airy); above 72 characters (too wide or type too small). A booklet failing these numbers on typical body pages does not ship, regardless of any other conformance.

---

## Leading and Paragraph Rhythm Rule

- Leading: 1.4–1.5x body size. Match the locked reference's measured value; apply identically in all siblings.
- Paragraph spacing: match the locked reference's measured value. No oversized gaps. No spacing inflation to raise page count.

---

## Heading Convention Rule

Major sections:

```text
Section 1 – The Mistake Happens Before the Tool Choice
```

- The word "Section", space, Arabic numeral, space, en dash (–, not hyphen), space, title in title case.
- Heading size: match the locked reference (approximately 1.6–1.8x body); bold; prefer a single line — if a title wraps at conforming size, flag the title for human shortening rather than shrinking the heading.
- No other major-section formats. Convert any "1. Title" or "Chapter 1:" style headings on sight.
- Subsection headings: bold, body size or slightly larger, no numbering, matching the locked reference's subsection treatment.

---

## Run-In Label Rule

Definitional lists, stop signs, warning lists, and step lists use the master's run-in pattern:

**Bold label ending in a period.** Followed immediately by body-weight explanation in the same paragraph.

Do not set these as standalone headline fragments, and do not convert them to bulleted lists if the master sets the equivalent content as run-in paragraphs.

---

## Fill-In Sentence Rule

Set-off prompt sentences (e.g., `The problem is: __________.`) receive one treatment across all booklets:

- Left-aligned, never centered.
- Indented from the body margin by one consistent value taken from the locked reference's set-off text treatment (if the reference has none, use 0.25 inch and apply it identically everywhere).
- Same point size as body, monospace face, consistent space above and below.
- Blank lines rendered as underscores of consistent length.

---

## Field Note Rule

Three Field Note forms exist in this series; each has exactly one treatment:

1. **Field Note Opening / Field Note Closing:** heading styled as a major-section heading without a number ("Field Note Opening"), body text in normal body style. Match the locked reference exactly.
2. **Inline Field Note anecdotes** (boxed stories inside sections, e.g. "Field Note: The Danger of the Helpful Agent"): set in a bordered box (0.5pt rule) or background tint — match whichever the locked reference uses for set-off material; if the reference has neither, use the 0.5pt rule box. Bold run-in title, body text inside. Identical treatment in every sibling that uses them.
3. Do not invent additional Field Note styles.

---

## Illustration Rule

- Cover: one large illustration, matching the master's cover composition style.
- Interior: full-page illustration breaks at a rhythm of approximately one per 2–3 major sections, placed on section boundaries only — never mid-section.
- Style: must match the master's illustration style. If new art cannot be produced in matching style, insert a placeholder page reading `[ILLUSTRATION — style-match required]` and flag for human action. Do not substitute off-style art, stock imagery, or AI-generated art in a different style to fill the slot.

---

## Title Page Rule

Hierarchy on the interior title page, in descending size:

1. Booklet title (largest, bold)
2. Series line: *Don't Go Broke in the Age of AI* (italic, clearly smaller than title)
3. Subtitle/descriptor (smaller than the series line or equal to it, regular weight or italic, maximum two lines at conforming size — flag longer subtitles for human shortening)

Every sibling carries the series line. No sibling's subtitle may be set at or near section-heading size.

---

## Voice and Register Rule

Format conformance includes read-feel. All siblings:

- Second person, direct address.
- Contractions permitted and preferred where natural (match the master's register; do not strip contractions into formal cadence, and do not inject slang).
- Field-guide imperative tone: short sentences for instructions, plain language, no academic hedging.
- This rule governs *register only*. It does not authorize rewriting content, examples, or lesson structure. Sentence-level register edits beyond mechanical fixes require the same approval gate as structural changes.

---

## Page Furniture Rule

- Folio (page number) on every body page, positioned and styled exactly as the locked reference.
- Front matter, back matter, and full-page illustration pages follow the locked reference's folio behavior (measure whether the master suppresses folios there and copy it).
- No headers or footers beyond what the locked reference contains.

---

## Agent Execution Rules

1. **Read first:** Open and inspect the locked reference PDF before editing anything. If it cannot be opened, halt and report.
2. **Measure second:** Record the measured values (trim, body size, leading, margins, heading size, folio position) in a `conformance-measurements.md` file at repo root before making changes. These measured values become the binding spec.
3. **Plan third:** Output the demotion/restructure plan (if any) and a per-booklet change summary. Wait for approval.
4. **One booklet per pass.** Complete and present one booklet for review before starting the next. Do not batch all four.
5. **Full replacement files, not diffs**, per the existing Publishing Factory pipeline rules.
6. **Never delete instructional content.** When in doubt between preserving and reducing, preserve and flag.
7. **Change receipt:** After each booklet, list every file touched, every rule applied, every flag raised, and anything left non-conforming with the reason.

---

## Out of Scope for This Pass

- Content editing, fact changes, example changes, or lesson rewrites
- Any modification to `before-the-build-starts`
- Cover copy, pricing, Payhip listing text
- Reading-level adjustments
