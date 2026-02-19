# Westfield Threads — Next.js Build Specification

## Overview

Full rebuild of westfieldthreads.com from Squarespace custom HTML/CSS into a Next.js 14 (App Router) site hosted on Vercel. This spec is the single source of truth for the project.

---

## Stack

| Layer | Choice | Notes |
|-------|--------|-------|
| Framework | Next.js 14 (App Router) | `app/` directory, server components by default |
| Styling | Tailwind CSS 3.4 | Plus a `globals.css` for design tokens and custom utilities |
| Fonts | Epilogue + Oswald | Via `next/font/google` (self-hosted, no layout shift) |
| Icons | Lucide React | Replace Font Awesome |
| Forms | Formspree | Keep existing endpoints |
| Images | Next.js `<Image>` | Optimize all current Squarespace CDN images → move to `/public/images/` |
| Hosting | Vercel | Same as Studio Hub / Partner Hub |
| Analytics | Vercel Analytics | (optional, add later) |
| Domain | westfieldthreads.com | Point DNS to Vercel |

---

## Design System (from existing CSS)

### Colors (CSS variables → Tailwind config)

```
--wl-teal: #123842          → teal.DEFAULT / primary
--wl-teal-dark: #0d2a32     → teal.dark / primary-dark
--wl-teal-pressed: #091f26  → teal.pressed
--wl-cream: #efe3c7         → cream.DEFAULT
--wl-cream-soft: rgba(239,227,199,0.18) → cream.soft
--wl-bg: #F3F0EB            → bg
--wl-surface: #FFFFFF        → surface
--wl-text: #111111           → text.DEFAULT
--wl-text-muted: #5A6B7A    → text.muted
--wl-text-subtle: #7A8B99   → text.subtle
--wl-border: rgba(18,56,66,0.12) → border
```

### Typography

- **Headings**: Oswald, 900 weight, uppercase, letter-spacing -0.02em
- **Body**: Epilogue, 400-600 weight
- **Buttons**: Epilogue, 800-900 weight, uppercase, letter-spacing 0.06-0.08em

### Spacing

- Section padding: `py-14 px-6` (52px 24px)
- Tight section: `py-10 px-6` (40px 24px)
- Max-width container: `max-w-[1200px]` for homepage, `max-w-[1120px]` for inner pages
- Card padding: 22px
- Grid gap: 18px

### Shadows

- sm: `0 1px 4px rgba(18,56,66,0.06)`
- md: `0 10px 28px rgba(18,56,66,0.12)`
- card: `0 18px 50px rgba(0,0,0,0.06)`
- hero: `0 30px 70px rgba(18,56,66,0.18)`

### Border Radius

- Cards: 18px (rounded-2xl)
- Buttons: 999px (rounded-full)
- Standard: 8px (rounded-lg)

---

## Route Map

| Route | Source File | Page Title |
|-------|-----------|------------|
| `/` | Home.html | Home |
| `/services` | Services.html | Services |
| `/businesses` | Businesses.html | Business |
| `/schools-teams` | Schools-Teams.html | Schools & Teams |
| `/individuals` | Individuals.html | Individuals |
| `/our-story` | Our-Story.html | Our Story |
| `/contact` | Contact.html | Contact |
| `/faq` | FAQ.html | FAQ |

---

## Shared Components

### `<Header />`
- Logo (left)
- Nav links: Home, Services, Businesses, Schools & Teams, Individuals, Our Story, FAQ
- CTA button: "Get Started" → /contact
- Mobile hamburger menu
- Sticky on scroll

### `<Footer />`
- Business info: Westfield Threads, Westfield NJ
- Contact: (908) 543-4291, Hi@westfieldthreads.com
- Links: Services, FAQ, Contact, Our Story
- Instagram link
- © 2026 Westfield Threads

### `<BrandBar />`
- 19 auto-scrolling brand logos
- Brands: Gildan, American Apparel, Bella+Canvas, Next Level, Flexfit, Yupoong, adidas, Nike, Under Armour, Champion, Comfort Colors, New Era, Richardson, Carhartt, Behind The Scenes Apparel, Port Authority, Hanes, Sport-Tek, District
- Fade edges, pause on hover
- Place between Hero and Services on homepage
- Logo images in `/public/brands/`

### `<SectionHeader />`
Props: `title`, `subtitle`, `centered` (default true)

### `<Card />`
Props: `title`, `children`, `leftAccent` (teal bar), `hoverable`

### `<CTASection />`
Two variants:
1. **Light** (white bg): title, description, button
2. **Dark** (teal bg, cream text): title, description, inverted button

### `<Button />`
Props: `variant` (primary/secondary), `href`, `size`

### `<ContactInfo />`
Reusable phone + email display

---

## Page-by-Page Build Notes

### Home (`/`)

**Sections in order:**
1. **Hero** — Background image, badge, title "Made thoughtfully and built to last.", lead text, 2 CTAs
2. **Brand Bar** — Auto-scrolling logos (NEW — not in Squarespace version)
3. **Services Grid** — 4 cards: Embroidery, Chainstitch, Full-Color Heat Transfer, Screen Printing (with images)
4. **Why Westfield Threads** — 4 icon cards: In-House, Proof Before Production, Clear Quotes, Built for Reorders
5. **About Split** — Image left, copy + audience cards right
6. **Gallery** — Filterable grid with category buttons (All, Embroidery, Chainstitch, Screen Printing, Heat Transfer)
7. **Storefront Coming Soon** — Teal bg, email signup (Formspree)
8. **CTA** — "Start your project" card with contact info

**Scroll animations:** Use Intersection Observer (already implemented), convert to a `useScrollReveal` hook.

**Gallery filter:** Convert inline JS to React state. `useState` for active filter, filter array with `data-category`.

### Services (`/services`)

**Tabbed interface** with 4 panels: Embroidery, Chainstitch, Screen Printing, Full-Color Heat Transfer.

Each panel has:
- Section title + subtitle
- Service card (what it is + tagline + body)
- Kicker callout (best for / not ideal for)
- 4-card grid (what we do, who it's for, why this method, our process)
- "Good to know" note box
- Bottom CTA

**Tab state:** `useState` with URL hash sync for direct linking.

### Businesses (`/businesses`)

- Hero: title + lead
- "What we do" section: 4 cards (Embroidery, Screen Printing, DTF, Ongoing Programs)
- Link row to /services
- 3 info chips (pricing, minimums, setup)
- How it works (numbered list) + quote note
- Sidebar note about method recommendations
- Bottom CTA (teal bg)

### Schools & Teams (`/schools-teams`)

- Hero with tabs: Schools / Teams
- Each tab has: info chips, 4 cards, how it works, notes
- Schools tab includes fundraising revenue share info (15%)
- Bottom CTA

### Individuals (`/individuals`)

- Hero
- 4 service cards
- Link to /services
- How it works + note
- Pricing grids: Embroidery (4 tiers) + Chainstitch (4 tiers)
- Policies / "before you order" section
- Common add-ons panel
- Bottom CTA

### Our Story (`/our-story`)

- Hero with kicker + title + lead
- Two-column layout: main content + sticky sidebar
- Sections: How we work, Who we work with (3 tiles), Who's behind it
- Sidebar: "At a glance" panel
- Bottom CTA

### Contact (`/contact`)

- Two-column: copy left, form right
- Left: headline, "helps us quote faster" bullets, contact info (email + phone)
- Right: Formspree form with fields: first name, last name, email, phone, subject (dropdown), item needed (text), quantity, message
- Form submission via fetch with success/error states
- **Update email** from hi@wildlaundry.co → Hi@westfieldthreads.com

### FAQ (`/faq`)

- Hero
- Accordion groups: Ordering Basics, Artwork & Design, Products & Materials, Reorders
- Each uses `<details>` or React state for open/close
- Bottom CTA
- Schema.org FAQPage JSON-LD

---

## SEO

- Each page gets `metadata` export with title, description, openGraph
- JSON-LD structured data on Home (LocalBusiness), Services (OfferCatalog), FAQ (FAQPage)
- Semantic HTML throughout
- `sitemap.ts` auto-generated
- `robots.ts` for crawl rules

---

## Migration Checklist

- [ ] Download all Squarespace CDN images → `/public/images/`
- [ ] Collect brand logos (19 PNGs) → `/public/brands/`
- [ ] Update Instagram handle if changed from @wildlaundry
- [ ] Update all email references to Hi@westfieldthreads.com
- [ ] Update Formspree endpoints if needed
- [ ] Set up Vercel project + connect domain
- [ ] Test all forms
- [ ] Set up redirects from old Squarespace URLs if different
- [ ] Verify schema markup in Google Rich Results Test

---

## File Structure

```
westfield-threads/
├── app/
│   ├── layout.tsx          ← Root layout (fonts, header, footer)
│   ├── page.tsx            ← Homepage
│   ├── globals.css         ← Design tokens + base styles
│   ├── businesses/
│   │   └── page.tsx
│   ├── services/
│   │   └── page.tsx
│   ├── schools-teams/
│   │   └── page.tsx
│   ├── individuals/
│   │   └── page.tsx
│   ├── our-story/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   └── faq/
│       └── page.tsx
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── BrandBar.tsx
│   ├── SectionHeader.tsx
│   ├── Card.tsx
│   ├── Button.tsx
│   ├── CTASection.tsx
│   ├── ContactInfo.tsx
│   ├── Gallery.tsx
│   ├── FAQAccordion.tsx
│   ├── ServiceTabs.tsx
│   ├── SchoolTeamTabs.tsx
│   └── ScrollReveal.tsx
├── lib/
│   └── metadata.ts         ← Shared SEO helpers
├── public/
│   ├── brands/             ← Brand logo PNGs
│   ├── images/             ← Site images
│   └── favicon.ico
├── styles/
│   └── (empty — using Tailwind + globals.css)
├── tailwind.config.ts
├── next.config.js
├── package.json
├── tsconfig.json
└── BUILD-SPEC.md           ← This file
```
