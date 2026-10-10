// ─── Stats ──────────────────────────────────────────────────────────────────

export const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '15+', label: 'Projects Delivered' },
  { value: '4',   label: 'Companies' },
  { value: '3',   label: 'Cloud Platforms' },
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
      'React.js', 'Next.js', 'TypeScript', 'JavaScript', 'Redux',
      'React Query', 'Micro Frontends', 'Material UI', 'Tailwind CSS',
      'Bootstrap', 'HTML5', 'CSS3', 'Storybook',
      'Nivo', 'Highcharts', 'D3',
    ],
  },
  {
    icon: '🔧',
    title: 'Backend, APIs & Architecture',
    items: [
      'Node.js', 'NestJS', 'Express.js', '.NET Core', 'ASP.NET MVC',
      'C#', 'Python', 'REST APIs', 'GraphQL', 'GraphQL BFF',
      'Microservices', 'Serverless', 'API Gateway',
      'Headless CMS (Strapi, Umbraco)',
      'AWS SQS / SNS', 'WebSockets', 'Socket.IO',
    ],
  },
  {
    icon: '🗄️',
    title: 'Databases & Search',
    items: [
      'PostgreSQL', 'MySQL', 'MariaDB', 'SQL Server', 'SQL',
      'MongoDB', 'Firestore', 'Redis', 'Elasticsearch',
    ],
  },
  {
    icon: '☁️',
    title: 'Cloud & DevOps',
    items: [
      'AWS', 'AWS Lambda', 'AWS AppSync', 'AWS S3', 'Azure', 'GCP',
      'Firebase', 'Docker', 'Kubernetes', 'CI/CD', 'Webpack',
    ],
  },
  {
    icon: '🤖',
    title: 'AI-Native Development',
    highlight: true,
    highlightLabel: 'Core Differentiator',
    items: [
      'Cursor AI', 'Claude', 'GitHub Copilot',
      'OpenAI Codex', 'IBM Bob',
      'GenAI Code Review', 'GenAI Stabilization',
    ],
  },
  {
    icon: '🧪',
    title: 'Testing & Tooling',
    items: [
      'Jest', 'Vitest', 'React Testing Library', 'Playwright',
      'A/B Testing', 'Accessibility (WCAG)',
      'Git', 'GitHub', 'Bitbucket', 'Jira', 'Agile/Scrum',
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
    description: 'Daily driver at IBM for AI-assisted coding, refactoring, and accelerated development across enterprise React codebases',
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
    role: 'Agentic Coding',
    description: 'Agentic coding assistant for scaffolding, refactoring and test generation',
  },
  {
    name: 'IBM Bob',
    role: 'Enterprise AI Assistant',
    description: "IBM's AI development assistant, used on IBM client engagements alongside the rest of the toolchain",
  },
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
    keyOutcome: 'Stabilized GenAI-generated code to enterprise production standard for National Grid USA',
    caseStudySlug: 'national-grid',
    techStack: ['React JS', 'Next JS', 'TypeScript', 'Micro Frontends', 'GraphQL BFF', '.NET Core', 'PostgreSQL', 'Azure', 'Material UI', 'Cursor AI', 'GitHub Copilot', 'Claude', 'IBM Bob'],
    bullets: [
      "Delivering enterprise modernization for global clients across **retail, e-commerce and utilities** — L'Oréal, Abercrombie & Fitch and National Grid",
      "Building the **L'Oréal Retail Gold V2** UI in a frontend team of 4 — reusable KPI cards, dashboards, charts and filters across 8 modules used by thousands of retail users",
      'Migrated a legacy Java storefront to **React.js Micro Frontends** for Abercrombie & Fitch — Product Catalog, Product Details and Wishlist integrated through a **GraphQL BFF**',
      'Modernized a legacy SAS desktop app into a **React.js + .NET Core** web platform over PostgreSQL on Azure for National Grid USA, in a team of 6',
      'Stabilized and productionized **GenAI-generated code** to enterprise coding standards while preserving existing business rules',
      'Used **Cursor AI, GitHub Copilot, Claude & IBM Bob** daily to accelerate code generation, refactoring and testing',
      'Handled **Azure CI/CD**, code reviews and production deployments; collaborated with **US-based stakeholders** (Agile/Scrum)',
    ],
    assignment: {
      client: 'National Grid USA Inc',
      period: 'Oct 2024 — Oct 2025',
      project: 'MDS Consolidation EPO Tracking Application',
      description: 'The MDS Consolidation EPO Tracking system, originally a SAS desktop application, was migrated to a modern web platform to improve performance, scalability and user experience. A team of 6 rebuilt it with a React.js frontend and a .NET Core backend over PostgreSQL, deployed to Azure through CI/CD, with GenAI-assisted code generation providing the initial baseline for the move off SAS.',
      contributions: [
        'Enhanced and corrected AI-generated code to meet enterprise standards and business requirements',
        'Preserved existing SAS business rules through the migration to the web platform',
        'Refined the React.js frontend — addressed performance bottlenecks and ensured responsiveness across devices',
        'Identified and resolved discrepancies in AI-generated code, ensuring high-quality, maintainable solutions',
        'Ran code reviews and production deployments through Azure CI/CD',
        'Collaborated cross-functionally to deliver a seamless SAS → web migration',
      ],
    },
  },
  {
    slug: 'emvigo',
    period: 'Sep 2020 — Sep 2024',
    company: 'Emvigo Technologies Pvt Ltd',
    role: 'Team Lead / Senior Software Engineer',
    location: 'Kochi, India',
    keyOutcome: 'Cut Paragon reporting time from 96 hours to under 2 hours — 200k+ smart meter assets',
    caseStudySlug: 'paragon',
    techStack: ['React JS', 'Next JS', 'Redux', 'Node JS', 'Microservices', 'GraphQL', 'PostgreSQL', 'Elasticsearch', 'AWS', 'GCP', 'Strapi'],
    bullets: [
      'Led full stack delivery across **React.js, Next.js, Node.js** and microservices — 4 years, multiple production platforms',
      'Led teams of **4–6 engineers** across multiple products — technical design, sprint planning, code reviews and mentoring',
      'Built data-intensive systems integrating **PostgreSQL, MySQL, Firestore, Elasticsearch, GraphQL & REST APIs** with Node.js',
      'Delivered cloud-ready platforms on **AWS and GCP** — serverless services, CI/CD pipelines and centralized logging (ELK)',
      'Led a **frontend team of 3 engineers** on Paragon and the frontend team on Go Lyv, including requirement analysis, planning and estimation',
      'Collaborated with **UK & international clients** on solution design and end-to-end delivery',
    ],
  },
  {
    slug: 'luminescent',
    period: 'Jan 2018 — Sep 2020',
    company: 'Luminescent Software Pvt Ltd',
    role: 'Software Engineer',
    location: 'Thiruvananthapuram, India',
    keyOutcome: 'Delivered real-time community platform with Socket.IO and Elasticsearch at production scale',
    techStack: ['React JS', 'Redux', 'Node JS', 'Express JS', 'MongoDB', 'Elasticsearch', 'Socket.IO', 'Docker', 'Kubernetes', 'C#', 'ASP.NET MVC'],
    bullets: [
      'Built responsive **React.js SPAs** with Redux state management and Node.js/Express backends over MongoDB',
      'Implemented **real-time chat** via Socket.IO and **Keycloak** authentication',
      'Integrated **Elasticsearch** for location-based issue search',
      'Containerized services with **Docker and Kubernetes**',
      'Built an owners\' portal (**NopCommerce**) and a CMS portal (**Umbraco 7**) for a **Dubai client** with C#, MVC5, Entity Framework and SQL Server',
      'Improved production stability through systematic debugging and performance tuning',
    ],
  },
  {
    slug: 'ociuz',
    period: 'May 2016 — Dec 2017',
    company: 'Ociuz Technologies',
    role: 'Software Engineer',
    location: 'Thrissur, India',
    keyOutcome: 'Foundations in full-stack MVC development with C#, ASP.NET, and SQL',
    techStack: ['C#', 'ASP.NET MVC5', 'Entity Framework', 'MS SQL Server', 'jQuery', 'Bootstrap'],
    bullets: [
      'Built full stack **ASP.NET MVC5 web applications** in C# with Entity Framework and SQL Server',
      'Delivered **We Are Fresh** and **Best Holidays**, including **PayU payment** integration',
      'Covered **frontend, backend, and database** layers from day one',
    ],
  },
];

export const education = {
  degree: 'Bachelor of Engineering',
  field: 'Electronics and Communication Engineering',
  university: 'Anna University',
  year: '2009 – 2013',
  location: 'Chennai, India',
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
  period?: string;
  company?: string;
};

export const projects: ProjectItem[] = [
  {
    id: 'loreal',
    flag: '🇫🇷',
    client: "L'Oréal",
    category: 'Beauty · Retail Analytics',
    title: 'Retail Gold Web Application (SalesApp) V2',
    description: "UI/UX Version 2 of a retail analytics platform used by thousands of L'Oréal users. Working in a frontend team of 4, rebuilding the experience across eight modules — Sales, Business Analytics, Products, Services, Traffic, CRM, Control and Brand — with Next.js, React, TypeScript, Material UI and React Query. Building reusable KPI cards, dashboards, charts and filters with Nivo, Highcharts and D3 on responsive layouts, validating KPIs with stakeholders and managing React and UI library compatibility through the V2 migration.",
    impact: [
      "Thousands of L'Oréal retail users",
      '8 modules redesigned for V2',
      'Reusable KPI cards, dashboards, charts & filters',
      'KPIs validated; non-production vs production data discrepancies fixed',
      'React & UI library compatibility managed through the migration',
    ],
    tags: ['Next.js', 'React', 'TypeScript', 'Material UI', 'React Query', 'Nivo', 'Highcharts', 'D3'],
    aiAssisted: false,
    featured: true,
    period: 'Jul 2026 — Present',
    company: 'IBM',
  },
  {
    id: 'abercrombie',
    flag: '🇺🇸',
    client: 'Abercrombie & Fitch Co.',
    category: 'Retail · E-Commerce',
    title: 'E-Commerce Frontend Modernization',
    description: 'Migrated a legacy Java storefront to React.js Micro Frontends across Abercrombie & Fitch, Hollister and Abercrombie Kids. Built the Product Catalog, Product Details and Wishlist micro frontends integrated through a GraphQL Backend-for-Frontend (BFF), with reusable React components, analytics tracking, WCAG accessibility, A/B testing, Jest unit tests and Playwright end-to-end tests.',
    impact: [
      'Three brands moved off a legacy Java storefront',
      'Product Catalog, Product Details & Wishlist micro frontends',
      'GraphQL BFF integration',
      'WCAG accessibility, A/B testing & automated test coverage',
    ],
    tags: ['React.js', 'Micro Frontends', 'TypeScript', 'GraphQL BFF', 'Jest', 'Playwright', 'WCAG'],
    aiAssisted: false,
    featured: true,
    period: 'Nov 2025 — Jun 2026',
    company: 'IBM',
  },
  {
    id: 'national-grid',
    flag: '🇺🇸',
    client: 'National Grid USA',
    category: 'Energy · Enterprise',
    title: 'MDS Consolidation EPO Tracking Application',
    description: 'Modernized a legacy SAS desktop application into an enterprise web platform — a React.js frontend and .NET Core backend over PostgreSQL, deployed on Azure — in a team of 6. GenAI-assisted code generation provided the initial baseline; the core work was stabilizing that code to enterprise standards while preserving existing business rules, backed by Azure CI/CD, code reviews and production deployments.',
    impact: [
      'SAS legacy → modern web platform',
      'Existing business rules preserved',
      'AI-generated code stabilized to enterprise standard',
      'Azure CI/CD & production deployments',
    ],
    tags: ['React.js', '.NET Core', 'PostgreSQL', 'Azure', 'CI/CD', 'GenAI'],
    aiAssisted: true,
    aiNote: 'GenAI-assisted development + stabilization',
    featured: true,
    period: 'Oct 2024 — Oct 2025',
    company: 'IBM',
  },
  {
    id: 'supersonic-imagine',
    flag: '🇫🇷',
    client: 'SuperSonic Imagine',
    category: 'Web · Headless CMS',
    title: 'Corporate Website',
    description: "Built SuperSonic Imagine's corporate website with Next.js and React on Strapi as a headless CMS — reusable React components, API-driven content and media, and responsive layouts tuned for performance.",
    impact: [
      'Headless CMS content editing with Strapi',
      'Reusable React component library',
      'Responsive, performance-focused pages',
    ],
    tags: ['Next.js', 'React', 'Strapi', 'Headless CMS'],
    aiAssisted: false,
    featured: false,
    period: 'Jan 2024 — Aug 2024',
    company: 'Emvigo',
  },
  {
    id: 'paragon',
    flag: '🇬🇧',
    client: 'Paragon Energy',
    category: 'Energy · Asset Management',
    title: 'Energy Asset Management Platform',
    description: 'An asset management platform for the UK energy sector covering 200,000+ smart meter assets. Led a frontend team of 3. Built REST APIs and Node.js microservices over PostgreSQL, integrated Elasticsearch, Logstash and Kibana plus AWS S3, and set up CI/CD — cutting reporting time from 96 hours to under 2 hours.',
    impact: [
      'Reporting time: 96 hours → under 2 hours',
      '200,000+ smart meter assets',
      'Led frontend team of 3 engineers',
      'UK energy sector',
    ],
    tags: ['React.js', 'Node.js', 'Microservices', 'REST APIs', 'PostgreSQL', 'Elasticsearch', 'ELK', 'AWS S3', 'CI/CD'],
    aiAssisted: false,
    featured: true,
    period: '2022 — 2023',
    company: 'Emvigo',
  },
  {
    id: 'refinu',
    flag: '🌐',
    client: 'Refinu',
    category: 'SaaS · Personal Growth',
    title: 'Personalized Growth Platform',
    description: 'A personalized growth platform built serverless on Google Cloud — React.js and TypeScript on the frontend, Node.js on GCP Cloud Functions, Firestore and Firebase for data and auth, and push notifications to keep users engaged.',
    impact: [
      'Serverless GCP architecture',
      'Push notification engagement',
      'Personalized user workflows',
    ],
    tags: ['React.js', 'Node.js', 'TypeScript', 'GCP Cloud Functions', 'Firestore', 'Firebase'],
    aiAssisted: false,
    featured: false,
    period: '2021 — 2022',
    company: 'Emvigo',
  },
  {
    id: 'golyv',
    flag: '🇬🇧',
    client: 'Go Lyv',
    category: 'Events · SaaS',
    title: 'Event Booking Platform',
    description: 'An event booking platform for the UK market, built on Next.js with GraphQL and Apollo Client over AWS AppSync, serverless services, MySQL and Firebase. Led the frontend team and handled requirement analysis, planning and estimation.',
    impact: [
      'Led the frontend team',
      'Serverless AWS architecture with AppSync',
      'Requirement analysis, planning & estimation',
      'UK market deployment',
    ],
    tags: ['Next.js', 'GraphQL', 'Apollo Client', 'AWS AppSync', 'Serverless', 'MySQL', 'Firebase'],
    aiAssisted: false,
    featured: false,
    period: '2020 — 2021',
    company: 'Emvigo',
  },
  {
    id: 'villager',
    flag: '🇮🇳',
    client: 'Villager',
    category: 'Social · Civic Tech',
    title: 'Community Issue Platform',
    description: 'A social platform where people raise, discuss and prioritize issues in their villages for government attention. Built with React.js and Redux on Node.js/Express and MongoDB, with real-time chat over Socket.IO, location-based issue search via Elasticsearch, Keycloak authentication, and Docker/Kubernetes deployment.',
    impact: [
      'Real-time chat with Socket.IO',
      'Location-based Elasticsearch search',
      'Keycloak authentication',
      'Containerized with Docker & Kubernetes',
    ],
    tags: ['React.js', 'Redux', 'Node.js', 'Express.js', 'MongoDB', 'Elasticsearch', 'Keycloak', 'Socket.IO', 'Docker', 'Kubernetes'],
    aiAssisted: false,
    featured: false,
    period: '2018 — 2020',
    company: 'Luminescent',
  },
  {
    id: 'first-group',
    flag: '🇦🇪',
    client: 'The First Group',
    category: 'Web Portals · CMS',
    title: "Owners' Portal & CMS Portal",
    description: "Two portals for a Dubai client: an owners' portal built on NopCommerce and a content-managed portal on Umbraco 7, both in C# with ASP.NET MVC5, Entity Framework and MS SQL Server.",
    impact: [
      "Owners' portal on NopCommerce",
      'CMS portal on Umbraco 7',
      'Delivered for a Dubai client',
    ],
    tags: ['C#', 'ASP.NET MVC5', 'Entity Framework', 'MS SQL Server', 'NopCommerce', 'Umbraco'],
    aiAssisted: false,
    featured: false,
    company: 'Luminescent',
  },
  {
    id: 'we-are-fresh',
    flag: '🌐',
    client: 'We Are Fresh',
    category: 'Web Application · Payments',
    title: 'We Are Fresh Web Application',
    description: 'An ASP.NET MVC5 web application built with C#, Entity Framework, MS SQL Server, jQuery and Bootstrap, including PayU payment integration.',
    impact: [
      'Production ASP.NET MVC5 application',
      'PayU payment integration',
      'Full stack: UI, server and database',
    ],
    tags: ['C#', 'ASP.NET MVC5', 'Entity Framework', 'MS SQL Server', 'jQuery', 'Bootstrap', 'PayU'],
    aiAssisted: false,
    featured: false,
    company: 'Ociuz',
  },
  {
    id: 'best-holidays',
    flag: '🌐',
    client: 'Best Holidays',
    category: 'Web Application · Payments',
    title: 'Best Holidays Web Application',
    description: 'An ASP.NET MVC5 web application built with C#, Entity Framework, MS SQL Server, jQuery and Bootstrap, including PayU payment integration.',
    impact: [
      'Production ASP.NET MVC5 application',
      'PayU payment integration',
      'Full stack: UI, server and database',
    ],
    tags: ['C#', 'ASP.NET MVC5', 'Entity Framework', 'MS SQL Server', 'jQuery', 'Bootstrap', 'PayU'],
    aiAssisted: false,
    featured: false,
    company: 'Ociuz',
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
    a: 'An AI-native developer deeply integrates tools like Cursor AI, GitHub Copilot, and Claude into every stage of development — not as a shortcut, but as a force multiplier. Abin has used these tools in enterprise production at IBM since 2024, stabilizing GenAI-generated code to meet enterprise reliability standards.',
  },
  {
    q: 'How much does it cost to hire a React developer from India?',
    a: 'Hiring a senior React developer from India like Abin PM offers significant cost advantages over US/UK rates while delivering enterprise-grade quality. AI-assisted development further increases value per hour. Contact directly for a custom quote based on your scope.',
  },
  {
    q: 'Is Abin PM available for remote work outside India?',
    a: 'Yes. Abin is fully remote-ready with proven client experience in the US (Abercrombie & Fitch, National Grid), the UK (Paragon Energy, Go Lyv) and Dubai. Comfortable with async-first workflows and US/UK timezone overlap.',
  },
  {
    q: 'What makes Abin PM different from other MERN developers?',
    a: 'Two things: 10+ years of hands-on enterprise experience AND genuine AI-native skills used daily at IBM. He stabilizes GenAI-generated code for enterprise production — a rare skill. The result is enterprise-grade output delivered faster than traditional development cycles.',
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
