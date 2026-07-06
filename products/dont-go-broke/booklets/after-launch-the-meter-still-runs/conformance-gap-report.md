# After Launch, the Meter Still Runs Conformance Gap Report

## Purpose
This report compares the `after-launch-the-meter-still-runs` regenerated proof against the locked Payhip reference measurements after CSS reconciliation. It identifies the structural and density gaps that remain to be solved in a subsequent structural compression pass.

## Source Files
The following files were read:
- `conformance-measurements.md`
- `standards/booklet-payhip-format-conformance-standard.md`
- `products/dont-go-broke/booklets/after-launch-the-meter-still-runs/`
- `products/dont-go-broke/booklets/layout/style.css`
- `scripts/build-booklet-proofs.mjs`
- `scripts/audit/audit-pdf-measure.py`
- `scripts/audit/audit-pdf-density.py`
- `scripts/audit/audit-section-count.py`

## Measurement Method
The proof PDFs were regenerated using `scripts/build-booklet-proofs.mjs`. The resulting `after-launch-the-meter-still-runs-layout-proof-v1.0.pdf` was programmatically measured using the python audit tools in `scripts/audit/` to extract true page geometry, text density, font sizes, and heading counts based on rendered PDF lines, bypassing simplistic word-count-divided-by-page calculations.

## Locked Reference Targets
From `conformance-measurements.md`:
- **Page Size:** US Letter (8.5x11")
- **Margins:** 1.33 inches left, 1.35 inches right
- **Text Width:** 5.81 inches
- **Body Average Words / Full Page:** ~320 (max ~380-400)
- **Body Median Characters / Line:** ~66
- **Maximum Numbered Chapters:** 7

## Current Proof Measurements

### Page Geometry
- **Page Size:** US Letter (8.5x11")
- **Text Column Width:** 418.3 pts
- **Margins:** 95.9 pts (1.33 inches) left, 97.8 pts (1.35 inches) right

### Typography
- **Body Font Size:** 11.0 pt
- **Body Line Height:** 18.0 pt (1.63x)
- **Heading Font Size:** 16.5 pt

### Body Text Measure
- **Average Characters per Body Line:** 61.19
- **Median Characters per Body Line:** 72.0

### Full Text Page Density
- **Average Body Lines per Full Text Page:** 25.18
- **Average Words per Full Text Page:** 269.09
- **Max Words on Full Text Page:** 397

### Page Count and Page Rhythm
- **Total Words:** 5,658
- **Full Text Pages (Solid Prose):** 11
- **Total H2 Count:** 22 (Extreme fragmentation)

### Folio Behavior
- Folios appear per the locked reference format natively via the build script.

### Title Page Treatment
- Formatted correctly per the build script defaults.

### Field Note Treatment
- **Field Notes Detected:** 2 (`Field Note Opening: The Finish Line Is the Starting Line` and `Field Note Closing: The Goal Was Control`)

### Internal Art Rhythm
- **Art Placeholders:** None detected. The required 6-art rhythm is missing.

### Heading Structure
- **Total H2 Count:** 22
- **Major Numbered Sections:** 20 (Severely violates the 7-chapter limit)
- **Checklist/Tool/Worksheet/Prompt-Pack Sections:** 7
- **Back Matter Blocks:** 0

## Pass / Fail Comparison
- **Layout Geometry:** PASS
- **Characters per line:** PARTIAL (Median is 72, which is slightly above the ideal 66 but within safe limits)
- **Words per full page:** FAIL (Average 269.09 is drastically below the 320 target due to page-break fragmentation, though max is 397)
- **Heading Structure:** FAIL (20 numbered chapters vs max 7)
- **Field Note Treatment:** PASS
- **Internal Art Rhythm:** FAIL (0 placeholders vs exactly 6 required)

## Conformance Gaps

### Layout Gaps
None. The CSS successfully reconciled the physical geometry, margins, line height, and font sizing.

### Density Gaps
The average word count per full text page (269.09) falls short of the ~320 target. While some dense pages hit 397 words, the overwhelming number of H2s (22) causes frequent premature page breaks, artificially driving down the average density across the booklet.

### Heading Structure Gaps
The booklet is extremely fragmented. With 20 numbered chapters, it exceeds the Payhip structure limit by almost a factor of three. Seven specific tools (e.g., "Ask the App What It Costs Prompt Pack", "The Safe Operation Checklist", "The After-Launch Receipt") are inappropriately elevated to H2 status instead of being nested as H3s or consolidated into Back Matter.

### Art Rhythm Gaps
The booklet completely lacks the required 6 internal art insertions or placeholders.

### Field Note / Set-Off Text Gaps
While Field Notes are correctly designated, the 7 tools and checklists are mixed directly into the H2 flow.

### Page Count Gaps
Because of the 22 hard page breaks triggered by the H2s, the physical page count is artificially inflated with white space.

## Manuscript / Structure Implications
To conform to the standard, this booklet requires a strict structural compression pass without deleting instructional content. Likely restructuring patterns include:
- **Massive H2 Consolidation:** Grouping related sub-topics (e.g., "Provider-by-Provider Cost Review", "Background Jobs and Silent Loops") under a single parent chapter (e.g., "Monitoring Your Infrastructure").
- **Demoting Tools to H3s:** Checklists and monitoring protocols must become H3s nested under their parent concepts.
- **Back Matter Extraction:** Moving tools like the Prompt Pack, Safe Operation Checklist, and After-Launch Receipt out of the numbered flow and into a dedicated Back Matter section at the end.
- **Establishing Art Rhythm:** 6 `[ILLUSTRATION PLACEHOLDER: ...]` blocks must be injected at natural chapter boundaries.

## Recommended Compression Planning Scope
The next planning pass must be strictly limited to a single-booklet structural compression plan for:
`after-launch-the-meter-still-runs`

## Open Questions
- Because this booklet contains 20 distinct fragments, which 7 parent topics provide the best conceptual umbrellas?
- Which of the 7 identified tools/checklists should remain inline (as H3s) versus being moved entirely to the Back Matter?
