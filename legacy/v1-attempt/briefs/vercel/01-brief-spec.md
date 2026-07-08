> ⚠️ DEPRECATED — 2026-07-07. Superseded by /factory/station-map-v2.md and /standards/.
> Historical record only. Agents: do not follow anything in this file.

# Brief Spec

## Provider

Vercel

## Two Unique Beginner Traps

1. **Main Trap – “Deploy = Done” Illusion**  
   Vercel makes it incredibly easy to go from Git repo to live URL. For a first-time solo builder, that “successfully deployed” message + working URL can feel like the finish line:  
   - “It loads in the browser, so it must be safe.”  
   - “It’s on the internet, so it must be ready for real users.”  
   - “If it were expensive or broken, Vercel would warn me.”  
   In reality, a working deploy only proves the app is reachable. It says nothing about whether the builder understands:
   - environment variables and secrets  
   - preview vs production behavior  
   - function execution and usage-based resources  
   - logging, monitoring, and rollback  
   - how their AI and other third‑party APIs are being called in production  
   This trap is about mistaking deployment convenience and a clean dashboard for completed production responsibilities.

2. **Secondary Trap – “Preview ≈ Production” Confusion**  
   Vercel’s preview deployments are powerful, but can blur into production for beginners:
   - Everything looks similar: same UI, similar URLs, often same app behavior.
   - It’s easy to test with one set of environment variables, then promote to production where variables, domains, or usage patterns differ.
   - Builders may accidentally share preview URLs with real users, or assume staging/preview behavior (limited traffic, toy data, test API keys) will match real-world production behavior.  
   This trap is about not understanding how preview vs production differ in:
   - environment variables and secrets  
   - logging and observability  
   - domains and URLs  
   - traffic patterns and performance  
   - which keys, APIs, and data stores are actually live

## Chosen Main Trap

**“Deployment Is Not Done: Vercel’s Live URL Makes Your AI App Feel Finished Before You’re Ready To Be Responsible For It.”**

This brief should center the danger of treating “successfully deployed to Vercel” as the end of the journey instead of the beginning of real responsibility. The core message: Vercel made it easy to deploy; you still have to operate and supervise your app.

## Secondary Trap

**“Your Preview Is Not Your Production: Don’t Confuse Test Behavior With Real-World Risk.”**

This will appear as a secondary warning woven through the main narrative, likely as:
- a sidebar on preview vs production  
- a checklist item before inviting users  
- concrete examples of environment and behavior differences between preview and production

## Non-Duplication Note

- **Versus Replit brief trap:**  
  The Replit trap is about **the agent building past the beginner’s understanding and budget** inside a development environment. The risk is over‑autonomous coding and hidden scope/complexity, not deployment.  
  The Vercel trap here is specifically about **post-deployment responsibility**: a real, reachable app that feels finished purely because it’s live. The focus is on production behavior, environment configuration, monitoring, and responsibility for traffic and usage—not on code generation or the build process.

- **Versus v0 by Vercel brief trap:**  
  The v0 trap is that **the UI looks finished before the app actually exists**—a design/prototype illusion. It’s about front-end completeness masking missing back-end logic, data, and integrations.  
  This Vercel brief is about **deployment illusions**: a real, functioning deployment that feels like the end state. The danger isn’t that the app secretly doesn’t exist; it’s that the builder underestimates what it means to operate a real, reachable AI app on the internet.

This Vercel brief stays specific to:
- deployment and hosting reality  
- production vs preview responsibilities  
- Vercel’s role vs third-party API costs and risks  

and does not overlap with agent overreach (Replit) or prototype-looking-finished (v0).

## Claude Prompt

You are an AI writing a 5-page pamphlet in a series called “DON’T GO BROKE IN THE AGE OF AI,” aimed at first-time solo AI app builders.

Your task: **Draft the full 5-page Vercel-specific pamphlet copy only**, in clean markdown, with no extra commentary before or after.

Follow these instructions carefully.

---

### 1. Series & Audience

- Series title: **DON’T GO BROKE IN THE AGE OF AI**  
- Format: **Short 5-page pamphlet** (think 5 distinct sections/pages, not printed layout details).  
- Audience:  
  - First-time **solo** AI app builders  
  - Smart, technical beginners, but **new to production deployment and operations**  
  - Probably comfortable with JavaScript/TypeScript, React/Next.js-level concepts, and basic Git, but not experienced with operating production web apps or AI workloads.

- Established tone:
  - Clear, calm, **warning-oriented**
  - Practical, slightly blunt
  - Not anti-tool, not anti-AI
  - Accessible to smart beginners
  - No hype, no fear-mongering
  - Respect the reader’s intelligence; don’t talk down.

---

### 2. Provider & Focus

This pamphlet is **specifically about Vercel**.

- Vercel context to reflect:
  - Vercel is a platform for building, deploying, scaling, and managing web applications, including AI-powered and agentic workloads.
  - It makes deployment feel extremely simple: connect a repo, push code, get a live URL, preview changes, and promote to production.
  - That simplicity is valuable and a feature, not a flaw.

- The brief must **not** read like a generic hosting or generic deployment warning.  
  It should clearly be about:
  - how Vercel works in practice (conceptually)
  - how Vercel’s specific affordances and UI can mislead beginners about what “done” means.

- Also: cleanly separate **Vercel platform responsibilities** from **third-party API responsibilities**:
  - Vercel hosts and runs your code, serves your assets, manages functions, deployments, domains (if configured), etc.
  - Your app may call AI APIs (e.g., OpenAI or others) or other services. Those usage costs and behaviors are **not Vercel’s fault/responsibility**.
  - Be explicit where the boundary lies: “Vercel runs your function, your function calls the AI API, the AI API charges you” etc.

---

### 3. Traps To Emphasize

#### Main Trap (Primary Focus)

**“Deployment Is Not Done: Vercel’s Live URL Makes Your AI App Feel Finished Before You’re Ready To Be Responsible For It.”**

Key ideas to weave throughout:

- Vercel makes deployment **feel like the finish line**:
  - You connect GitHub/GitLab/Bitbucket.
  - You push main.
  - Vercel builds it, gives you a URL, and everything “just works.”
- That’s the point of Vercel: **they remove friction** from getting to a live URL.
- The trap: a beginner assumes:
  - Live = safe.
  - Live = ready for real users.
  - Live = cheap and under control.
  - Live = if something were wrong, Vercel would loudly stop me.
- Reality:
  - A successful deploy only proves your app can start and respond to requests.
  - It does **not** prove:
    - You configured environment variables and secrets correctly.
    - You understand how serverless/edge/function executions are billed or limited.
    - You’ve looked at logs or analytics to see what actual traffic/usage looks like.
    - You can roll back if a deploy breaks something.
    - You’ve set sane limits on how your app calls external AI APIs, databases, etc.

Make it clear:
- Vercel is not the problem.
- The danger is beginners treating “Deploy succeeded” as “My responsibilities are over.”
- A live URL is **proof that your app is reachable**, not that it’s safe, cheap, or complete.

#### Secondary Trap (Supporting)

**“Your Preview Is Not Your Production: Don’t Confuse Test Behavior With Real-World Risk.”**

Key points:

- Vercel’s preview system is powerful:
  - Every pull request/branch can get its own preview deploy.
  - It often looks identical to production.
- Risk for beginners:
  - They think “It worked in preview, so production will behave the same.”
  - They don’t understand:
    - preview vs production **environment variables/secrets**
    - differences in **domains/URLs**
    - impact of **real traffic** vs test traffic
    - what logs/analytics they’re actually looking at
  - They may share **preview URLs** with users (or themselves) and accidentally treat them as “production.”
- Use this as:
  - A sidebar or dedicated “Page” warning
  - A checklist item: “Before you invite users, verify these differences between preview and production…”

---

### 4. Core Concepts To Cover (Vercel-Specific)

You must explain (in beginner-friendly but not condescending terms):

1. **What “Deploy” Actually Means on Vercel**
   - Conceptual flow: Git → build → deployment → URL.
   - High-level explanation of:
     - Build step: how Vercel builds your Next.js/React app, functions, etc.
     - Deployment: snapshots of your code/config running in Vercel’s infra.
   - Emphasize: “deploy succeeded” = your code built and started, not that it’s well-configured, secure, or cost-controlled.

2. **Environment Variables & Secrets**
   - Why they matter:
     - AI API keys
     - Database URLs
     - Internal service tokens
   - Difference between:
     - local development
     - preview deployments
     - production deployments
   - Dangers:
     - Using test keys in production or vice versa.
     - Accidentally exposing secrets if misconfigured.
     - Forgetting to set prod env vars and assuming “if preview worked, prod is fine.”

3. **Preview vs Production**
   - Conceptually explain:
     - Preview deployments for branches/PRs.
     - Production deployment for main (or the configured prod branch).
   - Show how:
     - Same code, different environment.
     - Different URLs/domains (possibly custom domain in prod).
     - Potentially different environment variables and behavior.
   - Warn about:
     - Testing only in preview with dummy data.
     - Not re-checking behavior once promoted to production.

4. **Functions, Usage, and Observability**
   - Explain conceptually that:
     - Vercel can run serverless functions, edge functions, etc.
     - Each request that hits those functions is real compute work somewhere.
   - For AI apps:
     - Your Vercel function might call an AI API.
     - Vercel is responsible for executing your function and may meter that usage.
     - The AI provider is responsible for charging you for the API call itself.
   - Stress:
     - You must watch logs and analytics.
     - You must understand roughly where load/cost might come from: many small invocations, heavy requests, long-running operations, etc.
   - Do **not** quote specific prices, quotas, or exact execution limits.

5. **Domains, Sharing, and “Going Live”**
   - Differentiate between:
     - Vercel-provided URLs.
     - Custom domains you connect.
   - Make clear the **moment you are responsible**:
     - As soon as there is any URL you share with others, you are responsible for what that app does.
   - Encourage:
     - Keeping early deployments limited to yourself / test users.
     - Getting comfortable with rollback and monitoring before wide sharing.

6. **Rollback and Change Management**
   - Explain:
     - Vercel lets you quickly roll back to previous deployments.
   - But:
     - You must know this exists and practice using it.
     - You should not be pushing to production without a mental “what if this goes wrong?” plan.

---

### 5. Boundaries & Fact-Check Targets

You must be careful with any **specifics** about Vercel. Follow these rules:

- **Do NOT:**
  - Invent or assert:
    - Exact prices (e.g., “$X per million requests”).
    - Specific plan names or features that might change.
    - Exact quotas, limits, or caps (e.g., “you get Y GB of bandwidth for free,” “Z invocations”).
  - Quote exact model names, AI provider terms, or per-token prices that may not be current.
  - Claim that Hobby/free users automatically start paying when limits are hit.
  - Assert that Vercel will always behave a certain way on overages (e.g., “they will suspend your account” or “they will seamlessly start charging”).

- **Use conservative, generic language instead:**
  - “Vercel has different plans with different limits and behaviors.”
  - “Serverless and edge functions are typically subject to usage-based limits or billing.”
  - “If you exceed your plan’s limits, Vercel may enforce caps or require you to upgrade.”
  - “Always check the current Vercel documentation and pricing page before you rely on any behavior.”

- **Be precise about responsibility boundaries:**
  - Clarify that:
    - Vercel is responsible for hosting/deploying/running your code as per their platform.
    - Your app is responsible for what that code does: calling AI APIs, reading/writing databases, sending emails, etc.
    - Each of those services (AI API providers, databases, email providers, etc.) has its own pricing and limits.
  - Avoid language that suggests:
    - Vercel will automatically protect you from third-party bills.
    - Vercel somehow pays for your API calls.
    - Vercel is legally or financially responsible for overuse of external APIs.

When you need to refer to limits or costs, phrase it like:
- “Usage-based resources can incur costs as your app scales.”
- “Different plans include different allowances and behaviors for things like function invocations and bandwidth.”

---

### 6. Structure & Length

Write as a **5-page pamphlet** in markdown, with clear headings that could naturally map to 5 pages.

Example structural pattern (you may adjust as needed, but keep it to 5 main sections):

1. **Page 1 – Title & Hook**  
   - Strong title and subtitle referencing Vercel by name.  
   - Short introduction of the central warning: “Deploy is not done.”  
   - Very brief explanation of what Vercel is and why it feels magical for beginners.

2. **Page 2 – The Deploy Illusion**  
   - Deep dive on the main trap: Live URL ≠ Finished App.  
   - Explain what “successfully deployed” actually proves (and what it doesn’t).  
   - Show how this is specific to Vercel’s strengths: easy deploy, previews, instant URLs.

3. **Page 3 – Production Reality on Vercel**  
   - Environment variables & secrets.  
   - Functions, usage, and external APIs.  
   - Logs and analytics as your “eyes” into real behavior.  
   - Emphasize that operating the app is the real work after “deploy.”

4. **Page 4 – Preview vs Production: The Quiet Difference**  
   - Dedicated to the secondary trap.  
   - Explain preview deployments, production deployments, and common beginner mistakes.  
   - Include a **concise checklist**: what to verify before inviting real users.

5. **Page 5 – A Safer Way to Use Vercel As a Solo Beginner**  
   - Practical, optimistic guidance.  
   - How to use Vercel well:  
     - Start with limited, intentional traffic.  
     - Put guardrails around expensive AI calls inside your code.  
     - Practice rollback.  
     - Watch logs early and often.  
   - Close with a calm, empowering message:  
     - Vercel is powerful and beginner-friendly.  
     - The goal is not to avoid deploying—it’s to deploy with supervision and understanding.

Keep the overall length moderate and focused. Avoid fluff; favor clear, concrete examples and short, pointed explanations.

---

### 7. Style Details

- Use **second person** (“you”) to address the reader.
- Maintain the established series tone:
  - Calm, clear, slightly blunt.
  - Respectful, not cutesy.
  - Not anti-Vercel; you are teaching the reader to use Vercel **wisely**.
- Do not include:
  - Marketing fluff.
  - Overly technical deep dives (no need to explain low-level infrastructure).
  - Any meta commentary about this being an AI-generated document.

---

### 8. Output

- Output: **Only** the finished pamphlet draft in markdown.  
- No preamble, no explanation of what you’re doing, no notes to the editor.  
- The draft should be ready for a human editor to lightly revise and publish.
