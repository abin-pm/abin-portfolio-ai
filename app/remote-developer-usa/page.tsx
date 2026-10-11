import type { Metadata } from 'next';
import { RegionLanding } from '@/components/RegionLanding';

const PATH = '/remote-developer-usa';

export const metadata: Metadata = {
  title: 'Remote Full Stack Developer for US Companies | React, Node.js, .NET | Abin PM',
  description:
    'Senior remote React, Next.js, Node.js and .NET developer for US companies. Past work for Abercrombie & Fitch and National Grid USA through IBM. Remote, contract or relocation.',
  keywords: [
    'remote full stack developer USA',
    'hire remote React developer US',
    'offshore senior React developer',
    'remote Next.js contractor',
    'remote .NET Core developer',
    'senior developer relocate to USA',
  ],
  alternates: { canonical: PATH },
  openGraph: {
    // Pages that set openGraph drop the root file-based image, so reference it explicitly.
    images: ['/opengraph-image'],
    title: 'Remote Full Stack Developer for US Companies | Abin PM',
    description:
      'React, Next.js, Node.js and .NET for US teams. Built for Abercrombie & Fitch and National Grid USA. Remote, contract or relocation.',
    url: PATH,
  },
  twitter: { card: 'summary_large_image' },
};

export default function USAPage() {
  return (
    <RegionLanding
      path={PATH}
      breadcrumb="Remote Developer for the US"
      badge="Available for US roles and projects"
      title="Remote Full Stack Developer"
      titleAccent="for US companies"
      intro={
        <>
          I&apos;m a senior full stack engineer at IBM with 10+ years of React, Next.js, Node.js and
          .NET work. My last two IBM projects were for US companies, Abercrombie &amp; Fitch and
          National Grid USA, working with US stakeholders from India. I take remote and contract
          work, and I&apos;m open to relocating to the US for the right full-time role.
        </>
      }
      workHeading="Work for US clients"
      work={[
        { href: '/projects/abercrombie', client: 'Abercrombie & Fitch', what: 'Product Catalog, Product Details and Wishlist moved from a legacy Java storefront to React micro frontends on a GraphQL BFF, across three brands.' },
        { href: '/projects/national-grid', client: 'National Grid USA', what: 'A legacy SAS desktop tool replaced by a React.js and .NET Core platform on PostgreSQL and Azure, including fixing GenAI-generated code.' },
        { href: '/blog/micro-frontend-architecture-react', client: 'Article: micro frontends at A&F', what: 'How the storefront was split, what the BFF did, and what I would do differently.' },
        { href: '/blog/sas-to-react-national-grid-modernization', client: 'Article: SAS to React', what: 'What it took to make a GenAI-generated first draft safe to ship for a US utility.' },
      ]}
      timezones={[
        { place: 'US East (ET)', diff: 'India is 9.5 to 10.5 hours ahead', overlap: 'Your morning, my evening' },
        { place: 'US Central (CT)', diff: 'India is 10.5 to 11.5 hours ahead', overlap: 'Your early morning, my late evening' },
        { place: 'US West (PT)', diff: 'India is 12.5 to 13.5 hours ahead', overlap: 'Short overlap; mostly async' },
      ]}
      hoursNote={
        <>
          The gap is large, so US work runs on a few hours of overlap plus good written handovers.
          I&apos;ve worked this way with US stakeholders at IBM: my evening covers your morning
          stand-up and calls, and I work through the rest of the list while you&apos;re offline.
        </>
      }
      options={[
        { title: 'Contract or freelance', desc: 'Fixed-price, hourly or monthly. I invoice you directly, or work through your contractor platform or agency.' },
        { title: 'Full-time remote', desc: 'Directly or through an employer-of-record service, with an agreed daily overlap window.' },
        { title: 'Relocation to the US', desc: 'For the right full-time role I am open to moving, through the employer’s work visa process.' },
      ]}
      faqHeading="Questions from US employers and clients"
      faq={[
        {
          q: 'How do you handle the time difference with the US?',
          a: "India is 9.5 to 10.5 hours ahead of the US East Coast. I keep a fixed overlap window in my evening for stand-ups, calls and reviews, and leave clear written updates at the end of my day so nothing waits on a meeting. I worked this way with US stakeholders on National Grid and Abercrombie & Fitch.",
        },
        {
          q: 'Have you worked for US companies before?',
          a: "Yes, through IBM. I built product catalog, product details and wishlist micro frontends for Abercrombie & Fitch, Hollister and Abercrombie Kids, and worked on replacing National Grid USA's legacy SAS desktop tool with a React and .NET Core web platform.",
        },
        {
          q: 'Can you work as a contractor for a US company?',
          a: 'Yes. I can invoice you directly as an independent contractor, or work through an employer-of-record or contractor platform if that is how your company hires internationally.',
        },
        {
          q: 'Are you open to relocating to the US?',
          a: "Yes, for a full-time role that's a good fit. It would go through the employer's work visa process, so I'm happy to start remotely while that runs.",
        },
      ]}
      ctaHeading="Hiring a remote developer in the US?"
    />
  );
}
