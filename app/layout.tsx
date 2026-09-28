import type { Metadata } from 'next';
import { Newsreader } from 'next/font/google';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { getPersonSchema, getProfessionalServiceSchema, getFAQPageSchema } from '@/lib/json-ld';
import { identity } from '@/lib/data';
import './globals.css';

const newsreader = Newsreader({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-newsreader',
  display: 'swap',
  // next/font ships no fallback metrics for Newsreader; use Georgia as-is.
  adjustFontFallback: false,
  fallback: ['Georgia', 'serif'],
});

export const metadata: Metadata = {
  metadataBase: new URL(identity.site),
  title: 'Abin PM – Senior Full Stack & AI Developer (React, Node.js)',
  description:
    'Senior Full Stack Engineer with 10+ years building React, Next.js, Node.js and AI-assisted enterprise platforms for L’Oréal, Abercrombie & Fitch and National Grid.',
  applicationName: 'Abin PM Portfolio',
  keywords: [
    'Senior Full Stack Developer',
    'React Developer',
    'Node.js Developer',
    'AI-assisted development',
    'Freelance Full Stack Developer India',
  ],
  openGraph: {
    title: 'Abin PM – Senior Full Stack & AI Developer',
    description:
      'React, Next.js, Node.js and AI-assisted engineering for enterprise and startup web platforms.',
    url: '/',
    type: 'website',
    siteName: 'Abin PM Portfolio',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Abin PM – Senior Full Stack & AI Developer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abin PM – Senior Full Stack & AI Developer',
    description:
      'React, Next.js, Node.js and AI-assisted engineering for enterprise and startup web platforms.',
    images: ['/og-image.jpg'],
  },
  alternates: { canonical: '/' },
  manifest: '/manifest.webmanifest',
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
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} ${newsreader.variable}`}
    >
      <body className="min-h-screen bg-cream font-sans text-ink antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getPersonSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getProfessionalServiceSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQPageSchema()) }}
        />
      </body>
    </html>
  );
}
