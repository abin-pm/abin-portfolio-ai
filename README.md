# Abin P M — VS Code Inspired Developer Portfolio

A recruiter-focused portfolio built with **Next.js App Router**, **Tailwind CSS**, and **Framer Motion**, designed to feel like a polished Visual Studio Code workspace.

## Tech Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide Icons

## UI/UX Concept
- VS Code-style explorer sidebar
- Top tabs for section navigation
- Editor-like content panels
- Status bar footer with quick status + theme toggle
- Dark/Light mode with smooth theme transitions

## Portfolio Sections
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
│   └── data.ts
├── next.config.mjs
├── package.json
└── package-lock.json
```

## Local Development
```bash
npm ci
npm run dev
```
Open `http://localhost:3000`.

## Production Checks
```bash
npm run lint
npm run build
npm run start
```

## CI/CD
### CI (GitHub Actions)
- Workflow: `.github/workflows/ci.yml`
- Triggers: pull requests + pushes to `main`
- Steps: `npm ci`, `npm run lint`, `npm run build`

### CD (Vercel)
- Workflow: `.github/workflows/cd-vercel.yml`
- Triggers: pushes to `main` + manual `workflow_dispatch`
- Deploys using Vercel CLI (`vercel pull`, `vercel build`, `vercel deploy`)
- Uses workflow concurrency (`vercel-production`) to avoid overlapping production deploys
- Trigger: pushes to `main`
- Deploys using Vercel CLI (`vercel pull`, `vercel build`, `vercel deploy`)


## CI/CD Pipeline (GitHub Actions + Vercel)

This repo now includes:
- **CI** workflow at `.github/workflows/ci.yml`
  - Runs on pull requests and pushes to `main`
  - Executes `npm ci`, `npm run lint`, and `npm run build`
- **CD** workflow at `.github/workflows/cd-vercel.yml`
  - Runs on pushes to `main`
  - Builds and deploys to Vercel using the Vercel CLI

### Required GitHub Secrets
Add these repository secrets in **GitHub → Settings → Secrets and variables → Actions**:
- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

You can get these values from your Vercel account/project settings.

Required GitHub Secrets:
- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`
