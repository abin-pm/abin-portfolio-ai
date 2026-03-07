import dynamic from 'next/dynamic';
import { SiteHeader } from '@/components/SiteHeader';
import { HeroSection } from '@/sections/HeroSection';
import { TechStackSection } from '@/sections/TechStackSection';
import { FeaturedProjectsSection } from '@/sections/FeaturedProjectsSection';
import { ContactSection } from '@/sections/ContactSection';
import { personSchema, softwareDeveloperSchema } from '@/lib/schema';

const CaseStudiesSection = dynamic(() => import('@/sections/CaseStudiesSection').then((mod) => mod.CaseStudiesSection));
const ExperienceTimelineSection = dynamic(() =>
  import('@/sections/ExperienceTimelineSection').then((mod) => mod.ExperienceTimelineSection),
);
const TestimonialsSection = dynamic(() => import('@/sections/TestimonialsSection').then((mod) => mod.TestimonialsSection));
const AvailabilitySection = dynamic(() => import('@/sections/AvailabilitySection').then((mod) => mod.AvailabilitySection));
const BlogSection = dynamic(() => import('@/sections/BlogSection').then((mod) => mod.BlogSection));

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <TechStackSection />
        <FeaturedProjectsSection />
        <CaseStudiesSection />
        <ExperienceTimelineSection />
        <TestimonialsSection />
        <AvailabilitySection />
        <BlogSection />
        <ContactSection />
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareDeveloperSchema) }}
      />
    </>
  );
}
