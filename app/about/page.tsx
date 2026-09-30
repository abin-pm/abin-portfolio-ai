import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { identity, experience, education } from '@/lib/data';

export const metadata: Metadata = {
  title: 'About Abin PM | Senior Full Stack Developer & AI-Native Engineer India',
  description:
    'Abin PM is a Senior Full Stack Developer & AI-Native Engineer from Kochi, India. 10+ years building enterprise React, Node.js, MERN systems for IBM, Abercrombie & Fitch, National Grid, Paragon Energy, Go Lyv, and Refinu.',
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
            Abin PM is a Senior Full Stack Developer and AI-Native Engineer based in Kochi, Kerala,
            India. He currently works at IBM India as a Senior Application Developer (Full Stack &
            Cloud), where he modernizes enterprise frontends, stabilizes AI-generated code, and
            uses Cursor AI, GitHub Copilot, and Claude every day as core production instruments —
            not as experiments.
          </p>

          <p className="mb-6 leading-relaxed text-muted">
            With over 10 years of professional software engineering experience, Abin is among the
            first generation of senior engineers to adopt AI-assisted development in enterprise
            production. At IBM, he was assigned to the National Grid MDS Consolidation project —
            where he took a GenAI-generated codebase, identified and corrected its discrepancies,
            enforced enterprise coding standards, and shipped a production-ready React.js, Node.js
            and PostgreSQL platform. That work — GenAI stabilization — is a rare combination of deep
            full stack experience and AI fluency that most engineers do not have. He went on to
            modernize Abercrombie &amp; Fitch Co.&apos;s e-commerce frontend into React.js
            Micro-Frontends with a GraphQL BFF, and now builds L&apos;Oréal&apos;s global Retail Gold
            analytics platform on Next.js, NestJS and BigQuery.
          </p>

          <p className="mb-6 leading-relaxed text-muted">
            Before IBM, Abin served as Team Lead and Senior Software Engineer at Emvigo Technologies
            in Kochi for four years. During that period, he led full stack development for several
            international clients: Paragon Energy (a UK smart meter asset
            management platform handling 200,000+ devices, reducing turnaround from 96 hours to
            2 hours), Go Lyv (a serverless event booking platform for the UK market built on AWS
            AppSync and GraphQL), and Refinu (a serverless personality assessment platform on
            Google Cloud Platform).
          </p>

          <p className="mb-6 leading-relaxed text-muted">
            Earlier in his career, at Luminescent Software in Thiruvananthapuram, Abin built
            full stack SPAs and implemented real-time features with Socket.IO and location-based
            search with Elasticsearch — including work on Villager, a civic tech platform for
            community issue resolution. At Ocuiz Technologies in Thrissur, he developed .NET MVC
            and ASP.NET applications and honed his debugging and production stability skills.
          </p>

          <p className="mb-6 leading-relaxed text-muted">
            Abin&apos;s technical depth spans the full stack: React.js, Next.js, TypeScript, Node.js,
            Express, microservices, PostgreSQL, MongoDB, MySQL, Firestore, AWS, GCP, Azure, Docker,
            Kubernetes, and CI/CD pipelines. He is equally comfortable writing business logic,
            designing APIs, structuring cloud infrastructure, and reviewing AI-generated output
            against enterprise reliability standards.
          </p>

          <p className="mb-12 leading-relaxed text-muted">
            His philosophy is simple: senior engineering judgment multiplied by AI velocity. He is
            available as a freelance developer, remote contractor, or remote full-time engineer for
            global clients who need enterprise-grade output without enterprise team overhead.
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
