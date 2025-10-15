import { processSteps } from "@/lib/data";

export function ProcessSection() {
  return (
    <section className="container-section py-16">
      <div className="mb-10 max-w-3xl">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-slate-500">Workflow</p>
        <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
          Strategy, execution, and reporting in one delivery process.
        </h2>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          This mirrors how an agency developer can communicate with leadership, marketers, and clients while still owning the technical delivery.
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {processSteps.map((step, index) => {
          const Icon = step.icon;
          return (
            <article key={step.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                  <Icon size={22} />
                </span>
                <span className="text-sm font-black uppercase tracking-[0.2em] text-slate-400">Step {index + 1}</span>
              </div>
              <h3 className="text-xl font-black text-slate-950">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
