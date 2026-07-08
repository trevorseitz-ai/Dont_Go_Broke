# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A content production factory for the *Don't Go Broke in the Age of AI* series — five booklets that guide first-time solo AI app builders through decision points where they commonly overspend. The repo also contains a separate AI-provider pamphlet pipeline (the `briefs/` tree) and audience/promotion planning infrastructure.

## Commands

**Install dependencies:**
```
npm install
```

**Run the AI brief orchestrator** (requires env vars — see below):
```
npm run brief
```
This runs `scripts/brief-orchestrator.mjs`, which scans every folder under `briefs/`, and for each one that has a `00-provider-request.md` but no `05-final-copy.md`, runs a Claude→OpenAI→Claude relay to produce final pamphlet body copy and cover copy. It is idempotent: already-completed steps are skipped.

**Generate booklet PDF proofs:**
```
node scripts/build-booklet-proofs.mjs
```
Reads `products/dont-go-broke/booklets/<slug>/05-final-copy.md` for each of the five booklets, renders via Puppeteer to A5 PDF at `products/dont-go-broke/booklets/<slug>/dist/<slug>-layout-proof-v1.0.pdf`. CSS lives in `products/dont-go-broke/booklets/layout/style.css`.

**Build pamphlets** (separate from booklet proofs):
```
npm run build:pamphlets
```

## Required environment variables

`npm run brief` and the GitHub Actions workflow both require:

```
OPENAI_API_KEY
ANTHROPIC_API_KEY
OPENAI_MODEL
ANTHROPIC_MODEL
```

In GitHub Actions these are set as repository secrets. Locally they must be in the shell environment before running the script.

## Architecture

### Two parallel content pipelines

**1. AI provider pamphlets (`briefs/`):**
Short 5-page warning pamphlets for specific AI tools (Replit, Vercel, v0, base44, antigravity). Each provider gets its own folder. Production is fully automated via `scripts/brief-orchestrator.mjs` using a Claude+OpenAI relay:
- `00-provider-request.md` → OpenAI generates `01-brief-spec.md` → Claude writes `02-claude-draft.md` → OpenAI reviews and either finalizes or requests revision → Claude revises if needed → OpenAI produces `05-final-copy.md`. Cover copy follows as `06`–`08`.

**2. Don't Go Broke booklet series (`products/dont-go-broke/booklets/`):**
Five booklets in a fixed ladder sequence:
1. Before the Idea Becomes Reality
2. Before the Build Starts ← gold-standard sibling reference
3. Before the Agent Starts
4. Before You Trust the First Draft
5. After Launch, the Meter Still Runs

Each booklet folder follows this numbered file progression:
```
publication-concept.md
publication-brief.md
implementation_plan.md
00-source-review.md
01-outline.md
02-section-plan.md
03-draft-copy.md
04-editorial-review.md
05-final-copy.md         ← approved manuscript; human gate before anything downstream
dist/                    ← generated PDF proofs
layout/                  ← layout assets for this booklet
```

### The factory model

The production process is governed by eight stations (`factory/station-map.md`) with an autonomy ladder (L0 Assist → L3 Autonomous). Claude Code is used for single-station runs; the governing documents for each station are:

| Station | Standard |
|---|---|
| 1 – Brief | Booklet structure from gold-standard sibling |
| 2 – Manuscript | Voice framework (Casey Morse narrator) |
| 3 – Editorial Conformance | Editorial conventions doc |
| 4 – Peer Review | Antigravity two-round relay |
| 5 – Illustration | Style consistency with gold-standard sibling |
| 6 – Layout | `products/dont-go-broke/booklets/layout/style.css` |
| 7 – Layout Conformance | `standards/booklet-sibling-standard.md` |
| 8 – Packaging & Release | Payhip listing conventions |

**Hard rules that apply at every station:**
- Full file replacements only — never diffs or partial edits
- No station skips its written standard even when output "looks fine"
- `05-final-copy.md` is the human gate; nothing downstream (layout, PDF, packaging, promotion) begins before manuscript approval
- The publish button is never automated

### Key governance documents

- `factory/station-map.md` — autonomy levels and promotion roadmap for each station
- `factory/operator-guide.md` — which surface (Claude chat, Claude Code, Cowork) runs which station
- `factory/run-checklist.md` — per-booklet production checklist with gate markers
- `standards/autonomous-booklet-production-standard.md` — defines when Production Factory may proceed without human approval and mandatory escalation conditions
- `standards/booklet-sibling-standard.md` — sibling match dimensions and the Table Test (*Before the Build Starts* is the reference)
- `standards/publishing-format-standard-v1.md` — required Publication Brief structure

### Supporting directories

- `audience-factory/` — approved marketing inputs (brand position, operations profile, promotion brief, strategic objective) and campaign strategies
- `promotion/campaigns/` — detailed campaign plans, content strategy, and launch readiness docs
- `reference/` — shared reference material read by all stations
- `skills/` — station skill files (updated after every correction as part of the teaching loop)
- `exports/` — final packaged PDFs ready for Payhip upload

### GitHub Actions

`brief-orchestrator.yml` — manual-trigger (`workflow_dispatch`) workflow that runs `npm run brief` and commits any generated brief files back to `briefs/` with `[skip ci]`.
