import { identity, faq } from './data';

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function getArticleSchema(post: {
  title: string;
  excerpt: string;
  date: string;
  updated?: string;
  slug: string;
}) {
  const url = `${identity.site}/blog/${post.slug}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    url,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    image: `${identity.site}/opengraph-image`,
    author: {
      '@type': 'Person',
      name: identity.name,
      url: identity.site,
      sameAs: [identity.linkedin, identity.github],
    },
    publisher: {
      '@type': 'Person',
      name: identity.name,
      url: identity.site,
    },
  };
}

export function getCaseStudySchema(project: {
  id: string;
  title: string;
  client: string;
  description: string;
  tags: string[];
}) {
  const url = `${identity.site}/projects/${project.id}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: `${project.title} — ${project.client}`,
    description: project.description,
    author: { '@type': 'Person', name: identity.name, url: identity.site },
    url,
    keywords: project.tags.join(', '),
    about: {
      '@type': 'SoftwareApplication',
      name: project.title,
      applicationCategory: 'WebApplication',
    },
  };
}

export function getPersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: identity.name,
    // LinkedIn's URL uses "abin-p-m"; listing both spellings ties them to one entity.
    alternateName: 'Abin P M',
    jobTitle: identity.title,
    url: identity.site,
    image: `${identity.site}/images/abin-hero.png`,
    email: identity.email,
    telephone: '+919895661651',
    worksFor: { '@type': 'Organization', name: 'IBM' },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kochi',
      addressRegion: 'Kerala',
      addressCountry: 'IN',
    },
    sameAs: [identity.linkedin, identity.github],
    knowsAbout: [
      'React.js', 'Next.js', 'Node.js', 'NestJS', 'TypeScript', 'GraphQL',
      'Micro Frontends', 'Microservices', 'MERN Stack', 'PostgreSQL', 'MongoDB',
      'AWS', 'Google Cloud', 'Azure', 'AI-Assisted Development', 'Cursor AI',
      '.NET Core', 'GenAI Engineering', 'Full Stack Development',
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
    name: 'Abin PM, Senior Full Stack Developer',
    description:
      'Freelance and remote React, Next.js, Node.js and .NET development by a senior engineer with 10+ years of enterprise experience. Open to relocation to Dubai or Europe.',
    url: identity.site,
    areaServed: [
      { '@type': 'Country', name: 'United Arab Emirates' },
      { '@type': 'Place', name: 'Europe' },
      { '@type': 'Country', name: 'United Kingdom' },
      { '@type': 'Country', name: 'United States' },
      { '@type': 'Country', name: 'India' },
    ],
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
