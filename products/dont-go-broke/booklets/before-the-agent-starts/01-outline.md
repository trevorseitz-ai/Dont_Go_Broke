# Outline — Before the Agent Starts

**Recommended Target Length:** 20–30 pages (final PDF). Practical booklet, not a full book.

---

## 1. Field Note Opening
* **Purpose:** Establish the moment right before the builder lets the agent take its first action.
* **Key points to cover:** An autonomous agent is fundamentally different from a chat window. It can touch files, install things, and execute commands. The moment before you hit "Enter" on a broad task is the most dangerous moment.
* **Reader takeaway:** "I need to pause and set rules before I let this agent act."
* **Notes for drafting:** Keep the tone calm and protective—builder to builder. Emphasize that speed without direction is just faster chaos.
* **Approximate length:** 1-2 pages

## 2. The Agent Is Not Just Typing Suggestions
* **Purpose:** Distinguish autocomplete/chat help from agentic action.
* **Key points to cover:** Autocomplete types where your cursor is; an agent can read your entire codebase, decide what's wrong, delete files, and rewrite architecture. The preparation required for a passive tool is completely different from the management required for an active agent.
* **Reader takeaway:** "I am managing a fast, eager worker, not just receiving syntax suggestions."
* **Notes for drafting:** Use simple analogies. Autocomplete is a spellchecker; an agent is a junior developer who doesn't ask questions.
* **Approximate length:** 2-3 pages

## 3. Decide What the Agent May Change
* **Purpose:** Define clear, explicit file/folder boundaries.
* **Key points to cover:** How to explicitly tell the agent "You may only read `X` and edit `Y`." Keep the language practical. If you're building a new button, the agent doesn't need to look at your database schema.
* **Reader takeaway:** "I must restrict the agent's playing field to only what is necessary for the immediate task."
* **Notes for drafting:** Keep this as the primary, beginner-facing frame of boundaries. Give clear examples of phrasing.
* **Approximate length:** 2-3 pages

## 4. Decide What the Agent Must Not Touch
* **Purpose:** Introduce the concept of "do not touch" boundaries and protecting core assets.
* **Key points to cover:** Protecting existing working code, data, payment configurations, auth logic, and deployment scripts. If you don't understand how a piece of code works yet, the agent shouldn't be rewriting it.
* **Reader takeaway:** "I have the power to put my most important files off-limits."
* **Notes for drafting:** Provide a scenario where an agent "cleans up" a working auth file and breaks the app.
* **Approximate length:** 2-3 pages

## 5. Define the Safe First Task
* **Purpose:** Teach readers to break down their blueprint into small, verifiable first steps.
* **Key points to cover:** A safe first task is narrow, isolated, and verifiable. Avoid commands like "clean up the app," "fix everything," or "add a dashboard."
* **Reader takeaway:** "I will start with a small, testable chunk of work, not the entire feature."
* **Notes for drafting:** Contrast an unbounded task ("build the dashboard") with a safe first task ("create the empty dashboard layout container").
* **Approximate length:** 3-4 pages

## 6. Set Tool and Command Boundaries
* **Purpose:** Address the serious risks of terminal/command execution by the agent.
* **Key points to cover:** Boundaries around running terminal commands, package installations (e.g., `npm install`), database migrations, and deployments. The agent must never run powerful or destructive commands silently.
* **Reader takeaway:** "I must explicitly forbid the agent from running terminal commands without my permission."
* **Notes for drafting:** Explain this in plain, beginner-safe language. Do not make the entire booklet about terminal risks, but treat it as a crucial boundary category.
* **Approximate length:** 3-4 pages

## 7. Make the Agent Stop and Explain
* **Purpose:** Define stop points, approval gates, and decision boundaries.
* **Key points to cover:** Require the agent to summarize what it *plans* to do before it acts, and what it *actually changed* after it acts. Forbid silent architectural decisions.
* **Reader takeaway:** "I dictate the workflow rhythm. The agent stops when I say stop."
* **Notes for drafting:** Emphasize that it is easier to fix a bad plan in text than to fix bad code spread across five files.
* **Approximate length:** 2-3 pages

## 8. Review Before the Next Step
* **Purpose:** Explain the necessity of reviewing output before continuing, preparing the reader for the next booklet.
* **Key points to cover:** Scope creep defense. How to verify that the safe first task was completed correctly before allowing the agent to move on to the second task.
* **Reader takeaway:** "I must verify the work before giving the next instruction."
* **Notes for drafting:** This acts as the bridge to `Before You Trust the First Draft`. Keep it focused on the management loop.
* **Approximate length:** 2-3 pages

## 9. The Boundary Checklist
* **Purpose:** Provide a practical, fill-in-the-blank tool for immediate use.
* **Key points to cover:** Includes fields for: Agent task, Files/folders allowed, Files/folders off limits, Tools/commands allowed, Tools/commands not allowed, Decisions the agent must not make silently, Stop point, Review requirement, and Success criteria.
* **Reader takeaway:** "I have a concrete checklist to fill out before I hit 'Enter'."
* **Notes for drafting:** This is a tool, not a replacement for the lesson sections. Format it cleanly for easy reading or printing.
* **Approximate length:** 2-3 pages

## 10. Field Note Closing
* **Purpose:** Reinforce the core lesson in a protective, encouraging way.
* **Key points to cover:** The agent should not start until the boundaries are clear. Taking five minutes to set boundaries saves five hours of debugging.
* **Reader takeaway:** "I am in control of this build."
* **Notes for drafting:** Maintain the calm, builder-to-builder tone. Final encouragement.
* **Approximate length:** 1 page
