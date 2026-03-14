# Prompt vs Current Implementation — Gap Analysis

This document compares the **portfolio spec** (Next.js 14+ Neural Dark, AI-Native Engineer, SEO) with the **current codebase** and lists what is **missing**, **different**, or **incomplete**.

---

## 1. Tech stack gaps

| Spec | Current | Status |
|------|---------|--------|
| next/font — Geist Sans + JetBrains Mono | `globals.css` uses `@import` for Syne, DM Sans, JetBrains Mono | **Missing:** Geist Sans; fonts not via `next/font` |
| Three.js (dynamic, ssr: false) | Not in `package.json` or codebase | **Missing** |
| Framer Motion (lazy loaded where needed) | Present in `package.json`; used in `HeroSection` (portfolio/), not in main `page.tsx` | **Partial:** Not used on main homepage sections |
| next/image for all images | No `next/image` usage found | **Missing** |
| next/link for all navigation | Plain `<a href="#">` in `page.tsx` and `ClientNav` | **Missing:** Should use `next/link` |
| TypeScript strict mode | `tsconfig.json` not checked for `strict: true` | **Verify** |
| next.config (e.g. for images) | `next.config.mjs` minimal; no image config | **OK** (add if using external images) |

---

## 2. Design system — "Neural Dark"

| Spec | Current | Status |
|------|---------|--------|
| Background `#080810` | `--bg: #050508`, `--bg2: #0c0c12` (different) | **Different** |
| Surface card `rgba(99,102,241,0.04)` | `--surface: #16161f` (solid) | **Different** |
| Primary accent `#6366f1` (indigo) | `--accent: #00e5a0` (green) | **Different** |
| Secondary accent `#22d3ee` (cyan) | Not defined as secondary | **Missing** |
| AI accent `#a78bfa` (violet) | Used in `.skill-card-ai` / `.ai-pill` but not as design token | **Partial** |
| Tailwind extend: `colors.indigo`, `cyan`, `violet`, `neural.bg/surface/border` | Tailwind has `brand.bg`, `primary`, `secondary` (blue/indigo-ish but not spec) | **Missing:** Full Neural Dark palette in Tailwind |
| Keyframes: `ticker`, `gradient`, `pulse-glow`, `fade-up`, `shimmer`, `ai-pulse` | `ticker`, `fadeInUp`, `pulse`, `floatGlow` in CSS; no `gradient`, `shimmer`, `ai-pulse` | **Missing:** gradient (H1), shimmer (CTA), ai-pulse (AI badge/cards) |
| Font family `mono: ['JetBrains Mono']` in Tailwind | Only in CSS `--font-mono` | **Partial:** Should be in Tailwind for utility use |

**Summary:** Current theme is a green-accent dark theme; spec is **indigo/cyan/violet “Neural Dark”** with specific tokens and animations. Tailwind config and globals need to be replaced/expanded to match.

---

## 3. Folder structure & components

### Spec structure (flat under `/components`)

- `Navbar.tsx`, `Hero.tsx`, `NeuralBackground.tsx`, `TechTicker.tsx`, `Skills.tsx`, `AIEngineer.tsx`, `Experience.tsx`, `Projects.tsx`, `TrustBar.tsx`, `HireMe.tsx`, `FAQ.tsx`, `Contact.tsx`, `Footer.tsx`, `SectionWrapper.tsx`

### Current structure

- **Navbar:** `ClientNav.tsx` (different name; no “Neural Dark” blur/border on scroll per spec).
- **Hero:** Inline in `app/page.tsx` (no `Hero.tsx`); no `NeuralBackground`, no dual badge (Available + AI-Native), no gradient H1 animation, no “AI stack” micro-strip.
- **TechTicker:** Inline single row in `page.tsx`; spec wants **two rows** (tech + AI tools), JetBrains Mono, second row violet/slower.
- **Skills:** Inline in `page.tsx`; no separate `Skills.tsx`; AI-Native card exists but without “Core differentiator” badge and `ai-pulse` hover.
- **AIEngineer:** **Missing.** No dedicated section between Skills and Experience.
- **Experience:** Inline in `page.tsx`; no IBM “AI tools used” badge strip.
- **Projects:** Inline; no `aiAssisted` badge or “GenAI code baseline → enterprise hardened” note on National Grid card.
- **TrustBar:** **Missing.** (Spec: “Enterprise-Proven”, “AI-Native”, “Remote-Ready”.)
- **HireMe:** **Missing** as component (content exists inline under “Available for Hire” but not as `HireMe.tsx` with spec structure).
- **FAQ:** **Missing.** No FAQ section and no FAQPage schema.
- **Contact:** Inline in `page.tsx`; no `Contact.tsx` component.
- **Footer:** Inline; footer exists but **missing** AI keyword links (React.js Developer India, MERN Stack Expert, AI-Native Developer India, etc.) in JetBrains Mono.
- **SectionWrapper:** **Missing.**
- **NeuralBackground.tsx:** **Missing** (Three.js hero background).

---

## 4. Data layer — `lib/data.ts`

| Spec | Current | Status |
|------|---------|--------|
| Single source: `stats`, `aiTools`, `aiStats`, `techTicker`, `skills`, `experience`, `projects`, `faq` | `lib/data.ts` has different shape: `personalInfo`, `strengths`, `techStack`, `experiences`, `projects` (different types; companies: Briq, Qburst, Luminovaa) | **Wrong:** Data not aligned with spec; homepage doesn’t import it (content is inline) |
| Experience: IBM, Emvigo, Luminescent, Ocuiz with spec bullets | Experience in data.ts is Briq, Qburst, Luminovaa | **Wrong** |
| Projects: A&F, National Grid, Paragon Energy, Refinu with `aiAssisted`, `aiNote`, `flag`, `impact` | Projects in data.ts are different (Automotive, Personalized Growth, Energy Trading) | **Wrong** |
| `faq`: 7 items matching spec Q&A | No `faq` array in data.ts | **Missing** |
| `aiTools` (5 cards), `aiStats` (4 items) | Not in data.ts | **Missing** |
| `techTicker` (full list + AI tools row) | Not in data.ts | **Missing** |

**Action:** Replace/rewrite `lib/data.ts` to match spec and use it in layout + all sections and pages.

---

## 5. Layout & metadata — `app/layout.tsx`

| Spec | Current | Status |
|------|---------|--------|
| `title.template`: `"%s \| Abin PM — Full Stack & AI Engineer"` | No template; different default title | **Missing** |
| `description`: “Hire Abin PM — Senior Full Stack Developer & AI-Native Engineer from India…” | Different description | **Different** |
| `keywords`: Tier 1 + Tier 2 list (hire React developer India, AI-native developer India, etc.) | Different, shorter keyword list | **Different** |
| `authors`: `[{ name: "Abin PM", url: "https://abinaiengineer.com" }]` | Only `name` in page metadata | **Partial** |
| OpenGraph description/title per spec | Different | **Different** |
| `openGraph.images`: `/og-image.png` | Using `opengraph-image` route (dynamic); spec says `/og-image.png` | **Partial** (OK if dynamic OG is intentional) |
| JSON-LD in **layout**: Person, ProfessionalService, FAQPage | JSON-LD only in `page.tsx`: Person + WebSite (no ProfessionalService, no FAQPage) | **Missing:** ProfessionalService, FAQPage; prefer moving all JSON-LD to layout |
| Geist Sans + JetBrains Mono from `next/font` | Not in layout | **Missing** |

---

## 6. Pages

| Route | Spec | Current | Status |
|-------|------|---------|--------|
| `/` | Homepage with all sections, Neural Dark, components from data | Single `page.tsx` with inline sections; no componentization; different theme | **Partial:** Content direction similar; structure and design differ |
| `/hire-me` | **Light theme** conversion page (full spec copy, trust bar, why hire, comparison, services grid, engagement models, process, CTA) | **Does not exist** | **Missing** |
| `/ai-engineer` | **Neural Dark** AI Engineer SEO page (H1, GEO copy, what AI-native means, GenAI stabilization, AI tools, who it’s for, FAQ, CTA) | **Does not exist** | **Missing** |
| `/about` | Third-person, GEO/AIO, Neural Dark | **Does not exist** | **Missing** |
| `/projects` | Full projects listing page | **Does not exist** (only `public/projects/` assets) | **Missing** |

---

## 7. Sitemap & robots

| Spec | Current | Status |
|------|---------|--------|
| `sitemap.ts`: `/` (1.0), `/hire-me` (0.95), `/ai-engineer` (0.9), `/about` (0.85), `/projects` (0.8) | Only `/` with `priority: 1` | **Missing:** All other routes and priorities |
| `robots.ts` | Present; allow /, sitemap URL | **OK** |
| `/public/robots.txt` | Not present (Next.js generates from `robots.ts`) | **Optional:** Spec lists it; static file only needed if you want a physical file |

---

## 8. Hero (spec vs current)

| Spec | Current | Status |
|------|---------|--------|
| `NeuralBackground` (Three.js) behind hero | Grid + glow in CSS, no Three.js | **Missing** |
| Dual badge: “Available for Hire” + “AI-Native Engineer” (violet, ai-pulse) | Single “Available for Freelance & Full-Time Remote” | **Missing:** Second badge + animation |
| H1: “Senior React Developer & AI-Native Engineer for Hire” with gradient animation | “Senior Full Stack & MERN Developer” (different wording, no gradient animation) | **Different** |
| Subheading: keyword-rich paragraph (freelance, India, 9+ years, Cursor AI, etc.) | Shorter tagline; some keywords, not full spec | **Partial** |
| CTA row: View Projects, Hire Me Now, **AI Engineer →** (/ai-engineer) | View Work, Get in Touch, LinkedIn, GitHub (no “AI Engineer” CTA) | **Missing** |
| Stats from `data.stats` | Inline stats (same numbers) | **OK** (should come from data) |
| “AI stack:” micro-strip (Cursor AI · Copilot · Claude · Codex), JetBrains Mono, violet dots | AI pills in “Available for Hire” section only | **Missing** in hero |

---

## 9. Component-level spec vs current

- **TechTicker:** Two rows, opposite directions, row 2 AI tools with violet; currently one row, no AI row.
- **Skills:** AI-Native card with “Core differentiator” label, violet accent, `ai-pulse` on hover; current has AI card but not full spec treatment.
- **AIEngineer (new):** Full section (narrative, AI tools grid, AI stats, “What I can build”, CTA). **Not present.**
- **Experience:** IBM role with “AI tools used: Cursor AI · GitHub Copilot · Claude” strip. **Not present.**
- **Projects:** Cards with `aiAssisted: true` get “AI-Assisted” badge; National Grid note. **Not present.**
- **TrustBar:** Three value props (Enterprise-Proven, AI-Native, Remote-Ready). **Not present.**
- **Footer:** SEO links in JetBrains Mono (React.js Developer India, MERN Stack Expert, AI-Native Developer India, etc.). **Not present.**
- **FAQ:** 7 questions from spec + FAQPage schema. **Not present.**

---

## 10. Identity & brand

- Spec: Site `https://abinaiengineer.com`; current metadata uses `https://www.abinaiengineer.com`. **Align** domain (with or without www) and canonicals.
- Phone: Spec “+91 9895 661 651”; current data has “+91-9895661651”. **Minor** (formatting).
- `lib/data.ts` has wrong email/github (`abinpm@gmail.com`, `github.com/abinpm`). Spec: `abinpm92@gmail.com`, `github.com/abin-pm`. **Fix in data.**

---

## 11. SEO / keywords

- Tier 1/2/3 strategy and natural usage in H1, H2, body, footer not fully applied; many Tier 2 (AI-native, Cursor AI, LLM integration, etc.) and Tier 3 (vibe coding, agentic, etc.) underused or missing.
- `/ai-engineer` and `/about` pages are primary vehicles for AI/GEO keywords; **both pages missing.**

---

## 12. Deliverable order (spec) vs what exists

- **Present:** package.json, tailwind.config.ts (but wrong theme), app/layout.tsx (incomplete metadata/JSON-LD), app/page.tsx (inline content), app/sitemap.ts (minimal), app/robots.ts, some form of nav and footer.
- **Missing files:** `next.config.js` (you have `.mjs`), `lib/metadata.ts`, `lib/data.ts` in spec shape, `SectionWrapper.tsx`, `NeuralBackground.tsx`, `TechTicker.tsx`, `Hero.tsx`, `Skills.tsx`, `AIEngineer.tsx`, `Experience.tsx`, `Projects.tsx`, `TrustBar.tsx`, `HireMe.tsx`, `FAQ.tsx`, `Contact.tsx`, `Footer.tsx` as **separate components**; `app/hire-me/page.tsx`, `app/ai-engineer/page.tsx`, `app/about/page.tsx`, `app/projects/page.tsx`; `public/robots.txt` (optional).

---

## 13. Summary — what’s missing or wrong

1. **Design system:** Neural Dark (indigo/cyan/violet, #080810, spec tokens and keyframes) not implemented; current theme is green-accent dark.
2. **Three.js:** No `NeuralBackground.tsx`; no Three.js dependency.
3. **Fonts:** No Geist Sans; fonts not loaded via `next/font`.
4. **Data:** `lib/data.ts` wrong structure and content; not used as single source of truth; missing `stats`, `aiTools`, `aiStats`, `techTicker`, `faq`, and spec-aligned `experience`/`projects`.
5. **Layout:** Metadata and JSON-LD (Person, ProfessionalService, FAQPage) don’t match spec; no `next/font` in layout.
6. **Missing routes:** `/hire-me`, `/ai-engineer`, `/about`, `/projects`.
7. **Missing components:** `NeuralBackground`, `SectionWrapper`, `TechTicker`, `Hero`, `Skills`, `AIEngineer`, `Experience`, `Projects`, `TrustBar`, `HireMe`, `FAQ`, `Contact`, `Footer` as per spec (current page is one big inline page).
8. **Hero:** No Three.js background, no dual badge, no gradient H1, no “AI Engineer” CTA, no AI stack micro-strip.
9. **FAQ:** No FAQ section and no FAQPage schema.
10. **Footer:** No AI/keyword SEO links in JetBrains Mono.
11. **Sitemap:** Only homepage; missing priorities and other routes.
12. **Navbar:** Not named/structured as spec; blur/border on scroll not verified.
13. **next/link and next/image:** Not used per spec.

---

## 14. Suggested implementation order (to match spec)

1. **Tailwind + design tokens:** Extend Tailwind with Neural Dark colors, keyframes, animations, fontFamily.mono.
2. **`lib/data.ts`:** Rewrite with spec’s `stats`, `aiTools`, `aiStats`, `techTicker`, `skills`, `experience`, `projects`, `faq` (and fix identity/contact).
3. **`lib/metadata.ts`:** Centralize default metadata and template.
4. **`app/layout.tsx`:** Add `next/font` (Geist Sans, JetBrains Mono), spec metadata, and JSON-LD (Person, ProfessionalService, FAQPage).
5. **`SectionWrapper.tsx`:** Generic section wrapper with Framer Motion.
6. **`NeuralBackground.tsx`:** Three.js scene (dynamic import, ssr: false), then add to Hero.
7. **`Navbar.tsx`:** Blur/border on scroll; links to /, /hire-me, /ai-engineer, /about, /projects, #contact.
8. **`Hero.tsx`:** Dual badge, gradient H1, subheading, CTAs (View Projects, Hire Me, AI Engineer →), stats, AI stack strip; use `NeuralBackground`.
9. **`TechTicker.tsx`:** Two rows from `data.techTicker` (and AI row); opposite directions, violet for row 2.
10. **`Skills.tsx`:** From data; AI-Native card with “Core differentiator” and ai-pulse.
11. **`AIEngineer.tsx`:** New section (narrative, aiTools grid, aiStats, “What I can build”, CTA to /ai-engineer).
12. **`Experience.tsx`:** Timeline from data; IBM “AI tools used” strip.
13. **`Projects.tsx`:** Cards from data; aiAssisted badge; National Grid note.
14. **`TrustBar.tsx`:** Three value props.
15. **`HireMe.tsx`:** From spec content.
16. **`FAQ.tsx`:** 7 items from data; accordion; output FAQ schema in layout or page.
17. **`Contact.tsx`** and **`Footer.tsx`:** Spec content and footer SEO links.
18. **`app/page.tsx`:** Compose sections from components; use `next/link` and data.
19. **`app/hire-me/page.tsx`:** Light theme, full spec content.
20. **`app/ai-engineer/page.tsx`:** Neural Dark, AI-engineer SEO content.
21. **`app/about/page.tsx`:** Third-person, GEO/AIO.
22. **`app/projects/page.tsx`:** Full projects listing.
23. **`app/sitemap.ts`:** All five routes with spec priorities.
24. **Optional:** `public/robots.txt` if you want a static file; otherwise `robots.ts` is enough.

This order keeps dependencies clear (data → layout → components → pages → sitemap) and gets the prompt fully implemented with minimal rework.
