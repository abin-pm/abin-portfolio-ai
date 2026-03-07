export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Abin P M',
  jobTitle: 'Senior Full Stack AI & MERN Developer',
  url: 'https://www.abinaiengineer.com',
  sameAs: [
    'https://www.linkedin.com/in/abin-p-m-/',
    'https://github.com/abinpm',
  ],
  knowsAbout: [
    'Senior Full Stack AI Developer',
    'MERN Stack Developer',
    'AI Web Application Developer',
    'React Node.js Developer',
    'Freelance Full Stack Developer',
  ],
};

export const softwareDeveloperSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareDeveloper',
  name: 'Abin P M',
  description:
    'Senior Full Stack AI Developer and MERN Stack Developer with 10+ years of experience building scalable AI web applications.',
  knowsAbout: ['Next.js', 'React', 'Node.js', 'MongoDB', 'TypeScript', 'OpenAI API', 'AWS', 'Docker'],
  areaServed: 'Worldwide',
  sameAs: personSchema.sameAs,
};
