# After Launch, the Meter Still Runs — Extension Brief

Target file: `products/dont-go-broke/booklets/after-launch-the-meter-still-runs/05-final-copy.md`
Shared CSS: `products/dont-go-broke/booklets/layout/style.css`
Build script: `scripts/build-booklet-proofs.mjs`

## Status: items 1-9 confirmed applied and working correctly (verified against the latest proof — AI Provider checklist item no longer splits across pages 5/6, the Logs block stays intact on page 8, and Section 3 now closes cleanly on page 11 with no two-word spillover). Item 10 below is new.

## 10. Back page — display all 5 series covers instead of "You have completed the series."

Target file: `scripts/build-booklet-proofs.mjs`

This is the last booklet in the series, so its back page currently just prints "You have completed the series." Replace it with a recap page listing all 5 booklet titles (using the same placeholder pattern as the real covers, since final cover art isn't ready yet).

Replace:

```js
const nextStepHtml = b.skipAutoNextStep
  ? null
  : nextBooklet
    ? `<div class="next-booklet-cover">[NEXT BOOKLET COVER — insert when available]</div>`
    : `<p style="text-align:center;font-style:italic;">You have completed the series.</p>`;
```

with:

```js
const nextStepHtml = b.skipAutoNextStep
  ? null
  : nextBooklet
    ? `<div class="next-booklet-cover">[NEXT BOOKLET COVER — insert when available]</div>`
    : `
      <div class="series-recap">
        <p class="series-recap-heading">The Complete Don&rsquo;t Go Broke in the Age of AI Series</p>
        ${BOOKLETS.map((bk, idx) => `
          <div class="series-recap-item">
            <div class="series-recap-label">Don&rsquo;t Go Broke in the Age of AI &mdash; Booklet ${idx + 1} of ${BOOKLETS.length}</div>
            <div class="series-recap-title">${bk.title}</div>
          </div>
        `).join('')}
      </div>
    `;
```

Add to `style.css`:

```css
/* Back-of-book series recap — stand-in for cover thumbnails until final
   cover art exists, styled to echo .cover-series-label / .cover-title. */
.series-recap {
  text-align: center;
  padding-top: 1em;
}
.series-recap-heading {
  font-size: 16pt;
  font-weight: bold;
  margin-bottom: 2em;
}
.series-recap-item {
  margin-bottom: 1.75em;
}
.series-recap-label {
  font-size: 9pt;
  font-weight: normal;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin-bottom: 0.4em;
}
.series-recap-title {
  font-size: 17pt;
  font-weight: bold;
}
```

Note: this reuses each booklet's own `title` already defined in the `BOOKLETS` array at the top of the script, so it stays accurate automatically if titles ever change. Since `BOOKLETS` is defined once and shared across all 5 builds, this recap page will only ever render on the last booklet (the only one with no `nextBooklet`) — the other 4 booklets are unaffected.
