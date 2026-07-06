# Before the Agent Starts Compression Implementation Plan

## Purpose
This plan prepares a one-booklet structural compression pass for `before-the-agent-starts` after CSS layout reconciliation and initial gap reporting. It outlines how to reduce structural fragmentation without deleting instructional content, ensuring the final booklet complies with the Payhip physical and structural standards.

## Source Files
- `products/dont-go-broke/booklets/before-the-agent-starts/05-final-copy.md`
- `products/dont-go-broke/booklets/before-the-agent-starts/conformance-gap-report.md`
- `conformance-measurements.md`
- `standards/booklet-payhip-format-conformance-standard.md`

## Current Conformance Problem
The CSS layout geometry is correct, but the booklet is severely over-fragmented. There are 22 total H2 sections (19 numbered chapters), far exceeding the allowed limit of 7 major sections. This extreme fragmentation forces the build script to insert numerous hard page breaks, driving the text density down to an unacceptable 282.6 average words per full prose page (target ~320). Furthermore, the required 6-art rhythm is missing entirely.

## Compression Objective
The objective is to consolidate the 19 numbered sections into exactly 7 major conceptual chapters while preserving 100% of the instructional content. We will achieve this by demoting minor sections to H3s and moving worksheets, checklists, and prompt packs to a unified Back Matter section.

## Locked Reference Constraints
- **Layout Geometry:** US Letter layout (already reconciled and locked).
- **Text Width:** 63–69 characters per line target.
- **Density Target:** Roughly 300–350 words per full prose page (safe max 380–400).
- **Section Limit:** H2s are reserved for major structural chapters (max 7 conceptual chapters).
- **Tool Treatment:** Tools, checklists, worksheets, prompt packs, and receipts usually become H3s, run-in labels, blocks, or back matter.
- **Content Preservation:** No instructional content may be deleted without explicit approval.
- **Execution Scope:** One booklet per pass.

## Proposed Major Section Structure
The 19 current numbered sections will be consolidated into the following 7 major H2 chapters:

1. **The Autonomous Worker**
2. **Agent Scope and Permissions**
3. **Defining Agent Boundaries**
4. **The Safe First Task**
5. **The Approval Gate**
6. **Recognizing Agent Failure**
7. **The Operating Rhythm**

## Heading Conversion Plan

| Current Heading | Current Level | Proposed Treatment | Reason | Content Preservation Note |
| :--- | :--- | :--- | :--- | :--- |
| What You Need Before This Booklet | H2 | Convert to H3 | Minor prerequisite | Keep inline under Chapter 1 |
| 1. The Agent Is Not Just Typing... | H2 | Rename to H2: `1. The Autonomous Worker` | Core concept | Keep inline |
| 2. The Sandbox Strategy | H2 | Convert to H3 | Supporting tactic | Keep inline under Chapter 1 |
| 3. The Agent Readiness Audit | H2 | Move to Back Matter | Tool/Worksheet | Move text to Back Matter |
| 4. Agent Scope Levels | H2 | Rename to H2: `2. Agent Scope and Permissions` | Major topic | Keep inline |
| 5. The Agent Permission Ladder | H2 | Convert to H3 | Supporting framework | Keep inline under Chapter 2 |
| 6. Decide What the Agent May Change | H2 | Rename to H2: `3. Defining Agent Boundaries` | Core defense | Keep inline |
| 7. Decide What the Agent Must Not Touch | H2 | Convert to H3 | Relates to boundaries | Keep inline under Chapter 3 |
| 8. Safe vs. Unsafe Agent Requests | H2 | Convert to H3 | Supporting examples | Keep inline under Chapter 4 |
| 9. Define the Safe First Task | H2 | Rename to H2: `4. The Safe First Task` | Execution strategy | Keep inline |
| 10. Set Tool and Command Boundaries | H2 | Convert to H3 | Relates to boundaries | Keep inline under Chapter 3 |
| 11. Make the Agent Stop and Explain | H2 | Rename to H2: `5. The Approval Gate` | Workflow management | Keep inline |
| 12. What to Do Before Saying "Yes" | H2 | Convert to H3 | Review procedure | Keep inline under Chapter 5 |
| 13. When to Stop Using the Agent | H2 | Rename to H2: `6. Recognizing Agent Failure` | Crucial diagnostic | Keep inline |
| 14. Reviewing the Agent’s Change Receipt | H2 | Convert to H3 | Post-task diagnostic | Keep inline under Chapter 5 |
| 15. The Agent Session Log | H2 | Move to Back Matter | Tool/Template | Move text to Back Matter |
| 16. Before / During / After... | H2 | Rename to H2: `7. The Operating Rhythm` | Daily cadence | Keep inline |
| 17. The Bad Agent Session... | H2 | Convert to H3 | Procedural recovery | Keep inline under Chapter 6 |
| 18. The Agent Prompt Pack | H2 | Move to Back Matter | Tool | Move text to Back Matter |
| 19. The Before-the-Agent Checklist | H2 | Move to Back Matter | Tool/Checklist | Move text to Back Matter |

## Content Preservation Plan
No instructional paragraphs, list items, or warnings will be deleted. 
- Prose sections will simply be nested as H3s beneath their new parent H2 chapters, allowing the text to flow continuously without triggering hard page breaks.
- Interactive or reference elements (Prompt Pack, Checklists, Logs, Audits) will be relocated to the Back Matter so they don't break the narrative flow.

## Field Note Preservation Plan
- **Field Note Opening:** Will be formatted strictly as `## Field Note Opening` with standard body text (no blockquotes), avoiding previous formatting errors.
- **Field Note Closing:** Will be formatted strictly as `## Field Note Closing` with standard body text.

## Set-Off Text / Tool Treatment Plan
The four major tools (Readiness Audit, Session Log, Prompt Pack, Before-the-Agent Checklist) will be gathered into a `## Back Matter` section at the end of the booklet. Each tool will be demarcated with an H3 heading inside the Back Matter. This isolates reference material from prose, maximizing the density of the core narrative pages.

## Art Rhythm Plan
To establish the mandated 6-art rhythm, the following exact placeholder syntax will be inserted prior to major conceptual shifts:
1. `[ILLUSTRATION PLACEHOLDER: The Active Threat]` (Before Chapter 1)
2. `[ILLUSTRATION PLACEHOLDER: The Permission Ladder]` (Before Chapter 2)
3. `[ILLUSTRATION PLACEHOLDER: The Sandbox Boundaries]` (Before Chapter 3)
4. `[ILLUSTRATION PLACEHOLDER: The Safe Task]` (Before Chapter 4)
5. `[ILLUSTRATION PLACEHOLDER: The Approval Gate]` (Before Chapter 5)
6. `[ILLUSTRATION PLACEHOLDER: Recognizing Failure]` (Before Chapter 6)

## Expected Page Rhythm After Compression
By reducing the H2 count from 22 to exactly 10 (7 Chapters + Opening + Closing + Back Matter), we will eliminate roughly 12 unnecessary page breaks. This will significantly compress the total page count, consolidating the whitespace and driving the average words-per-page safely above the ~320 target.

## Human Review Questions
- Are you comfortable moving the `Agent Prompt Pack` and the checklists entirely into the Back Matter, or do you feel any of them must remain inline within the chapters?

## Execution Scope for Next Pass
- **Allowed edits:** ONLY `products/dont-go-broke/booklets/before-the-agent-starts/05-final-copy.md`
- **Forbidden edits:** No other manuscripts, no CSS, no standards files, no build scripts.
- **Staging:** No generated proof PDFs will be staged or committed.
