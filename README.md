<div align="center">

# AquaProtocol Website

Marketing site and wallet-enabled entrypoint for Aqua Protocol — privacy‑preserving data verification and attestation.

[Docs](https://aquaprotocol.mintlify.app/) • [GitHub](https://github.com/inblockio) • Deployed on Vercel

</div>

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Styling & UI](#styling--ui)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## Overview
This repository contains the AquaProtocol marketing website and dashboard entrypoint. The UX emphasizes clarity, performance, and accessibility with a black/white base and teal accents used sparingly.

## Features
- Clean marketing site with sections for product, features, pricing, FAQ, and CTA
- Wallet connect via RainbowKit/Wagmi (multi-chain)
- Navigation with external links to Docs and GitHub
- Next.js `next/image` optimization
- Framer Motion animations and micro‑interactions
- Tailwind CSS utility‑first styling

## Tech Stack
- Next.js 15 (App Router)
- React 19
- Tailwind CSS 4
- RainbowKit + Wagmi
- Framer Motion

## Getting Started
Prerequisites:
- Node.js 18+ (Node 20+ recommended by some transitive deps)
- npm (or pnpm/yarn/bun)

Install dependencies:
```bash
npm install
```

Run the dev server:
```bash
npm run dev
```

Visit http://localhost:3000

## Environment Variables
Create `.env.local` at the project root:
```bash
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_walletconnect_project_id
```
Get a Project ID at https://cloud.walletconnect.com

## Available Scripts
- `npm run dev` — Start development server (Turbopack)
- `npm run build` — Production build
- `npm run start` — Start production server
- `npm run lint` — Run ESLint

## Project Structure
```
aqua-protocol-website/
├─ public/                    # Static assets
├─ src/
│  ├─ app/                    # App Router (routes, layout, providers)
│  ├─ components/             # Reusable UI and section components
│  ├─ lib/                    # Client configs (e.g., wagmi)
│  └─ visual-edits/           # Internal tooling hooks/loaders
├─ next.config.ts
├─ tailwind.config.*
└─ vercel.json                # CI install override for peer deps
```

## Styling & UI
- Tailwind CSS utilities with a minimal, legible typographic scale
- Accent color: teal (`#14b8a6`) used sparingly
- RainbowKit theme overridden to align with brand colors (including error state styling)

## Deployment
Optimized for Vercel.

1) Ensure env vars are set in Vercel:
   - `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID`

2) Push to your main branch. Vercel will build automatically.

3) CLI deploy:
```bash
vercel --prod --yes
```

Note: `vercel.json` uses `npm install --legacy-peer-deps` during CI to work around a known peer‑dependency conflict.

## Troubleshooting
- Wallet shows “Wrong network”:
  - Switch to a supported chain; RainbowKit theme is customized to show teal, not orange, for the state.
- Build fails on Vercel due to peer deps:
  - Handled by `vercel.json`; ensure this file is present.
- Images not rendering:
  - Confirm your remote hosts are whitelisted in `next.config.ts` under `images.remotePatterns`.

## Contributing
Issues and PRs are welcome. Keep changes scoped, follow existing patterns, and use clear commit messages.

## License
Open-source under GPL‑3.0 & MIT (see site footer for attribution).
