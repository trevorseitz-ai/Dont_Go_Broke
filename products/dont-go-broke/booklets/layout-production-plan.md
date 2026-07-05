# Don’t Go Broke: Layout and PDF Production Plan

This document outlines the layout, formatting, and PDF production strategy for the five non-platform booklets in the **Don’t Go Broke** series.

## 1. Recommended Layout Approach
The series should adopt a **digital-first, minimalist design**. Since these booklets act as practical field guides for builders, the layout should prioritize readability, actionable takeaways (checklists), and clear separation of concepts over heavy graphics. 
- Single-column layout.
- Ample white space to reduce cognitive load.
- Distinct visual contrast for callouts, code blocks, and prompts.

## 2. Common Front Matter Structure
Each booklet will share a standardized front matter sequence. Common front matter may be added during layout only if it does not rewrite the approved manuscript body.
1. **Title Page / Cover**: Title, subtitle, series name ("Don't Go Broke"), and version number.
2. **Copyright & Disclaimer**: Standard liability disclaimers (crucial for technical/financial advice).
3. **Table of Contents**: Hyperlinked to chapters.
4. **Series Context**: A brief "Where you are in the journey" diagram or text explaining how this booklet fits into the 5-part ladder.

## 3. Common Back Matter Structure
Common back matter may be added during layout only if it does not rewrite the approved manuscript body.
1. **Action Checklist**: A consolidated, one-page summary of the booklet's checklists.
2. **The Next Step**: A clear "bridge" explaining what the reader must do next, seamlessly leading into the next booklet in the series.
3. **About the Series / Factory**: Links to further resources or the overarching product ecosystem.

## 4. Page Size Recommendation
**A5 (148 x 210 mm) or Half-Letter (5.5 x 8.5 inches)**. 
- *Why:* These sizes are highly optimized for screen reading on tablets and laptops, requiring less eye-tracking across the screen than full US Letter. They also print nicely as physical booklets if ever required.

## 5. Typography Direction
- **Body Text:** A clean, highly legible serif (e.g., Merriweather, Georgia) or a warm sans-serif (e.g., Inter, Open Sans) sized at 11pt–12pt for comfortable reading.
- **Headings:** A bold, modern sans-serif (e.g., Montserrat, Roboto Bold) to provide stark contrast against the body text.
- **Code/Prompts:** A monospaced font (e.g., Fira Code, JetBrains Mono) for distinct separation of technical commands or AI prompts.

## 6. Heading Hierarchy
- **H1 (Booklet Title):** Only used on the title page. 
- **H2 (Main Sections):** Used for primary concepts (e.g., "1. The Agent Is Not Just Typing Suggestions"). Should start on a new page or have significant top padding.
- **H3 (Sub-sections):** Used for granular breakdowns.
- *Rule:* Hierarchy must be strictly semantic to ensure PDF bookmarks generate accurately.

## 7. Treatment of Special Elements
- **Checklists:** Format with actual checkbox graphics (☐) or heavily indented bullet points. Ensure they do not break across pages (keep them together using pagination rules).
- **Prompts & Commands:** Place inside shaded bounding boxes (light gray background) with a subtle border. Use monospaced font.
- **Reader Exercises / Field Notes:** Use distinct "callout" boxes (perhaps with a left-border accent color, like a muted yellow or blue) to separate them from standard text.

## 8. Treatment of Visual Assets
- **Asset Integration:** Assets (specifically the 7 PNGs for `before-the-build-starts`) must be placed immediately following the paragraph that references them.
- **Sizing:** Maximum width of 80% of the page to ensure margins frame the image. 
- **Captions:** Every image must have a brief, italicized caption centered beneath it.

## 9. Recommended PDF Export Structure
- **Hyperlinks:** All internal references and the Table of Contents must be fully clickable.
- **Bookmarks:** Generate PDF bookmarks (outline) automatically from H2 and H3 tags to allow easy navigation in PDF viewers.
- **Metadata:** Ensure PDF properties (Title, Author, Subject) are correctly populated to prevent "Untitled" from showing in browser tabs.

## 10. Recommended Output Folders and Filenames
Exports should be saved in each booklet's respective `dist/` directory.
- *Individual File Convention:* `<booklet-slug>-v1.0.pdf`

## 11. Individual Booklet Strategy
**Recommendation: Individual PDFs only.**
The current layout phase should produce individual PDFs only. These booklets function as modular pre-work and stage-specific support pieces for parts of the larger Don't Go Broke book. They are not designed to read as one continuous standalone package.

A future full book may reuse, revise, or expand material from these booklets, but that should happen in the book production workflow, not by stitching the booklets together.

## 12. Layout Risks in the Manuscripts
- **Orphans and Widows:** Long checklists or code blocks breaking awkwardly across page boundaries.
- **Markdown Inconsistencies:** Use of raw HTML or non-standard markdown tables that a PDF generator (like Pandoc or a Markdown-to-PDF engine) might fail to render.
- **Image Paths:** The assets in `before-the-build-starts/assets/` must be correctly referenced by the layout engine; relative paths often break during PDF compilation.

## 13. Manuscript Formatting Cleanup Needed Before Layout
**Manuscript-Preservation Rule:** Layout may format the manuscript, but it may not rewrite, shorten, expand, or editorially revise approved final copy without escalation.
- **Verify Heading Levels:** Ensure no skipping (e.g., jumping from H1 to H3).
- **Remove Meta-Text:** Strip out any lingering production notes or inline comments that shouldn't appear in the final PDF.
- **Standardize Callouts:** If callouts are currently just bold text, they need to be converted to standard blockquotes (`>`) so the layout engine can style them correctly.

## 14. Proposed File/Folder Structure
The repository structure for production should be formalized as follows:

```text
products/dont-go-broke/booklets/
  layout-production-plan.md
  before-the-idea-becomes-reality/
    05-final-copy.md
    layout/
    dist/
  before-the-build-starts/
    05-final-copy.md
    assets/
    layout/
    dist/
  before-the-agent-starts/
    05-final-copy.md
    layout/
    dist/
  before-you-trust-the-first-draft/
    05-final-copy.md
    layout/
    dist/
  after-launch-the-meter-still-runs/
    05-final-copy.md
    layout/
    dist/
```

## 15. Approval Gate Before PDF Generation
**Layout Proof Review:**
Before generating the final `dist/` PDFs, a "Layout Proof" (watermarked or draft PDF) must be generated for visual inspection. 
- *Checklist for Approval:*
  - [ ] Do checklists stay on a single page?
  - [ ] Are all 7 assets in `before-the-build-starts` rendering at high resolution?
  - [ ] Are the PDF bookmarks functioning?
  - [ ] Is the front and back matter present in all files?

*Only after passing this visual approval gate will the final, storefront-ready PDFs be compiled.*
