import type { Metadata } from 'next';
import { RegionLanding } from '@/components/RegionLanding';

const PATH = '/remote-developer-relocation';

export const metadata: Metadata = {
  title: 'Remote Full Stack Developer, Open to Relocation Worldwide | Abin PM',
  description:
    'Senior React, Next.js, Node.js and .NET developer available for remote work and relocation: US, Europe, UK, Dubai, Africa, Australia, New Zealand, Singapore, Malaysia and Japan.',
  keywords: [
    'remote full stack developer open to relocation',
    'senior developer willing to relocate',
    'hire international remote developer',
    'remote React developer worldwide',
    'remote developer Africa',
    'remote developer South Africa Kenya Nigeria',
    'full stack developer visa sponsorship',
  ],
  alternates: { canonical: PATH },
  openGraph: {
    // Pages that set openGraph drop the root file-based image, so reference it explicitly.
    images: ['/opengraph-image'],
    title: 'Remote Full Stack Developer, Open to Relocation | Abin PM',
    description:
      'Remote work or relocation across the US, Europe, the Middle East, Africa and Asia-Pacific. React, Next.js, Node.js and .NET.',
    url: PATH,
  },
  twitter: { card: 'summary_large_image' },
};

export default function RelocationHubPage() {
  return (
    <RegionLanding
      path={PATH}
      breadcrumb="Remote Work & Relocation"
      badge="Remote now · open to relocation"
      title="Remote Full Stack Developer"
      titleAccent="open to relocation worldwide"
      intro={
        <>
          I&apos;m a senior full stack engineer at IBM with 10+ years of React, Next.js, Node.js and
          .NET work. I&apos;m looking for remote roles and freelance projects with teams anywhere,
          and I&apos;m open to relocating to the US, Europe, the UK, Dubai, Africa, Australia, New
          Zealand, Singapore, Malaysia or Japan for the right full-time job.
        </>
      }
      workHeading="Pick your region"
      workNote="Each page covers the work I've done that's most relevant there, how our hours line up, and how hiring would work."
      work={[
        { href: '/remote-developer-usa', client: 'United States', what: 'Abercrombie & Fitch and National Grid USA through IBM. Evening overlap with your mornings.' },
        { href: '/remote-developer-europe', client: 'Europe & the UK', what: "L'Oréal, SuperSonic Imagine, Paragon Energy and Go Lyv. Most of your working day overlaps with mine." },
        { href: '/full-stack-developer-dubai', client: 'Dubai & the UAE', what: 'Two portals for The First Group in Dubai. Only 1.5 hours apart.' },
        { href: '/remote-developer-asia-pacific', client: 'Australia, NZ, Singapore, Malaysia & Japan', what: '2.5 to 7.5 hours ahead of India, with good overlap for Singapore, Malaysia and Australia.' },
      ]}
      timezones={[
        { place: 'Dubai / UAE', diff: 'India is 1.5 hours ahead', overlap: 'Your whole working day' },
        { place: 'East Africa: Kenya (UTC+3)', diff: 'India is 2.5 hours ahead', overlap: 'Almost your whole day' },
        { place: 'South Africa (UTC+2)', diff: 'India is 3.5 hours ahead', overlap: 'Most of your day' },
        { place: 'West Africa: Nigeria (UTC+1)', diff: 'India is 4.5 hours ahead', overlap: 'Your morning to afternoon' },
        { place: 'Central Europe', diff: 'India is 3.5 to 4.5 hours ahead', overlap: 'Your morning to late afternoon' },
        { place: 'UK', diff: 'India is 4.5 to 5.5 hours ahead', overlap: 'Your morning and early afternoon' },
        { place: 'US East Coast', diff: 'India is 9.5 to 10.5 hours ahead', overlap: 'Your morning, my evening' },
        { place: 'Singapore & Malaysia', diff: '2.5 hours ahead of India', overlap: 'Almost your whole day' },
        { place: 'Japan', diff: '3.5 hours ahead of India', overlap: 'Your afternoon, my morning' },
        { place: 'Sydney & Melbourne', diff: '4.5 to 5.5 hours ahead of India', overlap: 'Your afternoon, my morning' },
        { place: 'New Zealand', diff: '6.5 to 7.5 hours ahead of India', overlap: 'Your afternoon, my early morning' },
      ]}
      hoursNote="I'm in Kochi, India (IST, UTC+5:30, no daylight saving). For most of the world that means a few hours or more of shared time each day; for the US it means an agreed evening window plus written handovers."
      options={[
        { title: 'Freelance or contract', desc: 'Fixed-price, hourly or monthly, invoiced directly or through your contractor platform.' },
        { title: 'Full-time remote', desc: 'Directly or through an employer-of-record service, with an agreed overlap window.' },
        { title: 'Relocation', desc: 'For the right full-time role, I am open to moving, through the employer’s work visa or permit process.' },
      ]}
      faqHeading="Questions about remote work and relocation"
      faq={[
        {
          q: 'Which countries is Abin PM open to relocating to?',
          a: "The US, the UK and Europe, Dubai and the UAE, Africa, Australia, New Zealand, Singapore, Malaysia and Japan, for a full-time role that's a good fit. Relocation would go through the employer's usual work visa or permit process, and I'm happy to start remotely while that runs.",
        },
        {
          q: 'Do you work with companies in Africa?',
          a: "Yes, I'm open to remote roles and relocation for African companies. I haven't had a client based in Africa yet, but the time zones are easy: India is 2.5 hours ahead of Kenya, 3.5 hours ahead of South Africa and 4.5 hours ahead of Nigeria, so we would share most of the working day.",
        },
        {
          q: 'How does remote work across time zones work in practice?',
          a: "We agree a fixed overlap window for stand-ups, calls and reviews, and I write clear updates at the end of each day. I've worked this way with US, UK, French and Dubai clients from India for most of my career.",
        },
        {
          q: 'Can I hire you as a contractor instead of an employee?',
          a: 'Yes. I can invoice you directly as an independent contractor, or work through an employer-of-record service or a contractor platform if that is how your company hires internationally.',
        },
      ]}
      ctaHeading="Hiring remotely, or looking to relocate someone?"
    />
  );
}
