# Before You Trust the First Draft — The Other 3 Flagged Page-Breaks

Tested each of the 3 remaining manual `<div class="page-break"></div>` divs individually (the one between the two Interrogation prompts was already fixed). Results are mixed — only one is safe to remove.

## Before "The Change Receipt Interrogation" — KEEP THIS ONE

Tested removing it: it causes a real bug. The heading "The Change Receipt Interrogation" ends up orphaned alone at the bottom of a page, with its actual prompt content starting fresh on the next page — worse than what's there now. This break is load-bearing, not a leftover. No change recommended.

## Before "The First Draft Testing Worksheet" — safe, but no benefit

Tested removing it: no bugs, but it doesn't save any pages either — the worksheet's own content still needs its own page regardless. Since there's no upside, I'd leave this one alone rather than introduce a change for no benefit.

## Before "The Safe Approval Protocol" — safe to remove, saves a page

Tested removing it: clean. The heading and its content stay together, nothing gets orphaned, and the booklet drops by one page (36 → 35 in my local test).

### Fix

In `products/dont-go-broke/booklets/before-you-trust-the-first-draft/05-final-copy.md`, delete this line (sits between "**Final Decision (Circle One):** Accept / Revise / Revert / Rebuild" and "### The Safe Approval Protocol"):

```
<div class="page-break"></div>
```

## Claude Code prompt

"Apply before-you-trust-remaining-breaks.md: delete only the page-break div before 'The Safe Approval Protocol' in before-you-trust-the-first-draft/05-final-copy.md. Leave the other two page-breaks (before 'The Change Receipt Interrogation' and before 'The First Draft Testing Worksheet') untouched. Then rebuild all 5 proofs."
