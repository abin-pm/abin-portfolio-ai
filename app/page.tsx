import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';
import { FadeIn } from '@/components/FadeIn';
import { Navbar } from '@/components/Navbar';
import { ScrollProgress } from '@/components/ScrollProgress';
import { TypingRole } from '@/components/TypingRole';
import { aboutCode, experiences, personalInfo, projects, skillMetrics } from '@/lib/data';

const rolePhrases = [
  'Senior Full Stack Software Engineer',
  'Next.js + Node.js Platform Specialist',
  'Developer Experience & Product Focus'
];

const toneMap = {
  blue: 'bg-vscode-blue',
  green: 'bg-vscode-green',
  purple: 'bg-vscode-purple'
};

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="mx-auto max-w-[1440px] px-3 py-6 md:px-8">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-vscode-surface shadow-glow">
          <header className="flex items-center justify-between border-b border-white/10 px-5 py-3">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
              <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
              <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
            </div>
            <p className="text-xs text-vscode-text/60">portfolio.tsx — abin-pm</p>
            <span className="w-16" />
          </header>

          <div className="h-[calc(100vh-9rem)] overflow-y-auto">
            <section id="home" className="section-shell min-h-[560px] md:min-h-[720px] scroll-mt-28">
              <div className="grid gap-8 md:grid-cols-2 md:items-center">
                <FadeIn className="space-y-5">
                  <p className="text-xs uppercase tracking-[0.28em] text-vscode-green">hero.ts</p>
                  <h1 className="text-4xl font-bold leading-tight md:text-6xl">{personalInfo.name}</h1>
                  <TypingRole phrases={rolePhrases} />
                  <p className="max-w-xl text-sm text-vscode-text/80 md:text-base">{personalInfo.intro}</p>
                  <div className="flex flex-wrap gap-3">
                    <a href="#projects" className="rounded-md bg-vscode-blue px-4 py-2 text-sm font-semibold text-vscode-bg">
                      View Projects
                    </a>
                    <a
                      href="#contact"
                      className="rounded-md border border-vscode-purple px-4 py-2 text-sm font-semibold text-vscode-purple"
                    >
                      Contact
                    </a>
                  </div>
                </FadeIn>

                <FadeIn delay={0.08} className="code-panel">
                  <p className="mb-3 text-xs text-vscode-green">$ profile</p>
                  <div className="space-y-3 text-sm text-vscode-text/80">
                    <p className="inline-flex items-center gap-2">
                      <MapPin size={14} /> {personalInfo.location}
                    </p>
                    <a className="flex items-center gap-2 hover:text-vscode-blue" href={`mailto:${personalInfo.email}`}>
                      <Mail size={14} /> {personalInfo.email}
                    </a>
                    <div className="flex gap-4 pt-2">
                      <a href={personalInfo.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-vscode-blue">
                        <Github size={18} />
                      </a>
                      <a
                        href={personalInfo.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                        className="hover:text-vscode-blue"
                      >
                        <Linkedin size={18} />
                      </a>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </section>

            <section id="about" className="section-shell min-h-[520px] md:min-h-[640px] scroll-mt-28">
              <FadeIn className="code-panel h-full">
                <p className="mb-5 text-xs uppercase tracking-[0.25em] text-vscode-green">about.ts</p>
                <div className="grid gap-6 md:grid-cols-[48px_1fr]">
                  <ol className="space-y-1 text-right text-xs text-vscode-text/35">
                    {aboutCode.map((_, idx) => (
                      <li key={`line-${idx + 1}`}>{idx + 1}</li>
                    ))}
                  </ol>
                  <div className="space-y-1 font-mono text-sm">
                    {aboutCode.map((line) => (
                      <p key={line} className="text-vscode-text/80">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </section>



            <section id="experience" className="section-shell min-h-[520px] md:min-h-[640px] scroll-mt-28">
              <FadeIn className="space-y-5">
                <p className="text-xs uppercase tracking-[0.25em] text-vscode-green">experience.log</p>
                <div className="grid gap-4 md:grid-cols-2">
                  {experiences.map((item) => (
                    <article key={`${item.company}-${item.role}`} className="code-panel space-y-3">
                      <p className="text-xs text-vscode-blue">{item.duration}</p>
                      <h3 className="text-base font-semibold text-vscode-purple">{item.role}</h3>
                      <p className="text-sm text-vscode-text/75">{item.company}</p>
                      <ul className="space-y-2 text-xs text-vscode-text/80">
                        {item.highlights.map((point) => (
                          <li key={point} className="flex gap-2">
                            <span className="text-vscode-green">▹</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="text-[11px] text-vscode-text/60">{item.tech.join(' · ')}</p>
                    </article>
                  ))}
                </div>
              </FadeIn>
            </section>

            <section id="skills" className="section-shell min-h-[480px] md:min-h-[560px] scroll-mt-28">
              <FadeIn className="code-panel h-full">
                <p className="mb-5 text-xs uppercase tracking-[0.25em] text-vscode-green">skills.sh</p>
                <div className="space-y-4 rounded-lg border border-white/10 bg-vscode-bg/65 p-5">
                  {skillMetrics.map((skill) => (
                    <div key={skill.label} className="space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span>{skill.label}</span>
                        <span className="text-vscode-text/60">{skill.level}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-vscode-surface">
                        <div className={`h-2 rounded-full ${toneMap[skill.color]}`} style={{ width: `${skill.level}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </section>

            <section id="projects" className="section-shell min-h-[560px] md:min-h-[720px] scroll-mt-28">
              <FadeIn className="space-y-5">
                <p className="text-xs uppercase tracking-[0.25em] text-vscode-green">projects.json</p>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="rounded-md border border-vscode-blue px-3 py-1 text-vscode-blue">Platform</span>
                  <span className="rounded-md border border-vscode-green px-3 py-1 text-vscode-green">Analytics</span>
                  <span className="rounded-md border border-vscode-purple px-3 py-1 text-vscode-purple">Product</span>
                </div>
                <div className="grid gap-5 md:grid-cols-3">
                  {projects.map((project, index) => (
                    <FadeIn key={project.title} delay={index * 0.05} className="code-panel">
                      <p className="mb-1 text-xs text-vscode-blue">{project.category}</p>
                      <h3 className="mb-2 text-base font-semibold text-vscode-purple">{project.title}</h3>
                      <p className="mb-3 text-xs text-vscode-text/70">{project.summary}</p>
                      <p className="text-xs text-vscode-text/80">
                        <span className="text-vscode-green">Problem:</span> {project.problem}
                      </p>
                      <p className="mt-2 text-xs text-vscode-text/80">
                        <span className="text-vscode-green">Solution:</span> {project.solution}
                      </p>
                      <p className="mt-2 text-xs text-vscode-text/80">
                        <span className="text-vscode-green">Impact:</span> {project.impact}
                      </p>
                      <p className="mt-3 text-[11px] text-vscode-text/60">{project.tech.join(' · ')}</p>
                    </FadeIn>
                  ))}
                </div>
              </FadeIn>
            </section>

            <section id="contact" className="section-shell min-h-[460px] md:min-h-[520px] scroll-mt-28">
              <div className="grid gap-6 md:grid-cols-2">
                <FadeIn className="code-panel">
                  <p className="mb-4 text-xs uppercase tracking-[0.25em] text-vscode-green">contact.sh</p>
                  <p className="text-sm text-vscode-text/80">
                    Open to senior full-stack opportunities where product quality, architecture, and execution all matter.
                  </p>
                  <div className="mt-4 space-y-2 text-sm">
                    <a className="block hover:text-vscode-blue" href={`mailto:${personalInfo.email}`}>
                      {personalInfo.email}
                    </a>
                    <a className="block hover:text-vscode-blue" href={personalInfo.linkedin} target="_blank" rel="noreferrer">
                      LinkedIn
                    </a>
                    <a className="block hover:text-vscode-blue" href={personalInfo.github} target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                  </div>
                </FadeIn>
                <FadeIn delay={0.05}>
                  <ContactForm />
                </FadeIn>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
