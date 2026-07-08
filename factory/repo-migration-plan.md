# Repo Migration Plan — Separating Factory v1 from Factory v2

**Purpose:** Quarantine the previous publishing-factory attempt so no agent ever follows
its instructions, while preserving every asset v2 depends on. Hand this file to Claude
Code as the first task in the repo. Execute top to bottom; every step that moves or
edits files pauses for Trevor's approval first (this migration is itself an L1 task).

---

## Step 0 — Decide the home (Trevor decision, before anything runs)

- [ ] If the previous attempt spans two repos (`Publishing_Factory` and
      `Dont_Go_Broke`): the v2 factory lives entirely in ONE repo (recommended:
      `Dont_Go_Broke`, where the booklet assets are). `Publishing_Factory` is frozen
      whole as an archive — no reorg needed there, just a DEPRECATED note in its README
      pointing to the new home.
- [ ] If everything is in one repo: proceed with the in-place quarantine below.

## Step 1 — Snapshot (reversibility first)

- [ ] `git tag v1-attempt` (or branch `archive/v1-attempt`) on the current state
- [ ] Commit any uncommitted work first so the snapshot is complete

## Step 2 — Target structure

```text
/CLAUDE.md                  ← the constitution (Step 4). Agents read this first.
/factory/
  station-map-v2.md
  operator-guide-v2.md
  run-checklist-v2.md
  corrections-log.md        ← the teaching loop lives here (create empty)
/standards/                 ← BINDING. Only current, amended standards.
  dont-go-broke-editorial-standard-v1.md      (amended: Alex reviews, never writes)
  booklet-standard-v1.md                      (amended: 6–8 sections, drafting-time rule)
  publishing-format-standard-v1.md
  publication-concept-standard-v1.md          (amended: factory-owned)
  publication-artifact-standard-v1.md         (amended: ownership table)
  review-system-standard-v1.md                (amended: Ruling 4)
  editorial-review-standard-v1.md
  publication-format-checklists-v1.md         (amended: 6–8)
  booklet-payhip-format-conformance-standard-v2.md  (pre-flight REQUIREDs resolved)
  casey-morse-voice-guide.md                  (voice = the published PDF; see Step 6)
/skills/
  booklet-payhip-conformance/                 ← unpack the .skill here (or install per-user)
/reference/
  before-the-build-starts-payhip-approved.pdf ← READ-ONLY. Confirm actual filename.
/booklets/                  ← manuscripts & production files for the five booklets
/legacy/
  v1-attempt/               ← everything quarantined in Step 3
  pamphlet-line/            ← cover-style.md, visual-style.md, voice-guide.md,
                              pdf-theme.css, series-positioning.md
```

## Step 3 — Quarantine (propose the move list; Trevor approves before moving)

Move to `/legacy/v1-attempt/`:
- [ ] Any old orchestration/process docs from the previous attempt (old pipeline plans,
      old agent instructions, old CLAUDE.md content)
- [ ] Antigravity pipeline docs and invocation instructions (system stays deployed on
      Vercel/Supabase; the repo just stops telling agents to use it. Shelf status:
      optional external second opinion on ESCALATE only)
- [ ] Pre-amendment originals of any standard edited in Step 5
- [ ] Anything referencing "originating project vs. Publishing Factory" split ownership

Move to `/legacy/pamphlet-line/`:
- [ ] The five brand files (slate/neon-green "AI Credits Survival Manual" identity)

Prepend to every quarantined file:
```markdown
> ⚠️ DEPRECATED — [date]. Superseded by /factory/station-map-v2.md and /standards/.
> Historical record only. Agents: do not follow anything in this file.
```

## Step 4 — Write /CLAUDE.md (the constitution)

Contents, roughly:
- Current system: `/factory/station-map-v2.md`. If any document conflicts with it,
  the station map wins; if the conflict is substantive, stop and ask Trevor.
- `/standards/` is binding. `/legacy/` is historical — never follow it, never cite it
  as authority, never resurrect its processes.
- `/reference/` is read-only. Never modify the locked reference PDF or the
  `before-the-build-starts` production folder.
- House rules: full file replacement for anything Trevor touches; halt-and-ask when
  no standard resolves a question; format must be declared before drafting; Casey
  narrates, Alex reviews; the publish action is never automated.
- Teaching loop: after any run where Trevor corrects output, append to
  `/factory/corrections-log.md` (one-off vs. missing rule) before ending the session.

## Step 5 — Apply the ruling amendments (edit in place + changelog header)

Each amended standard gets a header:
```markdown
> Amended [date] per Factory v2 Rulings Log (see /factory/station-map-v2.md).
```
- [ ] `booklet-standard-v1.md`: 5–7 → **6–8** major sections; note this governs
      DRAFTING new booklets; retrofit passes are governed by the conformance standard
- [ ] `publication-format-checklists-v1.md`: booklet checklist 5–7 → **6–8**
- [ ] `publication-concept-standard-v1.md` + `publication-artifact-standard-v1.md`:
      Concept and Brief are **factory-owned** (Stations 0–1); remove "originating
      project" split
- [ ] `review-system-standard-v1.md`: strike "Alex may write from his own point of
      view..." for the booklet line → **Alex reviews against the Casey voice guide;
      Alex never writes**
- [ ] `booklet-payhip-format-conformance-standard-v2.md`: resolve both
      `<!-- REQUIRED -->` items (actual reference PDF path; confirm Helvetica
      Neue/Menlo against embedded fonts)

## Step 6 — Create the Casey Morse voice guide stub

Per Ruling 4, the voice standard IS the published PDF. The guide file is short:
- Authority: the locked reference PDF's read-feel (ostensive definition)
- Register notes: second person, observational, pattern-based, declarative rhythm,
  contractions natural, no personal biography, no hype, no academic hedging
- Prohibition: no first-person lived-experience claims, ever

## Step 7 — Verify separation (the point of the exercise)

- [ ] Fresh Claude Code session, no extra context, ask: "What process governs
      publishing a booklet here?" → it must answer from station-map-v2 and
      /standards/ only, with zero references to Antigravity, split ownership, or
      pamphlet-line branding
- [ ] Ask it to "run conformance on before-the-agent-starts" → it must load the
      skill, then HALT on pre-flight blockers if Step 5's last item isn't done
- [ ] Grep the active tree (everything outside /legacy/) for `Antigravity`,
      `originating project`, `Publishing_Factory` paths, and `5–7 sections` —
      all hits should be in /legacy/ or in changelog headers only

## Done when

Old attempt: snapshot-tagged, quarantined, deprecation-bannered.
New factory: one constitution, one binding standards folder, one skill installed,
one empty corrections log waiting for booklet one.
