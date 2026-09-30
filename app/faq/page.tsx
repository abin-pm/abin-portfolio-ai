import type { Metadata } from 'next';
import Link from 'next/link';
import { faq } from '@/lib/data';
import { getFAQPageSchema, getBreadcrumbSchema } from '@/lib/json-ld';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { FAQ } from '@/components/FAQ';

const SITE_URL = 'https://www.abinaiengineer.com';

export const metadata: Metadata = {
  title: 'FAQ | Hiring a Senior React & MERN Stack Developer | Abin PM',
  description:
    'Answers to common questions about hiring Abin PM — senior React, Node.js & MERN stack developer from India. Freelance rates, remote availability, AI-native workflow, engagement models and more.',
  keywords: [
    'hire React developer FAQ',
    'MERN stack developer questions',
    'freelance developer India FAQ',
    'remote developer hire questions',
    'AI-native developer FAQ',
  ],
  alternates: { canonical: `${SITE_URL}/faq` },
  openGraph: {
    title: 'FAQ — Hiring Abin PM | Senior React & MERN Stack Developer',
    description:
      'Common questions about hiring a senior React, Node.js & MERN stack developer from India — rates, remote availability, AI workflow, and engagement models.',
    url: `${SITE_URL}/faq`,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
};

export default function FAQPage() {
  const faqSchema = getFAQPageSchema();
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: SITE_URL },
    { name: 'FAQ', url: `${SITE_URL}/faq` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <main className="min-h-screen bg-cream pt-28">

        {/* Page hero */}
        <div className="mx-auto max-w-[720px] px-6 pb-4 md:px-10">
          <nav className="mb-6 flex items-center gap-2 text-xs text-subtle">
            <Link href="/" className="no-underline hover:text-muted">Home</Link>
            <span>/</span>
            <span className="text-muted">FAQ</span>
          </nav>
          <div className="section-label mb-4">FAQ</div>
          <h1 className="mb-4 text-4xl text-ink md:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mb-2 text-lg text-muted">
            Everything hiring managers, recruiters and clients ask about working with Abin PM —
            a senior React, Node.js & MERN stack developer from India.
          </p>
        </div>

        {/* FAQ accordion — reuses existing component */}
        <FAQ />

        {/* CTA */}
        <div className="mx-auto max-w-[720px] px-6 pb-32 md:px-10">
          <div className="rounded-2xl border border-border bg-surface p-10 text-center">
            <h2 className="mb-3 text-2xl text-ink">
              Still have questions?
            </h2>
            <p className="mb-8 text-muted">
              Reach out directly — Abin responds within 24 hours.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/hire-me"
                className="btn-primary"
              >
                Hire Me →
              </Link>
              <Link
                href="/projects"
                className="btn-secondary"
              >
                View Projects →
              </Link>
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
