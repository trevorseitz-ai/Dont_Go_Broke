# Expansion Plan: Before You Trust the First Draft

## 1. Current Manuscript Diagnosis
The current `05-final-copy.md` produces an approximately 16-page layout proof. It reads like an extended conceptual outline rather than a practical field guide. While the theoretical advice is sound (e.g., "Don't trust polished UI," "Review core logic"), it lacks the concrete examples, step-by-step workflows, and actionable tools needed by a non-technical founder staring at a working demo. It tells the reader *why* they must review, but fails to provide the tactical mechanics of *how* to review.

## 2. What Is Missing Compared to Reference Booklets
- **Concrete Scenarios:** Real-world examples of AI making dangerous assumptions (e.g., auto-approving user permissions, hardcoding admin roles).
- **Practical Mechanics:** Step-by-step instructions for non-technical users on how to actually inspect AI output without an engineering degree.
- **Copy-Pasteable Tools:** Prompt templates to force the AI to explain its decisions.
- **Checklists:** Granular tools like a "Looks Done vs. Is Done" test or a "User Flow Test Sheet."

## 3. What the Booklet Must Teach
- How to separate the visual polish of a UI from the structural integrity of the underlying logic.
- How to force the AI to reveal its hidden assumptions.
- How to systematically break a working "happy path" demo to find the edge cases.
- How to confidently decide whether to keep, rewrite, revert, or completely rebuild a generated draft.

## 4. What Reader Mistakes It Must Prevent
- Assuming that because a demo "runs," the architecture is correct.
- Continuing to build on top of a fragile, assumption-heavy foundation out of a desire to maintain momentum.
- Showing a polished but broken prototype to stakeholders, accidentally locking in bad assumptions.

## 5. Proposed Expanded Outline
1. Introduction: The Vulnerability of the First Draft
2. Why It Feels Trustworthy (The Polish Trap)
3. **The "Looks Done vs. Is Done" Test (NEW)**
4. What Did AI Actually Decide? 
5. **The Hidden Assumption Finder (NEW)**
6. What Should Be Reviewed First?
7. **The File and Flow Review Checklist (NEW)**
8. The Happy Path Illusion
9. **The Edge-Case Breaker Sheet (NEW)**
10. **Forcing the AI to Explain: The Change Receipt (NEW)**
11. Before You Show It to Someone Else
12. The Decision Guide: Accept, Revise, Revert, or Rebuild
13. The Final Safe Approval Checklist
14. Field Note Closing

## 6. Proposed Section-by-Section Additions
- **Section 3 (Looks Done vs. Is Done):** A tactical guide to clicking around the UI and asking "where is this data actually going?"
- **Section 5 (Hidden Assumption Finder):** Walk the reader through common AI hallucinations (like assuming all users have avatars, or that data never fails to load).
- **Section 7 (File and Flow Review):** A guide on how to read the list of generated files to spot unnecessary complexity (e.g., seeing a Redux store when you asked for a simple to-do list).
- **Section 10 (Change Receipt):** Introduce copy-paste prompts like "What did you assume?" to interrogate the AI's generation process.

## 7. New Practical Tools/Checklists/Exercises to Add
- First Draft Review Checklist (expanded from the original draft)
- Looks Done vs. Is Done test
- Hidden Assumption Finder
- Change Receipt Review Sheet
- File Review Checklist
- User Flow Test Sheet (Testing empty states, error states, and double-clicks)
- Accept / Revise / Revert / Rebuild Decision Guide
- Safe Approval Checklist

## 8. Specific Examples/Scenarios to Add
- **Scenario:** The AI builds a beautiful login screen, but silently saves passwords in plain text because the prompt didn't explicitly ask for encryption.
- **Scenario:** The user asks for a dashboard. The AI builds it, but assumes that every logged-in user has permission to see every other user's financial data.

## 9. Places Where Current Manuscript Can Be Preserved
- The introduction and core philosophy ("The first draft is not proof that the project is correct") are excellent and should be preserved.
- The distinction between "Generated Output" and "Reviewed Progress" is solid and should remain.
- The core warning about the dangers of sharing an unverified draft with collaborators too early.

## 10. Places Where Current Manuscript Needs Expansion
- Section 4 ("What Did AI Actually Decide for You?") needs a massive expansion to include the Hidden Assumption Finder and specific prompt packs.
- Section 5 ("What Should Be Reviewed First?") needs to be expanded from a theoretical paragraph into the File Review Checklist and User Flow Test Sheet.
- Section 9 ("Continue, Rework, or Stop") needs to be expanded into the rigorous Accept / Revise / Revert / Rebuild Decision Guide.

## 11. Voice/Tone Guidance
- **Calm and protective.** The tone must not induce panic, but it must firmly interrupt the reader's blind momentum.
- **Beginner-safe.** Avoid deeply technical terminology. Explain "reviewing core logic" in terms of "clicking buttons and checking where the data goes."
- **Direct.** "Do not trust the polish. Break the happy path."

## 12. Quality Bar for the Expanded Manuscript
The expanded manuscript must reach 30–40 layout pages strictly through the addition of high-value, actionable tools, specific recovery examples, and copy-pasteable prompt packs. It must not rely on repetitive warnings or generic philosophy. It must read like a tactical field manual.

## 13. Approval Gate
This expansion plan must be reviewed and approved by the human before any changes are made to `05-final-copy.md`.
