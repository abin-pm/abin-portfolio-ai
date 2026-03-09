import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.abinaiengineer.com'),
  title: 'Senior Full Stack AI Developer | MERN Stack Developer | Abin P M',
  description:
    'Abin PM is a Senior Full Stack Developer building scalable React, Next.js, Node.js, and AI-powered applications for startups and enterprise teams.',
  applicationName: 'Abin P M Portfolio',
  keywords: [
    'Senior Full Stack AI Developer',
    'MERN Stack Developer',
    'AI Web Application Developer',
    'React Node.js Developer',
    'Freelance Full Stack Developer',
  ],
  openGraph: {
    title: 'Senior Full Stack AI & MERN Developer | Abin P M',
    description:
      'Freelance Full Stack Developer specializing in AI web application development with Next.js, React, Node.js, and TypeScript.',
    url: 'https://www.abinaiengineer.com',
    type: 'website',
    siteName: 'Abin P M Portfolio',
    images: [{ url: 'https://www.abinaiengineer.com/opengraph-image', width: 1200, height: 630, alt: 'Abin PM — Senior Full Stack Developer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abin PM | Senior Full Stack AI & MERN Developer',
    description:
      'React, Next.js, Node.js, TypeScript, and AI-powered product engineering for web platforms.',
    images: ['https://www.abinaiengineer.com/opengraph-image'],
  },
  alternates: { canonical: 'https://www.abinaiengineer.com/' },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/logo.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.svg',
    apple: '/logo.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans">{children}</body>
    </html>
  );
}
