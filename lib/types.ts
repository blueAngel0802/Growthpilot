import type { LucideIcon } from "lucide-react";

export type CampaignChannel = {
  channel: string;
  spend: string;
  conversions: number;
  cpa: string;
  status: "Scaling" | "Optimizing" | "Testing";
};

export type AuditItem = {
  label: string;
  value: number;
  note: string;
};

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type RecommendationGoal = "leads" | "seo" | "automation";

export type RecommendationMap = Record<RecommendationGoal, string[]>;
