# Before the Agent Starts Conformance Gap Report

## Purpose
This report compares the regenerated proof of the `before-the-agent-starts` booklet against the locked Payhip reference measurements following the global CSS layout reconciliation. It identifies structural and density gaps that must be resolved in a subsequent compression pass.

## Source Files
- `conformance-measurements.md`
- `standards/booklet-payhip-format-conformance-standard.md`
- `products/dont-go-broke/booklets/before-the-agent-starts/`
- `products/dont-go-broke/booklets/layout/style.css`
- `scripts/build-booklet-proofs.mjs`
- `scripts/audit/audit-pdf-density.py`
- `scripts/audit/audit-section-count.py`

## Measurement Method
The proof PDFs were regenerated using `build-booklet-proofs.mjs`. The resulting `before-the-agent-starts-layout-proof-v1.0.pdf` was measured programmatically to evaluate geometry, text density, and heading architecture without using a simple word-count-divided-by-total-pages average.

## Locked Reference Targets
From `conformance-measurements.md`:
- **Page Size:** US Letter (8.5x11")
- **Margins:** 1.33 inches
- **Text Width:** 5.81 inches
- **Body Average Words / Full Page:** ~320
- **Body Median Characters / Line:** ~66
- **Maximum Numbered Chapters:** 7

## Current Proof Measurements

### Page Geometry
- **Page Size:** US Letter (8.5x11")
- **Text Column Width:** 5.81 inches
- **Margins:** 1.33 inches

### Typography
- **Body Font Size:** 11.0 pt
- **Body Line Height:** 18.0 pt (1.63x)

### Body Text Measure
- **Average Characters per Body Line:** 63.3
- **Median Characters per Body Line:** 73.0

### Full Text Page Density
- **Average Body Lines per Full Text Page:** 26.6
- **Average Words per Full Text Page:** 282.6
- **Max Words on Full Text Page:** 314

### Page Count and Page Rhythm
- **Total Words:** 5,543
- **Full Text Pages (Solid Prose):** 10
- **Total H2 Count:** 22 (Extremely high, forces false page breaks)

### Folio Behavior
- Native to build script; excluded from text blocks.

### Title Page Treatment
- Lacks a formal cover/title page.

### Field Note Treatment
- **Field Notes:** 2 identified (`Field Note Opening` and `Field Note Closing`)

### Internal Art Rhythm
- **Art Placeholders:** None detected. The required 6-art rhythm is completely missing.

### Heading Structure
- **Total H2 Count:** 22
- **Major Numbered Sections:** 19 (Drastically exceeds the 7-chapter limit)
- **Checklist/Tool/Worksheet/Prompt-Pack Sections:** 6 H2s

## Pass / Fail Comparison
- **Layout Geometry:** PASS (Successfully inherited from CSS reconciliation)
- **Characters per line:** PARTIAL (73.0 median is slightly higher than 66, but acceptable)
- **Words per full page:** FAIL (282.6 is significantly below the 320 target, caused by extreme page-break fragmentation)
- **Heading Structure:** FAIL (19 numbered chapters vs max 7)
- **Field Note Treatment:** PASS (Found Opening and Closing)
- **Internal Art Rhythm:** FAIL (0 art insertions vs exactly 6 required)

## Conformance Gaps

### Layout Gaps
None. The CSS reconciliation successfully applied the US Letter Payhip geometry.

### Density Gaps
The average word count per full text page (282.6) falls far short of the 320 target. This is a direct symptom of heading fragmentation, as the build script forces a hard page break at every H2, causing many pages to end prematurely.

### Heading Structure Gaps
The booklet is severely over-fragmented. There are 22 H2s (19 numbered chapters), far exceeding the maximum of 7 conceptual chapters. Sub-tests, checklists, and procedural steps have been improperly elevated to H2 status.

### Art Rhythm Gaps
The booklet completely lacks the required 6 internal art insertions / placeholders.

### Field Note / Set-Off Text Gaps
None explicitly, though formatting will need to be verified during compression.

### Page Count Gaps
Because of the 22 hard page breaks, the physical page count is artificially inflated with white space. 

## Manuscript / Structure Implications
To conform to the standard, this booklet requires a severe structural compression pass without deleting instructional content. Likely restructuring patterns include:
- **Collapsing minor H2s into H3s:** For example, steps like "6. Decide What the Agent May Change", "7. Decide What the Agent Must Not Touch", and "8. Safe vs. Unsafe Agent Requests" should be grouped under a single conceptual chapter (e.g., "Setting Agent Boundaries").
- **Demoting Checklists/Tools to H3s or Back Matter:** "3. The Agent Readiness Audit", "15. The Agent Session Log", "18. The Agent Prompt Pack", and "19. The Before-the-Agent Checklist" must not be H2s in the main flow.
- **Establishing Art Rhythm:** 6 `[ILLUSTRATION PLACEHOLDER: ...]` blocks must be inserted into the text to establish the correct visual cadence.

## Recommended Compression Planning Scope
The next planning pass must be strictly limited to a single-booklet structural compression plan for:
`before-the-agent-starts`

## Open Questions
- How should the 19 numbered sections be grouped logically into a maximum of 7 chapters?
- Which of the 6 identified tools/checklists should remain inline (as H3s) versus being moved to a dedicated Back Matter section?
