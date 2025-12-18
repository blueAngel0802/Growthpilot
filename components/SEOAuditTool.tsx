"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Loader2, Search, XCircle } from "lucide-react";
import type { AuditResult } from "@/lib/types";
import { trackEvent } from "@/lib/analytics";

function ScoreBlock({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-sm font-bold text-slate-500">{label}</p>
      <p className="mt-2 text-4xl font-black text-slate-950">{value}</p>
      <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-100">
        <div className="h-full rounded-full bg-slate-950" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

export function SEOAuditTool() {
  const [url, setUrl] = useState("https://example-business.com");
  const [result, setResult] = useState<AuditResult | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setResult(null);
    trackEvent("seo_audit_started", { url });

    try {
      const response = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });
      if (!response.ok) throw new Error("Audit failed");
      const data = (await response.json()) as AuditResult;
      setResult(data);
      setStatus("idle");
      trackEvent("seo_audit_completed", { url, score: data.overallScore });
    } catch {
      setStatus("error");
      trackEvent("seo_audit_failed", { url });
    }
  }

  return (
    <main>
      <section className="bg-white">
        <div className="container-page py-14">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-slate-500">SEO Audit Tool</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">Interactive technical SEO and conversion audit simulator.</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">Enter a URL and the API route returns a demo audit with scoring, issues, and client-friendly recommendations.</p>
          <form onSubmit={handleSubmit} className="mt-8 flex max-w-3xl flex-col gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3 sm:flex-row">
            <input value={url} onChange={(event) => setUrl(event.target.value)} type="url" required className="min-h-12 flex-1 rounded-xl border border-slate-200 px-4 focus-ring" />
            <button disabled={status === "loading"} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 font-black text-white disabled:opacity-60">
              {status === "loading" ? <Loader2 className="animate-spin" size={18} /> : <Search size={18} />} Run Audit
            </button>
          </form>
          {status === "error" ? <p className="mt-4 font-bold text-red-600">Audit failed. Please try again.</p> : null}
        </div>
      </section>

      {result ? (
        <section className="container-page py-12">
          <div className="mb-6 rounded-2xl bg-slate-950 p-6 text-white">
            <p className="text-sm text-slate-300">Audit completed for</p>
            <h2 className="mt-1 text-2xl font-black">{result.url}</h2>
            <p className="mt-2 text-sm text-slate-300">Generated at {new Date(result.generatedAt).toLocaleString()}</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            <ScoreBlock label="Overall" value={result.overallScore} />
            <ScoreBlock label="Technical SEO" value={result.technicalSeo} />
            <ScoreBlock label="Performance" value={result.performance} />
            <ScoreBlock label="Conversion UX" value={result.conversionUx} />
            <ScoreBlock label="Tracking" value={result.tracking} />
          </div>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="flex items-center gap-2 text-lg font-black"><XCircle size={19} /> Issues Found</h3>
              <div className="mt-4 space-y-3">
                {result.issues.map((issue) => (
                  <p key={issue} className="rounded-2xl bg-slate-50 p-4 text-sm font-semibold leading-6 text-slate-700">{issue}</p>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="flex items-center gap-2 text-lg font-black"><CheckCircle2 size={19} /> Recommendations</h3>
              <div className="mt-4 space-y-3">
                {result.recommendations.map((recommendation) => (
                  <p key={recommendation} className="rounded-2xl bg-emerald-50 p-4 text-sm font-semibold leading-6 text-emerald-950">{recommendation}</p>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
}
