import { auditItems } from "@/lib/data";

export function AuditScores() {
  return (
    <section className="bg-white py-16">
      <div className="container-section grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-slate-500">Technical Audit</p>
          <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            A clear client-facing view of what was improved.
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            The project includes the kind of reporting clients expect: plain-English summaries, technical scores, campaign metrics, next steps, and measurable recommendations.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {auditItems.map((item) => (
            <article key={item.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <div className="flex items-center gap-4">
                <ScoreRing value={item.value} />
                <div>
                  <h3 className="font-bold text-slate-950">{item.label}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.note}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ScoreRing({ value }: { value: number }) {
  const circumference = 2 * Math.PI * 42;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="relative h-24 w-24 shrink-0">
      <svg className="h-24 w-24 -rotate-90" viewBox="0 0 100 100" aria-hidden="true">
        <circle cx="50" cy="50" r="42" strokeWidth="9" className="stroke-slate-200" fill="none" />
        <circle
          cx="50"
          cy="50"
          r="42"
          strokeWidth="9"
          strokeLinecap="round"
          className="stroke-slate-900"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-slate-950">{value}</div>
    </div>
  );
}
