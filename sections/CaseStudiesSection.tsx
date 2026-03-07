import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { caseStudies } from '@/lib/site-data';

export function CaseStudiesSection() {
  return (
    <AnimatedSection className="mx-auto max-w-6xl px-6 py-16 md:px-10" id="case-studies">
      <SectionHeading
        eyebrow="Case Studies"
        title="How I Solve Product and Engineering Challenges"
        description="Structured deep dives into problem framing, architecture decisions, and business outcomes."
      />
      <div className="space-y-6">
        {caseStudies.map((study) => (
          <article key={study.title} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <h3 className="text-xl font-semibold text-slate-100">{study.title}</h3>
            <dl className="mt-4 space-y-3 text-sm text-slate-300">
              <div>
                <dt className="font-semibold text-sky-300">Problem</dt>
                <dd>{study.problem}</dd>
              </div>
              <div>
                <dt className="font-semibold text-sky-300">Solution</dt>
                <dd>{study.solution}</dd>
              </div>
              <div>
                <dt className="font-semibold text-sky-300">Tech Stack</dt>
                <dd>{study.stack}</dd>
              </div>
              <div>
                <dt className="font-semibold text-sky-300">Results</dt>
                <dd>{study.results}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </AnimatedSection>
  );
}
