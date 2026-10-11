import type { Metadata } from 'next';
import { RegionLanding } from '@/components/RegionLanding';

const PATH = '/full-stack-developer-dubai';

export const metadata: Metadata = {
  title: 'Full Stack Developer for Dubai & UAE: Remote or Relocation | Abin PM',
  description:
    'Senior React, Next.js, Node.js and .NET developer for Dubai and UAE companies. Remote, freelance or relocation to Dubai. Already delivered portals for a Dubai client.',
  keywords: [
    'full stack developer Dubai',
    'hire React developer Dubai',
    'Next.js developer UAE',
    'freelance web developer Dubai',
    'remote developer for UAE company',
    '.NET developer Dubai',
    'senior software engineer relocate to Dubai',
  ],
  alternates: { canonical: PATH },
  openGraph: {
    // Pages that set openGraph drop the root file-based image, so reference it explicitly.
    images: ['/opengraph-image'],
    title: 'Full Stack Developer for Dubai & UAE | Abin PM',
    description:
      'React, Next.js, Node.js and .NET. Remote, freelance or on-site in Dubai. 1.5 hours from UAE time.',
    url: PATH,
  },
  twitter: { card: 'summary_large_image' },
};

export default function DubaiPage() {
  return (
    <RegionLanding
      path={PATH}
      breadcrumb="Full Stack Developer for Dubai & UAE"
      badge="Available for UAE roles and projects"
      title={<>Full Stack Developer for Dubai &amp; the UAE</>}
      titleAccent="remote, freelance or relocation"
      intro={
        <>
          I&apos;m a senior full stack engineer at IBM with 10+ years of React, Next.js, Node.js and
          .NET work. I&apos;ve built for a Dubai company before, I&apos;m only 1.5 hours ahead of UAE
          time, and I&apos;m open to moving to Dubai for the right full-time role.
        </>
      }
      workHeading="Work that's relevant to UAE companies"
      work={[
        { href: '/projects/first-group', client: 'The First Group, Dubai', what: "An owners' investment portal on NopCommerce and a content portal on Umbraco 7, in C# and ASP.NET MVC." },
        { href: '/projects/abercrombie', client: 'Abercrombie & Fitch', what: 'Product catalog, product pages and wishlist rebuilt as React micro frontends on a GraphQL BFF.' },
        { href: '/projects/loreal', client: "L'Oréal", what: 'Dashboards, KPI cards and charts for a retail analytics app used by thousands of staff.' },
        { href: '/projects/golyv', client: 'Go Lyv', what: 'Event creation and ticket sales on Next.js, GraphQL and AWS AppSync.' },
      ]}
      timezones={[
        { place: 'Dubai / Abu Dhabi (GST, UTC+4)', diff: 'India is 1.5 hours ahead', overlap: 'Your whole working day' },
      ]}
      hoursNote={
        <>
          A 9:00 to 18:00 day in Dubai is 10:30 to 19:30 in Kochi, so we share the whole day for
          calls, stand-ups and reviews. Neither country uses daylight saving, so the gap never
          changes, and since the UAE moved to a Saturday and Sunday weekend our working weeks match.
        </>
      }
      options={[
        { title: 'Freelance or contract', desc: 'A defined project at a fixed price, or hourly or monthly for ongoing work. I invoice from India.' },
        { title: 'Full-time remote', desc: 'I join your team as a senior engineer and work UAE hours from Kochi.' },
        { title: 'Relocation to Dubai', desc: 'For the right full-time role I am open to moving to Dubai, through your normal employment visa process.' },
      ]}
      faqHeading="Questions from UAE employers and clients"
      faq={[
        {
          q: 'Can you work UAE hours from India?',
          a: "Yes, easily. Dubai is UTC+4 and India is UTC+5:30, so I'm only 1.5 hours ahead. A 9 to 6 day in Dubai is 10:30 to 7:30 for me. Since the UAE moved to a Saturday and Sunday weekend, our working weeks line up too.",
        },
        {
          q: 'Are you open to relocating to Dubai?',
          a: "Yes, for a full-time role that's a good fit. Relocation would go through the employer's usual employment visa process. Kochi to Dubai is about a four-hour flight, so visiting for interviews or kickoff meetings is straightforward too.",
        },
        {
          q: 'Have you worked with Dubai companies before?',
          a: "Yes. At Luminescent Software I built two portals for The First Group in Dubai: an owners' investment portal on NopCommerce and a content portal on Umbraco 7 that their team could update without a developer.",
        },
        {
          q: 'What kind of Dubai projects are a good fit?',
          a: "Web platforms with real users and real data: e-commerce, booking and ticketing, customer and owner portals, internal dashboards, and replacing old .NET or Java systems with React and Next.js. I don't have Arabic or right-to-left UI experience on a shipped project yet, so I'll tell you that up front if your product needs it.",
        },
      ]}
      ctaHeading="Hiring a developer in Dubai?"
    />
  );
}
