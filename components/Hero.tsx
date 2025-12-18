import Link from "next/link";
import { ArrowRight, BarChart3, Bot, Search, ShieldCheck } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(15,23,42,0.10),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(15,23,42,0.08),transparent_28%)]" />
      <div className="container-page relative grid gap-12 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm">
            <Bot size={16} /> Full Stack · SEO/SEM · Analytics · AI Automation
          </div>
          <h1 className="max-w-4xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Agency growth platform with real interactive tools, API routes, and client-ready reporting.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            This is not just a static dashboard. GrowthPilot includes a lead-generation landing page, dynamic campaign dashboard, SEO audit simulator, campaign plan generator, CMS blog structure, API routes, and tracking documentation.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/audit" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-6 py-3 font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              Try SEO Audit <ArrowRight size={18} />
            </Link>
            <Link href="/dashboard" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white px-6 py-3 font-bold text-slate-900 transition hover:-translate-y-0.5 hover:shadow-sm">
              View Client Dashboard <BarChart3 size={18} />
            </Link>
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-soft">
          <div className="rounded-[1.5rem] bg-slate-950 p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-300">Live platform modules</p>
                <h2 className="mt-1 text-2xl font-black">GrowthPilot Pro</h2>
              </div>
              <ShieldCheck />
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                { icon: Search, label: "SEO Audit API", value: "Dynamic" },
                { icon: BarChart3, label: "Campaign Metrics", value: "Filterable" },
                { icon: Bot, label: "AI Planner", value: "Rule-based" },
                { icon: ShieldCheck, label: "Tracking Plan", value: "GA4/GTM" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="rounded-2xl bg-white/10 p-4">
                    <Icon size={20} />
                    <p className="mt-4 text-sm text-slate-300">{item.label}</p>
                    <p className="mt-1 text-2xl font-black">{item.value}</p>
                  </div>
                );
              })}
            </div>
            <div className="mt-5 rounded-2xl bg-white p-4 text-slate-950">
              <p className="text-sm font-bold uppercase tracking-wide text-slate-500">Client outcome</p>
              <p className="mt-2 text-lg font-black">Improve qualified leads with faster pages, clearer funnels, stronger tracking, and better campaign insights.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
