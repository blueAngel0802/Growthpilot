"use client";

import { FormEvent, useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

type LeadResponse = {
  id: string;
  score: number;
  priority: "low" | "medium" | "high";
  nextStep: string;
};

export function LeadCaptureForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [result, setResult] = useState<LeadResponse | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setResult(null);

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    trackEvent("lead_form_submit_attempt", payload);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Lead submit failed");
      const data = (await response.json()) as LeadResponse;
      setResult(data);
      setStatus("success");
      trackEvent("lead_form_submit_success", { lead_id: data.id, lead_score: data.score, priority: data.priority });
    } catch {
      setStatus("error");
      trackEvent("lead_form_submit_error");
    }
  }

  return (
    <section className="container-page py-16">
      <div className="grid gap-8 rounded-[2rem] bg-slate-950 p-8 text-white lg:grid-cols-[0.8fr_1fr] lg:p-12">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.25em] text-slate-400">Lead Capture API</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">A working lead form with scoring logic.</h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            This form posts to a Next.js API route, returns a demo lead ID, calculates priority, and fires tracking events for GTM/GA4-style implementation.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="rounded-2xl bg-white p-6 text-slate-950 shadow-soft">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-bold">
              Name
              <input name="name" required className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 focus-ring" placeholder="Client name" />
            </label>
            <label className="text-sm font-bold">
              Company
              <input name="company" required className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 focus-ring" placeholder="Company" />
            </label>
            <label className="text-sm font-bold">
              Monthly budget
              <select name="budget" className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 focus-ring" defaultValue="5000">
                <option value="2500">Under $5k</option>
                <option value="5000">$5k - $10k</option>
                <option value="15000">$10k - $25k</option>
                <option value="30000">$25k+</option>
              </select>
            </label>
            <label className="text-sm font-bold">
              Main goal
              <select name="goal" className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 focus-ring" defaultValue="qualified-leads">
                <option value="qualified-leads">Qualified leads</option>
                <option value="local-seo">Local SEO growth</option>
                <option value="paid-search">Paid search performance</option>
                <option value="automation">Automation workflow</option>
              </select>
            </label>
          </div>
          <label className="mt-4 block text-sm font-bold">
            Website
            <input name="website" type="url" className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 focus-ring" placeholder="https://example.com" />
          </label>
          <button disabled={status === "loading"} className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 px-6 py-3 font-black text-white transition hover:-translate-y-0.5 disabled:opacity-60">
            {status === "loading" ? "Scoring lead..." : "Submit demo lead"} <Send size={18} />
          </button>
          {status === "success" && result ? (
            <div className="mt-5 rounded-2xl bg-emerald-50 p-4 text-emerald-950">
              <div className="flex items-center gap-2 font-black"><CheckCircle2 size={18} /> Lead scored</div>
              <p className="mt-2 text-sm leading-6">ID: {result.id} · Score: {result.score}/100 · Priority: {result.priority}</p>
              <p className="text-sm leading-6">Next step: {result.nextStep}</p>
            </div>
          ) : null}
          {status === "error" ? <p className="mt-4 text-sm font-bold text-red-600">Something went wrong. Please try again.</p> : null}
        </form>
      </div>
    </section>
  );
}
