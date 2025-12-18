import { DashboardExperience } from "@/components/DashboardExperience";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Client Campaign Dashboard | GrowthPilot Demo",
  description: "Interactive campaign dashboard for SEO, SEM, retargeting, email, ROI, leads, and funnel performance.",
  path: "/dashboard",
});

export default function DashboardPage() {
  return <DashboardExperience />;
}
