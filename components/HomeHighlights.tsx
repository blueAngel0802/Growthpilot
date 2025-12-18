import { Code2, Globe2, LineChart, Megaphone, Sparkles, Workflow } from "lucide-react";
import { portfolioHighlights, serviceCards } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";

const icons = [Globe2, Megaphone, Code2, Workflow];

export function HomeHighlights() {
  return (
    <>
      <section className="container-page py-16">
        <SectionHeader
          eyebrow="Project Scope"
          title="A complete portfolio project"
          description="It demonstrates front-end, back-end, SEO, SEM, CMS, analytics, deployment, client communication, and AI-forward thinking in one structured codebase."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {serviceCards.map((card, index) => {
            const Icon = icons[index];
            return (
              <div key={card.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-black text-slate-950">{card.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{card.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-page grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow="Why It Is Stronger"
              title="More than a normal dashboard."
              description="This version includes actual interactions and backend-style routes that show how a real agency tool could work before connecting production services."
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {portfolioHighlights.map((highlight) => (
              <div key={highlight} className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <Sparkles className="mt-0.5 shrink-0 text-slate-900" size={18} />
                <p className="text-sm font-semibold leading-6 text-slate-700">{highlight}</p>
              </div>
            ))}
            <div className="rounded-2xl bg-slate-950 p-5 text-white sm:col-span-2">
              <div className="flex items-center gap-3">
                <LineChart />
                <div>
                  <p className="font-black">Demo limitation stated honestly</p>
                  <p className="mt-1 text-sm leading-6 text-slate-300">
                    The API routes use simulated business logic for portfolio review. They are structured so they can later connect to OpenAI, GA4, a CRM, WordPress, or a database.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
