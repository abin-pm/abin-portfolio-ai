export type SectionId = 'home' | 'about' | 'skills' | 'projects' | 'experience' | 'contact';

export type NavItem = {
  id: SectionId;
  label: string;
  tab: string;
};

export type Project = {
  title: string;
  summary: string;
  impact: string;
  stack: string[];
  github: string;
  live: string;
};

export const navItems: NavItem[] = [
  { id: 'home', label: 'home.tsx', tab: 'home.tsx' },
  { id: 'about', label: 'about.md', tab: 'about.md' },
  { id: 'skills', label: 'skills.json', tab: 'skills.json' },
  { id: 'projects', label: 'projects.ts', tab: 'projects.ts' },
  { id: 'experience', label: 'experience.log', tab: 'experience.log' },
  { id: 'contact', label: 'contact.tsx', tab: 'contact.tsx' }
];

export const heroPhrases = [
  'Senior Full Stack Software Engineer',
  'Product-minded Platform Builder',
  'Next.js + TypeScript Specialist'
];

export const skills = {
  frontend: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  backend: ['Node.js', 'Express', 'REST APIs', 'PostgreSQL', 'Redis'],
  cloud: ['AWS', 'Vercel', 'Docker', 'CI/CD', 'Monitoring'],
  practices: ['System Design', 'Accessibility', 'Testing', 'Performance', 'SEO']
};

export const projects: Project[] = [
  {
    title: 'Intelligent Portfolio CMS',
    summary: 'Composable content workspace for recruiter-centric portfolio updates.',
    impact: 'Cut content publishing turnaround by 70% and improved Lighthouse score to 98.',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma'],
    github: 'https://github.com/abin-pm',
    live: 'https://vercel.com'
  },
  {
    title: 'Automotive Intelligence Dashboard',
    summary: 'Live analytics interface for inventory forecasting and lead prioritization.',
    impact: 'Improved sales team response time by 35% through data-driven ranking.',
    stack: ['React', 'Node.js', 'Redis', 'Chart.js'],
    github: 'https://github.com/abin-pm',
    live: 'https://vercel.com'
  },
  {
    title: 'Workflow Automation Suite',
    summary: 'Rule-based SaaS tool for workflow orchestration and approvals.',
    impact: 'Reduced manual ops effort by 40% with trigger automation and audits.',
    stack: ['Next.js', 'tRPC', 'Tailwind CSS', 'Docker'],
    github: 'https://github.com/abin-pm',
    live: 'https://vercel.com'
  }
];

export const experiences = [
  {
    role: 'Senior Full Stack Engineer',
    company: 'Product Engineering Team',
    duration: '2022 — Present',
    highlights: [
      'Led architecture for scalable multi-tenant web platform serving enterprise customers.',
      'Built reusable design systems and reduced UI implementation effort across teams.',
      'Mentored engineers on performance, code quality, and release discipline.'
    ]
  },
  {
    role: 'Software Engineer',
    company: 'Growth SaaS Startup',
    duration: '2019 — 2022',
    highlights: [
      'Delivered core revenue features with strong UX and resilient backend services.',
      'Implemented CI checks and deployment workflows to reduce release risk.',
      'Partnered with product and design to ship high-impact roadmap initiatives.'
    ]
  }
];
