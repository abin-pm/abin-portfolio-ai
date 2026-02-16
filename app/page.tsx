import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';
import { Navbar } from '@/components/Navbar';
import { ScrollProgress } from '@/components/ScrollProgress';
import { SectionTitle } from '@/components/SectionTitle';
import { TypingRole } from '@/components/TypingRole';
import { experiences, personalInfo, projects, strengths, techStack } from '@/lib/data';

const rolePhrases = [
  'Senior Full Stack Software Engineer',
  'Product-Minded Platform Builder',
  'Scalable Systems & UX Enthusiast'
];

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <section id="home" className="section-shell min-h-[80vh] scroll-mt-24 flex items-center">
          <div className="grid gap-10 md:grid-cols-[1.3fr_1fr] md:items-center">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.3em] text-vscode-green">console.log('hello, recruiter')</p>
              <h1 className="text-4xl font-bold leading-tight text-vscode-text md:text-6xl">{personalInfo.name}</h1>
              <TypingRole phrases={rolePhrases} />
              <p className="max-w-2xl text-sm text-vscode-text/80 md:text-base">{personalInfo.summary}</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="rounded-md bg-vscode-blue px-4 py-2 text-sm font-semibold text-vscode-bg transition hover:brightness-110"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="rounded-md border border-vscode-purple px-4 py-2 text-sm font-semibold text-vscode-purple transition hover:bg-vscode-purple hover:text-vscode-bg"
                >
                  Contact
                </a>
              </div>
              <div className="flex items-center gap-4 text-vscode-text/70">
                <a href={personalInfo.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-vscode-blue">
                  <Github size={20} />
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-vscode-blue">
                  <Linkedin size={20} />
                </a>
                <span className="inline-flex items-center gap-2 text-xs md:text-sm">
                  <MapPin size={16} />
                  {personalInfo.location}
                </span>
              </div>
            </div>

            <aside className="code-panel">
              <p className="mb-3 text-xs text-vscode-green">/intro.ts</p>
              <pre className="overflow-x-auto text-xs text-vscode-text/85 md:text-sm">
{`const engineer = {
  name: 'Abin P M',
  focus: ['Next.js', 'TypeScript', 'Node.js'],
  mindset: 'impact > output',
  principle: 'build for scale and clarity'
};`}
              </pre>
            </aside>
          </div>
        </section>

        <section className="section-shell space-y-8" aria-labelledby="about">
          <SectionTitle id="about" title="About" eyebrow="Who I Am">
            I bring a builder's mindset to product engineering—balancing architecture, UX, and delivery to create systems teams trust and users enjoy.
          </SectionTitle>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="code-panel space-y-3">
              <h3 className="text-lg font-semibold text-vscode-purple">Professional Story</h3>
              <p className="text-sm text-vscode-text/80">
                Over the past several years, I have led and contributed to full-stack products spanning finance, automotive intelligence, and SaaS workflows. My work centers on creating dependable platforms that are easy to evolve and fast to ship.
              </p>
              <p className="text-sm text-vscode-text/80">
                I enjoy turning ambiguous requirements into clear roadmaps, shipping with engineering rigor, and continuously improving the developer experience.
              </p>
            </article>
            <article className="code-panel space-y-3">
              <h3 className="text-lg font-semibold text-vscode-purple">Core Strengths</h3>
              <ul className="space-y-2 text-sm text-vscode-text/85">
                {strengths.map((strength) => (
                  <li key={strength} className="flex gap-2">
                    <span className="mt-1 text-vscode-green">▹</span>
                    <span>{strength}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
          <article className="code-panel">
            <h3 className="mb-4 text-lg font-semibold text-vscode-purple">Tech Stack Snapshot</h3>
            <div className="grid gap-4 text-sm md:grid-cols-2">
              {Object.entries(techStack).map(([label, items]) => (
                <div key={label}>
                  <p className="mb-2 capitalize text-vscode-green">{label}</p>
                  <p className="text-vscode-text/80">{items.join(' • ')}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-vscode-text/60">
              Philosophy: Build maintainable systems, document decisions, and optimize for long-term product value.
            </p>
          </article>
        </section>

        <section className="section-shell space-y-8" aria-labelledby="experience">
          <SectionTitle id="experience" title="Experience" eyebrow="Career Highlights">
            Impact-led roles across product engineering, platform architecture, and modern web delivery.
          </SectionTitle>
          <div className="space-y-5">
            {experiences.map((item) => (
              <article key={item.role + item.company} className="code-panel space-y-4 transition hover:-translate-y-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold text-vscode-purple">{item.role}</h3>
                  <p className="text-xs text-vscode-text/65">{item.duration}</p>
                </div>
                <p className="text-sm text-vscode-blue">{item.company}</p>
                <ul className="space-y-2 text-sm text-vscode-text/85">
                  {item.achievements.map((achievement) => (
                    <li key={achievement} className="flex gap-2">
                      <span className="mt-1 text-vscode-green">▹</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-vscode-text/65">Tech: {item.technologies.join(' · ')}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell space-y-8" aria-labelledby="projects">
          <SectionTitle id="projects" title="Projects" eyebrow="Selected Work">
            Projects framed by business need, engineering approach, and measurable value.
          </SectionTitle>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article key={project.title} className="code-panel space-y-3">
                <h3 className="text-lg font-semibold text-vscode-purple">{project.title}</h3>
                <p className="text-sm text-vscode-text/80">
                  <span className="text-vscode-green">Problem:</span> {project.problem}
                </p>
                <p className="text-sm text-vscode-text/80">
                  <span className="text-vscode-green">Solution:</span> {project.solution}
                </p>
                <p className="text-sm text-vscode-text/80">
                  <span className="text-vscode-green">Impact:</span> {project.impact}
                </p>
                <p className="text-xs text-vscode-text/65">Stack: {project.tech.join(' · ')}</p>
                <div className="flex gap-3 text-xs">
                  {project.github ? (
                    <a href={project.github} target="_blank" rel="noreferrer" className="text-vscode-blue hover:underline">
                      GitHub
                    </a>
                  ) : null}
                  {project.live ? (
                    <a href={project.live} target="_blank" rel="noreferrer" className="text-vscode-blue hover:underline">
                      Live Demo
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell space-y-8" aria-labelledby="contact">
          <SectionTitle id="contact" title="Contact" eyebrow="Let's Build">
            Open to senior engineering opportunities, product-focused teams, and high-impact collaborations.
          </SectionTitle>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="code-panel space-y-4">
              <a className="flex items-center gap-2 text-sm text-vscode-text/90" href={`mailto:${personalInfo.email}`}>
                <Mail size={16} className="text-vscode-green" />
                {personalInfo.email}
              </a>
              <a href={personalInfo.linkedin} className="block text-sm text-vscode-blue hover:underline" target="_blank" rel="noreferrer">
                LinkedIn Profile
              </a>
              <a href={personalInfo.github} className="block text-sm text-vscode-blue hover:underline" target="_blank" rel="noreferrer">
                GitHub Profile
              </a>
              <p className="text-sm text-vscode-text/70">If you're hiring for impactful full-stack roles, I'd love to connect.</p>
            </article>
            <ContactForm />
          </div>
        </section>
      </main>
    </>
  );
}
