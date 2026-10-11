import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { identity } from '@/lib/data';
import { getBreadcrumbSchema } from '@/lib/json-ld';

const SITE_URL = 'https://www.abinaiengineer.com';

export const metadata: Metadata = {
  title: 'MERN Stack Developer with AI Tools & LLM Integration | Abin PM',
  description:
    'Senior MERN stack developer (React, Node.js, MongoDB) who uses Cursor, Copilot and Claude on enterprise work and can add LLM features to your app. Freelance or remote.',
  keywords: [
    'AI MERN stack developer',
    'MERN stack developer for hire',
    'LLM integration React Node.js',
    'freelance MERN developer',
    'AI-assisted React developer',
    'remote MERN developer Europe',
    'MERN developer Dubai',
  ],
  alternates: { canonical: `${SITE_URL}/ai-mern-stack-developer` },
  openGraph: {
    // Pages that set openGraph drop the root file-based image, so reference it explicitly.
    images: ['/opengraph-image'],
    title: 'MERN Stack Developer with AI Tools | Abin PM',
    description:
      'React, Node.js and MongoDB, built faster with AI tools and reviewed by a senior engineer. LLM features for existing apps. Freelance or remote.',
    url: `${SITE_URL}/ai-mern-stack-developer`,
  },
  twitter: { card: 'summary_large_image' },
};

const aiTools = [
  {
    name: 'Cursor',
    role: 'Editor',
    desc: 'Refactors that touch many files and first drafts of new modules, which I then rewrite to fit the project.',
  },
  {
    name: 'GitHub Copilot',
    role: 'Completion',
    desc: 'Boilerplate, typed API calls and test setup. Most useful when the TypeScript types are strict.',
  },
  {
    name: 'Claude',
    role: 'Review',
    desc: 'A read of the diff before I open a pull request, looking for missed edge cases and error handling.',
  },
  {
    name: 'OpenAI and Claude APIs',
    role: 'LLM features',
    desc: 'What I would use to add a chat assistant, search or summaries to your Node.js backend.',
  },
];

const capabilities = [
  { label: 'MERN builds, delivered faster', desc: 'React, Node.js, Express and MongoDB, with AI tools on the repetitive parts and a senior review on all of it.' },
  { label: 'Reviewing AI-generated code', desc: 'I did this at IBM on National Grid: finding logic gaps and architectural drift in generated code and fixing them.' },
  { label: 'LLM features in an existing app', desc: 'A server-side endpoint calling the OpenAI or Claude API, streaming to the React UI, with cost and failure limits.' },
  { label: 'Real-time features', desc: 'Socket.IO chat and notifications, which I built on Villager, alongside REST and GraphQL APIs.' },
  { label: 'Search', desc: 'Elasticsearch for location and full-text search, used on Villager and on Paragon Energy.' },
  { label: 'Cloud deployment', desc: 'Docker, Kubernetes and serverless on AWS, GCP or Azure, with CI/CD pipelines.' },
];

const posts = [
  { href: '/blog/ai-native-workflow-cursor-copilot-claude', title: 'How I Actually Use Cursor, Copilot and Claude on Client Work', cat: 'AI-Assisted' },
  { href: '/blog/genai-code-stabilization-enterprise', title: 'When (and When Not) to Use GenAI for Production Code', cat: 'GenAI' },
  { href: '/blog/llm-integration-existing-react-app', title: 'Integrating LLMs into an Existing React + Node.js Application', cat: 'LLMs' },
  { href: '/blog/sas-to-react-national-grid-modernization', title: 'From SAS to React: the National Grid modernization', cat: 'Case Study' },
];

export default function AiMernStackDeveloperPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: SITE_URL },
    { name: 'AI MERN Stack Developer', url: `${SITE_URL}/ai-mern-stack-developer` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="min-h-screen bg-cream text-ink">
        <Navbar />

        <main className="mx-auto max-w-[1060px] px-6 pt-32 pb-20 md:px-10">

          {/* Hero */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border-strong bg-sage-light px-4 py-1.5">
            <span className="text-xs text-sage-dark">🤖 Using AI tools on client work since 2024</span>
          </div>

          <h1 className="mb-6 text-4xl leading-tight md:text-5xl">
            MERN Stack Developer<br />
            <span className="text-sage-dark">with AI tools and LLM integration</span>
          </h1>

          <p className="mb-8 max-w-2xl text-lg text-muted">
            I&apos;ve built React and Node.js apps for over ten years, and I&apos;ve used Cursor, GitHub
            Copilot and Claude on IBM client work since 2024. I can build your MERN app faster with
            those tools, add an LLM feature to an app you already have, or review code an AI wrote.
          </p>

          <div className="mb-12 flex flex-wrap gap-4">
            <a
              href={`mailto:${identity.email}`}
              className="btn-primary"
            >
              Tell me about your project →
            </a>
            <Link
              href="/ai-engineer"
              className="btn-secondary"
            >
              How I use AI →
            </Link>
          </div>

          {/* Client logos */}
          <div className="mb-20 flex flex-wrap gap-3 border-y border-border py-6">
            {['IBM', "L'Oréal", 'Abercrombie & Fitch', 'National Grid', 'Paragon Energy'].map((c) => (
              <span key={c} className="rounded-full bg-surface px-4 py-1.5 text-sm font-medium text-muted">
                {c}
              </span>
            ))}
          </div>

          {/* AI Tools */}
          <h2 className="mb-8 text-2xl text-ink">
            The AI tools I use, and for what
          </h2>
          <div className="mb-20 grid gap-5 sm:grid-cols-2">
            {aiTools.map((tool) => (
              <div key={tool.name} className="rounded-xl border border-border bg-surface p-6">
                <div className="mb-1 flex items-center gap-3">
                  <span className="font-sans font-bold text-sage-dark">{tool.name}</span>
                  <span className="rounded-full bg-sage-light px-2.5 py-0.5 text-[10px] text-sage-dark">{tool.role}</span>
                </div>
                <p className="text-sm leading-relaxed text-muted">{tool.desc}</p>
              </div>
            ))}
          </div>

          {/* Capabilities */}
          <h2 className="mb-8 text-2xl text-ink">
            What I can do on a MERN project
          </h2>
          <div className="mb-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap) => (
              <div key={cap.label} className="rounded-xl border border-border bg-surface p-6">
                <h3 className="mb-2 text-ink">{cap.label}</h3>
                <p className="text-sm leading-relaxed text-muted">{cap.desc}</p>
              </div>
            ))}
          </div>

          {/* Blog links */}
          <h2 className="mb-6 text-2xl text-ink">
            Further reading
          </h2>
          <div className="mb-20 grid gap-4 sm:grid-cols-2">
            {posts.map((post) => (
              <Link
                key={post.href}
                href={post.href}
                className="group rounded-xl border border-border bg-surface p-5 no-underline transition hover:border-border-strong"
              >
                <div className="mb-2 text-[10px] text-sage-dark">{post.cat}</div>
                <div className="font-sans text-sm font-semibold leading-snug text-ink transition group-hover:text-sage-dark">
                  {post.title}
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="rounded-2xl border border-border bg-surface p-10 text-center">
            <h2 className="mb-3 text-2xl text-ink">
              Hire a MERN stack developer who uses AI carefully
            </h2>
            <p className="mb-2 text-muted">
              Freelance, remote full-time, or on-site in Dubai or Europe.
            </p>
            <p className="mb-8 text-sm text-subtle">
              Based in Kochi, India. I reply within 24 hours.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`mailto:${identity.email}`}
                className="btn-primary"
              >
                Email me
              </a>
              <a
                href={identity.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                LinkedIn ↗
              </a>
              <Link
                href="/hire-me"
                className="btn-secondary"
              >
                How hiring me works →
              </Link>
            </div>
          </div>

          {/* Footer links */}
          <div className="mt-16 flex flex-wrap gap-6 border-t border-border pt-10 text-sm">
            <Link href="/remote-mern-developer" className="text-subtle no-underline hover:text-muted">Remote MERN Developer →</Link>
            <Link href="/skills" className="text-subtle no-underline hover:text-muted">Full Tech Stack →</Link>
            <Link href="/projects" className="text-subtle no-underline hover:text-muted">Case Studies →</Link>
            <Link href="/blog" className="text-subtle no-underline hover:text-muted">Blog →</Link>
          </div>

        </main>
        <Footer />
      </div>
    </>
  );
}
