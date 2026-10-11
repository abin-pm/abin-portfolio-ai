import type { Metadata } from 'next';
import { RegionLanding } from '@/components/RegionLanding';

const PATH = '/remote-developer-asia-pacific';

export const metadata: Metadata = {
  title: 'Full Stack Developer for Australia, NZ, Singapore, Malaysia & Japan | Abin PM',
  description:
    'Senior React, Next.js and Node.js developer for teams in Australia, New Zealand, Singapore, Malaysia and Japan. Remote, freelance or relocation. 2.5 to 7.5 hours from India.',
  keywords: [
    'remote full stack developer Australia',
    'hire React developer Singapore',
    'remote developer New Zealand',
    'full stack developer Malaysia',
    'remote Next.js developer Japan',
    'senior developer relocate to Singapore',
    'senior developer relocate to Australia',
  ],
  alternates: { canonical: PATH },
  openGraph: {
    // Pages that set openGraph drop the root file-based image, so reference it explicitly.
    images: ['/opengraph-image'],
    title: 'Full Stack Developer for Asia-Pacific Teams | Abin PM',
    description:
      'React, Next.js and Node.js for Australia, New Zealand, Singapore, Malaysia and Japan. Remote, freelance or relocation.',
    url: PATH,
  },
  twitter: { card: 'summary_large_image' },
};

export default function AsiaPacificPage() {
  return (
    <RegionLanding
      path={PATH}
      breadcrumb="Developer for Asia-Pacific"
      badge="Available for Asia-Pacific roles and projects"
      title="Full Stack Developer for Asia-Pacific"
      titleAccent="Australia, New Zealand, Singapore, Malaysia & Japan"
      intro={
        <>
          I&apos;m a senior full stack engineer at IBM with 10+ years of React, Next.js, Node.js and
          .NET work. Singapore and Malaysia are only 2.5 hours ahead of me, and Australia and Japan
          are close enough to share most of a working day. I take remote and freelance work, and
          I&apos;m open to relocating for the right full-time role.
        </>
      }
      workHeading="Work that carries over"
      workNote={
        <>
          I haven&apos;t worked for a client based in Asia-Pacific yet. My clients so far have been in
          the US, the UK, France and Dubai, so here is the closest work to what APAC teams usually
          hire for.
        </>
      }
      work={[
        { href: '/projects/abercrombie', client: 'Abercrombie & Fitch: e-commerce', what: 'Product pages and wishlist as React micro frontends on a GraphQL BFF, with WCAG, A/B tests and Playwright.' },
        { href: '/projects/loreal', client: "L'Oréal: retail analytics", what: 'Dashboards, KPI cards and charts across eight modules for thousands of retail staff.' },
        { href: '/projects/paragon', client: 'Paragon Energy: utilities', what: 'Asset platform for 200,000+ smart meters; reporting cut from 96 hours to under 2.' },
        { href: '/projects/refinu', client: 'Refinu: SaaS', what: 'Serverless behavioural-science app on GCP with assessments, recommendations and push notifications.' },
      ]}
      timezones={[
        { place: 'Singapore & Malaysia (UTC+8)', diff: '2.5 hours ahead of India', overlap: 'Almost your whole day' },
        { place: 'Perth (UTC+8)', diff: '2.5 hours ahead of India', overlap: 'Almost your whole day' },
        { place: 'Japan (UTC+9)', diff: '3.5 hours ahead of India', overlap: 'Your afternoon, my morning' },
        { place: 'Sydney & Melbourne (AEST/AEDT)', diff: '4.5 to 5.5 hours ahead of India', overlap: 'Your afternoon, my morning' },
        { place: 'New Zealand (NZST/NZDT)', diff: '6.5 to 7.5 hours ahead of India', overlap: 'Your afternoon, my morning' },
      ]}
      hoursNote={
        <>
          India is behind all of these, so for the eastern side of the region I can start my day
          early to catch your morning stand-up. Singapore, Kuala Lumpur and Perth share nearly the
          whole day with me; New Zealand has the smallest overlap and works best with a fixed
          daily call plus written handovers.
        </>
      }
      options={[
        { title: 'Freelance or contract', desc: 'Fixed-price, hourly or monthly. I invoice you directly from India.' },
        { title: 'Full-time remote', desc: 'Directly or through an employer-of-record service, working your core hours.' },
        { title: 'Relocation', desc: 'Open to moving to Australia, New Zealand, Singapore, Malaysia or Japan for the right full-time role, through the employer’s work visa process.' },
      ]}
      faqHeading="Questions from Asia-Pacific employers and clients"
      faq={[
        {
          q: 'Can you work Australian or New Zealand hours from India?',
          a: 'For Australia, yes. Sydney and Melbourne are 4.5 to 5.5 hours ahead of India, so your afternoon is my morning, and I can start early for your stand-up. Perth is only 2.5 hours ahead. New Zealand is 6.5 to 7.5 hours ahead, so we would agree a fixed daily overlap and rely on written handovers for the rest.',
        },
        {
          q: 'Do Singapore and Malaysia hours work well?',
          a: 'Very well. Both are UTC+8, 2.5 hours ahead of India. A 9:00 to 18:00 day in Singapore or Kuala Lumpur is 6:30 to 15:30 in Kochi, and I can shift my day to cover almost all of it.',
        },
        {
          q: 'Have you worked with companies in Asia-Pacific?',
          a: "Not yet. My clients have been in the US, UK, France and Dubai, including Abercrombie & Fitch, National Grid and L'Oréal through IBM. That's enterprise e-commerce, retail analytics and utilities work, which is close to what many APAC teams are building.",
        },
        {
          q: 'Are you open to relocating to Singapore, Australia, New Zealand, Malaysia or Japan?',
          a: "Yes, for a full-time role that's a good fit, through the employer's usual work visa process. I work in English, so teams that work in English are the best fit, especially in Japan.",
        },
      ]}
      ctaHeading="Hiring in Australia, New Zealand, Singapore, Malaysia or Japan?"
    />
  );
}
