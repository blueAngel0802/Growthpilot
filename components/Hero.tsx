import Link from "next/link";
import { ArrowRight, Gauge, Rocket, Target } from "lucide-react";

const tags = [
  "React / Next.js",
  "SEO + schema",
  "GA4 / GTM tracking",
  "PPC landing pages",
  "AI automation"
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(15,23,42,0.12),transparent_36%),radial-gradient(circle_at_bottom_left,rgba(15,23,42,0.08),transparent_32%)]" />
      <div className="container-section relative grid gap-10 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-24">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
            <Rocket size={16} /> Demo Portfolio Project · Full Stack + SEO/SEM + AI
          </div>
          <h1 className="max-w-4xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            AI-powered growth website for agencies, campaigns, and client reporting.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            GrowthPilot is a complete sample project showing conversion-focused development, PPC landing page strategy, SEO foundations, analytics tracking, CMS-ready content, and AI-assisted optimization workflows.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/case-study" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-6 py-3 font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-ring">
              View case study <ArrowRight size={18} />
            </Link>
            <Link href="/#dashboard" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white px-6 py-3 font-bold text-slate-900 transition hover:-translate-y-0.5 hover:shadow-sm focus-ring">
              See dashboard <Gauge size={18} />
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-slate-600">
            {tags.map((tag) => (
              <span key={tag} className="rounded-full bg-slate-100 px-4 py-2">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-soft">
          <div className="rounded-[1.5rem] bg-slate-950 p-5 text-white">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-300">Live optimization score</p>
                <h2 className="text-2xl font-bold">GrowthPilot Audit</h2>
              </div>
              <Gauge />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Stat label="Page speed" value="1.2s" />
              <Stat label="Lead lift target" value="+32%" />
              <Stat label="Tracked events" value="18" />
              <Stat label="SEO score" value="91" />
            </div>
            <div className="mt-5 rounded-2xl bg-white p-4 text-slate-950">
              <div className="flex items-center gap-3">
                <Target className="text-slate-700" />
                <div>
                  <p className="font-bold">Primary conversion goal</p>
                  <p className="text-sm text-slate-500">Book qualified consultation calls from paid and organic traffic.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-white/10 p-4">
      <p className="text-sm text-slate-300">{label}</p>
      <p className="mt-2 text-3xl font-black">{value}</p>
    </div>
  );
}
