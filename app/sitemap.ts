import type { MetadataRoute } from 'next';

const BASE = 'https://abinaiengineer.com';
const date = new Date().toISOString().slice(0, 10);

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${BASE}/`,            lastModified: date, changeFrequency: 'weekly',  priority: 1 },
    { url: `${BASE}/hire-me`,     lastModified: date, changeFrequency: 'monthly', priority: 0.95 },
    { url: `${BASE}/ai-engineer`, lastModified: date, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/about`,       lastModified: date, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/projects`,    lastModified: date, changeFrequency: 'monthly', priority: 0.8 },
  ];
}
