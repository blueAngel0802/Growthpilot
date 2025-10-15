import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://growthpilot-demo.local";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "GrowthPilot | AI-Powered SEO/SEM Agency Demo",
    template: "%s | GrowthPilot"
  },
  description:
    "A full-stack portfolio demo showing SEO/SEM landing pages, campaign analytics, AI recommendations, CMS-ready content, and tracking strategy.",
  keywords: [
    "full stack developer",
    "SEO landing page",
    "SEM landing page",
    "campaign dashboard",
    "AI workflow automation",
    "React",
    "Next.js",
    "Google Analytics",
    "Tag Manager"
  ],
  openGraph: {
    title: "GrowthPilot | AI-Powered SEO/SEM Agency Demo",
    description:
      "Full-stack agency demo project with landing page, analytics dashboard, SEO/SEM strategy, and AI workflow recommendations.",
    url: siteUrl,
    siteName: "GrowthPilot",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "GrowthPilot | AI-Powered SEO/SEM Agency Demo",
    description:
      "A portfolio demo project built to show agency web development, SEO/SEM, analytics, and AI automation capability."
  },
  robots: {
    index: true,
    follow: true
  }
};

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "GrowthPilot Demo",
    url: siteUrl,
    sameAs: [],
    description:
      "Fictional agency-style demo project showing full-stack development, SEO, SEM, campaign analytics, and AI workflow automation."
  };
}
