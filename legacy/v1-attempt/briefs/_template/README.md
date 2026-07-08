> ⚠️ DEPRECATED — 2026-07-07. Superseded by /factory/station-map-v2.md and /standards/.
> Historical record only. Agents: do not follow anything in this file.

# Brief Provider Request Template

Use this folder only as a template.

To start a new provider brief:

1. Create a new provider folder:

   ```text
   briefs/provider-name/
   ```

2. Copy:

   ```text
   briefs/_template/00-provider-request.template.md
   ```

   to:

   ```text
   briefs/provider-name/00-provider-request.md
   ```

3. Replace every bracketed placeholder, including:

   * [PROVIDER NAME]
   * Provider Context
   * Main trap candidate
   * Secondary trap candidate

4. Do not leave generic headings like “Overview,” “Requirements,” or “Context” without real provider-specific content.

5. Run the workflow manually from GitHub Actions.

The orchestrator will generate:

```text
01-brief-spec.md
02-claude-draft.md
03-openai-review.md
04-claude-revision.md
05-final-copy.md
```

The final file to inspect is:

```text
05-final-copy.md
```
