# Expansion Plan: After Launch, the Meter Still Runs

## 1. Current Manuscript Diagnosis
The current `05-final-copy.md` produces an approximately 14-page layout proof. The manuscript successfully establishes the philosophical shift from "building" (a one-time cost) to "operating" (a recurring cost). However, it remains entirely conceptual. It warns the reader that "the meter still runs" but fails to provide the granular tools, cost-mapping worksheets, and operational rhythms a beginner needs to actually monitor and control those meters. It reads like a warning memo rather than an operational field guide.

## 2. What Is Missing Compared to Reference Booklets
- **Concrete Scenarios:** Real-world examples of how small usage patterns (e.g., a background job running every minute) can create massive billing shocks.
- **Practical Mechanics:** Step-by-step checklists for the first 24 hours and the first 7 days post-launch.
- **Copy-Pasteable Tools:** Prompt templates to interrogate the AI about hidden recurring costs or active background processes.
- **Decision Frameworks:** A structured guide for diagnosing usage spikes and deciding whether to pause, scale down, or gracefully shut off an application.

## 3. What the Booklet Must Teach
- How to map every point in the application where money can be spent (Compute, Storage, API calls, AI tokens).
- How to distinguish between a successful launch and safe, sustainable operation.
- How to audit hidden background jobs that consume resources silently.
- How to set an operational rhythm for monitoring usage before mindlessly adding new features.
- How to execute a graceful shutdown when costs outweigh value.

## 4. What Reader Mistakes It Must Prevent
- Assuming that because the build is "done," the financial risk is over.
- Leaving a live application running on autopilot without setting hard billing limits.
- Getting hit with a "surprise bill" from a runaway loop or unmonitored API call.
- Continuing to pay for an abandoned "zombie" app out of guilt or negligence.

## 5. Proposed Expanded Outline
1. Introduction: The Finish Line Is the Starting Line
2. The Invisible Meters: Compute, Storage, and Tokens
3. **The After-Launch Cost Map (NEW)**
4. Setting Traps for Runaway Costs
5. **The First 24 Hours Checklist (NEW)**
6. Software Rots (Even If You Don't Touch It)
7. **The Background Job Audit (NEW)**
8. AI Drift: When the Model Changes Its Mind
9. **The Usage Spike Response Plan (NEW)**
10. The Burden of Users
11. Maintenance vs. Building
12. **The Pause / Scale Down / Keep Going Decision Guide (NEW)**
13. The Art of the Graceful Shutdown
14. Conclusion: Operating with Your Eyes Open

## 6. Proposed Section-by-Section Additions
- **Section 3 (Cost Map):** A tactile guide to identifying where the app spends money. Introduces the "Where Can This Keep Spending Money?" prompt.
- **Section 5 (First 24 Hours):** A strict protocol for the day after launch, focusing on verifying billing alerts, checking initial database limits, and monitoring the first wave of logs.
- **Section 7 (Background Job Audit):** Explaining how AI often writes cron jobs or scheduled tasks that silently burn compute. Introduces the "What Is Still Running?" prompt.
- **Section 9 (Usage Spike Plan):** A playbook for reacting when the billing alert triggers. (e.g., Is it real traffic, or did a bot get stuck in a loop?)
- **Section 12 (Decision Guide):** A framework for evaluating whether the app is worth its monthly carrying cost.

## 7. New Practical Tools/Checklists/Exercises to Add
- After-Launch Cost Map
- First 24 Hours Checklist
- First 7 Days Checklist
- Background Job Audit Sheet
- Usage Spike Response Plan
- Pause / Scale Down / Keep Going Decision Guide
- “What Is Still Running?” prompt
- “Where Can This Keep Spending Money?” prompt
- Safe Operation Checklist

## 8. Specific Examples/Scenarios to Add
- **Scenario:** The AI builds a feature that checks for new emails every 10 seconds. The app has zero users, but the API bill hits $200 in three days because the background loop never sleeps.
- **Scenario:** A founder launches an app, gets bored, and forgets about it. Six months later, the database provider updates their pricing tier, and the abandoned app silently drains a credit card.

## 9. Places Where Current Manuscript Can Be Preserved
- The opening philosophy ("building is a project; operating is a commitment") is excellent.
- The definitions of Compute, Storage, and Tokens as the "Invisible Meters."
- The concepts of "Software Rot" and "AI Drift."
- The philosophy around the graceful shutdown of zombie apps.

## 10. Places Where Current Manuscript Needs Expansion
- The "Setting Traps" section needs to be expanded from a theoretical warning into a concrete First 24 Hours Checklist.
- The "Invisible Meters" section must be expanded into the actionable After-Launch Cost Map.
- A completely new section must be added to address Background Jobs and silent processes.

## 11. Voice/Tone Guidance
- **Realistic and sobering, but empowering.** It should feel like a debriefing from a veteran operator handing over the keys to a junior sysadmin.
- **Beginner-safe.** Explain "compute" and "cron jobs" in plain English without DevOps jargon. 
- **Direct.** "Do not trust your future self to remember. Set the trap now."

## 12. Quality Bar for the Expanded Manuscript
The expanded manuscript must reach 30–40 layout pages by providing the reader with a rigorous, step-by-step operating manual for the first week post-launch. It must shift the booklet from a generic warning about costs into a tactical system for preventing those costs. 

## 13. Approval Gate
This expansion plan must be reviewed and approved by the human before any changes are made to `05-final-copy.md`.
