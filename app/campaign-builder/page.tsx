import { CampaignBuilder } from "@/components/CampaignBuilder";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Campaign Builder | GrowthPilot Demo",
  description: "Generate SEO/SEM landing page strategy, PPC ad angles, tracking events, and AI workflow automation ideas.",
  path: "/campaign-builder",
});

export default function CampaignBuilderPage() {
  return <CampaignBuilder />;
}
