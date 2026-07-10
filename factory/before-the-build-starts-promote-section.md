# Before the Build Starts — Promote a Subsection to a Full Section

Target file: `products/dont-go-broke/booklets/before-the-build-starts/05-final-copy.md`

Promoting "Reviewing Against the Blueprint, Not the Screen" (currently a subsection inside Section 4) to its own numbered section, since it teaches a distinct behavior — reviewing AI output after the fact — rather than restating Section 4's lesson about creating the blueprint. This pushes every section after it down by one number.

## 1. Remove the subsection from inside Section 4

Delete this block (currently sits between "Write the blueprint. Keep it to one page. Make it plain. Then use it as the measuring stick for everything the AI builds." and the `---` divider before "## Section 5 – Map the User Journey"):

```markdown
### Reviewing Against the Blueprint, Not the Screen

The real test of a blueprint comes after the AI generates something, not before. Here is how that review actually works.

Say your blueprint lists four required screens: a login screen, a dashboard, an item-entry form, and a summary view. The AI generates all four — plus a settings screen, a user-profile screen, and an onboarding wizard with three additional slides.

Without a blueprint, this looks like the AI being thorough. The extra screens look polished. They feel like generosity. A builder without a written reference might simply accept all seven screens, because nothing on the page says they weren't supposed to be there.

With a blueprint in hand, the review is mechanical instead of impressionistic: four screens were requested, seven were built. Three screens exist that were never part of the plan, meaning three screens now need to be reviewed, tested, and maintained that you did not budget time or money for. The blueprint does not tell you whether the extra screens are bad — it tells you that a decision was made without you, and now you get to decide whether to keep it, on purpose, instead of by default.

This is what makes the blueprint a contract rather than a suggestion. A suggestion can quietly expand. A contract has to be checked against, line by line, and anything outside it has to be a deliberate choice rather than an accident of what the AI assumed you probably also wanted.
```

## 2. Insert the new Section 5 in its place (between Section 4 and the old Section 5)

```markdown
## Section 5 – Review the Output Against the Blueprint

The real test of a blueprint comes after the AI generates something, not before. A blueprint you never check against is not a contract — it is just a note you wrote to yourself and forgot to use.

Say your blueprint lists four required screens: a login screen, a dashboard, an item-entry form, and a summary view. The AI generates all four — plus a settings screen, a user-profile screen, and an onboarding wizard with three additional slides.

Without a blueprint, this looks like the AI being thorough. The extra screens look polished. They feel like generosity. A builder without a written reference might simply accept all seven screens, because nothing on the page says they weren't supposed to be there.

With a blueprint in hand, the review is mechanical instead of impressionistic: four screens were requested, seven were built. Three screens exist that were never part of the plan, meaning three screens now need to be reviewed, tested, and maintained that you did not budget time or money for. The blueprint does not tell you whether the extra screens are bad — it tells you that a decision was made without you, and now you get to decide whether to keep it, on purpose, instead of by default.

The same check applies beyond screens. Compare the required data the AI actually stored against what the blueprint specified — an extra field or table is exactly as easy to wave through as an extra screen, and exactly as expensive to maintain later. Compare what got excluded, too: if the blueprint explicitly ruled out a notifications system and the AI quietly built one anyway "for completeness," that is scope creep wearing a helpful disguise.

This is what makes the blueprint a contract rather than a suggestion. A suggestion can quietly expand. A contract has to be checked against, line by line, and anything outside it has to be a deliberate choice rather than an accident of what the AI assumed you probably also wanted.

Do this review before you move on to mapping the user journey. A blueprint that was never checked against the actual output is not protecting anything — it is just a document that happens to exist.

---
```

(Note the trailing `---` divider — it separates the new section from the one that follows, matching the pattern used between every other section in this file.)

## 3. Renumber every section from here on (work bottom-to-top to avoid collisions)

- `## Section 8 – The Final Pre-Build Review` → `## Section 9 – The Final Pre-Build Review`
- `## Section 7 – Prepare the Handoff` → `## Section 8 – Prepare the Handoff`
- `## Section 6 – Define Agent Boundaries Before the Agent Starts` → `## Section 7 – Define Agent Boundaries Before the Agent Starts`
- `## Section 5 – Map the User Journey` → `## Section 6 – Map the User Journey`

No other changes needed — the Table of Contents is auto-generated from the `<h2>` tags at build time, so it will pick up the new section and renumbering automatically. No changes needed to the back matter or next-booklet-cover either.

## Claude Code prompt

"Apply before-the-build-starts-promote-section.md to before-the-build-starts/05-final-copy.md: remove the subsection from Section 4 per section 1, insert the new standalone Section 5 per section 2, and renumber all subsequent sections per section 3 (working bottom-to-top). Then rebuild all 5 proofs."
