export type SkillItem = {
  label: string;
  level: number;
  color: 'blue' | 'green' | 'purple';
};

export type ProjectItem = {
  title: string;
  category: 'Platform' | 'Analytics' | 'Product';
  summary: string;
  problem: string;
  solution: string;
  impact: string;
  tech: string[];
};

export type ExperienceItem = {
  role: string;
  company: string;
  duration: string;
  highlights: string[];
  tech: string[];
};

export const personalInfo = {
  name: 'Abin P M',
  title: 'Senior Full Stack Software Engineer',
  location: 'Kerala, India',
  email: 'abinpm@gmail.com',
  linkedin: 'https://www.linkedin.com/in/abin-p-m-/',
  github: 'https://github.com/abinpm',
  intro:
    'Senior full-stack engineer focused on building scalable, user-centric products that convert technical complexity into business advantage.'
};

export const aboutCode = [
  'const engineer = new Developer({',
  "  mindset: 'product + platform',",
  "  strengths: ['architecture', 'delivery', 'collaboration'],",
  "  focus: 'resilient systems and thoughtful UX',",
  "  principle: 'clarity, speed, and measurable impact'",
  '});'
];

export const skillMetrics: SkillItem[] = [
  { label: 'Next.js / React', level: 92, color: 'blue' },
  { label: 'TypeScript / Node.js', level: 90, color: 'green' },
  { label: 'Cloud & DevOps', level: 82, color: 'purple' },
  { label: 'System Design', level: 86, color: 'blue' },
  { label: 'Performance Optimization', level: 88, color: 'green' }
];

export const projects: ProjectItem[] = [
  {
    title: 'Automotive Market Intelligence Platform',
    category: 'Analytics',
    summary: 'Real-time used-vehicle insights for pricing and inventory decisions.',
    problem: 'Teams lacked fast, reliable visibility into regional inventory and market movement.',
    solution:
      'Built a high-performance analytics interface and API layer with dynamic filters, trend views, and actionable drill-downs.',
    impact: 'Enabled faster pricing decisions and improved confidence in commercial planning.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Redis']
  },
  {
    title: 'AI-Assisted Proposal Workflow',
    category: 'Platform',
    summary: 'Automation layer for proposal drafting and document intelligence.',
    problem: 'Proposal creation was slow, repetitive, and difficult to standardize across teams.',
    solution:
      'Delivered a secure AI-assisted workflow with structured templates, role-based access, and observability hooks.',
    impact: 'Reduced manual effort and improved consistency of high-value submissions.',
    tech: ['Next.js', 'TypeScript', 'Node.js', 'AWS']
  },
  {
    title: 'Personalized Growth Guidance Product',
    category: 'Product',
    summary: 'Behavior-driven wellness recommendations and progress tracking.',
    problem: 'Users struggled with sustained engagement due to generic guidance.',
    solution:
      'Created personalized recommendation pipelines and progress UX patterns tailored to user behavior.',
    impact: 'Improved retention and recurring engagement across key cohorts.',
    tech: ['Next.js', 'MongoDB', 'Node.js']
  }
];

export const experiences: ExperienceItem[] = [
  {
    role: 'Senior Full Stack Software Engineer',
    company: 'Briq',
    duration: 'May 2024 — Present',
    highlights: [
      'Built AI-assisted proposal workflows that improved consistency and reduced turnaround effort.',
      'Implemented secure document processing with role-based access and stronger observability.'
    ],
    tech: ['Next.js', 'TypeScript', 'Node.js', 'AWS']
  },
  {
    role: 'Senior Software Engineer',
    company: 'QBurst',
    duration: 'May 2020 — May 2024',
    highlights: [
      'Delivered analytics-heavy product features for enterprise clients in automotive and fintech domains.',
      'Improved performance and release predictability through API optimization and CI/CD improvements.'
    ],
    tech: ['React', 'Node.js', 'NestJS', 'PostgreSQL']
  }
];
