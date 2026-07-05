# Expansion Plan: Before the Agent Starts

## 1. Current Manuscript Diagnosis
The current manuscript (approx. 180 lines) reads like an excellent extended brief or an introductory blog post, but it is not a complete field guide. It introduces crucial concepts—such as the difference between passive AI and active agents, boundary setting, and safe first tasks—but it moves too quickly. It provides the "what" and the "why" but severely lacks the "how."

## 2. What is Missing
Compared to the first two booklets, this manuscript lacks:
- **Concrete Scenarios:** Deep-dive case studies of what actually happens when an agent goes rogue in a codebase.
- **Specific Syntactical Examples:** Actual prompt templates for setting boundaries.
- **Troubleshooting Frameworks:** What to do when the agent inevitably ignores the boundaries you just set.
- **Exercises:** Actionable steps the reader must perform (e.g., writing their first `.cursorrules` or system prompt) before moving on.

## 3. What the Booklet Must Teach
- The fundamental shift from "prompting an oracle" to "managing a junior developer."
- How to explicitly declare file, folder, and architectural boundaries before execution.
- How to define a "Safe First Task" that is narrowly scoped and easily verifiable.
- How to control the agent's access to terminal commands, database migrations, and package installations.
- How to enforce "Stop and Explain" workflow loops.

## 4. What Reader Mistakes It Must Prevent
- Giving the agent a vague prompt like "Build the dashboard."
- Allowing the agent silent, unbounded access to run terminal commands.
- Letting the agent rewrite core, working architecture (like auth or payment logic) when tasked with a UI change.
- Continuing to prompt an agent that has hallucinated dependencies instead of stopping and reverting.

## 5. Proposed Expanded Outline
1. **Field Note Opening:** The Danger of the "Enter" Key
2. **The Agent Is Not Just Typing Suggestions:** Passive vs. Autonomous AI
3. **The Sandbox Strategy (NEW):** Isolating the agent before it touches production code
4. **Decide What the Agent May Change:** Explicit file/folder targeting
5. **Decide What the Agent Must Not Touch:** Protecting core assets and the `.gitignore` strategy (EXPANDED)
6. **Define the Safe First Task:** Narrow, verifiable chunking
7. **Set Tool and Command Boundaries:** Taming the terminal
8. **Make the Agent Stop and Explain:** The "Plan First" Prompt (NEW)
9. **Review Before the Next Step:** The Verification Loop
10. **When the Agent Goes Rogue (NEW):** Reverting, chastising, and resetting context
11. **The Boundary Checklist:** Practical implementation tool

## 6. Proposed Section-by-Section Additions
- **The Sandbox Strategy:** A new section explaining how to use separate git branches or dummy repositories when testing a new, highly autonomous agent on a complex feature.
- **Make the Agent Stop and Explain (Expanded):** Add exact copy-paste prompts like: *"Before you write any code, list the files you intend to modify and summarize the architectural approach. Do not proceed until I approve."*
- **When the Agent Goes Rogue:** A troubleshooting guide on why agents lose context and how to safely `git reset --hard` and clear the agent's memory window.

## 7. New Practical Tools/Checklists/Exercises
- **The "Plan First" Prompt Template:** A reusable snippet readers can paste into their AI tool.
- **The Boundary Checklist (Expanded):** Upgraded from a theoretical list to a printable/copyable worksheet.
- **Exercise: The 5-Minute Dry Run:** A task asking the reader to prompt the agent to *only* map out the folder structure without writing code.

## 8. Specific Examples/Scenarios to Add
- **Scenario: The Silent Refactor:** A horror story where an agent tasked with updating a CSS class decides to refactor the entire React routing setup because it "found a more optimized way."
- **Scenario: The Infinite Loop Terminal:** An example of an agent getting stuck in a loop of `npm run build` errors because it lacks the context of local environment variables, demonstrating why command boundaries are crucial.

## 9. Places to Preserve the Current Manuscript
- The *Field Note Opening* is punchy and sets the exact right tone. It should be kept nearly verbatim.
- The distinction between passive AI (spellchecker) and autonomous AI (fast worker) is a great analogy and should anchor Section 2.

## 10. Places Requiring Major Expansion
- Sections 3 and 4 (What the agent may/must not change) need specific code/directory examples.
- Section 6 (Tool and Command Boundaries) needs explicit warnings about `npm install`, database wipes, and deployment triggers.

## 11. Voice/Tone Guidance
- Preserve the "Factory Voice": practical, calm, protective, authoritative.
- "Builder warning a builder."
- Maintain the use of physical building metaphors (guardrails, blueprints, demolition).

## 12. Quality Bar for the Expanded Manuscript
The expanded manuscript must read like a standalone operational manual. A reader should be able to finish this booklet and immediately know exactly what to type into their IDE's agent chat to safely execute their first feature. It must hit the 30-40 page layout target through practical depth, not repetition.

## 13. Approval Gate
This expansion plan must be explicitly approved by the user before any modifications are made to `01-outline.md`, `02-section-plan.md`, or the final `05-final-copy.md` manuscript.
