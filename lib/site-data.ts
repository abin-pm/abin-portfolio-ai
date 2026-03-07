import type { LucideIcon } from 'lucide-react';
import {
  Atom,
  Cloud,
  Code2,
  Container,
  Database,
  GitBranch,
  Layers,
  Server,
  Sparkles,
} from 'lucide-react';

export type TechItem = {
  name: string;
  icon: LucideIcon;
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  live: string;
};

export type CaseStudy = {
  title: string;
  problem: string;
  solution: string;
  stack: string;
  results: string;
};

export const navLinks = [
  { href: '#projects', label: 'Projects' },
  { href: '#case-studies', label: 'Case Studies' },
  { href: '#experience', label: 'Experience' },
  { href: '#blog', label: 'Blog' },
  { href: '#contact', label: 'Contact' },
];

export const techStack: TechItem[] = [
  { name: 'React', icon: Atom },
  { name: 'Next.js', icon: Layers },
  { name: 'Node.js', icon: Server },
  { name: 'MongoDB', icon: Database },
  { name: 'Express', icon: GitBranch },
  { name: 'TypeScript', icon: Code2 },
  { name: 'OpenAI API', icon: Sparkles },
  { name: 'AWS', icon: Cloud },
  { name: 'Docker', icon: Container },
];

export const featuredProjects: Project[] = [
  {
    title: 'AI Support Copilot',
    description: 'Built a retrieval-augmented support assistant that cut average first-response time by 62%.',
    tech: ['Next.js', 'Node.js', 'OpenAI', 'Pinecone'],
    image: '/projects/support-copilot.svg',
    github: 'https://github.com/abinpm/ai-support-copilot',
    live: 'https://ai-support-copilot.demo',
  },
  {
    title: 'MERN Analytics Suite',
    description: 'Designed a high-scale analytics dashboard processing 4M+ events/day with real-time insights.',
    tech: ['React', 'Express', 'MongoDB', 'Redis'],
    image: '/projects/analytics-suite.svg',
    github: 'https://github.com/abinpm/mern-analytics-suite',
    live: 'https://mern-analytics.demo',
  },
  {
    title: 'Freelance Delivery OS',
    description: 'Implemented workflow automation for a logistics client, reducing ops overhead by 38%.',
    tech: ['Next.js', 'TypeScript', 'AWS', 'Docker'],
    image: '/projects/delivery-os.svg',
    github: 'https://github.com/abinpm/delivery-os',
    live: 'https://delivery-os.demo',
  },
  {
    title: 'Hiring Intelligence Platform',
    description: 'Shipped AI-powered candidate scoring and interview workflow tools for global remote teams.',
    tech: ['React', 'Node.js', 'OpenAI API', 'PostgreSQL'],
    image: '/projects/hiring-intel.svg',
    github: 'https://github.com/abinpm/hiring-intelligence',
    live: 'https://hiring-intelligence.demo',
  },
];

export const caseStudies: CaseStudy[] = [
  {
    title: 'AI Customer Assist for SaaS',
    problem: 'Support teams struggled with slow resolutions and fragmented product knowledge.',
    solution: 'Created a RAG pipeline with semantic search, answer scoring, and human handoff confidence checks.',
    stack: 'Next.js, Node.js, OpenAI API, Vector DB, AWS Lambda',
    results: '62% faster first response, 34% higher CSAT, and 27% lower support cost per ticket.',
  },
  {
    title: 'MERN B2B Commerce Rebuild',
    problem: 'Legacy storefront had low conversion and frequent outages during traffic spikes.',
    solution: 'Re-architected into modular MERN services with edge caching, job queues, and observability.',
    stack: 'React, Express, MongoDB, Redis, Docker, CloudFront',
    results: '99.95% uptime, 41% conversion increase, and page load under 1.8s globally.',
  },
];

export const timeline = [
  { year: '2014', title: 'Started as Frontend Engineer', detail: 'Focused on JavaScript UX engineering and design systems.' },
  { year: '2017', title: 'Full Stack Transition', detail: 'Expanded into Node.js, APIs, and cloud deployment pipelines.' },
  { year: '2020', title: 'Senior MERN Lead', detail: 'Led cross-functional teams delivering enterprise SaaS platforms.' },
  { year: '2023', title: 'AI Product Specialist', detail: 'Built LLM-powered web apps for automation, analytics, and CX.' },
  { year: '2026', title: 'Freelance & Consulting', detail: 'Delivering high-impact AI and MERN solutions for global clients.' },
];

export const testimonials = [
  {
    quote:
      'Abin transformed our product roadmap into a scalable AI platform. Delivery was fast, thoughtful, and business-focused.',
    name: 'Sarah Chen',
    role: 'Head of Product, Synex Labs',
  },
  {
    quote:
      'One of the most reliable full stack developers we have worked with. Excellent architecture decisions and communication.',
    name: 'Daniel Ortega',
    role: 'CTO, Nova Commerce',
  },
  {
    quote: 'From strategy to implementation, he consistently shipped production-grade features with measurable impact.',
    name: 'Leena Rao',
    role: 'Founder, Clarion SaaS',
  },
];

export const blogPosts = [
  {
    title: 'Building AI SaaS with MERN: Architecture That Scales',
    excerpt: 'A practical blueprint for balancing rapid iteration with reliability in AI-first products.',
    slug: '#',
  },
  {
    title: 'Integrating OpenAI with Node.js for Production Apps',
    excerpt: 'Patterns for prompt orchestration, cost control, and resilient API workflows.',
    slug: '#',
  },
  {
    title: 'Scaling React Apps Without Sacrificing UX',
    excerpt: 'Performance profiling, rendering strategy, and component architecture techniques.',
    slug: '#',
  },
];
