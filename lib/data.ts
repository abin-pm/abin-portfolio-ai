// ─── Stats ──────────────────────────────────────────────────────────────────

export const stats = [
  { value: '9+',  label: 'Years Experience' },
  { value: '15+', label: 'Projects Delivered' },
  { value: '4',   label: 'Companies' },
  { value: '3',   label: 'Cloud Platforms' },
];

// ─── Tech Ticker ────────────────────────────────────────────────────────────

export const techTicker = [
  'React.js', 'Next.js', 'Node.js', 'TypeScript',
  'Cursor AI', 'GitHub Copilot', 'Claude',
  'Microservices', 'AWS', 'GraphQL', 'MongoDB',
  'Docker', 'Kubernetes', 'LLM Integration',
  'GenAI', 'PostgreSQL', 'GCP', 'Tailwind CSS',
  'Redis', 'Elasticsearch', '.NET Core', 'CI/CD',
  'Socket.IO', 'RabbitMQ', 'Kafka',
];

export const aiTickerRow = [
  'Cursor AI', 'GitHub Copilot', 'Claude',
  'OpenAI Codex', 'LLM Integration', 'GenAI',
];

// ─── Skills ─────────────────────────────────────────────────────────────────

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
      'React.js', 'Next.js', 'TypeScript', 'Redux',
      'Micro-Frontend', 'Tailwind CSS', 'HTML5', 'CSS3',
      'Bootstrap', 'PrimeReact',
    ],
  },
  {
    icon: '🔧',
    title: 'Backend & APIs',
    items: [
      'Node.js', 'Express.js', 'Microservices',
      'REST APIs', 'GraphQL', 'C#', '.NET Core',
      'AppSync', 'Socket.IO',
    ],
  },
  {
    icon: '🗄️',
    title: 'Databases',
    items: [
      'MongoDB', 'PostgreSQL', 'MySQL', 'Firestore',
      'MS SQL Server', 'Redis', 'Elasticsearch',
      'Kafka', 'RabbitMQ',
    ],
  },
  {
    icon: '☁️',
    title: 'Cloud & DevOps',
    items: [
      'AWS', 'GCP', 'Azure', 'Docker',
      'Kubernetes', 'CI/CD', 'Serverless',
      'AWS Serverless', 'Cloud Functions',
    ],
  },
  {
    icon: '🤖',
    title: 'AI-Native Development',
    highlight: true,
    highlightLabel: 'Core Differentiator',
    items: [
      'Cursor AI', 'GitHub Copilot', 'Claude',
      'OpenAI Codex', 'LLM Integration',
      'GenAI Code Review', 'AI-Assisted Architecture',
      'GenAI Stabilization',
    ],
  },
  {
    icon: '🧪',
    title: 'Testing & Tooling',
    items: [
      'Jest', 'Vitest', 'ESLint', 'GitHub',
      'Bitbucket', 'Jira', 'Agile/Scrum',
      'Trello', 'Slack', 'Microsoft Teams',
    ],
  },
];

// ─── AI Tools ────────────────────────────────────────────────────────────────

export type AITool = {
  name: string;
  role: string;
  description: string;
};

export const aiTools: AITool[] = [
  {
    name: 'Cursor AI',
    role: 'Primary IDE',
    description: 'Daily driver at IBM for AI-assisted coding, refactoring, and accelerated development across enterprise React and Node.js codebases',
  },
  {
    name: 'GitHub Copilot',
    role: 'Code Completion',
    description: 'Inline AI suggestions integrated into every phase of development — from feature scaffolding to unit test generation',
  },
  {
    name: 'Claude',
    role: 'Architecture & Review',
    description: 'Complex problem solving, code review strategy, and GenAI component stabilization for enterprise production requirements',
  },
  {
    name: 'OpenAI Codex',
    role: 'LLM Integration',
    description: 'API integration and AI-powered feature development within client products',
  },
  {
    name: 'v0 by Vercel',
    role: 'UI Generation',
    description: 'Rapid UI scaffolding to accelerate frontend delivery timelines significantly',
  },
];

export const aiStats = [
  { value: '3–5×', label: 'Faster delivery' },
  { value: '2024', label: 'AI-native since' },
  { value: 'IBM',  label: 'Enterprise context' },
  { value: '100%', label: 'Production-grade' },
];

// ─── Experience ───────────────────────────────────────────────────────────────

export type Assignment = {
  client: string;
  period: string;
  project: string;
  description: string;
  contributions: string[];
};

export type ExperienceItem = {
  slug: string;
  period: string;
  company: string;
  role: string;
  location: string;
  current?: boolean;
  aiRole?: boolean;
  techStack: string[];
  bullets: string[];
  keyOutcome?: string;
  caseStudySlug?: string;
  assignment?: Assignment;
};

export const experience: ExperienceItem[] = [
  {
    slug: 'ibm',
    period: 'Sep 2024 — Present',
    company: 'IBM India Pvt Ltd',
    role: 'Senior Application Developer (Full Stack & Cloud)',
    location: 'Kochi, India',
    current: true,
    aiRole: true,
    keyOutcome: 'Stabilized GenAI-generated code to Fortune 500 production standard for National Grid USA',
    caseStudySlug: 'national-grid',
    techStack: ['React JS', 'Node JS', 'PG SQL', 'Azure', 'Cursor AI', 'GitHub Copilot', 'Claude'],
    bullets: [
      'Migrated legacy enterprise apps to **React.js Micro-Frontend** architecture — improved scalability and independent deployments',
      'Used **Cursor AI, GitHub Copilot & Claude** daily to accelerate code generation and refactoring across React + Node.js services',
      'Stabilized and productionized **GenAI-generated code** to align with Fortune 500 coding standards and microservices architecture',
      'Eliminated frontend performance bottlenecks — **responsive across all device sizes**',
      'Optimized **.NET Core API** backend for smooth data flow and scalable frontend integration',
      'Collaborated with **US-based stakeholders** (Agile/Scrum) on high-value enterprise feature delivery',
    ],
    assignment: {
      client: 'National Grid USA Inc',
      period: 'Oct 2024 — Present',
      project: 'MDS Consolidation EPO Tracking Application',
      description: 'The MDS Consolidation EPO Tracking system, initially built on SAS, was migrated to a modern web-based application to enhance performance, scalability, and user experience. The system was restructured using React.js for the frontend and .NET Core API for the backend, with AI-driven code generation facilitating the transition from the legacy SAS system.',
      contributions: [
        'Enhanced and corrected AI-generated code to ensure optimal functionality and alignment with business requirements',
        'Refined React.js frontend — improved UI/UX by addressing performance bottlenecks and ensuring responsiveness across devices',
        'Optimized .NET Core API backend for smooth data flow, scalability, and robust integration',
        'Identified and resolved discrepancies in AI-generated code, ensuring high-quality maintainable solutions',
        'Applied best coding practices, debugging, and testing to enhance stability and reliability',
        'Collaborated cross-functionally to ensure seamless SAS → web migration meeting performance standards',
      ],
    },
  },
  {
    slug: 'emvigo',
    period: 'Sep 2020 — Sep 2024',
    company: 'Emvigo Technologies Pvt Ltd',
    role: 'Team Lead / Senior Software Engineer',
    location: 'Kochi, India',
    keyOutcome: 'Cut Paragon Energy operational turnaround from 96 hours to 2 hours — 200k+ smart meters',
    caseStudySlug: 'paragon',
    techStack: ['React JS', 'Next JS', 'Redux', 'Node JS', 'Microservice', 'GraphQL', 'AWS', 'GCP'],
    bullets: [
      'Led full stack delivery across **React.js, Next.js, Node.js** and microservices — 4 years, multiple production platforms',
      'Built data-intensive systems integrating **PostgreSQL, MySQL, MongoDB, GraphQL & REST APIs**',
      'Delivered cloud-ready platforms on **AWS and GCP** with CI/CD pipelines and production monitoring',
      'Led a **frontend team of 3 engineers**, mentoring juniors and owning architecture decisions',
      'Collaborated with **UK & international clients** on solution design and end-to-end delivery',
    ],
  },
  {
    slug: 'luminescent',
    period: 'Jan 2018 — Sep 2020',
    company: 'Luminescent Software Pvt Ltd',
    role: 'Software Engineer (Full Stack)',
    location: 'Thiruvananthapuram, India',
    keyOutcome: 'Delivered real-time community platform with Socket.IO and Elasticsearch at production scale',
    techStack: ['React JS', 'Redux', 'Node JS', 'Express JS', 'MongoDB', 'Socket.IO'],
    bullets: [
      'Built responsive **React.js SPAs** with Redux state management and Node.js/Express backends',
      'Implemented **real-time chat and push notifications** via Socket.IO',
      'Integrated **Elasticsearch** for location-based search functionality',
      'Improved production stability through systematic debugging and performance tuning',
    ],
  },
  {
    slug: 'ocuiz',
    period: 'May 2016 — Dec 2017',
    company: 'Ocuiz Technologies',
    role: 'Software Engineer',
    location: 'Thrissur, India',
    keyOutcome: 'Foundations in full-stack MVC development with C#, ASP.NET, and SQL',
    techStack: ['.NET MVC', 'ASP.NET', 'C#', 'SQL'],
    bullets: [
      'Built full stack **MVC web applications** using C# and ASP.NET',
      'Covered **frontend, backend, and database** layers from day one',
      'Improved system reliability through bug resolution and legacy code optimization',
    ],
  },
];

export const education = {
  degree: 'Bachelor of Engineering',
  field: 'Electronics and Communication Engineering',
  university: 'Anna University',
  year: '2013',
};

// ─── Projects ─────────────────────────────────────────────────────────────────

export type ProjectItem = {
  id: string;
  flag: string;
  client: string;
  category: string;
  title: string;
  description: string;
  impact: string[];
  tags: string[];
  aiAssisted?: boolean;
  aiNote?: string;
  featured?: boolean;
};

export const projects: ProjectItem[] = [
  {
    id: 'abercrombie',
    flag: '🇺🇸',
    client: 'Abercrombie & Fitch Co.',
    category: 'Retail · E-Commerce',
    title: 'E-Commerce Frontend Modernization',
    description: 'Migrated legacy Java-based frontend to a React.js Micro-Frontend architecture. Implemented the My List (Wishlist) feature enabling users to save products and move them to cart. Revamped the Global Configuration Hub migrating legacy UI components to PrimeReact for enterprise consistency.',
    impact: [
      'Parallel deployments across independent teams',
      'Improved UI scalability and release velocity',
      'Reduced release friction significantly',
      'Enterprise e-commerce production environment',
    ],
    tags: ['React.js', 'Micro-Frontend', 'PrimeReact', 'TypeScript', 'Node.js'],
    aiAssisted: false,
    featured: true,
  },
  {
    id: 'national-grid',
    flag: '🇺🇸',
    client: 'National Grid USA',
    category: 'Energy · Enterprise',
    title: 'MDS Consolidation EPO Tracking Application',
    description: 'Modernized a legacy SAS-based desktop system into a React.js + .NET Core enterprise web platform. Used GenAI-assisted code generation as the initial development baseline, then stabilized and corrected AI-generated code to meet enterprise architecture standards, business requirements, and production reliability thresholds.',
    impact: [
      'SAS legacy → modern web platform',
      'Enterprise-grade production reliability',
      'AI-generated code stabilized to enterprise standard',
      'Improved accessibility and user interface',
    ],
    tags: ['React.js', 'Node.js', '.NET Core', 'PG SQL', 'Azure', 'GenAI'],
    aiAssisted: true,
    aiNote: 'GenAI-assisted development + stabilization',
    featured: true,
  },
  {
    id: 'paragon',
    flag: '🇬🇧',
    client: 'Paragon Energy',
    category: 'Energy · Asset Management',
    title: 'Smart Meter Asset Management Platform',
    description: 'Built a large-scale industry-wide energy asset management platform managing 200,000+ smart meters across the UK energy sector. Led a frontend team of 3 engineers. Workflow automation dramatically reduced operational turnaround times with measurable business impact.',
    impact: [
      '96 hours → 2 hours operational turnaround',
      '200,000+ smart meters managed',
      'Led frontend team of 3 engineers',
      'Deployed across UK energy sector',
    ],
    tags: ['React.js', 'Node.js', 'Microservices', 'MySQL', 'Elasticsearch', 'AWS', 'ELK'],
    aiAssisted: false,
    featured: true,
  },
  {
    id: 'golyv',
    flag: '🇬🇧',
    client: 'Go Lyv',
    category: 'Events · SaaS',
    title: 'Innovative Event Booking Platform',
    description: 'Built a comprehensive event management platform revolutionizing the event landscape in the UK. Organizers can create events, manage tickets, and facilitate seamless ticket purchases. Handled both frontend and backend development while maintaining direct client relationships.',
    impact: [
      'Full-stack ownership frontend to backend',
      'Serverless AWS architecture',
      'Real-time ticket management system',
      'UK market deployment',
    ],
    tags: ['Next.js', 'GraphQL', 'Node.js', 'AWS Serverless', 'AppSync', 'MySQL'],
    aiAssisted: false,
    featured: false,
  },
  {
    id: 'refinu',
    flag: '🌐',
    client: 'Refinu',
    category: 'SaaS · HR Tech',
    title: 'Personality Assessment Platform',
    description: 'Architected a scalable serverless microservices platform on Google Cloud Platform. Implemented personalized assessment workflows and push notification system for engagement. Led requirement discussions end-to-end from design through deployment.',
    impact: [
      'Full ownership from design to deploy',
      'Serverless GCP microservices architecture',
      'Push notification engagement system',
      'Personalized assessment workflows',
    ],
    tags: ['React', 'Node.js', 'Firestore', 'GCP', 'Cloud Functions', 'Redux', 'Jest'],
    aiAssisted: false,
    featured: false,
  },
  {
    id: 'villager',
    flag: '🇮🇳',
    client: 'Villager',
    category: 'Social · Civic Tech',
    title: 'Community Issue Resolution Platform',
    description: 'A dynamic social platform facilitating community-driven issue resolution — enabling users to raise, discuss, and prioritize challenges within their villages for government attention. Implemented real-time chat using Socket.IO and location-based search via Elasticsearch.',
    impact: [
      'Real-time chat with Socket.IO',
      'Location-based Elasticsearch search',
      'Community-driven civic engagement',
      'Production stability and performance',
    ],
    tags: ['React.js', 'Redux', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'Elasticsearch', 'ELK'],
    aiAssisted: false,
    featured: false,
  },
];

// ─── FAQ ──────────────────────────────────────────────────────────────────────

export type FAQItem = { q: string; a: string };

export const faq: FAQItem[] = [
  {
    q: 'What services does Abin PM offer as a freelance developer?',
    a: 'Abin offers end-to-end full stack development — React.js/Next.js frontend, Node.js backend, MERN stack applications, cloud deployment on AWS/GCP/Azure, microservices architecture, and AI-assisted development using Cursor AI, GitHub Copilot and Claude. Available for freelance contracts and remote full-time globally.',
  },
  {
    q: 'What is an AI-native developer and why does it matter?',
    a: 'An AI-native developer deeply integrates tools like Cursor AI, GitHub Copilot, and Claude into every stage of development — not as a shortcut, but as a force multiplier. Abin has used these tools in enterprise production at IBM since 2024, stabilizing GenAI-generated code to meet Fortune 500 reliability standards.',
  },
  {
    q: 'How much does it cost to hire a React developer from India?',
    a: 'Hiring a senior React developer from India like Abin PM offers significant cost advantages over US/UK rates while delivering enterprise-grade quality. AI-assisted development further increases value per hour. Contact directly for a custom quote based on your scope.',
  },
  {
    q: 'Is Abin PM available for remote work outside India?',
    a: 'Yes. Abin is fully remote-ready with proven US (IBM, Abercrombie & Fitch, National Grid) and UK (Paragon Energy, Go Lyv) client experience. Comfortable with async-first workflows and US/UK timezone overlap.',
  },
  {
    q: 'What makes Abin PM different from other MERN developers?',
    a: 'Two things: 9+ years of hands-on enterprise experience AND genuine AI-native skills used daily at IBM. He stabilizes GenAI-generated code for enterprise production — a rare skill. The result is enterprise-grade output delivered faster than traditional development cycles.',
  },
  {
    q: 'Can Abin PM integrate AI or LLM features into my product?',
    a: 'Yes. Abin has hands-on experience with LLM integration, OpenAI API, and GenAI-assisted development pipelines at enterprise scale. He can build AI-powered features into your product AND accelerate the entire build using AI tools.',
  },
  {
    q: 'How quickly can Abin PM start a new project?',
    a: 'Currently available and can onboard within days for freelance projects. Reach out via email or LinkedIn for the fastest response.',
  },
];

// ─── Blog Posts ───────────────────────────────────────────────────────────────

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  excerpt: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-to-hire-react-developer-india',
    title: 'How to Hire a Senior React Developer from India Without Guesswork',
    date: '2026-02-10',
    readTime: '6 min read',
    category: 'Hiring',
    tags: ['React', 'Hiring'],
    excerpt:
      'Most companies hiring React developers from India get burned by the same 3 mistakes. Here is what to actually look for — from someone who has worked with IBM, Abercrombie & Fitch, and National Grid.',
  },
  {
    slug: 'ai-native-workflow-cursor-copilot-claude',
    title: 'Inside an AI-Native Workflow: Cursor AI, Copilot & Claude at IBM',
    date: '2026-01-28',
    readTime: '8 min read',
    category: 'AI-Native',
    tags: ['AI-Native', 'Cursor AI', 'GitHub Copilot'],
    excerpt:
      'What does it actually look like to use Cursor AI, GitHub Copilot, and Claude in enterprise production? Not demos — real daily workflow at IBM building React and Node.js systems.',
  },
  {
    slug: 'sas-to-react-national-grid-modernization',
    title: "From SAS to React: How We Modernized National Grid's EPO Tracking Application",
    date: '2026-01-15',
    readTime: '10 min read',
    category: 'Case Study',
    tags: ['Case Study', 'React', 'Legacy Modernization'],
    excerpt:
      'A real case study of migrating a legacy SAS desktop system to a React.js + .NET Core web platform using GenAI-assisted code generation — and what it actually takes to make AI-generated code production-ready.',
  },
  {
    slug: 'genai-code-stabilization-enterprise',
    title: 'When (and When Not) to Use GenAI for Production Code',
    date: '2025-12-20',
    readTime: '7 min read',
    category: 'AI-Native',
    tags: ['GenAI', 'AI-Native', 'Enterprise'],
    excerpt:
      "GenAI can write code fast. But fast is not the same as production-ready. Here is the stabilization process I use at IBM to take AI-generated code from 'works on my machine' to enterprise-grade reliability.",
  },
  {
    slug: 'llm-integration-existing-react-app',
    title: 'Integrating LLMs into an Existing React + Node.js Application',
    date: '2025-12-05',
    readTime: '9 min read',
    category: 'LLMs',
    tags: ['LLMs', 'React', 'Node.js', 'OpenAI'],
    excerpt:
      'A practical, no-hype guide to adding LLM capabilities to a React frontend and Node.js backend without rebuilding your entire architecture — based on real integration patterns from production systems.',
  },
  {
    slug: 'micro-frontend-architecture-react',
    title: "Micro-Frontend Architecture with React: Lessons from Abercrombie & Fitch",
    date: '2025-11-18',
    readTime: '11 min read',
    category: 'React',
    tags: ['React', 'Micro-Frontend', 'Architecture'],
    excerpt:
      "How we migrated a legacy Java frontend to React Micro-Frontends for one of the world's largest fashion retailers — what worked, what did not, and the architecture decisions that made parallel deployments finally possible.",
  },
];

// ─── Identity ─────────────────────────────────────────────────────────────────

export const identity = {
  name: 'Abin PM',
  title: 'Senior Full Stack Developer & AI-Native Engineer',
  location: 'Kochi, Kerala, India',
  email: 'abinpm92@gmail.com',
  phone: '+91 9895 661 651',
  linkedin: 'https://www.linkedin.com/in/abin-p-m-/',
  github: 'https://github.com/abin-pm',
  site: 'https://www.abinaiengineer.com',
  status: 'Available for Freelance & Remote Full-Time',
};
