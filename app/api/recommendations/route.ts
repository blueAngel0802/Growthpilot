import { NextRequest, NextResponse } from "next/server";

const recommendations = {
  leads: [
    "Move the lead form closer to the hero section for mobile traffic.",
    "Add call tracking and connect phone clicks to paid search source data.",
    "Create one landing page per high-intent keyword group to improve message match.",
  ],
  seo: [
    "Add FAQ schema and internal links from blog posts to service pages.",
    "Improve title tags with service + location + outcome-based keywords.",
    "Build comparison and pricing content for bottom-funnel organic searches.",
  ],
  automation: [
    "Generate weekly AI campaign summaries before client check-ins.",
    "Route high-intent leads to CRM with lead score and recommended follow-up.",
    "Use AI to convert audit results into developer-ready tasks.",
  ],
};

export async function GET(request: NextRequest) {
  const goal = request.nextUrl.searchParams.get("goal") as keyof typeof recommendations | null;
  return NextResponse.json({
    goal: goal && recommendations[goal] ? goal : "leads",
    recommendations: recommendations[goal && recommendations[goal] ? goal : "leads"],
  });
}
