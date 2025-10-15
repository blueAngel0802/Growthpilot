import { metrics } from "@/lib/data";

export function MetricsGrid() {
  return (
    <section className="container-section py-14">
      <div className="grid gap-4 md:grid-cols-4">
        {metrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <article key={metric.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white">
                <Icon size={21} />
              </div>
              <div className="text-3xl font-bold tracking-tight text-slate-950">{metric.value}</div>
              <div className="mt-1 text-sm font-semibold text-slate-700">{metric.label}</div>
              <p className="mt-2 text-sm leading-6 text-slate-500">{metric.detail}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
