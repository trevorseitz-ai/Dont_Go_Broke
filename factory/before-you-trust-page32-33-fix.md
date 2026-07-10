# Before You Trust the First Draft — Combine Pages 32/33

Root cause: a manual `<div class="page-break"></div>` sits between "The Change Receipt Interrogation" and "The 'What Did You Assume?' Interrogation" — almost certainly left over from the old, larger font size, where each prompt needed its own page. At the current 11pt size, page 32 uses only 35% of the page; the second prompt fits in the remaining space with room left over. Verified locally: removing it puts both prompts on one page.

## Fix

In `products/dont-go-broke/booklets/before-you-trust-the-first-draft/05-final-copy.md`, delete this line (sits between "...Tell me what a human should manually verify before continuing." and "### The 'What Did You Assume?' Interrogation"):

```
<div class="page-break"></div>
```

## Flag for awareness (not part of this fix)

Two more manual page-break divs sit nearby — one before "The Change Receipt Interrogation" itself, and one before "The First Draft Testing Worksheet" right after "What Did You Assume?" — plus one more before "The Safe Approval Protocol." These may be the same kind of leftover, but I only tested and verified removing the one between the two Interrogation prompts, since that's what you asked for. Let me know if you want me to check the others too.

## Claude Code prompt

"Apply before-you-trust-page32-33-fix.md: delete the single page-break div between the two Interrogation prompts in before-you-trust-the-first-draft/05-final-copy.md, then rebuild all 5 proofs."
