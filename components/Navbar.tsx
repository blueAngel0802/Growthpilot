import Link from "next/link";
import { Sparkles } from "lucide-react";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/#dashboard", label: "Dashboard" },
  { href: "/case-study", label: "Case Study" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="container-section flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-black tracking-tight text-slate-950 focus-ring">
          <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-950 text-white">
            <Sparkles size={18} />
          </span>
          GrowthPilot
        </Link>
        <div className="hidden items-center gap-6 text-sm font-semibold text-slate-600 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-slate-950 focus-ring">
              {link.label}
            </Link>
          ))}
        </div>
        <Link href="/#contact" className="rounded-2xl bg-slate-950 px-4 py-2 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:shadow-md focus-ring">
          Book Audit
        </Link>
      </nav>
    </header>
  );
}
