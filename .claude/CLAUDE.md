# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Personal portfolio for Abin PM (senior full stack / AI engineer). Next.js 14 App Router, TypeScript, Tailwind CSS, Framer Motion. Deployed to Vercel at `https://www.abinaiengineer.com`.

> `README.md` is out of date — it describes an earlier "VS Code-style" design whose components have been deleted. Trust the code and this file.

## Commands

```bash
npm run dev                     # dev server on :3000
npm run lint                    # next lint
npx tsc --noEmit -p .           # type-check only (writes tsconfig.tsbuildinfo, which is gitignored)
npm run build                   # production build
npm run check:merge-conflicts   # fails if <<<<<<< / ======= / >>>>>>> markers exist
```

There is no test suite. CI (`.github/workflows/ci.yml`, Node 20) runs `npm ci` → `check:merge-conflicts` → `lint` → `build` on PRs and pushes to `main`; pushes to `main` also deploy via `.github/workflows/cd-vercel.yml`.

**Do not run `npm run build` while `npm run dev` is running.** Both write `.next/`; a build overwrites the dev server's output and every page not already cached renders unstyled (the CSS request returns 500). To verify changes while dev is running, use `tsc --noEmit` + `lint` and check pages on the dev server. If it happens: stop dev, `rm -rf .next`, restart dev.

## Architecture

**All site content lives in `lib/data.ts`** — `identity`, `stats`, `skills`, `aiTools`, `experience` (with optional nested `assignment`), `education`, `projects`, `faq`, `blogPosts`, ticker lists. Pages and components render from these arrays; edit content there, not in JSX. Exceptions that hold their own copy:
- `app/projects/[slug]/page.tsx`: `deliveredBy` (project id → experience slug, drives "Delivered At" and related projects), `caseStudyContent` (challenge/approach/outcome per project id), `seoTitles`.
- `components/BlogPostLayout.tsx`: full article bodies (`articleBodies`) and TOCs (`tocItems`) keyed by blog slug. Adding a post means an entry in `blogPosts` *and* a body here.
- The landing pages `app/hire-me`, `app/ai-mern-stack-developer`, `app/remote-mern-developer` define local arrays for their own sections.

Adding a project to `projects` automatically creates `/projects/<id>` (via `generateStaticParams`), a sitemap entry, and home/`/projects` cards; also add it to `deliveredBy` and `caseStudyContent`. Home featured cards are `featured: true` (laid out 2 per row).

**Pages**: `app/page.tsx` composes home sections from `components/` (Hero, TechTicker, Skills, AIEngineer, Experience, Projects, TrustBar, HireMe, BlogPreview, FAQ, Contact). Every page renders the shared `Navbar` + `Footer` itself (the root layout does not). The Navbar is `fixed`, so page `<main>` needs top padding (`pt-28`/`pt-32`). `components/SectionWrapper.tsx` is the fade-in-on-scroll wrapper used by home sections.

**Contact**: `components/ContactForm.tsx` posts to `app/api/contact/route.ts`, which only validates input — it does not send email yet.

## SEO conventions

These fixed a real indexing failure (all pages were canonicalised to another domain); keep them intact:
- `metadataBase` comes from `identity.site` in `app/layout.tsx`. Next.js child pages **inherit the layout's `alternates.canonical`**, so every page must set its own self-referencing canonical, or it will canonicalise to `/`.
- JSON-LD builders are in `lib/json-ld.ts` (Person, ProfessionalService and FAQPage are injected in the root layout; pages add Breadcrumb / Article / case-study schema).
- `components/FAQ.tsx` is deliberately a server component using native `<details>` so answer text is in the static HTML for crawlers/AI answer engines. Don't convert it to click-to-mount animation. FAQPage schema reads the same `faq` array.
- `app/sitemap.ts` and `app/robots.ts` generate those files — don't add static copies in `public/`. The OG image is `public/og-image.jpg`.

## Theme / styling

Light editorial theme. Tokens are defined twice and must stay in sync: CSS variables in `app/globals.css` `:root` and `theme.extend.colors` in `tailwind.config.ts` — `cream` (page bg), `surface` (white cards), `ink`, `muted`, `subtle`, `sage` (+ `dark`/`light`/`band`/`border`), `border` (+ `strong`). Use these tokens, not raw hex; the page `cream` (`#f7f6f3`) is matched to the hero photo's background.

- Fonts: Geist Sans (body/UI) and Newsreader serif via `next/font` in `app/layout.tsx`. `h1`–`h3` default to the serif in `globals.css`; don't add `font-sans font-bold` to headings. No monospace in the UI.
- Shared classes in `globals.css`: `.btn-primary` / `.btn-secondary` (in `@layer components` so utilities like `hidden md:inline-flex` can override them — keep them there), and in `@layer utilities` `.card` (the `.card-violet` / `.card-cyan` / `.card-violet-hover` / `.glass` variants are legacy aliases of the same flat card), `.card-stat`, `.tag-pill`, `.section-label` (eyebrow above section titles).
- The hero image `public/images/abin-hero.png` has its decorative circle baked in; `Hero.tsx` fades its edges with a CSS mask so it blends into the page.

## Repo notes

- `.claude/` holds this file, older planning notes (`portfolio-*.md`, `prompt-vs-implementation-gap-analysis.md` — these describe the previous dark design and are historical), and the personal source documents `Abin_PM_Resume.md` and `abin_pm_full_project_details.md`. The personal documents are gitignored and are the source of truth for experience/project facts in `lib/data.ts`; when they disagree, the project-details file wins on tech/scope and the resume on dates.
