import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/data';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BlogPostLayout } from '@/components/BlogPostLayout';

const SITE_URL = 'https://abinaiengineer.com';

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

type Props = { params: { slug: string } };

export function generateMetadata({ params }: Props): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};

  const url = `${SITE_URL}/blog/${post.slug}`;
  const title = `${post.title} | Abin PM — Full Stack & AI Engineer`;
  const description = post.excerpt;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: 'Abin PM',
      url: SITE_URL,
    },
    url,
    description,
  };

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title,
      description,
      publishedTime: post.date,
      authors: ['Abin PM'],
    },
    other: {
      'application/ld+json': JSON.stringify(articleSchema),
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <Navbar />
      <main className="bg-[#080810]">
        <div className="pt-16">
          <BlogPostLayout post={post} relatedPosts={related} />
        </div>
      </main>
      <Footer />
    </>
  );
}
