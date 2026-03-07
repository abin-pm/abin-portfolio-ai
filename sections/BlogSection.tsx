import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { blogPosts } from '@/lib/site-data';

export function BlogSection() {
  return (
    <AnimatedSection className="mx-auto max-w-6xl px-6 py-16 md:px-10" id="blog">
      <SectionHeading
        eyebrow="Blog"
        title="Technical Writing on AI and MERN Engineering"
        description="SEO-focused topics for teams building modern AI-powered web products."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {blogPosts.map((post) => (
          <article key={post.title} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <h3 className="text-lg font-semibold text-slate-100">{post.title}</h3>
            <p className="mt-2 text-sm text-slate-300">{post.excerpt}</p>
            <a href={post.slug} className="mt-4 inline-block text-sm text-sky-400 hover:text-sky-300">
              Read article →
            </a>
          </article>
        ))}
      </div>
    </AnimatedSection>
  );
}
