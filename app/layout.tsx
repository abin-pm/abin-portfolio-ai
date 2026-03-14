import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { defaultMetadata } from '@/lib/metadata';
import { getPersonSchema, getProfessionalServiceSchema, getFAQPageSchema } from '@/lib/json-ld';
import { GlobalBackground } from '@/components/GlobalBackground';
import './globals.css';

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="min-h-screen bg-neural-bg font-sans text-[#f1f5f9] antialiased">
        <GlobalBackground />
        <div className="relative z-10">
          {children}
        </div>
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
