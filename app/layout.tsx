import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://abinpm.dev'),
  title: 'Senior Full Stack AI Developer | MERN Stack Developer | Abin P M',
  description:
    'Senior Full Stack AI Developer with 10+ years building AI web applications, scalable MERN products, and high-performance React + Node.js systems.',
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
    url: 'https://abinpm.dev',
    type: 'website',
    siteName: 'Abin P M Portfolio',
  },
  alternates: { canonical: 'https://abinpm.dev' },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans">{children}</body>
    </html>
  );
}
