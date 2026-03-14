'use client';

import Link from 'next/link';
import { identity } from '@/lib/data';
import { ContactForm } from '@/components/ContactForm';
import { SectionWrapper } from '@/components/SectionWrapper';

const DIRECT_LINKS = [
  {
    href: `mailto:${identity.email}`,
    label: identity.email,
    icon: '✉️',
    aria: 'Email Abin PM',
  },
  {
    href: `tel:${identity.phone.replace(/\s/g, '')}`,
    label: identity.phone,
    icon: '📞',
    aria: 'Call Abin PM',
  },
  {
    href: identity.linkedin,
    label: 'LinkedIn',
    icon: '💼',
    aria: 'Abin PM on LinkedIn',
    external: true,
  },
  {
    href: identity.github,
    label: 'GitHub',
    icon: '💻',
    aria: 'Abin PM on GitHub',
    external: true,
  },
];

export function Contact() {
  return (
    <SectionWrapper id="contact" className="px-6 py-32 md:px-10">
      <div className="mx-auto max-w-[1100px]">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">

          {/* Left — copy + direct links */}
          <div className="flex flex-col justify-center">
            <div className="section-label mb-4">Let&apos;s Work Together</div>
            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-[#f1f5f9] md:text-4xl">
              Let&apos;s Build Something Exceptional
            </h2>

            {/* Availability badge */}
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-[rgba(34,211,238,0.3)] bg-[rgba(34,211,238,0.05)] px-4 py-1.5">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              <span className="font-mono text-xs text-[#22d3ee]">
                Available now — can start within days
              </span>
            </div>

            <p className="mb-8 max-w-lg text-[#94a3b8]">
              Looking to hire a React developer in India, need a freelance full stack
              engineer, or want an AI-native developer to accelerate your build? Drop a
              message — fastest response is via email.
            </p>

            <ul className="mb-8 flex flex-col gap-3" aria-label="Direct contact options">
              {DIRECT_LINKS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    aria-label={item.aria}
                    className="card group inline-flex w-full items-center gap-3 px-5 py-3.5 no-underline"
                  >
                    <span className="relative z-10 flex w-full items-center gap-3">
                      <span className="text-lg">{item.icon}</span>
                      <span className="font-mono text-sm text-[#94a3b8] transition-colors group-hover:text-[#f1f5f9]">
                        {item.label}
                      </span>
                      {item.external && (
                        <span className="ml-auto font-mono text-[10px] text-[#475569] transition-colors group-hover:text-[#94a3b8]">↗</span>
                      )}
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <Link
              href="/hire-me"
              className="inline-flex w-fit items-center gap-2 rounded-xl bg-[#6366f1] px-7 py-3.5 font-sans font-semibold text-white shadow-[0_0_30px_rgba(99,102,241,0.25)] transition hover:opacity-90 hover:shadow-[0_0_45px_rgba(99,102,241,0.4)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6366f1]"
              aria-label="View full hire page for Abin PM"
            >
              View Full Hire Page
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          {/* Right — contact form */}
          <div>
            <p className="mb-5 font-sans text-lg font-semibold text-[#f1f5f9]">
              Send a message
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
