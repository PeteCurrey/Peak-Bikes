# ▲ Peak Bikes — Next.js Ecommerce

A cinematic, dark-themed premium cycling ecommerce site built with **Next.js 14**, **React 18**, **Tailwind CSS**, and **Framer Motion**.

![Peak Bikes](https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=1200&q=80)

## 🏔️ Overview

Peak Bikes is a production-ready ecommerce storefront designed to compete with Tredz, Wiggle, and Chain Reaction Cycles. The design language is cinematic luxury — think Rapha editorial meets automotive brand experience.

### Pages
- **Home** — Cinematic hero, category grid, featured product, editorial banner, trending products, stats, brands, CTA
- **Road Bikes** — Category page with filters and product grid  
- **Mountain Bikes** — Category page with MTB-specific filters
- **Product Detail** — Split-screen gallery, size/colour selectors, specs table, related products
- **About** — Brand story, values, team stats

### Features
- ⚡ Next.js 14 App Router with file-based routing
- 🎨 Tailwind CSS with custom Peak Bikes design system
- 🎬 Framer Motion scroll-triggered animations
- 📱 Fully responsive (mobile, tablet, desktop)
- 🖼️ Next.js Image optimisation with Unsplash
- 🔤 Google Fonts: Bebas Neue, Instrument Serif, DM Sans
- 🎯 TypeScript throughout
- 📊 Animated stat counters
- 🏷️ Product data layer ready for CMS/API integration

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18.17 or later
- **npm**, **yarn**, or **pnpm**

### Install & Run

```bash
# Clone the repo (or download the ZIP)
git clone https://github.com/your-username/peak-bikes.git
cd peak-bikes

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — you're riding! 🚴

### Build for Production

```bash
npm run build
npm start
```

---

## 🌐 Deploying to Vercel (Recommended)

Vercel is the creators of Next.js, so deployment is seamless:

### Option A: One-Click Deploy
1. Push your code to **GitHub**
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click **"Add New Project"**
4. Select the `peak-bikes` repository
5. Click **Deploy** — Vercel auto-detects Next.js settings
6. Your site is live at `peak-bikes.vercel.app` in ~60 seconds

### Option B: Vercel CLI
```bash
npm i -g vercel
vercel
```
Follow the prompts. Done.

### Custom Domain
In Vercel dashboard → Settings → Domains → Add `peakbikes.co.uk` and update your DNS.

---

## 🌐 Deploying to Netlify

```bash
npm run build
```
Then drag the `.next` folder to Netlify, or use their CLI:
```bash
npm i -g netlify-cli
netlify deploy --prod
```

> Note: For full Next.js support on Netlify, install `@netlify/plugin-nextjs`.

---

## 📁 Project Structure

```
peak-bikes/
├── app/
│   ├── layout.tsx          # Root layout (fonts, nav, footer)
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles + Tailwind
│   ├── road/
│   │   └── page.tsx        # Road bikes category
│   ├── mountain/
│   │   └── page.tsx        # Mountain bikes category
│   ├── product/
│   │   └── [slug]/
│   │       └── page.tsx    # Dynamic product detail page
│   └── about/
│       └── page.tsx        # About page
├── components/
│   ├── Navbar.tsx           # Fixed navigation
│   ├── Footer.tsx           # Newsletter + footer
│   ├── Loader.tsx           # Cinematic loading screen
│   ├── ProductCard.tsx      # Reusable product card
│   ├── CategoryCard.tsx     # Category card with hover effects
│   └── Sections.tsx         # Reveal, StatsBar, Marquee, SectionHeader
├── lib/
│   └── data.ts             # Products, categories, brands data
├── tailwind.config.ts       # Design system tokens
├── next.config.js           # Next.js + image config
├── package.json
└── tsconfig.json
```

---

## 🎨 Design System

### Colours
| Token | Hex | Usage |
|-------|-----|-------|
| `peak-black` | `#0a0a0a` | Background |
| `peak-white` | `#f5f0eb` | Primary text |
| `peak-accent` | `#ff4d1c` | CTA, highlights |
| `peak-gold` | `#c9a96e` | Stars, premium accents |
| `peak-muted` | `#8a8580` | Secondary text |
| `peak-grey` | `#131313` | Card backgrounds |

### Typography
| Font | Usage |
|------|-------|
| **Bebas Neue** | Headlines, display text |
| **Instrument Serif** (italic) | Accent lines, editorial |
| **DM Sans** (300-700) | Body, UI, buttons |

---

## 🔌 Next Steps for Production

### Connect a CMS
Replace `lib/data.ts` with API calls to:
- **Sanity** — Great for editorial + product content
- **Contentful** — Enterprise headless CMS
- **Shopify Storefront API** — Full ecommerce backend

### Add Ecommerce
- **Shopify** (via Storefront API or Hydrogen)
- **Medusa.js** — Open source headless commerce
- **Saleor** — GraphQL-first commerce
- **Stripe** — Direct payment integration

### Add Search
- **Algolia** — Instant search with facets
- **Meilisearch** — Open source alternative

### Analytics
- **Vercel Analytics** — Built-in, zero-config
- **PostHog** — Open source product analytics
- **Google Analytics 4**

---

## 📜 License

This is a template/prototype. Unsplash images are used under the [Unsplash License](https://unsplash.com/license). Replace with your own product photography for production use.

---

Built with 🔥 by Peak Bikes Engineering
