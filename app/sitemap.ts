import type { MetadataRoute } from 'next';
import { blogPosts, experience, projects } from '@/lib/data';

const BASE = 'https://www.abinaiengineer.com';
// Real last-modified dates (from git history). Bump an entry when that page's content
// changes — a build-time date on every URL tells Google lastmod can't be trusted.
const updated = {
  home: '2026-10-11',
  content: '2026-10-11', // lib/data.ts — experience and project pages
  hireMe: '2026-10-11',
  aiEngineer: '2026-10-11',
  remoteMern: '2026-10-11',
  aiMern: '2026-10-11',
  dubai: '2026-10-11',
  europe: '2026-10-11',
  about: '2026-10-11',
  skills: '2026-10-11',
  experience: '2026-10-11',
  faq: '2026-10-11',
  projects: '2026-10-11',
  blog: '2026-10-11',
};

export default function sitemap(): MetadataRoute.Sitemap {
  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: post.updated ?? post.date,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const experienceRoutes: MetadataRoute.Sitemap = experience.map((job) => ({
    url: `${BASE}/experience/${job.slug}`,
    lastModified: updated.content,
    changeFrequency: 'monthly',
    priority: 0.75,
  }));

  const projectRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${BASE}/projects/${p.id}`,
    lastModified: updated.content,
    changeFrequency: 'monthly',
    priority: 0.75,
  }));

  return [
    { url: `${BASE}/`,                        lastModified: updated.home, changeFrequency: 'weekly',  priority: 1.0  },
    { url: `${BASE}/hire-me`,                 lastModified: updated.hireMe, changeFrequency: 'monthly', priority: 0.95 },
    { url: `${BASE}/full-stack-developer-dubai`, lastModified: updated.dubai, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/remote-developer-europe`,  lastModified: updated.europe, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/ai-engineer`,             lastModified: updated.aiEngineer, changeFrequency: 'monthly', priority: 0.9  },
    { url: `${BASE}/remote-mern-developer`,   lastModified: updated.remoteMern, changeFrequency: 'monthly', priority: 0.9  },
    { url: `${BASE}/ai-mern-stack-developer`, lastModified: updated.aiMern, changeFrequency: 'monthly', priority: 0.9  },
    { url: `${BASE}/about`,                   lastModified: updated.about, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/skills`,                  lastModified: updated.skills, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/experience`,              lastModified: updated.experience, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/faq`,                     lastModified: updated.faq, changeFrequency: 'monthly', priority: 0.8  },
    { url: `${BASE}/projects`,                lastModified: updated.projects, changeFrequency: 'monthly', priority: 0.8  },
    { url: `${BASE}/blog`,                    lastModified: updated.blog, changeFrequency: 'weekly',  priority: 0.8  },
    ...experienceRoutes,
    ...projectRoutes,
    ...blogRoutes,
  ];
}
