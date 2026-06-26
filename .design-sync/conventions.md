# ArnieWaves — building with this design system

ArnieWaves is a hand-crafted audio-tools brand: **Permanent Marker** headings, **Space Mono** for everything else, warm earthy tones (Sunrise orange, Sand, Mahogany on Cream). Build with the real components below; for your own layout glue, reach for the design tokens — never invent off-brand colors, fonts, or radii.

## Setup & wrapping

- **No provider is required** for the vast majority of components — they're presentational with their own internal state. Just render them.
- **Fonts load automatically**: `styles.css` (which `@import`s the component CSS) pulls Permanent Marker + Space Mono from Google Fonts. Make sure `styles.css` is loaded; nothing else is needed for type.
- **Dark mode** is driven by a `data-theme="dark"` attribute on a root element (e.g. `<html data-theme="dark">`). All tokens flip automatically — don't restyle for dark mode, just set the attribute.
- **Toasts** are the one context case: wrap the app once in `<ToastProvider>`, then call `const toast = useToast();` inside any child — `toast({ variant: "success", title: "Saved", message: "…" })`. (`ToastProvider`/`useToast`/`useToastControls` ship in the bundle; there is no standalone `Toast` component.)

## Styling idiom — style via PROPS + tokens, not classes

Components are **fully pre-styled** via internal `aw-*` classes. Do **not** add or override those classes. Change a component's appearance through its **props** — `variant`, `size`, `tone`, `featured`, `placement`, etc. (see each component's `.d.ts`). Examples: `<Button variant="outline" size="lg">`, `<Badge variant="sand">`, `<Alert variant="warning">`, `<PricingCard featured>`.

For **your own layout/glue** around components (wrappers, grids, spacers), style with the design tokens so it stays on-brand. Use `var(--token)` — never raw hexes:

| Token | Use |
|---|---|
| `--aw-primary` (#E8732A), `--aw-primary-hover`, `--aw-on-primary` | Sunrise — primary actions/highlights |
| `--aw-secondary` (Clay), `--aw-surface` (Sand), `--aw-surface-text` | secondary / surface fills |
| `--aw-background` (Cream), `--aw-text`, `--aw-muted`, `--aw-tertiary` | page bg + text hierarchy |
| `--aw-dark` (Mahogany), `--aw-border`, `--aw-border-strong`, `--aw-ring` | dark accents, hairlines, focus ring |
| `--aw-danger`, `--aw-primary-bg`, `--aw-primary-text` | status + badge tints |
| `--aw-font-display` (Permanent Marker), `--aw-font-body` (Space Mono) | headings vs body/UI |
| `--aw-radius` (4px), `--aw-radius-sm`, `--aw-space-1`…`--aw-space-6` | corners, spacing scale |
| `--aw-shadow`, `--aw-shadow-pop` | resting / popover elevation |

Type rule: **Permanent Marker only for headings/brand/product names at ≥16px**; everything ≤15px (body, UI, labels, badges) is Space Mono.

## Where the truth lives

- `styles.css` → `@import "./_ds_bundle.css"` — the full token + component stylesheet. Read it before styling glue.
- `components/<group>/<Name>/<Name>.prompt.md` — per-component usage; `<Name>.d.ts` — the prop contract. Read these before composing a component.

## Build snippet

```jsx
// A product section: real components + token-styled layout glue.
function CatalogRow() {
  return (
    <section style={{ background: "var(--aw-background)", padding: "var(--aw-space-6)" }}>
      <SectionLabel>New this week</SectionLabel>
      <h2 style={{ fontFamily: "var(--aw-font-display)", color: "var(--aw-text)" }}>
        Fresh from the rack
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "var(--aw-space-4)" }}>
        <ProductCard name="AudioTeleporter" price="$39" seed={3}
          description="Send audio anywhere. Low latency, high fidelity."
          formats={["VST3", "AU", "AAX", "Mac", "Windows"]} cta="Add to cart" />
        <ProductCard name="TapeWarmer" price="$24" seed={11}
          description="Saturation and wow/flutter from a deck Arnie owns."
          formats={["VST3", "AU", "Mac", "Windows"]} cta="Add to cart" />
      </div>
    </section>
  );
}
```
