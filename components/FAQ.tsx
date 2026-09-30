import { ChevronDown } from 'lucide-react';
import { faq } from '@/lib/data';
import { SectionWrapper } from '@/components/SectionWrapper';

// Server-rendered on purpose: every answer is in the initial HTML (native
// <details> just hides it), so search engines and AI answer engines can read it.
function FAQItem({ item }: { item: { q: string; a: string } }) {
  return (
    <details className="group overflow-hidden rounded-xl border border-border bg-surface">
      <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-4 font-sans font-semibold text-ink transition hover:text-sage-dark [&::-webkit-details-marker]:hidden">
        <h3 className="font-sans text-base font-semibold text-inherit">{item.q}</h3>
        <ChevronDown
          size={18}
          className="ml-4 shrink-0 text-sage-dark transition-transform duration-200 group-open:rotate-180"
          aria-hidden
        />
      </summary>
      <p className="border-t border-border px-6 py-5 text-sm leading-relaxed text-muted">
        {item.a}
      </p>
    </details>
  );
}

export function FAQ() {
  return (
    <SectionWrapper id="faq" className="px-6 py-32 md:px-10">
      <div className="mx-auto max-w-[720px]">
        <div className="section-label mb-4">FAQ</div>
        <h2 className="mb-3 text-3xl text-ink md:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="mb-12 text-muted">
          Everything hiring managers and clients need to know.
        </p>
        <div className="space-y-3">
          {faq.map((item) => (
            <FAQItem key={item.q} item={item} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
