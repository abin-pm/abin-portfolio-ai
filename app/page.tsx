import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'Abin PM | Senior Full Stack Developer & MERN Stack Expert | React, Node.js, AI-Powered Development',
  description:
    'Hire Abin PM — Senior Full Stack Developer with 9+ years experience in React.js, Next.js, Node.js, MERN Stack, Microservices & AI-assisted development. Available for freelance on Upwork & Fiverr. Based in Kochi, India.',
  keywords: [
    'full stack developer',
    'MERN stack developer',
    'React.js developer',
    'Node.js developer',
    'Next.js developer',
    'freelance full stack developer',
    'senior software engineer India',
    'Kochi developer',
    'microservices developer',
    'TypeScript developer',
    'AWS developer',
    'cloud developer',
    'AI-assisted developer',
  ],
  authors: [{ name: 'Abin PM' }],
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://abinpm.dev/' },
  openGraph: {
    type: 'website',
    title: 'Abin PM | Senior Full Stack Developer — React, Node.js, MERN, AI',
    description:
      '9+ years building scalable enterprise web apps. React.js, Next.js, Node.js, Microservices, AWS. Available for freelance.',
    url: 'https://abinpm.dev/',
    images: ['https://abinpm.dev/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abin PM | Senior Full Stack Developer',
    description: '9+ years React.js, Node.js, MERN Stack, Microservices, AWS. Open for freelance work.',
  },
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Abin PM',
  jobTitle: 'Senior Full Stack Software Engineer',
  description:
    'Senior Full Stack Developer with 9+ years experience in React.js, Next.js, Node.js, MERN Stack, Microservices, and AI-assisted development.',
  url: 'https://abinpm.dev',
  image: 'https://abinpm.dev/logo.svg',
  logo: 'https://abinpm.dev/logo.svg',
  email: 'abinpm92@gmail.com',
  telephone: '+91-9895661651',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kochi',
    addressRegion: 'Kerala',
    addressCountry: 'IN',
  },
  sameAs: ['https://www.linkedin.com/in/abin-p-m-/'],
  knowsAbout: [
    'React.js',
    'Next.js',
    'Node.js',
    'MERN Stack',
    'TypeScript',
    'Microservices',
    'AWS',
    'GCP',
    'GraphQL',
    'MongoDB',
    'PostgreSQL',
  ],
};


const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Abin PM Portfolio',
  url: 'https://abinpm.dev/',
  description:
    'Senior Full Stack Developer portfolio showcasing React, Next.js, Node.js, and AI-powered engineering work.',
  publisher: {
    '@type': 'Person',
    name: 'Abin PM',
    logo: {
      '@type': 'ImageObject',
      url: 'https://abinpm.dev/logo.svg',
    },
  },
};

export default function HomePage() {
  const tickerItems = [
    'React.js',
    'Next.js',
    'Node.js',
    'TypeScript',
    'Microservices',
    'AWS',
    'GraphQL',
    'MongoDB',
    'PostgreSQL',
    'Docker',
    'Kubernetes',
    'AI Dev',
  ];

  return (
    <>
      <nav>
        <a className="nav-logo" href="#hero">
          abin<span>.</span>pm
        </a>
        <ul className="nav-links">
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#hire">Hire Me</a></li>
          <li><a href="#contact" className="nav-cta">Contact</a></li>
        </ul>
      </nav>

      <main>
        <section id="hero" className="hero">
          <div className="hero-grid-bg" />
          <div className="hero-glow" />
          <div className="hero-glow2" />
          <div className="hero-content">
            <div className="hero-badge"><span className="badge-dot" />AVAILABLE FOR FREELANCE &amp; FULL-TIME REMOTE</div>
            <h1 className="hero-name"><span className="line1">Senior Full Stack</span><br /><span className="line2">&amp; <span className="accent-word">MERN</span> Developer</span></h1>
            <p className="hero-tagline"><strong>Abin PM</strong> — 9+ years building scalable enterprise web platforms. React.js · Next.js · Node.js · Microservices · AI-Assisted Dev. Trusted by IBM, Abercrombie &amp; Fitch, National Grid &amp; more.</p>
            <div className="hero-ctas"><a href="#projects" className="btn-primary"><span>View Work</span><span>→</span></a><a href="mailto:abinpm92@gmail.com" className="btn-secondary"><span>Get in Touch</span></a><a href="https://www.linkedin.com/in/abin-p-m-/" target="_blank" rel="noopener" className="btn-secondary">LinkedIn ↗</a></div>
            <div className="hero-stats"><div><div className="stat-num">9<span>+</span></div><div className="stat-label">Years Experience</div></div><div><div className="stat-num">15<span>+</span></div><div className="stat-label">Projects Delivered</div></div><div><div className="stat-num">4</div><div className="stat-label">Companies</div></div><div><div className="stat-num">3</div><div className="stat-label">Cloud Platforms</div></div></div>
          </div>
        </section>

        <div className="ticker-wrap"><div className="ticker-track">{[...tickerItems, ...tickerItems].map((item, i) => <span key={`${item}-${i}`} className="ticker-item">{item} <span className="ticker-sep">✦</span></span>)}</div></div>

        <section id="skills"><div className="section-inner"><div className="section-label fade-in">Technical Arsenal</div><h2 className="section-title fade-in">What I Build With</h2><p className="section-sub fade-in">A full-spectrum stack from pixel-perfect UIs to cloud-native distributed backends.</p><div className="skills-grid fade-in"><div className="skill-card"><div className="skill-card-icon">⚡</div><div className="skill-card-title">Frontend</div><div className="skill-tags"><span className="tag hot">React.js</span><span className="tag hot">Next.js</span><span className="tag hot">TypeScript</span><span className="tag">Redux</span><span className="tag">Micro-Frontend</span><span className="tag">Tailwind CSS</span><span className="tag">HTML5</span><span className="tag">CSS3</span></div></div><div className="skill-card"><div className="skill-card-icon">🔧</div><div className="skill-card-title">Backend &amp; APIs</div><div className="skill-tags"><span className="tag hot">Node.js</span><span className="tag hot">Express.js</span><span className="tag hot">Microservices</span><span className="tag">REST APIs</span><span className="tag">GraphQL</span><span className="tag">C#</span><span className="tag">.NET Core</span></div></div><div className="skill-card"><div className="skill-card-icon">🗄️</div><div className="skill-card-title">Databases</div><div className="skill-tags"><span className="tag hot">MongoDB</span><span className="tag hot">PostgreSQL</span><span className="tag">MySQL</span><span className="tag">Firestore</span><span className="tag">Redis</span><span className="tag">Elasticsearch</span><span className="tag">Kafka</span><span className="tag">RabbitMQ</span></div></div><div className="skill-card"><div className="skill-card-icon">☁️</div><div className="skill-card-title">Cloud &amp; DevOps</div><div className="skill-tags"><span className="tag blue">AWS</span><span className="tag blue">GCP</span><span className="tag blue">Azure</span><span className="tag">Docker</span><span className="tag">Kubernetes</span><span className="tag">CI/CD</span><span className="tag">Serverless</span></div></div><div className="skill-card"><div className="skill-card-icon">🤖</div><div className="skill-card-title">AI-Assisted Development</div><div className="skill-tags"><span className="tag purple">Cursor AI</span><span className="tag purple">GitHub Copilot</span><span className="tag purple">Claude</span><span className="tag purple">OpenAI Codex</span><span className="tag purple">LLM Integration</span><span className="tag purple">GenAI Code Review</span></div></div><div className="skill-card"><div className="skill-card-icon">🧪</div><div className="skill-card-title">Testing &amp; Tooling</div><div className="skill-tags"><span className="tag">Jest</span><span className="tag">Vitest</span><span className="tag">ESLint</span><span className="tag">GitHub</span><span className="tag">Bitbucket</span><span className="tag">Jira</span><span className="tag">Agile/Scrum</span></div></div></div></div></section>
        <section id="experience"><div className="section-inner"><div className="section-label fade-in">Career Timeline</div><h2 className="section-title fade-in">Work Experience</h2><p className="section-sub fade-in">9+ years across startups, agencies, and enterprise tech giants.</p><div className="exp-timeline"><div className="exp-item fade-in"><div className="exp-dot" /><div className="exp-period">SEP 2024 — PRESENT</div><div className="exp-company">IBM India Pvt Ltd</div><div className="exp-role">Senior Application Developer (Full Stack &amp; Cloud) · Kochi, India</div><ul className="exp-bullets"><li>Modernized enterprise frontend systems by migrating legacy apps to React.js Micro-Frontend architecture, improving scalability and modular deployments.</li><li>Leveraged AI-assisted tools (Cursor, GitHub Copilot, Claude) to accelerate code generation, debugging, and refactoring across React &amp; Node.js services.</li><li>Stabilized GenAI-generated application components, enforcing enterprise coding standards and microservices best practices.</li><li>Collaborated with US-based stakeholders in Agile/Scrum teams to deliver high-value enterprise features at pace.</li></ul></div><div className="exp-item fade-in"><div className="exp-dot" /><div className="exp-period">SEP 2020 — SEP 2024</div><div className="exp-company">Emvigo Technologies</div><div className="exp-role">Team Lead / Senior Software Engineer · Kochi, India</div><ul className="exp-bullets"><li>Led end-to-end full stack development using React.js, Next.js, Node.js, and microservices-based architectures.</li><li>Built data-intensive platforms integrating PostgreSQL, MongoDB, Firestore, REST &amp; GraphQL APIs.</li><li>Delivered cloud-ready systems on AWS and GCP with CI/CD pipelines and production monitoring.</li><li>Mentored junior engineers and collaborated with UK &amp; international clients on solution architecture.</li></ul></div><div className="exp-item fade-in"><div className="exp-dot" /><div className="exp-period">JAN 2018 — SEP 2020</div><div className="exp-company">Luminescent Software</div><div className="exp-role">Software Engineer (Full Stack) · Thiruvananthapuram, India</div><ul className="exp-bullets"><li>Developed responsive SPAs using React.js, Redux, and Next.js with Node.js/Express backends.</li><li>Improved production stability through systematic debugging, performance tuning, and feature delivery.</li></ul></div><div className="exp-item fade-in"><div className="exp-dot" /><div className="exp-period">MAY 2016 — DEC 2017</div><div className="exp-company">Ocuiz Technologies</div><div className="exp-role">Software Engineer · Thrissur, India</div><ul className="exp-bullets"><li>Supported full stack development across frontend, backend, and database layers for production web applications.</li><li>Improved system reliability by resolving bugs and optimizing legacy code alongside senior engineers.</li></ul></div></div></div></section>
        <section id="projects"><div className="section-inner"><div className="section-label fade-in">Selected Work</div><h2 className="section-title fade-in">Key Projects</h2><p className="section-sub fade-in">Enterprise-scale platforms shipped for global clients across retail, energy, and SaaS.</p><div className="projects-grid"><div className="project-card fade-in"><div className="project-client">Abercrombie &amp; Fitch Co. · USA</div><div className="project-name">E-Commerce Frontend Modernization</div><div className="project-desc">Migrated legacy Java-based frontend to a React.js Micro-Frontend architecture. Built the My List (Wishlist) feature, and revamped the Global Config Hub migrating to PrimeReact for consistency across the enterprise e-commerce platform.</div><div className="project-impact">⚡ Parallel deployments · Improved UI scalability · Reduced release friction</div><div className="project-stack"><span className="stack-tag">React.js</span><span className="stack-tag">Micro-Frontend</span><span className="stack-tag">PrimeReact</span><span className="stack-tag">TypeScript</span></div></div><div className="project-card fade-in"><div className="project-client">National Grid · USA</div><div className="project-name">Enterprise Tracking Application</div><div className="project-desc">Modernized a legacy SAS-based desktop system into a React.js + Node.js web platform using GenAI-assisted code generation as baseline. Refactored AI-generated components to meet enterprise architecture and production reliability standards.</div><div className="project-impact">🏢 Legacy → modern web · Enterprise-grade reliability · GenAI code stabilization</div><div className="project-stack"><span className="stack-tag">React.js</span><span className="stack-tag">Node.js</span><span className="stack-tag">.NET Core</span><span className="stack-tag">GenAI</span></div></div><div className="project-card fade-in"><div className="project-client">Paragon Energy · UK</div><div className="project-name">Smart Meter Asset Management Platform</div><div className="project-desc">Built a large-scale energy asset management platform managing 200,000+ smart meters. Led a frontend team of 3 engineers. Workflow automation dramatically cut operational turnaround times, demonstrating measurable business impact.</div><div className="project-impact">🚀 96 hours → 2 hours operational turnaround · 200k+ meters managed</div><div className="project-stack"><span className="stack-tag">React.js</span><span className="stack-tag">Node.js</span><span className="stack-tag">MySQL</span><span className="stack-tag">Elasticsearch</span><span className="stack-tag">AWS</span></div></div><div className="project-card fade-in"><div className="project-client">Refinu · SaaS</div><div className="project-name">Personality Assessment Platform</div><div className="project-desc">Architected a serverless microservices platform on Google Cloud. Implemented personalized assessment workflows, push notification system for engagement, and led requirement discussions end-to-end with stakeholders.</div><div className="project-impact">☁️ Serverless architecture · Push notification system · Full ownership from design to deploy</div><div className="project-stack"><span className="stack-tag">React</span><span className="stack-tag">Node.js</span><span className="stack-tag">Firestore</span><span className="stack-tag">GCP</span><span className="stack-tag">Cloud Functions</span></div></div></div></div></section>
        <section id="hire"><div className="section-inner"><div className="section-label fade-in">Freelance &amp; Remote</div><h2 className="section-title fade-in">Available for Hire</h2><p className="section-sub fade-in">Open to freelance contracts, remote roles, and consulting engagements globally.</p><div className="avail-strip fade-in"><span className="avail-dot" /><span className="avail-text"><strong>Currently Available</strong> — Open for new projects &amp; remote full-time roles</span></div><div className="platforms-grid fade-in"><div className="platform-card"><div className="platform-icon">💼</div><div className="platform-name">Upwork</div><div className="platform-desc">Senior Full Stack Developer · MERN · React · Node.js</div></div><div className="platform-card"><div className="platform-icon">🎯</div><div className="platform-name">Fiverr</div><div className="platform-desc">React.js / Next.js Expert · API Development · Cloud Setup</div></div><div className="platform-card"><div className="platform-icon">🤝</div><div className="platform-name">LinkedIn</div><div className="platform-desc">Open to remote full-time &amp; contract opportunities</div></div><div className="platform-card"><div className="platform-icon">📧</div><div className="platform-name">Direct Hire</div><div className="platform-desc">Reach out directly — fastest response guaranteed</div></div></div><div className="section-label fade-in ai-label">AI-Accelerated Development</div><p className="ai-desc fade-in">I leverage the latest AI tools to ship faster without sacrificing code quality — giving you enterprise-grade output at freelance speed.</p><div className="ai-row fade-in"><span className="ai-pill">🤖 Cursor AI</span><span className="ai-pill">🐙 GitHub Copilot</span><span className="ai-pill">✦ Claude</span><span className="ai-pill">⚡ OpenAI Codex</span><span className="ai-pill">🧠 LLM-Assisted Dev</span></div></div></section>
        <section id="contact"><div className="contact-inner"><div className="section-label fade-in center">Let&apos;s Build Something</div><h2 className="contact-title fade-in">Got a project<br /><span className="hollow">in mind?</span></h2><p className="contact-sub fade-in">Whether it&apos;s a greenfield product, a modernization project, or a tricky bug — I&apos;m ready.</p><div className="contact-links fade-in"><a href="mailto:abinpm92@gmail.com" className="contact-link">✉️ abinpm92@gmail.com</a><a href="tel:+919895661651" className="contact-link">📞 +91 9895 661 651</a><a href="https://www.linkedin.com/in/abin-p-m-/" target="_blank" rel="noopener" className="contact-link">💼 LinkedIn</a></div></div></section>
      </main>

      <footer><div className="footer-copy">© 2026 Abin PM · Senior Full Stack Developer · Kochi, Kerala, India</div><div className="footer-seo-links"><a href="#skills">React.js Developer</a><a href="#skills">MERN Stack Expert</a><a href="#skills">Node.js Developer</a><a href="#hire">Freelance Developer</a><a href="#projects">Full Stack Portfolio</a></div></footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
    </>
  );
}
