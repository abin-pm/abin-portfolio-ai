'use client';

import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="mx-auto grid max-w-6xl gap-8 px-6 pb-20 pt-28 md:px-10 lg:grid-cols-[1.2fr_auto] lg:items-end lg:pt-36">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        <p className="text-sm uppercase tracking-[0.22em] text-sky-400">10+ Years Experience</p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight text-slate-100 md:text-6xl">
          Senior Full Stack AI &amp; MERN Developer
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-300">
          I design and build fast, production-ready AI web applications with Next.js, React, Node.js, and cloud-native
          infrastructure for startups and enterprises.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-sky-300">
            View Projects
          </a>
          <a href="#contact" className="rounded-full border border-indigo-500 px-6 py-3 text-sm font-semibold text-indigo-200 hover:bg-indigo-500/10">
            Hire Me
          </a>
        </div>
      </motion.div>
      <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 text-sm text-slate-300">
        <p className="text-sky-300">Currently open for:</p>
        <ul className="mt-3 space-y-2">
          <li>• AI Product Engineering</li>
          <li>• MERN Stack Development</li>
          <li>• Fractional Tech Leadership</li>
        </ul>
      </div>
    </section>
  );
}
