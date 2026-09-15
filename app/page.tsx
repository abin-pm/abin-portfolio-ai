import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Abin PM | Senior Full Stack Developer',
  description:
    'Abin PM is a Senior Full Stack Developer building scalable React, Next.js, Node.js, and AI-powered web applications.',
};

const skills = [
  ['⚛', 'React.js', '90%'], ['N', 'Next.js', '85%'], ['⬡', 'Node.js', '88%'],
  ['TS', 'TypeScript', '88%'], ['☁', 'AWS & GCP', '82%'], ['◈', 'Microservices', '86%'],
];

const projects = [
  { number: '01', client: 'Abercrombie & Fitch · USA', title: 'E-Commerce Modernization', description: 'Migrated a legacy Java frontend to scalable React micro-frontends.', tags: ['React', 'TypeScript', 'Micro-frontends'] },
  { number: '02', client: 'National Grid · USA', title: 'Enterprise Tracking App', description: 'Modernized a legacy desktop system into a reliable web platform.', tags: ['React', 'Node.js', 'GenAI'] },
  { number: '03', client: 'Paragon Energy · UK', title: 'Smart Meter Platform', description: 'Asset-management workflows for more than 200,000 smart meters.', tags: ['React', 'AWS', 'Elasticsearch'] },
];

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Abin PM',
  jobTitle: 'Senior Full Stack Software Engineer',
  url: 'https://abinpm.dev',
  image: 'https://abinpm.dev/profile-placeholder.svg',
  sameAs: ['https://www.linkedin.com/in/abin-p-m-/'],
};

export default function HomePage() {
  return (
    <>
      <header className="portfolio-nav">
        <a className="brand" href="#home"><span>&lt;/&gt;</span> Abin<span>PM</span></a>
        <nav aria-label="Primary navigation">
          <a href="#home">Home</a><a href="#about">About</a><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#contact">Contact</a>
        </nav>
        <a className="nav-hire" href="#contact">Hire Me <b>↗</b></a>
      </header>

      <main>
        <section className="showcase-hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow">I&apos;M A FULL STACK DEVELOPER</p>
            <h1>Hi, I&apos;m <em>Abin.</em><br />I build things for the web.</h1>
            <p className="hero-summary">I&apos;m a Senior Full Stack Developer with 9+ years of experience building reliable, high-impact digital products with modern web technologies.</p>
            <div className="hero-actions"><a className="primary-action" href="#projects">View My Work <span>↗</span></a><a className="secondary-action" href="mailto:abinpm92@gmail.com">Get in Touch <span>↓</span></a></div>
            <div className="tech-list"><span>TECHNOLOGIES I WORK WITH</span><div><i>⚛</i><i>TS</i><i>JS</i><i>⬡</i><i>☁</i><i>◆</i></div></div>
          </div>
          <div className="hero-portrait" aria-label="Portrait of Abin PM">
            <div className="portrait-orbit" /><div className="portrait-glow" />
            <Image src="/profile-placeholder.svg" alt="Abin PM" width={700} height={780} priority />
            <div className="photo-fallback" aria-hidden="true"><span>AP</span><small>ABIN PM</small></div>
            <div className="code-card"><small><b>●</b> /&gt; profile.ts</small><code>const developer = &#123;<br />&nbsp;name: <strong>&apos;Abin&apos;</strong>,<br />&nbsp;skills: [<strong>&apos;React&apos;</strong>, <strong>&apos;Node&apos;</strong>],<br />&nbsp;passion: <strong>&apos;building the web&apos;</strong><br />&#125;;</code></div>
          </div>
        </section>

        <section className="about-band" id="about">
          <div className="about-copy"><p className="eyebrow">ABOUT ME</p><h2>I&apos;m passionate about creating digital solutions.</h2><p>I combine thoughtful engineering with a product mindset to turn complex ideas into fast, accessible, user-friendly applications.</p><a className="text-button" href="#contact">Let&apos;s work together <span>↗</span></a></div>
          <div className="stat-grid"><div><b>9<span>+</span></b><p>Years Experience</p></div><div><b>15<span>+</span></b><p>Projects Delivered</p></div><div><b>4</b><p>Companies</p></div><div><b>3</b><p>Cloud Platforms</p></div></div>
        </section>

        <section className="skills-section" id="skills"><p className="eyebrow centered">MY SKILLS</p><h2 className="centered">Technologies I Master</h2><div className="skill-grid">{skills.map(([icon, name, level]) => <article className="skill-row" key={name}><div><i>{icon}</i><b>{name}</b><span>{level}</span></div><div className="meter"><span style={{ width: level }} /></div></article>)}</div></section>

        <section className="projects-section" id="projects"><p className="eyebrow centered">FEATURED PROJECTS</p><h2 className="centered">Some of My Recent Work</h2><div className="project-grid">{projects.map((project) => <article className="featured-project" key={project.number}><div className="project-visual"><span>{project.number}</span><div className="project-mark">&lt;/&gt;</div></div><div className="project-body"><p>{project.client}</p><h3>{project.title}</h3><div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="project-footer"><small>{project.description}</small><a href="#contact">View project ↗</a></div></div></article>)}</div></section>

        <section className="contact-band" id="contact"><div><p className="eyebrow">LET&apos;S WORK TOGETHER</p><h2>Have a project in mind?</h2><p>I&apos;m open to freelance, remote roles, and consulting engagements. Let&apos;s create something exceptional.</p><a className="primary-action" href="mailto:abinpm92@gmail.com">Get In Touch <span>↗</span></a></div><aside className="contact-card"><p className="quote">“</p><p>Abin pairs strong full-stack engineering with the care and clarity teams need to ship quality products.</p><b>Available for new opportunities</b><a href="https://www.linkedin.com/in/abin-p-m-/" target="_blank" rel="noreferrer">Connect on LinkedIn ↗</a></aside></section>
      </main>
      <footer><span>© 2026 Abin PM. All rights reserved.</span><span>Built with React, Next.js &amp; care.</span></footer>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
    </>
  );
}
