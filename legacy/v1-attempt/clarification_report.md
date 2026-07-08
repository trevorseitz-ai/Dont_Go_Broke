> ⚠️ DEPRECATED — 2026-07-07. Superseded by /factory/station-map-v2.md and /standards/.
> Historical record only. Agents: do not follow anything in this file.

# Cleanup Clarification Report

## 1. Current Approved Source-of-Truth Path
The approved Don’t Go Broke source-of-truth booklet path is: `/Users/trevorseitz/Projects/Dont_Go_Broke/products/dont-go-broke/booklets`

## 2. Folders Recommended for Archiving Later
* `/Users/trevorseitz/Projects/Publishing_Factory/ai-survival-manuals/products/booklets`
* `/Users/trevorseitz/Projects/Dont_Go_Broke/ai-survival-manuals/products/booklets`

## 3. Archive Folder Breakdown

### Folder: `/Users/trevorseitz/Projects/Publishing_Factory/ai-survival-manuals/products/booklets`

**Subpath:** `before-the-agent-starts`
* **Files Copied to Target Location:**
  * concept-review.md (mapped to 00-source-review.md)
  * draft.md (mapped to 03-draft-copy.md)
  * implementation-plan.md (mapped to implementation_plan.md)
  * outline.md (mapped to 01-outline.md)
  * publication-brief.md (mapped to publication-brief.md)
  * publication-concept.md (mapped to publication-concept.md)
  * research.md (mapped to 00-source-review.md)
  * task.md (mapped to task.md)
* **Unique/Skipped Files (Process/Legacy Files left behind):**
  * workflow-automation-notes.md
* **05-final-copy.md Status:** N/A (No final copy present)
* **Safe to Archive Later?** Safe to archive later (all production files were either successfully migrated or represent legacy process files/assets that can be stored in the archive).

**Subpath:** `before-the-build-starts`
* **Files Copied to Target Location:**
  * draft.md (mapped to 03-draft-copy.md)
  * editorial-review.md (mapped to 04-editorial-review.md)
  * final.md (mapped to 05-final-copy.md)
  * outline.md (mapped to 01-outline.md)
  * publication-brief-v2.md (mapped to publication-brief.md)
  * publication-concept.md (mapped to publication-concept.md)
  * research.md (mapped to 00-source-review.md)
* **Unique/Skipped Files (Process/Legacy Files left behind):**
  * alignment-review.md
  * launch-copy.md
  * layout-plan.md
  * metadata.json
  * product-page-copy.md
  * publication-brief-v1.md
  * publication-polish-report.md
  * release-notes.md
  * storefront-release-status.md
  * visual-asset-brief.md
* **05-final-copy.md Status:** Identical to target.
* **Safe to Archive Later?** Safe to archive later (all production files were either successfully migrated or represent legacy process files/assets that can be stored in the archive).

**Subpath:** `before-the-build-starts/assets`
* Contains 7 visual asset files.
* **Unique?** Yes, these assets (e.g. PNGs) were not copied because they do not match the standard production markdown file naming pattern.

### Folder: `/Users/trevorseitz/Projects/Dont_Go_Broke/ai-survival-manuals/products/booklets`

**Subpath:** `after-launch-the-meter-still-runs`
* **Files Copied to Target Location:**
  * 00-source-review.md (mapped to 00-source-review.md)
  * 01-outline.md (mapped to 01-outline.md)
  * 02-section-plan.md (mapped to 02-section-plan.md)
  * 03-draft-copy.md (mapped to 03-draft-copy.md)
  * 04-editorial-review.md (mapped to 04-editorial-review.md)
  * 05-final-copy.md (mapped to 05-final-copy.md)
  * implementation_plan.md (mapped to implementation_plan.md)
  * publication-brief.md (mapped to publication-brief.md)
  * publication-concept.md (mapped to publication-concept.md)
  * task.md (mapped to task.md)
* **Unique/Skipped Files (Process/Legacy Files left behind):**
  * None
* **05-final-copy.md Status:** Identical to target.
* **Safe to Archive Later?** Safe to archive later (all production files were either successfully migrated or represent legacy process files/assets that can be stored in the archive).

**Subpath:** `before-the-idea-becomes-reality`
* **Files Copied to Target Location:**
  * 05-final-copy.md (mapped to 05-final-copy.md)
* **Unique/Skipped Files (Process/Legacy Files left behind):**
  * None
* **05-final-copy.md Status:** DIFFERENT from target.
* **Safe to Archive Later?** Caution: final copy differs from target. Review conflict before archive.

**Subpath:** `before-you-trust-the-first-draft`
* **Files Copied to Target Location:**
  * 00-source-review.md (mapped to 00-source-review.md)
  * 01-outline.md (mapped to 01-outline.md)
  * 02-section-plan.md (mapped to 02-section-plan.md)
  * 03-draft-copy.md (mapped to 03-draft-copy.md)
  * 04-editorial-review.md (mapped to 04-editorial-review.md)
  * 05-final-copy.md (mapped to 05-final-copy.md)
  * implementation_plan.md (mapped to implementation_plan.md)
  * publication-brief.md (mapped to publication-brief.md)
  * publication-concept.md (mapped to publication-concept.md)
  * task.md (mapped to task.md)
* **Unique/Skipped Files (Process/Legacy Files left behind):**
  * 06-human-manuscript-review.md
* **05-final-copy.md Status:** Identical to target.
* **Safe to Archive Later?** Safe to archive later (all production files were either successfully migrated or represent legacy process files/assets that can be stored in the archive).

## 4. Structure Change Clarification
We are **not** creating a new, arbitrary folder structure. We are simply **consolidating** scattered production files from incorrect, legacy paths (e.g. nested inside `ai-survival-manuals/products/booklets/` in both repos) into the **officially approved Don't Go Broke target path** (`products/dont-go-broke/booklets/`).

## 5. Deletion Confirmation
I confirm that **no files should be deleted yet.** This is strictly an audit and clarification step. No files will be moved, archived, renamed, or deleted during this operation.