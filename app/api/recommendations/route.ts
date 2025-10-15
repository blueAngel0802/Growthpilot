import { NextResponse } from "next/server";
import { recommendations } from "@/lib/data";
import type { RecommendationGoal } from "@/lib/types";

const validGoals = new Set<RecommendationGoal>(["leads", "seo", "automation"]);

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const goal = searchParams.get("goal") ?? "leads";

  if (!validGoals.has(goal as RecommendationGoal)) {
    return NextResponse.json(
      {
        error: "Invalid goal. Use leads, seo, or automation."
      },
      { status: 400 }
    );
  }

  return NextResponse.json({
    goal,
    generatedBy: "GrowthPilot recommendation engine demo",
    recommendations: recommendations[goal as RecommendationGoal]
  });
}
