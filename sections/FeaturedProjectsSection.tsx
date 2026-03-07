import { ProjectCard } from '@/components/ui/ProjectCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { featuredProjects } from '@/lib/site-data';

export function FeaturedProjectsSection() {
  return (
    <AnimatedSection className="mx-auto max-w-6xl px-6 py-16 md:px-10" id="projects">
      <SectionHeading
        eyebrow="Featured Projects"
        title="AI and MERN Projects with Real-World Impact"
        description="Selected work focused on performance, product outcomes, and scalable architecture."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </AnimatedSection>
  );
}
