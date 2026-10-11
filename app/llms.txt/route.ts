import { identity, experience, projects, blogPosts, faq } from '@/lib/data';

// /llms.txt (llmstxt.org): a plain-markdown map of the site for LLM crawlers and AI answer
// engines. Built from lib/data.ts so it never drifts from the pages.
export const dynamic = 'force-static';

const strip = (s: string) => s.replace(/\*\*/g, '');

export function GET() {
  const site = identity.site;
  const body = [
    `# ${identity.name}`,
    '',
    `> ${identity.title} based in ${identity.location}. 10+ years building React, Next.js, Node.js, .NET Core and GraphQL platforms; currently at IBM. ${identity.status}.`,
    '',
    `Contact: ${identity.email} · LinkedIn: ${identity.linkedin} · GitHub: ${identity.github}`,
    '',
    '## Key pages',
    '',
    `- [Hire me](${site}/hire-me): services, availability and how engagements work`,
    `- [Developer for Dubai & UAE](${site}/full-stack-developer-dubai): remote, freelance or relocation to Dubai`,
    `- [Remote developer for Europe](${site}/remote-developer-europe): remote, freelance or relocation for European and UK companies`,
    `- [Projects](${site}/projects): case studies for every project below`,
    `- [Experience](${site}/experience): full employment history`,
    `- [Skills](${site}/skills): technical skills by area`,
    `- [FAQ](${site}/faq): common questions from clients and recruiters`,
    '',
    '## Experience',
    '',
    ...experience.map(
      (job) => `- [${job.role}, ${job.company}](${site}/experience/${job.slug}) (${job.period}): ${strip(job.keyOutcome ?? '')}`,
    ),
    '',
    '## Projects',
    '',
    ...projects.map(
      (p) =>
        `- [${p.client}: ${p.title}](${site}/projects/${p.id})${p.period ? ` (${p.period}${p.company ? `, ${p.company}` : ''})` : ''}: ${p.tags.join(', ')}`,
    ),
    '',
    '## Articles',
    '',
    ...blogPosts.map((post) => `- [${post.title}](${site}/blog/${post.slug}): ${post.excerpt}`),
    '',
    '## FAQ',
    '',
    ...faq.flatMap((item) => [`### ${item.q}`, '', item.a, '']),
  ].join('\n');

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
