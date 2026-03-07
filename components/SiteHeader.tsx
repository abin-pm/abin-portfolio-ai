import { navLinks } from '@/lib/site-data';

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-slate-800/80 bg-slate-950/85 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-10">
        <a href="#" className="text-sm font-semibold tracking-wide text-slate-100">
          Abin P M
        </a>
        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="text-sm text-slate-300 transition hover:text-sky-400">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
