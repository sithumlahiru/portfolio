# Sithum Lahiru — Portfolio

Astro + Tailwind v4 + React islands. Static output, deploys free to Vercel / Netlify / Cloudflare Pages.

## Run locally
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to /dist
npm run preview  # preview the production build
```

## Structure
- `src/pages/index.astro` — single-page home (hero · work · about · contact)
- `src/pages/work/[...id].astro` — case study detail pages
- `src/content/work/*.md` — one Markdown file per case study (drop a new file to add work)
- `src/content.config.ts` — case study fields (title, client, role, year, domain…)
- `src/layouts/Base.astro` — <head>, SEO, Open Graph
- `src/styles/global.css` — **all design tokens live here** (palette + type in one place)

## Adding a case study
Create `src/content/work/your-project.md`:
```md
---
title: "Project title"
client: "Client name"
role: "Lead Product Designer"
year: 2025
domain: "FinTech"
summary: "One-line summary."
order: 2
---
Body content in Markdown…
```
