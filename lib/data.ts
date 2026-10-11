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
      'React Query', 'Micro Frontends', 'Material UI', 'Ant Design', 'Fluent UI',
      'Tailwind CSS', 'Bootstrap', 'HTML5', 'CSS3', 'Storybook',
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
      'AWS', 'AWS Lambda', 'AWS AppSync', 'AWS S3', 'AWS CloudFront', 'Azure', 'GCP',
      'Firebase', 'Docker', 'Kubernetes', 'CI/CD', 'Webpack',
    ],
  },
  {
    icon: '🤖',
    title: 'AI-Assisted Development',
    highlight: true,
    highlightLabel: 'Used daily',
    items: [
      'Cursor', 'Claude', 'GitHub Copilot', 'OpenAI Codex',
      'Reviewing AI-generated code', 'GenAI code stabilization',
    ],
  },
  {
    icon: '🧪',
    title: 'Testing & Tooling',
    items: [
      'Jest', 'Vitest', 'React Testing Library', 'Playwright',
      'A/B Testing', 'Accessibility (WCAG)',
      'Git', 'GitHub', 'Bitbucket', 'Jira', 'ESLint', 'Prettier', 'Agile/Scrum',
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
    name: 'Cursor',
    role: 'Editor',
    description: 'My main editor on client work. I use it for refactors that touch many files and for first drafts that I then rewrite to fit the codebase.',
  },
  {
    name: 'GitHub Copilot',
    role: 'Completion',
    description: 'Inline suggestions for boilerplate, typed API calls and test setup. Helpful when the types are strict; I ignore it when they are not.',
  },
  {
    name: 'Claude',
    role: 'Review & reasoning',
    description: 'A second reader before I open a pull request: edge cases, missing error handling, and logic that has drifted from the requirement.',
  },
  {
    name: 'OpenAI Codex',
    role: 'Agentic tasks',
    description: 'Scaffolding, mechanical refactors and test generation, always followed by a line-by-line review before anything merges.',
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
    period: 'Sep 2024 – Present',
    company: 'IBM India Pvt Ltd',
    role: 'Senior Application Developer (Full Stack & Cloud)',
    location: 'Kochi, India',
    current: true,
    aiRole: true,
    keyOutcome: 'Took GenAI-generated code for National Grid USA and brought it up to production standard',
    caseStudySlug: 'national-grid',
    techStack: ['React JS', 'Next JS', 'TypeScript', 'Micro Frontends', 'GraphQL BFF', '.NET Core', 'PostgreSQL', 'Azure', 'Material UI', 'Cursor', 'GitHub Copilot', 'Claude'],
    bullets: [
      "Modernization work for global clients in **retail, e-commerce and utilities**: L'Oréal, Abercrombie & Fitch and National Grid",
      "On **L'Oréal Retail Gold V2**, one of a frontend team of 4 building KPI cards, dashboards, charts and filters across 8 modules used by thousands of retail staff",
      'For Abercrombie & Fitch, moved a legacy Java storefront to **React.js Micro Frontends**: Product Catalog, Product Details and Wishlist, all fed by a **GraphQL BFF**',
      'For National Grid USA, rebuilt a legacy SAS desktop tool as a **React.js + .NET Core** web app on PostgreSQL and Azure, in a team of 6',
      'Reviewed and corrected **GenAI-generated code** until it met enterprise standards, without changing the business rules it had to keep',
      'Use **Cursor, GitHub Copilot and Claude** every day for drafting, refactoring and tests, and check everything they produce',
      'Code reviews, **Azure CI/CD** and production releases, working with **US-based stakeholders** in Scrum',
    ],
    assignment: {
      client: 'National Grid USA Inc',
      period: 'Oct 2024 – Oct 2025',
      project: 'MDS Consolidation EPO Tracking Application',
      description: 'The MDS Consolidation EPO Tracking system started life as a SAS desktop application. Six of us rebuilt it as a web platform: React.js on the front, .NET Core and PostgreSQL behind it, deployed to Azure through CI/CD. GenAI tools generated the first version of much of the code, and a large part of the job was making that code correct.',
      contributions: [
        'Fixed logic gaps in AI-generated code so it matched the real business requirements',
        'Carried the existing SAS business rules over to the web platform unchanged',
        'Worked on React.js performance problems and made the screens usable on smaller devices',
        'Found and fixed places where generated code had drifted from the agreed architecture',
        'Took part in code reviews and production deployments through Azure CI/CD',
        'Worked with the client and the rest of the team through the move off SAS',
      ],
    },
  },
  {
    slug: 'emvigo',
    period: 'Sep 2020 – Sep 2024',
    company: 'Emvigo Technologies Pvt Ltd',
    role: 'Team Lead / Senior Software Engineer',
    location: 'Kochi, India',
    keyOutcome: 'Cut Paragon reporting time from 96 hours to under 2 hours across 200k+ smart meter assets',
    caseStudySlug: 'paragon',
    techStack: ['React JS', 'Next JS', 'Redux', 'Node JS', 'Microservices', 'GraphQL', 'PostgreSQL', 'Elasticsearch', 'AWS', 'GCP', 'Strapi'],
    bullets: [
      'Four years of full stack work in **React.js, Next.js and Node.js** for UK and international clients',
      'Led teams of **4–6 engineers**: technical design, sprint planning, code reviews and mentoring',
      'Built REST and GraphQL APIs with **Node.js, NestJS and Express** on PostgreSQL, MySQL, MariaDB, MongoDB and Firestore',
      'Shipped on **AWS and GCP** with serverless services, Docker, CI/CD pipelines and centralized logging (ELK)',
      'Led a **frontend team of 3** on Paragon and the frontend team on Go Lyv, including estimates and planning',
      'Worked directly with **UK clients** on requirements, estimates and delivery plans',
    ],
  },
  {
    slug: 'luminescent',
    period: 'Jan 2018 – Sep 2020',
    company: 'Luminescent Software Pvt Ltd',
    role: 'Software Engineer',
    location: 'Thiruvananthapuram, India',
    keyOutcome: 'Built real-time chat and location search for the Villager community platform',
    techStack: ['React JS', 'Redux', 'Node JS', 'Express JS', 'MongoDB', 'Elasticsearch', 'Socket.IO', 'Docker', 'Kubernetes', 'C#', 'ASP.NET MVC'],
    bullets: [
      'Built **React.js** single-page apps with Redux, on Node.js/Express and MongoDB',
      'Added **real-time chat** with Socket.IO and sign-in with **Keycloak**',
      'Built location-based issue search on **Elasticsearch**',
      'Packaged and ran services with **Docker and Kubernetes**',
      "Built an owners' investment portal (**NopCommerce**) and a CMS portal (**Umbraco 7**) for **The First Group in Dubai**, in C#, MVC5, Entity Framework and SQL Server",
      'Spent a lot of time on production bugs and performance, which is where I learned to debug properly',
    ],
  },
  {
    slug: 'ociuz',
    period: 'May 2016 – Dec 2017',
    company: 'Ociuz Technologies',
    role: 'Software Engineer',
    location: 'Thrissur, India',
    keyOutcome: 'First two production web apps, in C#, ASP.NET MVC and SQL Server',
    techStack: ['C#', 'ASP.NET MVC5', 'Entity Framework', 'MS SQL Server', 'jQuery', 'Bootstrap'],
    bullets: [
      'Built **ASP.NET MVC5 web applications** in C# with Entity Framework and SQL Server',
      'Shipped **We Are Fresh** (an online meat and seafood store) and **Best Holidays** (travel package booking), both with **PayU payments**',
      'Worked on the **frontend, backend and database** from the start',
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
    description: "Version 2 of the UI for a retail analytics app that thousands of L'Oréal staff use. I'm one of a frontend team of 4 redesigning eight modules (Sales, Business Analytics, Products, Services, Traffic, CRM, Control and Brand) in Next.js, React, TypeScript, Material UI and React Query. Most of the work is reusable KPI cards, dashboards, Nivo, Highcharts and D3 charts, and filters, plus checking the numbers with the business and keeping React and UI library versions compatible during the move to V2.",
    impact: [
      "Thousands of L'Oréal retail users",
      '8 modules redesigned for V2',
      'Reusable KPI cards, dashboards, charts & filters',
      'KPI mismatches between test and production data tracked down and fixed',
      'React and UI library versions kept compatible during the migration',
    ],
    tags: ['Next.js', 'React', 'TypeScript', 'Material UI', 'React Query', 'Nivo', 'Highcharts', 'D3'],
    aiAssisted: false,
    featured: true,
    period: 'Jul 2026 – Present',
    company: 'IBM',
  },
  {
    id: 'abercrombie',
    flag: '🇺🇸',
    client: 'Abercrombie & Fitch Co.',
    category: 'Retail · E-Commerce',
    title: 'E-Commerce Frontend Modernization',
    description: 'Moved parts of a legacy Java storefront to React.js Micro Frontends for Abercrombie & Fitch, Hollister and Abercrombie Kids. I built the Product Catalog, Product Details and Wishlist micro frontends on top of a GraphQL Backend-for-Frontend (BFF), with shared React components, analytics tracking, WCAG accessibility, A/B tests, Jest unit tests and Playwright end-to-end tests.',
    impact: [
      'Three brands moved off a legacy Java storefront',
      'Product Catalog, Product Details & Wishlist micro frontends',
      'GraphQL BFF integration',
      'WCAG accessibility, A/B testing & automated test coverage',
    ],
    tags: ['React.js', 'Micro Frontends', 'TypeScript', 'GraphQL BFF', 'Jest', 'Playwright', 'WCAG'],
    aiAssisted: false,
    featured: true,
    period: 'Nov 2025 – Jun 2026',
    company: 'IBM',
  },
  {
    id: 'national-grid',
    flag: '🇺🇸',
    client: 'National Grid USA',
    category: 'Energy · Enterprise',
    title: 'MDS Consolidation EPO Tracking Application',
    description: 'Replaced a legacy SAS desktop application with a web platform: React.js frontend, .NET Core backend, PostgreSQL, hosted on Azure. We were a team of 6. GenAI tools produced the first draft of the code, and most of my effort went into fixing that draft until it met enterprise standards and still followed the old business rules. I also worked on Azure CI/CD, code reviews and production releases.',
    impact: [
      'Legacy SAS desktop app replaced by a web platform',
      'Existing business rules preserved',
      'AI-generated code stabilized to enterprise standard',
      'Azure CI/CD & production deployments',
    ],
    tags: ['React.js', '.NET Core', 'PostgreSQL', 'Azure', 'CI/CD', 'GenAI'],
    aiAssisted: true,
    aiNote: 'GenAI-generated first draft, reviewed and fixed by hand',
    featured: true,
    period: 'Oct 2024 – Oct 2025',
    company: 'IBM',
  },
  {
    id: 'supersonic-imagine',
    flag: '🇫🇷',
    client: 'SuperSonic Imagine',
    category: 'Web · Headless CMS',
    title: 'Corporate Website',
    description: "SuperSonic Imagine's corporate website, built in Next.js and React with Strapi as the headless CMS. Their content team edits pages and media in Strapi without needing a developer.",
    impact: [
      'Content team edits pages in Strapi on their own',
      'Reusable React components',
      'Responsive pages that load quickly',
    ],
    tags: ['Next.js', 'React', 'Strapi', 'Headless CMS'],
    aiAssisted: false,
    featured: false,
    period: 'Jan 2024 – Aug 2024',
    company: 'Emvigo',
  },
  {
    id: 'paragon',
    flag: '🇬🇧',
    client: 'Paragon Energy',
    category: 'Energy · Asset Management',
    title: 'Energy Asset Management Platform',
    description: 'Asset management for the UK energy sector, tracking more than 200,000 smart meters. Reports used to take up to 96 hours; on the new platform they take under 2. I led a frontend team of 3 and built REST APIs and Node.js microservices on PostgreSQL, with Elasticsearch, Logstash and Kibana for search and logs, AWS S3 for storage, and CI/CD.',
    impact: [
      'Reporting time: 96 hours → under 2 hours',
      '200,000+ smart meter assets',
      'Led frontend team of 3 engineers',
      'UK energy sector',
    ],
    tags: ['React.js', 'Node.js', 'Microservices', 'REST APIs', 'PostgreSQL', 'Elasticsearch', 'ELK', 'AWS S3', 'CI/CD'],
    aiAssisted: false,
    featured: true,
    period: '2022 – 2023',
    company: 'Emvigo',
  },
  {
    id: 'refinu',
    flag: '🌐',
    client: 'Refinu',
    category: 'SaaS · Personal Growth',
    title: 'Personalized Growth Platform',
    description: 'A behavioural-science app that gives people assessments, recommendations and progress tracking. I designed it serverless on Google Cloud: React.js and TypeScript in the browser, Node.js on GCP Cloud Functions, Firestore and Firebase for data and sign-in, and push notifications. I also ran the requirement sessions with the client.',
    impact: [
      'Serverless architecture on GCP',
      'Assessment, recommendation and progress workflows',
      'Push notifications',
    ],
    tags: ['React.js', 'Node.js', 'TypeScript', 'GCP Cloud Functions', 'Firestore', 'Firebase'],
    aiAssisted: false,
    featured: false,
    period: '2021 – 2022',
    company: 'Emvigo',
  },
  {
    id: 'golyv',
    flag: '🇬🇧',
    client: 'Go Lyv',
    category: 'Events · SaaS',
    title: 'Event Booking Platform',
    description: 'A UK platform where organisers create events and sell tickets. Built in Next.js with GraphQL and Apollo Client on AWS AppSync, serverless AWS services, MySQL and Firebase. I led the frontend team and did the requirement analysis, planning and estimates.',
    impact: [
      'Led the frontend team',
      'Serverless AWS architecture with AppSync',
      'Requirement analysis, planning & estimation',
      'Live in the UK market',
    ],
    tags: ['Next.js', 'GraphQL', 'Apollo Client', 'AWS AppSync', 'Serverless', 'MySQL', 'Firebase'],
    aiAssisted: false,
    featured: false,
    period: '2020 – 2021',
    company: 'Emvigo',
  },
  {
    id: 'villager',
    flag: '🇮🇳',
    client: 'Villager',
    category: 'Social · Civic Tech',
    title: 'Community Issue Platform',
    description: 'A social platform where people raise, discuss and rate problems in their village so local government can see them. Issues keep an edit history that can be restored. Built with React.js and Redux on Node.js/Express and MongoDB, with Socket.IO chat and notifications, Elasticsearch location search, Keycloak sign-in, and Docker/Kubernetes.',
    impact: [
      'Real-time chat with Socket.IO',
      'Location-based Elasticsearch search',
      'Keycloak authentication',
      'Containerized with Docker & Kubernetes',
    ],
    tags: ['React.js', 'Redux', 'Node.js', 'Express.js', 'MongoDB', 'Elasticsearch', 'Keycloak', 'Socket.IO', 'Docker', 'Kubernetes'],
    aiAssisted: false,
    featured: false,
    period: '2018 – 2020',
    company: 'Luminescent',
  },
  {
    id: 'first-group',
    flag: '🇦🇪',
    client: 'The First Group',
    category: 'Web Portals · CMS',
    title: "Owners' Portal & CMS Portal",
    description: "Two portals for The First Group in Dubai: an owners' investment portal on NopCommerce, and a content portal on Umbraco 7 that their team updates themselves. Both in C#, ASP.NET MVC5, Entity Framework and MS SQL Server.",
    impact: [
      "Owners' investment portal on NopCommerce",
      'CMS portal on Umbraco 7',
      'Client based in Dubai, UAE',
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
    description: 'An online store for fresh meat and seafood, with PayU for payments. Built in ASP.NET MVC5 with C#, Entity Framework, MS SQL Server, jQuery and Bootstrap.',
    impact: [
      'Online fresh meat and seafood store',
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
    description: 'A booking site for holiday travel packages, with PayU for payments. Built in ASP.NET MVC5 with C#, Entity Framework, MS SQL Server, jQuery and Bootstrap.',
    impact: [
      'Travel package booking site',
      'PayU payment integration',
      'Full stack: UI, server and database',
    ],
    tags: ['C#', 'ASP.NET MVC5', 'Entity Framework', 'MS SQL Server', 'jQuery', 'Bootstrap', 'PayU'],
    aiAssisted: false,
    featured: false,
    company: 'Ociuz',
  },
];

// ─── Stats ──────────────────────────────────────────────────────────────────

// Project count comes from `projects` so it always matches the cards on the site.
export const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: String(projects.length), label: 'Projects Delivered' },
  { value: '4',   label: 'Companies' },
  { value: '3',   label: 'Cloud Platforms' },
];

// ─── FAQ ──────────────────────────────────────────────────────────────────────

export type FAQItem = { q: string; a: string };

export const faq: FAQItem[] = [
  {
    q: 'What does Abin PM do as a freelance full stack developer?',
    a: 'I build and modernize web applications end to end: React and Next.js frontends, Node.js, NestJS or .NET Core APIs, PostgreSQL or MongoDB, and deployment on AWS, Azure or GCP. Typical freelance work is a new product build, moving a legacy app to React, adding a GraphQL BFF, or cleaning up code that an AI tool wrote. I take freelance contracts, remote full-time roles and on-site roles.',
  },
  {
    q: 'Can I hire Abin PM as a developer in Dubai or the UAE?',
    a: "Yes. I'm open to remote work for UAE companies and to relocating to Dubai for the right full-time role. Dubai is only 1.5 hours behind India, so a remote setup shares almost the whole working day. I've already delivered for a Dubai client: two .NET portals for The First Group.",
  },
  {
    q: 'Does Abin PM work with companies in Europe?',
    a: "Yes, remotely or by relocating. I've worked with European clients including L'Oréal and SuperSonic Imagine in France and Paragon Energy and Go Lyv in the UK. India is 3.5 to 4.5 hours ahead of Central Europe, so my afternoon is your morning and we overlap for most of your working day.",
  },
  {
    q: 'Is Abin PM open to relocation?',
    a: "Yes, to Dubai/UAE and to Europe, for a full-time role that's a good fit. On-site roles would go through the employer's normal work-permit process. If you'd rather start remote and decide on relocation later, that works too.",
  },
  {
    q: 'How much does it cost to hire Abin PM?',
    a: "It depends on the shape of the work. I price freelance work three ways: hourly for open-ended or exploratory work, a monthly retainer for ongoing product work, or a fixed price for a well-defined scope. Send me a short description of what you need and I'll reply with a quote within 24 hours. For full-time roles, salary is discussed as part of the normal hiring process.",
  },
  {
    q: 'How does Abin PM use AI tools like Cursor, Copilot and Claude?',
    a: "Daily, as drafting and review tools rather than as a replacement for thinking. At IBM I worked on National Grid code that GenAI tools had generated, and much of the job was finding where it was wrong: logic gaps, drift from the architecture, missing business rules. So I use these tools to go faster on routine work and I read everything they produce before it ships.",
  },
  {
    q: 'Can Abin PM add AI or LLM features to an existing app?',
    a: "Yes. Adding an LLM feature to a React and Node.js app is ordinary API and backend work: a server-side endpoint that calls the OpenAI or Claude API, streaming responses to the UI, and guarding cost, latency and failures. I'll be straight with you about scope. My production AI experience is AI-assisted development and stabilizing generated code, not running large ML systems.",
  },
  {
    q: 'How quickly can Abin PM start?',
    a: "For freelance work, usually within a week of agreeing scope. For full-time roles it depends on my notice period, which I'll confirm when we talk. Email is the fastest way to reach me.",
  },
];

// ─── Blog Posts ───────────────────────────────────────────────────────────────

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  /** Last substantive edit (ISO date); used for dateModified and the sitemap. */
  updated?: string;
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
    updated: '2026-10-11',
    readTime: '6 min read',
    category: 'Hiring',
    tags: ['React', 'Hiring'],
    excerpt:
      'Most companies hiring React developers from India make the same three mistakes. This is what I would look for, after ten years of being on the other side of those interviews.',
  },
  {
    slug: 'ai-native-workflow-cursor-copilot-claude',
    title: 'How I Actually Use Cursor, Copilot and Claude on Client Work',
    date: '2026-01-28',
    updated: '2026-10-11',
    readTime: '8 min read',
    category: 'AI-Assisted',
    tags: ['AI-Assisted', 'Cursor', 'GitHub Copilot'],
    excerpt:
      'A plain account of where Cursor, GitHub Copilot and Claude help on enterprise React and Node.js work, where they get in the way, and the checks I run before anything they wrote gets merged.',
  },
  {
    slug: 'sas-to-react-national-grid-modernization',
    title: "From SAS to React: How We Modernized National Grid's EPO Tracking Application",
    date: '2026-01-15',
    updated: '2026-10-11',
    readTime: '10 min read',
    category: 'Case Study',
    tags: ['Case Study', 'React', 'Legacy Modernization'],
    excerpt:
      'How a team of six moved a legacy SAS desktop tool to React.js and .NET Core, with GenAI writing the first draft, and what it took to make that draft safe to ship.',
  },
  {
    slug: 'genai-code-stabilization-enterprise',
    title: 'When (and When Not) to Use GenAI for Production Code',
    date: '2025-12-20',
    updated: '2026-10-11',
    readTime: '7 min read',
    category: 'AI-Assisted',
    tags: ['GenAI', 'AI-Assisted', 'Enterprise'],
    excerpt:
      'GenAI writes code quickly, and some of it is wrong in ways that are hard to spot. These are the checks I use to decide what AI-generated code can go to production and what needs rewriting.',
  },
  {
    slug: 'llm-integration-existing-react-app',
    title: 'Integrating LLMs into an Existing React + Node.js Application',
    date: '2025-12-05',
    updated: '2026-10-11',
    readTime: '9 min read',
    category: 'LLMs',
    tags: ['LLMs', 'React', 'Node.js', 'OpenAI'],
    excerpt:
      'A practical guide to adding an LLM feature to a React frontend and Node.js backend without rebuilding the app: where the API call lives, streaming, cost limits and failure handling.',
  },
  {
    slug: 'micro-frontend-architecture-react',
    title: 'Micro Frontends with React: What I Learned at Abercrombie & Fitch',
    date: '2025-11-18',
    updated: '2026-10-11',
    readTime: '11 min read',
    category: 'React',
    tags: ['React', 'Micro-Frontend', 'Architecture'],
    excerpt:
      'What moving a legacy Java storefront to React micro frontends looked like for three retail brands: how we split the app, what the GraphQL BFF did, and what I would do differently.',
  },
];

// ─── Identity ─────────────────────────────────────────────────────────────────

export const identity = {
  name: 'Abin PM',
  title: 'Senior Full Stack Engineer & Technical Lead',
  location: 'Kochi, Kerala, India',
  email: 'abinpm92@gmail.com',
  phone: '+91 9895 661 651',
  linkedin: 'https://www.linkedin.com/in/abin-p-m-/',
  github: 'https://github.com/abin-pm',
  site: 'https://www.abinaiengineer.com',
  status: 'Available for freelance, remote and relocation roles (Dubai, Europe)',
};
