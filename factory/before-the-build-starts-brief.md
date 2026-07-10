# Before the Build Starts — Fix & Expansion Brief

Target file: `products/dont-go-broke/booklets/before-the-build-starts/05-final-copy.md`

## 1. Remove the stray duplicate title (fixes the "page 3/4" issue)

The manuscript opens with a leftover title block that duplicates what the build pipeline's own cover page already generates — this is what's creating the stray, nearly-blank page between the Table of Contents and Field Note Opening. Delete these lines from the very top of the file:

```markdown
# Before the Build Starts

*Don't Go Broke in the Age of AI*

---

## Field Note Opening
```

Replace with just:

```markdown
## Field Note Opening
```

## 2. The "memory is unreliable" sentence

Verified locally: once fix #1 is applied, the whole document shifts up a page and this sentence no longer splits across a page boundary in my test render. No separate change needed — just confirm on the next proof that it landed clean. If it's still split, let me know and I'll dig into it specifically.

## 3. Extend Section 1 to 1.75 pages (currently 1.18)

Insert after "The first step is knowing what you need the tool to build." and before "## Section 2":

> ### A Tale of Two Builders
>
> Two builders had the same idea on the same day: a simple app to help freelance photographers track which clients still owed them money.
>
> The first builder opened an AI tool immediately. "Build me an app for photographers to track invoices," they typed. The AI, working from a category instead of a job, generated a full client-management platform: contact records, project galleries, invoice generation, payment processing, email reminders, and a reporting dashboard. It looked impressive. It also took most of the afternoon to review, needed three different services connected before anything worked end to end, and included features — like the gallery — that had nothing to do with the actual problem of unpaid invoices.
>
> The second builder spent twenty minutes before opening any tool at all. They wrote: "A freelance photographer needs to see, at a glance, which clients haven't paid yet, so they can follow up before the amount becomes a write-off." That is a job, not a category. When they handed this to the same AI tool, the output was a single screen: a list of clients, an amount owed, a paid/unpaid toggle. Nothing else. It took ten minutes to review, and every part of it mapped directly to the problem.
>
> Both builders used the same tool. Both builders got exactly what they asked for. The difference in cost, review time, and clarity did not come from the platform — it came from the twenty minutes one of them spent before opening it.
>
> This is the pattern worth internalizing before you read any further in this booklet: every section that follows is really just a more structured version of what the second builder did instinctively. Define the job. Constrain the scope. Write it down before the tool has a chance to guess.

## 4. Extend Section 2 (currently 1.49 pages)

Insert after "Fifteen minutes of definition before building. That is the price. The alternative is paying ten times that in rework after building." and before "## Section 3":

> ### What a Vague Job Statement Costs in Practice
>
> Consider how a single vague word compounds. A builder writes: "Users need to manage their subscriptions." The word "manage" is doing an enormous amount of unexamined work. Does "manage" mean view? Cancel? Upgrade? Pause? Compare pricing? Export a receipt? Each interpretation implies a different set of screens, a different amount of database complexity, and a different amount of AI-generated code you will need to review.
>
> An AI handed "manage their subscriptions" will not ask which of these you meant. It will pick the most common interpretation across similar apps in its training data, which usually means all of them. You will get cancel flows, upgrade flows, billing history, and a comparison table, when the job you actually cared about might have been just one of these — say, "a subscriber needs to cancel without calling support," full stop.
>
> The fix costs almost nothing. Replace "manage their subscriptions" with the specific action: "A subscriber needs to cancel their plan in under a minute, without needing to contact support." That single sentence eliminates every screen that isn't the cancellation flow, before the AI ever generates one.
>
> This is the real value of the fifteen-minute job statement. It is not a formality. It is the single cheapest edit you will ever make to a project, because it happens before a single line of code exists, rather than after you have already paid to generate, review, and remove the parts you didn't need.

## 5. Extend Section 3 (currently 1.50 pages)

Insert after "Decide what version one really is before you open the AI tool. Write it down. Make the list short. If the list is not short, you are building the dream version, and the dream version is the one most likely to cost more than you planned." and before "## Section 4":

> ### Sorting a Real Feature List
>
> Here is what the "must work / can wait / not yet" sort looks like applied to an actual idea: a builder wants an app that helps small gyms schedule classes.
>
> Their first feature list, written in one sitting, includes: class scheduling, member sign-ups, waitlists, instructor payroll, a mobile app, push notification reminders, a loyalty points system, social sharing, and an analytics dashboard for the gym owner.
>
> Sorted honestly, it looks different. **Must work:** class scheduling, member sign-ups. Without these two, there is no product — a gym cannot use an app that doesn't let members see or book a class. **Can wait:** waitlists, reminders. Useful, and worth adding once the core loop is proven, but a gym can operate for a few weeks without them. **Not yet:** instructor payroll, a mobile app, loyalty points, social sharing, an analytics dashboard. Every one of these is a legitimate feature for a mature product and a serious distraction for a version one, because each one adds its own data model, its own edge cases, and its own review burden before you have even confirmed that gyms want the core scheduling loop in the first place.
>
> Notice what happened to the list: nine features became two "must work" items. That is not a smaller vision. It is the same vision, sequenced correctly. The gym owner still gets payroll and a loyalty program eventually — just not before you know the scheduling feature actually works for a real gym.

## 6. Extend Section 4 (currently 1.43 pages)

Insert after "Write the blueprint. Keep it to one page. Make it plain. Then use it as the measuring stick for everything the AI builds." and before "## Section 5":

> ### Reviewing Against the Blueprint, Not the Screen
>
> The real test of a blueprint comes after the AI generates something, not before. Here is how that review actually works.
>
> Say your blueprint lists four required screens: a login screen, a dashboard, an item-entry form, and a summary view. The AI generates all four — plus a settings screen, a user-profile screen, and an onboarding wizard with three additional slides.
>
> Without a blueprint, this looks like the AI being thorough. The extra screens look polished. They feel like generosity. A builder without a written reference might simply accept all seven screens, because nothing on the page says they weren't supposed to be there.
>
> With a blueprint in hand, the review is mechanical instead of impressionistic: four screens were requested, seven were built. Three screens exist that were never part of the plan, meaning three screens now need to be reviewed, tested, and maintained that you did not budget time or money for. The blueprint does not tell you whether the extra screens are bad — it tells you that a decision was made without you, and now you get to decide whether to keep it, on purpose, instead of by default.
>
> This is what makes the blueprint a contract rather than a suggestion. A suggestion can quietly expand. A contract has to be checked against, line by line, and anything outside it has to be a deliberate choice rather than an accident of what the AI assumed you probably also wanted.

## 7. Extend Section 5 (currently 1.32 pages — the thinnest, biggest addition here)

Insert after "Map the journey before you build. Write it as a story, not a diagram. Keep it focused on the core job. If the journey has more than ten steps, version one might be too big." and before "## Section 6":

> ### Why the Journey Catches What the Blueprint Misses
>
> A blueprint and a user journey can both be technically complete and still describe two different products, because a list of screens does not tell you what happens between them.
>
> Take a simple example: a blueprint for an expense-tracking app lists three screens — a login screen, an entry form, and a summary view. That blueprint is accurate. It is also silent on a dozen questions a real user will hit immediately. What does the summary view show the very first time, before any expenses exist — a screen full of empty charts, or a helpful prompt to add the first entry? If someone submits the entry form with the amount field blank, what happens — a clear error, or a confusing blank confirmation? If someone closes the app mid-entry and reopens it, is their half-typed expense still there, or gone?
>
> None of these questions are visible in a screen list. They only become visible when you narrate the actual sequence a person moves through — arrive, see nothing yet, get told what to do first, do it, see it saved, come back later, do it again. Write that sequence out and the missing empty-state screen, the missing validation message, and the missing "unsaved work" behavior all surface on their own, because the story doesn't make sense without them.
>
> This is also where AI-generated products go wrong most often, because a language model trained on thousands of expense-tracking apps will happily generate a plausible-looking summary screen, entry form, and login flow without ever being asked what a first-time user sees before any data exists. It fills the gap with whatever pattern is most common in its training data, which is not the same as the pattern your actual first user will experience. Walking through the journey before the build is how you catch that gap while it is still a sentence you can edit, instead of a screen you have to explain to a confused new user after launch.
>
> A journey does not need to be elaborate to do this job. Ten short sentences describing what the user sees and does, in order, will surface more real problems than an hour spent staring at a polished mockup.

## 8. New Back Matter (this booklet currently has none)

Insert after the very end of "Field Note Closing" (after "The blueprint comes before the build. Always."):

> ## Back Matter
>
> ### The Pre-Build Prompt Pack
>
> You do not have to define the job, the scope, the blueprint, and the boundaries entirely on your own. Use these prompts to get the AI to help you stress-test your own thinking before you hand over anything for it to build.
>
> **The Job Clarifier Prompt**
> > "I am about to describe a product idea to you. Before you suggest any features, screens, or technology, ask me these three questions one at a time: Who specifically is the user? What specific problem are they facing? What is the one thing the product must do to solve it? Do not let me answer with a feature list — push back if I do."
>
> **The Scope Guard Prompt**
> > "Here is my list of features: [paste your list]. Sort them into three groups: 'must work' (the product fails at its core job without this), 'can wait' (helpful, not required for version one), and 'not yet' (belongs to a future version). Be strict. If you are unsure whether something is must-work, default to can-wait."
>
> **The Blueprint Stress-Test Prompt**
> > "Here is my blueprint: [paste your blueprint]. Read it as if you have never spoken to me. Tell me anything that is ambiguous, anything you would have to guess about, and any screen or piece of data you would need to invent because it was not specified."
>
> **The Boundary-Setting Prompt**
> > "I am about to ask you to build the following: [describe the task]. Before you begin, list what you believe is in scope, what you believe is out of scope, and any assumption you are about to make that I have not explicitly confirmed. Wait for my approval before generating any code."
>
> **The Handoff Completeness Prompt**
> > "Here is my full handoff: job statement, version one scope, blueprint, user journey, and agent boundaries. [paste all five]. Tell me which of these five elements is the least specific, and what a builder in my position would need to add to make it usable without guessing."
>
> ### The Blueprint & Handoff Worksheet
>
> Use this worksheet to assemble everything this booklet asked you to define, in one place, before you open an AI tool.
>
> <p class="worksheet-item"><strong>1. The Job Statement</strong></p>
>
> > The user is: __________, who faces the problem of __________, and needs the product to __________.
>
> <p class="worksheet-item"><strong>2. Version One Scope</strong></p>
>
> > Must work: __________
> >
> > Can wait: __________
> >
> > Not yet: __________
>
> <p class="worksheet-item"><strong>3. The Blueprint</strong></p>
>
> > Purpose: __________
> >
> > User: __________
> >
> > Core flow: __________
> >
> > Required screens: __________
> >
> > Required data: __________
> >
> > Explicitly excluded: __________
>
> <p class="worksheet-item"><strong>4. The User Journey</strong></p>
>
> > Write the journey as a short story, start to finish: __________
>
> <p class="worksheet-item"><strong>5. Agent Boundaries</strong></p>
>
> > What the agent may build: __________
> >
> > What the agent must not build: __________
> >
> > Where the agent must stop: __________
> >
> > What the agent must not decide: __________
>
> <p class="worksheet-item"><strong>6. Build Receipt Snapshot</strong></p>
>
> > Problem definition: __________
> >
> > User persona: __________
> >
> > Success criteria: __________
>
> Keep this worksheet somewhere you can find it during the build. It is the single reference every later booklet in this series assumes you already have in hand.

Note: this booklet already gets its next-booklet-cover page automatically from the shared build script (it's booklet 2 of 5, not the last), so no separate action needed there — the new Back Matter content will simply appear before that existing page.

## Expected outcome

Items 3-8 combined should add roughly 8-9 pages (5 section extensions + a 4-5 page back matter). Given word-to-page estimates have run off before in this project, expect this may need a small top-up round after the first rebuild to hit exactly 10 — I'll check the real proof and draft any needed additions once you send it.

## Claude Code prompt

"Apply before-the-build-starts-brief.md to before-the-build-starts/05-final-copy.md: remove the stray duplicate title (section 1), add the 5 section extensions (sections 3-7), and add the new Back Matter (section 8) at the end after Field Note Closing. Then rebuild all 5 proofs."
