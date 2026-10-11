import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { identity, faq } from '@/lib/data';
import { getFAQPageSchema, getBreadcrumbSchema } from '@/lib/json-ld';

const SITE_URL = 'https://www.abinaiengineer.com';

export const metadata: Metadata = {
  title: 'Hire a Senior Full Stack Developer: Freelance, Remote or Relocation | Abin PM',
  description:
    'Hire Abin PM, a senior React, Next.js and Node.js developer with 10+ years of enterprise work. Freelance, remote full-time, or relocation worldwide.',
  keywords: [
    'hire senior full stack developer',
    'freelance React developer',
    'remote full stack developer',
    'hire React developer Dubai',
    'remote developer Europe',
    'remote developer USA',
    'remote developer Australia Singapore',
    'developer open to relocation',
    'freelance Next.js developer',
    'Node.js contractor',
  ],
  alternates: { canonical: '/hire-me' },
};

const whyHire = [
  { icon: '🏆', title: '10+ years of enterprise work', desc: "L'Oréal, Abercrombie & Fitch and National Grid through IBM, and UK clients before that." },
  { icon: '🧭', title: 'Team lead experience', desc: 'Led teams of 4 to 6 engineers: design, estimates, sprint planning and code review.' },
  { icon: '🌍', title: 'Used to remote work', desc: 'Delivered for US, UK, French and Dubai clients, mostly from India over video calls and Jira.' },
  { icon: '✈️', title: 'Open to relocation', desc: 'Happy to move for the right full-time role: the US, Europe, Dubai, Africa, Australia, New Zealand, Singapore, Malaysia or Japan.' },
  { icon: '⚡', title: 'Frontend to cloud', desc: 'React and Next.js, Node.js or .NET Core APIs, and deployment on AWS, Azure or GCP.' },
  { icon: '🤖', title: 'AI-assisted, human-checked', desc: 'Cursor, Copilot and Claude for speed. Every line still reviewed and tested.' },
];

const timezones = [
  { region: 'Dubai / UAE', diff: 'India is 1.5 hours ahead', overlap: 'Almost the whole working day' },
  { region: 'Central Europe', diff: 'India is 3.5 to 4.5 hours ahead', overlap: 'Your morning to late afternoon' },
  { region: 'UK', diff: 'India is 4.5 to 5.5 hours ahead', overlap: 'Your morning and early afternoon' },
  { region: 'US East Coast', diff: 'India is 9.5 to 10.5 hours ahead', overlap: 'Your morning, my evening' },
  { region: 'South Africa / Kenya', diff: 'India is 2.5 to 3.5 hours ahead', overlap: 'Most of your day' },
  { region: 'Singapore / Malaysia', diff: '2.5 hours ahead of India', overlap: 'Almost your whole day' },
  { region: 'Sydney / Melbourne', diff: '4.5 to 5.5 hours ahead of India', overlap: 'Your afternoon, my morning' },
];

const services = [
  'React and Next.js apps',
  'Node.js, NestJS and .NET Core APIs',
  'MERN stack builds',
  'Legacy app to React migration',
  'Micro frontends and GraphQL BFF',
  'AWS, Azure and GCP deployment',
  'LLM features in existing apps',
  'Review of AI-generated code',
];

export default function HireMePage() {
  const faqSchema = getFAQPageSchema();
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: SITE_URL },
    { name: 'Hire Me', url: `${SITE_URL}/hire-me` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="min-h-screen bg-cream text-ink">
        <Navbar />

        <main className="mx-auto max-w-[1100px] px-6 pt-32 pb-20 md:px-10">
          {/* H1 */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sage-border bg-sage-light px-4 py-1.5 text-xs text-sage-dark">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-sage" />
            Available now
          </div>
          <h1 className="mb-6 text-4xl leading-tight md:text-5xl">
            Hire a Senior Full Stack Developer<br />
            <span className="text-sage-dark">freelance, remote or on-site</span>
          </h1>
          <p className="mb-10 max-w-2xl text-lg text-muted">
            I&apos;m a senior full stack engineer at IBM with 10+ years of React, Next.js, Node.js and .NET
            work. I take freelance projects and remote full-time roles with teams anywhere, and I&apos;m
            open to relocating abroad for the right job.
          </p>

          {/* Trust strip */}
          <div className="mb-16 flex flex-wrap gap-4 border-y border-border py-6">
            {['IBM', "L'Oréal", 'Abercrombie & Fitch', 'National Grid', 'Paragon Energy', 'The First Group (Dubai)'].map((c) => (
              <span key={c} className="rounded-full border border-border bg-surface px-4 py-1.5 text-sm font-medium text-ink">
                {c}
              </span>
            ))}
          </div>

          {/* Why hire */}
          <h2 className="mb-8 text-2xl">
            Why teams hire me
          </h2>
          <div className="mb-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyHire.map((item) => (
              <div key={item.title} className="rounded-xl border border-border bg-cream p-6">
                <div className="mb-3 text-2xl">{item.icon}</div>
                <h3 className="mb-1 text-ink">{item.title}</h3>
                <p className="text-sm text-muted">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Time zones */}
          <h2 className="mb-3 text-2xl">Working hours around the world</h2>
          <p className="mb-6 max-w-2xl text-sm text-muted">
            I&apos;m in Kochi, India (IST, UTC+5:30). This is how my day lines up with yours.
          </p>
          <div className="mb-16 overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-surface text-left text-xs uppercase tracking-widest text-subtle">
                  <th className="px-5 py-3">Where you are</th>
                  <th className="px-5 py-3">Time difference</th>
                  <th className="px-5 py-3">Shared hours</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {timezones.map((t) => (
                  <tr key={t.region} className="bg-cream">
                    <td className="px-5 py-3 font-semibold text-ink">{t.region}</td>
                    <td className="px-5 py-3 text-muted">{t.diff}</td>
                    <td className="px-5 py-3 text-muted">{t.overlap}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Services */}
          <h2 className="mb-6 text-2xl">What I can build for you</h2>
          <div className="mb-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s} className="rounded-xl border border-border bg-cream px-5 py-4 font-sans font-medium text-ink">
                {s}
              </div>
            ))}
          </div>

          {/* Engagement models */}
          <h2 className="mb-4 text-2xl">Freelance, remote full-time or relocation</h2>
          <div className="mb-8 flex flex-wrap gap-4 text-muted">
            <span className="rounded-lg border border-border px-4 py-2">📋 Freelance Contract</span>
            <span className="rounded-lg border border-border px-4 py-2">🕐 Part-Time Remote</span>
            <span className="rounded-lg border border-border px-4 py-2">💼 Full-Time Remote</span>
            <span className="rounded-lg border border-border px-4 py-2">✈️ Relocation abroad</span>
          </div>
          <p className="mb-16 text-sm text-muted">
            Freelance work can be a few hours a week or full time, billed hourly, monthly or at a fixed
            price. For full-time roles I can work remotely or relocate. There are details for the{' '}
            <Link href="/remote-developer-usa" className="text-sage-dark underline-offset-4 hover:underline">US</Link>,{' '}
            <Link href="/remote-developer-europe" className="text-sage-dark underline-offset-4 hover:underline">Europe</Link>,{' '}
            <Link href="/full-stack-developer-dubai" className="text-sage-dark underline-offset-4 hover:underline">Dubai</Link>,{' '}
            <Link href="/remote-developer-asia-pacific" className="text-sage-dark underline-offset-4 hover:underline">Asia-Pacific</Link>{' '}
            and{' '}
            <Link href="/remote-developer-relocation" className="text-sage-dark underline-offset-4 hover:underline">everywhere else, including Africa</Link>.
          </p>

          {/* Process */}
          <h2 className="mb-6 text-2xl">How it works</h2>
          <div className="mb-16 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {['You tell me what you need', 'I reply with a quote or a call slot', 'We agree scope and start', 'I ship, then support it'].map((step, i) => (
              <div key={step} className="rounded-xl border border-border bg-cream p-5 text-center">
                <div className="mb-2 font-serif text-3xl text-sage-dark">{i + 1}</div>
                <div className="font-sans font-semibold text-ink">{step}</div>
              </div>
            ))}
          </div>

          {/* FAQ section */}
          <h2 className="mb-8 text-2xl">Questions people ask before hiring me</h2>
          <div className="mb-16 space-y-4">
            {faq.map((item) => (
              <details key={item.q} className="group rounded-xl border border-border bg-cream">
                <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-4 font-sans font-semibold text-ink">
                  {item.q}
                  <span className="ml-4 shrink-0 text-sage-dark transition group-open:rotate-45">+</span>
                </summary>
                <p className="px-6 pb-5 text-sm leading-relaxed text-muted">{item.a}</p>
              </details>
            ))}
          </div>

          {/* CTA */}
          <div className="rounded-2xl border border-sage/20 bg-sage-light p-10 text-center">
            <h2 className="mb-3 text-2xl text-ink">
              Have a project or a role in mind?
            </h2>
            <p className="mb-8 text-muted">
              Email me a few lines about it. I reply within 24 hours.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={`mailto:${identity.email}`} className="btn-primary">
                Email me
              </a>
              <a href={identity.linkedin} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                LinkedIn ↗
              </a>
              <Link href="/projects" className="btn-secondary">
                View Projects
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
