# Operator's Guide — Publishing Factory (plain language)

## What the map is, in one paragraph

The factory is an assembly line for booklets. A booklet enters as one entry in the series
outline and exits as a published Payhip product. Along the way it passes through eight
stations. Each station takes one thing in, produces one thing out, and is governed by a
written standard — never by memory or vibes. Some stations have a human gate (you must
approve before the line moves); others run and get checked afterward. Each station has an
autonomy level that starts low and gets promoted as it earns trust. The publish button is
yours forever.

## What each station does, in one sentence each

1. **Brief** — Turns an outline entry into a one-page plan for the booklet (who it's for,
   what it teaches, what sections it has). *You approve it before anything gets written.*
2. **Manuscript** — Writes the full booklet text in the Casey Morse voice, matching the
   sample booklet's rhythm. *You do a full voice read.*
3. **Editorial Conformance** — Checks the manuscript against your written editorial rules
   (headings, section density, register) and returns a corrected full file.
4. **Peer Review** — Runs the manuscript through your Antigravity two-round relay for
   fact-checking and logic review; you rule on anything it flags.
5. **Illustration** — Writes the image-generation prompts for each illustration slot in
   the established hand-drawn style; you generate and approve the images.
6. **Layout** — Assembles approved text and images into the PDF proof.
7. **Layout Conformance** — Checks the proof against your v2 conformance standard and
   returns a corrected proof. *First station to go fully autonomous.*
8. **Packaging & Release** — Prepares the Payhip upload set and product page copy;
   *you click publish, always.*

## Why the gates are where they are

Gates sit at the three expensive failure points: a wrong plan (Brief), a wrong voice
(Manuscript), and a public mistake (Release). Everything between those points is
checkable against written standards, which is why those stations can become autonomous
and the gated ones mostly can't.

---

## What happens where: Claude, Cowork, and Claude Code

You'll touch three surfaces. Same underlying models, very different jobs.

### Claude (the chat app — claude.ai / mobile)
**Role: the design studio.**
This is where the factory gets *designed and revised*, not run. Thinking through station
changes, rewriting a standard, diagnosing why a station drifted, strategy questions.
- Has memory of your projects across conversations, but **no access to your repo** —
  every session starts without your files unless you upload them.
- The workspace resets between conversations, so nothing built here persists on its own.
  Anything decided here must be exported into the repo to become real.
- Use it when: the question is "should the factory work differently?"

### Claude Code (terminal / desktop app / VS Code)
**Role: the machine shop.**
Direct hands on the repo. Reads and writes your actual files, runs scripts, executes a
single station against real artifacts.
- Skills live in the repo (or `~/.claude`), so every session starts already knowing your
  standards — no re-uploading.
- You choose the model per session (top tier for manuscript work, Sonnet for conformance
  runs), which is where the per-station model plan from the map gets applied.
- Use it when: the question is "run Station 7 on booklet 3's proof."

### Cowork (desktop app, non-developer agentic workspace)
**Role: the floor manager.**
Multi-step, multi-file knowledge work and **scheduled/recurring runs** — the same
mechanism as your Monday market-intelligence task. Where a full pipeline pass ("take
booklet 4 from approved manuscript through layout conformance") gets handed off as one
job.
- Works with your local files and can chain many steps with checkpoints.
- Use it when: the question is "move this booklet down the line while I do other things."

### The honest overlap
Code and Cowork overlap heavily — both can run stations against the repo. A reasonable
split while learning the factory: **Code for single-station runs and skill editing
(precise, visible), Cowork for multi-station passes and anything scheduled.** If one of
them ends up doing everything, that's fine; the map doesn't care which engine runs it.

### A typical booklet's journey across the surfaces
1. **Claude (chat):** you and the design studio adjust the Brief template after last
   booklet's lessons.
2. **Code:** update the Brief station's skill file in the repo; run Station 1 → you
   approve the Brief.
3. **Code (top-tier session):** run Station 2 → manuscript draft → your voice read.
4. **Cowork:** hand off "Stations 3 → 4 → 6 → 7 on booklet N" as one supervised pass;
   review the reports it returns.
5. **You:** generate illustrations from Station 5's prompts; approve.
6. **Code or Cowork:** Station 8 assembles the Payhip set.
7. **You:** publish. Log corrections. Update skill files. That log is the factory
   getting smarter.
