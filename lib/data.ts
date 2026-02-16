export type ExperienceItem = {
  role: string;
  company: string;
  duration: string;
  achievements: string[];
  technologies: string[];
};

export type ProjectItem = {
  title: string;
  problem: string;
  solution: string;
  impact: string;
  tech: string[];
  github?: string;
  live?: string;
};

export const personalInfo = {
  name: 'Abin P M',
  role: 'Senior Full Stack Software Engineer',
  location: 'Kerala, India',
  email: 'abinpm@gmail.com',
  linkedin: 'https://www.linkedin.com/in/abin-p-m-/',
  github: 'https://github.com/abinpm',
  summary:
    'I design and ship scalable web platforms that improve revenue workflows, streamline operations, and elevate customer experience. My focus is high-quality architecture, measurable outcomes, and resilient delivery.'
};

export const strengths = [
  'End-to-end ownership across frontend, backend, and cloud delivery',
  'API and microservice architecture for high-throughput systems',
  'Performance optimization and reliable CI/CD for fast release cycles',
  'Collaborative leadership, mentoring, and stakeholder alignment'
];

export const techStack = {
  frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux'],
  backend: ['Node.js', 'Express', 'NestJS', 'Spring Boot', 'GraphQL'],
  dataCloud: ['PostgreSQL', 'MongoDB', 'Redis', 'AWS (EC2, S3, Lambda)'],
  tooling: ['Docker', 'GitHub Actions', 'Jenkins', 'Jest', 'Cypress']
};

export const experiences: ExperienceItem[] = [
  {
    role: 'Senior Full Stack Software Engineer',
    company: 'Briq',
    duration: 'May 2024 — Present',
    achievements: [
      'Architected AI-assisted workflows for RFP and proposal automation, reducing manual turnaround and improving bid response quality.',
      'Built secure document processing pipelines with role-based access and audit-ready controls for enterprise usage.',
      'Delivered robust integrations and observability improvements that increased system reliability in production.'
    ],
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'AWS', 'PostgreSQL']
  },
  {
    role: 'Senior Software Engineer',
    company: 'Qburst Technologies',
    duration: 'May 2020 — May 2024',
    achievements: [
      'Led full-stack product delivery for fintech and media projects using React, Node.js, and microservice-first architecture.',
      'Improved application performance through bundle optimization and API tuning, resulting in faster page load times and better engagement.',
      'Implemented scalable backend services and deployment pipelines supporting continuous releases with minimal downtime.'
    ],
    technologies: ['React', 'Node.js', 'NestJS', 'Redis', 'MongoDB', 'Docker']
  },
  {
    role: 'Software Engineer',
    company: 'Luminovaa Software Pvt Ltd',
    duration: 'Jan 2018 — Apr 2020',
    achievements: [
      'Developed customer-facing web modules and REST APIs for internal business tools.',
      'Collaborated cross-functionally to convert business requirements into maintainable production features.',
      'Contributed to quality improvements through testing, code reviews, and release hardening.'
    ],
    technologies: ['Angular', 'Node.js', 'MySQL', 'AWS']
  }
];

export const projects: ProjectItem[] = [
  {
    title: 'Automotive Market Intelligence Platform',
    problem:
      'Analysts needed a faster way to monitor used-vehicle market shifts and inventory changes across regions.',
    solution:
      'Engineered a data-rich analytics platform with real-time dashboards, trend filters, and high-performance APIs.',
    impact:
      'Enabled faster, evidence-based pricing decisions and improved operational response time for downstream teams.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Charting Libraries']
  },
  {
    title: 'Personalized Growth Guidance Platform',
    problem:
      'Users lacked personalized clarity around daily progress in health and lifestyle goals.',
    solution:
      'Built recommendation workflows, progress tracking modules, and a content engine tailored to behavior signals.',
    impact:
      'Increased user retention and recurring engagement through more relevant and actionable daily experiences.',
    tech: ['Next.js', 'TypeScript', 'Node.js', 'MongoDB']
  },
  {
    title: 'Energy Trading Management Suite',
    problem:
      'Energy teams needed transparent forecasting and streamlined operations for wholesale market activity.',
    solution:
      'Delivered a modular platform for forecasting insights, transaction workflows, and reporting automation.',
    impact:
      'Reduced operational friction and improved confidence in planning through centralized, auditable tooling.',
    tech: ['React', 'Spring Boot', 'GraphQL', 'PostgreSQL'],
    live: 'https://example.com'
  }
];
