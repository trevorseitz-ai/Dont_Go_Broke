# After Launch, the Meter Still Runs Compression Implementation Plan

## Purpose
This plan prepares a one-booklet structural compression pass for `after-launch-the-meter-still-runs`. Following CSS layout reconciliation, this pass addresses severe structural fragmentation and ensures the manuscript adheres to the locked Payhip visual and architectural rhythm without losing any instructional value.

## Source Files
The following files were read:
- `products/dont-go-broke/booklets/after-launch-the-meter-still-runs/05-final-copy.md`
- `products/dont-go-broke/booklets/after-launch-the-meter-still-runs/conformance-gap-report.md`
- `conformance-measurements.md`
- `standards/booklet-payhip-format-conformance-standard.md`

## Current Conformance Problem
The gap report identified severe structural fragmentation. The booklet currently contains 22 H2s (20 numbered), wildly exceeding the 7-chapter maximum constraint. Because H2s force early page breaks in the build system, this fragmentation artificially drives down the average word count per full text page (currently ~269 vs the ~320 target) and completely breaks the required 6-art internal rhythm. Several practical tools and checklists are improperly elevated to major chapters.

## Compression Objective
The objective is to preserve 100% of the instructional value while reducing false section breaks. We will consolidate the fragmented 20 numbered chapters into exactly 7 conceptual umbrella chapters, establishing the correct internal art rhythm and aligning with the Payhip reference.

## Locked Reference Constraints
- **Layout:** US Letter layout is already reconciled.
- **Line Length:** 63–69 characters per line target.
- **Page Density:** Roughly 300–350 words per full prose page (safe max 380–400).
- **Major Structure:** H2s are strictly reserved for major chapter structure (max 7 numbered chapters).
- **Formatting Tools:** Tools, checklists, worksheets, prompt packs, receipts, and monitoring aids must become H3s, run-in labels, blocks, or Back Matter.
- **Content:** No instructional content may be deleted without explicit approval.
- **Scope:** One booklet per pass.

## Proposed Major Section Structure
The structure will preserve the booklet’s role as the definitive post-launch reality check: running systems create continuous costs and obligations. The 7 proposed chapters are:
1. **The Reality of Launch**
2. **Monitoring the Infrastructure**
3. **Surviving the Spikes**
4. **The First Week Operations**
5. **Maintenance and Support**
6. **The Feature Cost Reality**
7. **The Final Decision**

## Heading Conversion Plan

| Current Heading | Current Level | Proposed Treatment | Reason | Content Preservation Note |
| --- | --- | --- | --- | --- |
| Field Note Opening | H2 | Keep as H2 | Required opening rhythm | Intact |
| 1. Launch Is Not the Finish Line | H2 | Consolidate under `1. The Reality of Launch` | Forms introduction | Demote to H3 |
| 2. The Meter Still Runs | H2 | Consolidate under `1. The Reality of Launch` | Core concept | Demote to H3 |
| 3. Provider-by-Provider Cost Review | H2 | Consolidate under `2. Monitoring the Infrastructure` | Sub-concept of monitoring | Demote to H3 |
| 4. Background Jobs and Silent Loops | H2 | Consolidate under `2. Monitoring the Infrastructure` | Sub-concept of monitoring | Demote to H3 |
| 5. Logs, Storage, and Database Review | H2 | Consolidate under `2. Monitoring the Infrastructure` | Sub-concept of monitoring | Demote to H3 |
| 6. AI Credit Usage After Launch | H2 | Consolidate under `2. Monitoring the Infrastructure` | Sub-concept of monitoring | Demote to H3 |
| 7. The Post-Launch Dashboard Review | H2 | Consolidate under `2. Monitoring the Infrastructure` | Sub-concept of monitoring | Demote to H3 |
| 8. Usage Spikes and Surprise Bills | H2 | Consolidate under `3. Surviving the Spikes` | Incident response | Demote to H3 |
| 9. When the Bill Spikes: A Full Walkthrough | H2 | Consolidate under `3. Surviving the Spikes` | Incident response | Demote to H3 |
| 10. The Cost Watch | H2 | Consolidate under `3. Surviving the Spikes` | Incident response | Demote to H3 |
| 11. The First Week After Launch | H2 | Consolidate under `4. The First Week Operations` | Cadence phase | Demote to H3 |
| 12. The User Behavior Check | H2 | Consolidate under `4. The First Week Operations` | Cadence phase | Demote to H3 |
| 13. The Bug and Support Reality | H2 | Consolidate under `5. Maintenance and Support` | Obligation reality | Demote to H3 |
| 14. The Maintenance Debt Check | H2 | Consolidate under `5. Maintenance and Support` | Obligation reality | Demote to H3 |
| 15. The Weekly Operating Cadence | H2 | Consolidate under `5. Maintenance and Support` | Obligation reality | Demote to H3 |
| 16. Feature-Cost Review Before Adding Anything New | H2 | Consolidate under `6. The Feature Cost Reality` | Pre-addition check | Demote to H3 |
| 17. The Continue, Pause, Fix, Rebuild, or Stop Decision | H2 | Consolidate under `7. The Final Decision` | Conclusion phase | Demote to H3 |
| 18. "Ask the App What It Costs" Prompt Pack | H2 | Move to Back Matter | Actionable tool | Convert to H3 |
| 19. The Safe Operation Checklist | H2 | Move to Back Matter | Actionable tool | Convert to H3 |
| 20. The After-Launch Receipt | H2 | Move to Back Matter | Actionable tool | Convert to H3 |
| Field Note Closing | H2 | Keep as H2 | Required closing rhythm | Intact |
| *None* | N/A | `## Back Matter` | Required post-closing block | Appended after Field Note Closing |

## Content Preservation Plan
Instructional paragraphs, warnings, bullet points, and check items will remain exactly as written. The only changes will be stripping the numbering from the old H2s and demoting them to H3s under the 7 new umbrella H2s. 

## Field Note Preservation Plan
`## Field Note Opening` and `## Field Note Closing` will be strictly preserved as top-level H2s in their current locations. 

## Set-Off Text / Tool Treatment Plan
The "Prompt Pack," "Checklist," and "Receipt" will be extracted from the main flow and appended directly under the new `## Back Matter` heading (which itself sits after the Field Note Closing). Within the Back Matter block, their titles will be formatted as H3s.

## Art Rhythm Plan
Exactly 6 `[ILLUSTRATION PLACEHOLDER: (Theme)]` blocks will be inserted. These belong between the 7 new major numbered H2s, creating visual relief and establishing the required Payhip 6-art rhythm.

## Expected Page Rhythm After Compression
By eliminating the 13 false H2s, we will remove 13 artificial page breaks. The 6 new illustrations will add 6 pages. The average words per full text page should rise back toward the ~300 target, and the total physical page count will likely remain around 25-30 pages.

## Human Review Questions
- Do the 7 proposed parent chapter titles accurately represent the conceptual flow?

## Execution Scope for Next Pass
The next execution pass may edit:
- **ONLY** `products/dont-go-broke/booklets/after-launch-the-meter-still-runs/05-final-copy.md`
- No other manuscripts
- No CSS
- No standards
- No generated PDFs committed
