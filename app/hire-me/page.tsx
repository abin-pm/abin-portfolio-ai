import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { identity } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Hire a Senior React & AI-Native Developer from India | Abin PM',
  description:
    'Hire Abin PM — senior React developer & AI-native engineer from India. 9+ years enterprise full stack + Cursor AI, Copilot, Claude. Freelance & remote available now.',
};

const whyHire = [
  { icon: '🏆', title: '9+ years enterprise', desc: 'Not a junior with AI tools' },
  { icon: '🤖', title: 'AI-native since 2024', desc: 'Cursor, Copilot, Claude daily' },
  { icon: '🌍', title: 'Remote-ready', desc: 'US/UK client track record' },
  { icon: '⚡', title: 'Full stack', desc: 'React frontend to cloud backend' },
  { icon: '💰', title: 'India rates + AI speed', desc: 'Exceptional value' },
];

const services = [
  'React.js / Next.js Development',
  'Node.js & API Development',
  'MERN Stack Applications',
  'Cloud & AWS Deployment',
  'AI-Powered Feature Development',
  'GenAI Code Stabilization',
];

export default function HireMePage() {
  return (
    <div className="min-h-screen bg-white text-[#0f172a]">
      <Navbar />
      <main className="pt-28">
        <section className="mx-auto max-w-[1100px] px-6 py-20 md:px-10">
          <h1 className="mb-6 font-sans text-4xl font-800 leading-tight md:text-5xl">
            Hire a Senior React Developer
            <br />
            & AI-Native Engineer from India
          </h1>
          <div className="mb-12 flex flex-wrap gap-4 font-mono text-sm text-[#64748b]">
            IBM · Abercrombie & Fitch · National Grid · Paragon Energy
          </div>

          <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyHire.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-[#e2e8f0] bg-[#f8fafc] p-6"
              >
                <div className="mb-3 text-2xl">{item.icon}</div>
                <h3 className="font-sans font-700 text-[#0f172a]">{item.title}</h3>
                <p className="mt-1 text-sm text-[#64748b]">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="mb-6 font-sans text-2xl font-800">What you get with AI-accelerated development</h2>
          <div className="mb-16 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-[#e2e8f0] bg-[#f8fafc] p-6">
              <h3 className="mb-4 font-mono text-sm text-[#64748b]">Traditional dev</h3>
              <ul className="list-inside list-disc text-[#475569]">
                <li>Weeks per feature</li>
                <li>Manual debugging</li>
                <li>Standard output</li>
              </ul>
            </div>
            <div className="rounded-xl border border-indigo/30 bg-indigo/5 p-6">
              <h3 className="mb-4 font-mono text-sm text-indigo">AI-Native dev (Abin)</h3>
              <ul className="list-inside list-disc text-[#0f172a]">
                <li>Days per feature</li>
                <li>AI-assisted root cause</li>
                <li>3–5× velocity</li>
              </ul>
            </div>
          </div>

          <h2 className="mb-6 font-sans text-2xl font-800">Services</h2>
          <div className="mb-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((name) => (
              <div
                key={name}
                className="rounded-xl border border-[#e2e8f0] bg-[#f8fafc] px-6 py-4 font-sans font-600 text-[#0f172a]"
              >
                {name}
              </div>
            ))}
          </div>

          <h2 className="mb-4 font-sans text-2xl font-800">Engagement models</h2>
          <p className="mb-8 text-[#64748b]">
            📋 Freelance Contract · 🕐 Part-Time Remote · 💼 Full-Time Remote
          </p>
          <p className="mb-8 text-[#64748b]">
            Process: Enquire → Scope & Quote → Build → Ship & Support
          </p>

          <div className="rounded-xl border border-indigo/20 bg-indigo/5 p-8 text-center">
            <p className="mb-6 font-sans text-xl font-600 text-[#0f172a]">
              Ready to hire a senior React developer & AI-native engineer from India?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`mailto:${identity.email}`}
                className="inline-flex rounded-md bg-indigo px-6 py-3 font-sans font-600 text-white no-underline transition hover:opacity-90"
              >
                Email Abin
              </a>
              <a
                href={identity.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-md border border-[#e2e8f0] bg-white px-6 py-3 font-sans font-600 text-[#0f172a] no-underline transition hover:border-indigo"
              >
                LinkedIn
              </a>
              <Link
                href="/#projects"
                className="inline-flex rounded-md border border-[#e2e8f0] bg-white px-6 py-3 font-sans font-600 text-[#0f172a] no-underline transition hover:border-indigo"
              >
                View Projects
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
