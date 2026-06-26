# ArnieWaves Design System

This repo IS the ArnieWaves design system. The goal is to build it as a React component library and sync it to Claude Design via `/design-sync ArnieWaves`.

## Brand

**ArnieWaves** is an audio tools company: small tools, fair prices, great sound. The aesthetic is DIY and hand-crafted — marker pen headings, monospace body text, warm earthy tones. Think someone who actually wires up synths, not a startup.

First product: **AudioTeleporter** (send audio anywhere, low latency, high fidelity).

## Colors

| Name | Hex | Usage |
|------|-----|-------|
| Sunrise | `#E8732A` | Primary action, CTAs, highlights |
| Clay | `#C4875A` | Secondary actions, muted elements |
| Sand | `#F5E0BE` | Surface backgrounds, card thumbnails |
| Mahogany | `#6B3520` | Dark accent, text on light |
| Cream | `#FAF6EF` | Page background |

Dark mode variants:
- Sunrise → `#F09050`
- Sand → `#2D2015` (surface), `#5C3520` (text on sand)
- Mahogany → `#E8D0B8`
- Cream → `#1A1208`
- Muted text → `#B09080`

Badge tint (orange, light/dark mode aware):
- Light: bg `#FDF0E8`, text `#7A3208`
- Dark: bg `#3D2010`, text `#F5C098`

## Typography

| Role | Font | Weight | Size guidance |
|------|------|--------|---------------|
| Headings, brand, product names | Permanent Marker | 400 (only weight) | 16px minimum — gets muddy below that |
| Body, UI, specs, pricing | Space Mono | 400 body / 700 labels | — |
| Button labels | Space Mono | **700** | 12px |
| Badges / tags | Space Mono | **700** | 10–11px |
| Body copy | Space Mono | 400 | 12–13px, line-height 1.65–1.75 |
| Metadata / captions | Space Mono | 400 | 11px |

All UI text at or below 15px uses Space Mono, never Permanent Marker.

Google Fonts URL: `https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Space+Mono:wght@400;700&display=swap`

## Spacing & shape

- Button border-radius: `4px`
- Card border-radius: `8–12px` (use `var(--border-radius-lg)`)
- Badge border-radius: `2px` (nearly square, zine-label feel)
- Card thumbnail border-radius: `4px`
- Card border: `0.5px solid` (subtle)

## Components to build

### Button
Three variants: `primary` (Sunrise fill, white text), `outline` (transparent fill, Sunrise border + text), `ghost` (Sand fill, Mahogany text). All use Space Mono 700, 12px, 4px radius, padding `10px 20px`.

### Badge / Tag
Small pill-like labels. Two variants: `orange` (Sunrise tint bg, dark orange text) and `sand` (Sand bg, Mahogany text). Space Mono 700, 10px, 2px radius, padding `4px 10px`.

### Product card
- Sand thumbnail area (96–100px tall, 4px radius) containing a SVG waveform illustration in Clay/Sunrise
- Product name in Permanent Marker (~20–22px)
- Price badge (orange variant, top-right of name row)
- Description in Space Mono 400 12px, muted color
- Metadata line (e.g. "VST3 · AU · AAX · Mac · Windows") in Space Mono 400 11px, tertiary color
- Full-width primary button at bottom

### Section label
Uppercase-equivalent style (but sentence case): Space Mono 700, 11px, `letter-spacing: 0.05em`, tertiary color. Used as eyebrow labels above sections.

## CSS token names to use

```css
--aw-primary: #E8732A;
--aw-primary-bg: #FDF0E8;       /* badge tint bg */
--aw-primary-text: #7A3208;     /* badge tint text */
--aw-secondary: #C4875A;
--aw-surface: #F5E0BE;
--aw-surface-text: #5C3520;
--aw-dark: #6B3520;
--aw-background: #FAF6EF;
--aw-text: #3D1E0E;
--aw-muted: #A07858;
--aw-font-display: 'Permanent Marker', cursive;
--aw-font-body: 'Space Mono', monospace;
```

## What to do when starting a new session here

1. Initialize the project: `git init`, add `package.json`, install React + esbuild
2. Build the component library (Button, Badge, ProductCard, SectionLabel)
3. Write stories or usage examples for each component
4. Run `/design-sync ArnieWaves` to sync to Claude Design

## Sync notes

- Use `/design-sync ArnieWaves` from the Claude Code **desktop app or CLI** (not claude.ai/code web — needs `/design-login` which requires an interactive terminal)
- No `.design-sync/config.json` exists yet — first sync will create a new Claude Design project
