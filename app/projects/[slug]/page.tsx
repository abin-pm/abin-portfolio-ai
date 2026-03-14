import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { projects, experience } from '@/lib/data';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const SITE_URL = 'https://abinaiengineer.com';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.id }));
}

type Props = { params: { slug: string } };

// Company that delivered each project
const deliveredBy: Record<string, string> = {
  'national-grid': 'ibm',
  'abercrombie':   'emvigo',
  'paragon':       'emvigo',
  'golyv':         'emvigo',
  'refinu':        'emvigo',
  'villager':      'luminescent',
};

// Expanded case study content per project
const caseStudyContent: Record<string, { challenge: string; approach: string; outcome: string }> = {
  'national-grid': {
    challenge:
      'National Grid USA required a modernization of its legacy SAS-based MDS Consolidation EPO Tracking desktop system into a scalable, accessible web application. The system had significant complexity in its existing business logic and needed to maintain enterprise reliability during transition.',
    approach:
      'Working at IBM India, GenAI-assisted code generation was used to scaffold the initial React.js frontend and .NET Core API baseline from the SAS system specifications. The core engineering effort then focused on stabilizing and hardening the AI-generated code — identifying business logic discrepancies, resolving architectural misalignments, applying enterprise coding standards, and ensuring production-grade error handling and test coverage across the full stack.',
    outcome:
      'Delivered a modern web platform on Azure replacing the legacy SAS system. The AI-assisted + senior engineering approach reduced overall development time while maintaining the enterprise reliability standards required by a US utility company. The React.js frontend improved accessibility and user experience; the .NET Core API provided scalable, maintainable backend services.',
  },
  abercrombie: {
    challenge:
      "Abercrombie & Fitch Co.'s e-commerce frontend was a legacy Java-based monolith causing deployment friction, inconsistent UI, and difficulty scaling across multiple product teams working in parallel.",
    approach:
      'Migrated the legacy frontend to a React.js Micro-Frontend architecture using Module Federation, enabling independent deployments per product domain. Standardized component library by migrating the Global Configuration Hub to PrimeReact. Delivered the My List (Wishlist) feature as an independent micro-frontend enabling users to save and move products to cart.',
    outcome:
      'Enabled parallel deployments across independent product teams — eliminating the release coordination overhead of a monolithic frontend. Significantly reduced release friction, improved UI scalability and consistency across the enterprise e-commerce platform in a production Fortune 500 environment.',
  },
  paragon: {
    challenge:
      "Paragon Energy needed a large-scale industry-wide asset management platform to manage 200,000+ smart meters across the UK energy sector. Existing manual workflows were taking up to 96 hours per operational cycle.",
    approach:
      'Built a full stack platform using React.js, Node.js microservices, MySQL, Elasticsearch, and AWS. Led a frontend engineering team of 3. Designed workflow automation that dramatically reduced manual processing time. Integrated ELK stack for operational monitoring and Elasticsearch for fast asset search and filtering at scale.',
    outcome:
      'Reduced operational turnaround time from 96 hours to 2 hours — a measurable, quantified business impact. Platform successfully deployed across the UK energy sector, managing 200,000+ smart meters in production.',
  },
  golyv: {
    challenge:
      'Go Lyv needed a comprehensive event management platform for the UK market — covering event creation, multi-tier ticket management, seamless purchase flows, and organizer tooling — with a serverless architecture for cost-effective scaling.',
    approach:
      'Built the full platform end-to-end handling both frontend and backend, maintaining direct client relationships throughout. Used Next.js for the frontend, GraphQL via AWS AppSync for the API layer, Node.js for business logic, and AWS Serverless infrastructure for scalable event-driven backend services.',
    outcome:
      'Delivered a production-ready event booking platform for the UK market with full-stack ownership from requirements through deployment. The serverless AWS architecture enabled elastic scaling without fixed infrastructure cost, supporting real-time ticket management and purchase flows.',
  },
  refinu: {
    challenge:
      'Refinu required a scalable, cloud-native HR technology platform for personality assessment workflows with push notification engagement and end-to-end ownership from product design through production deployment.',
    approach:
      'Architected a serverless microservices platform on Google Cloud Platform using Cloud Functions, Firestore for real-time data, React for the frontend, and Redux for state management. Led end-to-end — from requirements and solution design through delivery, testing (Jest), and deployment.',
    outcome:
      'Delivered a fully operational personality assessment platform with personalized workflows and a push notification system to drive engagement. GCP serverless architecture provided scalability without operational overhead. Full ownership model reduced coordination cost and accelerated time to delivery.',
  },
  villager: {
    challenge:
      'Villager needed a civic engagement platform enabling community members to raise, discuss, and prioritize local issues for government attention — with real-time communication and location-based search as core features.',
    approach:
      'Built a full stack React/Redux frontend with a Node.js/Express backend. Integrated Socket.IO for real-time chat features enabling live community discussion. Used Elasticsearch and ELK stack for location-based issue search and filtering — matching issues to geographic proximity.',
    outcome:
      'Shipped a production community issue resolution platform with real-time chat and location-aware search. The platform enabled civic engagement at a grassroots level with stable, performant delivery maintained through systematic debugging and performance tuning.',
  },
};

export function generateMetadata({ params }: Props): Metadata {
  const project = projects.find((p) => p.id === params.slug);
  if (!project) return {};

  const url = `${SITE_URL}/projects/${project.id}`;
  const title = `${project.title} — ${project.client} | Abin PM`;
  const description = project.description;

  const caseStudySchema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description,
    author: { '@type': 'Person', name: 'Abin PM', url: SITE_URL },
    url,
    keywords: project.tags.join(', '),
  };

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url },
    other: { 'application/ld+json': JSON.stringify(caseStudySchema) },
  };
}

export default function ProjectDetailPage({ params }: Props) {
  const project = projects.find((p) => p.id === params.slug);
  if (!project) notFound();

  const companySlug = deliveredBy[project.id];
  const company = experience.find((e) => e.slug === companySlug);
  const relatedProjects = projects.filter(
    (p) => p.id !== project.id && deliveredBy[p.id] === companySlug,
  ).slice(0, 2);
  const content = caseStudyContent[project.id];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#080810] pt-28">
        <div className="mx-auto max-w-[860px] px-6 pb-32 md:px-10">

          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 font-mono text-xs text-[#475569]">
            <Link href="/projects" className="no-underline hover:text-[#94a3b8]">Projects</Link>
            <span>/</span>
            <span className="text-[#94a3b8]">{project.client}</span>
          </nav>

          {/* Header */}
          <div className="mb-10">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="text-2xl">{project.flag}</span>
              <span className="font-mono text-sm text-[#6366f1]">{project.client}</span>
              <span className="rounded-full bg-[rgba(99,102,241,0.08)] px-3 py-0.5 font-mono text-xs text-[#475569]">
                {project.category}
              </span>
              {project.aiAssisted && (
                <span className="rounded-full border border-[rgba(167,139,250,0.3)] bg-[rgba(167,139,250,0.08)] px-3 py-0.5 font-mono text-xs text-[#a78bfa]">
                  🤖 AI-Assisted
                </span>
              )}
            </div>
            <h1 className="font-sans text-4xl font-bold tracking-tight text-[#f1f5f9] md:text-5xl">
              {project.title}
            </h1>
            {project.aiNote && (
              <p className="mt-3 font-mono text-sm text-[#a78bfa]">{project.aiNote}</p>
            )}
          </div>

          {/* Impact */}
          <div className="mb-10 grid gap-3 sm:grid-cols-2">
            {project.impact.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-[rgba(34,211,238,0.12)] bg-[rgba(34,211,238,0.03)] px-5 py-4"
              >
                <span className="mt-0.5 shrink-0 text-[#22d3ee]">✓</span>
                <span className="text-sm font-medium text-[#f1f5f9]">{item}</span>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="mb-10">
            <div className="mb-3 font-mono text-xs uppercase tracking-widest text-[#475569]">Tech Stack</div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <span key={t} className="tag-pill">{t}</span>
              ))}
            </div>
          </div>

          {/* Case study sections */}
          {content && (
            <>
              <div className="mb-8">
                <div className="mb-3 font-mono text-xs uppercase tracking-widest text-[#475569]">The Challenge</div>
                <div className="rounded-xl border border-[rgba(99,102,241,0.1)] bg-[rgba(99,102,241,0.03)] px-7 py-6">
                  <p className="text-sm leading-relaxed text-[#94a3b8]">{content.challenge}</p>
                </div>
              </div>
              <div className="mb-8">
                <div className="mb-3 font-mono text-xs uppercase tracking-widest text-[#475569]">The Approach</div>
                <div className="rounded-xl border border-[rgba(99,102,241,0.1)] bg-[rgba(99,102,241,0.03)] px-7 py-6">
                  <p className="text-sm leading-relaxed text-[#94a3b8]">{content.approach}</p>
                </div>
              </div>
              <div className="mb-10">
                <div className="mb-3 font-mono text-xs uppercase tracking-widest text-[#475569]">The Outcome</div>
                <div className="rounded-xl border border-[rgba(34,211,238,0.1)] bg-[rgba(34,211,238,0.02)] px-7 py-6">
                  <p className="text-sm leading-relaxed text-[#94a3b8]">{content.outcome}</p>
                </div>
              </div>
            </>
          )}

          {/* Full description */}
          <div className="mb-12">
            <div className="mb-3 font-mono text-xs uppercase tracking-widest text-[#475569]">Project Overview</div>
            <p className="text-base leading-relaxed text-[#94a3b8]">{project.description}</p>
          </div>

          {/* Delivered by */}
          {company && (
            <div className="mb-10">
              <div className="mb-3 font-mono text-xs uppercase tracking-widest text-[#475569]">Delivered At</div>
              <Link
                href={`/experience/${company.slug}`}
                className="group flex items-center justify-between rounded-xl border border-[rgba(99,102,241,0.12)] bg-[rgba(99,102,241,0.04)] px-7 py-5 no-underline transition hover:border-[rgba(99,102,241,0.35)]"
              >
                <div>
                  <div className="font-sans font-semibold text-[#f1f5f9] transition group-hover:text-[#6366f1]">
                    {company.company}
                  </div>
                  <div className="mt-0.5 font-mono text-xs text-[#475569]">
                    {company.role} · {company.period}
                  </div>
                </div>
                <span className="font-mono text-xs text-[#6366f1]">View role →</span>
              </Link>
            </div>
          )}

          {/* Related projects */}
          {relatedProjects.length > 0 && (
            <div className="mb-14">
              <div className="mb-5 font-mono text-xs uppercase tracking-widest text-[#475569]">More from this period</div>
              <div className="grid gap-4 sm:grid-cols-2">
                {relatedProjects.map((p) => (
                  <Link
                    key={p.id}
                    href={`/projects/${p.id}`}
                    className="group rounded-xl border border-[rgba(99,102,241,0.12)] bg-[rgba(99,102,241,0.04)] p-6 no-underline transition hover:border-[rgba(99,102,241,0.35)] hover:-translate-y-0.5"
                  >
                    <div className="mb-2 flex items-center gap-2">
                      <span className="text-lg">{p.flag}</span>
                      <span className="font-mono text-[10px] text-[#6366f1]">{p.client}</span>
                    </div>
                    <div className="font-sans text-sm font-semibold text-[#f1f5f9] transition group-hover:text-[#6366f1]">
                      {p.title}
                    </div>
                    <div className="mt-1 font-mono text-[10px] text-[#475569]">{p.category}</div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="rounded-xl border border-[rgba(99,102,241,0.2)] bg-[rgba(99,102,241,0.04)] p-8 text-center">
            <p className="mb-2 font-sans text-xl font-semibold text-[#f1f5f9]">
              Need something similar built?
            </p>
            <p className="mb-6 text-sm text-[#94a3b8]">
              Available for freelance contracts and remote full-time roles globally.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/hire-me" className="rounded-xl bg-[#6366f1] px-7 py-3 font-sans font-semibold text-white no-underline transition hover:opacity-90">
                Hire Me Now
              </Link>
              <Link href="/projects" className="rounded-xl border border-[rgba(99,102,241,0.35)] px-7 py-3 font-sans font-semibold text-[#f1f5f9] no-underline transition hover:border-[rgba(99,102,241,0.6)]">
                All Projects →
              </Link>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
