# Booklet Payhip Format Conformance Standard

## Purpose

This standard defines how Don’t Go Broke non-platform sibling booklets must conform to the locked Payhip-approved format established by:

`Before the Build Starts`

The approved Payhip PDF is the design, structure, typography, and rhythm master.

Booklets may differ in subject matter, examples, section count, and page count. They must match the locked reference in every rule defined here.

Where this standard is silent, match the locked reference exactly.

Where this standard and the locked reference conflict, this standard wins.

Where neither resolves the question, stop and ask. Do not improvise.

---

## Scope

This standard applies to the four sibling booklets that must conform to the locked Payhip-approved `Before the Build Starts` format:

- `before-the-idea-becomes-reality`
- `before-the-agent-starts`
- `before-you-trust-the-first-draft`
- `after-launch-the-meter-still-runs`

Do not modify any file in the `before-the-build-starts` folder during this conformance pass.

If that folder has drifted from the Payhip-approved state, flag it for human review.

Do not attempt the revert autonomously.

After the four sibling booklets are conformed, the `before-the-build-starts` folder should be reverted by explicit human-approved action to the version already used on Payhip.

---

## Locked Reference PDF

The locked reference PDF is:

`Dont-Go-Broke-publishing-standard.pdf`

In the Publishing Factory repo, this file may live at the repo root.

In the Don’t Go Broke repo, the preferred copied location is:

`reference/Dont-Go-Broke-publishing-standard.pdf`

If the locked reference PDF cannot be opened, halt.

Do not proceed from memory.

Do not proceed from model knowledge.

Do not proceed from the current repo manuscript.

Do not proceed from a regenerated proof.

The current repo version of `before-the-build-starts` is not the source of truth for this conformance pass.

The Payhip-approved PDF is the source of truth.

---

## Descriptive vs. Prescriptive Baseline

The following describe the approved master. They are reference facts, not rigid requirements for every sibling:

- 27 total pages
- 8 major numbered sections
- the master’s exact illustration subjects
- the master’s exact section titles

The following are requirements for all siblings:

- cover page with large illustration
- same trim size
- same typography family
- same body text measure
- same section heading convention
- same Field Note Opening treatment
- same Field Note Closing treatment
- numbered major sections using `Section X – Title`
- full-page illustration breaks at a consistent rhythm
- final readiness/checklist/receipt material near the end
- practical field-guide density
- no false section inflation
- no decorative formatting drift

---

## Core Conformance Principle

The ideal constraint is useful information.

Because “amount of information” cannot be measured perfectly, use editorial proxies.

A major section earns its place only if it gives the reader one or more of the following:

- a new lesson
- a new decision
- a new behavior
- a new risk to recognize
- a new way to stay in control

A section does not earn major-section status if it is only:

- a list
- a worksheet
- a receipt
- a prompt pack
- a diagnostic table
- a repeated warning
- a small tool
- a restated version of an earlier lesson

Preserve useful information.

Reduce false architecture.

---

## No Content Deletion Rule

Structural conformance does not authorize content deletion.

Demoted sections are merged or relocated, never deleted.

A demoted H2 may become:

- an H3 under the most relevant parent section
- a bold run-in tool label
- a checklist block
- a boxed worksheet
- a back matter item
- an appendix-style tool

No sentence of instructional content may be removed under this standard without explicit human approval.

Toolkits, prompt packs, checklists, receipts, worksheets, and templates are load-bearing content in this series.

Their heading level may be changed.

Their instructional substance may not be reduced without approval.

---

## Human Approval Gate for Structural Changes

Before restructuring any booklet, the agent must output a demotion/restructure plan.

The plan must list every H2 section and assign one of these statuses:

- keep as major section
- merge into another named section
- demote to H3
- convert to run-in label
- move to back matter
- flag for human decision

Each proposed change must include a one-line justification.

Wait for explicit human approval before editing any file.

If the plan is rejected, do not proceed with a modified plan silently.

Revise the plan and resubmit.

---

## Typeface Rule

All sibling booklets must match the locked reference’s body typeface.

Required body type:

`Helvetica Neue`

Allowed fallback:

`Arial`

No serif body text.

No light or thin body weights.

No faux bold.

Use regular body weight with true bold for emphasis and run-in labels.

Headings use the same family as body, bold.

No display fonts.

No decorative fonts.

---

## Monospace Rule

All code, terminal commands, file paths, and copy-paste prompts use one monospace family across all five booklets.

Preferred monospace:

`Menlo`

Allowed fallback:

`Courier New`

Monospace blocks should be set 1 point smaller than body text unless the locked reference shows otherwise.

If the locked reference contains no monospace example, use:

- light background tint, or
- 0.5pt rule box

Whichever treatment is chosen must be used identically across all sibling booklets.

---

## Page Geometry Rule

Trim size must match the locked reference exactly.

Do not assume US Letter.

Measure the locked PDF.

Before editing any booklet, record:

- trim width
- trim height
- body font size
- heading font size
- line height / leading
- top margin
- bottom margin
- left margin
- right margin
- text column width
- folio position
- folio size/style

These measurements must be saved in:

`conformance-measurements.md`

at the repo root of the active production repo.

Those measured values become the binding spec for the conformance pass.

---

## Body Text Measure Rule

The body text column must match the locked Payhip reference.

Target:

- 12–14 words per normal prose line
- 63–69 characters per body line
- ideal around 66 characters per body line

Hard failures:

- 8–10 words per line
- below 58 characters per body line
- above 72 characters per body line

A booklet failing these numbers on typical body pages does not proceed to final PDF preparation.

Do not use total manuscript words divided by total page count as the primary density test.

That number is distorted by:

- cover pages
- art pages
- partial pages
- checklist pages
- back matter pages

Use rendered PDF line geometry.

---

## Full Text Page Density Rule

The real density tests are:

- average characters per body line
- median characters per body line
- average body lines per full text page
- average words per full text page
- maximum words on a full text page

Target values based on the locked Payhip format:

- average body characters per line: approximately 63–69
- ideal body characters per line: approximately 66
- average body lines per full text page: approximately 28
- average words per full text page: approximately 300–350
- safe maximum words per full text page: approximately 380–400

A booklet may have lower total words/page because of illustrations, worksheets, or partial pages.

That is acceptable only if full prose pages match the locked reference density.

---

## Leading and Paragraph Rhythm Rule

Leading must match the locked reference’s measured value.

Expected range:

`1.4–1.5x body size`

Paragraph spacing must match the locked reference.

No oversized paragraph gaps.

No spacing inflation.

No artificial vertical padding to raise page count.

The page should feel:

- practical
- dense
- readable
- field-guide-like

It should not feel:

- airy
- picture-book-like
- cramped
- artificially compressed

---

## Heading Convention Rule

Major numbered sections must use the locked Payhip convention:

`Section 1 – The Mistake Happens Before the Tool Choice`

Required pattern:

`Section X – Section Title`

Rules:

- use the word `Section`
- use an Arabic numeral
- use an en dash `–`, not a hyphen
- use title case
- use same heading font family as body
- use bold
- match locked reference heading size
- prefer single-line headings

Do not use:

`1. Introduction: Why This Booklet Exists`

Do not use:

`## 1. Introduction`

Do not use:

`Chapter 1:`

If a heading wraps at conforming size, flag the title for human shortening rather than shrinking the heading below the reference relationship.

---

## H2 / H3 Rule

H2-level headings are for major structure only.

Use H2 for:

- Field Note Opening
- major numbered sections
- Field Note Closing
- major back matter only if truly needed

Do not usually use H2 for:

- diagrams
- checklists
- worksheets
- receipts
- prompt packs
- logs
- audits
- tests
- decision tables
- example sets
- small tools

Those should usually become:

- H3 subsections
- bold tool labels
- italic tool labels
- run-in bold labels
- checklist blocks
- boxed worksheet blocks
- back matter items

A tool can be visually prominent without becoming a major section.

---

## Section Count Rule

The locked reference has 8 major numbered sections.

That is a descriptive baseline, not a rigid requirement.

Do not add, delete, merge, or demote sections merely to reach 8.

A sibling may have more or fewer major sections if the information architecture earns it.

However, any booklet with more than 10 major numbered sections must undergo a structural review.

The review must determine whether the additional sections are true conceptual turns or promoted tools.

If they are promoted tools, they must be demoted or moved with approval.

---

## Run-In Label Rule

Definitional lists, stop signs, warning lists, and step lists should use the locked reference’s run-in bold pattern.

Preferred style:

`**The job statement.** The one or two sentences that define who the user is, what problem they face, and what the product does about it.`

Use this pattern for:

- definitions
- stop signs
- checklist explanations
- tool components
- decision criteria
- named parts of a framework
- short diagnostic items
- grouped examples
- receipt fields

Do not set these as standalone headline fragments unless the locked reference clearly does so.

Do not convert them into bulleted lists if the equivalent content should read as field-guide prose.

---

## Checklist Rule

Checklists should confirm thinking, not replace thinking.

A checklist usually belongs:

- after the lesson it confirms
- near the end of a major section
- in back matter
- as a final safety pass

Do not create a new major section for every checklist.

A checked box is not the lesson.

The clarity behind the check is the lesson.

---

## Tool Placement Rule

Tools should support the reading experience.

They should not drive the section architecture.

Tools belong:

- inside a major section as H3 material
- inside a major section as run-in labeled blocks
- inside a major section as checklist blocks
- in back matter
- near the concept they help apply

Tools should not be promoted to H2 unless the tool itself is the central conceptual lesson of that section.

---

## Fill-In Sentence Rule

Set-off prompt sentences and fill-in-the-blank lines must use one consistent treatment.

Examples:

`The problem is: __________.`

`The first useful version only needs to let the user __________.`

Rules:

- left-aligned
- never centered
- same point size as body unless locked reference indicates otherwise
- consistent indentation
- consistent spacing above and below
- no decorative overemphasis
- no inconsistent centering
- blank lines rendered as underscores of consistent length

If the locked reference has no exact equivalent, use a 0.25 inch indent and apply it identically everywhere.

---

## Field Note Rule

There are three allowed Field Note forms.

### 1. Field Note Opening

Use:

`Field Note Opening`

Styled like the locked reference.

Body text uses normal body style.

This appears as the first content after front matter.

### 2. Field Note Closing

Use:

`Field Note Closing`

Styled like the locked reference.

Body text uses normal body style.

This appears as the final main content before any approved back matter.

### 3. Inline Field Note Anecdote

Example:

`Field Note: The Danger of the Helpful Agent`

Inline field notes should use one consistent set-off treatment:

- bordered box, or
- light background tint

Use whichever treatment matches the locked reference’s set-off material.

If the locked reference has no equivalent, use a 0.5pt rule box.

Do not invent additional Field Note styles.

---

## Title Page Rule

Title page hierarchy must match the locked reference.

Hierarchy:

1. booklet title — largest, bold
2. series line — `Don't Go Broke in the Age of AI`, clearly smaller
3. subtitle / descriptor — smaller than the title and not competing with headings
4. large illustration

Subtitles must not be set at or near section-heading size.

Subtitles should not dominate the page.

If a subtitle wraps excessively at conforming size, flag it for human shortening.

---

## Illustration Rule

The locked reference uses full-page internal illustrations as rhythm breaks.

Sibling booklets should use the same system.

Required illustration types:

- one large cover/title illustration
- full-page internal illustration breaks
- optional final checklist or closing-adjacent illustration if it matches the locked rhythm

Internal illustration breaks should appear:

- at natural conceptual transitions
- on section boundaries
- approximately every 2–3 major sections, unless the manuscript rhythm requires a different placement

Do not place full-page art mid-section.

Do not use art to disguise weak structure.

Do not use art to pad page count.

Do not substitute off-style art.

If matching art is not available, insert a placeholder page:

`[ILLUSTRATION — style-match required]`

and flag for human action.

---

## Illustration Style Rule

All internal art must match the locked reference’s style.

Required direction:

- black-and-white
- hand-drawn editorial field-guide style
- practical, not decorative
- construction / tools / caution / blueprint / checklist / meter metaphors
- readable at page size
- no color
- no stock imagery
- no glossy AI 3D style
- no polished SaaS vector art
- no unrelated cartoon mascots
- no platform logos
- no screenshots unless explicitly approved

---

## Page Furniture Rule

Folio/page number treatment must match the locked reference.

Measure and match:

- position
- font
- size
- color
- whether folios appear on art pages
- whether folios appear on front matter
- whether folios appear on closing pages

No headers or footers beyond what the locked reference contains.

---

## Voice and Register Rule

Format conformance includes read-feel.

All sibling booklets should maintain:

- second person direct address
- contractions where natural
- plain language
- field-guide imperative tone
- short instructional sentences where appropriate
- protective, practical Don’t Go Broke stance

Do not make the prose:

- academic
- corporate
- startup-hype
- overly technical
- slangy
- salesy

This rule governs register only.

It does not authorize lesson rewrites, content changes, or example changes without approval.

---

## Compression Rule

Do not cut useful information just to reduce page count.

First compress structurally:

1. merge related H2 sections
2. demote tools to H3
3. convert labels to run-in bold
4. move reference tools to back matter
5. reduce repeated warnings
6. tighten examples
7. restore the locked Payhip text measure
8. then reassess page count

Cut only after structural compression fails and the human approves content reduction.

---

## Format Drift Warning Signs

A booklet has drifted from the locked Payhip format if:

- individual tools are promoted to H2 sections
- checklists behave like chapters
- section headings use `1. Title` instead of `Section X – Title`
- body text is serif
- the column is too narrow
- average body characters per line falls below 58
- normal prose lines average only 8–10 words
- pages feel airy instead of practical
- subtitles compete with section headings
- field notes use inconsistent treatments
- fill-in sentences are centered or inconsistently styled
- art placement is random
- art is being used as padding
- the booklet looks like a workbook/manual instead of a field guide

---

## Conformance Priority Order

When rules conflict, prioritize in this order:

1. Match the locked Payhip-approved visual system
2. Preserve useful information
3. Maintain correct body measure and typography
4. Maintain natural information architecture
5. Preserve Don’t Go Broke tone
6. Use internal art as rhythm breaks
7. Hit approximate page target

Do not sacrifice useful information only to hit a page number.

Do not sacrifice format unity only to keep every expanded section.

Do not sacrifice the locked visual system for convenience.

---

## Agent Execution Rules

Agents must follow this order:

### 1. Read first

Open and inspect the locked reference PDF.

If it cannot be opened, halt and report.

### 2. Measure second

Measure the locked PDF and create:

`conformance-measurements.md`

Record:

- trim size
- body font
- body font size
- line height
- paragraph spacing
- body text width
- margins
- heading size
- heading style
- folio position
- art page behavior
- set-off text treatment
- Field Note treatment

### 3. Plan third

For the target booklet, output a conformance plan.

The plan must include:

- current H2 list
- proposed major sections
- proposed H3 demotions
- proposed back matter moves
- heading convention fixes
- typography/layout fixes
- art placement assumptions
- risks
- flags for human decision

Wait for approval.

### 4. Execute one booklet at a time

Do not batch all four sibling booklets.

Finish one booklet and present the change receipt before starting the next.

### 5. Full replacement files only

Follow the existing Publishing Factory replacement-file rule.

Do not provide partial edits.

Do not provide merge instructions.

Do not require manual patching.

### 6. Never delete instructional content

When in doubt, preserve and flag.

### 7. Change receipt required

After each booklet, report:

- files touched
- rules applied
- sections kept
- sections demoted
- sections moved
- layout changes made
- art placeholders added
- flags raised
- anything still non-conforming and why

---

## Required Approval Gates

Before a sibling booklet may proceed to final PDF preparation, it must pass:

1. locked reference PDF access check
2. conformance measurements check
3. Payhip format conformance plan approval
4. major section architecture review
5. H2/H3 heading review
6. body typeface review
7. characters-per-line review
8. full text page density review
9. Field Note treatment review
10. fill-in sentence treatment review
11. internal art placement review
12. table test review against locked reference
13. final PDF QA

---

## Out of Scope for This Pass

This pass does not include:

- modifying `before-the-build-starts`
- changing product strategy
- changing facts
- changing lesson intent
- rewriting examples for taste
- cutting instructional content without approval
- cover copy
- Payhip listing text
- pricing
- Audience Factory work
- marketing copy
- storefront assets

---

## Standard Summary

The remaining four booklets should not be expanded by adding more H2 sections.

They should be conformed to the locked Payhip-approved format.

The target is:

- same useful information
- same visual system
- same typography
- same field-guide rhythm
- natural major sections
- tools inside sections
- full-page art at real transitions
- Payhip-like density

The approved format is the container.

The information architecture determines what belongs inside it.
