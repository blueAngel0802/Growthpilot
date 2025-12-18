import { SEOAuditTool } from "@/components/SEOAuditTool";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "SEO Audit Tool | GrowthPilot Demo",
  description: "Interactive SEO audit simulator with technical SEO, performance, tracking, and conversion UX recommendations.",
  path: "/audit",
});

export default function AuditPage() {
  return <SEOAuditTool />;
}
