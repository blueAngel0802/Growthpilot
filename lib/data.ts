import type { BlogPost, CampaignMetric } from "./types";

export const campaignMetrics: CampaignMetric[] = [
  { channel: "SEO", spend: 1200, visits: 9800, leads: 188, revenue: 38200 },
  { channel: "Google Ads", spend: 5200, visits: 7200, leads: 264, revenue: 61600 },
  { channel: "Retargeting", spend: 2100, visits: 3400, leads: 82, revenue: 17900 },
  { channel: "Email", spend: 650, visits: 2800, leads: 61, revenue: 12600 },
];

export const serviceCards = [
  {
    title: "SEO-ready web builds",
    description: "Clean site architecture, metadata planning, schema, fast rendering, and conversion-focused content sections.",
  },
  {
    title: "SEM landing pages",
    description: "Campaign-specific pages with message match, CTA hierarchy, lead forms, tracking events, and A/B-test-ready modules.",
  },
  {
    title: "Full-stack integrations",
    description: "API routes, CRM handoff patterns, analytics events, CMS-ready content models, hosting, deployment, and troubleshooting.",
  },
  {
    title: "AI workflow automation",
    description: "AI-assisted recommendations, campaign briefs, client summaries, lead routing, and operational workflow improvements.",
  },
];

export const portfolioHighlights = [
  "Next.js App Router project with multiple pages and API routes",
  "Interactive SEO audit simulator with generated recommendations",
  "Campaign builder that creates landing page strategy, ad angles, and tracking events",
  "Client dashboard with channel filters, ROI metrics, and funnel visualization",
  "CMS-style blog content model with dynamic blog detail pages",
  "GA4/GTM event tracking plan documented for implementation",
  "Deployment-ready structure for Vercel, Netlify, or agency hosting workflow",
];

export const blogPosts: BlogPost[] = [
  {
    slug: "seo-sem-landing-page-framework",
    title: "A Practical SEO/SEM Landing Page Framework for Service Businesses",
    excerpt: "How to connect paid search intent, organic search structure, page speed, CTA placement, and conversion tracking into one landing page system.",
    category: "SEO/SEM",
    date: "2025-10-15",
    readingTime: "5 min read",
    content: [
      "High-performing landing pages are not only about visual design. They need a tight connection between search intent, page message, CTA placement, and measurable conversion events.",
      "For SEO, the page should have a clear heading hierarchy, helpful supporting sections, descriptive metadata, schema opportunities, and internal links. For SEM, the page should match the ad promise quickly and reduce friction before the first conversion action.",
      "A practical build should include hero messaging, proof blocks, benefit sections, objection handling, FAQs, fast forms, and tracking events for every meaningful action. This gives the marketing team enough data to improve campaigns after launch.",
    ],
  },
  {
    slug: "ai-workflows-for-agency-operations",
    title: "Where AI Actually Helps in Agency Delivery Workflows",
    excerpt: "AI can improve agency output when it supports repeatable workflows like campaign briefs, weekly summaries, lead routing, and QA checks.",
    category: "AI Automation",
    date: "2025-10-16",
    readingTime: "4 min read",
    content: [
      "AI is most useful in agency environments when it improves repeatable operational work instead of replacing strategy. The goal is to reduce manual reporting, speed up research, and make delivery more consistent.",
      "Useful workflows include generating first-draft campaign summaries, turning SEO audits into task lists, identifying landing page issues, and routing high-intent leads to the right team members.",
      "The best implementations keep a human in the loop. AI should suggest, summarize, and organize, while the team makes final decisions based on client context and performance data.",
    ],
  },
  {
    slug: "ga4-gtm-tracking-plan-for-lead-generation",
    title: "A Simple GA4 and GTM Tracking Plan for Lead Generation Websites",
    excerpt: "A practical event-tracking structure for calls, forms, CTA clicks, scroll depth, campaign source, and qualified lead indicators.",
    category: "Analytics",
    date: "2025-10-17",
    readingTime: "6 min read",
    content: [
      "Lead generation websites need tracking that connects user behavior to business outcomes. Page views are not enough. Teams need to understand which channels, CTAs, and pages create qualified conversations.",
      "A strong tracking plan should include CTA clicks, form starts, form submissions, phone clicks, email clicks, scroll depth, thank-you page views, campaign parameters, and lead quality fields.",
      "The implementation can be managed through Google Tag Manager and reported in GA4. Clear naming conventions are important because the data needs to be understandable to both technical and non-technical stakeholders.",
    ],
  },
];
