import { identity, faq } from './data';

export function getPersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: identity.name,
    jobTitle: identity.title,
    url: identity.site,
    email: identity.email,
    telephone: '+919895661651',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kochi',
      addressRegion: 'Kerala',
      addressCountry: 'IN',
    },
    sameAs: [identity.linkedin, identity.github],
    knowsAbout: [
      'React.js', 'Next.js', 'Node.js', 'MERN Stack', 'Microservices',
      'AWS', 'TypeScript', 'AI-Assisted Development', 'Cursor AI',
      'LLM Integration', 'GenAI Engineering', 'Full Stack Development',
    ],
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Anna University',
    },
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Bachelor of Engineering',
      educationalLevel: 'Bachelor',
      about: 'Electronics and Communication Engineering',
    },
  };
}

export function getProfessionalServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Abin PM — Full Stack Developer & AI Engineer',
    description:
      'Senior freelance React, MERN stack, and AI-native developer available for hire from India. 9+ years enterprise experience. AI-accelerated delivery.',
    url: identity.site,
    areaServed: 'Worldwide',
    availableLanguage: 'English',
    provider: {
      '@type': 'Person',
      name: identity.name,
    },
  };
}

export function getFAQPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}
