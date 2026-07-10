# Before the Build Starts — Fix the "memory is unreliable" split

Target file: `products/dont-go-broke/booklets/before-the-build-starts/05-final-copy.md`

I was wrong earlier that removing the stray title page would fix this on its own — verified against the new proof, it's still splitting (page 22/23 in the current build). Root cause, now confirmed: the shared CSS rule `p:has(+ blockquote) { page-break-after: avoid }` (added earlier in this project to keep short labels like "Ask:" glued to the box that follows) is being applied here to a long, multi-sentence paragraph immediately before the "Build Receipt" box. Browsers resolve "no break after this paragraph" + "the following box can't be split" by deferring the *entire* paragraph to the next page rather than just avoiding the boundary — which is fine for a one-line label, but wastes most of a page when the paragraph is long, exactly like this one (page 22 sits 57% empty as a result).

Rather than touching the shared CSS rule (which protects real label+box cases elsewhere in all 5 booklets), the fix is local: insert a short transition sentence between the long paragraph and the blockquote, so the keep-together rule attaches to the short sentence instead of the long paragraph. Verified locally — the full paragraph now renders intact on one page.

## Fix

Change:

```markdown
The handoff is also your baseline for review. When the AI returns its first output, you compare the output against the handoff. Does the output match the blueprint? Does it follow the user journey? Does it respect the boundaries? Does it solve the job? If you do not have a handoff document, you are reviewing the AI's output against your memory, and memory is unreliable, especially when a polished AI-generated interface is persuading you that what you see is what you wanted.

> **Build Receipt**
```

to:

```markdown
The handoff is also your baseline for review. When the AI returns its first output, you compare the output against the handoff. Does the output match the blueprint? Does it follow the user journey? Does it respect the boundaries? Does it solve the job? If you do not have a handoff document, you are reviewing the AI's output against your memory, and memory is unreliable, especially when a polished AI-generated interface is persuading you that what you see is what you wanted.

This is why keeping a Build Receipt is worth the extra few minutes.

> **Build Receipt**
```

## Claude Code prompt

"Apply before-the-build-starts-memory-sentence-fix.md to before-the-build-starts/05-final-copy.md, then rebuild all 5 proofs."
