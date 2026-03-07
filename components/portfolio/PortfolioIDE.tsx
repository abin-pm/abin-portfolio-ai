'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useMemo, useState } from 'react';
import { Sidebar } from '@/components/portfolio/Sidebar';
import { StatusBar } from '@/components/portfolio/StatusBar';
import { TopTabs } from '@/components/portfolio/TopTabs';
import { AboutSection } from '@/components/portfolio/sections/AboutSection';
import { ContactSection } from '@/components/portfolio/sections/ContactSection';
import { ExperienceSection } from '@/components/portfolio/sections/ExperienceSection';
import { HeroSection } from '@/components/portfolio/sections/HeroSection';
import { ProjectsSection } from '@/components/portfolio/sections/ProjectsSection';
import { SkillsSection } from '@/components/portfolio/sections/SkillsSection';
import { navItems, type SectionId } from '@/lib/portfolio-content';

export function PortfolioIDE() {
  const [activeSection, setActiveSection] = useState<SectionId>('home');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  const section = useMemo(() => {
    switch (activeSection) {
      case 'home':
        return <HeroSection />;
      case 'about':
        return <AboutSection />;
      case 'skills':
        return <SkillsSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'experience':
        return <ExperienceSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <HeroSection />;
    }
  }, [activeSection]);

  return (
    <div className={theme}>
      <div className="mx-auto min-h-screen max-w-7xl px-3 py-4 text-primary md:px-6">
        <div className="ide-shell">
          <div className="hidden md:block">
            <Sidebar items={navItems} active={activeSection} onSelect={setActiveSection} />
          </div>

          <div className="flex min-h-[80vh] flex-col">
            <TopTabs items={navItems} active={activeSection} onSelect={setActiveSection} />

            <main id={activeSection} className="flex-1 overflow-hidden p-4 md:p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSection}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  {section}
                </motion.div>
              </AnimatePresence>
            </main>

            <StatusBar theme={theme} onToggleTheme={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))} />
          </div>
        </div>
      </div>
    </div>
  );
}
