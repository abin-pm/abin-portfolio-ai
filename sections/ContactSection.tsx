import { Calendar, Github, Linkedin, Mail } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function ContactSection() {
  return (
    <AnimatedSection className="mx-auto max-w-6xl px-6 pb-24 pt-16 md:px-10" id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Let's Build Your Next AI Web Application"
        description="Open to freelance product builds, long-term consulting, and senior engineering opportunities."
      />
      <div className="grid gap-4 text-sm md:grid-cols-2">
        <a className="contact-card" href="mailto:abinpm.dev@gmail.com">
          <Mail className="h-4 w-4 text-sky-400" /> abinpm.dev@gmail.com
        </a>
        <a className="contact-card" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/abin-p-m-/">
          <Linkedin className="h-4 w-4 text-sky-400" /> LinkedIn
        </a>
        <a className="contact-card" target="_blank" rel="noreferrer" href="https://github.com/abinpm">
          <Github className="h-4 w-4 text-sky-400" /> GitHub
        </a>
        <a className="contact-card" target="_blank" rel="noreferrer" href="https://calendly.com/abinpm/30min">
          <Calendar className="h-4 w-4 text-sky-400" /> Book a Calendly Call
        </a>
      </div>
    </AnimatedSection>
  );
}
