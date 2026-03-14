import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { identity, experience, skills } from '@/lib/data';

export const metadata: Metadata = {
  title: 'About Abin PM | Senior Full Stack Developer & AI-Native Engineer India',
  description:
    'Abin PM is a Senior Full Stack Developer & AI-Native Engineer from Kochi, India. 9+ years building enterprise React, Node.js, MERN systems for IBM, Abercrombie & Fitch, National Grid.',
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-neural-bg pt-28">
        <article className="mx-auto max-w-[720px] px-6 py-20 md:px-10">
          <h1 className="mb-8 font-sans text-4xl font-800 tracking-tight text-[#f1f5f9] md:text-5xl">
            About Abin PM
          </h1>

          <p className="mb-6 leading-relaxed text-[#94a3b8]">
            Abin PM is a Senior Full Stack Developer and AI-Native Engineer based in Kochi, Kerala,
            India. He is currently working at IBM India in Kochi as a Senior Application Developer
            (Full Stack & Cloud), where he modernizes enterprise frontends and uses Cursor AI,
            GitHub Copilot, and Claude daily.
          </p>

          <p className="mb-6 leading-relaxed text-[#94a3b8]">
            He is among the first generation of senior engineers to adopt AI-assisted development in
            enterprise production. Before IBM, he was Team Lead at Emvigo Technologies, and held
            full stack roles at Luminescent Software and Ocuiz Technologies — 9+ years in total
            building React, Next.js, Node.js, and MERN systems for startups and enterprises.
          </p>

          <p className="mb-6 leading-relaxed text-[#94a3b8]">
            His client work includes Abercrombie & Fitch (e-commerce frontend modernization),
            National Grid (enterprise tracking app with GenAI baseline hardening), Paragon Energy
            (smart meter asset management, 200k+ meters), and Refinu (serverless assessment
            platform). He specializes in React.js, Next.js, Node.js, microservices, cloud (AWS,
            GCP), and AI-native development — applying senior judgment to AI-generated code so it
            meets production standards.
          </p>

          <p className="mb-6 leading-relaxed text-[#94a3b8]">
            Philosophy: senior engineering judgment × AI velocity. He is available as a freelance
            developer and remote engineer for global clients.
          </p>

          <h2 className="mb-4 mt-12 font-sans text-2xl font-800 text-[#f1f5f9]">
            Experience
          </h2>
          <ul className="mb-12 list-none space-y-6">
            {experience.map((job) => (
              <li key={job.company}>
                <div className="font-mono text-xs text-indigo">{job.period}</div>
                <div className="font-sans font-700 text-[#f1f5f9]">{job.company}</div>
                <div className="text-sm text-[#94a3b8]">
                  {job.role} · {job.location}
                </div>
              </li>
            ))}
          </ul>

          <h2 className="mb-4 font-sans text-2xl font-800 text-[#f1f5f9]">
            Technical depth
          </h2>
          <p className="mb-4 text-[#94a3b8]">
            Frontend to backend to cloud: React.js, Next.js, Node.js, TypeScript, microservices,
            PostgreSQL, MongoDB, AWS, GCP, and AI-assisted development (Cursor AI, Copilot,
            Claude, LLM integration).
          </p>
          <div className="mb-12 flex flex-wrap gap-2">
            {skills.flatMap((g) => g.items).slice(0, 24).map((item) => (
              <span
                key={item}
                className="rounded border border-neural-border px-2 py-0.5 font-mono text-xs text-[#94a3b8]"
              >
                {item}
              </span>
            ))}
          </div>

          <p className="mb-8 text-[#94a3b8]">
            Contact:{' '}
            <a href={`mailto:${identity.email}`} className="text-indigo no-underline hover:underline">
              {identity.email}
            </a>
            ,{' '}
            <a href={identity.linkedin} target="_blank" rel="noopener noreferrer" className="text-indigo no-underline hover:underline">
              LinkedIn
            </a>
            ,{' '}
            <a href={identity.github} target="_blank" rel="noopener noreferrer" className="text-indigo no-underline hover:underline">
              GitHub
            </a>
            .
          </p>

          <Link
            href="/hire-me"
            className="inline-flex rounded-md bg-indigo px-6 py-3 font-sans font-600 text-white no-underline transition hover:opacity-90"
          >
            Hire Me
          </Link>
        </article>
      </main>
    </>
  );
}
