# Adaptek Web Portal — AI Agent Rules

> This file governs how AI assistants (Claude, Cursor, Copilot, etc.) should behave
> when working in this codebase. Read this file in full before making any changes.

---

## 1. Project Overview

**Product**: Adaptek marketing site — a public-facing landing page for a human-centered AI consultancy.
**Stack**: Next.js 14 (App Router) · TypeScript (strict) · Tailwind CSS · Firebase Hosting (static export)
**Founders**: Rafael Adames (Chief AI Architect) · Vanessa Echandia (Director of Human-Centered Strategy)
**Primary market**: Healthcare organizations and mid-market companies adopting AI

---

## 2. Architectural Rules

### Component structure
- Every UI element lives in `src/components/`.
- Sub-folders: `layout/` (Navbar, Footer), `sections/` (page sections), `ui/` (reusable primitives like Button, Card, Badge).
- **No logic in `app/page.tsx`** — it is an assembly file only (imports sections, no JSX logic).
- Each component is a single file. Max ~150 lines. Split when larger.
- Server Components by default; add `"use client"` only when you need interactivity (useState, useEffect, event handlers).

### Naming
- Components: `PascalCase.tsx` (e.g., `HeroSection.tsx`)
- Utilities/hooks: `camelCase.ts` (e.g., `cn.ts`, `useScrollSpy.ts`)
- CSS class constants: export from `src/lib/styles.ts` if reused across 3+ components

### Imports
- Always use `@/` alias (`@/components/ui/Button`, `@/lib/cn`)
- No relative `../` imports between feature areas

---

## 3. TypeScript Rules

- **Strict mode is ON**. No `any`, no `ts-ignore` without a comment explaining why.
- Every component has explicit prop types defined as a `type` (not `interface`) directly above the component.
- Export prop types when other components import them.
- Avoid `as` type casting unless absolutely necessary; prefer type guards.

```typescript
// ✅ Correct
type ButtonProps = {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
};

// ❌ Wrong — don't use interface for component props
interface ButtonProps { ... }
```

---

## 4. Tailwind CSS Rules

- Use **Tailwind utility classes directly** in JSX. No separate CSS files except `src/app/globals.css`.
- Use the `cn()` utility from `@/lib/cn` to merge classes conditionally (clsx + tailwind-merge).
- **Brand colors only** — use `brand-orange`, `brand-green`, `brand-charcoal`, `brand-offwhite`. Never raw hex values in JSX.
- Responsive order: mobile-first (`base → sm → md → lg → xl`).
- Never use magic numbers — use spacing scale (e.g., `py-16` not `py-[64px]`) unless pixel-perfect brand spec requires it.

```tsx
// ✅ Correct
<button className={cn("bg-brand-orange text-white px-6 py-3 rounded-xl", isLoading && "opacity-50")} />

// ❌ Wrong
<button style={{ backgroundColor: "#FF7F2E" }} />
```

---

## 5. Accessibility Rules (WCAG 2.1 AA — Non-Negotiable)

Adaptek's brand is built on inclusivity. Accessibility is a product requirement, not an afterthought.

- **Semantic HTML always**: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>`
- Every `<section>` must have an `aria-labelledby` pointing to its heading
- Every interactive element (button, link, input) must be keyboard reachable and show a visible focus ring
- Every non-decorative image must have descriptive `alt` text. Decorative images: `alt=""`
- Color contrast: minimum 4.5:1 for body text, 3:1 for large text and UI components
- Form inputs: every input has an associated `<label>`. Error messages use `role="alert"` or `aria-live="polite"`
- Skip link: `<a href="#main-content" className="sr-only focus:not-sr-only ...">Skip to content</a>` in Navbar
- Don't use `outline: none` without a replacement focus style

---

## 6. Component Patterns

### Button
```tsx
import { Button } from "@/components/ui/Button";
<Button variant="primary" size="lg">Book a 30-minute consult</Button>
<Button variant="secondary">Download checklist</Button>
```

### Section wrapper
```tsx
<section aria-labelledby="services-heading" className="py-section bg-white">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
    <h2 id="services-heading">...</h2>
  </div>
</section>
```

---

## 7. Content & Copy Rules

- **Never use lorem ipsum** — use real Adaptek content or mark clearly with `[TODO: copy]`
- Adaptek voice: professional, clear, human-centered, never jargon-heavy
- Spanish translations go in `src/lib/i18n/es.ts` (EN content in `src/lib/i18n/en.ts`)
- CTA text: "Book a 30-minute consult" (primary), "Download AI readiness checklist" (secondary)

---

## 8. Testing Rules

- Every new component in `src/components/ui/` must have a `*.test.tsx` file in the same folder
- Test what users see and interact with, not implementation details (React Testing Library)
- Minimum test coverage for UI primitives: render, keyboard interaction, aria attributes
- Run `npm test` before every commit

```tsx
// ✅ Test what users see
expect(screen.getByRole("button", { name: /book a consult/i })).toBeInTheDocument();

// ❌ Don't test implementation
expect(component.state.isLoading).toBe(false);
```

---

## 9. Git & Commit Rules

- Branch naming: `feature/section-name`, `fix/bug-description`, `chore/task`
- Commit messages: conventional commits (`feat:`, `fix:`, `chore:`, `docs:`, `style:`, `refactor:`, `test:`)
- Never commit directly to `main` — use pull requests
- `npm run lint` and `npm run type-check` must pass before pushing

```
feat: add HeroSection with dual CTA buttons
fix: correct contrast ratio on ServiceCard text
chore: update Firebase hosting config
```

---

## 10. Performance Rules

- Use `next/image` (`<Image />`) for all images — never raw `<img>` tags
- Use `next/font` for Google Fonts — never `<link>` in HTML head
- Lazy-load below-the-fold sections with `loading="lazy"` on images
- Keep bundle size in check: no heavy libraries for things Tailwind can handle
- Target Lighthouse score: Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 95

---

## 11. Firebase Hosting Notes

- Build output: `out/` directory (static export via `next build`)
- Deploy command: `firebase deploy --only hosting`
- Never commit `.firebase/` or `firebase-debug.log`
- Environment variables for future API keys: `.env.local` (never commit)

---

## 12. Folder Structure Reference

```
adaptek-web-portal/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout (fonts, metadata, skip link)
│   │   ├── page.tsx            # Home page — assembly only
│   │   └── globals.css         # Tailwind directives + minimal global styles
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx      # Sticky nav with skip link
│   │   │   └── Footer.tsx      # Footer with language toggle
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── WhyAdaptekSection.tsx
│   │   │   ├── ServicesSection.tsx
│   │   │   ├── ProofSection.tsx
│   │   │   ├── FoundersSection.tsx
│   │   │   ├── CtaStripSection.tsx
│   │   │   └── ContactSection.tsx
│   │   └── ui/
│   │       ├── Button.tsx      # + Button.test.tsx
│   │       ├── Card.tsx        # + Card.test.tsx
│   │       └── Badge.tsx
│   └── lib/
│       ├── cn.ts               # clsx + tailwind-merge helper
│       └── i18n/
│           ├── en.ts           # English copy
│           └── es.ts           # Spanish copy (placeholder)
├── public/
│   └── images/                 # Static assets (logo, founders, illustrations)
├── CLAUDE.md                   # This file
├── .cursorrules                # Cursor-specific rules (mirrors this file)
├── README.md
├── firebase.json
├── .firebaserc
└── next.config.ts
```
