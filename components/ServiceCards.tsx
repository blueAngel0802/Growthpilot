import { services } from "@/lib/data";

export function ServiceCards() {
  return (
    <section id="services" className="container-section py-16">
      <div className="mb-10 max-w-3xl">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-slate-500">Services</p>
        <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
          What this project demonstrates for an agency environment.
        </h2>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          Each section maps directly to common client needs: website maintenance, campaign landing pages, analytics tracking, hosting/deployment, CMS workflows, and automation.
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <article key={service.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-sm">
                <Icon size={22} />
              </div>
              <h3 className="text-lg font-bold text-slate-950">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
