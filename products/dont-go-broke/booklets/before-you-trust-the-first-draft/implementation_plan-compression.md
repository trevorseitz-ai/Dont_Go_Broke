# Before You Trust the First Draft Compression Implementation Plan

## Purpose
This plan prepares a one-booklet structural compression pass for `before-you-trust-the-first-draft` after CSS reconciliation and gap reporting. It outlines how to fix the extreme structural fragmentation of the manuscript, reducing the heading architecture from 24 numbered chapters to a standard maximum of 7, while preserving all instructional content and adhering to the Payhip structural standard.

## Source Files
The following required files were read to inform this plan:
- `products/dont-go-broke/booklets/before-you-trust-the-first-draft/05-final-copy.md`
- `products/dont-go-broke/booklets/before-you-trust-the-first-draft/conformance-gap-report.md`
- `conformance-measurements.md`
- `standards/booklet-payhip-format-conformance-standard.md`

## Current Conformance Problem
As measured in the conformance gap report, the `before-you-trust-the-first-draft` booklet suffers from extreme layout fragmentation. It contains 26 total H2s (including 24 numbered chapters), which trigger 26 hard page breaks in the Payhip rendering engine. This inflates the total page count with artificial white space and drives the full-page text density down to an unacceptable 259.3 words per page. The 24 numbered chapters drastically exceed the 7-chapter limit established by the locked reference. The required 6 internal illustration placeholders are completely missing.

## Compression Objective
The objective is to consolidate the 24 fragmented chapters into exactly 7 conceptual umbrella chapters, preserving all instructional value while reducing false section breaks. This will restore a continuous prose flow, increasing words per full page and pacing the booklet to align exactly with the Payhip reference rhythm.

## Locked Reference Constraints
According to `conformance-measurements.md` and `booklet-payhip-format-conformance-standard.md`:
- US Letter layout is already reconciled via CSS.
- Target line length is 63–69 characters per body line (ideal 66).
- Target density is roughly 300–350 words per full prose page, with a safe maximum of 380–400 words.
- H2s are strictly reserved for major structural breaks (max 7 numbered chapters).
- Tools, checklists, worksheets, prompt packs, receipts, and review aids usually become H3, run-in labels, blocks, or back matter.
- No instructional content may be deleted without explicit approval.
- The compression pass applies to exactly one booklet per pass.

## Proposed Major Section Structure
The proposed structure consolidates the current 24 fragments into 7 major H2 sections. It perfectly preserves the booklet’s role as the review-before-confidence guide:
1. **The Illusion of the First Draft** (Why plausible output is not the same as reliable output)
2. **The First Draft Review Protocol** (What to check before trusting an AI-generated draft)
3. **Testing the User Experience** (Verifying paths, roles, and edges)
4. **Testing the Data and Memory** (Verifying privacy, persistence, and screens)
5. **Interrogating the AI's Code** (Finding hidden assumptions and reviewing files)
6. **Making the Final Decision** (How to decide whether to continue, revise, pause, or rebuild)
7. **Before You Show It to Anyone Else** (What to review before continuing, sharing, or building on top of the draft)

## Heading Conversion Plan

| Current Heading | Current Level | Proposed Treatment | Reason | Content Preservation Note |
| :--- | :--- | :--- | :--- | :--- |
| Field Note Opening | H2 | Keep as H2 | Standard requirement | Text unchanged |
| 1. The First Draft Is a Claim, Not a Verdict | H2 | H2: 1. The Illusion of the First Draft | Umbrella concept | Keep text |
| 2. Why the First Draft Feels More Trustworthy Than It Is | H2 | Convert to H3 | Belongs under Illusion | Strip number |
| 3. The Looks Finished Trap | H2 | Convert to H3 | Belongs under Illusion | Strip number |
| 4. The First Draft Review Session: A Walkthrough | H2 | H2: 2. The First Draft Review Protocol | Umbrella concept | Keep text |
| 5. The "Looks Done vs. Is Done" Test | H2 | Convert to H3 | Belongs under Protocol | Strip number |
| 6. The Original Intent Check | H2 | Convert to H3 | Belongs under Protocol | Strip number |
| 7. The User Path Walkthrough | H2 | H2: 3. Testing the User Experience | Umbrella concept | Keep text |
| 8. The Screen and Data Review Protocol | H2 | H2: 4. Testing the Data and Memory | Umbrella concept | Keep text |
| 9. The Data and Memory Check | H2 | Convert to H3 | Belongs under Data | Strip number |
| 10. Review by User Role | H2 | Convert to H3 | Belongs under UX | Strip number, move under UX |
| 11. The Happy Path Trap | H2 | Convert to H3 | Belongs under UX | Strip number, move under UX |
| 12. What Did AI Actually Decide for You? | H2 | H2: 5. Interrogating the AI's Code | Umbrella concept | Keep text |
| 13. The "What Did AI Add?" Review | H2 | Convert to H3 | Belongs under Interrogation | Strip number |
| 14. Reviewing the Agent's Output: Files and Flows | H2 | Convert to H3 | Belongs under Interrogation | Strip number |
| 15. The Interrogation Workflows | H2 | Convert to H3 | Belongs under Interrogation | Strip number |
| 16. The First Draft Testing Worksheet | H2 | Move to Back Matter | Pure tool | Format as checklist |
| 17. The Keep, Fix, Cut, Question Framework | H2 | H2: 6. Making the Final Decision | Umbrella concept | Keep text |
| 18. The Decision Guide: Accept, Revise, Revert, or Rebuild | H2 | Convert to H3 | Belongs under Decision | Strip number |
| 19. When to Stop and Rebuild | H2 | Convert to H3 | Belongs under Decision | Strip number |
| 20. The Confidence Receipt | H2 | Move to Back Matter | Pure tool | Format as receipt |
| 21. Questions to Ask Before Continuing the Build | H2 | Move to Back Matter | Pure tool | Format as checklist |
| 22. Before You Show It to Someone Else | H2 | H2: 7. Before You Show It to Anyone Else | Umbrella concept | Keep text |
| 23. The Safe Approval Protocol | H2 | Move to Back Matter | Pure tool | Format as checklist |
| 24. Bridge to After Launch, the Meter Still Runs | H2 | Convert to H3 | Belongs under Next Steps | Strip number |
| Field Note Closing | H2 | Keep as H2 | Standard requirement | Text unchanged |

## Content Preservation Plan
All instructional paragraphs, examples, warnings, and conceptual frameworks will be retained perfectly intact. No instructional text will be deleted. The word count will decrease by exactly the number of digits/words removed from the demoted heading titles (e.g., stripping the "2." from "2. Why the First Draft..."). 

## Field Note Preservation Plan
- `## Field Note Opening` will remain untouched as the first major section.
- `## Field Note Closing` will remain untouched as the final major section.

## Set-Off Text / Tool Treatment Plan
The booklet is exceptionally tool-heavy. Four major procedural tools will be extracted and consolidated under a single `## Back Matter` H2 at the end of the booklet:
- The First Draft Testing Worksheet (Checklist block)
- The Confidence Receipt (Receipt block)
- Questions to Ask Before Continuing the Build (Checklist block)
- The Safe Approval Protocol (Checklist block)

Inline prompts and minor checklists (e.g., The Intent Checklist, The Edge-Case Breaker Sheet) will remain inline but nested cleanly under their new H3 parent topics.

## Art Rhythm Plan
To establish the correct pacing and conform to the standard, 6 illustration placeholders (`[ILLUSTRATION PLACEHOLDER: ...]`) will be injected at the structural boundaries between the 7 major chapters (e.g., before Chapters 2, 3, 4, 5, 6, and 7). No actual art will be created.

## Expected Page Rhythm After Compression
By reducing the H2 count from 26 down to 10 (7 numbered chapters + Opening + Closing + Back Matter), the booklet will shed 16 hard page breaks. This allows the text to flow continuously, raising the average word density toward the 300-350 target per full text page. The physical page count will likely decrease by 2-4 pages due to the elimination of artificial white space. (Exact final page count will be determined upon proof regeneration).

## Human Review Questions
- Does the structural mapping of the 24 fragmented concepts into the 7 proposed parent chapters logically match the flow of the review session?
- Do you approve moving the four primary diagnostic tools/worksheets into the Back Matter?

## Execution Scope for Next Pass
Upon approval, the next execution pass may edit:
- **only** `products/dont-go-broke/booklets/before-you-trust-the-first-draft/05-final-copy.md`
- **no** other manuscripts
- **no** CSS
- **no** standards
- **no** generated PDFs committed
