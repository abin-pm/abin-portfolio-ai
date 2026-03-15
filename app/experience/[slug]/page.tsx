import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { experience, projects, education } from '@/lib/data';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const SITE_URL = 'https://www.abinaiengineer.com';

export function generateStaticParams() {
  return experience.map((e) => ({ slug: e.slug }));
}

type Props = { params: { slug: string } };

const metaMap: Record<string, { title: string; description: string }> = {
  ibm: {
    title: 'IBM India — Senior Application Developer & AI-Native Engineer | Abin PM',
    description:
      'Abin PM at IBM India Pvt Ltd — Senior Application Developer (Full Stack & Cloud) since Sep 2024. React Micro-Frontend, .NET Core, AI-native development with Cursor AI, GitHub Copilot & Claude for National Grid USA.',
  },
  emvigo: {
    title: 'Emvigo Technologies — Team Lead & Senior Software Engineer | Abin PM',
    description:
      'Abin PM at Emvigo Technologies (2020–2024) as Team Lead / Senior Software Engineer. Led full stack delivery of Paragon Energy, Go Lyv, and Refinu platforms using React, Node.js, AWS, GCP, and microservices.',
  },
  luminescent: {
    title: 'Luminescent Software — Full Stack Software Engineer | Abin PM',
    description:
      'Abin PM at Luminescent Software Pvt Ltd (2018–2020) as Full Stack Software Engineer. Built the Villager civic platform using React, Node.js, Socket.IO and Elasticsearch.',
  },
  ocuiz: {
    title: 'Ocuiz Technologies — Software Engineer | Abin PM',
    description:
      'Abin PM at Ocuiz Technologies (2016–2017) as Software Engineer. MVC web applications using C#, ASP.NET, .NET MVC and SQL.',
  },
};

export function generateMetadata({ params }: Props): Metadata {
  const job = experience.find((e) => e.slug === params.slug);
  if (!job) return {};
  const meta = metaMap[job.slug] ?? {
    title: `${job.company} | Abin PM`,
    description: job.role,
  };
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: `${SITE_URL}/experience/${job.slug}` },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${SITE_URL}/experience/${job.slug}`,
    },
  };
}

// Projects worked on per company slug
const projectsByCompany: Record<string, string[]> = {
  ibm:         ['national-grid'],
  emvigo:      ['paragon', 'golyv', 'refinu', 'abercrombie'],
  luminescent: ['villager'],
  ocuiz:       [],
};

export default function ExperienceDetailPage({ params }: Props) {
  const job = experience.find((e) => e.slug === params.slug);
  if (!job) notFound();

  const relatedProjectIds = projectsByCompany[job.slug] ?? [];
  const relatedProjects = projects.filter((p) => relatedProjectIds.includes(p.id));
  const otherJobs = experience.filter((e) => e.slug !== job.slug);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#080810] pt-28">
        <div className="mx-auto max-w-[860px] px-6 pb-32 md:px-10">

          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 font-mono text-xs text-[#475569]">
            <Link href="/experience" className="no-underline hover:text-[#94a3b8]">Experience</Link>
            <span>/</span>
            <span className="text-[#94a3b8]">{job.company}</span>
          </nav>

          {/* Header */}
          <div className="mb-10">
            <div className="mb-3 flex flex-wrap items-center gap-3">
              <span className="font-mono text-sm text-[#6366f1]">{job.period}</span>
              {job.current && (
                <span className="animate-pulse rounded-full bg-[rgba(34,211,238,0.1)] px-3 py-0.5 font-mono text-[10px] text-[#22d3ee]">
                  CURRENT
                </span>
              )}
              {job.aiRole && (
                <span className="rounded-full border border-[rgba(167,139,250,0.3)] bg-[rgba(167,139,250,0.08)] px-3 py-0.5 font-mono text-[10px] text-[#a78bfa]">
                  AI-Native
                </span>
              )}
            </div>
            <h1
              className={`font-sans text-4xl font-bold tracking-tight md:text-5xl ${
                job.current ? 'text-gradient' : 'text-[#f1f5f9]'
              }`}
            >
              {job.company}
            </h1>
            <p className="mt-3 text-lg text-[#94a3b8]">
              {job.role} · {job.location}
            </p>
          </div>

          {/* Tech stack */}
          <div className="mb-10">
            <div className="mb-3 font-mono text-xs uppercase tracking-widest text-[#475569]">Tech Stack</div>
            <div className="flex flex-wrap gap-2">
              {job.techStack.map((t) => (
                <span key={t} className="tag-pill">{t}</span>
              ))}
            </div>
          </div>

          {/* Responsibilities */}
          <div className="mb-10">
            <div className="mb-4 font-mono text-xs uppercase tracking-widest text-[#475569]">Responsibilities</div>
            <ul className="space-y-3">
              {job.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3 rounded-lg border border-[rgba(99,102,241,0.08)] bg-[rgba(99,102,241,0.03)] px-5 py-4 text-sm leading-relaxed text-[#94a3b8]">
                  <span className="mt-0.5 shrink-0 text-[#6366f1]">▸</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* AI tools */}
          {job.aiRole && (
            <div className="mb-10 card card-violet px-7 py-6">
              <div className="mb-3 font-mono text-xs uppercase tracking-widest text-[#a78bfa]">AI Tools Used Daily</div>
              <div className="flex flex-wrap gap-2">
                {['Cursor AI', 'GitHub Copilot', 'Claude', 'OpenAI Codex'].map((t) => (
                  <span key={t} className="tag-pill-violet">{t}</span>
                ))}
              </div>
              <p className="mt-4 text-sm text-[#94a3b8]">
                Used Cursor AI, GitHub Copilot, and Claude daily in enterprise production to accelerate
                development while maintaining Fortune 500 reliability standards — and to stabilize
                GenAI-generated code for production.
              </p>
            </div>
          )}

          {/* Assignment (National Grid nested card) */}
          {job.assignment && (
            <div className="mb-10">
              <div className="mb-4 font-mono text-xs uppercase tracking-widest text-[#475569]">Client Assignment</div>
              <div className="rounded-xl border-l-4 border-[#a78bfa] bg-[rgba(167,139,250,0.04)] p-7">
                <div className="mb-1 font-mono text-[10px] text-[#a78bfa]">ASSIGNMENT · {job.assignment.period}</div>
                <h2 className="mb-1 font-sans text-2xl font-bold text-[#f1f5f9]">{job.assignment.client}</h2>
                <div className="mb-4 font-mono text-sm text-[#94a3b8]">{job.assignment.project}</div>
                <p className="mb-6 text-sm leading-relaxed text-[#94a3b8]">{job.assignment.description}</p>
                <div className="mb-3 font-mono text-xs uppercase tracking-widest text-[#475569]">Key Contributions</div>
                <ul className="space-y-2.5">
                  {job.assignment.contributions.map((c, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#94a3b8]">
                      <span className="mt-0.5 shrink-0 text-[#a78bfa]">▸</span>
                      {c}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Link
                    href="/projects/national-grid"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[rgba(167,139,250,0.3)] px-4 py-2 font-mono text-xs text-[#a78bfa] no-underline transition hover:border-[rgba(167,139,250,0.6)]"
                  >
                    View full case study →
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Related projects */}
          {relatedProjects.length > 0 && (
            <div className="mb-14">
              <div className="mb-5 font-mono text-xs uppercase tracking-widest text-[#475569]">Projects Delivered</div>
              <div className="grid gap-4 sm:grid-cols-2">
                {relatedProjects.map((p) => (
                  <Link
                    key={p.id}
                    href={`/projects/${p.id}`}
                    className="card group p-6 no-underline"
                  >
                    <div className="mb-2 flex items-center gap-2">
                      <span className="text-lg">{p.flag}</span>
                      <span className="font-mono text-[10px] text-[#6366f1]">{p.client}</span>
                      {p.aiAssisted && (
                        <span className="ml-auto rounded-full bg-[rgba(167,139,250,0.1)] px-2 py-0.5 font-mono text-[9px] text-[#a78bfa]">🤖 AI</span>
                      )}
                    </div>
                    <div className="font-sans text-sm font-semibold text-[#f1f5f9] transition group-hover:text-[#6366f1]">
                      {p.title}
                    </div>
                    <div className="mt-1 font-mono text-[10px] text-[#475569]">{p.category}</div>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {p.tags.slice(0, 4).map((t) => (
                        <span key={t} className="tag-pill text-[10px]">{t}</span>
                      ))}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Other roles */}
          <div className="mb-14">
            <div className="mb-5 font-mono text-xs uppercase tracking-widest text-[#475569]">Other Roles</div>
            <div className="grid gap-3 sm:grid-cols-2">
              {otherJobs.map((j) => (
                <Link
                  key={j.slug}
                  href={`/experience/${j.slug}`}
                  className="card group flex flex-col p-5 no-underline"
                >
                  <span className="font-sans text-sm font-semibold text-[#f1f5f9] transition group-hover:text-[#6366f1]">
                    {j.company}
                  </span>
                  <span className="mt-0.5 font-mono text-[10px] text-[#475569]">{j.period}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="card mb-14 p-7">
            <div className="mb-2 font-mono text-xs text-[#6366f1]">2013</div>
            <div className="flex items-center gap-2 font-sans text-lg font-bold text-[#f1f5f9]">
              🎓 {education.degree}
            </div>
            <div className="mt-1 font-sans text-sm text-[#94a3b8]">
              {education.field} · {education.university}
            </div>
          </div>

          {/* CTA */}
          <div className="card p-8 text-center">
            <p className="mb-2 font-sans text-xl font-semibold text-[#f1f5f9]">
              Looking to hire a senior full stack developer?
            </p>
            <p className="mb-6 text-sm text-[#94a3b8]">
              Available for freelance contracts and remote full-time roles globally.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/hire-me" className="rounded-xl bg-[#6366f1] px-7 py-3 font-sans font-semibold text-white no-underline transition hover:opacity-90">
                Hire Me Now
              </Link>
              <Link href="/projects" className="rounded-xl border border-[rgba(99,102,241,0.35)] px-7 py-3 font-sans font-semibold text-[#f1f5f9] no-underline transition hover:border-[rgba(99,102,241,0.6)]">
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
