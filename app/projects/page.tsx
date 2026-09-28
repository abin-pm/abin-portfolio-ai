import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ProjectsClient } from '@/components/ProjectsClient';

export const metadata: Metadata = {
  title: 'Projects | Abin PM — Full Stack & AI Engineer',
  description:
    '8 production platforms by Abin PM across retail analytics, e-commerce, energy, events and civic tech — L\'Oréal, Abercrombie & Fitch, National Grid, Paragon Energy, Go Lyv, Refinu and more.',
  alternates: { canonical: '/projects' },
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-cream pt-28">
        <ProjectsClient />
      </main>
      <Footer />
    </>
  );
}
