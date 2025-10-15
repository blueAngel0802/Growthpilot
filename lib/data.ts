import {
  BarChart3,
  Bot,
  Code2,
  Gauge,
  Globe2,
  Megaphone,
  Search,
  Target,
  Workflow,
  Zap
} from "lucide-react";
import type { AuditItem, CampaignChannel, RecommendationMap, Service } from "@/lib/types";

export const services: Service[] = [
  {
    icon: Globe2,
    title: "SEO-ready websites",
    description:
      "Responsive websites and landing pages with clean structure, metadata planning, schema readiness, and Core Web Vitals in mind."
  },
  {
    icon: Megaphone,
    title: "SEM/PPC landing pages",
    description:
      "Campaign-specific pages built around message match, fast load time, CTA clarity, and conversion tracking."
  },
  {
    icon: Bot,
    title: "AI workflow automation",
    description:
      "AI-assisted content briefs, lead routing, client reporting summaries, and campaign improvement recommendations."
  },
  {
    icon: Code2,
    title: "Full-stack integrations",
    description:
      "API-ready architecture for CMS content, forms, analytics events, CRM handoff, hosting, deployment, and troubleshooting."
  }
];

export const metrics = [
  {
    icon: Zap,
    label: "Performance score",
    value: "94/100",
    detail: "Optimized layout, image strategy, script loading, and mobile-first responsiveness."
  },
  {
    icon: Search,
    label: "SEO readiness",
    value: "91/100",
    detail: "Keyword-focused content structure, metadata plan, FAQ schema, and page hierarchy."
  },
  {
    icon: Target,
    label: "Conversion target",
    value: "+32%",
    detail: "CTA placement, trust sections, clear offer framing, and low-friction lead capture."
  },
  {
    icon: BarChart3,
    label: "Tracking coverage",
    value: "18 events",
    detail: "CTA clicks, form starts, form submits, calls, scroll depth, source, and funnel steps."
  }
];

export const campaignData: CampaignChannel[] = [
  {
    channel: "Google Search Ads",
    spend: "$4,800",
    conversions: 186,
    cpa: "$25.80",
    status: "Scaling"
  },
  {
    channel: "SEO Landing Pages",
    spend: "$1,200",
    conversions: 92,
    cpa: "$13.04",
    status: "Optimizing"
  },
  {
    channel: "Retargeting",
    spend: "$2,150",
    conversions: 74,
    cpa: "$29.05",
    status: "Testing"
  }
];

export const auditItems: AuditItem[] = [
  {
    label: "Core Web Vitals",
    value: 94,
    note: "Fast load time, responsive layout, and stable visual structure."
  },
  {
    label: "Technical SEO",
    value: 91,
    note: "Metadata, page hierarchy, crawl structure, sitemap, and schema planning."
  },
  {
    label: "Conversion UX",
    value: 88,
    note: "CTA clarity, form placement, proof blocks, and friction reduction."
  },
  {
    label: "Tracking Quality",
    value: 96,
    note: "GA4/GTM event map, UTM flow, ad pixels, and conversion validation."
  }
];

export const recommendations: RecommendationMap = {
  leads: [
    "Move the consultation form above the fold for mobile paid-search traffic.",
    "Add call tracking to paid campaigns and map calls to keyword, source, and landing page.",
    "Create one service-specific landing page per ad group to improve Quality Score and message match."
  ],
  seo: [
    "Add FAQ schema and internal links to service pages targeting bottom-funnel keywords.",
    "Compress hero media and defer non-critical scripts to protect Core Web Vitals.",
    "Build comparison-style blog content around high-intent agency and service keywords."
  ],
  automation: [
    "Send AI-generated weekly campaign summaries to clients before status meetings.",
    "Route high-intent leads to Slack or CRM based on form answers and ad source.",
    "Generate draft meta titles and descriptions from approved campaign briefs."
  ]
};

export const processSteps = [
  {
    icon: Gauge,
    title: "Audit",
    description: "Review page speed, tracking, SEO structure, conversion UX, CMS setup, and deployment health."
  },
  {
    icon: Workflow,
    title: "Build",
    description: "Create reusable components, campaign-ready sections, API-ready content models, and responsive layouts."
  },
  {
    icon: BarChart3,
    title: "Optimize",
    description: "Analyze performance, improve landing page messaging, validate events, and generate next-step recommendations."
  }
];
