import { ArrowRight, CheckCircle2 } from "lucide-react";

const bullets = [
  "SEO and SEM landing page strategy",
  "Campaign tracking and client reporting",
  "Reusable full-stack component architecture",
  "AI-forward workflow and automation examples"
];

export function CTASection() {
  return (
    <section id="contact" className="container-section pb-20">
      <div className="rounded-[2rem] bg-slate-950 p-8 text-white lg:p-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-slate-400">Demo Summary</p>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
              A portfolio-ready project for a senior full-stack agency role.
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
              GrowthPilot can be submitted as sample work to show practical execution across web development, SEO/SEM, analytics, client communication, and AI automation.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-6 text-slate-950">
            <h3 className="text-xl font-black">Project includes</h3>
            <div className="mt-4 space-y-3">
              {bullets.map((bullet) => (
                <div key={bullet} className="flex gap-3 text-sm leading-6 text-slate-700">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-slate-950" size={18} />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
            <a href="mailto:hello@example.com" className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-5 py-3 font-bold text-white focus-ring">
              Contact demo owner <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
