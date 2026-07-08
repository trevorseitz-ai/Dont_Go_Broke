> ⚠️ DEPRECATED — 2026-07-07. Superseded by /factory/station-map-v2.md and /standards/.
> Historical record only. Agents: do not follow anything in this file.

# Brief Spec

## Provider

v0 by Vercel (v0.app)

## Two Unique Beginner Traps

1. **Polished interface illusion (main trap)**  
   v0 can quickly generate beautiful, interactive UIs and even deploy them. For a first‑time solo builder, this creates a strong illusion that “the app is basically done” once the screen looks right and loads on a public URL. In reality, core product responsibilities are often missing or only partially implemented: data modeling, error handling, auth, performance, monitoring, integration with real backends, and ongoing cost/usage awareness.

2. **Hidden complexity behind generated code and integrations (secondary trap)**  
   v0 can sync with GitHub, generate full React/Next.js codebases, and deploy to Vercel. That power hides substantial complexity: version control, environment configuration, API keys and secrets, state management, data fetching strategies, backend dependencies, and production maintenance. Beginners can end up “owning” a repo and deployment stack they don’t understand, making future changes, debugging, and cost control risky and stressful.

## Chosen Main Trap

**The interface looks finished before the product actually exists.**

Key elements to emphasize:
- v0’s visually impressive generated UIs and instant deploys create emotional closure: “my app is live.”
- A good‑looking, clickable interface is only a thin slice of a real product.
- Missing pieces often include data flow, persistence, authentication, input validation, error states, performance choices, rate limiting, observability, and explicit cost boundaries.
- This is not v0’s fault; it’s how our brains react to polished visuals and fast feedback.
- The risk is overspending time/credits and launching “products” that fail under even light real‑world use because core responsibilities were never defined or implemented.

## Secondary Trap

**Generated code and integrations hide long‑term ownership work.**

Key elements to emphasize:
- v0 can generate complex frontends and wire them to Vercel deployment and GitHub repos with little friction.
- Beginners can accept default patterns (framework, data fetching, auth scaffolding) without understanding trade‑offs.
- The code “looks professional” but may be hard to extend or debug without foundational knowledge.
- GitHub sync and Vercel deploys imply responsibilities: reviewing diffs, managing environments, handling secrets, and monitoring runtime behavior and costs.
- Over time, this can turn into an unmaintainable “black box” project that’s expensive to fix or port elsewhere.

## Non-Duplication Note

- **Not duplicating the Replit trap**  
  The Replit brief’s trap was: *“The agent keeps building past the beginner's understanding and budget.”* That focused on an agent autonomously continuing to build and iterate, driving hidden resource consumption beyond the user’s comprehension.  
  The v0 main trap is different: it centers on *perception*, not agent over‑building. With v0, the danger is that *the user* stops too early because the UI looks finished, not that the tool keeps going too far. The brief will focus on the illusion of completion created by polished UI and instant deploy, not on runaway automated building or background usage.

- **Not duplicating the Vercel (core platform) trap**  
  The Vercel brief’s trap was: *“Deployment feels like the finish line before the beginner understands production responsibility.”* That was about treating a successful deploy as the end of the process.  
  For v0, the main trap is earlier and more visual: “the app looks done” as soon as a polished interface appears in the v0 editor or on a quick deploy, even if there is no real business logic, data model, or safety net. The secondary trap is about owning generated code + integrations you don’t fully grasp, whereas the Vercel brief emphasized generic production responsibilities (uptime, logs, scaling).  
  In short:
  - Vercel brief: “Deploy ≠ Done.”  
  - v0 brief: “Pretty screen ≠ Product,” plus “Generated stack ≠ Understandable stack.”

## Claude Prompt

You are drafting a 5‑page pamphlet in the series **“DON’T GO BROKE IN THE AGE OF AI”** for first‑time solo AI app builders.

Your audience:
- Smart beginners building their **first** AI‑enabled web apps.
- Likely technical enough to follow basic web/app concepts, but not experienced with production systems.
- Often over‑impressed by polished tooling and UI.

Series tone and style to match:
- Clear, calm, warning‑oriented, practical.
- Slightly blunt but not cynical.
- Not anti‑tool and not anti‑AI.
- Accessible without dumbing things down.
- Aim for a short, 5‑page pamphlet feel: tight, high‑signal writing, not long‑form essays.

Provider for this pamphlet:
- **v0 by Vercel** (v0.app)
- This pamphlet must be specifically about **v0**, not a generic AI provider.

Your job:
Draft the **full 5‑page pamphlet** text only. No extra commentary, no explanation of your process, no headings like “analysis.” Just the content as Trevor would see it.

Use this structure (page markers are conceptual, not literal page breaks):

---

### PAGE 1 — Cover & Premise

Goal:
- Introduce the brief.
- Name v0 explicitly.
- Frame the main risk clearly.

Include:
- A strong title along the lines of:  
  **“DON’T GO BROKE IN THE AGE OF AI: v0 by Vercel”**  
  with a subtitle that hints at the main trap, e.g.  
  **“When a Beautiful Screen Tricks You Into Thinking You Have a Product”**  
  (Feel free to refine the subtitle within the same idea.)
- A short opening that:
  - States that v0 is powerful and impressive.
  - Emphasizes that v0 itself is *not* the problem.
  - States the real problem: beginners confusing a finished‑looking interface with a finished product.
  - Frames the pamphlet as a practical guide to avoiding that trap.

Tone: Calm and direct, 3–5 concise paragraphs max.

---

### PAGE 2 — The Main Trap: The Interface Looks Finished Before the Product Exists

Main trap to emphasize:
- **The interface looks finished before the product actually exists.**

Explain in practical terms:
- What v0 does at a high level:
  - Generate and iterate web apps/interfaces from prompts.
  - Produce visually polished UIs.
  - Deploy working sites and apps on Vercel.
- How this creates the illusion:
  - You see a slick, responsive UI, maybe even a public URL.
  - You can click around, run through a demo flow, and feel “done.”
- What’s **usually missing or under‑defined** at this point:
  - Real data flow and persistence (not just mocked or placeholder data).
  - Product logic and edge cases (what happens when things fail or inputs are weird).
  - Authentication and authorization decisions.
  - Background jobs or backend workflows (if relevant).
  - Observability: logs, metrics, error tracking.
  - Clear understanding of what costs money and why.

Explicitly connect to money/time risk:
- Overconfidence leads to:
  - Shipping something that breaks on first real users.
  - Iterating on visual details while core product responsibilities never get written down.
  - Burning time/credits on re‑generating UI rather than clarifying requirements and behavior.

Note:
- Keep the focus on **v0’s visual strength** as the psychological trigger.
- Make clear that this is about **how humans react** to polished screens, not “v0 is bad.”

---

### PAGE 3 — What v0 Actually Gives You vs. What a Real Product Needs

Goal:
- Provide a concrete mental model: “Here’s what v0 is great at, and here’s what you still own.”

Break it down into two contrasting sections (use clear sub‑headings or bullet lists):

1. **What v0 is great at (and you should absolutely use it for):**
   - Quickly generating interface layouts and flows.
   - Iterating on styling, components, and UI copy.
   - Scaffolding a React/Next.js‑style app structure (or whatever is accurate based on current docs).
   - Spinning up deployable demos and prototypes on Vercel.
   - Syncing to GitHub so you have real code you can inspect and modify.

2. **What v0 does *not* remove from your responsibility:**
   - Defining your core product logic and data model.
   - Designing how data moves between frontend, backend, and any external APIs.
   - Choosing and implementing authentication/authorization patterns.
   - Handling failures, timeouts, and validation errors.
   - Monitoring behavior in production: logs, alerts, and basic debugging.
   - Understanding how usage and traffic could translate into cost on the underlying services (including Vercel and any backends).

Make these points:
- A beautiful, responsive UI is **only the surface** of a working product.
- v0 can be an excellent starting point, but it does not magically encode your business rules or guarantees.
- If you don’t write down and test what your app is *supposed* to do in detail, no generator can save you.

Keep this page concrete and practical, with short paragraphs and lists.

---

### PAGE 4 — Secondary Trap: Hidden Complexity in Generated Code and Integrations

Secondary trap to emphasize:
- **Generated screens and code may hide missing product logic, data flow, authentication, backend behavior, deployment assumptions, and maintenance work.**

Frame it specifically around v0’s features:
- v0 can:
  - Generate full code for your UI/application.
  - Sync that code to GitHub.
  - Deploy the resulting app on Vercel.
- This is powerful and convenient, but it can create a second illusion:
  - “If it’s in GitHub and deployed, it must be ‘real’ production‑grade code.”
  - “If it runs, I don’t need to understand what’s inside.”

Clarify where the danger lies:
- The code might:
  - Use patterns or abstractions you don’t recognize.
  - Make assumptions about data sources or API responses.
  - Include placeholder logic or stubbed endpoints that look real on the surface.
  - Omit robust error handling, security checks, or performance considerations.
- The integrations might:
  - Assume certain environment variables are set.
  - Rely on secrets or API keys that need careful storage.
  - Tie you to Vercel‑specific deployment patterns without you realizing it.

Introduce a concise **checklist mindset** for the reader:
- Before you “accept” generated code + integrations as your stack, you should:
  - Know where the data actually comes from and where it’s stored.
  - Be able to explain the basic flow of a single user action through the code.
  - Identify where authentication and authorization are handled (or missing).
  - Understand how you would roll back a bad change from GitHub/Vercel.
  - Have at least a rough sense of what parts of your architecture could incur cost as usage grows.

The tone should empower:
- You are not required to become a framework expert overnight.
- But you **do** need a minimal understanding of the generated system if you’re going to bet a product (and money) on it.

---

### PAGE 5 — Practical Guardrails: Using v0 Without Going Broke

Goal:
- Give the reader specific, concrete practices to use v0 safely and effectively.
- Reinforce that the tool is valuable when used with eyes open.

Include a short intro:
- Restate that v0 is useful and impressive.
- The goal is not to avoid it, but to avoid **overconfidence** and **blind ownership**.

Then provide a set of practical guardrails / rules of thumb, for example:

1. **Treat the first beautiful screen as a draft, not a deliverable.**
   - After v0 generates something impressive, pause.
   - Write down what your app must actually do: flows, data, rules, error cases.
   - Use that spec to drive further prompts and manual edits, not just “make it prettier.”

2. **Separate “demo mode” from “product mode.”**
   - Decide explicitly whether you are building:
     - A demo/prototype to show someone, or
     - The first version of a real product you’ll maintain.
   - For demos, v0‑generated UI with light backing logic might be enough.
   - For products, you must invest in understanding the code and architecture.

3. **Interrogate the code and flows before inviting real users.**
   - Walk through a single user flow and trace it in the code.
   - Look for:
     - Where data is validated.
     - How failures are handled.
     - Where external calls are made and what happens if they fail.
   - If you can’t answer these questions, you are not ready for real usage, regardless of how good it looks.

4. **Own your integrations: GitHub and Vercel included.**
   - Know the basic lifecycle:
     - v0 generates → GitHub stores → Vercel deploys.
   - Learn at least:
     - How to read a diff in GitHub.
     - How to roll back a deploy on Vercel.
     - Where to find logs or runtime errors.
   - This is your safety net when something inevitably goes wrong.

5. **Stay conservative about cost and scale assumptions.**
   - Avoid promising big user launches until you:
     - Understand what parts of your stack might be usage‑sensitive.
     - Have verified how your app behaves under basic load (not just one user clicking slowly).
   - Remember that pricing models, credits, and limits can change; build with the assumption that you will need to check the current docs before scaling.

Close with:
- A short, direct reminder that:
  - v0 is an accelerator, not a guarantee.
  - A screen is not a product.
  - If you slow down at the moment everything *looks* done and deliberately check what’s actually implemented, you can use v0 to move fast **without** going broke.

---

Important constraints for you (Claude) while drafting:

1. **Provider specificity**
   - Make it obviously about **v0 by Vercel**, not generic “AI coding tools.”
   - Refer to v0’s capabilities accurately based on its current official docs:
     - v0’s role as an AI builder for web apps/interfaces from prompts.
     - Ability to generate working applications and UIs.
     - Ability to publish live websites and deploy to Vercel.
     - Ability to sync with GitHub.
   - Avoid speculating about features that are not clearly documented.

2. **Pricing and limits**
   - **Do not invent exact prices, credit amounts, quotas, or hard limits.**
   - When discussing cost, use conservative, general language like:
     - “v0 uses a credit/usage‑based model; check the current pricing page for specifics.”
     - “As your usage or traffic increases, underlying services may incur higher costs.”
   - Do not give numeric examples unless they are clearly and verifiably stable over time; if unsure, omit numbers.

3. **Fact‑check targets**
   - Before stating something as fact, you should verify against:
     - The official v0 site and documentation (e.g., https://v0.dev and/or https://v0.app or current canonical domain).
     - Vercel’s official docs on:
       - v0 integration with Vercel deployments.
       - GitHub integration (if and how v0 works with repos).
     - Any official Vercel/v0 blog posts or product pages describing:
       - v0’s capabilities.
       - Its positioning as an AI app or UI builder.
   - If a detail cannot be confidently verified (e.g., exact frameworks supported, specific deployment pipeline steps, internal model details), describe it in general terms or leave it out.

4. **Non‑duplication with other briefs**
   - Do not reuse or emphasize the following traps already covered in other provider briefs:
     - Replit: “The agent keeps building past the beginner’s understanding and budget.”
     - Vercel (core platform): “Deployment feels like the finish line before the beginner understands production responsibility.”
   - For v0, focus on:
     - The *visual illusion* of completion.
     - The hidden complexity and ownership of generated code and integrations.

5. **Output format**
   - Provide **only** the pamphlet text, in clear sections that map to Pages 1–5.
   - Use headings and sub‑headings as needed to make it readable, but do not include any meta‑commentary about being an AI or about this prompt.
   - Keep the overall length consistent with a concise 5‑page pamphlet: substantial enough to be useful, but tightly edited and free of fluff.
