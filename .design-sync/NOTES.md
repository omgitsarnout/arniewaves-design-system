# design-sync notes — ArnieWaves

Repo-specific gotchas for future syncs. Read this before re-syncing.

## Shape & discovery
- **Plain-JSX package, no `.d.ts` and no TypeScript.** Component discovery from
  shipped `.d.ts` yields zero, and the synth-entry fallback only fires when there's
  no dist entry — but `package.json` `module` points at a real `dist/index.js`, so
  discovery comes entirely from `cfg.componentSrcMap` (41 explicit entries). Adding
  a new component means adding a `componentSrcMap` entry.
- Build the lib first: `npm run build:lib` → `dist/index.js` (ESM, React external) +
  `dist/arniewaves.css` (tokens + components concatenated). `cfg.cssEntry` points at it.
- Pass `--entry ./dist/index.js` to the converter.

## Grouping
- Groups come from `@category` JSDoc tags added to each component's leading JSDoc
  (slugged → group folder). 8 groups: foundations, forms, data-display, audio,
  commerce, marketing, feedback, navigation.
- `Icon` and `Tabs` had their JSDoc detached from the declaration (module-level doc /
  intervening import+const). Both were restructured so the JSDoc sits directly above
  the `export function` — otherwise `@category` doesn't bind and they fall to `general`.

## Provider / context
- No global provider needed — components are presentational with internal state.
- **Toast**: `ToastProvider` + `useToast()` hook only; the visual `ToastItem` is NOT
  exported and toasts render via portal on `toast()` call (not statically renderable).
  `ToastProvider` is intentionally EXCLUDED from the card set (stays importable in the
  bundle). The toast pattern is documented in conventions.md.

## Fonts
- `[FONT_REMOTE]`: Space Mono + Permanent Marker load via a Google Fonts `@import` in
  tokens.css — they're served at runtime, nothing to ship. Not a `[FONT_MISSING]`.

## Previews
- Composition source: `src/demo/App.jsx` — real ArnieWaves usage of every component.
  Port from there; sanity-check props against source.
- Preview format: `.tsx` importing from `@omgitsarnout/arniewaves-design-system`
  (resolver redirects to the bundle global). Each PascalCase named export = one card
  cell, rendered as a component via React.createElement (no props passed in).
- Calibration (Button, ProductCard, PricingCard) all graded good first pass — the
  recipe works as-is.

## Known render warns
- All 41 previews authored and graded good; render check 41/41 clean (0 bad/thin/identical).
- `Testimonial` was flagged `[GRID_OVERFLOW]` (wide) → resolved with `cfg.overrides.Testimonial.cardMode: "column"`. Not a new warn on re-sync.
- Overlays use `cardMode: "single"` + viewport (Modal/Drawer/Menu/Tooltip); Table/FeatureMatrix use `cardMode: "column"`.

## Preview techniques that need watching (Re-sync risks)
- **Tooltip** preview injects a scoped `<style>` forcing `.aw-tooltip__bubble{opacity:1;transform:scale(1)}` so the bubble shows statically (no controlled-open prop exists). If the tooltip CSS class names change upstream, this override silently stops revealing the bubble — re-check the Tooltip card after any tooltip CSS change.
- **Menu** preview auto-opens via a mount `useEffect` that clicks `.aw-menu__trigger` (panel is conditionally rendered; no open prop). If the trigger class changes, the panel won't open — re-check the Menu card.
- **SegmentedControl** thumb is positioned via `useLayoutEffect` measurement; rendered fine here, but a zero-width/headless layout edge could hide the active highlight. Verified visible in this run.
- **LevelMeter** `animated` bars are rAF-driven → capture is non-deterministic frame-to-frame (never blank). A re-grade may show different bar heights; that's expected, not a regression.
- **dtsPropsFor** is hand-written (no `.d.ts` in the repo). If a component's source props change, its `cfg.dtsPropsFor` entry must be updated by hand — the build won't catch the drift.
- **@category** JSDoc tags in `src/components/*.jsx` drive grouping. A new component needs both a `componentSrcMap` entry AND an `@category` tag (directly above its declaration — see Icon/Tabs note above).
- Fonts load via a remote Google Fonts `@import`; if offline or the URL changes, previews fall back to system fonts.
