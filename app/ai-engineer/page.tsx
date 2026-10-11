import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { aiTools, identity } from '@/lib/data';

export const metadata: Metadata = {
  title: 'AI-Assisted Full Stack Developer for Hire | GenAI Code Review | Abin PM',
  description:
    'Senior full stack developer who uses Cursor, GitHub Copilot and Claude on enterprise work at IBM, reviews AI-generated code to production standard and adds LLM features to React apps.',
  keywords: [
    'AI-assisted full stack developer',
    'GenAI code review',
    'AI-generated code stabilization',
    'hire AI developer remote',
    'LLM integration React Node.js',
    'Cursor developer',
    'freelance AI developer',
  ],
  alternates: { canonical: '/ai-engineer' },
};

const inPractice = [
  { task: 'Boilerplate and scaffolding', how: 'Drafted by Copilot or Codex, then trimmed and rewritten to match the codebase' },
  { task: 'Debugging', how: 'I trace the bug myself and use Claude to test my theory or suggest what I missed' },
  { task: 'Code review', how: 'An AI read of the diff first, then my own review against the requirement' },
  { task: 'Refactoring', how: 'Cursor for the mechanical edits across files, tests to prove nothing changed' },
];

const whoFor = [
  { icon: '🚀', title: 'Startups that need to move quickly', desc: 'One senior engineer who can cover frontend, backend and deployment, with AI tools taking the repetitive work.' },
  { icon: '🏢', title: 'Companies trying AI tools for the first time', desc: 'Someone who has used them on enterprise client work and can set sensible review rules.' },
  { icon: '🤖', title: 'Products adding an LLM feature', desc: 'A chat assistant, search or summaries added to an existing React and Node.js app.' },
  { icon: '🛡️', title: 'Teams unsure about AI-generated code', desc: 'A review of what was generated, a plain list of risks, and the fixes.' },
];

const aiFaq = [
  {
    q: 'Is AI-generated code safe to put in production?',
    a: "Not without review. Generated code often looks right and still gets a business rule wrong, skips an edge case or ignores the project's architecture. On National Grid I spent a lot of time on exactly that. It is fine as a first draft if a senior engineer reads it, tests it and fixes it.",
  },
  {
    q: 'Can you add LLM features to my existing app?',
    a: 'Yes. For a React and Node.js app it usually means a server-side endpoint that calls the OpenAI or Claude API, streaming the response to the UI, and limits on cost and failures. My production AI experience is AI-assisted development and reviewing generated code, and I will say so plainly when scoping your project.',
  },
  {
    q: 'How do you keep quality up when using AI tools?',
    a: 'The tools draft and I decide. Everything goes through the same checks as hand-written code: type checks, tests, code review and a read against the actual requirement.',
  },
  {
    q: 'What do you mean by GenAI code stabilization?',
    a: 'Taking code that an AI tool generated and making it production-ready: fixing logic gaps, bringing it back in line with the architecture, adding the edge cases it missed and the tests that prove it works. I did this at IBM on the National Grid EPO Tracking platform.',
  },
];

export default function AIEngineerPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-cream pt-28">
        <section className="mx-auto max-w-[1100px] px-6 py-20 md:px-10">
          <span className="mb-4 inline-block rounded-full border border-border-strong bg-sage-light px-3 py-1 text-xs text-sage-dark">
            AI-assisted development
          </span>
          <h1 className="mb-6 text-4xl text-ink md:text-5xl">
            A full stack developer who uses AI tools and checks their work
          </h1>
          <p className="mb-16 max-w-3xl text-lg leading-relaxed text-muted">
            I&apos;ve used Cursor, GitHub Copilot and Claude on IBM client work since 2024. They save
            me time on routine code. They also make mistakes that are easy to miss, and a lot of my
            work on National Grid was finding and fixing those mistakes in code GenAI had written.
            If you want AI speed without shipping AI bugs, that&apos;s the experience I bring.
          </p>

          <h2 className="mb-8 text-2xl text-ink">Where AI fits in my day</h2>
          <div className="mb-16 grid gap-4 md:grid-cols-2">
            {inPractice.map((item) => (
              <div key={item.task} className="glass rounded-xl p-6">
                <div className="mb-2 text-sm font-semibold text-ink">{item.task}</div>
                <div className="text-sm text-muted">{item.how}</div>
              </div>
            ))}
          </div>

          <h2 className="mb-6 text-2xl text-ink">Fixing GenAI-generated code: the National Grid project</h2>
          <div className="mb-16 rounded-xl border border-border bg-surface p-8">
            <p className="mb-4 leading-relaxed text-muted">
              At IBM I joined the National Grid MDS Consolidation EPO Tracking project, which was
              replacing a legacy SAS desktop app with a React.js and .NET Core web platform. GenAI
              tools had produced much of the starting code. Some of its logic didn&apos;t match the
              business rules, and parts of it had drifted from the agreed architecture.
            </p>
            <p className="leading-relaxed text-muted">
              I went through it module by module, corrected the logic, brought it back in line with
              the architecture and the client&apos;s coding standards, and kept the old SAS rules
              intact. It&apos;s slow, careful work, and it&apos;s the part of AI-assisted development
              that tends to get skipped.{' '}
              <Link href="/projects/national-grid" className="text-sage-dark underline-offset-4 hover:underline">
                Read the case study
              </Link>.
            </p>
          </div>

          <h2 className="mb-6 text-2xl text-ink">The tools I use</h2>
          <div className="mb-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {aiTools.map((tool) => (
              <div key={tool.name} className="glass-violet rounded-xl p-6">
                <div className="mb-1 text-sm font-semibold text-sage-dark">{tool.name}</div>
                <span className="mb-3 inline-block rounded bg-sage-light px-2 py-0.5 text-[10px] text-sage-dark">
                  {tool.role}
                </span>
                <p className="text-sm text-muted">{tool.description}</p>
              </div>
            ))}
          </div>

          <h2 className="mb-8 text-2xl text-ink">Who this is useful for</h2>
          <div className="mb-16 grid gap-5 md:grid-cols-2">
            {whoFor.map((item) => (
              <div key={item.title} className="glass rounded-xl p-6">
                <div className="mb-2 text-2xl">{item.icon}</div>
                <h3 className="mb-1 text-ink">{item.title}</h3>
                <p className="text-sm text-muted">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="mb-8 text-2xl text-ink">Questions about AI-assisted development</h2>
          <div className="mb-16 space-y-4">
            {aiFaq.map((item) => (
              <div key={item.q} className="glass rounded-xl p-6">
                <h3 className="mb-2 text-ink">{item.q}</h3>
                <p className="text-sm leading-relaxed text-muted">{item.a}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="mb-6 text-lg text-muted">
              Want a second opinion on AI-generated code, or help shipping a feature quickly?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`mailto:${identity.email}`}
                className="btn-secondary"
              >
                Email me
              </a>
              <Link
                href="/hire-me"
                className="btn-secondary"
              >
                How hiring me works →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
