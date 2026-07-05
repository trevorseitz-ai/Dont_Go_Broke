# Manuscript Expansion Recovery Plan

## 1. Summary of the Issue
The layout proofing phase revealed a significant discrepancy in the depth and length of the five Don't Go Broke booklets. While the first two booklets successfully meet the length, substance, and utility required of a standalone field guide (approximately 34–36 layout pages), the final three booklets fall significantly short (14–18 pages). These latter manuscripts currently read like expanded briefs or underdeveloped outlines rather than comprehensive, practical guides. To ensure the entire product suite delivers consistent value, the last three manuscripts must be expanded.

## 2. Layout-Ready Booklets
The following manuscripts have sufficient depth and remain approved for final layout processing:
1. `before-the-idea-becomes-reality` (~34 pages)
2. `before-the-build-starts` (~36 pages)

## 3. Booklets Not Layout-Ready
The following manuscripts are reopened for manuscript expansion:
3. `before-the-agent-starts` (~18 pages)
4. `before-you-trust-the-first-draft` (~16 pages)
5. `after-launch-the-meter-still-runs` (~14 pages)

## 4. Why the Last Three Are Underdeveloped
- **Lack of Practical Scenarios:** They introduce concepts but fail to walk the reader through realistic, step-by-step implementation scenarios (the "how-to" depth).
- **Missing "Field Guide" Elements:** They lack the robust troubleshooting tables, deep-dive checklists, and concrete examples that characterize the first two booklets.
- **Brief-Like Pacing:** The narrative moves too quickly from problem to solution without pausing to address edge cases, common pitfalls, or the mental models a beginner needs to safely execute the advice.

## 5. Expansion Target for Each Booklet
- **Target Length:** ~30–40 A5 layout pages each.
- **Substance Constraint:** The expansion must not rely on padding, fluff, or generic AI theory. It must add practical, beginner-safe, field-guide depth.

## 6. Specific Expansion Strategy for Each Booklet

### A. Before the Agent Starts
**Strategy:** Deepen the preparation phase. Currently, this likely glosses over the exact prompts, exact file structures, and exact mindset needed before handing control to an AI agent. We must expand the "pre-flight checklist" concept into actionable, concrete exercises.

### B. Before You Trust the First Draft
**Strategy:** Deepen the testing and auditing phase. Beginners often accept the first output an AI generates. This booklet needs robust frameworks for auditing code, validating logic, and setting up staging environments to safely break things without going broke.

### C. After Launch, the Meter Still Runs
**Strategy:** Deepen the operational and financial maintenance phase. A 14-page manuscript cannot adequately cover API costs, database scaling, rate limits, and ongoing security. We must expand on the specific financial traps of running AI agents in production.

## 7. Proposed Section Additions

### Before the Agent Starts
- **The "Context Window" Trap:** Why feeding an agent too much information ruins the output.
- **Structuring Your Workspace:** Exactly how to organize files *before* the agent reads them.
- **The Prompt Hierarchy:** Breaking down commands into System, Context, and Action layers.

### Before You Trust the First Draft
- **The Sandbox Method:** How to test outputs in an isolated environment.
- **Auditing for "Hallucinated Dependencies":** Recognizing when the AI invents tools that don't exist.
- **The Peer-Review Prompt:** Using a second agent to check the first agent's work.

### After Launch, the Meter Still Runs
- **The Infinite Loop Nightmare:** How bad agent logic drains API credits in minutes.
- **Setting Hard Limits:** Step-by-step guide to setting billing alerts and quotas.
- **The Maintenance Schedule:** What to check daily, weekly, and monthly.

## 8. Required Practical Tools/Checklists/Exercises
Each booklet must include at minimum:
- **2x "Field Notes":** Real-world cautionary tales or success stories.
- **2x Deep-Dive Checklists:** e.g., "The Pre-Flight Context Checklist" or "The Billing Alert Setup Checklist".
- **3x Concrete Examples:** Actual code snippets, prompt templates, or dashboard screenshots.
- **1x Reader Exercise:** A specific task for the reader to complete before moving on.

## 9. What Must Not Change
- **The Approved Concept and Brief:** The core thesis and learning objectives of each booklet remain locked. We are expanding *depth*, not pivoting the topic.
- **Platform Independence:** The advice must remain universally applicable, avoiding reliance on specific ephemeral tools.

## 10. Preserving Voice and Tone
- Maintain the direct, authoritative, yet beginner-friendly tone ("The Factory Voice").
- Avoid overly academic language; use builder-centric metaphors (blueprints, meters, foundations).
- Keep paragraphs punchy and accessible. 

## 11. Recommended Production Sequence
Execute the recovery sequentially to ensure quality control:
1. Expand `before-the-agent-starts` -> Review -> Approve.
2. Expand `before-you-trust-the-first-draft` -> Review -> Approve.
3. Expand `after-launch-the-meter-still-runs` -> Review -> Approve.

## 12. Approval Gates Before Returning to Layout
1. **Outline Expansion Review:** Approve the new proposed sections.
2. **Draft Expansion Review:** Approve the newly generated draft copy.
3. **Final Copy Review:** Approve the merged, polished `05-final-copy.md`.
Only after passing Gate 3 will a booklet be permitted back into the layout pipeline.

## 13. Files That Should Be Updated Later
- `products/dont-go-broke/booklets/<slug>/01-outline.md`
- `products/dont-go-broke/booklets/<slug>/02-section-plan.md`
- `products/dont-go-broke/booklets/<slug>/03-draft-copy.md`
- `products/dont-go-broke/booklets/<slug>/05-final-copy.md`
- `products/dont-go-broke/booklets/<slug>/task.md`

## 14. Files That Should Not Be Touched Yet
- `layout-production-plan.md`
- `before-the-idea-becomes-reality/*`
- `before-the-build-starts/*`
- Any `dist/` or `layout/` files.
