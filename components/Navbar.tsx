'use client';

import { useEffect, useMemo, useState } from 'react';

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' }
];

export function Navbar() {
  const [active, setActive] = useState('home');
  const ids = useMemo(() => links.map((item) => item.id), []);

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0.15, 0.4, 0.7] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [ids]);

  return (
    <nav className="sticky top-0 z-40 border-b border-white/10 bg-vscode-bg/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a className="text-sm font-semibold tracking-wide text-vscode-blue" href="#home">
          abin.pm
        </a>
        <ul className="flex items-center gap-2 md:gap-4">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`rounded-md px-3 py-2 text-xs md:text-sm transition ${
                  active === link.id ? 'bg-vscode-surface text-vscode-blue' : 'text-vscode-text/75 hover:text-vscode-text'
                }`}
                aria-current={active === link.id ? 'page' : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
