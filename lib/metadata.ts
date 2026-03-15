import type { Metadata } from 'next';

const SITE_URL = 'https://abinaiengineer.com';

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Hire Abin PM | Senior React Developer & AI-Native Engineer India',
    template: '%s | Abin PM — Full Stack & AI Engineer',
  },
  description:
    'Hire Abin PM — Senior Full Stack Developer & AI-Native Engineer from India. 9+ years. React, Next.js, Node.js, Cursor AI, LLM integration. Freelance & remote.',
  keywords: [
    'hire React developer India',
    'freelance full stack developer India',
    'MERN stack developer for hire',
    'React Next.js developer remote',
    'AI-assisted full stack developer',
    'AI-native developer India',
    'LLM integration developer',
    'GenAI developer for hire',
    'developer with Cursor AI experience',
    'Node.js developer Kochi',
    'AI Engineer full stack',
    'enterprise React developer freelance',
  ],
  authors: [{ name: 'Abin PM', url: SITE_URL }],
  openGraph: {
    type: 'website',
    url: SITE_URL,
    title: 'Hire Abin PM | React Developer & AI-Native Engineer India',
    description:
      '9+ years enterprise full stack + AI-accelerated development with Cursor AI, GitHub Copilot & Claude. IBM, Abercrombie & Fitch, National Grid. Freelance & remote.',
    images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: 'Abin PM — Senior Full Stack Developer' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: [`${SITE_URL}/opengraph-image`],
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
};
