# Before You Trust the First Draft

*Don't Go Broke in the Age of AI*

---

---

## Field Note Opening

You asked an AI builder to create the first version of your product. A few minutes later, it returned something that looks remarkably real. 

There are screens. There are buttons. There is a working navigation menu. You might even have a live demo link that you can click through on your phone right now. 

That creates a dangerous feeling: *"It looks real, so it must be right."*

The moment you receive the first AI-generated draft is the moment you are most vulnerable to false confidence. The project looks much closer to the finish line than it actually is. It is incredibly tempting to keep the momentum going. You want to immediately ask the agent to add more features. You want to show the prototype to an investor, a co-founder, or a potential customer. You want to declare that the hardest part is over.

Please, pause. 

This is not the point where trust should begin. This is the point where rigorous review must begin. 

The first draft is not proof that the product is correct. It is simply the first thing that must be questioned. If you build your second feature on top of a flawed first draft, you are pouring concrete over a cracked foundation. 

In this booklet, you will learn how to review what the AI produced before you trust it, before you continue it, before you show it to others, and before you build on top of it.

---

---

## 1. The Illusion of the First Draft

### The First Draft Is a Claim, Not a Verdict

When an AI agent finishes its first pass and says, "I've completed the application," it is not delivering a final verdict on reality. It is handing you a set of claims.

The AI is effectively saying:
- *I claim this is the correct structure.*
- *I claim this is the workflow your users need.*
- *I claim this is the right data model to store their information.*
- *I claim this screen logic makes sense.*
- *I claim this is what "done" looks like based on your prompt.*

Your job as the builder is not to accept these claims. Your job is to test them. 

In traditional software development, if a senior engineer hands you a first draft, you can reasonably assume they applied years of architectural wisdom to their choices. If an AI agent hands you a first draft, you must assume it guessed. It guessed at the permissions, it guessed at the edge cases, and it guessed at what you meant when your instructions were slightly vague.

Until you verify the claims, the first draft is nothing more than an interactive hallucination.

---

---

### Why the First Draft Feels More Trustworthy Than It Is

When you build an app with AI, the results can be visually stunning within minutes. A polished interface, however, can hide weak thinking. A working demo can hide fragile logic. A confident AI response can hide a catastrophic architectural decision.

We are wired to believe that if something looks finished on the surface, the foundation must be solid. In traditional software development, reaching a working UI meant weeks of careful architectural planning, database design, and security modeling had already occurred. 

With AI, the UI often comes first. The AI paints a beautiful exterior to mask a hollow or assumed foundation underneath.

Momentum creates false confidence. Do not mistake a slick button for a sound application.

---

---

### The Looks Finished Trap

We are wired to believe that if something looks finished on the surface, the foundation must be solid. 

In traditional software development, reaching a working User Interface (UI) meant weeks of careful architectural planning, database design, and security modeling had already occurred. You couldn't click a button on a screen unless the heavy lifting behind it was complete.

With AI, the UI often comes first. The AI paints a beautiful exterior to mask a hollow or assumed foundation underneath. This is the "Looks Finished" trap, and it is the single most common reason non-technical builders get stranded. 

A polished interface can hide extraordinarily weak thinking. A working demo can hide fragile logic. A confident AI response can hide a catastrophic architectural decision.

### Common Illusions in the First Draft

- **Buttons that look real but do nothing:** The "Submit" button glows when you hover over it, but clicking it just refreshes the page without saving any data.
- **Forms that do not save:** You fill out a beautifully designed "Contact Us" form, hit send, and see a green checkmark—but there is no database connected to actually store the message.
- **Dashboards with fake data:** You see gorgeous charts and user profiles, but they are hardcoded mockups. If you create a new user, the charts don't change.
- **Screens that exist but do not connect:** The app has a "Settings" page and a "Profile" page, but there is no way to navigate between them without manually typing the URL.
- **Workflows built only for the happy path:** The shopping cart works perfectly if a user buys exactly one item and pays immediately, but crashes completely if they try to remove an item or their card is declined.

Momentum creates false confidence. Do not mistake a slick button for a sound application.

---

[ILLUSTRATION PLACEHOLDER: The First Draft Review Protocol]

---

## 2. The First Draft Review Protocol

### The First Draft Review Session: A Walkthrough

Reviewing the first draft is not something you do passively while reading the AI's chat response. It is an active session. When the AI says, "I've built the first version," you must immediately switch from "Builder" mode to "Inspector" mode.

Here is the exact sequence of a safe review session:

1.  **Pause Before Continuing:** Do not immediately ask the AI to add another feature. Do not click "Deploy." Do not send the link to a friend. 
2.  **Ask for the Change Receipt:** Force the AI to explicitly list what it built.
3.  **Hunt for Assumptions:** Force the AI to confess what it guessed.
4.  **Open the App as a User:** Step out of the codebase and click through the live demo.
5.  **Test the Happy Path:** Verify that the core goal actually works.
6.  **Break the Inputs:** Intentionally try to break the app.
7.  **Test Alternate Roles:** Verify the app responds correctly to logged-out users, wrong users, and admins.
8.  **Review the Files:** Look at the raw list of files the AI generated or modified.
9.  **Decide on the Draft:** Make a final decision to Accept, Revise, Revert, or Rebuild.

The rest of this booklet provides the exact tools and worksheets you need to execute this session without needing an engineering degree.

---

---

### The "Looks Done vs. Is Done" Test

If the app looks finished, you must actively prove that it isn't. The first step in reviewing a draft is learning to separate cosmetic completion from structural completion.

Use the **"Looks Done vs. Is Done" Test** to break the illusion of the first draft.

### The Test

**1. The "Fake Data" Check**
*   **Looks Done:** The dashboard is full of beautiful charts and user profiles.
*   **Is Done:** When you create a *new* account, the charts actually pull real data from your inputs.
*   *Warning:* AI loves to invent hardcoded sample data (sometimes called "mock data") to make a screen look finished. If the data doesn't change when you interact with the app, the app is not done.

**2. The "Form Validation" Check**
*   **Looks Done:** There is a beautiful "Contact Us" form with a glowing submit button.
*   **Is Done:** If you try to submit the form without typing an email address, it stops you and shows a red error message.
*   *Warning:* AI often builds forms that look great but don't validate bad inputs. If you can submit a blank form and get a "Success!" message, the form is dangerously incomplete.

**3. The "Security Illusion" Check**
*   **Looks Done:** There is a login screen with an email and password field.
*   **Is Done:** If you bypass the login screen and type the dashboard URL directly into your browser, the app kicks you out.
*   *Warning:* An AI will happily build a login screen that is completely disconnected from the actual data. Just because a door exists doesn't mean the walls are locked.

---

---

### The Original Intent Check

Before you test the software, you must test the alignment. 

During the planning phase, you made strict decisions about your scope, your first user, and the single problem you were solving. You defined your "Version One." The AI does not inherently respect those boundaries unless you force it to. AI agents are eager to please and will happily invent features they think you might like, expanding the scope without asking.

Use the **Original Intent Check** to compare the first draft against your approved blueprint.

### The Intent Checklist
Ask these exact questions of the draft in front of you:

- [ ] **Does this solve the original problem?** Look past the visual polish. Does it actually do the one specific thing you set out to do?
- [ ] **Does it serve the first user?** Is it built for the specific audience you defined, or did it become a generic tool for everyone?
- [ ] **Does it stay inside Version One?** Did the draft drift into Phase 2 or Phase 3 features? 
- [ ] **Did the AI add things we explicitly excluded?** If you said "no payments in version one," is there a billing page?
- [ ] **Did the AI skip anything essential?** Did it leave out the core algorithm because it focused too much on making the login screen look nice?
- [ ] **Did the project drift?** Does this still feel like the product you designed, or has it morphed into something entirely different?

If the project drifted, you must correct the trajectory immediately. Do not accept a product you didn't ask for just because it looks impressive.

---

[ILLUSTRATION PLACEHOLDER: Testing the User Experience]

---

## 3. Testing the User Experience

### The User Path Walkthrough

Once you confirm the app aligns with your original intent, you must step out of "Builder Mode" and into "User Mode." 

Do not evaluate the app by reading the code or looking at the file list. You must perform a manual, beginner-safe walkthrough of the application exactly as a new user would experience it. 

### How to Walk the Path
Do not take shortcuts. Do not jump straight to the feature you are most excited about.

1. **Start where the user starts:** Open the app in a private/incognito browsing window. Stare at the landing page or login screen. 
2. **Perform the main action:** Try to accomplish the single primary goal of the app. 
3. **Follow every button and next step:** Do not skip around. Let the interface guide you. If the interface doesn't tell you what to do next, the path is broken.
4. **Notice confusing labels:** Are the buttons clear? Is the AI using strange, technical language instead of plain English?
5. **Notice dead ends:** Do you ever reach a screen where there is no "Back" button, no "Cancel" button, and no clear way forward?
6. **Notice assumed knowledge:** Does the app assume the user already knows how to use it? 

Write down exactly where the experience breaks, feels unnatural, or requires you to guess. The AI does not feel frustration; only humans do. If the path feels broken to you, it will be impassable for your real users.

---

## 4. Testing the Data and Memory

### The Screen and Data Review Protocol

Once you establish that the app is structurally functioning, you must review exactly what it shows and how it behaves. Do not evaluate the app as a whole. Evaluate it screen by screen, and data point by data point.

### The Screen Review Checklist

For every single generated screen, answer these questions:

- [ ] What is this screen supposed to do?
- [ ] What data does it pull from the database to show the user?
- [ ] What actions can the user take on this screen?
- [ ] What happens if the user views this screen but has no data yet?
- [ ] What happens if the user enters bad data or clicks the wrong button?
- [ ] What happens if the wrong user somehow accesses this screen?
- [ ] What data on this screen looks real but might be hardcoded fake data?
- [ ] What specific data point must be manually verified before I approve this screen?

### The Data Behavior Review

A beautiful screen means nothing if the database behind it is broken. Use this beginner-safe guidance to review whether the draft actually saves, retrieves, protects, and updates data correctly.

- [ ] **The Persistence Check:** Does new data persist after a hard browser refresh?
- [ ] **The Privacy Check:** Can one user see another user’s private data?
- [ ] **The Deletion Check:** When you click "Delete," does it actually delete the record from the database, or just hide it from the screen?
- [ ] **The Edit Check:** Does editing a record update the right one, or does it accidentally overwrite something else?
- [ ] **The Placeholder Check:** Are AI-generated placeholder records being mistaken for real user records?
- [ ] **The Exposure Check:** Is private information (like an API key, an email address, or a password) displayed anywhere in the code or on the screen where it shouldn't be?

---

---

### The Data and Memory Check

A beautiful screen means nothing if the brain behind it is broken. You must perform a plain-English review to ensure the application actually remembers what it is supposed to remember.

You do not need to understand database architecture to do this. You simply need to test the memory.

### The Plain-English Memory Test

- [ ] **Does entered information actually save?** If you type your name into a profile form and hit save, does it stay there?
- [ ] **Can you come back later and see it?** If you close the browser tab entirely, open a new one, and navigate back to the app, is your data still there? If it disappears, the AI likely used temporary browser memory instead of a real database.
- [ ] **Does the app show the correct information in the correct place?** If you upload a profile picture, does it appear on the dashboard? Does it appear next to your comments?
- [ ] **Does deleting or changing something behave safely?** If you click "Delete," does the item actually disappear from the database, or is it just hidden from the screen? If you edit an item, does it overwrite the correct item, or does it accidentally overwrite something else?
- [ ] **Is anything private visible where it should not be?** If you log in as a second test user, can you see the first user's private data? Did the AI assume all data is public by default?

Do not turn this into a deep software QA exercise. You are simply verifying that the app has a functional memory that respects basic logic and privacy. 

---

---

### Review by User Role

AI builders often suffer from tunnel vision. If you ask an AI to build a "User Dashboard," it will build a dashboard that works perfectly for the "Ideal User." It will forget that other types of users exist. 

You must teach yourself to test the draft not just as the creator, but as different kinds of users interacting with the system under different conditions.

### The Role Testing Matrix

Test the application acting as:
*   **The Logged-Out Visitor:** Can they accidentally see the dashboard without logging in?
*   **The New User:** What happens when they log in for the first time? Does the app crash because they have no data, or does it show a friendly onboarding screen?
*   **The Returning User:** Does the app remember them correctly?
*   **The Wrong User:** If Alice logs in, can she view Bob's profile by changing the URL?
*   **The User with Messy Data:** What happens if a user uploads a 10MB image instead of a 1MB image? 
*   **The Admin/Owner:** Do they have special privileges to manage the platform? Are those privileges secure?

### Case Study: The Admin Access Mistake

A builder asked an AI to create a marketplace where users could buy and sell digital templates. The builder also asked for an "Admin Dashboard" to see all transactions and ban misbehaving users.

The AI built it rapidly. The marketplace looked great. The Admin Dashboard looked powerful. The builder tested the Admin Dashboard and saw all the expected buttons. 

**What Looked Finished:** The Admin Dashboard was fully functional.
**What the AI Assumed:** The AI assumed that simply putting the Admin Dashboard on a hidden URL (`/admin-dashboard`) was enough security. It did not restrict access based on user accounts.
**The Result:** A beginner could detect the issue by logging in as a regular user, typing `/admin-dashboard` into the URL bar, and discovering they had full power to ban other users. 

**What to Ask the AI:** 
*"I noticed the admin dashboard is accessible by anyone who guesses the URL. Add strict role-based access control. Only users marked as 'Admin' in the database should be able to load this screen."*

In this case, the builder did not need to Rebuild the app. They just needed to Revise the security layer before continuing.

---

---

### The Happy Path Trap

The "Happy Path" is the sequence of clicks where the user does exactly what they are supposed to do, and the app responds exactly how it is supposed to respond.

A smooth demo usually only shows the Happy Path. 

If you ask an AI to build a shopping cart, it will build a path where a user adds an item, clicks checkout, and sees a success screen. The AI will mark the feature as "complete" because this single path works perfectly.

But what happens when the user clicks the "Checkout" button twice rapidly? What happens if they empty the cart and then try to check out? What happens if their internet disconnects right after they pay? 

AI skips edge cases because you did not explicitly ask for them. A working demo is often incredibly fragile beneath the surface. It looks fine when you follow the exact script the AI expects, but it breaks the moment you step off that path. 

### Happy Path vs. Real Use: A Worked Example

Imagine you asked an AI to build a simple signup flow for a newsletter.

**What Looks Good at First (The Happy Path):**
You type your email, click "Subscribe," and a beautiful green checkmark appears. The AI declares the feature finished. 

**What the AI Assumed:**
The AI assumed that users will only ever click the button once, that they will always type a valid email address, and that the database will never fail to save the record.

**What Breaks When Tested (Real Use):**
You decide to test the edges. You type "not-an-email" and click Subscribe. It shows the green checkmark anyway. You leave the field blank and click Subscribe. Green checkmark. You click the button rapidly five times. The database saves five identical blank records. 

**What You Should Ask Next:**
Instead of moving on to building the email-sending feature, you must stop and address the foundation. You do not need to rebuild the whole app, but you must instruct the AI to revise the logic: *"The UI looks good, but it accepts blank emails, invalid formats, and double-clicks. Add strict form validation and disable the button while loading."*

### The Edge-Case Breaker Sheet

To review the first draft, you must intentionally step off the Happy Path.

- [ ] **The Double-Click Test:** Click every primary button (Submit, Save, Pay) twice very fast. Does the app crash? Does it charge the user twice?
- [ ] **The Empty State Test:** What happens when a user views a screen that has no data yet? (Does it show a helpful message, or does it crash trying to load an empty list?)
- [ ] **The Refresh Test:** Navigate deep into the app, then refresh your browser page. Does it remember where you are, or does it crash and send you back to the home screen?
- [ ] **The Back Button Test:** Fill out half a form, click the browser's "Back" button, and then click "Forward." Did it save your data, or did the app break?

---

[ILLUSTRATION PLACEHOLDER: Interrogating the AI's Code]

---

## 5. Interrogating the AI's Code

### What Did AI Actually Decide for You?

AI hates being stuck. If your prompt leaves out a detail, the AI will not stop and ask you for clarification. It will simply guess. 

It will make assumptions about who can see what, how information is saved, what happens in unusual situations, and what the app does when you haven't told it what to do. 

For example, you ask an AI to build a team dashboard. The AI might silently assume that anyone who creates an account should automatically have administrator access to view everyone else's financial data. It made a guess to keep the build moving. 

You need to find these hidden decisions before you trust the code.

### Hidden Assumption Case Study: The Fake Payment

A non-technical founder asked an AI agent to build a paid job board. They wrote a detailed prompt about the layout, the colors, and the pricing tiers. 

The AI delivered a working prototype in ten minutes. The founder clicked "Post a Job," selected the $50 tier, typed in a fake credit card, and the app showed a beautiful "Payment Successful! Your job is live!" screen. The job appeared on the homepage. 

The founder was thrilled and immediately started showing the app to potential customers. 

**The Hidden Assumption:** 
The AI had completely hallucinated the payment logic. Because the founder did not explicitly provide API keys for a real payment processor like Stripe, the AI wrote code that *simulated* a successful payment. It checked if a 16-digit number was entered, waited two seconds, and then just published the job to the database for free. 

The founder could have detected this problem in two minutes without knowing how to read code, simply by interrogating the AI before trusting the draft.

### The Hidden Assumption Finder

Use these questions to hunt down the AI's silent decisions:

*   **Permissions:** Who is allowed to see this page? Did the AI assume everyone can see everything?
*   **Data Persistence:** When I refresh the page, where does the data come from? Is it actually saved in a real database, or just temporarily stored in the browser's local memory?
*   **Third-Party Services:** Did the AI sign me up for a paid service (like an email provider or a database host) in the code without asking me?
*   **Simulated Behavior:** Is this feature actually working, or did the AI hardcode a "success" screen to make it look finished?
*   **Scalability:** Did the AI write logic that works for 10 users but will crash if 1,000 users try to do it at the same time?

---

---

### The "What Did AI Add?" Review

AI agents hate being stuck. If your prompt leaves out a detail, the AI will not pause to ask you for clarification. It will simply guess. It will invent features, roles, and workflows to keep the build moving. 

You must actively hunt for the things the AI added without your permission. 

### Common Unrequested Additions to Hunt For

- **Extra account systems:** You asked for a simple blog, but the AI added a complex multi-tier user registration system.
- **Unnecessary dashboards:** You asked for a single data table, but the AI built an entire analytics dashboard with pie charts.
- **Fake admin panels:** The AI built a secret `/admin` URL that grants ultimate power over the app, but didn't secure it properly.
- **Roles and permissions that were not requested:** The AI decided your app needs "Editors," "Contributors," and "Moderators," adding massive complexity to your simple app.
- **Features that sound useful but were not in version one:** The AI added a "Dark Mode" toggle or a "Share to Social Media" button that distracts from the core goal.
- **Placeholder integrations:** The AI added a "Pay with Stripe" button, but it is just a visual placeholder that doesn't actually connect to a bank.
- **Invented categories, labels, or workflows:** The AI categorized your data in ways you never requested because it saw similar patterns in its training data.

If you find unrequested additions, you must decide whether to keep them. Do not keep them just because they look nice. Every unrequested feature is a piece of code you now have to maintain. If it wasn't in your blueprint, cut it out.

---

---

### Reviewing the Agent's Output: Files and Flows

Review does not require an engineering degree, but it does require a methodical approach. Do not start by looking at the colors or the fonts. Start with the files and the flows.

### File-by-File Review Rhythm

When an AI generates a draft, it outputs a list of files it created or modified. You must review this list critically using this rhythm:

1.  **Look at Filenames First:** Do not read the code. Just read the names of the files the AI touched.
2.  **Compare Names to the Task:** If you asked it to build a pricing page, you should expect to see files like `Pricing.jsx` or `pricing.css`. 
3.  **Flag Surprising Files:** If you asked for a pricing page, but the AI modified `UserAuthentication.ts` and `DatabaseConfig.js`, you have a massive red flag.
4.  **Ask Why:** Ask the AI explicitly: *"Why did you modify the DatabaseConfig file when I only asked for a pricing page?"* 
5.  **Look for New Packages:** If the AI added a massive, complex third-party library just to format a date, challenge it. 
6.  **Avoid Approving the Unexplainable:** Do not approve changes to files if you cannot explain, in plain English, why the AI touched them.

---

---

### The Interrogation Workflows

Do not passively accept the AI's summary of its work. Force it to explain itself using structured interrogation. 

### The Change Receipt Interrogation

If the AI claims it "built the feature" or "fixed the bug," use this prompt to verify the true scope of the work:

> "Output a detailed Change Receipt. 
> 1. List every single file you modified or created. 
> 2. For each file, explain in one plain-English sentence why it needed to be changed. 
> 3. Did you modify any routing, authentication, styling, or dependency files? Answer 'Yes' or 'No' and explain.
> 4. Tell me what a human should manually verify before continuing."

### The "What Did You Assume?" Interrogation

Copy and paste this into your chat to force the AI to confess its guesses:

> "I am reviewing this draft. 
> 1. List every technical, architectural, or user-experience assumption you made while generating this code that I did not explicitly request in my original prompt. 
> 2. Specifically list assumptions related to data security, user permissions, edge cases, and hardcoded values.
> 3. List any fake, placeholder, or simulated behavior.
> 4. List any security, privacy, data, payment, or account risks introduced by these assumptions."

---

[ILLUSTRATION PLACEHOLDER: Making the Final Decision]

---

## 6. Making the Final Decision

### The Keep, Fix, Cut, Question Framework

As you review the first draft, you will quickly become overwhelmed by what is right, what is wrong, and what is confusing. Do not try to hold it all in your head. Do not try to write one massive prompt to fix everything at once.

Instead, break the draft down into individual parts and use the **Keep, Fix, Cut, Question** framework. 

For every screen, feature, and workflow in the draft, assign it one of these four tags:

### 1. Keep (Correct and Useful)
The feature does exactly what you asked. It passes the memory test. It aligns with your original intent. 
*Action:* Protect this code. Do not ask the AI to rewrite or "optimize" this section. Consider it a stable foundation.

### 2. Fix (Useful but Wrong or Incomplete)
The core logic is sound, but it misses edge cases. The empty states are missing, or the form doesn't validate inputs. It is the right feature, but it is executed poorly.
*Action:* Keep the current code, but issue narrow, specific instructions to fix the gaps. (e.g., *"The login logic is good, but add error validation for missing email addresses."*)

### 3. Cut (Not Needed for Version One)
The AI added an unrequested feature, or it built something that drifted away from your original intent. It might look cool, but it is a distraction.
*Action:* Throw it away. Tell the AI explicitly to remove the feature and delete the associated code. Less code means less risk.

### 4. Question (Unclear, Risky, or Needs Review)
You don't understand how a feature works. You suspect there is fake data. You are worried about how the database is structured.
*Action:* Do not accept or reject it yet. Interrogate the AI. Ask it to explain the logic in plain English before you make a decision.

---

### The Decision Guide: Accept, Revise, Revert, or Rebuild

At the end of your review session, you must make a decision about what to do with the first draft. You do not have to keep everything the AI generated. You are allowed to throw parts of the draft away.

Use this decision guide to determine your next move:

### 1. ACCEPT
**When to use it:** The draft does exactly what you asked. You used the "Looks Done vs. Is Done" test, and it passed. The AI surfaced its assumptions, and you agree with them. 
**Action:** Commit the code. Consider this feature a stable foundation. You may now move on to the next feature.

### 2. REVISE
**When to use it:** The core logic is sound, but the AI missed a few edge cases. The empty states are missing, or the form doesn't validate inputs correctly. 
**Action:** Do not write a massive new prompt. Keep the current code, but issue narrow, specific instructions to fix the gaps. (e.g., "The login logic is good, but add error validation for missing email addresses.")

### 3. REVERT
**When to use it:** You asked the AI to fix a small UI bug, but the Change Receipt shows it also rewrote your routing logic, updated three dependencies, and broke the navigation menu. 
**Action:** Throw the new changes away immediately. Use Git to revert to your last known good save point. Never ask the AI to "fix what it just broke." Restart the task with a stricter, narrower prompt.

### 4. REBUILD
**When to use it:** The draft is a mess of assumptions, hardcoded data, and over-engineered architecture. The UI looks nice, but the foundation is completely wrong for your actual goals.
**Action:** Delete the entire draft. Do not try to patch a broken foundation. It is infinitely faster to delete bad code and prompt the AI again with clearer, more specific instructions than it is to untangle a hallucinated architecture. 

---

---

### When to Stop and Rebuild

Sometimes, a first draft should not be patched. 

The temptation is always to ask the AI to "fix it." You write a prompt explaining what is wrong, the AI apologizes, writes more code, and patches the problem. But if the foundation is fundamentally flawed, patching it only creates a more complicated, tangled mess.

You must be willing to throw the first draft away and start over. Because AI generates code so quickly, deleting bad code and writing a better, more specific prompt is often infinitely faster than trying to untangle a hallucinated architecture.

### Rebuild Triggers

You should strongly consider stopping and rebuilding if you encounter any of the following triggers:

- **The draft solves the wrong problem:** The AI misunderstood your core intent and built an entirely different kind of application.
- **The structure is fundamentally wrong:** The AI chose a database or framework that contradicts your approved technical stack.
- **Too many assumptions were added:** You spend more time cutting out unrequested features than you do reviewing the core logic.
- **The core user path is broken:** The primary action the user is supposed to take simply does not work, and the AI struggles to explain why.
- **The project drifted far from version one:** The draft feels bloated, overly complex, and impossible to understand.
- **Fixing it requires fighting the existing draft:** Every time the AI fixes one bug, two more appear. You feel like you are wrestling with the codebase rather than guiding it.

Do not suffer from sunk-cost fallacy. The code took three minutes to generate. It owes you nothing. If the draft is a mess, delete it, refine your instructions, and have the agent build it again.

---

[ILLUSTRATION PLACEHOLDER: Before You Show It to Anyone Else]

---

## 7. Before You Show It to Anyone Else

### Before You Show It to Someone Else

There is a strong temptation to share the first draft immediately. You want feedback. You want validation. You want to show your investors or co-founders how fast you are moving.

But showing an unverified draft to collaborators or early users is incredibly dangerous. 

If they see a polished UI, they will assume the app is almost done. They will start asking for tweaks to the button colors or the fonts rather than questioning the core logic. 

Worse, if you show a demo that relies on hardcoded fake data or simulated payments, you are setting a false expectation of progress. This locks in bad assumptions and creates immense, artificial pressure on you to launch an app that isn't actually built yet.

Only share what you can explain. Sharing with others is incredibly useful, but only *after* you understand the core logic well enough to explain exactly what they are looking at and where the rough edges are. Make sure you understand what the draft is actually doing before handing it off.

---

---

### Bridge to After Launch, the Meter Still Runs

If you have carefully reviewed the first draft, tested the user path, verified the memory, stripped out the assumptions, and confidently signed your receipt, you now possess a rare and valuable asset: a verified, trustworthy foundation.

You can now safely build the next feature. You can safely show it to early users. You can safely move toward a live launch.

But there is one final trap waiting for you.

When the product is finally done, when the UI is polished, and when the core logic is secure, you will be tempted to launch it and walk away. You will assume that because the build phase is over, the risks and costs are over.

That assumption will bankrupt you.

Launching software does not end the cost cycle; it begins the maintenance cycle. Every time a user clicks a button, a server runs, a database queries, and a third-party API fires. Every action has a microscopic cost. In the age of AI and cloud computing, those costs can scale automatically and invisibly. 

In the final booklet, *After Launch, the Meter Still Runs*, we will cover exactly what happens the day after you go live. You will learn how to monitor your costs, track user behavior, handle inevitable bugs, and decide whether a project should continue, be paused, or be completely rebuilt.

---

---

## Field Note Closing

Reviewing the first draft is not a delay from building; it is the most critical part of building. 

By taking the time to question the output, surface the assumptions, break the happy path, and verify the logic, you transform a fragile, generated draft into a trustworthy product. 

Do not let the speed of the AI override your responsibility as the builder. Build with your eyes open. Question everything that looks finished. Once the foundation is reviewed and secure, you can safely step into the reality of a live launch.


---

---

## Back Matter

### The First Draft Testing Worksheet


Use this worksheet to track your review session. Do not move on to the next feature until this worksheet is complete.

**Task Being Reviewed:** ___________________________

- [ ] **What the AI claims is done:** (e.g., "Login flow is complete.")
- [ ] **Happy Path Result:** Did it work when used perfectly? [Pass/Fail]
- [ ] **Broken-Input Result:** What happened when you entered bad data? [Handled/Crashed]
- [ ] **Empty-State Result:** What happened when there was no data? [Handled/Crashed]
- [ ] **Refresh Result:** What happened when you refreshed the page mid-flow? [Handled/Crashed]
- [ ] **Security Result:** Can the wrong user see private data? [Yes/No]
- [ ] **Assumptions Found:** ___________________________
- [ ] **Files Changed Unexpectedly:** ___________________________

**Final Decision (Circle One):** Accept / Revise / Revert / Rebuild

---

---

### The Confidence Receipt


Before you move on to building the next feature, you must explicitly record why you trust the current draft. Do not rely on a vague feeling of "it looks good enough."

Create a **Confidence Receipt** for your records. This is a simple checklist that forces you to document the state of the build.

### The Receipt Checklist

- [ ] **What was reviewed:** (e.g., "The new user onboarding flow.")
- [ ] **What worked:** (e.g., "Users can create accounts and see the welcome screen.")
- [ ] **What failed:** (e.g., "The password reset link is broken.")
- [ ] **What was removed:** (e.g., "Cut the unrequested profile picture upload feature.")
- [ ] **What needs another prompt:** (e.g., "Need to ask the AI to fix the password reset logic.")
- [ ] **What must not be built on yet:** (e.g., "Do not build the dashboard until the login flow is completely secure.")
- [ ] **What is safe to keep:** (e.g., "The database structure for user accounts is solid and approved.")

By forcing yourself to fill out this receipt, you prevent momentum from pushing you forward on a fragile foundation.

---

---

### Questions to Ask Before Continuing the Build


Before you write the next prompt or add the next feature, you must definitively answer these questions about the draft you just reviewed. Do not proceed until you have clear answers.

- [ ] What is safe to keep?
- [ ] What is still fake?
- [ ] What is assumed?
- [ ] What is untested?
- [ ] What is risky?
- [ ] What must be rebuilt before adding features?
- [ ] What should be committed to version control right now?

---

---

### The Safe Approval Protocol


Before you declare the first draft complete and move on to building the next major feature, execute this final protocol. 

- [ ] **Review the Receipt:** I have read the Change Receipt and understand why every modified file was touched.
- [ ] **Test the Flow:** I have stepped off the Happy Path and tested broken inputs and empty states.
- [ ] **Test the Roles:** I have viewed the app as a logged-out visitor, a new user, and an admin. 
- [ ] **Verify the Reality:** I have confirmed there is no fake, simulated, or placeholder behavior hiding behind the UI.
- [ ] **Approve the Assumptions:** I have interrogated the AI for its hidden guesses regarding permissions and data, and I approve them.
- [ ] **Save the Notes:** I have saved the results of my Testing Worksheet.
- [ ] **Explain it Simply:** If someone asked how this core logic works, I could explain it to them in plain English.

If you can check every box, the draft is "reviewed enough to continue."

---

---

