"use client";

import { useMemo, useState } from "react";
import { CheckCircle2, Sparkles } from "lucide-react";
import { recommendations } from "@/lib/data";
import type { RecommendationGoal } from "@/lib/types";

const goals: { key: RecommendationGoal; label: string }[] = [
  { key: "leads", label: "Lead Growth" },
  { key: "seo", label: "SEO" },
  { key: "automation", label: "Automation" }
];

export function AIRecommendations() {
  const [selectedGoal, setSelectedGoal] = useState<RecommendationGoal>("leads");
  const selectedRecommendations = useMemo(() => recommendations[selectedGoal], [selectedGoal]);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white">
            <Sparkles size={21} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-950">AI Optimization Recommendations</h3>
            <p className="text-sm text-slate-500">Simulated AI workflow for agency delivery and client reporting.</p>
          </div>
        </div>
      </div>

      <div className="mb-5 flex flex-wrap gap-2">
        {goals.map((goal) => (
          <button
            key={goal.key}
            type="button"
            onClick={() => setSelectedGoal(goal.key)}
            className={`rounded-2xl px-4 py-2 text-sm font-bold transition focus-ring ${
              selectedGoal === goal.key
                ? "bg-slate-950 text-white"
                : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-100"
            }`}
          >
            {goal.label}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {selectedRecommendations.map((item) => (
          <div key={item} className="flex gap-3 rounded-2xl bg-slate-50 p-4">
            <CheckCircle2 className="mt-0.5 shrink-0 text-slate-800" size={18} />
            <p className="text-sm leading-6 text-slate-700">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
