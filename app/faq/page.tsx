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
    'Questions about hiring Abin PM, a senior React and Node.js developer: pricing, time zones, remote work, relocation to Dubai or Europe, and how he uses AI tools.',
  keywords: [
    'hire React developer FAQ',
    'MERN stack developer questions',
    'freelance developer India FAQ',
    'remote developer hire questions',
    'hire developer Dubai FAQ',
    'remote developer Europe questions',
  ],
  alternates: { canonical: `${SITE_URL}/faq` },
  openGraph: {
    // Pages that set openGraph drop the root file-based image, so reference it explicitly.
    images: ['/opengraph-image'],
    title: 'FAQ: Hiring Abin PM | Senior React & Full Stack Developer',
    description:
      'Pricing, time zones, remote work, relocation and AI tools: common questions about hiring a senior React and Node.js developer.',
    url: `${SITE_URL}/faq`,
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
            What recruiters, hiring managers and freelance clients usually ask me before we work
            together.
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
              Email me. I reply within 24 hours.
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
