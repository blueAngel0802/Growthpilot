import Link from "next/link";
import { Rocket } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/audit", label: "SEO Audit" },
  { href: "/campaign-builder", label: "Campaign Builder" },
  { href: "/case-study", label: "Case Study" },
  { href: "/blog", label: "Blog" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="container-page flex min-h-16 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2 font-black tracking-tight text-slate-950">
          <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-950 text-white">
            <Rocket size={18} />
          </span>
          GrowthPilot
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-semibold text-slate-600 lg:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-slate-950">
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/campaign-builder"
          className="rounded-2xl bg-slate-950 px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
        >
          Build Plan
        </Link>
      </div>
    </header>
  );
}
