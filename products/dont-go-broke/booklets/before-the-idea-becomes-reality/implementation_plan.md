# Implementation Plan

## Publication Information

**Title**
Before the Idea Becomes Reality

**Publication Type**
Booklet

**Series**
Don’t Go Broke / AI Survival Manuals

**Version**
v1.0

**Production Status**
Ready for Publishing Factory production planning

**Source Files Reviewed**

* `publication-concept.md` 
* `publication-brief.md` 

---

## Purpose of This Plan

This implementation plan defines how Publishing Factory should produce the Don’t Go Broke booklet *Before the Idea Becomes Reality* from approved source materials.

This plan does not create final booklet copy.

This plan establishes:

* the recommended folder path
* the required production files
* the production sequence
* approval gates
* risk and escalation points
* boundaries that must be preserved throughout production

---

## Recommended Folder Path

The recommended product folder path is:

```text
products/dont-go-broke/booklets/before-the-idea-becomes-reality/
```

Recommended internal structure:

```text
products/dont-go-broke/booklets/before-the-idea-becomes-reality/
  publication-concept.md
  publication-brief.md
  implementation_plan.md
  task.md
  00-source-review.md
  01-outline.md
  02-section-plan.md
  03-draft-copy.md
  04-editorial-review.md
  05-final-copy.md
```

If the existing repository uses a different approved convention for Don’t Go Broke booklet folders, the repo convention should be preserved. Do not create a conflicting structure without escalation.

---

## Source Material to Copy Into Folder

The following approved files should be copied into the booklet folder:

```text
publication-concept.md
publication-brief.md
```

These files are the source of truth for production.

Publishing Factory must not alter the approved source files unless Don’t Go Broke explicitly requests a replacement version.

---

## Files to Create

Publishing Factory should create the following workflow files.

---

### 1. `implementation_plan.md`

**Purpose**
Defines the production workflow before any outline, draft, or final copy is created.

**Status**
This file.

**Approval Required Before Moving On**
Yes.

Publishing Factory may not create the source review file until this implementation plan is approved.

---

### 2. `task.md`

**Purpose**
Tracks the production status of the booklet.

**Should include:**

* booklet title
* current production stage
* source files received
* files created
* pending approvals
* open risks
* escalation notes
* next action

**Approval Required Before Moving On**
No separate approval required if it accurately reflects the approved implementation plan.

---

### 3. `00-source-review.md`

**Purpose**
Reviews the approved concept and brief before outlining begins.

**Should include:**

* core lesson
* audience summary
* required reader transformation
* mistake the booklet prevents
* required sections
* required concepts
* hard constraints
* “not this” boundaries
* relationship to *Before the Build Starts*
* risks or contradictions found in the source files

**Approval Required Before Moving On**
Yes.

Publishing Factory may not create the outline until the source review is approved.

---

### 4. `01-outline.md`

**Purpose**
Creates the booklet outline based on the approved brief and source review.

**Should include:**

* proposed title page structure
* introduction
* chapter or section sequence
* purpose of each section
* reader outcome for each section
* practical reader exercises or decision prompts
* bridge into *Before the Build Starts*

**Approval Required Before Moving On**
Yes.

Publishing Factory may not create the section plan until the outline is approved.

---

### 5. `02-section-plan.md`

**Purpose**
Turns the approved outline into a section-by-section writing plan.

**Should include:**

* section title
* section purpose
* key points
* examples or metaphors to use
* reader action or takeaway
* boundaries to avoid
* estimated length
* transition notes

**Approval Required Before Moving On**
Yes.

Publishing Factory may not draft full booklet copy until the section plan is approved.

---

### 6. `03-draft-copy.md`

**Purpose**
Creates the first full draft of the booklet.

**Should include:**

* complete booklet text
* all required sections
* practical field-guide tone
* plain-language explanations
* reader-facing prompts or checkpoints
* no production commentary

**Approval Required Before Moving On**
Yes.

Publishing Factory may not create final copy until the draft has been reviewed.

---

### 7. `04-editorial-review.md`

**Purpose**
Checks the draft against the approved brief before final copy.

**Should include:**

* source compliance check
* required section check
* tone check
* beginner-safety check
* product-ladder fit check
* boundary check against *Before the Build Starts*
* risk of startup-validation drift
* risk of build-planning drift
* revision recommendations

**Approval Required Before Moving On**
Yes.

Publishing Factory may not create final copy until the editorial review is approved or revision instructions are resolved.

---

### 8. `05-final-copy.md`

**Purpose**
Creates the final approved booklet copy.

**Should include:**

* clean final manuscript
* no internal production notes
* no unresolved comments
* no implementation instructions
* no file merge instructions

**Approval Required Before Completion**
Yes.

Final copy must be approved before layout, PDF formatting, asset creation, storefront copy, or promotion handoff.

---

## Planned Production Sequence

Publishing Factory should follow this sequence:

1. Confirm source files are present.
2. Create `implementation_plan.md`.
3. Wait for approval.
4. Create `task.md`.
5. Create `00-source-review.md`.
6. Wait for approval.
7. Create `01-outline.md`.
8. Wait for approval.
9. Create `02-section-plan.md`.
10. Wait for approval.
11. Create `03-draft-copy.md`.
12. Wait for review and revision direction.
13. Create or update `04-editorial-review.md`.
14. Resolve required revisions.
15. Create `05-final-copy.md`.
16. Wait for final manuscript approval.
17. Only after final copy approval, prepare for layout, PDF production, assets, or Audience Factory handoff.

---

## Approval Gates

### Gate 1: Implementation Plan Approval

**Required before:**
Source review begins.

**Decision needed:**
Approve or revise the production workflow.

---

### Gate 2: Source Review Approval

**Required before:**
Outline begins.

**Decision needed:**
Confirm that Publishing Factory correctly understands the concept, brief, required sections, constraints, and boundaries.

---

### Gate 3: Outline Approval

**Required before:**
Section planning begins.

**Decision needed:**
Approve the booklet structure before detailed writing plans are created.

---

### Gate 4: Section Plan Approval

**Required before:**
Draft copy begins.

**Decision needed:**
Approve the section-by-section writing plan before full prose is drafted.

---

### Gate 5: Draft Copy Review

**Required before:**
Final copy begins.

**Decision needed:**
Approve, revise, or redirect the draft.

---

### Gate 6: Editorial Review Approval

**Required before:**
Final copy is created.

**Decision needed:**
Confirm all issues have been resolved or decide what must change.

---

### Gate 7: Final Copy Approval

**Required before:**
Layout, PDF production, asset generation, product packaging, or promotion handoff.

**Decision needed:**
Approve the manuscript as final.

---

## Required Production Boundaries

This booklet must remain:

* platform-independent
* beginner-safe
* plain language
* short, practical, and direct
* calm
* protective
* practical
* honest
* clear
* beginner-respectful
* confidence-building without being motivational fluff

This booklet must not become:

* a startup validation manual
* a market research guide
* a coding tutorial
* a product management textbook
* a business coaching workbook
* a prompt engineering guide
* a platform comparison guide
* a motivational essay about building with AI
* a replacement for *Before the Build Starts*
* a guide to choosing Replit, Vercel, Base44, v0, Antigravity, Lovable, Bolt, Cursor, Claude, ChatGPT, or any other tool

---

## Required Editorial Distinction

Publishing Factory must preserve the distinction between:

```text
Before the Idea Becomes Reality
```

and

```text
Before the Build Starts
```

### This booklet answers:

* Should this idea become a project?
* What problem does it solve?
* Who is it for?
* What is version one?
* What should not be built yet?
* Is this ready to move forward?

### The next booklet answers:

* How should the project be designed before AI starts building?
* What screens are needed?
* What flows are needed?
* What data is needed?
* What constraints are needed?
* What should be handed to the AI builder?

This booklet may point toward those later questions, but it must not answer them in detail.

---

## Required Reader Outcome

By the end of the booklet, the reader should be able to say:

* this is the idea
* this is the problem
* this is who it is for
* this is version one
* this is what is not included yet
* this is what would make the project too expensive, vague, or large
* this is ready to become a project
* or this should stay an idea for now

---

## Risks and Escalation Points

### Risk 1: Startup Validation Drift

The booklet could accidentally become a startup validation workbook.

**Avoid by:**
Keeping the focus on plain-language project readiness, not market sizing, competitive analysis, customer interviews, business models, or fundraising logic.

**Escalate if:**
A section requires formal validation frameworks, research methods, or business strategy beyond beginner project readiness.

---

### Risk 2: Build-Planning Drift

The booklet could move too far into screens, flows, data models, blueprints, architecture, or implementation planning.

**Avoid by:**
Treating those topics as the job of *Before the Build Starts*.

**Escalate if:**
The draft begins teaching the reader how to design or build the app instead of deciding whether the idea should become a project.

---

### Risk 3: Platform Guidance Drift

The booklet could accidentally imply that the reader should choose a tool or platform.

**Avoid by:**
Keeping all examples platform-independent.

**Escalate if:**
A section requires comparison between Replit, Vercel, Base44, v0, Antigravity, Lovable, Bolt, Cursor, Claude, ChatGPT, or similar platforms.

---

### Risk 4: Fear-Based Tone

The booklet could become too negative or discouraging.

**Avoid by:**
Framing the pause as protection, not punishment.

**Escalate if:**
The copy starts shaming the reader for being excited or ambitious.

---

### Risk 5: Over-Expansion

The booklet could become too long or too complete.

**Avoid by:**
Keeping each section practical, direct, and limited to the decision-before-project stage.

**Escalate if:**
The outline or draft expands into a full course, full workbook, or complete product strategy guide.

---

### Risk 6: Weak Bridge to the Next Booklet

The booklet could fail to prepare the reader for *Before the Build Starts*.

**Avoid by:**
Ending with a clear transition: once the idea is ready to become a project, the next job is designing the project before AI begins building.

**Escalate if:**
The ending either skips the bridge or repeats the next booklet’s content too fully.

---

## Initial Editorial Recommendation

The booklet should be structured as a short field guide built around a decision checkpoint.

Recommended editorial shape:

1. Explain why AI makes ideas feel ready too soon.
2. Separate “idea” from “project.”
3. Help the reader define the problem.
4. Help the reader define the first user.
5. Help the reader define version one.
6. Help the reader define what is not included yet.
7. Help the reader identify stop signs.
8. End with a ready / pause / do not start yet decision.
9. Bridge to *Before the Build Starts*.

---

## Production Confirmation

Publishing Factory confirms that production should proceed under the following conditions:

* The booklet remains platform-independent.
* The booklet remains beginner-safe.
* The booklet uses plain language.
* The booklet stays short, practical, and direct.
* The booklet does not become a startup validation manual.
* The booklet does not become a coding tutorial.
* The booklet does not replace *Before the Build Starts*.
* The booklet preserves the approved Publication Concept.
* The booklet follows the approved Publication Brief.
* The booklet does not proceed to outline, draft, or final copy without the required approval gates.

---

## Next Required Action

Approve or revise this `implementation_plan.md`.

After approval, Publishing Factory should create:

```text
task.md
00-source-review.md
```
