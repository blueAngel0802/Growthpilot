import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { blogPosts } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) return {};
  return buildMetadata({
    title: `${post.title} | GrowthPilot Demo`,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  });
}

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) notFound();

  return (
    <main>
      <article className="container-page max-w-4xl py-14">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-black text-slate-600 hover:text-slate-950">
          <ArrowLeft size={16} /> Back to blog
        </Link>
        <p className="mt-8 text-sm font-black uppercase tracking-[0.25em] text-slate-500">{post.category}</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">{post.title}</h1>
        <p className="mt-4 text-slate-500">{post.date} · {post.readingTime}</p>
        <p className="mt-6 text-xl leading-8 text-slate-700">{post.excerpt}</p>
        <div className="mt-10 space-y-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          {post.content.map((paragraph) => (
            <p key={paragraph} className="text-lg leading-8 text-slate-700">{paragraph}</p>
          ))}
        </div>
      </article>
    </main>
  );
}
