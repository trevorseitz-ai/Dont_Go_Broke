# Don't Go Broke — Publishing Factory Station Map (v1)

**Status:** Draft for Trevor's correction. Built from the series outline, the published
sample (*Before the Build Starts*), and known workflow rules. Assumptions that need
verification are marked ⚠️ at the bottom.

**Doctrine:** This factory follows its own product's advice — blueprint before build,
boundaries before agent, human gates at the expensive moments.

---

## The Shared State (not a station — the library every station reads)

Every station consumes these before doing anything. They live in the repo and are the
factory's memory:

| Asset | Purpose |
|---|---|
| Series outline (5-booklet ladder) | What each booklet is and where it sits in the sequence |
| Sample booklet: *Before the Build Starts* | Ground truth for structure, cadence, and tone |
| Voice framework (Casey Morse narrator) | Governs register, rhythm, and narrator persona |
| `booklet-payhip-format-conformance-standard-v2.md` | Layout/format rules for the published proof |
| Editorial conventions (from Booklets 1–3 cross-comparison) | Section density, heading conventions, voice register notes |
| **House rule:** full file replacements only, never diffs | Applies to every revision pass at every station |

---

## Autonomy Ladder (used per station, never globally)

| Level | Name | Meaning |
|---|---|---|
| L0 | Assist | Human does the work; agent answers questions |
| L1 | Propose | Agent drafts; human approves before it counts |
| L2 | Execute-with-review | Agent produces final-form output; human reviews after |
| L3 | Autonomous | Agent runs and only flags exceptions; human spot-checks |

A station is promoted one level at a time, only after N clean runs at its current level
(suggest N = 2 for mechanical stations, N = 3+ for judgment stations).

---

## The Stations

### Station 1 — Brief
| | |
|---|---|
| **Consumes** | Series outline entry for the booklet + shared state |
| **Produces** | Booklet Brief: job statement, target reader, lesson arc, section list (~8), illustration slots, exclusions |
| **Standard** | The sample booklet's structure: Field Note opening → sections (lesson / warning / tradeoff / practical method) → callout artifact (e.g., Build Receipt) → final checklist → Field Note closing |
| **Human gate** | **Yes — approve brief before any drafting.** Cheapest place to catch a wrong booklet. |
| **Autonomy now** | L1 (Propose) |
| **Model** | Top tier (Fable 5 / Opus) |

### Station 2 — Manuscript
| | |
|---|---|
| **Consumes** | Approved Brief + voice framework + sample booklet |
| **Produces** | Full manuscript draft as a complete file |
| **Standard** | Voice framework; sample booklet cadence |
| **Human gate** | **Yes — full voice read by Trevor.** Voice drift is the most expensive undetected failure in the factory. |
| **Autonomy now** | L1–L2. **This station is promoted last.** |
| **Model** | Top tier |

### Station 3 — Editorial Conformance (manuscript-level)
| | |
|---|---|
| **Consumes** | Manuscript draft |
| **Produces** | Conformance report (rule-by-rule pass/fail) + corrected full-file replacement |
| **Standard** | Editorial conventions doc (heading conventions, section density, register rules) |
| **Human gate** | Review the report, not the manuscript. If the report is clean and trusted, skim only. |
| **Autonomy now** | L2 → **second station promoted to L3** |
| **Model** | Sonnet |

### Station 4 — Peer Review (Antigravity relay)
| | |
|---|---|
| **Consumes** | Conformed manuscript |
| **Produces** | Two-round relay decision packet: fact-check flags, logic issues, structured accept/revise decisions |
| **Standard** | Relay packet safety validation (already built) |
| **Human gate** | Read the decision summary; rule on any "revise" items. |
| **Autonomy now** | L2 (system already exists — the factory just invokes it) |
| **Model** | Sonnet |

### Station 5 — Illustration
| | |
|---|---|
| **Consumes** | Approved manuscript + illustration slots from the Brief |
| **Produces** | Generation-ready image prompts per slot, in the established hand-drawn diagram style (cover scene, process diagrams, checklist artifacts) |
| **Standard** | Style consistency with the sample booklet's illustrations |
| **Human gate** | **Yes — Trevor runs generation and approves each image.** Prompts are L2; generation stays human until tooling changes. |
| **Autonomy now** | L2 for prompts, L0 for generation ⚠️ |
| **Model** | Top tier for prompts (style fidelity is judgment work) |

### Station 6 — Layout
| | |
|---|---|
| **Consumes** | Approved manuscript + approved images |
| **Produces** | Layout proof (PDF) |
| **Standard** | Layout production plan ⚠️ |
| **Human gate** | None separate — Station 7 is the check on this station's output. |
| **Autonomy now** | L2 |
| **Model** | Sonnet (mechanical assembly) |

### Station 7 — Layout Conformance
| | |
|---|---|
| **Consumes** | Layout proof |
| **Produces** | Conformance report against the v2 standard + corrected proof (full replacement) |
| **Standard** | `booklet-payhip-format-conformance-standard-v2.md` |
| **Human gate** | Report review only. |
| **Autonomy now** | L2 → **FIRST station promoted to L3.** The standard was written precisely to remove judgment from this check. |
| **Model** | Sonnet (purely structural checks could drop to Haiku later) |

### Station 8 — Packaging & Release
| | |
|---|---|
| **Consumes** | Conformed proof |
| **Produces** | Payhip upload set: final PDF, product page copy, metadata, pricing recommendation ⚠️ |
| **Standard** | Payhip listing conventions from Booklets 1–2 ⚠️ |
| **Human gate** | **Yes — PERMANENT. Trevor clicks publish. This gate is never automated.** Publishing is public and reputational. |
| **Autonomy now** | L1 for assets; L0 for the publish action, forever |
| **Model** | Haiku/Sonnet |

---

## Promotion Order (the autonomy roadmap)

1. **Station 7 — Layout Conformance** → L3 first (rule-based, cheap failures, standard already written)
2. **Station 3 — Editorial Conformance** → L3 second
3. **Station 6 — Layout** → L3 third (once Station 7 is a trusted backstop)
4. **Station 8 — Packaging assets** → L2 (publish click stays human)
5. **Station 4 — Peer Review** → L3 invocation (already largely automated internally)
6. **Station 1 — Brief** → L2
7. **Station 2 — Manuscript** → promoted last, may never pass L2. Voice is the product.
8. **Station 5 — Illustration** → depends on future image tooling ⚠️

## The Teaching Loop (how the factory gets more autonomous)

After every station run, one required step: **log what the human corrected.**
Every correction is either (a) a one-off, or (b) a missing rule. If it's (b), the rule is
added to that station's skill file the same day. A station earns promotion when runs stop
producing type-(b) corrections. This loop *is* the "teach and adjust" mandate — skipping
the log skips the teaching.

---

## ⚠️ Assumptions Trevor needs to correct

1. Illustration generation is currently manual via ChatGPT Images — confirm.
2. A layout production plan exists and defines how proofs are assembled — confirm the actual tool/process (manual layout app? scripted?).
3. Payhip packaging: confirm what the upload set actually contains (single PDF? bundle? preview images?).
4. Station order: does anything happen between peer review and illustration in the real workflow today (e.g., a second manuscript revision pass)?
5. N (clean runs before promotion): 2 for mechanical, 3 for judgment — adjust to taste.
