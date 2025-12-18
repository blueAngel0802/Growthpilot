import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null) as {
    name?: string;
    company?: string;
    budget?: string;
    goal?: string;
    website?: string;
  } | null;

  if (!body?.name || !body?.company) {
    return NextResponse.json({ error: "Name and company are required" }, { status: 400 });
  }

  const budget = Number(body.budget ?? 0);
  const hasWebsite = Boolean(body.website);
  const score = Math.min(100, 45 + Math.round(budget / 600) + (hasWebsite ? 12 : 0));
  const priority = score >= 80 ? "high" : score >= 62 ? "medium" : "low";
  const nextStep = priority === "high"
    ? "Schedule a discovery call and prepare a website + campaign audit."
    : priority === "medium"
      ? "Send a qualification email with service fit and budget questions."
      : "Add to nurture sequence and request more business context.";

  return NextResponse.json({
    id: `lead_${Date.now()}`,
    score,
    priority,
    nextStep,
  });
}
