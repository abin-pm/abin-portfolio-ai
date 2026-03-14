import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { identity, experience, education } from '@/lib/data';

export const metadata: Metadata = {
  title: 'About Abin PM | Senior Full Stack Developer & AI-Native Engineer India',
  description:
    'Abin PM is a Senior Full Stack Developer & AI-Native Engineer from Kochi, India. 9+ years building enterprise React, Node.js, MERN systems for IBM, Abercrombie & Fitch, National Grid, Paragon Energy, Go Lyv, and Refinu.',
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#080810] pt-28">
        <article className="mx-auto max-w-[740px] px-6 py-20 md:px-10">
          <h1 className="mb-10 font-sans text-4xl font-bold tracking-tight text-[#f1f5f9] md:text-5xl">
            About Abin PM
          </h1>

          <p className="mb-6 leading-relaxed text-[#94a3b8]">
            Abin PM is a Senior Full Stack Developer and AI-Native Engineer based in Kochi, Kerala,
            India. He currently works at IBM India as a Senior Application Developer (Full Stack &
            Cloud), where he modernizes enterprise frontends, stabilizes AI-generated code, and
            uses Cursor AI, GitHub Copilot, and Claude every day as core production instruments —
            not as experiments.
          </p>

          <p className="mb-6 leading-relaxed text-[#94a3b8]">
            With over 9 years of professional software engineering experience, Abin is among the
            first generation of senior engineers to adopt AI-assisted development in enterprise
            production. At IBM, he was assigned to the National Grid MDS Consolidation project —
            where he took a GenAI-generated codebase, identified and corrected its discrepancies,
            enforced enterprise coding standards, and shipped a production-ready React.js and
            .NET Core platform. That work — GenAI stabilization — is a rare combination of deep
            full stack experience and AI fluency that most engineers do not have.
          </p>

          <p className="mb-6 leading-relaxed text-[#94a3b8]">
            Before IBM, Abin served as Team Lead and Senior Software Engineer at Emvigo Technologies
            in Kochi for four years. During that period, he led full stack development for several
            international clients: Abercrombie & Fitch Co. (e-commerce frontend modernization in
            React.js Micro-Frontend architecture), Paragon Energy (a UK smart meter asset
            management platform handling 200,000+ devices, reducing turnaround from 96 hours to
            2 hours), Go Lyv (a serverless event booking platform for the UK market built on AWS
            AppSync and GraphQL), and Refinu (a serverless personality assessment platform on
            Google Cloud Platform).
          </p>

          <p className="mb-6 leading-relaxed text-[#94a3b8]">
            Earlier in his career, at Luminescent Software in Thiruvananthapuram, Abin built
            full stack SPAs and implemented real-time features with Socket.IO and location-based
            search with Elasticsearch — including work on Villager, a civic tech platform for
            community issue resolution. At Ocuiz Technologies in Thrissur, he developed .NET MVC
            and ASP.NET applications and honed his debugging and production stability skills.
          </p>

          <p className="mb-6 leading-relaxed text-[#94a3b8]">
            Abin&apos;s technical depth spans the full stack: React.js, Next.js, TypeScript, Node.js,
            Express, microservices, PostgreSQL, MongoDB, MySQL, Firestore, AWS, GCP, Azure, Docker,
            Kubernetes, and CI/CD pipelines. He is equally comfortable writing business logic,
            designing APIs, structuring cloud infrastructure, and reviewing AI-generated output
            against enterprise reliability standards.
          </p>

          <p className="mb-12 leading-relaxed text-[#94a3b8]">
            His philosophy is simple: senior engineering judgment multiplied by AI velocity. He is
            available as a freelance developer, remote contractor, or remote full-time engineer for
            global clients who need enterprise-grade output without enterprise team overhead.
          </p>

          {/* Experience summary */}
          <h2 className="mb-6 font-sans text-2xl font-bold text-[#f1f5f9]">Experience</h2>
          <ul className="mb-12 space-y-5">
            {experience.map((job) => (
              <li key={job.company} className="glass rounded-xl p-5">
                <div className="font-mono text-xs text-[#6366f1]">{job.period}</div>
                <div className="mt-0.5 font-sans font-bold text-[#f1f5f9]">{job.company}</div>
                <div className="text-sm text-[#94a3b8]">{job.role} · {job.location}</div>
              </li>
            ))}
          </ul>

          {/* Education */}
          <h2 className="mb-6 font-sans text-2xl font-bold text-[#f1f5f9]">Education</h2>
          <div className="glass mb-12 rounded-xl p-6">
            <div className="font-mono text-xs text-[#6366f1]">{education.year}</div>
            <div className="mt-1 font-sans text-lg font-bold text-[#f1f5f9]">
              🎓 {education.degree}
            </div>
            <div className="text-sm text-[#94a3b8]">
              {education.field} · {education.university}
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href={`mailto:${identity.email}`}
              className="inline-flex rounded-xl bg-[#6366f1] px-7 py-3.5 font-sans font-semibold text-white no-underline transition hover:opacity-90"
            >
              Get in Touch
            </a>
            <Link
              href="/hire-me"
              className="inline-flex rounded-xl border border-[rgba(99,102,241,0.35)] px-7 py-3.5 font-sans font-semibold text-[#94a3b8] no-underline transition hover:text-[#f1f5f9]"
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
