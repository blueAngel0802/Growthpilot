import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "SEO, SEM, and AI Automation Blog | GrowthPilot Demo",
  description: "CMS-style blog content for SEO/SEM landing pages, GA4/GTM tracking, and AI agency workflows.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <main>
      <section className="bg-white">
        <div className="container-page py-14">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-slate-500">CMS Blog</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">SEO-friendly content model with dynamic pages.</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">This section demonstrates a CMS-ready blog structure that could be moved into WordPress, Sanity, Contentful, or a custom database.</p>
        </div>
      </section>
      <section className="container-page grid gap-5 py-12 md:grid-cols-3">
        {blogPosts.map((post) => (
          <article key={post.slug} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-black uppercase tracking-wide text-slate-500">{post.category} · {post.readingTime}</p>
            <h2 className="mt-3 text-xl font-black text-slate-950">{post.title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">{post.excerpt}</p>
            <Link href={`/blog/${post.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-black text-slate-950">
              Read article <ArrowRight size={16} />
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}
