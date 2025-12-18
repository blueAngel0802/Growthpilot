import { NextRequest, NextResponse } from "next/server";
import type { AuditResult } from "@/lib/types";

function clamp(value: number, min = 55, max = 98) {
  return Math.max(min, Math.min(max, value));
}

function scoreFromUrl(url: string, base: number) {
  const secureBonus = url.startsWith("https") ? 6 : -8;
  const lengthPenalty = url.length > 45 ? -4 : 2;
  const keywordBonus = /(service|agency|marketing|local|consult|growth|seo)/i.test(url) ? 5 : 0;
  return clamp(base + secureBonus + lengthPenalty + keywordBonus);
}

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null) as { url?: string } | null;
  const url = body?.url?.trim();

  if (!url) {
    return NextResponse.json({ error: "URL is required" }, { status: 400 });
  }

  const technicalSeo = scoreFromUrl(url, 78);
  const performance = scoreFromUrl(url, 82) - (url.includes("wordpress") ? 4 : 0);
  const conversionUx = scoreFromUrl(url, 74) + (url.includes("consult") ? 4 : 0);
  const tracking = scoreFromUrl(url, 80);
  const overallScore = Math.round((technicalSeo + performance + conversionUx + tracking) / 4);

  const result: AuditResult = {
    url,
    overallScore,
    technicalSeo,
    performance,
    conversionUx,
    tracking,
    issues: [
      "Primary CTA should be repeated after proof, service details, and FAQ sections.",
      "Landing page should include campaign-specific metadata and structured FAQ content.",
      "Analytics plan should separate form starts, completed leads, phone clicks, and qualified lead events.",
      "Hero section should communicate the client outcome within the first 5 seconds.",
    ],
    recommendations: [
      "Add FAQ schema, local/service keywords, and internal links to related service pages.",
      "Use GTM to track CTA clicks, form starts, phone clicks, scroll depth, and thank-you page views.",
      "Compress media, defer non-critical scripts, and keep the landing page focused on one conversion goal.",
      "Create separate SEM landing page variants for high-intent keyword groups.",
    ],
    generatedAt: new Date().toISOString(),
  };

  return NextResponse.json(result);
}
