# ArnieWaves Design System

A React component library for **ArnieWaves** — small audio tools, fair prices,
great sound. DIY/hand-crafted aesthetic: marker-pen headings (Permanent Marker),
monospace everything (Space Mono), warm earthy tones, light + dark aware.

## Develop locally

```bash
npm install
npm run dev       # → http://localhost:5173  (live showcase)
npm run build     # → public/  (showcase bundle + stylesheets)
npm run build:lib # → dist/    (publishable ESM + arniewaves.css)
```

## Install (GitHub Packages)

Published to GitHub Packages as `@omgitsarnout/arniewaves-design-system`. Point the
`@omgitsarnout` scope at the GitHub registry and authenticate with a token that has
`read:packages`:

```ini
# .npmrc
@omgitsarnout:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

```bash
npm install @omgitsarnout/arniewaves-design-system
```

React 18+ is a peer dependency.

## Using the components

Import the stylesheet once, then the components:

```jsx
import "@omgitsarnout/arniewaves-design-system/styles.css";
import { Button, Badge, ProductCard } from "@omgitsarnout/arniewaves-design-system";

<Button variant="primary">Add to cart</Button>
<Badge variant="orange">$39</Badge>
```

`styles.css` bundles the design tokens (incl. the Google Fonts `@import`) and every
component's styles.

Dark mode is driven by a data attribute on the root element:

```js
document.documentElement.dataset.theme = "dark"; // or remove for light
```

## Components

| Component | Notes |
|-----------|-------|
| `Button` | `variant`: `primary` \| `outline` \| `ghost`; `size`: `sm`/`md`/`lg`; `loading`, `fullWidth`, `leadingIcon`/`trailingIcon` |
| `Badge` | Pills/tags. `variant`: `orange` \| `sand` \| `outline`; `dot`, `onRemove` |
| `TextField` | `label`, `hint`, `error`, `leading`/`trailing` adornments, `size` |
| `Textarea` | Multiline counterpart to `TextField` |
| `Select` | **Searchable dropdown.** `options`, `value`, `onChange`; `multiple` (pills + checkable items), `searchable`, `clearable`. Full keyboard nav (↑/↓/Enter/Esc) |
| `Checkbox` / `Radio` / `Toggle` | Form controls with `label` + `description` |
| `SectionLabel` | Eyebrow label |
| `Card` | Generic surface |
| `ProductCard` | Composite: waveform thumbnail, marker-pen name, price badge, metadata, CTA |
| `Waveform` | Deterministic SVG waveform illustration (`seed`, `bars`) |
| `Modal` | Dialog rendered in a portal. Focus trap, Esc-to-close, scroll lock, overlay click. `open`, `onClose`, `title`, `footer`, `size` |
| `Tabs` | Compound (`Tabs.List` / `Tabs.Tab` / `Tabs.Panel`). Roving keyboard nav (←/→/Home/End). Controlled or uncontrolled |
| `Tooltip` | Wraps one child; shows on hover **and** focus. `label`, `placement`: `top`/`bottom`/`left`/`right` |
| `Icon` | Inline-SVG icon set (102 glyphs, stroke-based, `currentColor`). `name`, `size`, `strokeWidth`, `title`. Names listed in `ICON_NAMES` |
| `PricingCard` | Subscription tier for side-by-side comparison. `name`, `price`, `period`, `features` (incl./excl.), `featured`, `badge`, `cta`. Drop several in `.aw-tiers` |
| `Table` | Data table that collapses into labeled stacked cards on mobile (≤620px). `columns` (with `align`/`render`), `data`, `caption`, `stickyHeader` |
| `SegmentedControl` | Pill toggle with a sliding thumb. `options` (with optional `badge`), `value`, `onChange`, `size`. Used for the monthly/annual billing switch |
| `FeatureMatrix` | "Compare all features" grid — features × tiers. `tiers` (with `featured`/`badge`/`price`), grouped `groups`, CTA `footer`. Scrolls sideways with the feature column pinned on mobile |
| **Audio** | |
| `AudioPlayer` | Waveform scrubber + transport. `title`, `artist`, `duration`, `seed`; `onPlay`/`onPause`/`onSeek`. Click waveform to seek |
| `Knob` | Rotary parameter control. Drag or arrow-key. `value`, `onChange`, `min`/`max`/`step`, `valueLabel`, `size` |
| `Slider` | Styled range input (native, touch + a11y). `value`, `onChange`, `min`/`max`/`step`, `valueLabel`, `showValue` |
| `LevelMeter` | Segmented VU meter. `value` (0–1) or `animated`, `segments`, `channels`, `orientation` |
| **Marketing** | |
| `Hero` | Page lede. `eyebrow`, `title`, `subtitle`, `actions`, `media` (stacks on mobile), `align` |
| `Accordion` | Disclosure / FAQ. `Accordion.Item` with `value`/`title`; `allowMultiple`, `defaultValue` |
| `Avatar` / `AvatarGroup` | Image or initials; group stacks with `max` "+N" overflow |
| `Testimonial` | Quote card with `rating`, `quote`, `name`, `role`, `avatarSrc` |
| `CTABanner` | Full-width CTA band. `title`, `description`, `tone`, buttons in `children` |
| `Stat` | KPI/metric. `value`, `label`, `icon`, `delta`, `trend` |
| **Feedback** | |
| `ToastProvider` / `useToast` | Transient notifications. Wrap app in `ToastProvider`; `toast({ variant, title, message, action })` |
| `Alert` | Inline banner. `variant` info/success/warning/danger, `title`, `onClose` |
| `Progress` | Linear bar, `value`/`max` or `indeterminate`, `label`, `showValue` |
| `Spinner` | Standalone loading indicator. `size`, inherits `currentColor` |
| `EmptyState` | Zero-state placeholder. `icon`, `title`, `description`, `action` |
| **Commerce & nav** | |
| `Drawer` | Slide-in sheet. `side` right/left/bottom, focus trap, Esc, scroll lock; near-full-width on mobile |
| `Breadcrumbs` | Trail nav. `items: [{ label, href? }]` (last is current) |
| `Pagination` | Page numbers + prev/next with ellipsis. `page`, `total`, `onChange`, `siblings` |
| `Stepper` | Numeric/quantity stepper. `value`, `onChange`, `min`/`max`/`step`, `size` |
| `DescriptionList` | Key→value spec list; stacks on mobile. `items: [{ term, description }]` |
| `Menu` | Dropdown action menu. `trigger`, `items` (icon/shortcut/danger/separator), `align`; keyboard nav |

### Select options shape

```js
const options = [
  { value: "vst3", label: "VST3", description: "Steinberg plugin format" },
  { value: "au",   label: "Audio Unit", description: "macOS / Logic" },
  { value: "aax",  label: "AAX", disabled: true },
];

// single
<Select options={options} value={v} onChange={setV} clearable />

// multi-select
<Select options={options} value={vals} onChange={setVals} multiple />
```

### Modal / Tabs / Tooltip

```jsx
<Modal open={open} onClose={() => setOpen(false)} title="Activate"
  footer={<Button onClick={() => setOpen(false)}>Done</Button>}>
  …body…
</Modal>

<Tabs defaultValue="specs">
  <Tabs.List>
    <Tabs.Tab value="specs">Specs</Tabs.Tab>
    <Tabs.Tab value="pricing">Pricing</Tabs.Tab>
  </Tabs.List>
  <Tabs.Panel value="specs">…</Tabs.Panel>
  <Tabs.Panel value="pricing">…</Tabs.Panel>
</Tabs>

<Tooltip label="Sends to any peer" placement="top">
  <Button variant="outline">Hover me</Button>
</Tooltip>
```

### Icons

102 inline-SVG icons drawn on a 24×24 grid, stroke-based, inheriting `currentColor`.
Audio glyphs (`waveform`, `knob`, `sliders`, `headphones`, `mic`, `power`, `bolt`,
`play`, `pause`, `stop`, `record`, `skip-forward`/`-back`, `repeat`, `shuffle`, `music`,
`radio`, `volume`, `mute`) plus a broad UI set — navigation (chevrons, arrows, `menu`,
`grid`, `list`, `home`, `maximize`, `refresh`, `settings`), people & comms (`user`,
`users`, `mail`, `message`, `bell`, `send`, `share`, `phone`), files (`file`, `folder`,
`image`, `save`, `link`, `clipboard`, `bookmark`, `tag`), status (`check-circle`,
`x-circle`, `help`, `info`, `alert`, `eye`/`eye-off`), security (`lock`, `unlock`,
`shield`, `key`), time/place (`calendar`, `clock`, `map-pin`, `globe`), commerce
(`shopping-cart`, `credit-card`, `dollar-sign`, `gift`), and more (`wifi`, `cloud`,
`battery`, `camera`, `code`, `terminal`, `hash`, `at-sign`, `sun`, `moon`, `smile`, …).
Iterate the full list via `ICON_NAMES`.

```jsx
import { Icon, ICON_NAMES } from "arniewaves-design-system";

<Icon name="search" />
<Icon name="play" size={14} />               // in a button
<Button leadingIcon={<Icon name="download" size={15} />}>Download</Button>
<Icon name="alert" title="Heads up" />        // accessible (role=img + <title>)
```

### Tier comparison (`PricingCard`)

```jsx
<div className="aw-tiers">
  <PricingCard name="Free" price="$0" cta="Get started"
    features={["2 streams", "128 kbps", { label: "Lossless", included: false }]} />
  <PricingCard name="Pro" price="$20" featured badge="Most popular" cta="Go Pro"
    features={["Unlimited streams", { label: "Lossless / 24-bit", note: "up to 192 kHz" }]} />
</div>
```

Features accept plain strings or `{ label, included, note }`. `included: false`
renders a muted, struck-through row. `featured` adds the primary border, lift,
and ribbon badge. Wrap cards in `.aw-tiers` for an auto-fit responsive grid that
stacks on narrow screens.

### Responsive `Table`

```jsx
<Table
  caption="Plugin catalog"
  columns={[
    { key: "name", header: "Plugin" },
    { key: "price", header: "Price", align: "right" },
    { key: "status", header: "Status",
      render: (row) => <Badge variant="orange" dot>{row.status}</Badge> },
  ]}
  data={[{ id: 1, name: "AudioTeleporter", price: "$39", status: "Shipping" }]}
/>
```

Stays a real `<table>` on desktop; at ≤620px each row reflows into a labeled card
(column headers become inline labels via `data-label` — no horizontal scroll, no JS
measurement). Columns support `align` and a `render(row, i)` for custom cells.

### Billing toggle + feature matrix

A `SegmentedControl` makes a tidy monthly/annual switch; drive the tier prices from
its value and feed the same data into `PricingCard`s and a `FeatureMatrix`:

```jsx
const [billing, setBilling] = useState("monthly");
const price = billing === "annual" ? { basic: "$6", pro: "$16" } : { basic: "$8", pro: "$20" };

<SegmentedControl
  value={billing}
  onChange={setBilling}
  options={[
    { value: "monthly", label: "Monthly" },
    { value: "annual", label: "Annual", badge: "Save 20%" },
  ]}
/>

<FeatureMatrix
  tiers={[
    { key: "free", name: "Free", price: "$0" },
    { key: "basic", name: "Basic", price: price.basic },
    { key: "pro", name: "Pro", price: price.pro, featured: true, badge: "Popular", cta: "Go Pro" },
  ]}
  groups={[
    { label: "Streaming", features: [
      { label: "Simultaneous streams", values: { free: "2", basic: "10", pro: "Unlimited" } },
      { label: "Internet relay", values: { free: false, basic: true, pro: true } },
    ]},
  ]}
  onChoose={(tierKey) => /* … */}
/>
```

Matrix cell values: `true` → check, `false`/missing → dash, any string → rendered
verbatim. The featured column is tinted; `groups[].label` adds section dividers.

## Project layout

```
src/
  components/      Button, Badge, TextField, Textarea, Select, Choice (Checkbox/
                  Radio/Toggle), Card, ProductCard, SectionLabel, Waveform
  styles/         tokens.css (brand tokens, light+dark) · components.css
  demo/           App.jsx showcase + demo.css (showcase chrome only)
  index.js        public API barrel
scripts/build.mjs esbuild build / dev-serve
```

## Design tokens

All brand values live in [`src/styles/tokens.css`](src/styles/tokens.css) as
CSS custom properties (`--aw-*`). Components reference tokens only — restyle the
whole system by editing that one file. See [`CLAUDE.md`](CLAUDE.md) for the full
brand spec (colors, type scale, spacing).

## Publishing

A [`Publish package`](.github/workflows/publish.yml) GitHub Actions workflow pushes
the package to GitHub Packages. It runs:

- **Manually** — Actions tab → *Publish package* → *Run workflow*, with an optional
  `bump` (`patch`/`minor`/`major`) that version-bumps, commits, and tags before publishing.
- **On release** — automatically when a GitHub Release is published.

It authenticates with the built-in `GITHUB_TOKEN` (no secrets to configure) and runs
`npm run build:lib` before `npm publish`. Note: re-publishing an existing version fails,
so bump the version (via the workflow input or `npm version`) for each release.

## Sync to Claude Design

Run `/design-sync ArnieWaves` from the Claude Code **desktop app or CLI**.
