'use client';

import { useEffect, useMemo, useState } from 'react';

const navLinks = [
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'hire', label: 'Hire Me' },
  { id: 'contact', label: 'Contact', cta: true },
];

export function ClientNav() {
  const [active, setActive] = useState('skills');

  const sectionIds = useMemo(() => navLinks.map((link) => link.id), []);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target?.id) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0.2, 0.4, 0.6, 0.8] }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [sectionIds]);

  return (
    <nav>
      <a className="nav-logo" href="#hero">
        abin<span>.</span>pm
      </a>
      <ul className="nav-links">
        {navLinks.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              className={`${link.cta ? 'nav-cta' : ''} ${active === link.id ? 'is-active' : ''}`.trim()}
              aria-current={active === link.id ? 'page' : undefined}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
