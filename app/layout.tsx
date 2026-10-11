import type { Metadata, Viewport } from 'next';
import { Newsreader } from 'next/font/google';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { getPersonSchema, getProfessionalServiceSchema } from '@/lib/json-ld';
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
  title: 'Abin PM – Senior Full Stack Developer (React, Node.js)',
  description:
    'Senior full stack engineer, 10+ years of React, Next.js and Node.js for L’Oréal, Abercrombie & Fitch and National Grid. Freelance, remote or relocation.',
  applicationName: 'Abin PM Portfolio',
  keywords: [
    'Senior Full Stack Developer',
    'React Developer',
    'Node.js Developer',
    'Freelance Full Stack Developer',
    'Remote React Developer',
    'Full Stack Developer Dubai',
    'Remote Developer Europe',
  ],
  openGraph: {
    title: 'Abin PM – Senior Full Stack Developer for Hire',
    description:
      'React, Next.js and Node.js for enterprise and startup teams. Freelance, remote, or on-site in Dubai or Europe.',
    url: '/',
    type: 'website',
    siteName: 'Abin PM Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abin PM – Senior Full Stack Developer for Hire',
    description:
      'React, Next.js and Node.js for enterprise and startup teams. Freelance, remote, or on-site in Dubai or Europe.',
  },
  alternates: { canonical: '/' },
  manifest: '/manifest.webmanifest',
  // Favicons come from the file conventions app/icon.svg (tabs), app/favicon.ico and app/apple-icon.png.
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f7f6f3' },
    { media: '(prefers-color-scheme: dark)', color: '#6f7f63' },
  ],
};

// Runs before first paint so the page never flashes the wrong theme. A saved choice
// (ThemeToggle) wins; otherwise follow the OS setting, including live changes.
const themeScript = `(function(){try{var m=window.matchMedia('(prefers-color-scheme: dark)');var a=function(){var t=localStorage.getItem('theme');document.documentElement.classList.toggle('dark',t?t==='dark':m.matches)};a();m.addEventListener('change',a)}catch(e){}})()`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} ${newsreader.variable}`}
      // The theme script adds `dark` before hydration.
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
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
      </body>
    </html>
  );
}
