import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container-section flex flex-col gap-4 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} GrowthPilot Demo. Self-built portfolio project.</p>
        <div className="flex gap-5 font-semibold">
          <Link href="/case-study" className="hover:text-slate-950 focus-ring">
            Case Study
          </Link>
          <Link href="/#dashboard" className="hover:text-slate-950 focus-ring">
            Dashboard
          </Link>
          <Link href="/#services" className="hover:text-slate-950 focus-ring">
            Services
          </Link>
        </div>
      </div>
    </footer>
  );
}
