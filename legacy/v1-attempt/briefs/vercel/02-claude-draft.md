> ⚠️ DEPRECATED — 2026-07-07. Superseded by /factory/station-map-v2.md and /standards/.
> Historical record only. Agents: do not follow anything in this file.

# DON'T GO BROKE IN THE AGE OF AI
## The Vercel Pamphlet: Your App Is Live. You're Not Done.

---

# Page 1 — The Deploy Worked. Now What?

You connected your GitHub repo. You pushed to main. Vercel built your app, gave you a URL, and everything loaded in the browser exactly as expected.

That feeling is real. It's also a trap.

Vercel is genuinely excellent at what it does. It removes almost all the friction between your code and a live URL. For a solo builder shipping something for the first time, that moment — *it's live* — is legitimately exciting. You should feel good about it.

But "successfully deployed" is the beginning of your responsibility, not the end of it.

This pamphlet is about what comes after that green checkmark. It's about the gap between *reachable* and *ready*, between *it loads* and *it's safe to hand to real users*. That gap is where first-time builders get surprised — by unexpected costs, by broken behavior in production, by secrets misconfigured, by logs they never looked at.

None of this is Vercel's fault. Vercel did exactly what it promised: it got your code running on the internet. What happens next — what your code does, what it charges, who it talks to, how it behaves under real traffic — is yours to understand and manage.

**Here's the core idea this pamphlet will come back to:**

> A live URL proves your app is reachable. It does not prove your app is safe, cheap, well-configured, or ready for real users.

Vercel made the hard part easy. The part that remains is still real.

---

# Page 2 — The Deploy Illusion

## What "Successfully Deployed" Actually Proves

When Vercel tells you a deployment succeeded, it means one specific thing: your code built without errors, and Vercel was able to start serving it.

That's it. That's the whole guarantee.

It does not mean:

- Your environment variables are correctly set for production.
- Your app is calling the right API keys, databases, or services.
- You have any visibility into what your app is actually doing once requests start coming in.
- You've verified that real-world usage won't trigger costs you didn't anticipate.
- You have a plan if the next deploy breaks something.

This is not a knock on Vercel. The platform is designed to make deployment frictionless — and it succeeds. The friction it removes is real friction: build configuration, server setup, DNS, SSL certificates. That's all handled for you, and that's valuable.

The trap is the psychological spillover. Because deployment feels easy, it can feel *complete*. Because the dashboard looks clean, the app can feel *managed*. Because nothing is obviously broken, everything can feel *fine*.

## Why This Trap Catches Smart People

You didn't set up a server. You didn't configure nginx. You didn't touch a load balancer. Vercel handled all of it. So when nothing goes wrong during deploy, it's easy to assume that Vercel is also quietly handling the rest: the security, the costs, the monitoring.

It isn't — and it doesn't claim to. But if you haven't operated a production web app before, you may not know what "the rest" even consists of.

Here's a simple way to think about the boundaries:

- **Vercel's job:** Build your code, serve it at a URL, run your serverless or edge functions when requests come in, manage deployments and infrastructure.
- **Your job:** Configure your app correctly, manage your secrets, monitor what's happening, understand the behavior of everything your code calls.
- **Your AI API provider's job:** Respond to the API calls your code makes and bill you for them.

When your Vercel function receives a request and calls an AI API, Vercel ran the function. The AI provider charged you for the call. Neither one is responsible for the other's portion of the bill.

That distinction matters enormously when you start getting real traffic.

## The Specific Feeling to Watch For

If you catch yourself thinking any of these, pause:

- *"It's live, so it must be ready."*
- *"If something were wrong, Vercel would have flagged it."*
- *"I tested it and it worked, so I'm good."*
- *"It's free right now, so there's nothing to worry about."*

Each of these is understandable. None of them is accurate.

Vercel tells you when a *build* fails. It doesn't tell you when your app is quietly misconfigured, calling APIs with test keys, or accumulating usage you haven't noticed. That's not a flaw in Vercel — it's the nature of operating software. You are the operator. The dashboard is your tool, not your supervisor.

---

# Page 3 — Production Reality on Vercel

## Environment Variables and Secrets

This is where most beginner production problems start.

Your AI app almost certainly uses secrets: API keys for your AI provider, a database connection string, maybe an auth token or two. In local development, these live in a `.env` file that you (hopefully) excluded from version control. In Vercel, they need to be configured explicitly for each environment: preview and production.

The critical thing to understand: **Vercel treats preview and production as separate environments, and they can have separate environment variables.**

This means:

- You can have a test API key set for preview deployments and your real key set for production — which is the right setup.
- You can accidentally do the reverse — or forget to set a variable in production at all.
- If a variable is missing in production, your app may fail silently, return cryptic errors, or fall back to behavior you didn't expect.

Before your app touches real users, open the Vercel dashboard, go to your project's environment variable settings, and verify:

- Every variable your app needs is present in production, not just in preview.
- The keys and values are the ones you *intend* for production — not test keys, not placeholders.
- Nothing sensitive is being passed to the client side accidentally (Vercel lets you scope variables to server-side vs. browser-exposed).

Check the current Vercel documentation on how environment variables work per-environment. It's straightforward once you've read it, but skipping it leads to the most common class of "it worked in preview but broke in production" problems.

## Functions, Usage, and External APIs

If your app has any server-side logic — API routes, AI calls, data fetching — Vercel is running those as serverless or edge functions. Every time a request hits one of those functions, real computation happens somewhere.

Vercel's plans include different allowances for function usage, bandwidth, and execution. If your app stays lightly used, you may stay well within those allowances. If traffic picks up — or if something in your app generates more requests than you expect — usage can grow faster than you realize.

More importantly for AI apps: **the expensive part is usually not Vercel.**

When your function calls an AI API, Vercel is running the function. The AI provider is billing you for the inference. These are separate meters running simultaneously. A surge in traffic to your app means more Vercel function invocations *and* more AI API calls, each billed by its respective service.

Neither Vercel nor your AI provider will automatically stop your app when costs start climbing. Some plans include spending limits or caps; some don't; behaviors vary and change. Always check the current documentation and pricing pages for every service your app depends on. Don't assume protections exist that you haven't verified.

**Practical minimum:** Before you share your app with anyone, understand the approximate shape of your cost exposure. What does one user session cost in AI API calls? What happens if a hundred users show up tomorrow?

## Logs and Analytics: Your Eyes Into the Real App

Once your app is live, the only way to know what it's actually doing is to look at logs and analytics.

Vercel provides function logs and basic analytics. These are not luxuries for advanced users — they are the minimum you need to operate a real app.

Get in the habit of:

- Checking function logs after you deploy, especially after the first real traffic comes in.
- Looking for errors, unexpected high latency, or functions that seem to be running more often than they should.
- Noticing if any requests are failing silently or returning unexpected responses.

If you have never looked at your production logs, you don't know what your app is doing. A clean dashboard with no alerts does not mean everything is fine. It means nothing has triggered an alert. Those are different things.

---

# Page 4 — Preview vs. Production: The Quiet Difference

## Why Preview Deployments Can Mislead You

Vercel's preview deployment system is one of its most useful features. Every branch or pull request can get its own live URL, running your actual code, so you can see and share changes before they go to production.

For a beginner, this can blur into something confusing: **preview and production look almost identical**.

Same UI. Similar URLs. Often the same app behavior. It's easy to test something in preview, see it work, and assume production will behave the same way.

Sometimes it will. Sometimes it won't. And the differences tend to be exactly the ones that matter.

## Where Preview and Production Diverge

**Environment variables and secrets**
As covered on the previous page, preview and production can have different environment variables. If you've been testing in preview with a test API key pointed at a sandbox database, and production has a different key pointed at real data — or worse, a missing variable — behavior will differ the moment you promote.

**Domains and URLs**
Preview deployments get Vercel-provided URLs. Your production deployment may have a custom domain attached, or it may also use a Vercel-provided URL — but a different one. If your app has any hardcoded URLs, redirects, OAuth callback URLs, or CORS settings that depend on domain, these need to work in production specifically, not just in preview.

**Traffic patterns and real users**
Preview deployments almost always see low, controlled traffic — usually just you and maybe a few collaborators. Production sees whatever traffic actually shows up. A function that handles one request at a time fine in preview may behave differently under concurrent load. You won't know until it happens, which is why logs matter.

**Which data and services are actually live**
In preview, you may be pointed at a test database, a sandbox API, or seeded dummy data. In production, your app is talking to real data stores and real services. Any behavior that depends on real data — performance, correctness, edge cases — may be different from what you saw in preview.

## Before You Invite Real Users: A Checklist

Run through this before you share your production URL with anyone outside your immediate test group.

- [ ] **Environment variables verified.** Every variable your app needs is set correctly in the production environment — not just preview.
- [ ] **Production API keys confirmed.** You are using the right keys for production services, not test or sandbox keys.
- [ ] **Custom domain tested.** If you're using a custom domain, verify it routes correctly and any domain-dependent features (OAuth, CORS, redirects) work as expected.
- [ ] **Logs checked after first production traffic.** Look at function logs after the first few requests land. Confirm there are no errors or surprises.
- [ ] **Preview URLs not shared with users.** If you've been sharing a preview URL for testing, make sure real users are directed to your production URL — not a preview that may behave differently or not persist.
- [ ] **Rollback practiced.** You know where to find the rollback option in the Vercel dashboard and have at least clicked through it once.
- [ ] **Cost exposure understood.** You have a rough sense of what your app costs to run per active user or per session, across all services it calls.

This checklist is not exhaustive. It's the minimum. If you can check all seven boxes, you are operating with significantly more awareness than most first-time solo deployers.

---

# Page 5 — A Safer Way to Use Vercel As a Solo Beginner

## The Goal Is Not to Avoid Deploying

Vercel is a genuinely good tool for solo builders. The fact that it makes deployment easy is a feature worth using. The goal of this pamphlet is not to make you afraid of the deploy button — it's to make sure you know what happens after you press it.

Here's a practical approach that keeps you in control without slowing you down.

## Deploy Early, But Deploy Small

There's real value in deploying early and often. You catch build problems, you see real behavior sooner, and you don't end up with a giant unreleased thing that terrifies you to ship.

But deploy to *yourself* first. Then to a small, trusted group. Then to the wider world — only when you've had time to watch logs, verify costs, and confirm the app behaves the way you expect under real conditions.

The Vercel deploy button is not the gate. *You* are the gate.

## Put Guardrails Inside Your Code

Vercel does not know how many AI API calls are too many. Your AI provider may have tools to set spending limits, but don't rely on external services to enforce behavior your app should be controlling.

Inside your application code, before you get to any meaningful traffic:

- Consider rate-limiting how often any single user can trigger an expensive AI operation.
- Consider caching results where it makes sense, rather than making a fresh API call every time.
- Consider logging when and why expensive operations are triggered, so you can spot unexpected patterns early.

None of this requires sophisticated infrastructure. Simple, intentional code-level guardrails protect you more than dashboards alone.

## Watch Logs Before You Need To

Don't wait for something to go wrong before you check your logs. Look at function logs the first time real traffic comes in. Look again after a few days. Make it a habit before it's urgent.

What you're watching for:

- Errors or failed requests you didn't notice in preview.
- Functions running more often than expected.
- Latency or timeout patterns that suggest something is slow or stuck.
- Any behavior that differs from what you saw during testing.

Logs are not just a debugging tool. For a solo operator, they are your primary signal that the app is doing what you think it's doing.

## Know Where Rollback Lives

Vercel keeps a history of your deployments and lets you promote a previous deployment back to production quickly. Find that feature in your dashboard before you need it. Click through the flow once so it's familiar.

When something breaks in production — and at some point, something will — the difference between a stressful situation and a minor interruption is often just knowing where the rollback button is.

## Understand Your Cost Surface Before You Scale

Before you share your app with a broad audience, know the answer to: *what does this app cost to run?*

You don't need an exact number. You need a rough shape:

- What does Vercel charge for the plan you're on, and what happens at the limits? (Check the current pricing page.)
- What does your AI API provider charge per call, and roughly how many calls does a typical session generate?
- Are there any other services — databases, email, storage — with their own usage-based pricing?

If you don't know the answers, look them up before you invite users. Surprises in usage-based billing are almost always larger than people expect, and almost always hit at the worst time — when traffic is growing and you're distracted by other things.

## One Sentence to Come Back To

Vercel made it easy to get your app on the internet. What happens on the internet is still your responsibility.

That's not a reason to hesitate. It's a reason to pay attention. Deploy with intention, watch what happens, and keep the feedback loop short. That's how a solo builder uses a powerful platform wisely.

---

*This pamphlet is part of the series **DON'T GO BROKE IN THE AGE OF AI**. Always check the current documentation and pricing pages for Vercel and any third-party services your app depends on. Platform behaviors, plan structures, and pricing change over time — verify before you rely.*
