# Before the Idea Becomes Reality — Section Length Brief

Measured against the latest proof (38 pages, post-compression-fix). Current fill per section:

| Section | Current | Target | Action |
|---|---|---|---|
| 4 — The Difference Between an Idea and a Project | 1.11 pages | 1.5+ | Expand |
| 5 — The Problem Before Product Test | 2.08 pages | exactly 2 | Trim |
| 7 — The Manual Version Test | 1.18 pages | 1.5+ | Expand |
| 9 — What Is Explicitly Not Included Yet? | 1.18 pages | 1 | Remove obsolete forced break (no trim needed) |
| 10 — The Cost of Making It Real | 1.08 pages | 1.5+ | Expand |
| 11 — What Would Make This Project Too Risky? | 1.11 pages | 1.5+ | Expand |
| 14 — Bridge to the Next Booklet | 1.05 pages | 1 | Trim |
| Field Note Closing | 0.36 pages | 0.75+ | Expand |

All edits are to `products/dont-go-broke/booklets/before-the-idea-becomes-reality/05-final-copy.md`.

## Section 9 — no trim needed, just remove a leftover manual break

Found the actual cause: a `<div class="page-break"></div>` sits right before "Ask:" near the end of Section 9 — almost certainly left over from the old, much larger type size, where it was needed. At the new 11pt size it's no longer necessary and is the only thing forcing this section onto 2 pages. I tested removing it locally: the entire section (heading through the closing "Ask:" paragraph) fits cleanly on one page with zero words changed.

Delete this line (currently sits between "...keeps those assumptions out of your foundation." and "Ask:"):

```
<div class="page-break"></div>
```

## Section 4 — expand ~190 words

Insert after "...so you can decide whether you are ready to cross that boundary." (end of Section 4) and before "## Section 5":

> ### Why This Feels Like Overthinking (And Isn't)
>
> The distinction between an idea and a project can feel like an academic exercise when you are excited to start building. It is not. It is the difference between a decision you made on purpose and a decision AI made for you by default.
>
> Here is what that looks like in practice. A founder wants "an app to help freelancers manage their business." That is an idea — broad, exciting, and completely unbuildable as stated. When they open an AI builder and start describing it, the AI has to fill in the gaps immediately: which freelancers, which parts of "managing a business," what the first screen looks like. It will pick something. It always picks something. The question is whether you picked it, or whether the AI picked it for you because you never said otherwise.
>
> A project is what happens when you make those choices on purpose, before the AI has to guess. It does not need to be perfect or permanent. It just needs to exist before the building starts, so that every screen the AI generates is answering a question you actually asked.

## Section 5 — trim ~40 words (drop one illustrative example from each of 3 lists; no lesson removed)

Change the "Failing the test" list from 3 items to 2 — delete:
`- "I want to build a marketplace for local tutors."`

Change the "Passing the test" list from 3 items to 2 — delete:
`- "Parents in my neighborhood cannot find vetted tutors without scrolling through chaotic Facebook groups."`

Change the "Examples" list under the fill-in sentence from 2 items to 1 — delete:
`- This idea helps a freelance writer track outstanding invoices because unpaid bills get lost in long email chains.`

## Section 7 — expand ~165 words

Insert after "Test the idea manually first. If it works, you have proven the problem exists and the solution is valuable. *Then* you are ready to build software." and before "## Section 8":

> ### When the Manual Version Fails, That's Useful Too
>
> Do not treat a failed manual test as a wasted afternoon. It is the cheapest version of failure you will ever get.
>
> If you text three people your "concierge" meal plan and none of them cook it, you just learned that the value you assumed was there is not — before spending a single dollar on AI credits, hosting, or a database schema. Compare that to launching a real app, waiting weeks for signups, and discovering the same thing after you have already built authentication, a payments integration, and a dashboard nobody opens.
>
> The manual version test is not a hurdle standing between you and building software. It is the fastest, cheapest way to find out whether the software is worth building at all. Founders who skip it are not saving time — they are postponing the same discovery until it costs ten times as much to make.

## Section 10 — expand ~195 words

Insert after the last checklist bullet ("**The Cost of Abandonment:**...export feature?") and before "Do not let this list scare you.":

> ### A Founder Who Skipped This List
>
> A builder launched a scheduling app for local tutors in a single weekend, thrilled at how fast AI had made it real. Three months later, a parent's account was hacked because there was no password-reset flow — just a support email address nobody was checking. A tutor uploaded a twelve-hour audio file that silently ate through the month's storage budget. And when the founder finally got busy with a new job and stopped logging in, the app kept running, kept billing, and kept holding two hundred families' data with nobody responsible for any of it.
>
> None of this happened because the AI wrote bad code. It happened because nobody had asked, before building, who resets a password, who owns the data, or what happens if the founder walks away. The build was fast. The obligations were still there, waiting, whether or not anyone had planned for them.
>
> This is not a reason to avoid building. It is a reason to look at this list honestly, before the app exists, while every answer is still just a decision instead of an emergency.

## Section 11 — expand ~200 words

Insert after "A stop sign means the idea needs more clarity before it becomes real." and before "## Section 12":

> ### Using the Stop Signs Without Freezing
>
> Seven stop signs can feel discouraging if you read them looking for reasons to quit. That is not what they are for.
>
> A stop sign is not a verdict. It is a warning light on a dashboard — it tells you where to look, not that the car is broken beyond repair. Most ideas will trigger at least one or two of these signs on the first pass, and that is normal, not a failure.
>
> The difference between a stop sign and a dead end is what you do next. If Stop Sign 2 lights up because you cannot name the first user, the fix is not to abandon the idea — it is to go find that user before you build anything. If Stop Sign 7 lights up because you cannot explain what "done" means, the fix is to write that definition down before you ask AI for a single screen.
>
> Treat each lit warning light as a task, not a diagnosis. Resolve it, then check again. An idea that clears all seven signs after some real work is in a much stronger position than one that looked ready on the first pass but was never actually tested against them.

## Section 14 — trim ~25 words

Change:
> This booklet helped you decide whether the idea deserves to become a real project. You have defined the problem, located the user, and established the boundaries of version one. You have successfully navigated the earliest, most expensive mistake a builder can make.

to:
> This booklet helped you decide whether the idea deserves to become a real project. You have defined the problem, located the user, and established the boundaries of version one.

Change:
> Those are not the questions for this booklet. This booklet ends at the moment when the idea has either earned project status or has not. If it has, carry these answers forward:

to:
> Those are not the questions for this booklet. It ends at the moment the idea earns project status. If it has, carry these answers forward:

Change:
> That is enough to cross the first gate. But it is not yet enough to hand the project to an AI agent and let it start generating code.

to:
> That crosses the first gate — but it is not yet enough to hand the project to an AI agent and let it start generating code.

## Field Note Closing — expand ~200 words

Insert after "That is not just planning. That is protection. An idea with those four things is harder to lose and harder to mishandle. You can explain it. You can review it. You can hand it to an AI and recognize when it drifts." and before "The next booklet will ask you to design the project before you let AI start building it.":

> Most builders never get this pause. They open the AI tool, describe the excitement, and watch the excitement turn into files before they have decided anything on purpose. Then they spend the next six months discovering, one broken assumption at a time, everything they should have decided in the first afternoon.
>
> You did it differently. You made yourself answer plain questions before asking anything of the AI: what the problem actually is, who actually needs it solved, what the smallest useful version looks like, and what you are deliberately choosing not to build yet. That is not caution for its own sake. It is the difference between directing a fast tool and being dragged along by one.
>
> None of this guarantees the project will succeed. Nothing does. What it guarantees is that if something goes wrong, you will be able to say exactly what you meant to build, and compare that against what actually got built. That comparison is the entire game. Most expensive AI-assisted failures are not failures of the tool. They are failures of nobody having written down, in advance, what "right" was supposed to look like.

## Claude Code prompt

"Apply before-the-idea-section-length-brief.md to before-the-idea-becomes-reality/05-final-copy.md: remove the obsolete page-break div in Section 9, add the new subsections to Sections 4, 7, 10, 11, and Field Note Closing, and apply the trims to Section 5 and Section 14 exactly as written. Then rebuild all 5 proofs."
