import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { timeline } from '@/lib/site-data';

export function ExperienceTimelineSection() {
  return (
    <AnimatedSection className="mx-auto max-w-6xl px-6 py-16 md:px-10" id="experience">
      <SectionHeading
        eyebrow="Experience"
        title="10+ Years of Full Stack Product Engineering"
        description="A condensed journey across frontend, backend, cloud systems, and AI development."
      />
      <ol className="relative border-l border-slate-800 pl-6">
        {timeline.map((item) => (
          <li key={item.year} className="relative mb-8">
            <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-sky-400" />
            <p className="text-sm font-semibold text-sky-300">{item.year}</p>
            <h3 className="mt-1 text-lg font-semibold text-slate-100">{item.title}</h3>
            <p className="mt-1 text-sm text-slate-300">{item.detail}</p>
          </li>
        ))}
      </ol>
    </AnimatedSection>
  );
}
