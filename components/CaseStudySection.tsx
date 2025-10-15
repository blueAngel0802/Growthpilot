import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CaseStudySection() {
  return (
    <section className="bg-white py-16" id="case-study">
      <div className="container-section">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-slate-500">Case Study</p>
            <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Built like an agency client project from strategy to execution.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              This demo is designed around the responsibilities in a senior agency role: front-end development, back-end architecture, WordPress/CMS awareness, SEO, SEM landing pages, client communication, analytics, and AI-forward automation.
            </p>
            <Link href="/case-study" className="mt-6 inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-5 py-3 font-bold text-slate-950 transition hover:bg-slate-50 focus-ring">
              Read full case study <ArrowRight size={18} />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <CaseMetric label="Build type" value="Full-stack demo" />
            <CaseMetric label="Primary focus" value="Lead generation" />
            <CaseMetric label="Client view" value="Reporting-ready" />
          </div>
        </div>
      </div>
    </section>
  );
}

function CaseMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
      <p className="text-sm font-semibold text-slate-500">{label}</p>
      <p className="mt-2 text-2xl font-black text-slate-950">{value}</p>
    </div>
  );
}
