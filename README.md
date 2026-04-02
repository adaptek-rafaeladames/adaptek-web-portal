# Adaptek Web Portal

The official marketing website for **Adaptek** — a human-centered AI consulting boutique helping healthcare organizations and mid-market companies build reliable, accessible, and responsible AI systems.

**Live URL**: https://adaptek-ai.web.app
**Custom domain**: adaptek.ai *(pending setup)*
**Founded by**: Rafael Adames & Vanessa Echandia

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 14](https://nextjs.org/) (App Router) |
| Language | TypeScript (strict mode) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) |
| Hosting | [Firebase Hosting](https://firebase.google.com/docs/hosting) (static export) |
| Forms | [Formspree](https://formspree.io/) |
| Testing | Jest + React Testing Library |

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Install dependencies
```bash
npm install
```

### Run the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Other scripts
```bash
npm run build         # Production build (outputs to /out for Firebase)
npm run type-check    # TypeScript type checking (no emit)
npm run lint          # ESLint check
npm run lint:fix      # ESLint auto-fix
npm test              # Run all unit tests
npm run test:watch    # Run tests in watch mode
```

---

## Project Structure

```
adaptek-web-portal/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout — fonts, metadata, skip-nav
│   │   ├── page.tsx            # Home page — section assembly only
│   │   └── globals.css         # Tailwind directives + minimal globals
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx      # Sticky top nav with skip link
│   │   │   └── Footer.tsx      # Footer with language toggle
│   │   ├── sections/           # One file per page section
│   │   │   ├── HeroSection.tsx
│   │   │   ├── WhyAdaptekSection.tsx
│   │   │   ├── ServicesSection.tsx
│   │   │   ├── ProofSection.tsx
│   │   │   ├── FoundersSection.tsx
│   │   │   ├── CtaStripSection.tsx
│   │   │   └── ContactSection.tsx
│   │   └── ui/                 # Reusable primitives (Button, Card, Badge)
│   └── lib/
│       ├── cn.ts               # Class merging utility (clsx + tailwind-merge)
│       └── i18n/               # Copy strings — en.ts + es.ts
├── public/
│   └── images/                 # Static assets
├── firebase.json               # Firebase Hosting config
├── .firebaserc                 # Firebase project binding
├── CLAUDE.md                   # AI assistant coding rules (read this first)
└── .cursorrules                # Cursor IDE rules (mirrors CLAUDE.md)
```

---

## Deployment to Firebase Hosting

### One-time setup
```bash
# 1. Install Firebase CLI globally
npm install -g firebase-tools

# 2. Log in (opens browser)
firebase login

# 3. Initialize hosting in this project folder (already configured)
firebase init hosting
# → Select existing project: adaptek-ai
# → Public directory: out
# → Single-page app: No
# → Overwrite index.html: No
```

### Deploy
```bash
# Build the static export
npm run build

# Deploy to Firebase
firebase deploy --only hosting
```

Your site will be live at `https://adaptek-ai.web.app`.

### Connect a custom domain
1. Go to Firebase Console → Hosting → Add custom domain
2. Enter `adaptek.ai` and follow the DNS verification steps

---

## Environment Variables

Create a `.env.local` file (never commit this) for any API keys:

```bash
# Contact form (Formspree)
NEXT_PUBLIC_FORMSPREE_ID=your_formspree_form_id

# Future: Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

## Content Updates

All visible page copy is centralized in `src/lib/i18n/en.ts`. To update text:
1. Edit the relevant key in `en.ts`
2. Mirror the change in `es.ts` for Spanish
3. No component files need to change for copy-only edits

### Adding images
- Drop new images in `public/images/`
- Use the `<Image>` component from `next/image` with descriptive `alt` text
- Preferred formats: `.webp` for photos, `.svg` for icons/illustrations

---

## Accessibility

This site targets **WCAG 2.1 AA** compliance — a core brand value for Adaptek.

- Semantic HTML structure throughout
- Keyboard-navigable (Tab, Enter, Space, Escape)
- Visible focus indicators on all interactive elements
- Skip-to-content link at the top of every page
- All images have descriptive `alt` text
- Contact form has accessible labels and live error messages
- Color contrast meets 4.5:1 minimum for body text

To run an accessibility audit, use [axe DevTools](https://www.deque.com/axe/) or Lighthouse in Chrome DevTools.

---

## Code Quality

Before every commit, run:
```bash
npm run lint && npm run type-check && npm test
```

See `CLAUDE.md` for the full coding rules used by AI assistants in this project.

---

## Contributing

1. Create a branch: `git checkout -b feature/your-feature-name`
2. Make your changes following the rules in `CLAUDE.md` and `.cursorrules`
3. Run `npm run lint && npm run type-check && npm test`
4. Open a pull request against `main`

---

## Founders

| | |
|---|---|
| **Rafael Adames** | Chief AI Architect — 10+ years enterprise AI (RAG, MLOps, cloud), Human Systems Engineering |
| **Vanessa Echandia** | Director of Human-Centered Strategy — psychology, cyberpsychology, accessibility & disability advocacy |

---

## License

Private — © 2026 Adaptek. All rights reserved.
