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
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
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
      <main className="min-h-screen bg-[#080810] pt-28">

        {/* Page hero */}
        <div className="mx-auto max-w-[720px] px-6 pb-4 md:px-10">
          <nav className="mb-6 flex items-center gap-2 font-mono text-xs text-[#475569]">
            <Link href="/" className="no-underline hover:text-[#94a3b8]">Home</Link>
            <span>/</span>
            <span className="text-[#94a3b8]">FAQ</span>
          </nav>
          <div className="section-label mb-4">FAQ</div>
          <h1 className="mb-4 font-sans text-4xl font-bold tracking-tight text-[#f1f5f9] md:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mb-2 text-lg text-[#94a3b8]">
            Everything hiring managers, recruiters and clients ask about working with Abin PM —
            a senior React, Node.js & MERN stack developer from India.
          </p>
        </div>

        {/* FAQ accordion — reuses existing component */}
        <FAQ />

        {/* CTA */}
        <div className="mx-auto max-w-[720px] px-6 pb-32 md:px-10">
          <div className="rounded-2xl border border-[rgba(99,102,241,0.2)] bg-[rgba(99,102,241,0.04)] p-10 text-center">
            <h2 className="mb-3 font-sans text-2xl font-bold text-[#f1f5f9]">
              Still have questions?
            </h2>
            <p className="mb-8 text-[#94a3b8]">
              Reach out directly — Abin responds within 24 hours.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/hire-me"
                className="inline-flex rounded-xl bg-[#6366f1] px-7 py-3.5 font-sans font-semibold text-white no-underline transition hover:opacity-90"
              >
                Hire Me →
              </Link>
              <Link
                href="/projects"
                className="inline-flex rounded-xl border border-[rgba(99,102,241,0.35)] px-7 py-3.5 font-sans font-semibold text-[#f1f5f9] no-underline transition hover:border-[rgba(99,102,241,0.6)]"
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
