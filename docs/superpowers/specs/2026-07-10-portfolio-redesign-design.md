# Portfolio Redesign — Design Spec

**Date:** 2026-07-10
**Owner:** Sithum Lahiru
**Site:** https://www.sithumlahiru.com

## Goal

Replace the placeholder scaffold with a finished, distinctive portfolio in a warm-paper,
monochrome, oversized-grotesque editorial style (reference: Maciej Bączkowski). The design
must hold up with **zero work imagery** today and allow covers to be added later with no
redesign.

## Constraints & decisions

- **No imagery available yet.** Work is presented as a type-led editorial index, not an image grid.
- **Structure:** single scrolling home (hero · work · about · contact) + one case-study page per project. Keeps the current Astro content-collection setup.
- **4–6 real projects** listed in the work index (content filled in later; design supports this range).
- **Type:** system neo-grotesque stack — `"Helvetica Neue", Helvetica, Arial, sans-serif`. No web font loaded for display/body. (Removes the `@fontsource-variable/inter` dependency for display/body; mono stays a system mono stack.)
- **Monochrome — no color accent.** Interaction is expressed through weight, underline, and opacity, never hue. The `--color-accent` blue is removed.
- Light mode only (matches current `color-scheme: light`).
- Preserve existing accessibility baseline: visible `:focus-visible` rings, `prefers-reduced-motion` handling.

## Design tokens (src/styles/global.css)

All tokens live in the `@theme` block; a reskin means editing this file only.

| Token | Value | Role |
|---|---|---|
| `--color-paper` | `#f2f1ec` | Warm off-white background |
| `--color-ink` | `#1a1a18` | Near-black primary text |
| `--color-muted` | `#8a877e` | Secondary/meta text |
| `--color-line` | `#dcdad2` | Hairline dividers |
| `--font-display` | `"Helvetica Neue", Helvetica, Arial, sans-serif` | Headlines + body |
| `--font-body` | same as display | Body copy |
| `--font-mono` | `ui-monospace, "SF Mono", "JetBrains Mono", monospace` | Labels, meta |

Focus ring switches from the removed accent to `--color-ink`.

## Layout & components

Shared: centered column, generous margins, big vertical rhythm. Everything reads from tokens.

### 1. Hero
- Small name label `Sithum Lahiru` (mono, muted) top-left.
- Small filled ink dot top-right (matches the reference marker). No text.
- One oversized statement headline, tight tracking, ~3 lines on desktop. Draft copy
  (editable): *"Product designer building clear, trustworthy interfaces across SaaS, FinTech,
  AI & MedTech — turning complex systems into products people actually understand."*
- Bottom hairline divider into the work section.

### 2. Work index
- `Selected work` label (mono, uppercase, muted).
- 4–6 rows, sorted by the content `order` field. Each row is a link to `/work/<id>`:
  - Left: project **title**, large.
  - Right (shrink-0, mono, muted): `client · domain · year`.
  - Hover: ink darkens to full, baseline underline appears; transition only.
- Structured so a cover image can later be added above/beside each row without layout rework.

### 3. About
- `About` label + a short 2–3 sentence bio in muted ink, generous top margin.
- Placeholder bio written now; real bio supplied by owner later.

### 4. Contact
- `Get in touch` label + plain text links, underline-on-hover, no buttons:
  - **Email** → `mailto:sithumlahiru.ux@gmail.com`
  - **LinkedIn** → URL TBD (owner to supply)
  - **Dribbble / Behance** → URL(s) TBD (owner to supply)
- Links use `href="#"` placeholders until real URLs are supplied; a comment marks them.

### 5. Case-study pages (src/pages/work/[...id].astro)
- Same paper/type system, narrower measure than home.
- Back link to `/#work`.
- Header: `client · domain · year`, title, summary, role.
- Body renders the Markdown content. Structure ready for real narrative + images later.

### 6. Motion
- Subtle fade/rise on initial load for hero + sections (CSS only, small distance/opacity).
- Hover transitions on work rows and links.
- All motion gated by the existing `prefers-reduced-motion: reduce` block. No scroll-jacking, no JS-driven scroll effects.

## Content model

No schema change. Existing `src/content.config.ts` fields (`title, client, role, year,
domain, summary, cover?, order, draft`) are sufficient. `cover` stays optional for the
future imagery upgrade. Owner will supply 4–6 real project Markdown files; placeholders
created for any not yet provided.

## Out of scope (YAGNI)

- Dark mode.
- Image grids / cover images (schema keeps the door open; not built now).
- CMS, blog, or additional top-level pages.
- Client-side JS framework islands (none needed; React integration stays installed but unused).
- Analytics (can be added later).

## What the owner still needs to provide

- Final hero statement copy (or approve the draft).
- Real bio for About.
- 4–6 real project details (title, client, domain, year, summary).
- LinkedIn URL and Dribbble/Behance URL(s).
