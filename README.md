# Abin P M — Portfolio Website

Production-ready portfolio built with **Next.js App Router**, **TypeScript**, and **Tailwind CSS** using a **Visual Studio Code Dark Theme** design language.

## Tech Stack
- Next.js 14 (App Router)
- TypeScript (strict mode)
- Tailwind CSS
- Lucide React icons

## Folder Structure

```text
.
├── app
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components
│   ├── ContactForm.tsx
│   ├── Navbar.tsx
│   ├── ScrollProgress.tsx
│   ├── SectionTitle.tsx
│   └── TypingRole.tsx
├── lib
│   └── data.ts
├── next.config.ts
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## Key Features
- Sticky navigation with active section highlight
- Smooth scrolling and scroll progress indicator
- Typing animation in hero section
- Recruiter-focused content hierarchy
- Responsive layout (mobile-first)
- Accessible semantics and labels
- SEO metadata configured in `app/layout.tsx`

## Design Tokens (VS Code Dark Theme)
- Background: `#1E1E1E`
- Surface: `#252526`
- Text: `#D4D4D4`
- Accent Blue: `#569CD6`
- Accent Green: `#6A9955`
- Accent Purple: `#C586C0`

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build for Production

```bash
npm run build
npm run start
```

## Deployment (Vercel)
1. Push this repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and import the repo.
3. Framework preset: **Next.js** (auto-detected).
4. Keep default build command: `next build`.
5. Deploy.

## Accessibility Notes
- Uses semantic sectioning (`section`, `header`, `article`, `nav`).
- Form fields are properly labeled.
- High-contrast dark theme with readable text.
- `aria-current` used for active navigation state.
- Typing role uses `aria-live` for screen reader updates.
