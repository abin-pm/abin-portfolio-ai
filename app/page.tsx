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
import { getFAQPageSchema } from '@/lib/json-ld';

// Order: who he is → who he's worked for → what he built → skills → career → how he works → hire.
export default function HomePage() {
  return (
    <>
      {/* FAQPage schema only on pages that show the FAQ (here, /faq, /hire-me). */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQPageSchema()) }} />
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
