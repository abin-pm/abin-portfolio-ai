import Link from 'next/link';
import { blogPosts } from '@/lib/data';
import { SectionWrapper } from '@/components/SectionWrapper';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function BlogPreview() {
  const preview = blogPosts.slice(0, 3);

  return (
    <SectionWrapper id="blog" className="px-6 py-32 md:px-10">
      <div className="mx-auto max-w-[1100px]">
        <div className="section-label mb-4">From the Blog</div>
        <h2 className="mb-3 font-sans text-3xl font-bold tracking-tight text-[#f1f5f9] md:text-4xl">
          Latest from the Blog
        </h2>
        <p className="mb-16 max-w-xl text-[#94a3b8]">
          Insights on React, Next.js, AI-native development, and building enterprise-grade systems.
        </p>

        <div className="grid gap-5 md:grid-cols-3">
          {preview.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="card group flex flex-col p-7 no-underline"
            >
              <div className="relative z-10 flex flex-1 flex-col">
                <div className="mb-4 flex items-center gap-3">
                  <span className="rounded-full bg-[rgba(99,102,241,0.1)] px-3 py-1 font-mono text-[10px] text-[#6366f1]">
                    {post.category}
                  </span>
                  <span className="font-mono text-[10px] text-[#475569]">{post.readTime}</span>
                </div>
                <h3 className="mb-3 font-sans text-base font-semibold leading-snug text-[#f1f5f9] transition group-hover:text-[#6366f1]">
                  {post.title}
                </h3>
                <p className="mb-5 flex-1 text-sm leading-relaxed text-[#94a3b8] line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-[#475569]">{formatDate(post.date)}</span>
                  <span className="font-mono text-xs text-[#6366f1] transition group-hover:translate-x-0.5">
                    Read article →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-xl border border-[rgba(99,102,241,0.25)] px-6 py-3 font-mono text-sm text-[#94a3b8] no-underline transition hover:border-[rgba(99,102,241,0.5)] hover:text-[#f1f5f9]"
          >
            View all articles →
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}
