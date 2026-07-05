# Before the Agent Starts

## Field Note Opening

You have your blueprint. You know what you want to build. Now, you are staring at an empty chat box connected to an AI coding agent. 

Your instinct is to type: *"Build the dashboard."*

Stop. 

The moment before you hit "Enter" on a broad task is the most dangerous moment in your build. 

If you are using an autonomous coding agent, you are no longer just receiving code suggestions. You have handed the keyboard to an incredibly fast, highly capable junior developer who never sleeps, never hesitates, and—crucially—never asks for permission unless you force it to. 

Before the agent starts acting, you must define its boundaries. You must tell it what it is allowed to touch, what tools it is allowed to use, and exactly when it must stop and wait for your approval. 

Speed without direction isn't progress. It’s just faster chaos. This guide is about putting up the guardrails before you step on the gas.

---

## 1. The Agent Is Not Just Typing Suggestions

If you have used ChatGPT to write a Python script, or if you use GitHub Copilot to autocomplete a function, you are used to passive AI. 

Passive AI types where your cursor is. It waits for you to ask a question. It gives you a block of code, and you decide where to paste it. If it gives you bad code, nothing breaks until you manually integrate it into your project.

Agentic coding tools are fundamentally different. They are autonomous. 

An agent can read your entire codebase. It can open files, delete lines of code, and create new directories. It can run commands in your terminal. If it encounters an error, it doesn't wait for you to fix it; it will read the error log and try to fix the error itself. 

The preparation required for a passive tool is completely different from the management required for an active agent. You are not managing a spellchecker. You are managing a worker. And if you give a fast worker a vague instruction, they will guess what you meant. 

When an agent guesses, it usually guesses wrong. It will over-engineer simple solutions, install heavy libraries you don't need, and rewrite working code because it thought it was "cleaning up."

> **Field Note: The Danger of the Helpful Agent**
> A builder asked an agent to "make the login button blue." The agent noticed that the CSS was written in raw CSS, not Tailwind. It decided Tailwind was a "best practice." It installed Tailwind via the terminal, rewrote all the CSS files, updated the build scripts, and broke the entire application. The button was blue, but nothing else worked.

---

## 2. The Sandbox Strategy

Because agents have the power to execute changes across multiple files simultaneously, you must never test a new, untethered agent directly on your production-ready codebase. 

Before the agent starts, you need a Sandbox. 

A Sandbox is an isolated environment where the agent can make mistakes, break things, and hallucinate dependencies without causing permanent damage to your core project.

**How to Create a Sandbox:**

1. **Git Branches:** The simplest sandbox is a new Git branch. Never let an agent operate directly on `main` or `master`. Create a branch called `agent-experiment-dashboard`. If the agent ruins the code, you simply delete the branch and start over.
2. **Dummy Repositories:** If you are asking the agent to establish a completely new architectural pattern (like setting up a complex database ORM), have it do the work in a completely separate, empty project folder. Once the agent proves it can build the architecture correctly, you can manually move the successful code into your real project.

If you don't use Git or version control, **do not use an AI agent.** You must have a "Save Point" you can roll back to when the agent makes a catastrophic mistake. 

---

## 3. Decide What the Agent May Change

Because an agent can touch anything in your project, your first job is to tell it exactly what it is allowed to touch today. 

If you ask a human contractor to paint your kitchen, you don't want to come home and find they also demolished your bathroom because they thought the tile looked outdated. Agents will do exactly this to your code. 

You must define the allowed scope in plain language before every major task. 

**Vague:** *"Style the login button."*

**Bounded:** *"You may only read `src/components/Login.js` and edit `src/css/styles.css` to style the login button."*

Restrict the agent's playing field to only what is strictly necessary for the immediate task. If you are building a new UI button, the agent has no business reading your database schema or editing your routing logic. 

### The "Files You May Touch" Template

Copy and paste this at the top of your agent prompt:

```text
ALLOWED SCOPE:
You are only permitted to read and modify the following files:
- [File 1]
- [Directory A]

Do not open, read, or modify any other files in this project to complete this task.
```

---

## 4. Decide What the Agent Must Not Touch

Defining what the agent *can* touch is only half the battle. You must explicitly protect your core assets. 

Every project has critical load-bearing code. It might be your authentication logic, your payment processing integration, or a complicated database query that finally works after three days of debugging. 

If you don't understand how a piece of working code works yet, the agent should not be allowed to rewrite it. 

Introduce "do not touch" boundaries early in your prompt. 

**Example Boundary:** *"Do not modify the `auth/` directory under any circumstances. If a feature requires changing how authentication works, stop and ask me first."*

Agents love to "clean up" code. They will see a working configuration file, decide it isn't using the latest syntax, and rewrite it. Suddenly, your app won't deploy, and you have no idea why. Protect your working parts.

### The `.gitignore` Defense

If you have sensitive API keys, `.env` files, or proprietary data in your project folder, do not rely purely on a text prompt to stop the agent from reading them. Ensure your `.gitignore` is properly configured. Many agents respect `.gitignore` files and will physically prevent themselves from indexing or reading ignored files. 

---

## 5. Define the Safe First Task

First-time builders often treat agents like magic wands. They drop massive, multi-step requests into the prompt window. 

* “Clean this up.”
* “Fix everything.”
* “Make it better.”
* “Finish the app.”
* “Add auth and deploy it.”

These are not tasks; they are wishes. And when an agent is given a wish, it will try to fulfill it all at once, opening a dozen files and tangling the logic into a knot. 

You must break your blueprint down into a **Safe First Task**. 

A safe first task is narrow, isolated, and highly verifiable. It has a clear definition of "done." 

**Unsafe:** *"Build the user dashboard."*
(The agent will guess the layout, guess the data structure, install charting libraries, and write fake API endpoints.)

**Safe:** *"Create the empty HTML and CSS layout container for the user dashboard. Do not connect it to data yet. Just build the visual shell."*

Start with a small, testable chunk of work. Verify it works. Then give the agent the next small piece. 

---

## 6. Set Tool and Command Boundaries

Agents are increasingly capable of running commands directly in your terminal. This is a massive productivity boost, but it is also the fastest way to break your computer. 

An agent can run `npm install` to add new dependencies. It can run database migrations. It can push code to production. It can delete directories.

You must set hard boundaries around what commands the agent is allowed to run without your explicit, manual approval. 

### The `npm install` Warning

The most common and destructive silent action an agent takes is installing unneeded dependencies. If an agent doesn't know how to write a sorting algorithm, it will install a third-party library to do it. Over time, your simple app will become bloated with dozens of unmaintained dependencies, creating security vulnerabilities and deployment nightmares.

**Example Boundary:** *"You may run local development servers (like `npm run dev`) and test suites. You may NOT run any `npm install` commands, database migrations, or deployment scripts without asking me first."*

### The "Commands You May Run" Template

```text
COMMAND BOUNDARIES:
You are authorized to run the following terminal commands to verify your work:
- npm run lint
- npm test

You are STRICTLY FORBIDDEN from running:
- npm install (or adding any new dependencies)
- git commit or git push
- any command that deletes files (e.g., rm -rf)
```

---

## 7. Make the Agent Stop and Explain: The "Plan First" Prompt

Agents will make silent architectural decisions unless you stop them. 

If you tell an agent to "save user preferences," it has to decide *how* to save them. Should it use local storage? A database? A flat file? If you haven't told it how, it will choose for you. It might choose a complex, expensive database solution when all you needed was a simple text file. 

You dictate the workflow rhythm. The agent stops when you say stop. 

The most effective boundary you can set is an approval gate. Before the agent writes a single line of code, require it to explain its plan. 

### The "Plan First" Prompt

Paste this at the end of your initial instruction:

```text
STOP AND PLAN RULE:
Before you edit any files or write any code, you must output a step-by-step plan.
List the exact files you intend to create or modify.
List the architectural approach you intend to take.
Do not write the actual code or run any commands until I reply with "Approved."
```

It is infinitely easier to correct a bad plan written in plain English than it is to untangle bad code spread across five different files. 

---

## 8. When the Agent Goes Rogue

Even with perfect boundaries, an agent will occasionally lose context, hallucinate a tool that doesn't exist, or embark on a "Silent Refactor." 

### The Silent Refactor

You ask the agent to fix the padding on a button. It fixes the padding, notices a typo in the header, fixes the typo, notices the routing logic is outdated, updates the router, breaks the app, and spends the next hour trying to fix the router. 

When you notice the agent modifying files that have nothing to do with the prompt, **stop the agent immediately.**

Do not ask the agent to "fix what you just broke." The agent has lost context, and asking it to fix a mess usually results in a deeper mess.

### The Recovery Protocol

1. **Halt Execution:** Press the stop button in your IDE or terminal.
2. **Revert the Code:** Use Git to throw away the agent's changes (`git restore .` or `git reset --hard HEAD`).
3. **Clear the Context:** Start a completely new chat thread with the agent. 
4. **Tighten the Boundaries:** Rewrite your prompt to be even more restrictive, and try again.

---

## 9. The Before-the-Agent Checklist

Before you hit "Enter" on your first agent prompt, fill out this checklist. You can paste this directly into your agent's system instructions, or keep it on your desk as a mental check.

### The Agent Boundary Sheet

- [ ] **Agent Task:** [Exactly what is the narrow, verifiable task?]
- [ ] **Allowed Files/Folders:** [Which specific files is the agent allowed to edit?]
- [ ] **Off-Limits Files/Folders:** [Which critical files must the agent never touch?]
- [ ] **Allowed Tools/Commands:** [What terminal commands can the agent run freely?]
- [ ] **Commands Requiring Approval:** [What must the agent ask before running? e.g., installs, deployments]
- [ ] **Decisions Requiring Approval:** [What architectural or dependency choices must the agent ask about?]
- [ ] **Stop Point:** [At what exact moment should the agent stop working?]
- [ ] **Review Requirement:** [What must the agent show you before it proceeds?]
- [ ] **Definition of Done:** [How will we know this specific task is complete?]
- [ ] **If Unsure:** [If you encounter ambiguity, do not guess. Stop and ask me for clarification.]

---

## Field Note Closing

The agent should not start until the boundaries are clear. 

Taking five minutes to define what the agent cannot do will save you five hours of trying to figure out what it just did. 

The goal of setting these boundaries isn't to slow you down. The goal is to keep you in the driver's seat. You are the builder. The agent is just the hands on the keyboard. 

Set up your sandbox. Define your Safe First Task. Fill out your Boundary Sheet. 

When you're ready, give the agent its first instruction.
