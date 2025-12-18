"use client";

import { FormEvent, useState } from "react";
import { Bot, CheckCircle2, Loader2, Target } from "lucide-react";
import type { CampaignPlan } from "@/lib/types";
import { trackEvent } from "@/lib/analytics";

export function CampaignBuilder() {
  const [plan, setPlan] = useState<CampaignPlan | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setPlan(null);

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    trackEvent("campaign_plan_started", payload);

    try {
      const response = await fetch("/api/campaign-plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error("Campaign plan failed");
      const data = (await response.json()) as CampaignPlan;
      setPlan(data);
      setStatus("idle");
      trackEvent("campaign_plan_generated", { industry: data.industry, goal: data.goal, budget: data.monthlyBudget });
    } catch {
      setStatus("error");
    }
  }

  return (
    <main>
      <section className="bg-white">
        <div className="container-page py-14">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-slate-500">Campaign Builder</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">Generate an SEO/SEM landing page and tracking plan.</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">This interactive tool simulates an AI-forward agency workflow: collect inputs, call an API route, then return landing page sections, ad angles, analytics events, and automation ideas.</p>
        </div>
      </section>

      <section className="container-page grid gap-8 py-12 lg:grid-cols-[0.75fr_1.25fr]">
        <form onSubmit={handleSubmit} className="h-fit rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="flex items-center gap-2 text-xl font-black"><Target size={20} /> Campaign Inputs</h2>
          <div className="mt-5 space-y-4">
            <label className="block text-sm font-bold">
              Industry
              <select name="industry" defaultValue="home services" className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 focus-ring">
                <option value="home services">Home services</option>
                <option value="healthcare">Healthcare</option>
                <option value="legal services">Legal services</option>
                <option value="B2B software">B2B software</option>
                <option value="local restaurant">Local restaurant</option>
              </select>
            </label>
            <label className="block text-sm font-bold">
              Primary goal
              <select name="goal" defaultValue="book consultations" className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 focus-ring">
                <option value="book consultations">Book consultations</option>
                <option value="increase calls">Increase phone calls</option>
                <option value="generate demo requests">Generate demo requests</option>
                <option value="increase local visibility">Increase local visibility</option>
              </select>
            </label>
            <label className="block text-sm font-bold">
              Monthly ad budget
              <input name="monthlyBudget" type="number" min="500" defaultValue="7500" className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 focus-ring" />
            </label>
            <label className="block text-sm font-bold">
              Target location
              <input name="location" defaultValue="United States" className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 focus-ring" />
            </label>
          </div>
          <button disabled={status === "loading"} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 px-6 py-3 font-black text-white disabled:opacity-60">
            {status === "loading" ? <Loader2 className="animate-spin" size={18} /> : <Bot size={18} />} Generate Plan
          </button>
          {status === "error" ? <p className="mt-4 font-bold text-red-600">Could not generate plan. Please try again.</p> : null}
        </form>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          {plan ? (
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-slate-500">Generated Plan</p>
              <h2 className="mt-3 text-3xl font-black text-slate-950">{plan.landingPageHeadline}</h2>
              <p className="mt-3 text-slate-600">Industry: {plan.industry} · Goal: {plan.goal} · Budget: ${plan.monthlyBudget.toLocaleString()}/month</p>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                <PlanSection title="Ad Angles" items={plan.adAngles} />
                <PlanSection title="Landing Page Sections" items={plan.landingPageSections} />
                <PlanSection title="Tracking Events" items={plan.trackingEvents} />
                <PlanSection title="AI Automation Ideas" items={plan.automationIdeas} />
              </div>
            </div>
          ) : (
            <div className="flex min-h-[420px] flex-col items-center justify-center rounded-2xl bg-slate-50 p-8 text-center">
              <Bot size={42} className="text-slate-500" />
              <h2 className="mt-5 text-2xl font-black text-slate-950">Your generated plan will appear here.</h2>
              <p className="mt-3 max-w-lg text-slate-600">The output shows how an agency can move from client inputs to a landing page strategy, tracking plan, and automation roadmap.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

function PlanSection({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl bg-slate-50 p-5">
      <h3 className="text-lg font-black text-slate-950">{title}</h3>
      <div className="mt-4 space-y-3">
        {items.map((item) => (
          <div key={item} className="flex gap-3 rounded-2xl bg-white p-4 text-sm font-semibold leading-6 text-slate-700">
            <CheckCircle2 className="mt-0.5 shrink-0 text-slate-900" size={17} />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
