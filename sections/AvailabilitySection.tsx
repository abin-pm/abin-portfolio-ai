import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function AvailabilitySection() {
  return (
    <AnimatedSection className="mx-auto max-w-6xl px-6 py-16 md:px-10" id="availability">
      <div className="rounded-2xl border border-indigo-500/40 bg-indigo-500/10 p-8">
        <SectionHeading
          eyebrow="Freelance Availability"
          title="Available for High-Impact Remote Work"
          description="I currently accept projects via Upwork, Fiverr, and direct remote freelance engagements."
        />
        <div className="flex flex-wrap gap-3 text-sm text-indigo-200">
          <span className="rounded-full border border-indigo-400/40 px-4 py-2">Upwork</span>
          <span className="rounded-full border border-indigo-400/40 px-4 py-2">Fiverr</span>
          <span className="rounded-full border border-indigo-400/40 px-4 py-2">Remote Freelance Work</span>
        </div>
      </div>
    </AnimatedSection>
  );
}
