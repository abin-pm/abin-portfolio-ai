import type { MetadataRoute } from 'next';

const BASE = 'https://abinaiengineer.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastMod = new Date().toISOString().slice(0, 10);
  return [
    { url: BASE + '/', lastModified: lastMod, changeFrequency: 'weekly', priority: 1 },
    { url: BASE + '/hire-me', lastModified: lastMod, changeFrequency: 'monthly', priority: 0.95 },
    { url: BASE + '/ai-engineer', lastModified: lastMod, changeFrequency: 'monthly', priority: 0.9 },
    { url: BASE + '/about', lastModified: lastMod, changeFrequency: 'monthly', priority: 0.85 },
    { url: BASE + '/projects', lastModified: lastMod, changeFrequency: 'monthly', priority: 0.8 },
  ];
}
