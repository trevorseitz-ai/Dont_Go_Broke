# Before the Agent Starts — Section Length Brief

Measured against the current proof (36 pages). Current fill per section, all below your targets:

| Section | Current | Target |
|---|---|---|
| 1 — What You Need Before This Booklet | 0.52 pages | 0.75+ |
| 4 — The Agent Readiness Audit | 1.23 pages | 1.75 |
| 7 — Decide What the Agent May Change | 0.47 pages | 0.75+ |
| 9 — Safe vs. Unsafe Agent Requests | 1.40 pages | 1.75 |
| 10 — Define the Safe First Task | 0.33 pages | 0.75+ |
| 12 — Make the Agent Stop and Explain | 0.40 pages | 0.75+ |
| 15 — Reviewing the Agent's Change Receipt | 0.56 pages | 0.75+ |
| 16 — The Agent Session Log | 0.60 pages | 0.75+ |
| Field Note Closing | 0.42 pages | 0.75+ |

All edits are additions to `products/dont-go-broke/booklets/before-the-agent-starts/05-final-copy.md` — no existing text removed.

## Section 1 — add ~75 words

Insert after "A note on version control:... use an agent in 'explain-only' mode to help you set up basic version control before proceeding." and before "## Section 2":

> None of this needs to be elaborate. A single GitHub repository and the habit of committing before every agent session is enough to start. What matters is that the habit exists before the first prompt, not after the first mistake. Builders who skip this step almost always regret it during their very first agent session, not their tenth.

## Section 4 — add ~165 words

Insert after "If you cannot answer these questions, you are not ready to deploy an agent. You need to do more architectural planning first." and before "## Section 5":

> ### Why Skipping This Audit Is So Tempting
>
> The audit takes ten minutes. Skipping it takes zero. That asymmetry is exactly why builders skip it — right up until the moment an agent mixes its own broken code into an already-broken project, and nobody can tell which bug came from where.
>
> Here is what that actually looks like. A founder hands an agent a project with a known, unrelated bug in the checkout flow and asks for a new profile page. The agent, reading the codebase, notices the checkout bug along the way and "helpfully" tries to fix it too — without being asked. Now there are two sets of changes tangled together: the profile feature you wanted, and an unrequested checkout fix you never reviewed. If either one breaks, you have no clean way to isolate which change caused it.
>
> The audit is not bureaucracy. It is the ten minutes that keeps every future problem traceable to a single, isolated cause.

## Section 7 — add ~90 words

Insert after "If you are building a new UI button, the agent has no business reading your database schema or editing your routing logic." and before "## Section 8":

> ### Scope Statements Are Cheap Insurance
>
> Writing "you may only touch these two files" takes ten seconds longer than just typing your request. That ten seconds is the cheapest insurance policy in this entire process.
>
> Without it, the agent is not being reckless — it is doing exactly what it was built to do: solve the problem in front of it using whatever context is available, including files you never intended it to consider. A scope statement removes the ambiguity before it has a chance to turn into an unwanted rewrite.

## Section 9 — add ~105 words

Insert after the last "Safe Request" (the "Optimize performance" pair) and before `<div class="illustration-placeholder">`:

> ### The Pattern Behind Every Safe Request
>
> Notice what every "Safe Request" above has in common: it names the exact file, describes the exact symptom, and explicitly forbids the exact shortcut the agent is most likely to reach for. None of them trust the agent to infer what you meant.
>
> This is not extra caution for its own sake. It is a direct response to how these tools actually fail — not through malice, but through an eagerness to be maximally helpful with whatever authority you leave undefined. The fix is always the same shape: narrow the request until there is only one reasonable way to fulfill it.

## Section 10 — add ~155 words

Insert after "Never ask an agent to perform more than one logical leap at a time. If a task requires the agent to think about UI, database storage, and email notifications all at once, the task is too large. Split it into three tasks." and before "## Section 11":

> ### What a Safe First Task Looks Like
>
> Compare two ways of starting the same feature. The unsafe version: "Build the user profile page." The safe version: "Create a `ProfilePage.jsx` component that displays the user's name and email from the existing `useUser()` hook. No editing, no image upload yet — just a read-only display. Do not touch any other files."
>
> The second version has a visible finish line. You will know within minutes whether it worked, because there is only one thing to check. The first version could take an agent in a dozen directions — styling choices, data fetching, form validation — none of which you asked for and all of which you now have to review.
>
> Small, verifiable steps feel slower at the start. They are actually the fastest path through a project, because every step either clearly works or clearly fails — there is no murky middle ground to untangle later.

## Section 12 — add ~105 words

Insert after "It is infinitely easier to correct a bad plan written in plain English than it is to untangle bad code spread across five different files." and before `<div class="illustration-placeholder">`:

> ### What "Stop and Explain" Actually Prevents
>
> Every silent decision an agent makes on your behalf is a decision you did not review. Most of the time, that decision is harmless. Occasionally, it is the one that costs you a weekend.
>
> The approval gate is not about slowing the agent down for its own sake. It is about moving the moment of decision from after the code exists to before it exists — when a bad plan is just a paragraph you can delete, not a tangle of files you have to untangle. A plan you can read in thirty seconds is always cheaper to fix than the code it would have produced.

## Section 15 — add ~65 words

Insert after "If the change receipt reveals the agent touched files outside the allowed scope, you must treat the entire change as suspect." and before `<div class="illustration-placeholder">`:

> Treat this review as non-negotiable, even when the task felt simple. The tasks that quietly go wrong are rarely the ones you expected trouble from — they are the small, "obviously fine" ones nobody thought to double-check. A five-minute read of the change receipt is the difference between catching a problem today and discovering it three features later, buried under code that assumes it was never there.

## Section 16 — add ~48 words

Insert after "By forcing yourself to log the session, you prevent the dangerous habit of chaining ten agent requests together without ever manually verifying the code." and before "## Section 17":

> The log does not need to be elegant. A single markdown file that grows messier over time is still doing its job, because its value isn't in how it reads later — it's in the pause it forces before you move to the next request.

## Field Note Closing — add ~110 words

Insert after "The goal of setting these boundaries isn't to slow you down. The goal is to keep you in the driver's seat. You are the builder. The agent is just the hands on the keyboard." and before "Set up your sandbox. Define your Safe First Task. Fill out your checklists.":

> None of this is about distrust. Agents are remarkable at what they do, and they will keep getting faster. But speed and judgment are two different things, and only one of them is your job to provide. An agent that moves fast inside boundaries you set is an asset. The same agent moving fast with no boundaries is just risk wearing a helpful face.
>
> The builders who get the most out of these tools are not the ones who hand over the most control. They are the ones who know exactly how much control to hand over, task by task, and adjust as trust is earned.

## Claude Code prompt

"Apply before-the-agent-section-length-brief.md to before-the-agent-starts/05-final-copy.md: add all 9 new subsections/paragraphs exactly as written, in the locations specified. No existing text should be changed or removed. Then rebuild all 5 proofs."
