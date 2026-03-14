import { Navbar }        from '@/components/Navbar';
import { Hero }          from '@/components/Hero';
import { TechTicker }    from '@/components/TechTicker';
import { Skills }        from '@/components/Skills';
import { AIEngineer }    from '@/components/AIEngineer';
import { Experience }    from '@/components/Experience';
import { Projects }      from '@/components/Projects';
import { TrustBar }      from '@/components/TrustBar';
import { HireMe }        from '@/components/HireMe';
import { FAQ }           from '@/components/FAQ';
import { Contact }       from '@/components/Contact';
import { Footer }        from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TechTicker />
        <Skills />
        <AIEngineer />
        <Experience />
        <Projects />
        <TrustBar />
        <HireMe />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
