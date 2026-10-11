import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { identity, experience, education } from '@/lib/data';

export const metadata: Metadata = {
  title: 'About Abin PM | Senior Full Stack Engineer, Remote & Open to Relocation',
  description:
    'Abin PM is a senior full stack engineer from Kochi, India with 10+ years of React, Node.js and .NET work for clients in the US, UK, France and Dubai. Freelance, remote or relocation.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-cream pt-28">
        <article className="mx-auto max-w-[740px] px-6 py-20 md:px-10">
          <h1 className="mb-10 text-4xl text-ink md:text-5xl">
            About Abin PM
          </h1>

          <p className="mb-6 leading-relaxed text-muted">
            I&apos;m Abin, a senior full stack engineer from Kochi in Kerala, India. Since 2024 I&apos;ve
            worked at IBM India as a Senior Application Developer (Full Stack &amp; Cloud), on
            modernization projects for clients in retail, e-commerce and utilities.
          </p>

          <p className="mb-6 leading-relaxed text-muted">
            My first IBM project was for National Grid USA. A team of six of us replaced a legacy SAS
            desktop application with a web platform built on React.js, .NET Core and PostgreSQL,
            hosted on Azure. GenAI tools wrote a lot of the first draft, and much of my job was
            reading that code closely, fixing logic that didn&apos;t match the business rules, and
            getting it to a standard a US utility would accept. After that I moved Abercrombie
            &amp; Fitch&apos;s product pages from a legacy Java storefront to React micro frontends
            with a GraphQL BFF. Now I&apos;m one of four frontend engineers on Version 2 of
            L&apos;Oréal&apos;s Retail Gold analytics app, in Next.js, React and TypeScript.
          </p>

          <p className="mb-6 leading-relaxed text-muted">
            Before IBM I spent four years at Emvigo Technologies in Kochi, first as a senior engineer
            and then as a team lead running teams of four to six. Most of our clients were in the UK.
            The project with the clearest result was Paragon, an asset platform for 200,000+ smart meters,
            where reports that used to take 96 hours now take under two. I also worked on Go Lyv, a
            UK event ticketing platform on AWS AppSync and GraphQL; Refinu, a serverless
            behavioural-science app on Google Cloud; and SuperSonic Imagine&apos;s corporate site on
            Next.js and Strapi.
          </p>

          <p className="mb-6 leading-relaxed text-muted">
            I started out at Ociuz Technologies in Thrissur, building ASP.NET MVC sites with PayU
            payments, then moved to Luminescent Software in Thiruvananthapuram. There I built
            Villager, a civic platform with Socket.IO chat and Elasticsearch location search, and
            two .NET portals for The First Group in Dubai.
          </p>

          <p className="mb-6 leading-relaxed text-muted">
            Day to day I work across React, Next.js, TypeScript, Node.js, NestJS, .NET Core,
            PostgreSQL, MongoDB, MySQL, Firestore, AWS, Azure, GCP, Docker, Kubernetes and CI/CD.
            I use Cursor, GitHub Copilot and Claude every day, and I review what they produce the
            same way I&apos;d review a colleague&apos;s pull request.
          </p>

          <p className="mb-12 leading-relaxed text-muted">
            I&apos;m available for freelance projects and remote full-time roles, and I&apos;m open to
            relocating to Dubai/UAE or Europe for the right job. The quickest way to reach me is
            email.
          </p>

          {/* Experience summary */}
          <h2 className="mb-6 text-2xl text-ink">Experience</h2>
          <ul className="mb-12 space-y-5">
            {experience.map((job) => (
              <li key={job.company} className="glass rounded-xl p-5">
                <div className="text-xs text-sage-dark">{job.period}</div>
                <div className="mt-0.5 font-sans font-bold text-ink">{job.company}</div>
                <div className="text-sm text-muted">{job.role} · {job.location}</div>
              </li>
            ))}
          </ul>

          {/* Education */}
          <h2 className="mb-6 text-2xl text-ink">Education</h2>
          <div className="glass mb-12 rounded-xl p-6">
            <div className="text-xs text-sage-dark">{education.year}</div>
            <div className="mt-1 font-sans text-lg font-bold text-ink">
              🎓 {education.degree}
            </div>
            <div className="text-sm text-muted">
              {education.field} · {education.university}
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href={`mailto:${identity.email}`}
              className="btn-primary"
            >
              Get in Touch
            </a>
            <Link
              href="/hire-me"
              className="btn-secondary"
            >
              Hire Me
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
