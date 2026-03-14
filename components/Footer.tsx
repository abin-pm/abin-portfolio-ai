import Link from 'next/link';

const seoLinks = [
  { label: 'React.js Developer India', href: '/#skills' },
  { label: 'MERN Stack Expert', href: '/#skills' },
  { label: 'AI-Native Developer India', href: '/ai-engineer' },
  { label: 'LLM Integration Developer', href: '/ai-engineer' },
  { label: 'Freelance Full Stack Developer', href: '/hire-me' },
  { label: 'Hire React Developer', href: '/hire-me' },
  { label: 'Remote MERN Stack Developer', href: '/remote-mern-developer' },
  { label: 'AI MERN Stack Developer', href: '/ai-mern-stack-developer' },
  { label: 'AI Engineer for Hire', href: '/ai-engineer' },
  { label: 'GenAI Developer India', href: '/ai-engineer' },
  { label: 'Node.js Developer Kochi', href: '/#skills' },
];

export function Footer() {
  return (
    <footer className="border-t border-[rgba(99,102,241,0.12)] bg-[#080810] px-6 py-10 md:px-10">
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-6 flex flex-wrap justify-center gap-3">
          {seoLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-mono text-xs text-[#475569] no-underline transition hover:text-[#6366f1]"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <p className="text-center font-mono text-xs text-[#475569]">
          © {new Date().getFullYear()} Abin PM · Senior Full Stack Developer & AI-Native Engineer ·
          Kochi, Kerala, India
        </p>
      </div>
    </footer>
  );
}
