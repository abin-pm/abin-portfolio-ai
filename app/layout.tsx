import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://abinpm.dev'),
  title: {
    default: 'Abin P M | Senior Full Stack Software Engineer',
    template: '%s | Abin P M'
  },
  description:
    'Developer portfolio of Abin P M — senior full stack software engineer building scalable web platforms with Next.js, TypeScript, Node.js, and cloud architecture.',
  keywords: ['Abin PM', 'Senior Full Stack Engineer', 'Next.js', 'TypeScript', 'Node.js', 'Portfolio'],
  applicationName: 'Abin Portfolio',
  openGraph: {
    title: 'Abin P M | Senior Full Stack Software Engineer',
    description: 'Recruiter-focused portfolio featuring impact-led experience, projects, and engineering capabilities.',
    type: 'website',
    url: 'https://abinpm.dev'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abin P M | Senior Full Stack Software Engineer',
    description: 'Impact-driven full-stack engineering portfolio.'
  },
  alternates: {
    canonical: 'https://abinpm.dev'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
