# Editorial Review – Before the Build Starts

**Publication:** *Before the Build Starts*
**Publication Type:** Booklet
**Series:** Don't Go Broke in the Age of AI
**Draft Reviewed:** `draft.md` (373 lines, ~7,400 words)
**Review Date:** 2026-06-22

**Governing Standards:**

- review-system-standard-v1.md
- publication-artifact-standard-v1.md
- booklet-standard-v1.md
- dont-go-broke-editorial-standard-v1.md
- editorial-review-standard-v1.md
- publishing-room-standard-v1.md

**Source Documents:**

- publication-concept.md
- publication-brief-v2.md
- research.md
- outline.md

---

## Review 1 — Sam (Research & Truth)

**Review Focus:** Factual accuracy, research integrity, uncertainty handling, Publication Concept alignment.

**Determination:** PASS

### Findings

**Factual Accuracy**

The draft makes no specific claims about platform pricing, credit costs, free-tier limits, or API rates. All cost references are qualitative ("credits," "budget," "money") rather than quantitative. This is appropriate for a platform-independent booklet and avoids the stale-pricing risk identified in the Escalation Criteria.

The draft's descriptions of AI agent behavior — scope expansion, uninstructed third-party integrations, database proliferation, infrastructure over-provisioning — are consistent with the research findings in `research.md`, specifically:

- "Iterative Over-generation" (research.md: AI agents propose additional screens and features after each cycle)
- "Assumed Platform Integration" (research.md: agents embed third-party services without explicit request)
- "Optimistic Resource Allocation" (research.md: deployment scripts allocate higher-tier compute than necessary)

No fabricated statistics, survey percentages, or unsourced market claims are present. The draft uses "we see" and "the pattern we see again and again" language, which is consistent with the field-note observation style and the research base.

**Uncertainty Handling**

The draft does not present any uncertain claims as fact. Where behavioral patterns are described (e.g., "the agent is likely to add third-party services"), they are framed as observed tendencies, not guaranteed behaviors. This satisfies Sam's uncertainty disclosure requirement.

**Publication Concept Alignment**

| Concept Element | Concept Requirement | Draft Delivery | Aligned? |
|---|---|---|---|
| Core Lesson | Do not ask an AI tool to build until you have designed clearly enough to know what the tool is supposed to build | "The blueprint comes before the build" — stated in opening, reinforced in every section, restated in closing | ✅ |
| Mistake Prevented | Starting the build before creating the blueprint | Explicitly named in Section 1, reinforced throughout, restated in closing | ✅ |
| Reader Transformation: Before | "I should start building before I lose momentum" / "The AI will figure out the structure" | Opening addresses eagerness to build; Section 1 addresses the false sense of momentum | ✅ |
| Reader Transformation: After | "I need to know what I am asking the AI to build" / "A small blueprint will save money later" | Sections 2–8 progressively build this mindset; closing quantifies the time investment | ✅ |
| Core Analogy | Do not start building the house before you have the blueprint | Present in Field Note Opening, used carefully, not overextended | ✅ |
| "Not This" Boundaries | Not a coding course, UX textbook, platform comparison, deployment checklist, etc. | Draft does not stray into any prohibited territory | ✅ |

**Required Changes:** None.

**Blocking Issues:** None.

---

## Review 2 — Alex (Reader & Editorial Voice)

**Review Focus:** Don't Go Broke voice, reader trust, narrative quality, Publication Brief alignment.

**Determination:** PASS

### Findings

**Don't Go Broke Voice**

The draft reads as a builder warning another builder before a predictable mistake. The tone is:

- Practical: advice is actionable and grounded in observable behavior.
- Honest: tradeoffs are named in every section ("spending time on definition feels like it slows you down").
- Protective: warnings are framed as prevention, not fear ("the alternative is paying ten times that in rework").
- Calm: no urgency language, no countdown pressure, no manufactured scarcity.
- Non-hype: no platform evangelism, no "unlock your potential," no influencer language.
- Non-shaming: "You do not need to be a software engineer"; "This booklet should never shame the reader for not knowing how software is planned" (Publication Concept) — the draft honors this consistently.

The voice does not sound like a guru, consultant, technical architect, startup coach, platform critic, or fear-based marketer. It sounds like a field guide.

**Reader Trust**

The draft earns trust through specificity. Rather than saying "planning is important," it shows what happens when planning is absent (Section 1's drift narrative), what each planning element contains (Sections 2–7), how much time each step takes (closing), and what the tradeoff looks like (every section).

No false lived experience is invented. No anecdotes claim personal history. Observations are framed as field-level patterns ("the pattern we see again and again"), consistent with Alex's Rules of Perspective.

**Narrative Quality**

The draft maintains a consistent narrative arc:

1. Hook: the expensive moment (opening)
2. Core warning: the mistake precedes the tool (Section 1)
3. Progressive definition: job → scope → blueprint → journey → boundaries → handoff → review (Sections 2–8)
4. Release: "Open the tool. Hand over the blueprint." (Section 8)
5. Reinforcement: two hours vs. ten hours (closing)

Each section begins with a lesson-level observation, develops it through explanation, grounds it with a practical example (task tracker), warns about the cost of skipping it, names the tradeoff, and closes with a clear call to action. This is strong narrative structure for a booklet.

**Publication Brief Alignment**

| Brief Requirement | Draft Delivery | Aligned? |
|---|---|---|
| Platform-independent | No platform-specific advice; platforms named only as examples of the tool-choice distraction (Section 1) | ✅ |
| Beginner-safe | Plain language throughout; no jargon; explicit "you do not need to be a software engineer" | ✅ |
| Required concepts preserved ("Build with your eyes open," "The blueprint comes before the build," etc.) | All concepts present; see Sam's alignment table | ✅ |
| Booklet boundaries honored (not a coding course, UX textbook, etc.) | No boundary violations | ✅ |
| Reader leaves with more confidence, not more fear | Closing: "You have an idea worth pursuing"; preparation framed as empowerment, not burden | ✅ |
| Publication promise: "A short, practical guide to designing the app before asking AI to build it" | Draft delivers on this promise | ✅ |

**Required Changes:** None.

**Blocking Issues:** None.

---

## Review 3 — Taylor (Beginner Advocate)

**Review Focus:** Beginner clarity, hidden assumptions, jargon control, reader transformation.

**Determination:** PASS

### Findings

**Clarity and Readability**

The draft is written in plain, direct sentences. Paragraph length is controlled. Each section has a clear opening statement, a developed explanation, and a concrete closing. The task-tracker example provides a consistent through-line that a beginner can follow across all eight sections without needing to learn a new example each time.

**Hidden Assumptions**

One minor assumption is present but does not reach REVISE threshold:

- Section 6 references "SQLite database and a single server" as an example of appropriate infrastructure. A complete beginner may not know what SQLite is. However, the reference is used in contrast ("a project that needs a simple SQLite database") and the point — that the AI might over-provision — is clear from context even if the reader does not know SQLite specifically. The term serves the warning without requiring comprehension of the technology.

No other hidden assumptions were found. The draft does not assume the reader knows:
- What a database schema is (explicitly noted: "It does not need to be a database schema")
- What a deployment pipeline is (explicitly noted: "You do not need to know what a deployment pipeline looks like")
- What a wireframe is (explicitly noted: "It is not a professional wireframe")
- What a CI/CD pipeline is (mentioned in Section 6 as an example of over-provisioning, alongside enough context to understand)

**Jargon Control**

| Term Used | Context | Beginner-Accessible? |
|---|---|---|
| Blueprint | Defined in Section 4 as "a plain-language description" | ✅ |
| User journey | Defined in Section 5 as "the step-by-step path a real person takes" | ✅ |
| User flow | Used alongside "user journey" with clear explanation | ✅ |
| Data model | Explained as "what the product remembers" | ✅ |
| Scope | Used naturally; meaning clear from context | ✅ |
| Agent boundaries | Defined in Section 6 as "rules you set before the agent starts" | ✅ |
| Third-party services | Explained with examples (authentication, payment, analytics) | ✅ |
| SQLite | Not defined; minor (see above) | ⚠️ Minor |
| CI/CD pipeline | Not defined; minor, contextually clear | ⚠️ Minor |

Neither jargon instance is sufficient to justify a REVISE. Both terms appear in lists of examples where the surrounding items carry the meaning.

**Reader Transformation**

The draft moves the reader from "eager to build" to "ready to plan before building" through a progressive sequence. Each section adds one layer of preparation without overwhelming the reader. The closing quantifies the total time investment (approximately two hours), which prevents planning paralysis by making the preparation feel bounded and achievable.

The reader is never shamed, never talked down to, and never made to feel that their lack of planning experience is a character flaw. The draft consistently frames preparation as a practical skill, not a moral virtue.

**Required Changes:** None.

**Blocking Issues:** None.

---

## Review 4 — Jordan (Practical Constraints)

**Review Focus:** Practical realism, cost risk, tradeoff analysis, survivability.

**Determination:** PASS

### Findings

**Practical Realism**

The draft's recommendations are achievable by a solo builder with limited budget, time, and technical skill:

- Job statement: "fifteen minutes" — realistic.
- Version one constraints: "twenty minutes" — realistic.
- Blueprint: "thirty minutes to write, keep it to one page" — realistic.
- User journey: "twenty to thirty minutes" — realistic.
- Agent boundaries: "fifteen minutes" (implied) — realistic.
- Handoff assembly: "thirty minutes" — realistic.
- Final review: "ten minutes" — realistic.
- Total: "roughly two hours" — realistic and achievable in a single session.

No recommendation requires purchasing software, hiring a consultant, learning a new skill, or performing professional-grade work. The planning approach is proportional to the builder's likely skill level.

**Cost Risk**

The draft does not create cost risk. It does not recommend specific paid tools, platforms, or services. It does not suggest purchasing templates, courses, or assessments. All planning activities use plain-language writing that can be done with any text editor or pen and paper.

The draft actively reduces cost risk by:
- Teaching scope constraint (Section 3: "must work / can wait / not yet")
- Warning about AI-driven scope expansion (Section 6)
- Creating a review baseline (Section 7: handoff as comparison target)
- Preventing premature AI engagement (entire booklet)

**Tradeoff Analysis**

Every section includes an explicit tradeoff:

| Section | Tradeoff Named |
|---|---|
| Opening | Speed vs. direction |
| Section 1 | Definition time vs. rework cost |
| Section 2 | Fifteen minutes writing the job vs. hours correcting the AI |
| Section 3 | Emotional cost of cutting scope vs. financial cost of overbuilding |
| Section 4 | Thirty minutes writing a blueprint vs. hours of rework |
| Section 5 | Twenty-thirty minutes mapping the journey vs. rearranging after the build |
| Section 6 | Time setting boundaries vs. time removing unwanted features |
| Section 7 | Thirty minutes assembling the handoff vs. "the most expensive hours of the project" |
| Section 8 | Ten minutes reviewing vs. five times the cost mid-build |
| Closing | Two hours of preparation vs. ten hours of correction |

This is thorough. Every recommendation has a named cost and a named benefit.

**Survivability**

Could following this advice cause avoidable harm or expense? No. The worst-case outcome of following the booklet's advice is that the reader spends two hours planning before building. If the plan turns out to be wrong, the reader has lost two hours — not money, not credits, not confidence. The planning itself creates no financial exposure.

The advice is survivable for a reader with:
- Limited budget: no spending required
- Limited time: total time investment is bounded (~2 hours)
- Limited skill: no technical skill required
- Limited confidence: preparation is framed as protection, not burden

**Required Changes:** None.

**Blocking Issues:** None.

---

## Review 5 — Robin (Publication Integrity)

**Review Focus:** Booklet format compliance, publication type compliance, artifact readiness, Supporting Tools Removal Test.

**Determination:** PASS

### Findings

**Booklet Format Compliance**

| Booklet Standard Requirement | Draft Status | Compliant? |
|---|---|---|
| Teaches one lesson | "The blueprint comes before the build" | ✅ |
| Prevents one mistake | Building before defining | ✅ |
| Practical field guide tone | Builder-to-builder voice throughout | ✅ |
| Not a worksheet / workbook / specification | No worksheets, no fill-in workbook pages, no spec format | ✅ |
| Target length: 20–30 designed pages (5,000–8,000 words) | ~7,400 words → estimated 24–28 designed pages | ✅ |
| Opening field note | Present (Field Note Opening) | ✅ |
| 5–7 major sections (or approved variation) | 8 sections; approved outline explicitly authorized 8 | ✅ |
| Includes checklists | Pre-Build Readiness Checklist in Section 8 | ✅ |
| Includes practical frameworks | Must-work / can-wait / not-yet; blueprint components; handoff packaging | ✅ |
| Closing note | Present (Field Note Closing) | ✅ |
| Leaves reader ready for next stage | "Open the tool. Hand over the blueprint."; references "Before the Agent Starts" | ✅ |
| Litmus test: lesson stands without tools | Verified below | ✅ |

**Publication Type Compliance**

The draft is a booklet. It is not:

- A worksheet (no blank fill-in sections)
- A workbook (no multi-session exercise structure)
- A project specification (no technical requirements format)
- A software design document (no architecture diagrams or schema definitions)
- A collection of checklists (one checklist present; it is positioned as a supporting tool, not the lesson)
- A platform review (no platform-specific evaluations)
- A course lesson (no learning objectives, assessment questions, or graded outcomes)
- A tutorial (no step-by-step software instructions)
- A requirements document (no formal requirement IDs or acceptance criteria)

The draft is a practical field guide that teaches through explanation, narrative, warnings, tradeoffs, and reasoning. Supporting tools (checklist, Build Receipt, scope framework, blueprint components) are embedded as aids. The teaching does not depend on them.

**Artifact Readiness**

| Artifact Requirement | Status |
|---|---|
| Draft teaches (not just organizes or lists) | ✅ |
| Draft explains, guides, warns, illustrates | ✅ |
| Draft feels like a practical field guide | ✅ |
| Draft contains explanation, narrative examples, practical examples, field notes, warnings, lessons, checklists | ✅ |
| Checklists support the lesson, not carry it | ✅ (Pre-Build Readiness Checklist is explicitly framed: "This checklist is only a final safety pass") |

**Supporting Tools Removal Test**

If all checklists, tables, worksheets, templates, examples, exercises, frameworks, bullet lists, and numbered lists were removed from the draft, the following supporting tools would be removed:

1. Three fill-in-the-blank prompts in Section 2 (3 lines)
2. Must-work / can-wait / not-yet bold paragraphs in Section 3 (3 items)
3. Blueprint component paragraphs in Section 4 (6 items)
4. Agent boundary category paragraphs in Section 6 (4 items)
5. Agent expansion behavior list in Section 6 (4 items)
6. Handoff component paragraphs in Section 7 (5 items)
7. Build Receipt bullet list in Section 7 (5 items)
8. Review question paragraphs in Section 8 (7 items)
9. Pre-Build Readiness Checklist in Section 8 (10 items)

**After removal, would the publication still teach:**

**The core lesson?** Yes. "The blueprint comes before the build" is stated in the opening, developed through narrative explanation in every section, and restated in the closing. The lesson is carried by prose, not by tools.

**The mistake being prevented?** Yes. "Building before defining" is named in Section 1 and reinforced in every subsequent section through explanatory paragraphs that precede and surround every supporting tool.

**The relevant tradeoffs?** Yes. Every section contains a prose paragraph that names the tradeoff (time spent planning vs. cost of not planning). These paragraphs are not part of any supporting tool.

**The intended reader transformation?** Yes. The progressive narrative arc — from "eager to build" (opening) through "ready to plan" (Sections 2–7) to "ready to verify and release" (Section 8) to "confident and disciplined" (closing) — is carried entirely by the narrative structure, not by supporting tools.

**Supporting Tools Removal Test Result: PASS.**

The publication teaches the lesson, the mistake, the tradeoffs, and the transformation through explanation, insight, and narrative first. Supporting tools are optional aids that reinforce but do not carry the teaching.

**Required Changes:** None.

**Blocking Issues:** None.

---

## Summary of Reviewer Determinations

| Reviewer | Role | Determination |
|---|---|---|
| Sam | Research & Truth | **PASS** |
| Alex | Reader & Editorial Voice | **PASS** |
| Taylor | Beginner Advocate | **PASS** |
| Jordan | Practical Constraints | **PASS** |
| Robin | Publication Integrity | **PASS** |

---

## Minor Observations (Non-Blocking)

These observations are noted for the human publisher's awareness. None requires revision before final copy.

1. **Taylor:** Two technical terms (SQLite, CI/CD pipeline) appear without definition. Both are used in example lists where context carries the meaning. A future polish pass could add a brief parenthetical (e.g., "a simple database like SQLite") if desired. Not blocking.

2. **Alex:** The task-tracker example is used consistently across all sections. This is a strength for coherence but creates slight repetition in later sections. If the human publisher desires variety, a second brief example could be introduced in Section 5 or 6. Not blocking.

3. **Robin:** The approved outline specifies 8 sections, which exceeds the Booklet Standard's 5–7 range. The outline was explicitly approved with 8 sections. The Publication Brief permits practical variations ("5–7 major sections, unless the approved structure requires a practical variation"). This is documented and accepted.

---

## Final Review Decision

### APPROVED FOR FINAL COPY

**Rationale:**

All five reviewer passes returned PASS. No REVISE or ESCALATE determinations were issued. The draft:

- Teaches the core lesson defined in the Publication Concept.
- Prevents the mistake identified in the Publication Concept.
- Delivers the reader transformation specified in the Publication Concept and Publication Brief.
- Honors all "not this" boundaries.
- Satisfies the Booklet Standard, including the Litmus Test.
- Satisfies the Don't Go Broke Editorial Standard.
- Passes the Supporting Tools Removal Test.
- Is platform-independent, beginner-safe, and survivable.
- Contains no fabricated claims, no unsourced data, no stale pricing, and no hype.

The draft is ready for final copy production.

**Next Step:** Human Approval → Final Copy (`final.md`)
