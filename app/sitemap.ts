import type { MetadataRoute } from 'next';
import { blogPosts, experience, projects } from '@/lib/data';

const BASE = 'https://abinaiengineer.com';
const date = new Date().toISOString().slice(0, 10);

export default function sitemap(): MetadataRoute.Sitemap {
  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const experienceRoutes: MetadataRoute.Sitemap = experience.map((job) => ({
    url: `${BASE}/experience/${job.slug}`,
    lastModified: date,
    changeFrequency: 'monthly',
    priority: 0.75,
  }));

  const projectRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${BASE}/projects/${p.id}`,
    lastModified: date,
    changeFrequency: 'monthly',
    priority: 0.75,
  }));

  return [
    { url: `${BASE}/`,                        lastModified: date, changeFrequency: 'weekly',  priority: 1.0  },
    { url: `${BASE}/hire-me`,                 lastModified: date, changeFrequency: 'monthly', priority: 0.95 },
    { url: `${BASE}/ai-engineer`,             lastModified: date, changeFrequency: 'monthly', priority: 0.9  },
    { url: `${BASE}/remote-mern-developer`,   lastModified: date, changeFrequency: 'monthly', priority: 0.9  },
    { url: `${BASE}/ai-mern-stack-developer`, lastModified: date, changeFrequency: 'monthly', priority: 0.9  },
    { url: `${BASE}/about`,                   lastModified: date, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/skills`,                  lastModified: date, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/experience`,              lastModified: date, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/projects`,                lastModified: date, changeFrequency: 'monthly', priority: 0.8  },
    { url: `${BASE}/blog`,                    lastModified: date, changeFrequency: 'weekly',  priority: 0.8  },
    ...experienceRoutes,
    ...projectRoutes,
    ...blogRoutes,
  ];
}
