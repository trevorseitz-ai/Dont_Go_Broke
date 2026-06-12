# Brief Spec

## Provider

Google Antigravity (agent-first development platform / agentic coding environment from Google)

## Two Unique Beginner Traps

1. **Main Trap: Agent Autonomy Without Human Review Capacity (Architecture & Codebase Drift)**  
   In Antigravity, agents can plan, generate, and refactor code across the entire project, touching many files and dependencies in a single run. For a first-time solo builder, this creates a specific risk: the agent can move faster than the builder’s ability to inspect diffs, understand architecture changes, or see how new dependencies and tests alter the project.  
   The practical failure mode: the beginner grants high autonomy (“go implement X across the codebase”) without having clear habits for:
   - Scoping tasks small enough to review  
   - Reading and understanding multi-file diffs  
   - Noticing when architecture has quietly shifted (e.g., new layers, abstractions, services)  
   - Spotting risky dependency additions or config changes  
   - Knowing how to roll back or unwind a bad multi-file change  
   The result is not just “AI wrote code I don’t fully get,” but “my entire codebase’s structure, dependencies, and behavior changed in ways I cannot now safely reason about or undo.”

2. **Secondary Trap: Mistaking Visible Agent Activity for Real Progress (Plan / Task / Artifact Theater)**  
   Antigravity’s agent workflows can generate:
   - High-level plans and task lists  
   - Long diffs, refactor passes, and “cleanup” changes  
   - New tests, docs, and comments  
   - Multiple agent runs that appear busy and productive  
   A beginner can easily treat this visible activity as real momentum: “So many tasks are checked off; the diff is huge; there are tests now; things must be advancing.”  
   The deeper risk is progress theater:
   - Plans exist, but the app isn’t closer to a minimal, shippable version  
   - Tests exist, but they’re brittle, shallow, or poorly aligned with real user flows  
   - Big refactors run before there’s a stable baseline or clear problem  
   - The project becomes more complex and harder to maintain, even as the UI and task boards look “busy”  
   The trap is using agent output volume as a proxy for actual product clarity, simplicity, and maintainability.

## Chosen Main Trap

**Agent Autonomy Without Human Review Capacity (Architecture & Codebase Drift)**

This is the core brief theme: Antigravity is powerful precisely because it can orchestrate agents across your whole development workflow. For a first-time solo builder, that power becomes dangerous when the agent’s speed and scope exceed the builder’s ability to review, understand, and govern changes.

The brief should center on:
- Designing prompts and tasks with bounded scope  
- Forcing yourself to inspect diffs and file lists every time, even if it’s “just cleanup”  
- Watching for architecture drift (new services, modules, patterns you didn’t knowingly approve)  
- Explicitly approving or rejecting dependency and tool additions  
- Establishing a personal rollback strategy from day one  
- Treating the agent as a fast assistant inside *your* review loop, not an autonomous maintainer of “the project”

## Secondary Trap

**Mistaking Visible Agent Activity for Real Progress (Plan / Task / Artifact Theater)**

This should appear as:
- A sidebar or page section on “Don’t Confuse Motion with Progress”  
- A checklist for evaluating whether a given agent run actually helped:  
  - Is the app simpler?  
  - Is the next user-visible milestone closer?  
  - Do I understand the new code well enough to debug it later?  
  - Are tests meaningfully protecting behavior, or just making me feel safer?  
- Guidance on using Antigravity’s planning and task features to *narrow* focus rather than expand surface area

## Non-Duplication Note

This Antigravity brief is distinct from the existing provider traps:

- **Not Replit’s trap (agent keeps building past understanding and budget):**  
  The Replit brief’s focus is on *continuous building and resource consumption* (compute, credits, cost) outrunning both understanding and budget.  
  The Antigravity brief is focused on *codebase governance* and *architecture drift*: the agent operates across a real project and can reorganize code, dependencies, and tests faster than a beginner can maintain review authority. Cost is relevant but not the main danger; the central risk is losing structural and behavioral understanding of your own app.

- **Not Vercel’s trap (deployment as false finish line):**  
  The Vercel brief is about treating initial deployment as “done,” ignoring production responsibilities (monitoring, errors, scaling, security).  
  The Antigravity brief concerns what happens *inside the development workflow itself*: granting agent autonomy over refactors, architecture, and multi-file edits without a human review practice that can keep up. It is about development-time control and maintainability, not post-deployment responsibility.

- **Not v0 by Vercel’s trap (UI looks finished before real app exists):**  
  v0’s risk is that the interface and visuals suggest a product is complete when core behavior, data, and robustness are missing.  
  Antigravity’s risk is that code, plans, tests, and diffs suggest engineering progress while the builder’s *understanding and control* lag behind. The app may indeed be “more coded,” but the beginner cannot confidently own or extend it.

- **Not Base44’s trap (platform handles too much structure/hosting invisibly):**  
  Base44’s trap is heavy platform abstraction: the infrastructure, data, and integrations are so managed that the beginner doesn’t learn the underlying architecture or credit categories.  
  Antigravity, in contrast, operates *within your codebase*. The unique risk is an agent continuously reshaping that codebase’s structure and behavior while the human loses track, even though everything is ostensibly “in code you can see.”

## Claude Prompt

You are a senior product writer creating the next pamphlet in a series called “DON’T GO BROKE IN THE AGE OF AI.”

Write a complete 5-page pamphlet draft for first-time solo AI app builders about **using Google Antigravity safely and sustainably**.

Follow these instructions exactly:

---

### 1. Audience & Tone

- Audience:  
  - First-time solo builders working on small AI-backed apps or tools.  
  - Technically comfortable but not seasoned engineers or architects.  
  - Likely using Google Antigravity as a primary development environment or a major part of their workflow.

- Tone:  
  - Clear, calm, slightly blunt, warning-oriented  
  - Not anti-tool and not anti-AI  
  - Practical, concrete, and accessible to smart beginners  
  - Respect the reader’s intelligence; avoid hype and avoid condescension  
  - Focus on helping them keep control and avoid financial and technical traps

Do **not** ask the reader questions about what tone they want or what traps they fear. This pamphlet should read as a finished piece.

---

### 2. Provider Focus

This pamphlet must be **specifically about Google Antigravity**, not generic AI coding or generic AI agents.

- Name the product as “Google Antigravity” or “Antigravity” when referring to the platform.  
- Emphasize that Antigravity is:  
  - An agentic development platform / agent-first coding environment from Google  
  - Designed around AI agents that can plan, generate, review, and refine code across a development workflow  
  - Capable of agentic workflows where the AI interacts with development context, files, tasks, and project state faster than a beginner can manually inspect every change  

Keep provider-specific facts conservative and high-level when details may change (pricing, exact plan structure, specific model names, etc.).

---

### 3. Central Argument & Traps

Structure the pamphlet around **one main trap** and **one secondary trap**, both specific to Antigravity’s agentic design.

#### Main Trap (primary theme of the pamphlet)

**Agent Autonomy Without Human Review Capacity (Architecture & Codebase Drift)**

Communicate this clearly and repeatedly:

- Antigravity’s strength is that its agents can operate across your real codebase:  
  - Plan features and refactors  
  - Edit multiple files in one run  
  - Add or modify dependencies  
  - Change architecture patterns or folder structure  
  - Generate or update tests  
  - Attempt fixes and cleanup across the project  

- The danger is when the **agent’s speed, scope, and autonomy exceed your ability to review and understand**:
  - You approve broad, open-ended tasks (“implement this feature,” “clean up the architecture,” “optimize performance”)  
  - The agent touches many files and systems at once  
  - You don’t have a disciplined habit of inspecting diffs and changed files  
  - You don’t fully grasp new patterns or dependencies the agent introduces  
  - You have no clear rollback path when a large change turns out to be wrong or too complex  

- The result is **codebase drift**:
  - The project’s architecture and behavior evolve faster than your understanding  
  - New abstractions, services, or patterns appear that you didn’t consciously choose  
  - Dependencies and configuration grow without a clear mental model  
  - Debugging and future changes become expensive and stressful, even for a “small” app  

Frame the main lesson as:  
> Antigravity is not the problem. The danger is handing an agent more authority than your review process can handle.

Transform this into practical guidance:
- You control **task size and scope**.  
- You control **whether you read the diff before accepting changes**.  
- You are responsible for knowing **what files changed and why**.  
- You should understand **how to roll back** before granting wide autonomy.  
- Agent speed is good **only if you keep review authority**.

#### Secondary Trap (supporting theme)

**Mistaking Visible Agent Activity for Real Progress (Plan / Task / Artifact Theater)**

Present this as a secondary warning, sidebar, or dedicated page section. Avoid making it the central theme, but give it enough depth to be useful.

Key points:
- Antigravity agents can:
  - Generate detailed plans and task lists  
  - Produce long diffs and “refactor passes”  
  - Add tests, comments, and documentation  
  - Keep a task board or workflow visually busy  

- This activity can create a **false sense of progress**:
  - Many tasks look complete, but the app isn’t closer to a simple, usable version  
  - Tests exist but don’t meaningfully guard real user flows or critical behaviors  
  - Refactors are run prematurely, adding abstraction and complexity before there’s a clear need  
  - The complexity of the codebase grows faster than the builder’s understanding  

The rule of thumb you should teach:
> Don’t measure progress by how *much* the agent changed. Measure it by whether the app became more understandable, testable, and maintainable.

Turn this into a short checklist or rubric the reader can apply after each major agent run.

---

### 4. Non-Duplication Guidance

Ensure this pamphlet is clearly distinct from other provider briefs in the “DON’T GO BROKE IN THE AGE OF AI” series:

- Do **not** reuse these traps:  
  - Replit: “the agent keeps building past the beginner’s understanding and budget” (continuous building + cost)  
  - Vercel: “deployment feels like the finish line before the beginner understands production responsibility”  
  - v0 by Vercel: “the interface looks finished before the app actually exists”  
  - Base44: “the app feels complete because the platform handles so much structure/hosting/integrations invisibly”  

- Emphasize what is **unique to Antigravity**:
  - Agent-first, codebase-wide editing, planning, and refactoring  
  - The risk is *in-development* architecture and codebase governance, not deployment, UI polish, or hidden infrastructure.  
  - The danger is not primarily cost or hosting abstraction, but **losing control of your own codebase’s structure and behavior**.

---

### 5. Structure & Length

Write this as a **short 5-page pamphlet**, where “page” means a clear section that could plausibly fit on one small printed page. You don’t need to simulate physical layout, but you should have five strong sections that feel like discrete pages.

Use this structure:

1. **Page 1 – Cover & Premise**  
   - Title the pamphlet something like: “Don’t Go Broke in the Age of AI: Google Antigravity Edition” (you can refine the subtitle).  
   - State who this is for and what Antigravity is, in one short paragraph.  
   - State the core warning in one or two tight paragraphs:  
     - Antigravity can move faster than your ability to review  
     - The goal is to use agent autonomy without losing control of your codebase  

2. **Page 2 – How Antigravity Actually Helps (and Why That’s Dangerous)**  
   - Briefly, in plain language, describe how Antigravity’s agents work in a typical solo builder workflow:  
     - Planning features, updating tasks  
     - Editing multiple files  
     - Proposing refactors and adding tests  
   - Show the **appeal**: speed, breadth, help for people working alone.  
   - Tie directly into the **main trap**: when you combine breadth + speed with weak review practices, your architecture and codebase can drift beyond your understanding.

3. **Page 3 – The Main Trap: Agent Autonomy vs. Your Review Capacity**  
   - Explain in detail how a first-time builder gets into trouble:  
     - Overly broad prompts (“build this whole module”)  
     - Accepting large diffs without reading them  
     - Letting the agent add or modify dependencies casually  
     - Letting it reorganize folders or architecture without fully grasping the implications  
     - Not having a habit of running and testing the app between agent passes  
   - Offer **concrete practices** tailored to Antigravity:  
     - How to scope agent tasks smaller  
     - How to review diffs and changed files efficiently  
     - Saying “no” or “undo” when a change is too big or confusing  
     - Building a simple rollback habit (e.g., using version control, branches, or checkpoints; keep this high-level and tool-agnostic if needed)  
   - Emphasize: **you are the maintainer of the codebase, not the agent**.

4. **Page 4 – The Secondary Trap: Activity Theater in an Agentic Workflow**  
   - Describe the feeling of progress that comes from:  
     - Watching Antigravity agents plan, refactor, and generate tests  
     - Seeing long diffs and “cleanups”  
     - Having tasks auto-advance or get marked complete  
   - Contrast *visual/structural* progress with *real* progress:  
     - Is the app closer to a minimal, shippable version?  
     - Is the architecture simpler or more complicated?  
     - Could you, personally, debug this in a week if something breaks?  
   - Provide a short **checklist** for evaluating each agent run:  
     - After this run, do I understand what changed and why?  
     - Did we add complexity or remove it?  
     - Are the new tests covering real behaviors I care about?  
     - Did we move closer to a specific user-visible goal?  
   - Encourage the reader to **pause** when they notice lots of motion but unclear forward progress.

5. **Page 5 – A Simple Antigravity Safety Workflow**  
   - Summarize everything into a **practical workflow** the reader can follow when using Antigravity agents:  
     - Start with a small, clear goal for each agent task.  
     - Ask the agent to explain its plan before it touches many files.  
     - Limit each run to a manageable scope (e.g., one feature, one bug, or one small refactor).  
     - Always review which files changed and skim the diff.  
     - Run the app and basic manual tests after each meaningful change.  
     - Keep architecture decisions conscious: if the agent proposes a new pattern or layer, decide if you actually want to live with it.  
     - Treat tests as tools, not decorations: understand at least what each new test is trying to protect.  
   - Close with a short, direct reminder:  
     - Antigravity is powerful.  
     - The point is not to avoid it, but to **stay in charge**.  
     - If you can’t explain what changed in your own words, the agent is working faster than your review process—and that’s when small solo apps become fragile and expensive instead of freeing.

---

### 6. Source / Fact-Check Targets

Be especially careful about **factual claims** in these areas:

- **Plans, pricing, credits, rate limits, and overage controls**:  
  - Do not invent or specify exact prices, quotas, credit amounts, overage fees, or specific billing mechanics.  
  - Refer to these only in general terms (e.g., “depending on your plan,” “according to current documentation,” “Antigravity may include usage-based limits or AI credit pools”).  
  - Do **not** describe specific tiers or dollar amounts unless they are explicitly confirmed and stable.

- **Model access details**:  
  - It is correct to say Antigravity has had access to Google Gemini models and may support third-party models depending on plan and availability.  
  - Do not hard-code an exhaustive list of models, nor specific versions, unless those are clearly documented and likely to remain stable.  
  - Prefer phrasing like: “Antigravity can use Google’s Gemini models and may offer other models depending on your configuration and plan.”

- **Product capabilities and interface details**:  
  - It is safe to say that Antigravity is an agentic development environment where agents can interact with your project’s files, tasks, and context.  
  - Avoid describing UI elements or features that you are not confident are part of the current product (e.g., don’t invent specific buttons, menu labels, dashboards, or visual layouts).  
  - When in doubt, generalize (e.g., “Antigravity may show you diffs or changed files” instead of describing a specific tab name).

When referring to these topics in the pamphlet, **use conservative, high-level descriptions** and avoid specific numbers or unverified feature claims.

---

### 7. Output Requirements

- Output **only** the full 5-page pamphlet draft text, in order, as if it were final copy.  
- Do **not** include analysis, notes, or explanation of your choices.  
- Use clear headings and subheadings so that each “page” is visually distinct in the text.  
- Maintain a concise, information-dense style—avoid fluff, but give enough detail to be genuinely useful to a smart beginner.
