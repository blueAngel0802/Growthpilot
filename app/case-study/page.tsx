import type { Metadata } from "next";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case Study",
  description:
    "Portfolio case study for GrowthPilot, a demo agency web project focused on SEO, SEM, analytics, CMS content, and AI workflow automation."
};

const sections = [
  {
    title: "Goal",
    body:
      "Design a realistic agency-style web project that demonstrates full-stack implementation, landing page strategy, SEO/SEM awareness, analytics thinking, and AI-forward workflow automation."
  },
  {
    title: "Approach",
    body:
      "Build a fast Next.js-style experience with reusable components, campaign metrics, SEO audit scoring, conversion-focused sections, and a simulated AI recommendation endpoint."
  },
  {
    title: "Outcome",
    body:
      "A deployable demo project that can be shown as sample work when a company asks for portfolio examples, technologies, SEO/SEM experience, and campaign examples."
  }
];

const deliverables = [
  "Responsive landing page with conversion-focused copy and CTAs",
  "Campaign dashboard for paid search, SEO pages, and retargeting",
  "AI recommendation workflow with API route simulation",
  "SEO metadata, schema, sitemap, and robots setup",
  "GA4/GTM tracking plan and UTM event model",
  "CMS/WordPress content mapping document",
  "Deployment and portfolio submission instructions"
];

export default function CaseStudyPage() {
  return (
    <main className="bg-slate-50">
      <section className="bg-white">
        <div className="container-section py-16 lg:py-24">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-slate-500">Portfolio Case Study</p>
          <h1 className="max-w-4xl text-4xl font-black tracking-tight text-slate-950 sm:text-6xl">
            GrowthPilot: agency landing page, SEO/SEM dashboard, and AI workflow demo.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            This is a self-built demo project, created to show practical agency execution from strategy through implementation. It is not presented as a real paid client campaign.
          </p>
          <Link href="/#dashboard" className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-6 py-3 font-bold text-white focus-ring">
            View live dashboard <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="container-section py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {sections.map((section) => (
            <article key={section.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-black text-slate-950">{section.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{section.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-section pb-20">
        <div className="rounded-[2rem] bg-slate-950 p-8 text-white lg:p-12">
          <h2 className="text-3xl font-black tracking-tight">Included deliverables</h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {deliverables.map((item) => (
              <div key={item} className="flex gap-3 rounded-2xl bg-white/10 p-4 text-sm leading-6 text-slate-100">
                <CheckCircle2 className="mt-0.5 shrink-0" size={18} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
