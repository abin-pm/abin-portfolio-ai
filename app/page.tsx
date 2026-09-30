import { Navbar }        from '@/components/Navbar';
import { Hero }          from '@/components/Hero';
import { TrustBar }      from '@/components/TrustBar';
import { Projects }      from '@/components/Projects';
import { Skills }        from '@/components/Skills';
import { Experience }    from '@/components/Experience';
import { AIEngineer }    from '@/components/AIEngineer';
import { HireMe }        from '@/components/HireMe';
import { BlogPreview }   from '@/components/BlogPreview';
import { FAQ }           from '@/components/FAQ';
import { Contact }       from '@/components/Contact';
import { Footer }        from '@/components/Footer';

// Order: who he is → who he's worked for → what he built → skills → career → how he works → hire.
export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Projects />
        <Skills />
        <Experience compact />
        <AIEngineer />
        <HireMe />
        <BlogPreview />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
