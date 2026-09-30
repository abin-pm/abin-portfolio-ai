import Link from 'next/link';
import { identity } from '@/lib/data';

const columns = [
  {
    title: 'Navigation',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Experience', href: '/experience' },
      { label: 'Projects', href: '/projects' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Skills', href: '/skills' },
      { label: 'AI Engineer', href: '/ai-engineer' },
      { label: 'AI MERN Stack Developer', href: '/ai-mern-stack-developer' },
      { label: 'Remote MERN Developer', href: '/remote-mern-developer' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '/blog' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Hire Me', href: '/hire-me' },
    ],
  },
  {
    title: 'Follow',
    links: [
      { label: 'LinkedIn', href: identity.linkedin },
      { label: 'GitHub', href: identity.github },
      { label: 'Email', href: `mailto:${identity.email}` },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-cream px-6 pt-14 pb-8 md:px-10">
      <div className="mx-auto max-w-[1180px]">
        <div className="grid gap-10 md:grid-cols-[1.2fr_repeat(4,1fr)]">
          <div>
            <Link href="/" className="flex items-center gap-3 no-underline" aria-label="Abin PM — Home">
              <span className="flex h-10 w-10 items-center justify-center rounded-md border border-sage/40 font-serif text-xl text-sage">
                A
              </span>
              <span className="leading-tight">
                <span className="block text-sm font-semibold uppercase tracking-[0.14em] text-ink">Abin PM</span>
                <span className="block text-[0.62rem] uppercase tracking-[0.18em] text-subtle">Full Stack &amp; AI Engineer</span>
              </span>
            </Link>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <p className="mb-4 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-ink">
                {col.title}
              </p>
              <ul className="space-y-2.5">
                {col.links.map((link) => {
                  const external = link.href.startsWith('http') || link.href.startsWith('mailto:');
                  return (
                    <li key={link.label}>
                      {external ? (
                        <a
                          href={link.href}
                          target={link.href.startsWith('http') ? '_blank' : undefined}
                          rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-sm text-muted no-underline transition hover:text-sage-dark"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link href={link.href} className="text-sm text-muted no-underline transition hover:text-sage-dark">
                          {link.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>
          ))}
        </div>

        <p className="mt-12 border-t border-border pt-6 text-xs text-subtle">
          © {new Date().getFullYear()} Abin PM · Senior Full Stack Developer &amp; AI-Native Engineer ·
          Kochi, Kerala, India
        </p>
      </div>
    </footer>
  );
}
