# Extension brief — before-you-trust-the-first-draft

For Claude Code to apply directly to `products/dont-go-broke/booklets/before-you-trust-the-first-draft/05-final-copy.md`.

Target: 1–2.75 pages for each section below. Section 3 ("Looks Done vs. Is Done Test") and Section 9 ("The Decision Guide") already measure ~1.5–1.6 pages and need no changes.

Each block below is new content to insert at the marked anchor point. Existing text is not modified except where noted.

---

## 1. Section 2 — The First Draft Review Session: A Walkthrough

Insert as a new subsection, after the closing paragraph ("The rest of this booklet provides the exact tools...") and before the `<div class="illustration-placeholder">` line.

```markdown
### A Walkthrough in Practice

Here is what this looks like with a real example. A founder asks an AI to build a simple internal tool: a way for a small team to log customer support tickets.

The AI responds in under ten minutes: "I've built the ticket logging system. You can create tickets, assign them, and mark them resolved."

Instead of opening the app immediately, the founder runs the sequence.

**Pause Before Continuing:** No new features requested yet. No deploy button clicked.

**Ask for the Change Receipt:** The AI lists four new files: a tickets table, a form component, a list view, and an update to the navigation menu.

**Hunt for Assumptions:** Asked directly, the AI admits it assumed every team member can see and edit every ticket, since no permission system was requested.

**Open the App as a User:** The founder clicks through. The form works. Tickets appear in the list.

**Test the Happy Path:** Creating a ticket, assigning it, and marking it resolved all work exactly as described.

**Break the Inputs:** The founder submits a ticket with no title. The app accepts it silently, creating a blank, unusable row in the list.

**Test Alternate Roles:** Logging in as a second, newly created user, the founder can see and edit every existing ticket — including ones assigned to other people.

**Review the Files:** Nothing unexpected. The four files match the four things that were asked for.

**Decide on the Draft:** This is a Revise, not an Accept. The core mechanic works, but two gaps need fixing before this ships: blank tickets should be rejected, and some kind of ownership or permission boundary needs to exist before a real team uses this.

Notice what did not happen here. The founder did not read a single line of code. They did not need to know what a database table is. They needed nine minutes and a willingness to click things the AI did not expect them to click. That is the entire skill this section is teaching — not technical fluency, just structured suspicion, applied in the same order every time.
```

---

## 2. Section 8 — Reviewing the Agent's Output: Files and Flows

Insert as a new subsection, after the "File-by-File Review Rhythm" numbered list and before the `<div class="illustration-placeholder">` line.

```markdown
### A File List Worth Questioning

Imagine you asked an AI to add a "forgot password" link to your login page. Ten minutes later, it reports success and shows you the Change Receipt.

The file list includes: `LoginPage.jsx`, `ForgotPassword.jsx`, `EmailService.js`, `UserPermissions.ts`, and `package.json`.

Two of those five files should stop you immediately. `EmailService.js` might be reasonable — sending a reset email requires some way to send email — but you never discussed how. `UserPermissions.ts` has no obvious connection to a password reset link at all.

Asking why surfaces the answer fast. The AI explains that to send a secure reset link, it decided to add a temporary elevated permission so the reset process could bypass the normal login check. That is a real, working explanation — and also a meaningful new security surface that you did not ask for and would not have thought to test for, because you had no reason to expect it existed.

`package.json` changing is its own flag. A new dependency was added to handle the email sending. Is it a well-maintained, widely used package, or an obscure one the AI happened to pick? You do not need to be able to audit the code inside it, but you do need to know it is there, because every new dependency is one more piece of code you are now responsible for, whether or not you ever read a line of it.

None of this means the draft is wrong. It might be a perfectly reasonable way to solve the problem. But you cannot know that until you ask, and you cannot ask what you do not know exists. The file list is what tells you it exists.
```

---

## 3. Section 10 — Before You Show It to Someone Else

Insert as a new subsection, after the existing closing paragraph ("Only share what you can explain...") and before the `<div class="illustration-placeholder">` line.

```markdown
### The Cost of Showing Too Soon

A founder building a scheduling app for personal trainers had a working demo after one afternoon with an AI builder. Clients could book sessions, trainers could see their calendar, and everything rendered beautifully. Excited, the founder sent the link to three trainers that same evening, asking for feedback before doing any review of their own.

The trainers loved it. They started telling their clients to use it. Within a week, one trainer discovered that double-booking was possible — the app would happily schedule two clients into the same time slot, because nothing had ever checked for a conflict. Another trainer found that canceling a session did not free up the slot; the app just hid the canceled booking from the list while quietly keeping it reserved behind the scenes.

By the time these problems surfaced, real clients had been affected by them. The founder was not just fixing bugs anymore. They were apologizing to trainers, explaining to confused clients why their sessions had vanished, and trying to rebuild trust in a tool that people had already started to rely on.

None of this needed to happen. A single afternoon of the review process described in this booklet — testing the happy path, breaking the inputs, checking what happens when two people try to book the same slot — would have caught both problems before a single real client ever saw the app.

Sharing too early does not just risk an awkward conversation about an unfinished feature. It risks handing a live version of your product's mistakes directly to the people you can least afford to disappoint.
```

---

## 4. Back Matter intro (before "The Interrogation Workflows")

Replace the current two sentences under `## Back Matter` (and the one sentence already added under "The Interrogation Workflows" heading can stay — this new text goes directly under `## Back Matter`, before the `### The Interrogation Workflows` line).

```markdown
You have just spent nine sections learning how to look at a first draft with real scrutiny — hunting for hidden assumptions, testing the edges, checking every role, reading the file list instead of trusting the demo. That skill lives in your head now. This section turns it into paper.

The tools below are not optional extras. They are the difference between reviewing a draft once, under pressure, half-remembering the checklist from a booklet you read last week, and reviewing every draft the same rigorous way, every time, because the questions are sitting in front of you instead of buried in your memory.

Three tools live in this back matter, and each does a different job. The Interrogation Workflows give you exact prompts to copy and paste at the AI itself, forcing it to confess what it built and what it assumed instead of letting a vague "it's done" summary go unquestioned. The First Draft Testing Worksheet gives you a place to record what you actually tested, in real time, so nothing gets rounded up in your memory afterward. The Safe Approval Protocol is the final gate — a short, repeatable checklist you run before you let yourself move on to the next feature.

None of these tools require you to read code. They require you to ask the right question at the right moment, and to write down the answer instead of trusting you'll remember it. Use them in order: interrogate the AI first, test the draft yourself second, and only then run the final approval protocol before calling the feature done.

Skipping this step feels harmless in the moment. The draft looks good, you are in a hurry, and the checklist can wait until "later." But later is usually never, and the drafts that get waved through without this toolkit are exactly the ones that quietly break in front of a real user — the ones where the review would have caught the problem in five minutes instead of costing you an afternoon of firefighting after launch.

Consider what typically happens without a toolkit like this. A builder finishes reviewing a draft using nothing but a mental checklist. They remember to check the happy path. They forget to check what happens when a field is left blank, because that thought never surfaced without a physical reminder in front of them. The feature ships. Three weeks later, a real user leaves a field blank, the app breaks in a way nobody anticipated, and the builder is left debugging a problem that a single line on a worksheet would have caught before launch.

This is not a failure of intelligence or effort. It is a failure of memory under pressure, and pressure is the default condition of building something real. The tools in this back matter exist because relying on memory alone, every single time, for every single draft, is not a sustainable strategy — even for someone who is genuinely careful.

Treat these three tools as a single workflow, not three separate options to pick from. Run the interrogation prompts first, while the AI's explanation is still fresh and specific. Fill out the testing worksheet second, while you are actually clicking through the draft. Run the approval protocol last, as the final gate before you let yourself move on. Skipping straight to the approval protocol without the first two steps turns it into a rubber stamp instead of a real check, because you will be approving assumptions you never actually surfaced.

None of this requires becoming a programmer. Every prompt, every worksheet field, and every checklist item in this section is written in plain language on purpose. The skill this booklet teaches is not reading code — it is refusing to accept a confident-sounding summary as proof that something works. Bring that skepticism into every draft you review from here forward, and the tools below will do the rest.
```

---

## 5. First Draft Testing Worksheet

Insert after the existing two intro paragraphs ("Fill it out in real time..." / "Keep a completed worksheet...") and before `**Task Being Reviewed:**`.

```markdown
Here is what a completed line might look like in practice, for a login feature:

*Task Being Reviewed:* Login and password reset flow.
*What the AI claims is done:* "Login is complete, including email-based password reset."
*Happy Path Result:* Pass — logging in with correct credentials works.
*Broken-Input Result:* Crashed — entering an email with no @ symbol threw a raw error message instead of a friendly one.
*Empty-State Result:* Handled — a new user with no account correctly sees a "create an account" prompt.
*Refresh Result:* Handled — refreshing mid-login keeps the user on the login screen instead of losing their place.
*Security Result:* Yes — a second test account was able to view the first account's profile page by changing the URL. This must be fixed before anything else.
*Assumptions Found:* AI assumed anyone with a valid-looking reset link should be let in, without checking whether the link had expired.
*Files Changed Unexpectedly:* A permissions configuration file was modified without being asked.
*Final Decision:* Revise.

Notice that this single filled-out line already surfaced a real security problem, a validation gap, and an unexplained file change — three things a quick glance at the login screen would never have revealed. That is the entire value of writing it down instead of trusting your impression of how the demo felt.

Use one worksheet per feature, not one per app. A "login feature" and a "checkout feature" deserve separate entries, because passing one tells you nothing about whether the other is safe.
```

---

## 6. Safe Approval Protocol

Insert after the existing two intro paragraphs ("This protocol is short on purpose..." / "The risk is never highest at the start...") and before the checklist items.

```markdown
Two items on this list are easy to rush past. "Test the Roles" does not mean glancing at the app while logged in as yourself — it means actually creating a second account, or logging out entirely, and confirming the app behaves correctly from that different vantage point. It is the single most commonly skipped step, because testing as yourself always looks fine.

"Explain it Simply" is not a formality either. If you cannot describe, in one or two plain sentences, how the login check works or why the payment step is safe, that is a signal you are approving something you do not actually understand — and something you do not understand is something you cannot debug later when it breaks.

Running this protocol takes less time than writing the prompt that generated the draft in the first place. That asymmetry is the whole argument for doing it: a few minutes of structured checking now is cheap insurance against hours of confused debugging later, once the feature is buried under three more features built on top of it.
```

---

## 7. Pagination fixes (from the v1.0 proof review)

Two layout bugs found in the pre-extension proof, unrelated to the content above but should be applied in the same pass.

**7a. Page 8 — "2. The Form Validation Check" splits from its bullet list.**

In `products/dont-go-broke/booklets/layout/style.css`, extend the existing "keep label with its box" rule to also cover lists, not just blockquotes:

```css
p:has(+ blockquote), p:has(+ ul), p:has(+ ol) {
  page-break-after: avoid;
  break-after: avoid;
}
```

This fixes page 8 and protects every other "bold label + bullet list" pair in the series the same way, not just this one spot.

**7b. Page 27 — "The 'What Did You Assume?' Interrogation" orphaned alone at the bottom of the page.**

In `05-final-copy.md`, in the Back Matter's Interrogation Workflows subsection, insert a manual break right before that heading (the soft CSS hint alone didn't hold here, same as the earlier "Ask:" fix on Section 9):

```markdown
<div class="page-break"></div>

**The "What Did You Assume?" Interrogation**
```

(Note: this is a bold paragraph, not an `###` heading — match the existing markdown exactly.)

**Status: applied and confirmed** in the v1.0 proof reviewed 2026-07-09 — both 7a and 7b hold, and the six content sections above landed correctly. New issues found in that same review are in section 8 below.

---

## 8. Second round of pagination fixes (from the post-extension v1.0 proof)

**8a. Cover page (page 1) shows a folio number. It shouldn't.**

**Status: the fix below (script-based conditional hide in the footer template) does NOT work — confirmed in the 2026-07-09 11:13 proof, "1" still shows on the cover. Root cause: Puppeteer's `headerTemplate`/`footerTemplate` do not execute `<script>` tags at all. They're static HTML with only five special placeholders Chrome text-substitutes (`date`, `title`, `url`, `pageNumber`, `totalPages`) — no live JS runs in that context, so the visibility-hide condition never fires. Do not reapply the script version below; use the replacement fix instead.**

Real fix: Puppeteer can't suppress the footer on a single page from within the print call itself, so this has to happen as a post-processing step after the PDF is generated, using `pdf-lib` to cover the folio on page 1 only.

1. Install the dependency: `npm install pdf-lib`

2. In `scripts/build-booklet-proofs.mjs`, add the import at the top:

```js
import { PDFDocument, rgb } from "pdf-lib";
```

3. Revert `FOLIO_TEMPLATE` to the plain version (no script — it doesn't run anyway):

```js
const FOLIO_TEMPLATE = `
  <div style="width:100%;text-align:center;font-family:'Times New Roman',Times,serif;font-size:14.7pt;color:#000;padding:0 1.25in;box-sizing:border-box;">
    <span class="pageNumber"></span>
  </div>
`;
```

4. Right after the existing `console.log(\`Generated ${outPath}\`);` line (after `page.pdf(...)` has written the file), add a post-process step that covers the folio on page 1 with a white rectangle spanning the full bottom margin:

```js
const pdfBytes = fs.readFileSync(outPath);
const pdfDoc = await PDFDocument.load(pdfBytes);
const firstPage = pdfDoc.getPages()[0];
const { width } = firstPage.getSize();
firstPage.drawRectangle({
  x: 0,
  y: 0,
  width: width,
  height: 95, // covers the full 1.25in (90pt) bottom margin where the folio sits, plus a small buffer
  color: rgb(1, 1, 1),
});
fs.writeFileSync(outPath, await pdfDoc.save());
```

This is a shared build-script fix — applies to all five booklets, not just this one. Remove the old `// FLAG: folio appears on cover...` comment once this is confirmed working.

Known trade-off: this covers the folio visually but leaves the original "1" text object underneath the white rectangle in the PDF's content stream — invisible and not printed, but technically still selectable if someone drags-to-select all text on the cover. Not worth the extra complexity of a full two-pass render + merge to eliminate entirely; flag if that matters for the final Payhip file.

**8b. Page 31 — "The Change Receipt Interrogation" orphaned alone at the bottom of the page.**

Same bug class as 7b, one level up: `**The Change Receipt Interrogation**` (bold paragraph) is followed by its own intro paragraph, which is followed by the blockquote box — three separate blocks, and only the last pair (paragraph + blockquote) had page-break protection. The label got stranded when the added Back Matter intro content shifted pagination. Two changes:

Manual break in `05-final-copy.md`, same pattern as 7b:

```markdown
<div class="page-break"></div>

**The Change Receipt Interrogation**
```

And, since this "label → intro paragraph → box" triple is a pattern likely to recur (it's the same shape as the "What Did You Assume?" one, and future booklets may reuse it), also add a general rule to `style.css` as defense-in-depth alongside the manual break, extending the existing keep-together rules:

```css
p:has(+ p + blockquote) {
  page-break-after: avoid;
  break-after: avoid;
}
```

---

After applying 8a and 8b, rebuild with:

```
node scripts/build-booklet-proofs.mjs --slug before-you-trust-the-first-draft
```

Send the new proof back for a check.