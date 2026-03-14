export const stats = [
  { value: '9+', label: 'Years Experience' },
  { value: '15+', label: 'Projects Delivered' },
  { value: '4', label: 'Companies' },
  { value: '3', label: 'Cloud Platforms' },
];

export const aiTools = [
  {
    name: 'Cursor AI',
    role: 'Primary IDE',
    description:
      'Daily driver for AI-assisted coding, refactoring, and code generation at IBM',
  },
  {
    name: 'GitHub Copilot',
    role: 'Code Completion',
    description:
      'Inline suggestions across React and Node.js codebases',
  },
  {
    name: 'Claude',
    role: 'Architecture & Review',
    description:
      'Complex problem solving, code review, and GenAI component stabilization',
  },
  {
    name: 'OpenAI Codex',
    role: 'LLM Integration',
    description:
      'API integration and AI feature development for client products',
  },
  {
    name: 'v0 by Vercel',
    role: 'UI Generation',
    description:
      'Rapid UI scaffolding accelerating frontend delivery',
  },
];

export const aiStats = [
  { value: '3–5×', label: 'Faster delivery vs traditional' },
  { value: '2024', label: 'AI-native since' },
  { value: '100%', label: 'Production-grade output' },
  { value: 'IBM', label: 'Enterprise AI-dev context' },
];

export const techTicker = [
  'React.js',
  'Next.js',
  'Node.js',
  'TypeScript',
  'Cursor AI',
  'GitHub Copilot',
  'Claude',
  'Microservices',
  'AWS',
  'GraphQL',
  'MongoDB',
  'Docker',
  'Kubernetes',
  'LLM Integration',
  'GenAI',
  'PostgreSQL',
  'GCP',
  'Tailwind',
  'Redis',
  'Elasticsearch',
  '.NET Core',
  'CI/CD',
];

export const aiTickerRow = [
  'Cursor AI',
  'GitHub Copilot',
  'Claude',
  'OpenAI Codex',
  'LLM Integration',
  'GenAI',
];

export type SkillGroup = {
  icon: string;
  title: string;
  items: string[];
  highlight?: boolean;
  highlightLabel?: string;
};

export const skills: SkillGroup[] = [
  {
    icon: '⚡',
    title: 'Frontend',
    items: [
      'React.js',
      'Next.js',
      'TypeScript',
      'Redux',
      'Micro-Frontend',
      'Tailwind CSS',
      'HTML5',
      'CSS3',
    ],
  },
  {
    icon: '🔧',
    title: 'Backend & APIs',
    items: [
      'Node.js',
      'Express.js',
      'Microservices',
      'REST APIs',
      'GraphQL',
      'C#',
      '.NET Core',
    ],
  },
  {
    icon: '🗄️',
    title: 'Databases',
    items: [
      'MongoDB',
      'PostgreSQL',
      'MySQL',
      'Firestore',
      'Redis',
      'Elasticsearch',
      'Kafka',
      'RabbitMQ',
    ],
  },
  {
    icon: '☁️',
    title: 'Cloud & DevOps',
    items: [
      'AWS',
      'GCP',
      'Azure',
      'Docker',
      'Kubernetes',
      'CI/CD',
      'Serverless',
    ],
  },
  {
    icon: '🤖',
    title: 'AI-Native Development',
    highlight: true,
    highlightLabel: 'Core differentiator',
    items: [
      'Cursor AI',
      'GitHub Copilot',
      'Claude',
      'OpenAI Codex',
      'LLM Integration',
      'GenAI Code Review',
      'Prompt Engineering',
      'AI-Assisted Architecture',
    ],
  },
  {
    icon: '🧪',
    title: 'Testing & Tooling',
    items: [
      'Jest',
      'Vitest',
      'ESLint',
      'GitHub',
      'Bitbucket',
      'Jira',
      'Agile/Scrum',
    ],
  },
];

export type ExperienceItem = {
  period: string;
  company: string;
  role: string;
  location: string;
  current?: boolean;
  aiRole?: boolean;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    period: 'Sep 2024 — Present',
    company: 'IBM India Pvt Ltd',
    role: 'Senior Application Developer (Full Stack & Cloud)',
    location: 'Kochi, India',
    current: true,
    aiRole: true,
    bullets: [
      'Modernized enterprise frontend by migrating legacy apps to React.js Micro-Frontend architecture',
      'Used Cursor AI, GitHub Copilot & Claude daily — accelerating code generation, debugging, refactoring',
      'Stabilized and hardened GenAI-generated application components to enterprise production standards',
      'Collaborated with US stakeholders in Agile/Scrum teams delivering high-value enterprise features',
    ],
  },
  {
    period: 'Sep 2020 — Sep 2024',
    company: 'Emvigo Technologies',
    role: 'Team Lead / Senior Software Engineer',
    location: 'Kochi, India',
    bullets: [
      'Led full stack development: React.js, Next.js, Node.js, microservices-based architectures',
      'Built data-intensive platforms: PostgreSQL, MongoDB, Firestore, REST & GraphQL APIs',
      'Delivered cloud systems on AWS & GCP with CI/CD pipelines and production monitoring',
      'Mentored engineers; worked with UK & international clients on solution architecture',
    ],
  },
  {
    period: 'Jan 2018 — Sep 2020',
    company: 'Luminescent Software',
    role: 'Software Engineer (Full Stack)',
    location: 'Thiruvananthapuram, India',
    bullets: [
      'Built SPAs: React.js, Redux, Next.js with Node.js/Express backends',
      'Improved production stability through debugging, performance tuning, and feature delivery',
    ],
  },
  {
    period: 'May 2016 — Dec 2017',
    company: 'Ocuiz Technologies',
    role: 'Software Engineer',
    location: 'Thrissur, India',
    bullets: [
      'Full stack development across frontend, backend, and database layers',
      'Resolved bugs and optimized legacy code alongside senior engineers',
    ],
  },
];

export type ProjectItem = {
  flag: string;
  client: string;
  title: string;
  description: string;
  impact: string[];
  tags: string[];
  aiAssisted?: boolean;
  aiNote?: string;
};

export const projects: ProjectItem[] = [
  {
    flag: '🇺🇸',
    client: 'Abercrombie & Fitch',
    title: 'E-Commerce Frontend Modernization',
    description:
      'Migrated legacy Java-based frontend to React.js Micro-Frontend architecture. Built Wishlist feature and revamped Global Config Hub with PrimeReact.',
    impact: [
      'Parallel deployments across teams',
      'Improved UI scalability',
      'Reduced release friction',
    ],
    tags: ['React.js', 'Micro-Frontend', 'PrimeReact', 'TypeScript'],
    aiAssisted: false,
  },
  {
    flag: '🇺🇸',
    client: 'National Grid',
    title: 'Enterprise Tracking Application',
    description:
      'Modernized legacy SAS desktop system to React.js + Node.js web platform. Used GenAI-assisted code generation as baseline, then refactored to enterprise production standards.',
    impact: [
      'Legacy → modern web platform',
      'Enterprise-grade reliability',
      'GenAI baseline → production hardened',
    ],
    tags: ['React.js', 'Node.js', '.NET Core', 'GenAI'],
    aiAssisted: true,
    aiNote: 'GenAI-assisted development',
  },
  {
    flag: '🇬🇧',
    client: 'Paragon Energy',
    title: 'Smart Meter Asset Management',
    description:
      'Large-scale energy asset management platform managing 200,000+ smart meters. Led frontend team of 3. Workflow automation cut operational turnaround times dramatically.',
    impact: [
      '96 hours → 2 hours turnaround',
      '200,000+ smart meters managed',
      'Led frontend team of 3',
    ],
    tags: ['React.js', 'Node.js', 'MySQL', 'Elasticsearch', 'AWS'],
    aiAssisted: false,
  },
  {
    flag: '🌐',
    client: 'Refinu SaaS',
    title: 'Personality Assessment Platform',
    description:
      'Serverless microservices on Google Cloud. Personalized assessment workflows, push notifications, full ownership from design to deploy.',
    impact: [
      'Full ownership design to deploy',
      'Serverless microservices architecture',
      'Push notification system',
    ],
    tags: ['React', 'Node.js', 'Firestore', 'GCP', 'Cloud Functions'],
    aiAssisted: false,
  },
];

export type FAQItem = {
  q: string;
  a: string;
};

export const faq: FAQItem[] = [
  {
    q: 'What services does Abin PM offer as a freelance developer?',
    a: "Abin offers end-to-end full stack development — React.js/Next.js frontend, Node.js backend, MERN stack apps, cloud deployment on AWS/GCP, microservices, and AI-assisted development using Cursor AI, Copilot & Claude. Available for freelance contracts and remote roles globally.",
  },
  {
    q: 'What is an AI-native developer and why does it matter?',
    a: "An AI-native developer deeply integrates tools like Cursor AI, GitHub Copilot, and Claude into every stage of development — not as a shortcut, but as a force multiplier. Abin has used these tools in production at IBM since 2024, delivering enterprise-grade output at significantly faster timelines.",
  },
  {
    q: 'How much does it cost to hire a React developer from India?',
    a: "Hiring a senior React developer from India like Abin offers significant cost advantages over US/UK rates while delivering the same enterprise-grade quality. AI-assisted development further increases the value per hour. Contact directly for a custom quote.",
  },
  {
    q: 'Is Abin PM available for remote work outside India?',
    a: "Yes. Abin is fully remote-ready with proven US (IBM, Abercrombie & Fitch, National Grid) and UK (Paragon Energy) client experience. Comfortable with async-first workflows and US/UK timezone overlap.",
  },
  {
    q: 'What makes Abin PM different from other MERN developers?',
    a: "Two things: 9+ years of hands-on enterprise experience and genuine AI-native development skills used daily at IBM. He stabilizes GenAI-generated code for production — a skill most developers don't have. The result: enterprise-grade output delivered faster than traditional development cycles.",
  },
  {
    q: 'Can Abin PM integrate AI/LLM features into my product?',
    a: "Yes. Abin has hands-on experience with LLM integration, OpenAI API, and GenAI-assisted development pipelines. He can both build AI-powered features into your product and accelerate the entire development process using AI tools.",
  },
  {
    q: 'How quickly can Abin PM start a new project?',
    a: "Currently available and can onboard within days for freelance projects. Reach out via email or LinkedIn for the fastest response.",
  },
];

export const identity = {
  name: 'Abin PM',
  title: 'Senior Full Stack Developer & AI-Native Engineer',
  location: 'Kochi, Kerala, India',
  email: 'abinpm92@gmail.com',
  phone: '+91 9895 661 651',
  linkedin: 'https://www.linkedin.com/in/abin-p-m-/',
  github: 'https://github.com/abin-pm',
  site: 'https://abinaiengineer.com',
  status: 'Available for Freelance & Remote Full-Time',
};
