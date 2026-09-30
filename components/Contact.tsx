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
            <h2 className="mb-5 text-3xl text-ink md:text-4xl">
              Let&apos;s Build Something Exceptional
            </h2>

            {/* Availability badge */}
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-border-strong bg-surface px-4 py-1.5">
              <span className="h-2 w-2 animate-pulse rounded-full bg-sage" />
              <span className="text-xs text-sage-dark">
                Available now — can start within days
              </span>
            </div>

            <p className="mb-8 max-w-lg text-muted">
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
                      <span className="text-sm text-muted transition-colors group-hover:text-ink">
                        {item.label}
                      </span>
                      {item.external && (
                        <span className="ml-auto text-[10px] text-subtle transition-colors group-hover:text-muted">↗</span>
                      )}
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <Link
              href="/hire-me"
              className="btn-primary w-fit"
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
            <p className="mb-5 font-serif text-2xl text-ink">
              Send a message
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
