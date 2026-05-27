# eFiche — Website Redesign

Live: [efiche.africa](https://efiche.africa) &nbsp;|&nbsp; Previous: [efiche.rw](https://efiche.rw)

---

## Why We Redesigned

The original efiche.rw site communicated the product but fell short on trust, credibility, and clarity. Visitors landed on a page that felt generic — stock-heavy, light on proof, and structured more like a brochure than a platform that handles sensitive medical data across Africa.

The redesign was built around three goals:

### 1. Build Trust
Healthcare is a high-stakes domain. Patients and providers need to feel confident before they hand over medical data. The old site gave no signals of legitimacy beyond a logo and a tagline.

Changes made:
- **Partner logos** (Ministry of Health, Africa New Life, Oxipit, Signalytic, etc.) displayed prominently above the fold — real institutions, not placeholder names
- **Concrete stats** — 3+ countries, 95+ facilities, 40,000+ patients served — with a clean visual treatment that makes the numbers land
- **Real team presence** — blog articles authored with names, roles, and avatars rather than anonymous content
- **Consistent brand identity** — deep primary (`#1A1333`) with a confident secondary blue (`#2B82EE`), Geist Mono for headings to signal precision and tech credibility

### 2. Establish Credibility
The previous site had no content depth. There was nothing to read, no evidence of thought leadership, and no reason to believe eFiche was more than a startup with a landing page.

Changes made:
- **News & Events section** with paginated article cards linking to full blog detail pages — each with author, date, read time, and structured content
- **Per-article SEO metadata** (`generateMetadata`) so articles rank individually on Google and share correctly on social
- **Services section** with real product names, descriptions, and imagery — Next-Gen EMR, Dental EMR, Patient App, Biobank, Data Analytics, AI & Predictive Analytics
- **How It Works / Steps section** to show the product has a clear, understandable flow
- **Full footer** with contact details, office numbers, email, and social links — signals a real operating company

### 3. Structured Communication
The old site had no clear hierarchy. Everything competed for attention and there was no guided path from awareness to action.

Changes made:
- **Single-page architecture** with anchor-linked sections (`#about`, `#solutions`, `#contact`, `#faqs`, `#news`) — visitors scroll through a deliberate narrative
- **Hero → Partners → About → Solutions → Steps → CTA → Contact → FAQs → News** — ordered to move a visitor from "what is this?" to "I want this"
- **Floating sticky navbar** that adapts on scroll — always accessible without dominating the viewport
- **CTA section** mid-page to capture intent before visitors reach the bottom
- **FAQ section** to handle objections in place, reducing drop-off before contact
- **Back to top button** for long-scroll usability

---

## Tech Stack

| Layer | Choice | Reason |
|---|---|---|
| Framework | Next.js 15 (App Router) | SSG for blog pages, fast cold starts on Vercel |
| Styling | Tailwind CSS v4 | `@theme inline` tokens, no config file needed |
| Animations | Framer Motion | `useInView`-triggered entrance animations, no layout shift |
| Fonts | Geist Mono (headings) + Inter (body) | Precision + readability |
| Images | `next/image` | Automatic optimization, lazy loading |
| Deployment | Vercel | Zero-config, edge CDN, preview deployments per branch |

---

## Project Structure

```
src/
├── app/
│   ├── blog/[id]/page.tsx   # Dynamic blog detail pages (SSG)
│   ├── layout.tsx           # Global metadata, fonts
│   └── page.tsx             # Home page — all sections
├── components/
│   ├── Navbar.tsx           # Floating, scroll-aware, responsive
│   ├── Hero.tsx             # Full-width, YouTube embed, framer-motion
│   ├── Ourpartners.tsx      # Partner logo row
│   ├── aboutus.tsx          # Two-column, stats, rotated square decoration
│   ├── Services.tsx         # 6-card solution grid
│   ├── Steps.tsx            # How it works
│   ├── Cta.tsx              # Mid-page call to action
│   ├── Contact.tsx          # Contact form section
│   ├── Faq.tsx              # Accordion FAQ
│   ├── NewsAndEvents.tsx    # Paginated article cards
│   ├── Footer.tsx           # Dark footer, social icons, contact info
│   ├── Motion.tsx           # FadeUp / FadeUpSection / fadeUpChild
│   ├── BackToTop.tsx        # Scroll-to-top button
│   └── Button.tsx           # Shared button component
└── lib/
    └── articles.ts          # Article data (id, title, content, author, etc.)
```

---

## Running Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Building

```bash
npm run build
npm start
```
