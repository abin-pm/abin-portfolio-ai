'use client';

import { TechCard } from '@/components/ui/TechCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { techStack } from '@/lib/site-data';

export function TechStackSection() {
  return (
    <AnimatedSection className="mx-auto max-w-6xl px-6 py-16 md:px-10" id="tech-stack">
      <SectionHeading
        eyebrow="Tech Stack"
        title="Tools I Use to Build Reliable AI & MERN Products"
        description="Modern frontend, backend, cloud, and AI tooling selected for maintainability and performance."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {techStack.map((item) => (
          <TechCard key={item.name} item={item} />
        ))}
      </div>
    </AnimatedSection>
  );
}
