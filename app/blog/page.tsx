import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/lib/data';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Blog & Case Studies | React, Next.js & AI-Native Development | Abin PM',
  description:
    'Insights on React, Next.js, Node.js, cloud, AI-native development, LLM integration, and GenAI stabilization from real enterprise work at IBM, National Grid, Abercrombie & Fitch.',
};

type Category = 'All' | 'React' | 'AI-Native' | 'LLMs' | 'Case Study' | 'Hiring';

const CATEGORIES: Category[] = ['All', 'React', 'AI-Native', 'LLMs', 'Case Study', 'Hiring'];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#080810] pt-28">
        <section className="mx-auto max-w-[1100px] px-6 pb-32 md:px-10">
          {/* Header */}
          <div className="mb-16 max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[rgba(99,102,241,0.2)] bg-[rgba(99,102,241,0.06)] px-4 py-1.5">
              <span className="font-mono text-xs text-[#6366f1]">Blog & Case Studies</span>
            </div>
            <h1 className="mb-4 font-sans text-3xl font-bold leading-tight tracking-tight text-[#f1f5f9] md:text-4xl">
              Blog & Case Studies on React, Next.js &amp; AI-Native Development
            </h1>
            <p className="leading-relaxed text-[#94a3b8]">
              These posts are written for founders, product leaders, and engineering managers who
              want to understand how to hire, work with, and get the most from a senior React and
              AI-native full stack developer. Topics span React architecture, Next.js patterns,
              Node.js microservices, cloud deployment, AI-native workflows with Cursor AI and
              GitHub Copilot, LLM integration, and GenAI stabilization for enterprise teams —
              all drawn from real production work.
            </p>
          </div>

          {/* Category filter — decorative (no JS filtering needed for static export) */}
          <div className="mb-10 flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <span
                key={cat}
                className={`cursor-default rounded-full border px-4 py-1.5 font-mono text-xs transition ${
                  cat === 'All'
                    ? 'border-[rgba(99,102,241,0.5)] bg-[rgba(99,102,241,0.12)] text-[#6366f1]'
                    : 'border-[rgba(99,102,241,0.15)] bg-transparent text-[#475569] hover:border-[rgba(99,102,241,0.35)] hover:text-[#94a3b8]'
                }`}
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Blog cards */}
          <div className="grid gap-5 md:grid-cols-2">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-xl border border-[rgba(99,102,241,0.12)] bg-[rgba(99,102,241,0.04)] p-8 no-underline transition hover:border-[rgba(99,102,241,0.35)] hover:-translate-y-1"
              >
                <div className="mb-3 flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-[rgba(99,102,241,0.1)] px-3 py-1 font-mono text-[10px] text-[#6366f1]">
                    {post.category}
                  </span>
                  <span className="font-mono text-[10px] text-[#475569]">{post.readTime}</span>
                </div>
                <h2 className="mb-3 font-sans text-lg font-bold leading-snug text-[#f1f5f9] transition group-hover:text-[#6366f1]">
                  {post.title}
                </h2>
                <p className="mb-5 flex-1 text-sm leading-relaxed text-[#94a3b8]">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-[#475569]">{formatDate(post.date)}</span>
                  <span className="font-mono text-xs text-[#6366f1] transition group-hover:translate-x-0.5">
                    Read article →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
