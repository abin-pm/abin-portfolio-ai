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
        <h2 className="mb-3 text-3xl text-ink md:text-4xl">
          Latest from the Blog
        </h2>
        <p className="mb-16 max-w-xl text-muted">
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
                  <span className="rounded-full bg-sage-light px-3 py-1 text-[10px] text-sage-dark">
                    {post.category}
                  </span>
                  <span className="text-[10px] text-subtle">{post.readTime}</span>
                </div>
                <h3 className="mb-3 text-base leading-snug text-ink transition group-hover:text-sage-dark">
                  {post.title}
                </h3>
                <p className="mb-5 flex-1 text-sm leading-relaxed text-muted line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-subtle">{formatDate(post.date)}</span>
                  <span className="text-xs text-sage-dark transition group-hover:translate-x-0.5">
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
            className="btn-secondary"
          >
            View all articles →
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}
