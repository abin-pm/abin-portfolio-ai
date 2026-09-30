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
      'Abin PM at IBM India Pvt Ltd — Senior Application Developer (Full Stack & Cloud) since Sep 2024. React Micro-Frontend, Node.js, GraphQL BFF, AI-native development with Cursor AI, GitHub Copilot & Claude for National Grid USA.',
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
      <main className="min-h-screen bg-cream pt-28">
        <div className="mx-auto max-w-[860px] px-6 pb-32 md:px-10">

          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-xs text-subtle">
            <Link href="/experience" className="no-underline hover:text-muted">Experience</Link>
            <span>/</span>
            <span className="text-muted">{job.company}</span>
          </nav>

          {/* Header */}
          <div className="mb-10">
            <div className="mb-3 flex flex-wrap items-center gap-3">
              <span className="text-sm text-sage-dark">{job.period}</span>
              {job.current && (
                <span className="animate-pulse rounded-full bg-sage-light px-3 py-0.5 text-[10px] text-sage-dark">
                  CURRENT
                </span>
              )}
              {job.aiRole && (
                <span className="rounded-full border border-border-strong bg-sage-light px-3 py-0.5 text-[10px] text-sage-dark">
                  AI-Native
                </span>
              )}
            </div>
            <h1
              className={` text-4xl md:text-5xl ${
                job.current ? 'text-sage-dark' : 'text-ink'
              }`}
            >
              {job.company}
            </h1>
            <p className="mt-3 text-lg text-muted">
              {job.role} · {job.location}
            </p>
          </div>

          {/* Tech stack */}
          <div className="mb-10">
            <div className="mb-3 text-xs uppercase tracking-widest text-subtle">Tech Stack</div>
            <div className="flex flex-wrap gap-2">
              {job.techStack.map((t) => (
                <span key={t} className="tag-pill">{t}</span>
              ))}
            </div>
          </div>

          {/* Responsibilities */}
          <div className="mb-10">
            <div className="mb-4 text-xs uppercase tracking-widest text-subtle">Responsibilities</div>
            <ul className="space-y-3">
              {job.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3 rounded-lg border border-border bg-surface px-5 py-4 text-sm leading-relaxed text-muted">
                  <span className="mt-0.5 shrink-0 text-sage-dark">▸</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* AI tools */}
          {job.aiRole && (
            <div className="mb-10 card card-violet px-7 py-6">
              <div className="mb-3 text-xs uppercase tracking-widest text-sage-dark">AI Tools Used Daily</div>
              <div className="flex flex-wrap gap-2">
                {['Cursor AI', 'GitHub Copilot', 'Claude', 'OpenAI Codex'].map((t) => (
                  <span key={t} className="tag-pill-violet">{t}</span>
                ))}
              </div>
              <p className="mt-4 text-sm text-muted">
                Used Cursor AI, GitHub Copilot, and Claude daily in enterprise production to accelerate
                development while maintaining Fortune 500 reliability standards — and to stabilize
                GenAI-generated code for production.
              </p>
            </div>
          )}

          {/* Assignment (National Grid nested card) */}
          {job.assignment && (
            <div className="mb-10">
              <div className="mb-4 text-xs uppercase tracking-widest text-subtle">Client Assignment</div>
              <div className="rounded-xl border-l-4 border-sage bg-surface p-7">
                <div className="mb-1 text-[10px] text-sage-dark">ASSIGNMENT · {job.assignment.period}</div>
                <h2 className="mb-1 text-2xl text-ink">{job.assignment.client}</h2>
                <div className="mb-4 text-sm text-muted">{job.assignment.project}</div>
                <p className="mb-6 text-sm leading-relaxed text-muted">{job.assignment.description}</p>
                <div className="mb-3 text-xs uppercase tracking-widest text-subtle">Key Contributions</div>
                <ul className="space-y-2.5">
                  {job.assignment.contributions.map((c, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted">
                      <span className="mt-0.5 shrink-0 text-sage-dark">▸</span>
                      {c}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Link
                    href="/projects/national-grid"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-border-strong px-4 py-2 text-xs text-sage-dark no-underline transition hover:border-sage"
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
              <div className="mb-5 text-xs uppercase tracking-widest text-subtle">Projects Delivered</div>
              <div className="grid gap-4 sm:grid-cols-2">
                {relatedProjects.map((p) => (
                  <Link
                    key={p.id}
                    href={`/projects/${p.id}`}
                    className="card group p-6 no-underline"
                  >
                    <div className="mb-2 flex items-center gap-2">
                      <span className="text-lg">{p.flag}</span>
                      <span className="text-[10px] text-sage-dark">{p.client}</span>
                      {p.aiAssisted && (
                        <span className="ml-auto rounded-full bg-sage-light px-2 py-0.5 text-[9px] text-sage-dark">🤖 AI</span>
                      )}
                    </div>
                    <div className="font-sans text-sm font-semibold text-ink transition group-hover:text-sage-dark">
                      {p.title}
                    </div>
                    <div className="mt-1 text-[10px] text-subtle">{p.category}</div>
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
            <div className="mb-5 text-xs uppercase tracking-widest text-subtle">Other Roles</div>
            <div className="grid gap-3 sm:grid-cols-2">
              {otherJobs.map((j) => (
                <Link
                  key={j.slug}
                  href={`/experience/${j.slug}`}
                  className="card group flex flex-col p-5 no-underline"
                >
                  <span className="font-sans text-sm font-semibold text-ink transition group-hover:text-sage-dark">
                    {j.company}
                  </span>
                  <span className="mt-0.5 text-[10px] text-subtle">{j.period}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="card mb-14 p-7">
            <div className="mb-2 text-xs text-sage-dark">{education.year}</div>
            <div className="flex items-center gap-2 font-sans text-lg font-bold text-ink">
              🎓 {education.degree}
            </div>
            <div className="mt-1 font-sans text-sm text-muted">
              {education.field} · {education.university}
            </div>
          </div>

          {/* CTA */}
          <div className="card p-8 text-center">
            <p className="mb-2 font-serif text-2xl text-ink">
              Looking to hire a senior full stack developer?
            </p>
            <p className="mb-6 text-sm text-muted">
              Available for freelance contracts and remote full-time roles globally.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/hire-me" className="btn-primary">
                Hire Me Now
              </Link>
              <Link href="/projects" className="btn-secondary">
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
