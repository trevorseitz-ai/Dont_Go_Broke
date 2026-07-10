# After Launch, the Meter Still Runs — Finale Brief

Both fixes verified locally before writing this up.

## 1. Squeeze back matter onto one page

Root cause: the last checklist item ("The Shutdown Plan Exists...") was spilling alone onto its own near-empty page — everything else already fit on one page with only a few points to spare. Tightening list-item spacing slightly closes the gap.

In `products/dont-go-broke/booklets/layout/style.css`, change:

```css
li {
  margin-bottom: 0.35em;
}
```
to:
```css
li {
  margin-bottom: 0.2em;
}
```

and change:
```css
ul.checklist li {
  position: relative;
  padding-left: 25px;
  margin-bottom: 6px;
}
```
to:
```css
ul.checklist li {
  position: relative;
  padding-left: 25px;
  margin-bottom: 2px;
}
```

Note: this is a shared `style.css` rule, so it tightens list spacing slightly across all 5 booklets, not just this one — verified this doesn't reopen any previously-fixed checklist-splitting issues (the `page-break-inside: avoid` protections on `li` are untouched; only the gap between items shrinks). Recommend a quick page-count check on the other 4 after rebuild, same as with prior shared-CSS changes.

## 2. Expand Field Note Closing to a full page (series finale)

Currently ~0.30 pages. Insert the following after "...you transition from someone who just got lucky with an AI builder to someone who knows how to run a software business." and before "You survived the build. Now you are equipped to survive the operation.":

> Look at how far this has come. You started this series with an idea you weren't even sure deserved to become a project. You forced yourself to name the problem before naming the product, find one real user instead of chasing "everyone," and decide what version one would deliberately leave out. Then you turned that idea into a blueprint an AI could actually build from, instead of a vague hope it had to guess at. You learned to hand an agent narrow, bounded tasks instead of the keys to the whole codebase, and to treat its plans with the same scrutiny you would give a new hire on their first day. You learned not to trust a draft just because it looked finished, and to interrogate a "done" feature until you actually understood what it did and did not do. And now, here, you have learned that shipping the app was never the finish line. It was the moment the real, ongoing job began.
>
> Every one of those lessons protects you from the same underlying mistake: letting a fast, confident, tireless tool make decisions on your behalf that you never actually reviewed. The idea stage protected you from building the wrong thing. The blueprint stage protected you from building it on a foundation nobody understood. The agent stage protected you from a tireless assistant quietly rewriting your project out from under you. The draft-review stage protected you from a demo that looked done but was not. And this stage, the one you are finishing now, protects you from the quiet, compounding cost of a system that runs whether you are watching it or not.
>
> None of these lessons expire. The next feature you add will need a job statement before it needs code. The next agent session will need boundaries before it needs a prompt. The next draft will need interrogation before it needs your trust. And every day this app stays live, it will need someone watching the meters. That someone is you.

Verified locally: with both fixes applied, Field Note Closing fills a full page (98%) and back matter still fits cleanly on a single page right after it.

## Claude Code prompt

"Apply after-launch-finale-brief.md: update the two li margin-bottom values in layout/style.css per section 1, and insert the new Field Note Closing paragraphs in after-launch-the-meter-still-runs/05-final-copy.md per section 2. Then rebuild all 5 proofs and check page counts on all of them, since the CSS change is shared."
