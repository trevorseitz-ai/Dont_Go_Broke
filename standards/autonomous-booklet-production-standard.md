# Autonomous Booklet Production Standard

## Purpose
This standard upgrades Production Factory booklet production from a human-gated workflow to an autonomous production workflow with internal quality checks.

The goal is to allow Production Factory to move from approved source files to final manuscript with less human interruption, while preserving quality, source compliance, editorial boundaries, and escalation discipline.

This standard applies to repeatable Don’t Go Broke booklet production where the source materials are already approved.

## Core Change
The previous workflow required human approval at multiple production stages:

- implementation plan
- source review
- outline
- section plan
- draft copy
- editorial review
- final copy

The upgraded workflow allows Production Factory to proceed autonomously through those stages after receiving an approved Publication Concept and approved Publication Brief.

Human approval is still required at final manuscript review before layout, PDF production, product packaging, visual assets, storefront copy, or promotion handoff.

## New Default Workflow
Production Factory should now follow this default booklet workflow:

1. Receive approved Publication Concept and Publication Brief
2. Create implementation plan
3. Create task file
4. Create source review
5. Create outline
6. Create section plan
7. Create draft copy
8. Create internal editorial review
9. Revise draft if needed
10. Create final copy
11. Stop for human final manuscript review

Production Factory may complete steps 2–10 without asking for approval between each step, unless an escalation condition is triggered.

## Required Human Gates
Human approval is required at the following points.

### Gate 1: Source Handoff Approval
This happens before Production Factory begins.

The source handoff must include:

- approved Publication Concept
- approved Publication Brief
- required source files
- product-line context
- any known constraints or special instructions

Production Factory may begin autonomous production only after this source handoff exists.

### Gate 2: Final Manuscript Approval
Production Factory must stop after creating final copy.

The user must review and approve the final manuscript before any of the following begin:

- layout
- PDF production
- cover design
- interior design
- visual asset production
- Payhip packaging
- storefront copy
- sales page copy
- Audience Factory handoff
- campaign planning
- external review process

### Gate 3: Major Escalation Approval
Production Factory must stop and request human direction if an escalation condition is triggered.

## Internal Quality Gates
The old human gates are replaced by mandatory internal quality gates.

These checks must be performed by Production Factory before moving from one production stage to the next.

### Internal Gate 1: Source Interpretation Check
Required before outline creation.

Production Factory must confirm:

- the core lesson is clear
- the intended reader is clear
- the reader transformation is clear
- the mistake being prevented is clear
- the product-ladder role is clear
- required sections are identified
- required concepts are identified
- “not this” boundaries are identified
- source files do not contradict each other

If this check fails, Production Factory must escalate.

### Internal Gate 2: Outline Coverage Check
Required before section planning.

Production Factory must confirm:

- every required section is represented
- the sequence follows the approved source material
- the booklet structure serves the reader transformation
- the outline does not drift into prohibited territory
- the outline preserves the product-ladder role
- the outline does not replace another booklet

If this check fails, Production Factory must revise the outline internally or escalate.

### Internal Gate 3: Section Plan Readiness Check
Required before draft copy.

Production Factory must confirm:

- each section has a clear purpose
- each section has a reader takeaway
- each section has appropriate examples or prompts
- section boundaries are clear
- tone direction is clear
- no section is trying to do too much
- no section drifts into another publication’s job

If this check fails, Production Factory must revise the section plan internally or escalate.

### Internal Gate 4: Draft Compliance Check
Required before final copy.

Production Factory must confirm that the draft:

- includes all required sections
- preserves the core lesson
- serves the intended reader
- delivers the reader transformation
- prevents the stated mistake
- follows the required tone
- stays beginner-safe
- stays platform-independent
- avoids prohibited framing
- preserves the product-ladder role
- does not replace another booklet

If this check fails, Production Factory must revise the draft internally before creating final copy.

### Internal Gate 5: Final Copy Cleanliness Check
Required before presenting final copy for human review.

Production Factory must confirm that final copy:

- is a clean manuscript
- contains no internal production notes
- contains no unresolved comments
- contains no approval-gate commentary
- contains no source-file commentary
- contains no merge instructions
- contains no drafting instructions
- is ready for human manuscript review

If this check fails, Production Factory must clean the file before presenting it.

## Required Production Files
For each booklet, Production Factory should still create the following files unless the user requests a simplified output package:

- `publication-concept.md`
- `publication-brief.md`
- `implementation_plan.md`
- `task.md`
- `00-source-review.md`
- `01-outline.md`
- `02-section-plan.md`
- `03-draft-copy.md`
- `04-editorial-review.md`
- `05-final-copy.md`

The difference is that these files no longer require separate human approval before Production Factory continues.

They are still useful for traceability, audit, diagnosis, and future process improvement.

## Human Review Package
When Production Factory reaches final copy, it should present the user with a concise review package.

The review package should include:

- `05-final-copy.md`
- `04-editorial-review.md`

It may also include a short completion note that states:

- whether the manuscript passed internal quality review
- whether any risks remain
- whether any required source constraints were difficult to satisfy
- whether the manuscript is ready for layout after human approval

Production Factory should not proceed beyond final copy until the user approves the manuscript.

## Escalation Conditions
Production Factory must stop and request human direction if any of the following occur.

### Missing Source Files
Escalate if the approved Publication Concept or Publication Brief is missing.

### Contradictory Source Files
Escalate if the Publication Concept and Publication Brief conflict on:

- title
- audience
- core lesson
- product-ladder role
- required sections
- required concepts
- tone
- “not this” boundaries
- publishing outcome

### Unclear Product-Ladder Role
Escalate if Production Factory cannot determine where the booklet fits in the Don’t Go Broke sequence.

### Boundary Conflict
Escalate if fulfilling one requirement appears to violate another requirement.

Example:
- a required section appears to require build planning
- the brief says not to include build planning
- Production Factory cannot resolve the conflict safely

### Required Section Removal
Escalate if any required section must be removed, merged, or substantially changed in a way that could weaken the approved brief.

### Tone Risk
Escalate if the subject matter makes it difficult to preserve the required tone.

Examples:
- the draft becomes fear-based
- the draft becomes shame-based
- the draft becomes too motivational
- the draft becomes too technical
- the draft becomes too abstract

### Scope Drift
Escalate if the manuscript begins turning into something outside the approved format.

Examples:
- a booklet becomes a full manual
- a field guide becomes a course
- a decision guide becomes a workbook
- a warning guide becomes a business coaching system

### Platform Drift
Escalate if the manuscript requires platform-specific guidance when the brief requires platform independence.

### Cross-Publication Drift
Escalate if the booklet starts replacing another Don’t Go Broke publication.

Example:
- *Before the Idea Becomes Reality* starts teaching the blueprint stage from *Before the Build Starts*

## Revision Authority
Production Factory may revise its own intermediate files without human approval when the revision is needed to pass an internal quality gate.

Production Factory may revise:

- source review
- outline
- section plan
- draft copy
- editorial review
- final copy before presenting it

Production Factory may not alter approved source files unless explicitly instructed.

Approved source files include:

- Publication Concept
- Publication Brief
- approved standards
- approved project knowledge
- approved product-ladder decisions

## Final Copy Rule
Final copy must be the first required human review point after source handoff.

The user may approve, reject, or request revisions.

If revisions are requested, Production Factory should revise the final copy and provide a replacement `05-final-copy.md`.

Do not provide partial edits.
Do not ask the user to manually merge changes.
Do not provide “replace this paragraph” instructions.
Always return the full replacement file.

## External Review Status
External review is not part of this upgrade yet.

The external review process will be designed later, after all booklet final copies have been produced.

Until then, Production Factory should rely on:

- approved source files
- autonomous internal quality gates
- final human manuscript review

## Updated Default Instruction to Production Factory
When beginning a booklet under this standard, Production Factory should use this operating instruction:

```text
Proceed autonomously from approved source files through final copy.

Create all required production files.

Use internal quality gates in place of human approval gates.

Escalate only if source files are missing, contradictory, unclear, or if the 
manuscript risks violating the approved brief, product-ladder role, tone, or 
boundaries.

Stop after final copy and request human manuscript review before layout, PDF 
production, product packaging, visual assets, storefront copy, or promotion 
handoff.
```

## What This Standard Does Not Change
This standard does not change Don’t Go Broke ownership of:

- publication ideas
- publication concepts
- publication briefs
- product-ladder decisions
- editorial strategy
- audience promise
- final manuscript approval

This standard does not authorize Production Factory to:

- invent new publications
- change the product ladder
- alter approved concepts
- alter approved briefs
- create marketing materials without approval
- start Audience Factory work
- produce final PDFs before manuscript approval

## Summary
Production Factory now operates with one additional level of autonomy.

The system is trusted to produce the full manuscript package from approved source files, using internal quality gates instead of repeated human approvals.

Human review moves to the final manuscript stage.

Escalation remains mandatory when source clarity, editorial boundaries, product-ladder fit, or publication quality are at risk.
