'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import { TypingCode } from '@/components/ui/TypingCode';
import { heroPhrases } from '@/lib/portfolio-content';

export function HeroSection() {
  return (
    <motion.section initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="space-y-5">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-success">console.log(&apos;hello, recruiter&apos;)</p>
      <h1 className="text-4xl font-bold md:text-6xl">Abin P M</h1>
      <TypingCode phrases={heroPhrases} />
      <p className="max-w-3xl text-sm text-secondary md:text-base">
        I design and ship scalable software products with high quality UX, clean architecture, and business-aligned delivery.
      </p>
      <div className="flex flex-wrap gap-3 text-sm">
        <a href="#projects" className="rounded-md bg-accent px-4 py-2 font-semibold text-background transition hover:brightness-110">View Projects</a>
        <a href="#contact" className="rounded-md border border-panel-border px-4 py-2 transition hover:border-accent hover:text-accent">Contact</a>
      </div>
      <div className="flex items-center gap-4 text-secondary">
        <a href="https://github.com/abin-pm" target="_blank" rel="noreferrer" className="hover:text-accent"><Github size={18} /></a>
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="hover:text-accent"><Linkedin size={18} /></a>
      </div>
    </motion.section>
  );
}
