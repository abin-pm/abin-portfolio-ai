import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ProjectsClient } from '@/components/ProjectsClient';

export const metadata: Metadata = {
  title: 'Projects & Case Studies | Abin PM, Senior Full Stack Engineer',
  description:
    'Case studies from 11 projects: L’Oréal, Abercrombie & Fitch, National Grid, Paragon Energy, Go Lyv, SuperSonic Imagine and The First Group in Dubai. React, Node.js and .NET.',
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
