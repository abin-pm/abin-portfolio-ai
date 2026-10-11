import type { Metadata } from 'next';
import { RegionLanding } from '@/components/RegionLanding';

const PATH = '/remote-developer-europe';

export const metadata: Metadata = {
  title: 'Remote Full Stack Developer for European Companies | React, Node.js | Abin PM',
  description:
    'Senior remote React, Next.js and Node.js developer for companies in Europe and the UK. Past work for L’Oréal, SuperSonic Imagine and Paragon Energy. Remote, freelance or relocation.',
  keywords: [
    'remote full stack developer Europe',
    'hire remote React developer Europe',
    'freelance Next.js developer Europe',
    'remote Node.js contractor EU',
    'senior developer relocate to Europe',
    'remote developer CET time zone',
    'React developer for UK company',
  ],
  alternates: { canonical: PATH },
  openGraph: {
    // Pages that set openGraph drop the root file-based image, so reference it explicitly.
    images: ['/opengraph-image'],
    title: 'Remote Full Stack Developer for European Companies | Abin PM',
    description:
      'React, Next.js and Node.js for European and UK teams. Remote, freelance or relocation. Most of your working day overlaps with mine.',
    url: PATH,
  },
  twitter: { card: 'summary_large_image' },
};

export default function EuropePage() {
  return (
    <RegionLanding
      path={PATH}
      breadcrumb="Remote Developer for Europe"
      badge="Available for European roles and projects"
      title="Remote Full Stack Developer"
      titleAccent="for companies in Europe and the UK"
      intro={
        <>
          I&apos;m a senior React, Next.js and Node.js engineer at IBM with 10+ years of experience,
          much of it for clients in France and the UK. I work remotely across European hours, take
          freelance projects, and I&apos;m open to relocating for the right full-time role.
        </>
      }
      workHeading="Work for European and UK clients"
      work={[
        { href: '/projects/loreal', client: "L'Oréal (France)", what: 'Version 2 of the Retail Gold analytics UI: eight modules of dashboards, KPI cards and charts in Next.js.' },
        { href: '/projects/supersonic-imagine', client: 'SuperSonic Imagine (France)', what: 'Corporate website in Next.js on Strapi, so the content team can publish without a developer.' },
        { href: '/projects/paragon', client: 'Paragon Energy (UK)', what: 'Asset platform for 200,000+ smart meters. Reporting went from 96 hours to under 2.' },
        { href: '/projects/golyv', client: 'Go Lyv (UK)', what: 'Event and ticketing platform on Next.js, GraphQL and AWS AppSync. I led the frontend team.' },
      ]}
      timezones={[
        { place: 'Central Europe (CET/CEST)', diff: 'India is 3.5 to 4.5 hours ahead', overlap: 'Your morning to late afternoon' },
        { place: 'UK and Ireland (GMT/BST)', diff: 'India is 4.5 to 5.5 hours ahead', overlap: 'Your morning and early afternoon' },
        { place: 'Eastern Europe (EET/EEST)', diff: 'India is 2.5 to 3.5 hours ahead', overlap: 'Almost your whole day' },
      ]}
      hoursNote={
        <>
          I&apos;m on India Standard Time (UTC+5:30), which has no daylight saving, so the gap moves
          by an hour when European clocks change. My afternoon and evening cover your working day,
          and my morning gives me focused time before your day starts.
        </>
      }
      options={[
        { title: 'Freelance or B2B contract', desc: 'I invoice you directly for a fixed-price project or hourly or monthly work. No local entity needed on your side.' },
        { title: 'Full-time remote', desc: 'Directly, or through an employer-of-record service if you hire that way. I work your core hours from India.' },
        { title: 'Relocation to Europe', desc: 'For the right full-time role I am open to moving, through your normal work-permit process.' },
      ]}
      faqHeading="Questions from European employers and clients"
      faq={[
        {
          q: 'How much of the European working day do we share?',
          a: 'Most of it. India is 4.5 hours ahead of Central European Time in winter and 3.5 hours ahead in summer. A 9:00 to 17:00 day in Berlin, Paris or Amsterdam is 13:30 to 21:30 in Kochi in winter, which I can work. For the UK the gap is 5.5 hours in winter and 4.5 in summer.',
        },
        {
          q: 'Have you worked with European companies?',
          a: "Yes. Through IBM I'm working on L'Oréal's Retail Gold analytics app. At Emvigo I built SuperSonic Imagine's corporate website for the French company, and worked on Paragon Energy and Go Lyv for UK clients, leading the frontend team on both.",
        },
        {
          q: 'Do you have accessibility experience?',
          a: 'Yes. On the Abercrombie & Fitch micro frontends, WCAG accessibility was part of every feature I built, alongside analytics, A/B tests and Playwright tests. That matters if you sell online in the EU, where the European Accessibility Act has applied since June 2025.',
        },
        {
          q: 'Are you open to relocating to Europe?',
          a: "Yes, for a full-time role that's a good fit. It would go through the employer's usual work-permit process. Starting remotely and relocating later is also fine with me.",
        },
      ]}
      ctaHeading="Hiring a remote developer in Europe?"
    />
  );
}
