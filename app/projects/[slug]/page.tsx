import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { projects, experience } from '@/lib/data';
import { getCaseStudySchema, getBreadcrumbSchema } from '@/lib/json-ld';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const SITE_URL = 'https://www.abinaiengineer.com';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.id }));
}

type Props = { params: { slug: string } };

// Company that delivered each project
const deliveredBy: Record<string, string> = {
  'loreal':              'ibm',
  'national-grid':       'ibm',
  'abercrombie':         'ibm',
  'supersonic-imagine':  'emvigo',
  'paragon':             'emvigo',
  'golyv':               'emvigo',
  'refinu':              'emvigo',
  'villager':            'luminescent',
  'first-group':         'luminescent',
  'we-are-fresh':        'ociuz',
  'best-holidays':       'ociuz',
};

// Expanded case study content per project
const caseStudyContent: Record<string, { challenge: string; approach: string; outcome: string }> = {
  loreal: {
    challenge:
      "L'Oréal's Retail Gold SalesApp is used by thousands of retail users to track sales, traffic, products, services, CRM and brand performance. The Version 2 release needed a redesigned, consistent UI across all eight modules without disrupting the data people rely on daily.",
    approach:
      "Working at IBM in a frontend team of 4, focused solely on the V2 UI/UX update. Built reusable KPI cards, dashboards, charts and filters with Next.js, React, TypeScript, Material UI and React Query, with Nivo, Highcharts and D3 visualizations and responsive layouts across Sales, Business Analytics, Products, Services, Traffic, CRM, Control and Brand. Validated KPIs with stakeholders, traced and fixed discrepancies between non-production and production data, and managed React and UI library version compatibility through the V2 migration.",
    outcome:
      'A consistent V2 interface across eight modules built from shared, reusable components, with KPIs validated against production data for thousands of retail users.',
  },
  'supersonic-imagine': {
    challenge:
      'SuperSonic Imagine needed a fast, responsive corporate website whose content and media their team could manage without developer involvement.',
    approach:
      'Built responsive Next.js pages from reusable React components and integrated Strapi as a headless CMS, so all content and media are API-driven and editable in the CMS. Focused on frontend performance, responsive layouts and UX across devices.',
    outcome:
      'A CMS-driven corporate website the client team can update independently, with a reusable component library and responsive, performance-focused pages.',
  },
  'national-grid': {
    challenge:
      'National Grid USA needed its legacy SAS-based MDS Consolidation EPO Tracking desktop application rebuilt as a scalable, accessible web platform. The existing business logic was complex and had to be preserved exactly while maintaining enterprise reliability through the transition.',
    approach:
      'Working at IBM India in a team of 6, GenAI-assisted code generation provided the initial baseline for a React.js frontend and .NET Core backend over PostgreSQL. The core engineering effort was stabilizing that generated code — finding business-logic discrepancies, applying enterprise coding standards and hardening it for production — with code reviews and deployments running through Azure CI/CD.',
    outcome:
      'A modern web platform on Azure replacing the legacy SAS application, with existing business rules preserved and AI-generated code brought up to the enterprise standards a US utility requires.',
  },
  abercrombie: {
    challenge:
      "Abercrombie & Fitch Co.'s storefront ran on a legacy Java frontend shared by three brands, making UI changes slow and hard to scale across teams.",
    approach:
      'Migrated the storefront to React.js Micro Frontends across Abercrombie & Fitch, Hollister and Abercrombie Kids. Built the Product Catalog, Product Details and Wishlist micro frontends integrated through a GraphQL Backend-for-Frontend (BFF), with reusable React components, analytics tracking, WCAG accessibility, A/B testing, Jest unit tests and Playwright end-to-end tests.',
    outcome:
      'Core shopping journeys for three brands moved off the legacy Java frontend onto independently deployable React micro frontends with accessibility, analytics and automated test coverage built in.',
  },
  paragon: {
    challenge:
      'Paragon needed an asset management platform for the UK energy sector covering 200,000+ smart meter assets. Producing reports took up to 96 hours.',
    approach:
      'Built REST APIs and Node.js microservices over PostgreSQL, integrated Elasticsearch, Logstash and Kibana for search and monitoring, used AWS S3 for storage and set up CI/CD. Led the frontend team of 3.',
    outcome:
      'Reporting time dropped from 96 hours to under 2 hours across 200,000+ smart meter assets in the UK energy sector.',
  },
  golyv: {
    challenge:
      'Go Lyv needed an event booking platform for the UK market — event creation, ticketing and purchase flows — on a serverless architecture for cost-effective scaling.',
    approach:
      'Led the frontend team and handled requirement analysis, planning and estimation. Built on Next.js with GraphQL and Apollo Client over AWS AppSync, serverless backend services, MySQL and Firebase.',
    outcome:
      'A production event booking platform for the UK market whose serverless AWS architecture scales without fixed infrastructure cost.',
  },
  refinu: {
    challenge:
      'Refinu needed a scalable platform for personalized growth journeys, with push notifications to keep users engaged.',
    approach:
      'Built a serverless platform on Google Cloud: React.js and TypeScript on the frontend, Node.js on GCP Cloud Functions, Firestore and Firebase for data and authentication, and push notifications for engagement.',
    outcome:
      'A personalized growth platform with push-notification engagement, running serverless on GCP without infrastructure to manage.',
  },
  villager: {
    challenge:
      'Villager needed a civic platform where community members raise, discuss and prioritize local issues for government attention — with real-time communication and location-based search at its core.',
    approach:
      'Built a React.js/Redux frontend on a Node.js/Express and MongoDB backend. Added real-time chat over Socket.IO, location-based issue search with Elasticsearch and Keycloak authentication, and shipped it with Docker and Kubernetes.',
    outcome:
      'A production community issue platform with real-time chat and location-aware search, kept stable through systematic debugging and performance tuning.',
  },
  'first-group': {
    challenge:
      "A Dubai client needed an owners' portal and a content-managed website its team could maintain.",
    approach:
      "Built the owners' portal on NopCommerce and the CMS portal on Umbraco 7, both in C# with ASP.NET MVC5, Entity Framework and MS SQL Server.",
    outcome:
      "Two production portals for the client: a NopCommerce owners' portal and an Umbraco CMS site their team can update independently.",
  },
  'we-are-fresh': {
    challenge:
      'We Are Fresh needed a web application with online payments.',
    approach:
      'Built it as an ASP.NET MVC5 application in C# with Entity Framework and MS SQL Server, with jQuery and Bootstrap on the frontend and PayU for payments.',
    outcome:
      'A production web application with integrated PayU payments, built across UI, server and database.',
  },
  'best-holidays': {
    challenge:
      'Best Holidays needed a web application with online payments.',
    approach:
      'Built it as an ASP.NET MVC5 application in C# with Entity Framework and MS SQL Server, with jQuery and Bootstrap on the frontend and PayU for payments.',
    outcome:
      'A production web application with integrated PayU payments, built across UI, server and database.',
  },
};

// Keyword-rich H1 overrides for specific projects
const seoTitles: Record<string, string> = {
  abercrombie: 'React Micro-Frontend Migration: Abercrombie & Fitch Case Study',
  'national-grid': 'SAS to React Modernization: National Grid USA — GenAI Case Study',
  paragon: 'Energy Asset Management Platform: 96hrs → Under 2hrs Reporting — Paragon Energy',
};

export function generateMetadata({ params }: Props): Metadata {
  const project = projects.find((p) => p.id === params.slug);
  if (!project) return {};

  const url = `${SITE_URL}/projects/${project.id}`;
  const seoTitle = seoTitles[project.id];
  const title = seoTitle
    ? `${seoTitle} | Abin PM`
    : `${project.title} — ${project.client} | Abin PM`;
  const description = project.description;

  return {
    title,
    description,
    keywords: project.tags,
    alternates: { canonical: url },
    openGraph: {
      // Pages that set openGraph drop the root file-based image, so reference it explicitly.
      images: ['/opengraph-image'],
      title,
      description,
      url,
    },
    twitter: { card: 'summary_large_image', title, description },
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

  const caseStudySchema = getCaseStudySchema(project);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: SITE_URL },
    { name: 'Projects', url: `${SITE_URL}/projects` },
    { name: project.client, url: `${SITE_URL}/projects/${project.id}` },
  ]);

  // Use keyword-rich H1 for key projects
  const h1 = seoTitles[project.id] ?? project.title;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <main className="min-h-screen bg-cream pt-28">
        <div className="mx-auto max-w-[860px] px-6 pb-32 md:px-10">

          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-xs text-subtle">
            <Link href="/projects" className="no-underline hover:text-muted">Projects</Link>
            <span>/</span>
            <span className="text-muted">{project.client}</span>
          </nav>

          {/* Header */}
          <div className="mb-10">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="text-2xl">{project.flag}</span>
              <span className="text-sm text-sage-dark">{project.client}</span>
              <span className="rounded-full bg-sage-light px-3 py-0.5 text-xs text-subtle">
                {project.category}
              </span>
              {project.aiAssisted && (
                <span className="rounded-full border border-border-strong bg-sage-light px-3 py-0.5 text-xs text-sage-dark">
                  🤖 AI-Assisted
                </span>
              )}
            </div>
            <h1 className="text-4xl text-ink md:text-5xl">
              {h1}
            </h1>
            {(project.period || project.company) && (
              <p className="mt-4 text-xs uppercase tracking-[0.14em] text-subtle">
                {[project.company, project.period].filter(Boolean).join(' · ')}
              </p>
            )}
            {project.aiNote && (
              <p className="mt-3 text-sm text-sage-dark">{project.aiNote}</p>
            )}
          </div>

          {/* Impact */}
          <div className="mb-10 grid gap-3 sm:grid-cols-2">
            {project.impact.map((item) => (
              <div
                key={item}
                className="card card-cyan flex items-start gap-3 px-5 py-4"
              >
                <span className="mt-0.5 shrink-0 text-sage-dark">✓</span>
                <span className="text-sm font-medium text-ink">{item}</span>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="mb-10">
            <div className="mb-3 text-xs uppercase tracking-widest text-subtle">Tech Stack</div>
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
                <div className="mb-3 text-xs uppercase tracking-widest text-subtle">The Challenge</div>
                <div className="card px-7 py-6">
                  <p className="text-sm leading-relaxed text-muted">{content.challenge}</p>
                </div>
              </div>
              <div className="mb-8">
                <div className="mb-3 text-xs uppercase tracking-widest text-subtle">The Approach</div>
                <div className="card px-7 py-6">
                  <p className="text-sm leading-relaxed text-muted">{content.approach}</p>
                </div>
              </div>
              <div className="mb-10">
                <div className="mb-3 text-xs uppercase tracking-widest text-subtle">The Outcome</div>
                <div className="card card-cyan px-7 py-6">
                  <p className="text-sm leading-relaxed text-muted">{content.outcome}</p>
                </div>
              </div>
            </>
          )}

          {/* Full description */}
          <div className="mb-12">
            <div className="mb-3 text-xs uppercase tracking-widest text-subtle">Project Overview</div>
            <p className="text-base leading-relaxed text-muted">{project.description}</p>
          </div>

          {/* Delivered by */}
          {company && (
            <div className="mb-10">
              <div className="mb-3 text-xs uppercase tracking-widest text-subtle">Delivered At</div>
              <Link
                href={`/experience/${company.slug}`}
                className="card group flex items-center justify-between px-7 py-5 no-underline"
              >
                <div>
                  <div className="font-sans font-semibold text-ink transition group-hover:text-sage-dark">
                    {company.company}
                  </div>
                  <div className="mt-0.5 text-xs text-subtle">
                    {company.role} · {company.period}
                  </div>
                </div>
                <span className="text-xs text-sage-dark">View role →</span>
              </Link>
            </div>
          )}

          {/* Related projects */}
          {relatedProjects.length > 0 && (
            <div className="mb-14">
              <div className="mb-5 text-xs uppercase tracking-widest text-subtle">More from this period</div>
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
                    </div>
                    <div className="font-sans text-sm font-semibold text-ink transition group-hover:text-sage-dark">
                      {p.title}
                    </div>
                    <div className="mt-1 text-[10px] text-subtle">{p.category}</div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="card p-8 text-center">
            <p className="mb-2 font-serif text-2xl text-ink">
              Need something similar built?
            </p>
            <p className="mb-6 text-sm text-muted">
              Available for freelance contracts and remote full-time roles globally.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/hire-me" className="btn-primary">
                Hire Me Now
              </Link>
              <Link href="/projects" className="btn-secondary">
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
