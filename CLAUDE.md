# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A content production factory for the *Don't Go Broke in the Age of AI* series — five booklets that guide first-time solo AI app builders through decision points where they commonly overspend. The v2 factory lives entirely in this repo.

---

## Agent governance rules

**Governing document:** `/factory/station-map-v2.md`. If any other document conflicts with the station map, the station map wins. If the conflict is substantive, stop and ask Trevor — do not resolve it yourself.

**`/standards/` is binding.** Every standard in that folder is in force. Follow them without modification.

**`/legacy/` is historical.** Never follow, cite as authority, or resurrect any process from `/legacy/`. Those files exist for audit only.

**`/reference/` is read-only.** Never modify any file in `/reference/`.

**Full file replacements only.** When producing or revising any production artifact, return a complete replacement file. Never return diffs, partial files, or "replace this paragraph" instructions.

**Format before drafting.** Confirm the publication type (booklet, pamphlet, etc.) before writing any content. If it is not declared, ask.

**Casey narrates; Alex reviews.** Casey Morse writes. Alex reviews against the voice guide (`/standards/casey-morse-voice-guide.md`) and never writes. See the editorial review standard for the full sequence.

**The publish action is never automated.** Station 8 may assemble the upload set; Trevor clicks publish, always.

**Halt and ask** when no standard resolves a question. Do not improvise.

---

## Teaching loop

After any session where Trevor corrects output, append an entry to `/factory/corrections-log.md` before ending the session. Tag each correction as either `one-off` or `missing-rule`. Missing-rule corrections must also be added to the relevant station's skill file the same day.

---

## Commands

**Install dependencies:**
```
npm install
```

**Generate booklet PDF proofs** (requires `05-final-copy.md` in each booklet folder):
```
node scripts/build-booklet-proofs.mjs
```
Outputs A5 PDFs to `products/dont-go-broke/booklets/<slug>/dist/<slug>-layout-proof-v1.0.pdf`. CSS: `products/dont-go-broke/booklets/layout/style.css`.

**Build pamphlets** (separate from booklet proofs):
```
npm run build:pamphlets
```

> Note: `npm run brief` and the `scripts/brief-orchestrator.mjs` script belong to the v1 pamphlet-line pipeline, now quarantined in `legacy/v1-attempt/`. The GitHub Actions workflow `brief-orchestrator.yml` is also v1-era and should not be used for booklet production.

---

## Architecture

### The five-booklet series (`products/dont-go-broke/booklets/`)

Booklets in sequence:

1. Before the Idea Becomes Reality
2. Before the Build Starts
3. Before the Agent Starts
4. Before You Trust the First Draft
5. After Launch, the Meter Still Runs

Each booklet folder contains numbered production files:

```
publication-concept.md
publication-brief.md
implementation_plan.md
00-source-review.md
01-outline.md
02-section-plan.md
03-draft-copy.md
04-editorial-review.md
05-final-copy.md        ← human gate; nothing downstream starts before approval
dist/                   ← generated PDF proofs
layout/                 ← layout assets for this booklet
```

### The factory model

Eight stations with an autonomy ladder (L0 Assist → L3 Autonomous). Governed by `/factory/station-map-v2.md`. The per-booklet run checklist is at `/factory/run-checklist-v2.md`.

Human gates that are permanent:
- **Station 1 (Brief):** Trevor approves before any drafting
- **Station 2 (Manuscript):** Trevor does a full voice read
- **Station 5 (Illustration):** Trevor generates and approves all images
- **Station 8 (Release):** Trevor clicks publish — never delegated

First station to reach L3 (autonomous): **Station 7 — Layout Conformance**. Standard: `booklet-payhip-format-conformance-standard-v2_1.md`.

### Binding standards

| File | Governs |
|---|---|
| `booklet-standard-v1.md` | Drafting new booklets (6–8 major sections) |
| `booklet-payhip-format-conformance-standard-v2_1.md` | Layout/format conformance for sibling booklets |
| `booklet-sibling-standard.md` | Sibling match; the Table Test |
| `casey-morse-voice-guide.md` | Voice and register |
| `editorial-review-standard-v1.md` | Five review passes; Alex's constraints |
| `publication-artifact-standard-v1.md` | Artifact ownership and production flow |
| `publishing-format-standard-v1.md` | Publication brief structure |
| `autonomous-booklet-production-standard.md` | When the factory may proceed without human gates |
| `non-platform-booklet-length-standard.md` | Length rules for non-platform booklets |
| `booklet-production-double-check-standard.md` | Double-check governance |

### Supporting directories

- `/factory/` — station map, operator guide, run checklist, corrections log
- `/reference/` — read-only locked reference assets (add approved PDF here before running Station 7)
- `/skills/` — per-station skill files; updated after every correction
- `/standards/` — all binding standards (see table above)
- `/legacy/v1-attempt/` — deprecated v1 pamphlet-line pipeline; do not follow
- `promotion/` and `audience-factory/` — campaign and marketing planning
