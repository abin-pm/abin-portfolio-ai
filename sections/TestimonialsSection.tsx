import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { testimonials } from '@/lib/site-data';

export function TestimonialsSection() {
  return (
    <AnimatedSection className="mx-auto max-w-6xl px-6 py-16 md:px-10" id="testimonials">
      <SectionHeading
        eyebrow="Testimonials"
        title="What Clients Say"
        description="Feedback from product teams and founders I've partnered with on AI and MERN initiatives."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((item) => (
          <blockquote key={item.name} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm text-slate-300">“{item.quote}”</p>
            <footer className="mt-4 text-sm">
              <p className="font-semibold text-slate-100">{item.name}</p>
              <p className="text-slate-400">{item.role}</p>
            </footer>
          </blockquote>
        ))}
      </div>
    </AnimatedSection>
  );
}
