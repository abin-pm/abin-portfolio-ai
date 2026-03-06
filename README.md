# Abin P M — VS Code Inspired Developer Portfolio

A modern recruiter-focused portfolio built with **Next.js App Router**, **Tailwind CSS**, and **Framer Motion**, inspired by the Visual Studio Code interface.

## Tech Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide Icons

## Experience Design
- VS Code-style explorer sidebar
- Top tabs for section switching
- Editor-like content panels
- Status bar with quick context and theme toggle
- Dark/Light mode with smooth transition

## Sections
- Home
- About
- Skills
- Projects
- Experience
- Contact

## Project Structure
```text
.
├── app
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components
│   ├── portfolio
│   │   ├── PortfolioIDE.tsx
│   │   ├── Sidebar.tsx
│   │   ├── TopTabs.tsx
│   │   ├── StatusBar.tsx
│   │   └── sections
│   └── ui
├── lib
│   └── portfolio-content.ts
├── .github/workflows
│   ├── ci.yml
│   └── cd-vercel.yml
└── next.config.mjs
```

## Local Development
```bash
npm install
npm run dev
```
Open `http://localhost:3000`.

## Production Build
```bash
npm run lint
npm run build
npm run start
```

## CI/CD
### CI
- Workflow: `.github/workflows/ci.yml`
- Runs on PR + push to `main`
- Steps: `npm ci`, `npm run lint`, `npm run build`

### CD (Vercel)
- Workflow: `.github/workflows/cd-vercel.yml`
- Runs on push to `main`
- Deploys with Vercel CLI

Required GitHub Secrets:
- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`
