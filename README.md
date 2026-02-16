# Abin P M — Portfolio Website

A production-ready developer portfolio built with **Next.js App Router**, **TypeScript**, and **Tailwind CSS**, styled with a **Visual Studio Code Dark Theme** system.

## Layout System (Desktop Blueprint)
- 1440px desktop canvas inside a macOS-style window frame.
- Header with traffic lights + file title.
- Scrollable editor area with section rhythm:
  - Hero: 720px
  - About: 640px
  - Experience: 640px
  - Skills: 560px
  - Projects: 720px
  - Contact: 520px

## Structure
```text
.
├── app
│   ├── api/contact/route.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components
│   ├── ContactForm.tsx
│   ├── FadeIn.tsx
│   ├── Navbar.tsx
│   ├── ScrollProgress.tsx
│   ├── SectionTitle.tsx
│   └── TypingRole.tsx
├── lib/data.ts
├── tailwind.config.ts
└── package.json
```

## Included UI Patterns
- Sticky navbar with active section highlight.
- Hero typing role animation.
- About section with line numbers + syntax-style biography.
- Experience cards highlighting role impact and technology ownership.
- Skills terminal with stacked progress bars.
- Projects area with tabs-style row and preview cards.
- Contact terminal panel + validated contact form endpoint.

## Accessibility & SEO
- Semantic sections and landmarks.
- `aria-current` in navigation, `aria-live` in typing role, status messaging in form.
- Metadata, canonical URL, Open Graph, and Twitter card in `app/layout.tsx`.

## Run
```bash
npm install
npm run dev
```

## Deploy (Vercel)
1. Push to GitHub.
2. Import repo into Vercel.
3. Keep default Next.js build settings.
4. Deploy.
