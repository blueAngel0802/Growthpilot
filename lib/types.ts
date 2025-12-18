export type CampaignChannel = "SEO" | "Google Ads" | "Retargeting" | "Email";

export type CampaignMetric = {
  channel: CampaignChannel;
  spend: number;
  visits: number;
  leads: number;
  revenue: number;
};

export type AuditResult = {
  url: string;
  overallScore: number;
  technicalSeo: number;
  performance: number;
  conversionUx: number;
  tracking: number;
  issues: string[];
  recommendations: string[];
  generatedAt: string;
};

export type CampaignPlan = {
  industry: string;
  goal: string;
  monthlyBudget: number;
  landingPageHeadline: string;
  adAngles: string[];
  landingPageSections: string[];
  trackingEvents: string[];
  automationIdeas: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: string;
  content: string[];
};
