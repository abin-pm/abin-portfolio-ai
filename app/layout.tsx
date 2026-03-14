import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { defaultMetadata } from '@/lib/metadata';
import {
  getPersonSchema,
  getProfessionalServiceSchema,
  getFAQPageSchema,
} from '@/lib/json-ld';
import './globals.css';

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const personSchema = getPersonSchema();
  const professionalServiceSchema = getProfessionalServiceSchema();
  const faqSchema = getFAQPageSchema();

  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      style={{ scrollBehavior: 'smooth' }}
    >
      <body className="min-h-screen bg-neural-bg font-sans text-[#f1f5f9] antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(professionalServiceSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </body>
    </html>
  );
}
