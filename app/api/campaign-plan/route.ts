import { NextRequest, NextResponse } from "next/server";
import type { CampaignPlan } from "@/lib/types";

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null) as {
    industry?: string;
    goal?: string;
    monthlyBudget?: string;
    location?: string;
  } | null;

  if (!body?.industry || !body?.goal) {
    return NextResponse.json({ error: "Industry and goal are required" }, { status: 400 });
  }

  const monthlyBudget = Number(body.monthlyBudget ?? 5000);
  const location = body.location || "target market";

  const plan: CampaignPlan = {
    industry: body.industry,
    goal: body.goal,
    monthlyBudget,
    landingPageHeadline: `Turn ${body.industry} traffic into more ${body.goal} in ${location}`,
    adAngles: [
      `High-intent search campaign focused on users ready to ${body.goal}.`,
      `Problem/solution ads that speak directly to common ${body.industry} pain points.`,
      `Retargeting ads for visitors who viewed pricing, service, or contact sections.`,
      `Local trust angle using reviews, response speed, and proof of completed work.`,
    ],
    landingPageSections: [
      "Hero with specific outcome, trust proof, and primary CTA above the fold.",
      "Service benefits mapped to client pain points and buying intent.",
      "Proof section with testimonials, result metrics, project examples, or certifications.",
      "Short lead form with only required qualification fields.",
      "FAQ section designed for both objections and SEO long-tail searches.",
    ],
    trackingEvents: [
      "cta_click_primary",
      "lead_form_start",
      "lead_form_submit",
      "phone_click",
      "pricing_section_view",
      "qualified_lead_created",
    ],
    automationIdeas: [
      "Send high-score leads to Slack or CRM with campaign source and recommended next action.",
      "Generate weekly client summaries from spend, leads, CPL, and top-performing pages.",
      "Use AI to draft new ad variants from winning search terms and landing page copy.",
      "Create automated QA checklist for metadata, tracking events, speed, and form delivery.",
    ],
  };

  return NextResponse.json(plan);
}
