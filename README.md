# GrowthPilot Pro — Agency Full Stack SEO/SEM + AI Automation Demo

GrowthPilot Pro is a self-built portfolio project designed to demonstrate agency-style full stack development for a Senior Full Stack Developer role.

It is intentionally structured as more than a static dashboard. It includes multiple pages, reusable components, API routes, SEO metadata, sitemap/robots support, CMS-style blog content, analytics tracking hooks, lead scoring logic, and interactive campaign planning tools.

## What this project demonstrates

- Responsive React / Next.js application structure
- TypeScript component architecture
- Front-end landing page development
- API route implementation for demo backend workflows
- SEO-friendly metadata, sitemap, robots, and blog structure
- SEM/PPC landing page strategy and tracking model
- GA4/GTM-ready event naming and dataLayer tracking helper
- CMS-ready blog/content model
- Lead form submission and scoring simulation
- AI-forward campaign planning simulation
- Client-facing reporting and dashboard UX

## Pages

- `/` — conversion-focused landing page with lead form
- `/dashboard` — interactive client campaign dashboard
- `/audit` — SEO audit simulator powered by API route
- `/campaign-builder` — campaign/landing page plan generator
- `/case-study` — portfolio case study explanation
- `/blog` — CMS-style SEO blog index
- `/blog/[slug]` — dynamic blog detail pages

## API routes

- `POST /api/audit` — returns simulated SEO/performance/conversion audit
- `POST /api/campaign-plan` — generates landing page strategy, ad angles, tracking events, and automation ideas
- `GET /api/recommendations?goal=leads` — returns campaign recommendations
- `POST /api/leads` — scores and prioritizes submitted demo leads

## Run locally

```bash
npm install
npm run dev
```

Open:

```txt
http://localhost:3000
```

## Build

```bash
npm run build
npm run start
```

## Portfolio positioning

Use this honestly as a self-built demo project:

> I built GrowthPilot Pro as a portfolio demo to show agency-style full stack development, SEO/SEM landing page strategy, campaign analytics, CMS-ready content architecture, lead capture workflows, and AI-forward automation concepts.

Do not present it as a real client campaign. Present it as a complete sample project built to demonstrate the type of work required by an agency.
