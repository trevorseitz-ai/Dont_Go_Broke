# Campaign 1 Asset Development Plan v3.0 – Replit — When the Meter Keeps Running

> **Status:** Approved

## 1. Asset Development Plan Identity

- **Campaign:** Replit – When the Meter Keeps Running
- **Version:** v3.0
- **Artifact Type:** Asset Development Plan
- **Parent Artifact:** Campaign 1 Asset Specifications v3.0

---

## 2. Source-of-Truth Inputs

- `promotion/campaigns/campaign-1-replit-architecture-v3.0.md`
- `promotion/campaigns/campaign-1-replit-content-strategy-v3.0.md`
- `promotion/campaigns/campaign-1-replit-execution-plan-v3.0.md`
- `promotion/campaigns/campaign-1-replit-asset-specifications-v3.0.md`
- `promotion/campaigns/campaign-roadmap-v3.0.md`
- `audience-factory/strategies/Promotion Strategy v2.2.md`
- `audience-factory/approved-inputs/promotion-brief-v2.1-approved.md`
- `audience-factory/approved-inputs/brand-position-v2.1-approved.md`
- `audience-factory/approved-inputs/operations-profile-v2.2-approved.md`
- `audience-factory/approved-inputs/strategic-objective-v1.0-approved.md`

---

## 3. Development Objective

Plan the ordered development of all seven Campaign 1 assets so that each asset can be drafted, reviewed, and approved in a controlled sequence — without skipping review gates and without creating production content prematurely.

This plan defines what development tasks must be completed, in what order, with what inputs and checkpoints, before any asset advances to production.

---

## 4. Approved Strategy and Specification Lock

All of the following are locked. No alterations are permitted in this document or any downstream artifact without stakeholder approval.

### Locked strategy elements (from Architecture v3.0)

| Locked Element | Approved Value |
|----------------|----------------|
| Audience | Solo developers and hobbyists who are first-time AI builders using or considering Replit |
| Awareness Stage | Problem-aware |
| Campaign Hypothesis | Builders fear runaway costs |
| Campaign Premise | Replit accelerates development while exposing users to hidden compute-time costs |
| Campaign Angle | "The Meter Keeps Running" |
| Primary Message | "Your AI-powered code speeds up, but the Replit meter keeps ticking – protect yourself from surprise costs." |
| Message Pillars | Speed vs. Cost · Visibility Gap · Prevention |
| Offer Role | Free pamphlet as lead magnet |
| CTA Role | Sign-up prompt to download pamphlet and join mailing list |
| Channel Roles | Replit discussions (primary) · Reddit (secondary) · X (amplification) · Email (post-signup trust) |
| Lead Capture Goal | Contribute measurable progress toward the first 100 subscribers |
| Hypothesis Validation Target | ≥ 60 % of respondents acknowledge cost-fear as primary concern |
| Channel Effectiveness Target | Identify ≥ 1 channel delivering > 30 % of sign-ups |

### Locked asset specifications (from Asset Specifications v3.0)

| Asset ID | Asset Name | Type | Channel |
|----------|-----------|------|---------|
| A-01 | Replit Pamphlet | PDF lead magnet | All (primary offer) |
| A-02 | Landing Page / Download Flow | Web page | All (sign-up capture) |
| A-03 | Replit Discussion Asset | Community post | Replit discussions |
| A-04 | Reddit Awareness Asset | Community post | Reddit (r/Replit, r/AI) |
| A-05 | X Awareness Asset | Social post | X (Twitter) |
| A-06 | Post-Signup Email Asset | Email | Email (post-signup) |
| A-07 | Analytics / Tracking Setup | Measurement configuration | All |

No asset specification may be modified without stakeholder approval and re-approval of this plan.

---

## 5. Asset Development Sequence

Assets must be developed in the following sequence. No asset may advance to the next stage without completing its required development tasks and passing its review checkpoint.

**Rationale for sequence:** Infrastructure assets (A-07, A-02) must be prepared first because all content assets depend on a functional delivery and tracking environment. The primary lead magnet (A-01) must be drafted before channel assets (A-03, A-04, A-05, A-06) because channel assets reference it.

| Stage | Asset(s) | Development Focus | Gate Before Advancing |
|-------|---------|-------------------|-----------------------|
| 1 | A-07 | Analytics and tracking setup | Operations review: confirm tracking functional |
| 2 | A-02 | Landing page and delivery flow review and update | Operations review: confirm form, delivery, tracking live |
| 3 | A-01 | Pamphlet draft development | Stakeholder, Legal/Compliance, Design reviews |
| 4 | A-06 | Post-signup email draft development | Stakeholder, Legal/Compliance, Operations reviews |
| 5 | A-03 | Replit discussion draft development | Stakeholder, Legal/Compliance, channel readiness check |
| 6 | A-04 | Reddit awareness draft development | Stakeholder, Legal/Compliance, channel readiness check |
| 7 | A-05 | X awareness draft development | Stakeholder, Legal/Compliance, channel readiness check |

No stage may be skipped. Development of Stages 5–7 may proceed in parallel after Stage 4 is complete.

---

## 6. Per-Asset Development Requirements

### A-07 — Analytics / Tracking Setup (Stage 1)

**Development tasks:**
1. Identify a UTM parameter structure for channel attribution (Replit discussions, Reddit, X, Email).
2. Confirm or configure click-tracking on the Kit landing page URL.
3. Confirm subscriber count tracking is enabled in the Resend / Kit system.
4. Establish a manual community engagement logging method for A-03, A-04, A-05 (replies, comments, observed language).
5. Define how hypothesis-validation responses from A-06 will be collected and recorded.
6. Document the tracking configuration for stakeholder review.

**Required inputs:**
- Asset Specifications: Section 10 (Measurement Requirements), Section A-07
- Execution Plan: Section 11 (Measurement Setup Requirements)
- Operations Profile: Analytics status (none currently configured), Kit landing page URL, Resend email provider

**Completion condition:** All tracking mechanisms documented, confirmed functional by Operations review, and approved by stakeholder before Stage 2 begins.

---

### A-02 — Landing Page / Download Flow (Stage 2)

**Development tasks:**
1. Audit the existing Kit landing page (`https://don-t-go-broke-in-the-age-of-ai.kit.com/65cad4036c`) against the approved Asset Specifications requirements.
2. Confirm that the email sign-up form is functional and triggers automated PDF delivery via Resend.
3. Confirm or add UTM parameter support to the landing page URL for channel attribution.
4. Review landing page copy and messaging against the approved campaign angle, primary message, and message pillars — without writing new copy in this plan.
5. Confirm GDPR/CCPA-compliant minimal data collection is in place.
6. Document any gaps identified between the current landing page state and the approved Asset Specifications.
7. Prepare a gap report for stakeholder review if any discrepancies are found.

**Required inputs:**
- Asset Specifications: Section A-02
- Operations Profile: Kit landing page URL, Resend email provider, PDF delivery automation status
- Architecture: Section 14 (CTA Role), Section 18 (Success Criteria)

**Completion condition:** Landing page confirmed functional with sign-up form, delivery automation, UTM tracking, and GDPR/CCPA compliance. Stakeholder and Operations review sign-off required before Stage 3 begins.

---

### A-01 — Replit Pamphlet (Stage 3)

**Development tasks:**
1. Assemble all required inputs for the pamphlet draft: Architecture Sections 7, 9, 10, 11, 16; Brand Position (Core Promise, Brand Character, Supporting Messages, Strategic Constraints); Promotion Brief (Unique Advantage, Claims That Require Verification, Topics to Avoid).
2. Conduct a claim verification pass on all Replit-specific cost, credit, and usage information before the draft is written (see Section 7 of this plan).
3. Develop a pamphlet section map that identifies each required section, the approved message pillar it serves, and the approved objection it addresses — without drafting copy.
4. Assign pamphlet draft development to the designated content creator (Trevor Seitz / AI system).
5. Complete the pamphlet draft in accordance with the approved tone, format, and content requirements from Asset Specifications.
6. Submit the draft for stakeholder review.
7. Submit the draft for Legal/Compliance review: verify all cost-related claims.
8. Submit the draft for Design review: confirm layout, branding, and PDF format.
9. Incorporate all review feedback and re-submit for final stakeholder sign-off.

**Required inputs:**
- Asset Specifications: Section A-01 (all subsections)
- Architecture: Sections 7, 9, 10, 11, 16
- Brand Position: Core Promise, Brand Character, Supporting Messages, Strategic Constraints
- Promotion Brief: Unique Advantage, Claims That Require Verification, Topics to Avoid

**Completion condition:** Pamphlet draft reviewed and signed off by stakeholder, Legal/Compliance, and Design. Draft ready for production (PDF formatting/export) in Asset Production stage.

---

### A-06 — Post-Signup Email Asset (Stage 4)

**Development tasks:**
1. Assemble all required inputs: Architecture Sections 17 and 19; Content Strategy Section 4; Operations Profile (Resend email provider, automation status).
2. Confirm that the Resend automation is configured to trigger the post-signup email upon sign-up via the Kit landing page.
3. Develop the email development requirement map: identify required content components (delivery confirmation, brand trust reinforcement, hypothesis-validation feedback prompt), their sequencing, and their review requirements — without drafting copy.
4. Assign email draft development to the designated content creator.
5. Complete the email draft in accordance with the approved tone, format, and content requirements.
6. Submit the draft for stakeholder review.
7. Submit the draft for Legal/Compliance review: CAN-SPAM / GDPR compliance.
8. Submit the draft for Operations review: confirm automated delivery will function correctly.
9. Incorporate all review feedback and re-submit for final stakeholder sign-off.

**Required inputs:**
- Asset Specifications: Section A-06 (all subsections)
- Architecture: Section 17 (Proof Requirements), Section 19 (Learning Goals)
- Content Strategy: Section 4 (Channel Content Roles – Email post-signup)
- Operations Profile: Resend email provider, automation status

**Completion condition:** Email draft reviewed and signed off by stakeholder, Legal/Compliance, and Operations. Draft ready for production (automation configuration) in Asset Production stage.

---

### A-03 — Replit Discussion Asset (Stage 5)

**Development tasks:**
1. Confirm Replit community account access and posting eligibility (channel readiness check).
2. Review Replit community posting guidelines and confirm character/word limits.
3. Confirm A-01 (pamphlet) and A-02 (landing page) are complete and signed off, as A-03 references both.
4. Develop the discussion asset development map: identify required content components (community-value-first framing, campaign angle alignment, landing page reference), their sequencing, and their review requirements — without drafting copy.
5. Assign draft development to the designated content creator.
6. Complete the draft in accordance with approved tone, format, content, and community participation rules (help first, five-to-one ratio).
7. Submit the draft for stakeholder review.
8. Submit the draft for Legal/Compliance review: cost claim language verified.
9. Incorporate all review feedback and re-submit for final stakeholder sign-off.

**Required inputs:**
- Asset Specifications: Section A-03 (all subsections)
- Architecture: Section 15 (Channel Roles – Replit)
- Promotion Strategy v2.2: Community Participation Rules
- Brand Position: Strategic Constraints
- Confirmed A-01 landing page URL (from A-02 sign-off)

**Completion condition:** Replit discussion asset draft reviewed and signed off. Channel readiness confirmed. Draft ready for production in Asset Production stage.

---

### A-04 — Reddit Awareness Asset (Stage 6)

**Development tasks:**
1. Confirm project Reddit account is created and in good standing.
2. Confirm posting eligibility in r/Replit and r/AI (review subreddit rules, karma requirements, self-promotion policies).
3. Confirm A-01 (pamphlet) and A-02 (landing page) are complete and signed off.
4. Develop the Reddit asset development map: identify required content components (community-value-first framing, message pillar alignment, landing page reference), their sequencing, and their review requirements — without drafting copy.
5. Assign draft development to the designated content creator.
6. Complete the draft in accordance with approved tone, format, content, and subreddit policies.
7. Submit the draft for stakeholder review.
8. Submit the draft for Legal/Compliance review: cost claim language verified.
9. Incorporate all review feedback and re-submit for final stakeholder sign-off.

**Required inputs:**
- Asset Specifications: Section A-04 (all subsections)
- Architecture: Section 15 (Channel Roles – Reddit)
- Promotion Strategy v2.2: Community Participation Rules
- Brand Position: Strategic Constraints
- Confirmed A-01 landing page URL (from A-02 sign-off)

**Completion condition:** Reddit awareness asset draft reviewed and signed off. Channel readiness confirmed. Draft ready for production in Asset Production stage.

---

### A-05 — X Awareness Asset (Stage 7)

**Development tasks:**
1. Confirm X account is created and approved for use (account does not yet exist per Operations Profile).
2. Confirm no outstanding policy violations on the account.
3. Confirm A-01 (pamphlet) and A-02 (landing page) are complete and signed off.
4. Develop the X asset development map: identify required content components (message pillar alignment, campaign angle, landing page link), their sequencing, and their review requirements — without drafting copy.
5. Confirm the post will conform to X character limits.
6. Assign draft development to the designated content creator.
7. Complete the draft in accordance with approved tone, format, and content requirements.
8. Submit the draft for stakeholder review.
9. Submit the draft for Legal/Compliance review: cost claim language verified.
10. Incorporate all review feedback and re-submit for final stakeholder sign-off.

**Required inputs:**
- Asset Specifications: Section A-05 (all subsections)
- Architecture: Section 15 (Channel Roles – X)
- Operations Profile: X account status (does not yet exist – must be created)
- Brand Position: Brand Character, Strategic Constraints
- Confirmed A-01 landing page URL (from A-02 sign-off)

**Completion condition:** X awareness asset draft reviewed and signed off. Channel readiness confirmed (X account live and approved). Draft ready for production in Asset Production stage.

---

## 7. Claim Verification Requirements

Before any asset draft that references Replit platform costs, credits, or usage meters is submitted for review, a claim verification pass must be completed.

**Scope of claim verification:**
- All references to Replit credit costs, usage meter behavior, or billing mechanics must be verified against current Replit documentation.
- No specific pricing figures, credit limits, or feature availability claims may be included in any draft without documented verification.
- Verification must be completed before the draft is written, not after.

**Assets requiring claim verification:** A-01, A-03, A-04, A-05

**Verification approach:**
- Review current Replit pricing and credit documentation at the time of draft development.
- Document the source and date of each verified claim.
- Flag any claims that cannot be verified for removal or rewording before the draft proceeds.
- Include the verification documentation in the Legal/Compliance review submission.

**Completion condition:** A claim verification document is prepared for each applicable asset draft and submitted alongside the draft for Legal/Compliance review.

---

## 8. Design Preparation Requirements

Before A-01 (Replit Pamphlet) and A-02 (Landing Page) enter their Design review stage, the following design preparation tasks must be completed.

**Design preparation tasks:**
1. Confirm the approved Don't Go Broke logo file is accessible and in a production-ready format.
2. Finalize the approved brand color palette (Operations Profile confirms this has not yet been finalized).
3. Define the approved typography for the Don't Go Broke brand (to be confirmed during design preparation).
4. Confirm the PDF layout format requirement for A-01: readable, clean, short-form pamphlet.
5. Confirm the web format requirement for A-02: accessible, functional sign-up page.
6. Prepare a brief design requirements summary for the Design reviewer — without producing mockups or design files in this plan.

**Assets requiring design preparation:** A-01, A-02

**Completion condition:** Logo confirmed accessible, color palette finalized, typography confirmed, and design requirements summary prepared before Design review submission.

---

## 9. Measurement Preparation Requirements

Before any channel asset goes live, measurement must be fully operational. The following preparation tasks must be completed as part of A-07 development (Stage 1) and confirmed before Stages 5–7 begin.

**Measurement preparation tasks:**
1. UTM parameter structure defined and documented for all four channels (Replit discussions, Reddit, X, Email).
2. Click tracking on the Kit landing page confirmed operational.
3. Subscriber count tracking confirmed in the Resend / Kit system.
4. Manual community engagement logging method established (format for recording replies, comments, and observed audience language for A-03, A-04, A-05).
5. Post-signup feedback capture method confirmed in A-06 (at least one feedback prompt included and responses recordable).
6. Measurement framework reviewed and confirmed against the approved success criteria (Architecture Section 18) before any channel goes live.

**Completion condition:** All measurement systems confirmed operational (Operations review sign-off) before any channel asset is published.

---

## 10. Review and Approval Checkpoints

Every asset must pass each applicable review checkpoint before advancing to production. No exceptions.

| Checkpoint | Required For | Trigger |
|-----------|-------------|---------|
| Operations review | A-07, A-02, A-06 | Confirms functional infrastructure: tracking, delivery automation, channel access |
| Stakeholder review | All assets (A-01 through A-07) | Trevor Seitz sign-off required before any asset advances |
| Legal/Compliance review | A-01, A-03, A-04, A-05, A-06 | All cost-related claims verified; CAN-SPAM / GDPR compliance confirmed |
| Design review | A-01, A-02 | Brand color palette, typography, logo, and layout confirmed |
| Channel readiness check | A-03, A-04, A-05 | Account access, posting eligibility, and policy compliance confirmed |
| Per-asset final sign-off | All assets | Stakeholder approves each asset individually before it advances to Asset Production |

**Review sequencing rule:** All review checkpoints for a given asset must be completed before that asset advances. An asset may not enter Asset Production until all applicable checkpoints are cleared.

---

## 11. Development Risks

| Risk | Asset(s) Affected | Mitigation |
|------|------------------|------------|
| Replit pricing or credit information changes between claim verification and publication | A-01, A-03, A-04, A-05 | Re-verify claims immediately before any public-facing draft goes to final sign-off |
| Kit landing page or Resend automation is not fully functional | A-02, A-06 | Operations review (Stage 2) must confirm functionality before any content asset drafts reference the delivery URL |
| X account creation is delayed or rejected | A-05 | A-05 is last in sequence; delay does not block Stages 1–6. If delayed significantly, stakeholder decides whether to proceed without X for initial launch |
| Reddit subreddit posting restrictions block distribution | A-04 | Channel readiness check (Stage 6) confirms eligibility before draft is finalized; if blocked, stakeholder decides on alternative approach |
| Content creator capacity is insufficient to develop all assets within target window | All | Stakeholder decision required: prioritize A-01, A-02, A-07 as minimum viable launch set; defer A-03 through A-06 if needed |
| Claim verification reveals inaccurate or outdated cost information | A-01, A-03, A-04, A-05 | Remove or reword unverifiable claims before the draft is written; do not include unverified claims |

---

## 12. Handoff to Asset Production

Upon completion of all asset development stages and review checkpoints, deliver this Asset Development Plan and all approved asset drafts to the Campaign 1 Asset Production Plan stage with the following handoff note:

> All asset drafts have been developed, reviewed, and individually approved. Claim verification is documented. Design preparation is complete. Channel readiness checks are complete. All measurement systems are confirmed operational. Proceed to Campaign 1 Asset Production Plan v3.0, where each approved draft will be converted into a production-ready asset. No asset may be published without a final production sign-off.

---

## 13. Explicit Non-Authorizations

- No final copy, draft copy, social posts, email copy, Reddit copy, Replit discussion copy, or X/Twitter copy is created in this document.
- No graphics, image prompts, mockups, design files, or production-ready assets are produced.
- No scripts or multimedia production content is created.
- No publishing schedule, posting calendar, or channel posting dates are included.
- No changes to the approved audience, hypothesis, message pillars, CTA role, offer role, channel roles, success criteria, or asset specifications are made.
- No new subscriber targets beyond measurable progress toward the first 100 subscribers are introduced.
- No tool assumptions beyond those already confirmed in the Operations Profile are introduced.

---

## 14. Approval Status

- **Approved:** Stakeholder sign-off complete. This Asset Development Plan may be used as source of truth for Campaign 1 Asset Production Plan v3.0.
