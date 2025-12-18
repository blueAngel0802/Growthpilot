import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container-page grid gap-8 py-10 md:grid-cols-[1fr_0.8fr] md:items-center">
        <div>
          <h2 className="text-xl font-black text-slate-950">GrowthPilot Demo</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
            Self-built portfolio project showing full stack agency delivery: landing pages, dashboards, API routes, SEO/SEM strategy, CMS content, analytics tracking, and AI workflow concepts.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 md:justify-end">
          <Link href="/audit" className="rounded-2xl border border-slate-300 px-4 py-2 text-sm font-bold text-slate-700 hover:bg-slate-50">
            Run Audit
          </Link>
          <Link href="/case-study" className="rounded-2xl bg-slate-950 px-4 py-2 text-sm font-bold text-white">
            Read Case Study
          </Link>
        </div>
      </div>
    </footer>
  );
}
