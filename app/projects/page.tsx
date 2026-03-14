import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ProjectsClient } from '@/components/ProjectsClient';

export const metadata: Metadata = {
  title: 'Projects | Abin PM — Full Stack & AI Engineer',
  description:
    '6 production platforms by Abin PM across retail, energy, events, and civic tech — IBM, Abercrombie & Fitch, National Grid, Paragon Energy, Go Lyv, Refinu.',
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#080810] pt-28">
        <ProjectsClient />
      </main>
      <Footer />
    </>
  );
}
