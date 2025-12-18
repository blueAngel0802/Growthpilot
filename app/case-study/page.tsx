import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Case Study | GrowthPilot Demo",
  description: "Portfolio case study explaining the strategy, architecture, SEO/SEM approach, analytics plan, and AI workflow logic behind GrowthPilot.",
  path: "/case-study",
});

const sections = [
  {
    title: "Problem",
    body: "A growing agency needs to launch client websites, paid-search landing pages, tracking plans, and performance reports quickly while keeping clients informed.",
  },
  {
    title: "Solution",
    body: "GrowthPilot combines a conversion-focused website, campaign dashboard, SEO audit flow, campaign plan generator, lead form scoring, CMS content model, and analytics documentation.",
  },
  {
    title: "Technical Approach",
    body: "The project uses Next.js App Router, reusable React components, TypeScript, Tailwind CSS, API routes, structured content data, metadata helpers, sitemap and robots configuration.",
  },
  {
    title: "SEO/SEM Approach",
    body: "The landing page structure supports keyword-focused content, fast page performance, clear CTAs, campaign-specific messaging, and GTM/GA4 event tracking.",
  },
  {
    title: "AI Automation Approach",
    body: "The demo API routes simulate how AI can turn client inputs into landing page sections, ad angles, tracking events, recommendations, and client-facing next steps.",
  },
  {
    title: "Client Communication",
    body: "The dashboard and docs translate technical decisions into business outcomes: leads, ROI, conversion funnel movement, performance issues, and next recommended actions.",
  },
];

export default function CaseStudyPage() {
  return (
    <main>
      <section className="bg-white">
        <div className="container-page py-14">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-slate-500">Portfolio Case Study</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">GrowthPilot: Full stack agency platform demo.</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">A self-built project designed specifically to demonstrate agency execution ability: websites, landing pages, SEO/SEM, integrations, hosting, client communication, and AI-forward automation.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/audit" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-6 py-3 font-black text-white">
              Try Audit Tool <ArrowRight size={18} />
            </Link>
            <Link href="/campaign-builder" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white px-6 py-3 font-black text-slate-900">
              Generate Campaign Plan
            </Link>
          </div>
        </div>
      </section>
      <section className="container-page py-12">
        <div className="grid gap-5 md:grid-cols-2">
          {sections.map((section) => (
            <div key={section.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="flex items-center gap-2 text-xl font-black text-slate-950"><CheckCircle2 size={20} /> {section.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{section.body}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
