# Brief Spec

## Provider

Provider Request v0  
(Provider name/brand intentionally omitted in this spec; Claude should treat it as a generic AI tooling provider with the overview/requirements/context supplied in the final Provider Request.)

## Two Unique Beginner Traps

1. **The “Requirement List = Product Plan” Trap**  
   Beginners treat the provider’s “Requirements” section (and similar docs checklists) as if it were a complete product roadmap. They assume that if they meet the provider’s requirements, they’ve essentially “built the app,” ignoring all the work that happens outside the provider’s boundary: user experience, data handling, monitoring, iteration, and business model. This leads to shallow, provider-shaped apps that are expensive distractions rather than durable products.

2. **The “Context = Strategy” Trap**  
   The “Context”/background section often sounds like a ready-made story about what the app is for, who it serves, and why it matters. Beginners confuse this context with an actual product or go-to-market strategy. Instead of validating a real problem, they overfit their entire build to the provider’s example context and end up with an app that looks coherent on paper but has no users, no traction, and no path to sustainability.

## Chosen Main Trap

**Main Trap: The “Requirement List = Product Plan” Trap**

This is the central theme: treating provider requirements as the whole plan. The pamphlet should revolve around how beginners over-index on satisfying the provider’s bullet points and under-invest in understanding users, costs, data flows, and real-world usage. The message: “The provider’s requirements are a boundary, not your blueprint.”

## Secondary Trap

**Secondary Trap: The “Context = Strategy” Trap**

This appears as:
- A sidebar or one-page spread showing how “background/context” language can seduce beginners into skipping validation.
- A checklist item: “Are you copying the provider’s example context, or do you have your own data about real users?”
- A supporting warning reinforcing that docs context is illustrative, not a substitute for customer understanding or business design.

## Non-Duplication Note

- **Not Replit’s trap**: Replit’s assigned trap is about an *agent continuing to develop and spend* beyond the beginner’s understanding and budget. That’s about automated building and runaway implementation.  
  This new provider’s main trap is about *misinterpreting documentation structure* (requirements) as a complete product plan. It’s a planning and framing error, not an implementation/automation overrun.

- **Not Vercel’s trap**: Vercel’s assigned trap is about treating *deployment* as the finish line, ignoring the responsibilities of running a production app.  
  This new provider’s main trap happens *much earlier*: at the planning/spec phase. Beginners assume that meeting provider requirements equals having a viable product. It’s about mistaking “what this provider needs from you” for “what your users and business need from this product.”

## Claude Prompt

You are drafting a 5-page pamphlet in a recurring series called **“DON'T GO BROKE IN THE AGE OF AI.”**  
The audience: **first-time solo AI app builders**.  
The provider: described in a “Provider Request” section with **Overview**, **Requirements**, and **Context**. Treat it as a generic AI tooling provider whose docs are structured this way.

Your task: **Draft the full 5-page pamphlet only. No extra commentary, no process notes, no meta-explanations.**

### Series tone and style

- Clear, calm, practical, slightly blunt.
- Warning-oriented but **not** anti-tool and **not** anti-AI.
- Accessible to smart beginners (assume they can think, but not that they know software/product jargon).
- Short pamphlet feel: tight, purposeful, not a textbook.

### Core assignment for this provider

Focus on this **main trap**:

> **The “Requirement List = Product Plan” Trap**  
> Beginners treat the provider’s “Requirements” section (and similar docs checklists) as if it were a complete product roadmap. They assume that if they meet the provider’s requirements, they’ve essentially “built the app,” ignoring all the work that happens outside the provider’s boundary: user experience, data handling, monitoring, iteration, and business model.

Use this **secondary trap** as a sidebar / supporting warning:

> **The “Context = Strategy” Trap**  
> The “Context”/background section often sounds like a ready-made story about what the app is for, who it serves, and why it matters. Beginners confuse this context with an actual product or go-to-market strategy. Instead of validating a real problem, they overfit their entire build to the provider’s example context and end up with an app that looks coherent on paper but has no users, no traction, and no path to sustainability.

### Non-duplication constraints

- Do **not** reuse or echo these existing provider traps from other pamphlets:
  - Replit: “The agent keeps building past the beginner's understanding and budget.”
  - Vercel: “Deployment feels like the finish line before the beginner understands production responsibility.”
- Your pamphlet must be about **planning and framing errors around Requirements/Context**, not about:
  - Autonomous agents running wild.
  - Treating deployment as “done.”

Explicitly separate **provider-shaped requirements** from actual work needed to make a sustainable app.

### Structure: 5-page pamphlet

Write as if it will be laid out across **5 short pages**. You may use headings/subheadings to imply page breaks. A good structure:

1. **Page 1 – Cover & Hook**
   - Title in series style (e.g., *“When ‘Requirements’ Aren’t A Roadmap: How to Use Provider Docs Without Going Broke”* — you can choose a strong, on-theme title).
   - 1–2 paragraph hook explaining:
     - Who this is for (solo first-time AI app builders using this kind of provider).
     - The core danger: mistaking provider requirements for an actual product plan.

2. **Page 2 – How the Trap Works**
   - Explain concretely how beginners encounter the provider’s:
     - **Overview**
     - **Requirements**
     - **Context**
   - Show the mental shortcut:
     - “If I tick every requirement, I have a product.”
   - Describe 1–2 realistic, small-scale scenarios (no specific company names, just “you’re building…”) where:
     - The builder follows requirements perfectly.
     - Ends up with something that satisfies the provider but not a real user or real business constraint.

3. **Page 3 – The Real Work Outside the Requirements**
   - Contrast **“What the provider cares about”** vs **“What your app actually needs to survive.”**
   - Break down areas that **do not appear** in typical provider requirements but matter for not going broke:
     - Problem validation & user understanding.
     - Data sources, security, and basic privacy thinking (high-level, not legal advice).
     - Cost awareness: how usage patterns, model choices, and integrations can affect monthly spend.  
       - Do **not** invent specific prices, quotas, or limits.
       - Use language like “can become expensive quickly” rather than naming numbers.
     - Monitoring, logging, and how you’ll notice when things go wrong.
   - Practical advice: simple, low-friction checks a solo builder can do *before* building to spec.

4. **Page 4 – Sidebar: The “Context = Strategy” Trap**
   - A clearly separated section, visually written like a sidebar.
   - Explain how the provider’s **Context** section or example use-case:
     - Is illustrative, not a business plan.
     - Can seduce you into copying the story instead of doing your own research.
   - Provide a **short checklist** such as:
     - “Questions to answer that the provider’s Context will not answer for you.”
   - Include 1–2 small examples of “overfitting to example context” and how to correct that behavior.

5. **Page 5 – A Practical Anti-Checklist**
   - A concise, slightly blunt checklist of **“If all you’ve done is…”** items that signal you are still trapped in the provider’s framing.
   - A parallel list of **“Do this instead”** actions that:
     - Respect the provider’s requirements.
     - But intentionally step outside them to validate:
       - Real user needs.
       - Rough cost exposure.
       - Data handling basics.
       - A minimal feedback loop once the app is live.
   - Close with a short, calm warning about **opportunity cost**:
     - You can go broke not just by overspending, but by building the wrong thing perfectly to spec.

### Provider-specific handling

- The provider’s structure is:
  - **Overview**: high-level description of what the request is about.
  - **Requirements**: bullets describing what they need.
  - **Context**: background or scenario.
- Treat these as **representative of many AI providers’ docs patterns**, not as a unique brand.
- Do **not**:
  - Make up precise usage tiers, pricing models, or technical limits.
  - Claim that the provider promises outcomes it does not explicitly promise.
- Use conservative, future-proof language:
  - Prefer “may,” “can,” “often,” “tends to,” to avoid overclaiming.
  - Acknowledge that capabilities, defaults, and limits can change over time.

### Source / fact-check targets and caution

Be especially careful around:

- **Cost/limits**:
  - Do not state exact dollar amounts, specific free-tier quotas, rate limits, or storage caps.
  - Only talk about cost and limits in qualitative terms (e.g., “can escalate with heavy usage,” “has usage-based pricing you need to understand”).
- **Security/privacy**:
  - Do not claim the provider is compliant with any specific regulation (e.g., GDPR, HIPAA) unless that is explicitly part of a hypothetical example and clearly labeled as such.
  - Frame security/privacy as **the builder’s responsibility to think about and verify**, not as something guaranteed by the provider.
- **Performance and guarantees**:
  - Do not claim the provider guarantees uptime, accuracy, or specific performance metrics.
  - Stick to describing typical patterns and risks generically.

### Voice and clarity guidelines

- Direct, grounded, no fluff.
- Avoid deep technical jargon; when you must use a term, explain it simply.
- Focus on **practical, behavior-changing advice**:
  - What to watch for.
  - What to do instead.
- Do **not** ask the reader questions about their preferences; you are giving them a clear warning and path.

### Output requirement

- Output **only** the finished 5-page pamphlet draft text, with headings/subheadings where helpful.
- Do **not** include any meta commentary, planning notes, or explanation of your choices.
