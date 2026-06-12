# DON'T GO BROKE IN THE AGE OF AI  
## Google Antigravity Edition: How to Use Agent-First Development Without Losing Control of Your Codebase

---

# PAGE 1 — The Premise

Google Antigravity is an agent-first development platform. It is designed around the idea that AI agents can do more than suggest code—they can plan features, edit files, propose refactors, add dependencies, and iterate across your entire project, often with meaningful autonomy. For a solo builder working alone on a small AI-backed app, that is genuinely useful. It is also genuinely dangerous if you are not careful about how you use it.

This pamphlet is for first-time solo builders: people who are technically comfortable, who understand code well enough to read and write it, but who are not yet seasoned software architects or team leads. If you are using Google Antigravity as a primary part of your development workflow, this is for you.

**The core warning is simple:**

Antigravity’s agents can move faster and touch more of your codebase than you can comfortably review. Every time the gap between the agent’s output and your understanding grows, your codebase becomes harder to own, extend, and fix. The project looks like it is moving. The task list looks busy. The diffs are long. But if you cannot explain what changed in your own words, you are not in control of your own app.

The goal of this pamphlet is not to slow you down. It is to help you keep review authority so that Antigravity’s speed becomes your advantage rather than a liability.

---

# PAGE 2 — How Antigravity Actually Helps (and Why That’s Dangerous)

## What Antigravity Does in a Typical Solo Workflow

In practice, Antigravity’s agents can:

- **Plan features and break them into tasks** — You describe what you want to build, and the agent produces a structured plan with steps, dependencies, and priorities.
- **Edit multiple files in a single run** — The agent doesn’t just write one function. It can update a backend route, adjust a data model, modify a test file, and update related configuration, all in one pass.
- **Propose and execute refactors** — The agent can identify patterns it considers suboptimal and rewrite them: restructuring folders, abstracting shared logic, cleaning up duplication.
- **Add and update dependencies and configuration** — The agent may introduce new packages, modify project config files, or adjust build settings to support new functionality.
- **Generate and update tests** — As it builds features or refactors code, the agent can write tests it considers appropriate for the new or changed behavior.

For someone building alone, this is genuinely exciting. You get some of what a small team would normally provide: planning, implementation, and some quality checking, running in parallel, without you needing to manually context-switch between each step.

## Why That Same Power Creates the Main Risk

The danger is proportional to the capability. When Antigravity’s agents operate across many files and systems at once, every decision they make compounds. A new abstraction the agent introduces in file A might be referenced in files B, C, and D before you have had a chance to decide whether you wanted that abstraction at all.

As a solo beginner, your review capacity is limited. You are already managing product decisions, feature ideas, design tradeoffs, and deployment concerns. If you also have to inspect a many-file diff before your morning coffee, most of the time you will not inspect it carefully. You will skim it. You will trust that it looks reasonable. And over time, the codebase will drift from what you actually understand into something the agent built, that you nominally own.

That is the trap. Not that the agent is writing code. The trap is that the agent’s scope and speed exceed your ability to review, and you are not yet aware it is happening.

---

# PAGE 3 — The Main Trap: Agent Autonomy vs. Your Review Capacity

## How a First-Time Builder Gets Into Trouble

It usually starts with a reasonable-sounding prompt. Something like: *“Implement the user authentication module across the frontend and backend.”* Or: *“Refactor the data layer to be more scalable.”* Or simply: *“Clean up the codebase and fix any obvious issues.”*

These prompts feel productive. They feel like the right way to use a capable agent. And the agent will take them seriously—touching many files, making many decisions, adding patterns and dependencies you may not have chosen consciously.

Here is what can go wrong, step by step:

**1. Overly broad prompts create overly broad changes.**  
When you give the agent wide latitude, it uses that latitude. It is not doing anything “wrong.” It is doing what you asked. But the result can be a diff that spans a dozen files, introduces new libraries, reorganizes folders, and adds layers of abstraction you did not explicitly request. Each individual decision might be defensible. The cumulative effect is a codebase that now works differently than you understood it to.

**2. Accepting large diffs without reading them.**  
The agent surfaces a diff. It is long. It looks fine at a glance. You accept it. This is one of the most common and most dangerous habits to develop early. A diff you did not read is a change you do not understand. And a change you do not understand is debt you will pay later, when something breaks and you cannot find it.

**3. Letting the agent manage dependencies casually.**  
New libraries are not free. They introduce maintenance obligations, potential security surface, version conflicts, and behavior you may not expect. When the agent adds a dependency to solve a problem, that is a decision you should make consciously, not one you discover later in a config or lockfile.

**4. Architecture drift you never approved.**  
Over several agent runs, you may find that your project now has a service layer you did not plan, or a new abstraction pattern you are not familiar with, or a folder structure that does not match how you think about the app. No single run did this—it accumulated. And now you have a system that is harder to reason about than what you started with.

**5. No habit of running and testing between passes.**  
If the agent makes changes and you do not run the app until several passes later, you will have difficulty knowing which run introduced the problem. The rollback path gets expensive quickly.

## Concrete Practices to Stay in Control

**Scope tasks small.**  
Instead of “implement user auth,” try “add a login endpoint that accepts email and password and returns a session token.” One piece at a time. This keeps diffs manageable and reviewable.

**Read the diff. Every time.**  
Even for “cleanup” runs. Even for small changes. Build the habit of knowing which files changed and having at least a one-sentence explanation for each one. If you cannot produce that explanation, do not accept the change yet.

**Explicitly approve dependencies and architecture changes.**  
Before accepting any run that adds a new library or introduces a structural change, ask yourself: do I want this in my project? Do I understand what it does? If the answer to either is no, reject the change or ask the agent to explain and adjust the plan before proceeding.

**Run the app after every meaningful change.**  
Your manual sanity check is not optional. The agent does not know what “working” means to you. Only you do.

**Have a rollback path before you need it.**  
If you are not already using version control with regular commits, start now. Before you grant the agent wide autonomy, make sure you have a checkpoint you can return to—a branch, a commit, a snapshot, or a similar mechanism in your workflow. Know how to use it before you need it, not after.

**Remember: you are the maintainer, not the agent.**  
The agent will not be there when something breaks at an inconvenient moment. You will be. Everything the agent writes, you will inherit. Treat every change as something you personally chose to put in your codebase—because in practical terms, you did.

---

# PAGE 4 — The Secondary Trap: Activity Theater in an Agentic Workflow

## What Agent Activity Looks Like vs. What It Means

Antigravity’s agents can generate a lot of visible output: plans with nested tasks, long refactor diffs, new test files, updated documentation, cleaned-up comments, revised folder structures. The task list advances. Items get checked off. The diff count climbs.

This is easy to mistake for progress. And sometimes it is progress. But sometimes it is theater.

**Progress theater looks like this:**

- The agent has planned multiple phases of a feature, but the feature has not shipped in any form a user could touch.
- The codebase has many new tests, but they focus on implementation details rather than user-facing behavior, and most of them will break the next time the agent refactors the internals.
- A large refactor has been completed, but it was run before there was a stable baseline, so it made a moving target harder to hit.
- The project is clearly more complex than it was last week, but not clearly closer to being something you would show to a real user.

The agent is not manufacturing this theater on purpose. It is doing what agentic systems do: generating structured output in response to structured goals. The problem is that “generate a plan” and “add tests” and “refactor for clarity” are all valid-sounding goals that can produce substantial output while real product progress stays flat.

## The Checklist: Was That Agent Run Actually Useful?

After each major agent run in Antigravity, take two minutes to ask yourself:

- **Do I understand what changed and why?**  
  If you cannot explain the changes in plain language, this run added debt, not value.

- **Did the app get simpler or more complicated?**  
  More abstraction is not automatically better. Simpler is almost always better for a solo builder at an early stage.

- **Is the next user-visible milestone closer than it was before this run?**  
  If the run was architectural, can you connect it to a specific outcome a user will experience?

- **Are the new tests protecting something I actually care about?**  
  Tests that verify implementation details rather than behavior are fragile. Know what each new test is actually testing before you count it as protection.

- **Could I debug this in a week if it broke?**  
  If the honest answer is “probably not,” that is important information.

## Using Planning Features to Narrow, Not Expand

Antigravity’s planning and task tools are most valuable when you use them to focus the agent rather than to let it define scope on your behalf. When the agent generates a plan, treat it as a menu, not a mandate. Pick the one or two items that directly serve your next concrete goal. Defer the rest. The point of a plan is to reduce what you do today, not to expand the project surface area.

When you notice lots of motion but unclear forward progress, pause. That feeling is information. The agent is not stuck—you are. Reorient around the simplest possible next step toward a working, user-testable version of the app.

---

# PAGE 5 — A Simple Antigravity Safety Workflow

## Practical Steps to Keep Review Authority

This is not a complicated system. It is a set of habits you build from day one, so that Antigravity’s speed works for you rather than past you.

**Before each agent task:**

- Write down one specific, bounded goal for this task. One feature. One bug. One small refactor with a clear reason.
- If the task touches more than one major area of the codebase, break it into smaller pieces.
- Ask the agent to describe what it plans to do and which files it expects to touch before it makes changes. Treat this as a brief that you approve or adjust.

**During the agent run:**

- If you see the agent taking a significantly wider scope than you intended, stop it and narrow the prompt.
- Do not let the agent add dependencies or change architecture mid-task without a conscious decision from you. These are not small details.

**After the agent run:**

- Check which files changed. Every file, not just the ones you expected.
- Skim the diff, even if it is large. Your goal is not to audit every line—it is to have a clear mental model of what is different.
- Run the app. Manually exercise the feature or behavior the run was supposed to affect. Confirm it works the way you expected.
- Create a version-control checkpoint (or equivalent snapshot) before moving on. This is your rollback point for the next task.

**Periodically:**

- Look at your dependency list. Do you know what each item does and why it is there?
- Look at your folder and module structure. Does it still match your mental model of how the app works?
- Look at your test suite. Do you know what behaviors it is protecting? Would you trust it to catch a real regression?
- If any of these reviews surface something you do not recognize or cannot explain, stop and investigate before adding more.

## The Closing Reminder

Google Antigravity is a capable tool for solo builders. The point of this pamphlet is not to make you avoid it.

The point is this: Antigravity’s agents can plan, generate, and restructure code across your entire project faster than any individual can review if that individual is not disciplined about review. For a first-time solo builder, the risk is not that the agent writes code that compiles. The risk is that the agent writes more than you can understand, faster than you can keep up, and your app quietly becomes something you cannot confidently own, debug, or extend.

Stay in charge of scope. Read the diffs. Know your rollback path. Measure progress by whether the app is more understandable and closer to a real user’s hands—not by how much the agent changed.

If you can explain what your codebase does and why it is structured the way it is, you are in good shape. If you cannot, the agent is working faster than your review process. Close that gap before you keep going.

That is the whole job: keep the gap closed.
