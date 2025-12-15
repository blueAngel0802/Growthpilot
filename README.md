# GrowthPilot — AI-Powered SEO/SEM Agency Demo

GrowthPilot is a complete, structured portfolio demo project built for an agency-style Senior Full Stack Developer role. It demonstrates front-end development, full-stack architecture, SEO/SEM awareness, landing page optimization, analytics planning, CMS readiness, and AI-forward workflow ideas.

> Important: This is a self-built demo project, not a real paid client campaign. Use it honestly as sample work created to demonstrate your capabilities.

This project was created around the job description requirements:

- Website and landing page development
- Scalable front-end component structure
- Back-end/API route example
- SEO-ready metadata, sitemap, robots, schema, and content structure
- SEM/PPC landing page strategy and campaign dashboard
- GA4/GTM tracking plan
- Client-friendly reporting UI
- AI workflow and automation recommendations
- CMS/WordPress-ready content mapping
- Deployment-ready Next.js project structure

## Tech Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Lucide React icons
- Next Metadata API
- Next API routes
- GA4/GTM-ready setup using environment variables

## Project Structure

```txt
digisolutions-growthpilot/
├── app/
│   ├── api/recommendations/route.ts
│   ├── case-study/page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── AIRecommendations.tsx
│   ├── AuditScores.tsx
│   ├── CampaignDashboard.tsx
│   ├── CaseStudySection.tsx
│   ├── CTASection.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── MetricsGrid.tsx
│   ├── Navbar.tsx
│   ├── ProcessSection.tsx
│   └── ServiceCards.tsx
├── docs/
│   ├── CMS_CONTENT_MODEL.md
│   ├── DEPLOYMENT.md
│   ├── PORTFOLIO_SUBMISSION.md
│   ├── SEO_SEM_STRATEGY.md
│   └── TRACKING_PLAN.md
├── lib/
│   ├── data.ts
│   ├── seo.ts
│   └── types.ts
├── public/
│   └── favicon.svg
├── .env.example
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## How to Run Locally

```bash
npm install
npm run dev
```

Open:

```txt
http://localhost:3000
```

## Build for Production

```bash
npm run build
npm run start
```

## API Example

The project includes a sample API route for AI-style recommendations:

```txt
/api/recommendations?goal=leads
/api/recommendations?goal=seo
/api/recommendations?goal=automation
```

## Environment Variables

Copy `.env.example` to `.env.local` and update values:

```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_SITE_URL=https://your-demo-domain.com
```

## Suggested Portfolio Summary

GrowthPilot is a self-built demo project designed to show agency-style full stack development, SEO/SEM landing page strategy, analytics tracking, client-facing reporting, CMS-ready content structure, and AI-forward optimization workflows.

## Suggested Submission Note

I built this project as a portfolio demo to show the kind of agency work I can own from strategy through execution. It includes a responsive landing page, campaign dashboard, SEO audit scoring, GA4/GTM tracking plan, CMS/WordPress-ready content model, and AI recommendation workflow.
