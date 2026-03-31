# 🎨 Roni HaTzabai — Developer Work Plan

## Full-Stack Website Build: Next.js + TypeScript + Resend

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Tech Stack & Recommended Libraries](#2-tech-stack--recommended-libraries)
3. [GitHub Repos for Design Inspiration](#3-github-repos-for-design-inspiration)
4. [Environment Setup — From Zero](#4-environment-setup--from-zero)
5. [Project Architecture](#5-project-architecture)
6. [Design System — Rainbow Theme](#6-design-system--rainbow-theme)
7. [Internationalization (i18n) — Hebrew + English](#7-internationalization-i18n--hebrew--english)
8. [Page-by-Page Specification & Content](#8-page-by-page-specification--content)
9. [Resend Email Integration](#9-resend-email-integration)
10. [SEO — Full Implementation Guide](#10-seo--full-implementation-guide)
11. [Mobile Responsiveness — Critical Requirements](#11-mobile-responsiveness--critical-requirements)
12. [Image Management](#12-image-management)
13. [WhatsApp & Call Floating Buttons](#13-whatsapp--call-floating-buttons)
14. [Performance Optimization](#14-performance-optimization)
15. [Build Phases & Checklist](#15-build-phases--checklist)
16. [Deployment — GitHub + Vercel](#16-deployment--github--vercel)

---

## 1. Project Overview

| Field | Value |
|-------|-------|
| **Business Name** | רוני הצבעי / Roni HaTzabai |
| **Owner** | Roni Adri |
| **Industry** | Painting, spackling & moisture repair services |
| **Service Area** | Modi'in & surroundings, Shfela (lowlands) region |
| **Address** | Levona 17/4, Modi'in, Israel |
| **Phone** | 050-8898584 |
| **Email (for forms)** | ron997@hotmail.co.il |
| **Languages** | Hebrew (primary) + English |
| **Design Concept** | Breathtaking rainbow-colored theme — vibrant, joyful, professional |
| **GitHub Repo** | https://github.com/ofergithubacounnt/roni |
| **Vercel Project** | https://vercel.com/ofer-boost-medias-projects/roni |

### Pages

| Page | Route (HE) | Route (EN) |
|------|-----------|-----------|
| Home | `/he` (default) | `/en` |
| About | `/he/about` | `/en/about` |
| Works Gallery | `/he/gallery` | `/en/gallery` |
| Contact | `/he/contact` | `/en/contact` |

---

## 2. Tech Stack & Recommended Libraries

### Core

| Layer | Technology | Why |
|-------|-----------|-----|
| Framework | **Next.js 14+ (App Router)** | SSR/SSG, SEO, Vercel-native, i18n routing |
| Language | **TypeScript** | Type safety, better DX |
| Styling | **Tailwind CSS 3.4+** | Utility-first, RTL support, fast iteration |
| Animations | **Framer Motion 11+** | Production-grade React animations |
| Email | **Resend SDK** | Transactional emails from contact forms |
| Forms | **React Hook Form + Zod** | Lightweight validation |
| Icons | **Lucide React** | Clean, customizable icons |
| Maps | **@vis.gl/react-google-maps** or embed | Google Maps on contact page |

### Design Enhancement Libraries (Highly Recommended)

| Library | Purpose | Install |
|---------|---------|---------|
| **`tailwindcss-animate`** | Pre-built animation utilities | `npm i tailwindcss-animate` |
| **`@tailwindcss/typography`** | Beautiful prose styling | `npm i @tailwindcss/typography` |
| **`clsx` + `tailwind-merge`** | Conditional class merging | `npm i clsx tailwind-merge` |
| **`embla-carousel-react`** | Lightweight carousel/slider | `npm i embla-carousel-react` |
| **`react-intersection-observer`** | Scroll-triggered animations | `npm i react-intersection-observer` |
| **`next-intl`** | i18n for Next.js App Router | `npm i next-intl` |
| **`next-seo`** or built-in Metadata API | SEO meta tags | Built into Next.js 14 |
| **`sharp`** | Image optimization (Next.js) | `npm i sharp` |
| **`yet-another-react-lightbox`** | Gallery lightbox | `npm i yet-another-react-lightbox` |

---

## 3. GitHub Repos for Design Inspiration

These repositories showcase exceptional visual design patterns relevant to this project:

### Animation & Visual Effects
| Repository | Stars | What to Learn |
|-----------|-------|---------------|
| [**aceternity/ui**](https://github.com/aceternity/aceternity-ui) | 10k+ | Stunning animated components — spotlight effects, card hover animations, gradient borders, text reveal effects. **Highly recommended for hero section and service cards.** |
| [**magicuidesign/magicui**](https://github.com/magicuidesign/magicui) | 15k+ | Animated borders, shimmer buttons, rainbow text, marquee effects, particle animations. **Perfect for rainbow theme.** |
| [**ibelick/background-snippets**](https://github.com/ibelick/background-snippets) | 3k+ | Beautiful animated backgrounds — gradient meshes, dot patterns, aurora effects. |
| [**steven-tey/novel**](https://github.com/steven-tey/novel) | 13k+ | Clean, polished UI patterns and attention to micro-interactions. |

### Component Libraries with Outstanding Design
| Repository | Stars | What to Learn |
|-----------|-------|---------------|
| [**shadcn/ui**](https://github.com/shadcn-ui/ui) | 75k+ | The gold standard for component architecture. Use as base, then customize heavily. |
| [**tremor**](https://github.com/tremorlabs/tremor) | 16k+ | Beautiful data visualization components if needed for stats/counters. |
| [**animata**](https://github.com/codse/animata) | 2k+ | Hand-crafted animated components — bento grids, text animations, card effects. |

### Landing Page References
| Repository | Stars | What to Learn |
|-----------|-------|---------------|
| [**cruip/open-react-template**](https://github.com/cruip/open-react-template) | 3k+ | Professional landing page structure and scroll animations. |
| [**leerob/site**](https://github.com/leerob/leerob.io) | 7k+ | Next.js best practices from Vercel's own developer advocate. |

### Key Components to Borrow/Adapt

From **Aceternity UI**, consider using:
- **Spotlight Effect** — for hero section background
- **Animated Gradient Border** — for service cards (rainbow gradient!)
- **Text Generate Effect** — for headline animations
- **Background Beams** — atmospheric background effects
- **Infinite Moving Cards** — testimonial/gallery carousel

From **Magic UI**, consider using:
- **Rainbow Button** — CTA buttons with animated rainbow border
- **Shimmer Button** — call-to-action hover effects
- **Animated Beam** — connecting visual elements
- **Marquee** — scrolling service highlights
- **Number Ticker** — animated counter for "20 years experience"

> **Note:** Don't copy entire libraries — pick specific effects and adapt them to the rainbow theme. All components should feel custom-built for a painting business.

---

## 4. Environment Setup — From Zero

### 4.1 Prerequisites — Install on Local Machine

```bash
# ============================================
# STEP 1: Install Node.js (LTS version)
# ============================================
# Download from: https://nodejs.org/en/download/
# Recommended: Node.js 20.x LTS or later
# Verify installation:
node --version    # Should show v20.x.x or higher
npm --version     # Should show 10.x.x or higher

# ============================================
# STEP 2: Install Git (if not installed)
# ============================================
# Download from: https://git-scm.com/downloads
# Verify:
git --version

# ============================================
# STEP 3: Install VS Code (recommended IDE)
# ============================================
# Download from: https://code.visualstudio.com/
# Recommended extensions:
#   - ESLint
#   - Prettier
#   - Tailwind CSS IntelliSense
#   - TypeScript Importer
#   - Auto Rename Tag
```

### 4.2 Create the Next.js Project

```bash
# ============================================
# STEP 4: Create the Next.js project
# ============================================
cd C:\production\roni

# Create Next.js app with TypeScript + Tailwind + App Router + ESLint
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"

# If the directory is not empty, you may need to use --force or clear it first.

# ============================================
# STEP 5: Install all dependencies
# ============================================
npm install framer-motion react-hook-form @hookform/resolvers zod
npm install next-intl resend lucide-react
npm install embla-carousel-react react-intersection-observer
npm install yet-another-react-lightbox
npm install clsx tailwind-merge
npm install sharp

# Dev dependencies
npm install -D tailwindcss-animate @tailwindcss/typography
```

### 4.3 Environment Variables

Create a `.env.local` file in the project root:

```env
# ============================================
# .env.local — DO NOT COMMIT TO GIT
# ============================================

# Resend (Email Service)
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxx
FROM_EMAIL=onboarding@resend.dev

# Contact recipient
CONTACT_EMAIL=ron997@hotmail.co.il

# Google Maps (optional — can use iframe embed instead)
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_key_here

# Site URL (update for production)
NEXT_PUBLIC_SITE_URL=https://your-domain.com

# Default locale
NEXT_PUBLIC_DEFAULT_LOCALE=he
```

Add to `.gitignore`:

```gitignore
.env.local
.env*.local
```

---

## 5. Project Architecture

```
C:\production\roni\
├── public/
│   ├── images/
│   │   ├── logo.png                    # Business logo
│   │   ├── hero_desktop.png            # Hero image (desktop)
│   │   ├── hero_mobile.png             # Hero image (mobile)
│   │   └── general/                    # Numbered atmosphere images
│   │       ├── 1.jpg
│   │       ├── 2.jpg
│   │       └── ...
│   ├── works_gallery/                  # Gallery images
│   │   ├── 1.jpg
│   │   ├── 2.jpg
│   │   └── ...
│   ├── robots.txt                      # SEO: Crawling rules
│   ├── sitemap.xml                     # SEO: Auto-generated
│   └── favicon.ico
│
├── src/
│   ├── app/
│   │   ├── [locale]/                   # i18n dynamic route
│   │   │   ├── layout.tsx              # Root layout (RTL/LTR, fonts, metadata)
│   │   │   ├── page.tsx                # HOME page
│   │   │   ├── about/
│   │   │   │   └── page.tsx            # ABOUT page
│   │   │   ├── gallery/
│   │   │   │   └── page.tsx            # GALLERY page
│   │   │   ├── contact/
│   │   │   │   └── page.tsx            # CONTACT page
│   │   │   └── not-found.tsx           # 404 page
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts            # POST /api/contact — Resend email
│   │   ├── sitemap.ts                  # Dynamic sitemap generation
│   │   ├── robots.ts                   # Dynamic robots.txt
│   │   ├── layout.tsx                  # Root layout (redirects to /he)
│   │   └── page.tsx                    # Root redirect → /he
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx              # Sticky header + nav + language switcher
│   │   │   ├── Footer.tsx              # Footer with contact info
│   │   │   ├── MobileMenu.tsx          # Hamburger menu for mobile
│   │   │   ├── FloatingButtons.tsx     # WhatsApp + Call buttons
│   │   │   └── LanguageSwitcher.tsx    # HE/EN toggle
│   │   │
│   │   ├── home/
│   │   │   ├── HeroSection.tsx         # Hero with CTA
│   │   │   ├── ServicesGrid.tsx        # Service cards (rainbow squares)
│   │   │   ├── WhatIncludedSection.tsx # Painting process timeline
│   │   │   ├── MoistureSection.tsx     # Moisture & mold treatment
│   │   │   ├── OfficeSection.tsx       # Office painting
│   │   │   ├── AdvantagesSection.tsx   # Benefits & pricing
│   │   │   ├── QuoteFormSection.tsx    # "Get a Free Quote" form
│   │   │   └── StatsCounter.tsx        # Animated numbers (20 years etc.)
│   │   │
│   │   ├── about/
│   │   │   ├── AboutHero.tsx
│   │   │   ├── StorySection.tsx
│   │   │   └── ValuesSection.tsx
│   │   │
│   │   ├── gallery/
│   │   │   ├── GalleryGrid.tsx         # Masonry/grid with lightbox
│   │   │   ├── GalleryFilter.tsx       # Filter by category
│   │   │   └── BeforeAfter.tsx         # Before/after slider
│   │   │
│   │   ├── contact/
│   │   │   ├── ContactInfo.tsx         # Phone, WhatsApp, address
│   │   │   ├── ContactForm.tsx         # Quote request form
│   │   │   └── GoogleMap.tsx           # Embedded Google Map
│   │   │
│   │   └── ui/
│   │       ├── RainbowButton.tsx       # CTA button with rainbow gradient
│   │       ├── RainbowDivider.tsx      # Section divider
│   │       ├── RainbowCard.tsx         # Card with rainbow border
│   │       ├── AnimatedCounter.tsx     # Number animation
│   │       ├── SectionHeading.tsx      # Consistent section titles
│   │       ├── ScrollReveal.tsx        # Scroll-triggered animation wrapper
│   │       └── Shimmer.tsx             # Shimmer/loading effect
│   │
│   ├── lib/
│   │   ├── utils.ts                    # cn() helper, classname merging
│   │   ├── fonts.ts                    # Google Fonts setup
│   │   └── constants.ts               # Phone numbers, addresses, etc.
│   │
│   ├── hooks/
│   │   ├── useScrollDirection.ts       # Header show/hide on scroll
│   │   └── useMediaQuery.ts           # Responsive breakpoint detection
│   │
│   ├── types/
│   │   └── index.ts                    # Shared TypeScript types
│   │
│   ├── messages/                       # i18n translation files
│   │   ├── he.json                     # Hebrew translations
│   │   └── en.json                     # English translations
│   │
│   └── styles/
│       └── globals.css                 # Tailwind base + custom CSS
│
├── next.config.js                      # Next.js configuration
├── tailwind.config.ts                  # Tailwind + rainbow theme config
├── tsconfig.json
├── package.json
├── .env.local                          # Environment variables (DO NOT COMMIT)
├── .gitignore
└── README.md
```

---

## 6. Design System — Rainbow Theme

### 6.1 Aesthetic Direction

**Concept: "Chromatic Craft"** — A vibrant, maximalist rainbow palette applied with professional restraint. The site should feel like walking into a freshly painted room where every color sings. Think: fluid rainbow gradients as accents against clean white/light surfaces, with bold color pops on interactive elements.

**Key principles:**
- Rainbow colors are used as **accents and highlights**, not background fills
- White/near-white base keeps things professional and readable
- Each section gets a subtle color identity from the rainbow spectrum
- Animations bring color to life — gradients should *move* and *shift*
- Dark sections for contrast (moisture/mold section, footer)

### 6.2 Tailwind Configuration

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // Rainbow Palette
        rainbow: {
          red: '#FF3B3B',
          orange: '#FF8C42',
          yellow: '#FFD93D',
          green: '#6BCB77',
          cyan: '#45B7D1',
          blue: '#4D96FF',
          indigo: '#6C5CE7',
          violet: '#A855F7',
          pink: '#EC4899',
        },
        // Neutral / Base
        surface: {
          white: '#FEFEFE',
          cream: '#FFF9F0',
          light: '#F8F9FA',
          muted: '#F1F3F5',
        },
        // Text
        ink: {
          primary: '#1A1A2E',
          secondary: '#4A4A68',
          muted: '#8E8EA0',
          inverse: '#FFFFFF',
        },
      },
      fontFamily: {
        // Hebrew display font
        heading: ['var(--font-heebo)', 'sans-serif'],
        // Hebrew body font
        body: ['var(--font-heebo)', 'sans-serif'],
        // English accent font
        accent: ['var(--font-outfit)', 'sans-serif'],
      },
      backgroundImage: {
        'rainbow-gradient': 'linear-gradient(135deg, #FF3B3B, #FF8C42, #FFD93D, #6BCB77, #45B7D1, #4D96FF, #6C5CE7, #A855F7)',
        'rainbow-gradient-horizontal': 'linear-gradient(90deg, #FF3B3B, #FF8C42, #FFD93D, #6BCB77, #45B7D1, #4D96FF, #6C5CE7, #A855F7)',
        'rainbow-gradient-soft': 'linear-gradient(135deg, #FF3B3B20, #FFD93D20, #6BCB7720, #4D96FF20, #A855F720)',
      },
      keyframes: {
        'rainbow-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.8)', opacity: '0.5' },
          '80%, 100%': { transform: 'scale(2)', opacity: '0' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'rainbow-shift': 'rainbow-shift 6s ease infinite',
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'pulse-ring': 'pulse-ring 1.5s cubic-bezier(0.215, 0.61, 0.355, 1) infinite',
        shimmer: 'shimmer 2s linear infinite',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
  ],
};

export default config;
```

### 6.3 Global CSS

```css
/* src/styles/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --rainbow-gradient: linear-gradient(
      135deg,
      #FF3B3B, #FF8C42, #FFD93D, #6BCB77,
      #45B7D1, #4D96FF, #6C5CE7, #A855F7
    );
  }

  /* RTL support */
  [dir="rtl"] {
    text-align: right;
  }
}

@layer components {
  /* Rainbow animated border */
  .rainbow-border {
    position: relative;
    background: white;
    border-radius: 1rem;
  }

  .rainbow-border::before {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: inherit;
    background: var(--rainbow-gradient);
    background-size: 300% 300%;
    animation: rainbow-shift 6s ease infinite;
    z-index: -1;
  }

  /* Rainbow text */
  .rainbow-text {
    background: var(--rainbow-gradient);
    background-size: 300% 300%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: rainbow-shift 6s ease infinite;
  }

  /* Rainbow divider line */
  .rainbow-divider {
    height: 4px;
    background: var(--rainbow-gradient);
    background-size: 200% 100%;
    animation: rainbow-shift 4s ease infinite;
    border-radius: 2px;
  }

  /* Stagger animation delays */
  .stagger-1 { animation-delay: 0.1s; }
  .stagger-2 { animation-delay: 0.2s; }
  .stagger-3 { animation-delay: 0.3s; }
  .stagger-4 { animation-delay: 0.4s; }
  .stagger-5 { animation-delay: 0.5s; }
  .stagger-6 { animation-delay: 0.6s; }
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Scrollbar with rainbow accent */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #FF3B3B, #FFD93D, #4D96FF, #A855F7);
  border-radius: 4px;
}
```

### 6.4 Typography

```typescript
// src/lib/fonts.ts
import { Heebo, Outfit } from 'next/font/google';

// Primary Hebrew font — headings & body
export const heebo = Heebo({
  subsets: ['hebrew', 'latin'],
  variable: '--font-heebo',
  display: 'swap',
  weight: ['300', '400', '500', '700', '800', '900'],
});

// English accent font — numbers, English text
export const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
});
```

### 6.5 Service Cards — Rainbow Color Mapping

Each service card gets a unique rainbow color for its top border and icon accent:

| Card | Color | Hex |
|------|-------|-----|
| Empty Apartment Painting | Red | `#FF3B3B` |
| Occupied Apartment Painting | Orange | `#FF8C42` |
| Moisture & Mold Repair | Cyan | `#45B7D1` |
| Office Painting | Blue | `#4D96FF` |
| Stairwells | Indigo | `#6C5CE7` |
| American Spackle | Violet | `#A855F7` |

---

## 7. Internationalization (i18n) — Hebrew + English

### 7.1 Setup with `next-intl`

```typescript
// next.config.js
const withNextIntl = require('next-intl/plugin')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = withNextIntl(nextConfig);
```

```typescript
// src/i18n.ts
import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

const locales = ['he', 'en'];

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound();
  return {
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
```

### 7.2 Layout — RTL / LTR Direction

```typescript
// src/app/[locale]/layout.tsx
import { heebo, outfit } from '@/lib/fonts';

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const isRTL = locale === 'he';

  return (
    <html lang={locale} dir={isRTL ? 'rtl' : 'ltr'}>
      <body className={`${heebo.variable} ${outfit.variable} font-body`}>
        <Header locale={locale} />
        <main>{children}</main>
        <Footer locale={locale} />
        <FloatingButtons />
      </body>
    </html>
  );
}
```

### 7.3 Translation Files

Below is the **complete content** for all pages. The developer should place these in the JSON files and use `useTranslations()` to render them.

#### Hebrew — `src/messages/he.json`

```json
{
  "metadata": {
    "title": "רוני הצבעי | עבודות שפכטל וצבע במודיעין והסביבה",
    "description": "רוני הצבעי - 20 שנות ניסיון בצביעת דירות, תיקוני רטיבות ועובש, שפכטל אמריקאי. מודיעין ואזור השפלה. הצעת מחיר חינם!",
    "keywords": "צבעי מודיעין, שפכטל, צביעת דירה, תיקון רטיבות, צביעת משרדים, רוני הצבעי, צבעי בשפלה, שפכטל אמריקאי מודיעין"
  },
  "nav": {
    "home": "דף הבית",
    "about": "אודות",
    "gallery": "גלריית עבודות",
    "contact": "צור קשר",
    "getQuote": "הצעת מחיר חינם"
  },
  "hero": {
    "title": "רוני הצבעי",
    "subtitle": "עבודות שפכטל וצבע מקצועיות",
    "area": "מודיעין והסביבה | אזור השפלה",
    "cta": "קבלו הצעת מחיר חינם",
    "badge1": "20 שנות ניסיון",
    "badge2": "עבודה עברית",
    "badge3": "זמינות גבוהה",
    "badge4": "חומרים איכותיים"
  },
  "services": {
    "sectionTitle": "השירותים שלנו",
    "sectionSubtitle": "מגוון רחב של שירותי צבע ושפכטל ברמה הגבוהה ביותר",
    "emptyApartment": {
      "title": "צביעת דירות ריקות",
      "description": "צביעה מקצועית של דירות ריקות עם הנחה מיוחדת של עד 30%. התוצאה המושלמת מובטחת ללא דאגות מהרהיטים.",
      "discount": "הנחה עד 30%"
    },
    "occupiedApartment": {
      "title": "צביעת דירות מאוכלסות",
      "description": "כיסוי מלא של הרהיטים בניילון להגנה מרבית. הגנה על הרצפה. ניקיון מושלם בסיום העבודה. אתם ממשיכים לגור — אנחנו דואגים לכל השאר."
    },
    "moisture": {
      "title": "תיקוני נזקי רטיבות ועובש",
      "description": "טיפול מקצועי בנזקי רטיבות ועובש כולל תיקוני טייח. שימוש בחומרים מיוחדים וצבעים ייעודיים נגד עובש."
    },
    "offices": {
      "title": "צביעת משרדים",
      "description": "צביעת משרדים מקצועית ללא הפרעה לעבודה השוטפת. אפשרות לצביעה אחרי שעות העבודה בתיאום מראש."
    },
    "stairwells": {
      "title": "חדרי מדרגות",
      "description": "צביעת חדרי מדרגות ושטחים משותפים. עבודה נקייה ומסודרת עם תוצאות מרשימות."
    },
    "spackle": {
      "title": "שפכטל אמריקאי",
      "description": "החלקת קירות בשפכטל אמריקאי לגימור חלק ומושלם. התוצאה: קירות חלקים כמו זכוכית."
    }
  },
  "whatIncludes": {
    "sectionTitle": "מה כולל צביעת דירה?",
    "sectionSubtitle": "תהליך מקצועי ומסודר מההתחלה ועד הסוף — כך אנחנו עובדים",
    "steps": [
      {
        "title": "סידור והכנת הדירה",
        "description": "כיסוי הרהיטים בניילון להגנה מרבית. אנחנו מטפלים ברהיטים שלכם כאילו הם שלנו."
      },
      {
        "title": "הגנה על הרצפה",
        "description": "כיסוי הרצפה עם גליל קרטון או שטיחים מיוחדים למניעת לכלוך ונזק."
      },
      {
        "title": "פתיחת סדקים וגירוד",
        "description": "פתיחת סדקים וגירוד צבע מתקלף במידת הצורך — הכנת השטח הנכונה היא הבסיס לעבודה מושלמת."
      },
      {
        "title": "צבע יסוד (בונדרול)",
        "description": "מריחת שכבת צבע יסוד בונדרול ליצירת בסיס חזק ועמיד שמבטיח אחיזה מושלמת של הצבע."
      },
      {
        "title": "טיפול בסדקים",
        "description": "טיפול מקצועי בסדקים בעזרת תחבושת מיוחדת לסדקים — למניעת הישנות הבעיה."
      },
      {
        "title": "תיקוני שפכטל",
        "description": "סתימת חורים ותיקוני שפכטל. כל פגם קטן מקבל טיפול מדויק."
      },
      {
        "title": "החלקת קירות (לפי בקשה)",
        "description": "החלקת קירות בשפכטל אמריקאי לפי בקשת הלקוח — לתוצאה חלקה ומושלמת במיוחד."
      },
      {
        "title": "שפשוף והכנת השטח",
        "description": "שפשוף הקירות לפי הצורך והכנת השטח לקבלת הצבע. שלב קריטי לתוצאה מקצועית."
      },
      {
        "title": "צביעה — שתי שכבות",
        "description": "צביעת התקרות והקירות בצבע אקרילי איכותי, בגוון לפי בחירתכם, בשתי שכבות לכיסוי מושלם ואחיד."
      },
      {
        "title": "ניקיון בגמר העבודה",
        "description": "ניקיון יסודי בסיום העבודה. אתם חוזרים לדירה נקייה, מסודרת ומרעננת."
      }
    ]
  },
  "moistureSection": {
    "sectionTitle": "טיפול בנזקי רטיבות ועובש",
    "sectionSubtitle": "פתרון מקצועי ויסודי לבעיות רטיבות ועובש במקלחות ובכל חלקי הבית",
    "steps": [
      "טיפול בעובש על ידי חומרים מיוחדים וייעודיים",
      "תיקוני שפכטל במידת הצורך",
      "מריחת צבע יסוד בונדרול",
      "הכנת השטח לצבע",
      "צביעת התקרה והקירות בצבע מיוחד ואיכותי נגד עובש",
      "ניקיון יסודי בגמר העבודה"
    ]
  },
  "advantages": {
    "sectionTitle": "למה לבחור ברוני הצבעי?",
    "items": [
      { "title": "20 שנות ניסיון", "description": "ידע מקצועי שנצבר לאורך שני עשורים של עבודה בשטח" },
      { "title": "עבודה עברית", "description": "צוות ישראלי מקצועי, תקשורת ברורה ואמינות מלאה" },
      { "title": "זמינות גבוהה", "description": "מגיעים אליכם מהר, עובדים ביעילות, מסיימים בזמן" },
      { "title": "חומרים איכותיים", "description": "שימוש אך ורק בצבעים וחומרים האיכותיים ביותר הקיימים בשוק" },
      { "title": "מחירים הוגנים", "description": "מחירים שווים והוגנים לכל כיס — בלי הפתעות" },
      { "title": "הנחה 30% לדירות ריקות", "description": "הנחה מיוחדת של עד 30 אחוז בצביעת דירות ריקות" }
    ]
  },
  "quoteForm": {
    "sectionTitle": "קבלו הצעת מחיר חינם",
    "sectionSubtitle": "ללא תשלום וללא התחייבות — מלאו את הפרטים ונחזור אליכם בהקדם",
    "name": "שם מלא",
    "phone": "טלפון",
    "email": "אימייל (אופציונלי)",
    "serviceType": "סוג שירות",
    "serviceOptions": [
      "צביעת דירה ריקה",
      "צביעת דירה מאוכלסת",
      "תיקוני רטיבות ועובש",
      "צביעת משרד",
      "חדרי מדרגות",
      "שפכטל אמריקאי",
      "אחר"
    ],
    "address": "כתובת הנכס",
    "notes": "פרטים נוספים / הערות",
    "submit": "שלחו הצעת מחיר",
    "sending": "שולח...",
    "successTitle": "הפנייה נשלחה בהצלחה!",
    "successMessage": "תודה! נחזור אליכם בהקדם עם הצעת מחיר.",
    "errorMessage": "אירעה שגיאה, אנא נסו שוב או התקשרו ישירות."
  },
  "about": {
    "heroTitle": "הסיפור שלנו",
    "heroSubtitle": "20 שנה של מקצועיות, אמינות ותשוקה לצבע",
    "story": {
      "title": "מי אנחנו",
      "p1": "רוני הצבעי הוא עסק משפחתי עם ניסיון של 20 שנה בתחום הצביעה והשפכטל. אנחנו מתמחים בצביעת דירות, משרדים, חדרי מדרגות ובתיקוני נזקי רטיבות ועובש.",
      "p2": "אנחנו מאמינים שכל קיר מספר סיפור, וכל שכבת צבע היא הזדמנות לחדש ולרענן את הבית שלכם. אנחנו עובדים עם החומרים האיכותיים ביותר הקיימים בשוק, כי אנחנו לא מתפשרים על איכות.",
      "p3": "הצוות שלנו הוא צוות עבודה עברית — ישראלי, מקצועי ואמין. כשאתם בוחרים ברוני הצבעי, אתם בוחרים בשקט נפשי."
    },
    "values": {
      "title": "הערכים שלנו",
      "items": [
        { "title": "מקצועיות", "description": "כל פרויקט מקבל את מלוא תשומת הלב והמיומנות שצברנו בשני עשורים של עבודה" },
        { "title": "אמינות", "description": "מה שאנחנו מבטיחים — אנחנו מקיימים. תמיד." },
        { "title": "ניקיון", "description": "אנחנו עוזבים את הדירה נקייה יותר ממה שמצאנו אותה" },
        { "title": "שקיפות", "description": "הצעת מחיר ברורה ומפורטת, ללא הפתעות וללא עלויות נסתרות" }
      ]
    }
  },
  "gallery": {
    "title": "גלריית עבודות",
    "subtitle": "צפו בעבודות שביצענו — כל פרויקט הוא סיפור של התחדשות",
    "filterAll": "הכל",
    "filterApartments": "דירות",
    "filterOffices": "משרדים",
    "filterMoisture": "רטיבות ועובש",
    "filterSpackle": "שפכטל"
  },
  "contact": {
    "title": "צור קשר",
    "subtitle": "נשמח לשמוע מכם! התקשרו, שלחו הודעה בוואטסאפ, או מלאו את הטופס",
    "callUs": "התקשרו עכשיו",
    "whatsapp": "שלחו הודעה בוואטסאפ",
    "phone": "050-8898584",
    "addressLabel": "כתובתנו",
    "address": "לבונה 17/4, מודיעין",
    "availability": "זמינות גבוהה — אנחנו כאן בשבילכם",
    "freeQuote": "הצעת מחיר ללא תשלום וללא התחייבות"
  },
  "footer": {
    "rights": "כל הזכויות שמורות",
    "madeWith": "נבנה עם ❤️",
    "quickLinks": "ניווט מהיר",
    "contactInfo": "פרטי התקשרות"
  }
}
```

#### English — `src/messages/en.json`

```json
{
  "metadata": {
    "title": "Roni HaTzabai | Professional Painting & Spackling in Modi'in",
    "description": "Roni HaTzabai — 20 years of professional painting, spackling, and moisture repair services in Modi'in and the Shfela region. Free estimates!",
    "keywords": "painter Modi'in, spackling, apartment painting, moisture repair, office painting, Roni HaTzabai, painting services Israel"
  },
  "nav": {
    "home": "Home",
    "about": "About",
    "gallery": "Gallery",
    "contact": "Contact",
    "getQuote": "Free Estimate"
  },
  "hero": {
    "title": "Roni HaTzabai",
    "subtitle": "Professional Painting & Spackling Services",
    "area": "Modi'in & Surroundings | Shfela Region",
    "cta": "Get a Free Estimate",
    "badge1": "20 Years Experience",
    "badge2": "Israeli Crew",
    "badge3": "High Availability",
    "badge4": "Premium Materials"
  },
  "services": {
    "sectionTitle": "Our Services",
    "sectionSubtitle": "A wide range of painting and spackling services at the highest level",
    "emptyApartment": {
      "title": "Empty Apartment Painting",
      "description": "Professional painting of empty apartments with a special discount of up to 30%. Perfect results guaranteed without worrying about furniture.",
      "discount": "Up to 30% off"
    },
    "occupiedApartment": {
      "title": "Occupied Apartment Painting",
      "description": "Full coverage of furniture with protective nylon. Floor protection included. Thorough cleanup upon completion. You keep living — we handle everything."
    },
    "moisture": {
      "title": "Moisture & Mold Repair",
      "description": "Professional treatment of moisture damage and mold, including plaster repairs. Using specialized anti-mold materials and dedicated paints."
    },
    "offices": {
      "title": "Office Painting",
      "description": "Professional office painting without disrupting daily operations. After-hours painting available by prior arrangement."
    },
    "stairwells": {
      "title": "Stairwells & Common Areas",
      "description": "Painting stairwells and shared spaces. Clean, organized work with impressive results."
    },
    "spackle": {
      "title": "American Spackle",
      "description": "Wall smoothing with American spackle for a flawless, smooth finish. The result: walls as smooth as glass."
    }
  },
  "whatIncludes": {
    "sectionTitle": "What Does Apartment Painting Include?",
    "sectionSubtitle": "A professional, organized process from start to finish — this is how we work",
    "steps": [
      {
        "title": "Preparation & Setup",
        "description": "Covering all furniture with protective nylon for maximum protection. We treat your furniture as if it were our own."
      },
      {
        "title": "Floor Protection",
        "description": "Covering floors with cardboard rolls or special mats to prevent any dirt or damage."
      },
      {
        "title": "Crack Opening & Scraping",
        "description": "Opening cracks and scraping peeling paint as needed — proper surface preparation is the foundation for perfect work."
      },
      {
        "title": "Primer Coat (Bondroll)",
        "description": "Applying a Bondroll primer coat to create a strong, durable base that ensures perfect paint adhesion."
      },
      {
        "title": "Crack Treatment",
        "description": "Professional crack treatment using special crack bandages — preventing the problem from recurring."
      },
      {
        "title": "Spackle Repairs",
        "description": "Filling holes and spackle repairs. Every small imperfection receives precise treatment."
      },
      {
        "title": "Wall Smoothing (On Request)",
        "description": "Wall smoothing with American spackle upon client request — for an exceptionally smooth, perfect result."
      },
      {
        "title": "Sanding & Surface Preparation",
        "description": "Sanding walls as needed and preparing the surface for paint. A critical step for professional results."
      },
      {
        "title": "Painting — Two Coats",
        "description": "Painting ceilings and walls with premium acrylic paint, in your chosen color, with two coats for perfect, uniform coverage."
      },
      {
        "title": "Final Cleanup",
        "description": "Thorough cleanup upon completion. You return to a clean, organized, and refreshed home."
      }
    ]
  },
  "moistureSection": {
    "sectionTitle": "Moisture & Mold Damage Treatment",
    "sectionSubtitle": "Professional, thorough solutions for moisture and mold problems in bathrooms and throughout the home",
    "steps": [
      "Mold treatment using specialized, dedicated materials",
      "Spackle repairs as needed",
      "Bondroll primer coat application",
      "Surface preparation for painting",
      "Ceiling and wall painting with premium anti-mold paint",
      "Thorough cleanup upon completion"
    ]
  },
  "advantages": {
    "sectionTitle": "Why Choose Roni HaTzabai?",
    "items": [
      { "title": "20 Years Experience", "description": "Professional expertise accumulated over two decades of fieldwork" },
      { "title": "Israeli Crew", "description": "Professional Israeli team, clear communication, and complete reliability" },
      { "title": "High Availability", "description": "We arrive quickly, work efficiently, and finish on time" },
      { "title": "Premium Materials", "description": "Using only the highest quality paints and materials available on the market" },
      { "title": "Fair Pricing", "description": "Honest, fair prices for every budget — no surprises" },
      { "title": "30% Off Empty Apartments", "description": "Special discount of up to 30% for painting empty apartments" }
    ]
  },
  "quoteForm": {
    "sectionTitle": "Get a Free Estimate",
    "sectionSubtitle": "No charge, no obligation — fill in your details and we'll get back to you soon",
    "name": "Full Name",
    "phone": "Phone Number",
    "email": "Email (optional)",
    "serviceType": "Service Type",
    "serviceOptions": [
      "Empty Apartment Painting",
      "Occupied Apartment Painting",
      "Moisture & Mold Repair",
      "Office Painting",
      "Stairwells",
      "American Spackle",
      "Other"
    ],
    "address": "Property Address",
    "notes": "Additional Details / Notes",
    "submit": "Send Quote Request",
    "sending": "Sending...",
    "successTitle": "Request Sent Successfully!",
    "successMessage": "Thank you! We'll get back to you shortly with a quote.",
    "errorMessage": "An error occurred. Please try again or call us directly."
  },
  "about": {
    "heroTitle": "Our Story",
    "heroSubtitle": "20 years of professionalism, reliability, and passion for paint",
    "story": {
      "title": "Who We Are",
      "p1": "Roni HaTzabai is a family business with 20 years of experience in the painting and spackling industry. We specialize in painting apartments, offices, stairwells, and repairing moisture and mold damage.",
      "p2": "We believe every wall tells a story, and every coat of paint is an opportunity to renew and refresh your home. We work only with the highest quality materials available on the market, because we never compromise on quality.",
      "p3": "Our team is an Israeli crew — professional, reliable, and communicative. When you choose Roni HaTzabai, you choose peace of mind."
    },
    "values": {
      "title": "Our Values",
      "items": [
        { "title": "Professionalism", "description": "Every project receives the full attention and skill we've built over two decades" },
        { "title": "Reliability", "description": "What we promise — we deliver. Always." },
        { "title": "Cleanliness", "description": "We leave your apartment cleaner than we found it" },
        { "title": "Transparency", "description": "Clear, detailed quotes with no surprises and no hidden costs" }
      ]
    }
  },
  "gallery": {
    "title": "Our Work",
    "subtitle": "Browse our completed projects — every project is a story of renewal",
    "filterAll": "All",
    "filterApartments": "Apartments",
    "filterOffices": "Offices",
    "filterMoisture": "Moisture & Mold",
    "filterSpackle": "Spackle"
  },
  "contact": {
    "title": "Contact Us",
    "subtitle": "We'd love to hear from you! Call, send a WhatsApp message, or fill out the form",
    "callUs": "Call Now",
    "whatsapp": "Send WhatsApp Message",
    "phone": "050-8898584",
    "addressLabel": "Our Address",
    "address": "Levona 17/4, Modi'in, Israel",
    "availability": "High availability — we're here for you",
    "freeQuote": "Free estimate — no charge, no obligation"
  },
  "footer": {
    "rights": "All rights reserved",
    "madeWith": "Built with ❤️",
    "quickLinks": "Quick Links",
    "contactInfo": "Contact Info"
  }
}
```

---

## 8. Page-by-Page Specification & Content

### 8.1 HOME PAGE — `/[locale]/page.tsx`

The home page is the main landing page. It consists of multiple full-width sections stacked vertically, each with scroll-triggered reveal animations.

**Section order:**

| # | Section | Component | Design Notes |
|---|---------|-----------|--------------|
| 1 | **Hero** | `HeroSection.tsx` | Full viewport height. `hero_desktop.png` as background on desktop, `hero_mobile.png` on mobile (use `<picture>` or Next.js `<Image>` with `sizes`). Rainbow gradient overlay (semi-transparent). Logo top-left. Title, subtitle, badges, CTA button. Animated text reveal on load. |
| 2 | **Services Grid** | `ServicesGrid.tsx` | 6 cards in a responsive grid (1 col mobile, 2 cols tablet, 3 cols desktop). Each card is a square with rainbow-colored top border, icon (Lucide), title, and description. Staggered fade-in-up on scroll. Hover: card lifts with shadow + border glows in its rainbow color. |
| 3 | **What's Included** | `WhatIncludedSection.tsx` | Vertical timeline (stepper) layout. 10 steps with numbered circles connected by a rainbow gradient line. Each step has an icon, title, and description. Steps animate in sequentially on scroll. On mobile: single column. Background: subtle rainbow gradient mesh. |
| 4 | **Moisture Treatment** | `MoistureSection.tsx` | **Dark background section** (contrast). Blue/cyan color accent. 6 process steps in a clean list or icon grid. Shield/droplet iconography. Conveys professional expertise for this specialized service. |
| 5 | **Advantages** | `AdvantagesSection.tsx` | 6 advantage cards in a bento-grid layout (mixed sizes). Animated counter for "20" years. Each card has its own rainbow accent color. |
| 6 | **Quote Form** | `QuoteFormSection.tsx` | Full-width section with rainbow gradient background (subtle). White form card centered. Form fields as specified. Submit sends POST to `/api/contact`. Success/error states with animations. |
| 7 | **Stats Bar** | `StatsCounter.tsx` | Horizontal bar with animated counters: "20+ שנות ניסיון", "1000+ פרויקטים", "100% שביעות רצון". Numbers animate counting up when scrolled into view. |

### 8.2 ABOUT PAGE — `/[locale]/about/page.tsx`

| # | Section | Component | Design Notes |
|---|---------|-----------|--------------|
| 1 | **About Hero** | `AboutHero.tsx` | Shorter hero (50vh). Title "הסיפור שלנו" with rainbow text effect. Atmosphere image from `general/` folder as background. |
| 2 | **Our Story** | `StorySection.tsx` | Two-column layout: text left (in RTL: right), atmosphere image right. Three paragraphs telling Roni's story. Image with rainbow border frame. |
| 3 | **Our Values** | `ValuesSection.tsx` | 4 value cards in a 2x2 grid. Each with icon, title, description. Staggered animation. Each card gets a different rainbow accent. |

### 8.3 GALLERY PAGE — `/[locale]/gallery/page.tsx`

| # | Section | Component | Design Notes |
|---|---------|-----------|--------------|
| 1 | **Gallery Header** | — | Page title + subtitle. Filter buttons (All, Apartments, Offices, Moisture, Spackle) styled as rainbow pills. |
| 2 | **Gallery Grid** | `GalleryGrid.tsx` | Masonry grid layout using CSS columns or a library. Images from `works_gallery/` directory. Hover: slight zoom + rainbow border glow. Click: opens lightbox (`yet-another-react-lightbox`). Lazy loading with blur placeholder. |
| 3 | **Before/After** | `BeforeAfter.tsx` | *(Optional — if before/after images are available.)* Interactive slider comparing before and after. |

**Image loading:** Use Next.js `<Image>` component with `priority` on above-fold images, `loading="lazy"` for gallery items. Generate blur placeholders with `plaiceholder` or `sharp`.

### 8.4 CONTACT PAGE — `/[locale]/contact/page.tsx`

| # | Section | Component | Design Notes |
|---|---------|-----------|--------------|
| 1 | **Contact Header** | — | Title + subtitle with rainbow text. |
| 2 | **Contact Cards** | `ContactInfo.tsx` | Two large cards side by side: **Call Us** (phone icon, tap to call) and **WhatsApp** (WhatsApp icon, tap to chat). Each card has a vibrant color and hover animation. Phone: `tel:+972508898584`. WhatsApp: `https://wa.me/972508898584?text=שלום, אשמח לקבל הצעת מחיר` |
| 3 | **Quote Form** | `ContactForm.tsx` | Same form as homepage. Reuse `QuoteFormSection` component or extract form into shared component. |
| 4 | **Address + Map** | `GoogleMap.tsx` | Address card with icon + text: "לבונה 17/4, מודיעין". Google Maps embed below — use iframe embed (no API key needed) or `@vis.gl/react-google-maps` if API key provided. Map pinpoints Levona 17/4, Modi'in. |
| 5 | **Availability Note** | — | "זמינות גבוהה — אנחנו כאן בשבילכם" with clock icon. |

**Google Maps iframe (no API key needed):**

```html
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3389.5!2d35.005!3d31.897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDUzJzQ5LjIiTiAzNcKwMDAnMTguMCJF!5e0!3m2!1siw!2sil!4v1"
  width="100%"
  height="400"
  style="border:0; border-radius: 16px;"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
></iframe>
```

> **Note:** Developer should search Google Maps for "לבונה 17/4, מודיעין" and copy the correct embed URL from Google Maps → Share → Embed.

---

## 9. Resend Email Integration

### 9.1 API Route

```typescript
// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Rate limiting — simple in-memory store
const rateLimit = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 5;

  const record = rateLimit.get(ip);
  if (!record || now > record.resetTime) {
    rateLimit.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }
  if (record.count >= maxRequests) return false;
  record.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, phone, email, serviceType, address, notes } = body;

    // Validation
    if (!name || !phone || !serviceType || !address) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Phone validation (Israeli format)
    const phoneRegex = /^(\+972|0)([23489]|5[0-9]|7[0-9])[0-9]{7}$/;
    if (!phoneRegex.test(phone.replace(/[-\s]/g, ''))) {
      return NextResponse.json(
        { error: 'Invalid phone number' },
        { status: 400 }
      );
    }

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'Roni HaTzabai Website <onboarding@resend.dev>',
      to: [process.env.CONTACT_EMAIL || 'ron997@hotmail.co.il'],
      subject: `הצעת מחיר חדשה מ-${name}`,
      html: `
        <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #FF3B3B, #FF8C42, #FFD93D, #6BCB77, #4D96FF, #A855F7); padding: 3px; border-radius: 12px;">
            <div style="background: white; border-radius: 10px; padding: 30px;">
              <h1 style="color: #1A1A2E; margin-bottom: 24px; font-size: 24px;">📩 פנייה חדשה מהאתר</h1>
              
              <table style="width: 100%; border-collapse: collapse;">
                <tr style="border-bottom: 1px solid #eee;">
                  <td style="padding: 12px 0; font-weight: bold; color: #4A4A68; width: 120px;">שם:</td>
                  <td style="padding: 12px 0; color: #1A1A2E;">${name}</td>
                </tr>
                <tr style="border-bottom: 1px solid #eee;">
                  <td style="padding: 12px 0; font-weight: bold; color: #4A4A68;">טלפון:</td>
                  <td style="padding: 12px 0; color: #1A1A2E;">
                    <a href="tel:${phone}" style="color: #4D96FF;">${phone}</a>
                  </td>
                </tr>
                <tr style="border-bottom: 1px solid #eee;">
                  <td style="padding: 12px 0; font-weight: bold; color: #4A4A68;">אימייל:</td>
                  <td style="padding: 12px 0; color: #1A1A2E;">${email || 'לא צוין'}</td>
                </tr>
                <tr style="border-bottom: 1px solid #eee;">
                  <td style="padding: 12px 0; font-weight: bold; color: #4A4A68;">סוג שירות:</td>
                  <td style="padding: 12px 0; color: #1A1A2E;">${serviceType}</td>
                </tr>
                <tr style="border-bottom: 1px solid #eee;">
                  <td style="padding: 12px 0; font-weight: bold; color: #4A4A68;">כתובת:</td>
                  <td style="padding: 12px 0; color: #1A1A2E;">${address}</td>
                </tr>
                ${notes ? `
                <tr>
                  <td style="padding: 12px 0; font-weight: bold; color: #4A4A68;">הערות:</td>
                  <td style="padding: 12px 0; color: #1A1A2E;">${notes}</td>
                </tr>
                ` : ''}
              </table>

              <div style="margin-top: 24px; padding: 16px; background: #F8F9FA; border-radius: 8px; text-align: center;">
                <a href="tel:${phone}" style="display: inline-block; padding: 12px 24px; background: #6BCB77; color: white; border-radius: 8px; text-decoration: none; font-weight: bold;">
                  📞 התקשר ללקוח
                </a>
              </div>
            </div>
          </div>
          <p style="text-align: center; color: #8E8EA0; font-size: 12px; margin-top: 16px;">
            נשלח מאתר רוני הצבעי
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, messageId: data?.id });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
```

### 9.2 Frontend Form Hook

```typescript
// src/hooks/useContactForm.ts
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const contactSchema = z.object({
  name: z.string().min(2, 'שם חייב להכיל לפחות 2 תווים'),
  phone: z.string().regex(
    /^(\+972|0)([23489]|5[0-9]|7[0-9])[0-9]{7}$/,
    'מספר טלפון לא תקין'
  ),
  email: z.string().email('אימייל לא תקין').optional().or(z.literal('')),
  serviceType: z.string().min(1, 'יש לבחור סוג שירות'),
  address: z.string().min(3, 'יש להזין כתובת'),
  notes: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function useContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '', phone: '', email: '',
      serviceType: '', address: '', notes: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  };

  return { form, onSubmit: form.handleSubmit(onSubmit), status, setStatus };
}
```

---

## 10. SEO — Full Implementation Guide

### 10.1 Next.js Metadata API (Per Page)

```typescript
// src/app/[locale]/page.tsx
import type { Metadata } from 'next';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const isHe = locale === 'he';

  return {
    title: isHe
      ? 'רוני הצבעי | עבודות שפכטל וצבע במודיעין והסביבה'
      : 'Roni HaTzabai | Professional Painting & Spackling in Modi\'in',
    description: isHe
      ? 'רוני הצבעי - 20 שנות ניסיון בצביעת דירות, תיקוני רטיבות ועובש, שפכטל אמריקאי. מודיעין ואזור השפלה. הצעת מחיר חינם!'
      : 'Roni HaTzabai — 20 years of professional painting, spackling, and moisture repair services in Modi\'in and the Shfela region. Free estimates!',
    keywords: isHe
      ? ['צבעי מודיעין', 'שפכטל', 'צביעת דירה', 'תיקון רטיבות', 'צביעת משרדים', 'רוני הצבעי', 'צבעי בשפלה', 'שפכטל אמריקאי מודיעין', 'צביעה מקצועית', 'עבודות צבע מודיעין']
      : ['painter Modi\'in', 'spackling', 'apartment painting Israel', 'moisture repair', 'Roni HaTzabai'],

    // Open Graph
    openGraph: {
      title: isHe ? 'רוני הצבעי | צביעה מקצועית במודיעין' : 'Roni HaTzabai | Professional Painting Modi\'in',
      description: isHe
        ? '20 שנות ניסיון. הצעת מחיר חינם. 050-8898584'
        : '20 years experience. Free estimates. 050-8898584',
      url: `https://your-domain.com/${locale}`,
      siteName: isHe ? 'רוני הצבעי' : 'Roni HaTzabai',
      locale: isHe ? 'he_IL' : 'en_US',
      type: 'website',
      images: [
        {
          url: '/images/og-image.jpg', // Create a 1200x630 OG image
          width: 1200,
          height: 630,
          alt: isHe ? 'רוני הצבעי - עבודות שפכטל וצבע' : 'Roni HaTzabai - Painting Services',
        },
      ],
    },

    // Twitter Card
    twitter: {
      card: 'summary_large_image',
      title: isHe ? 'רוני הצבעי | צביעה מקצועית' : 'Roni HaTzabai | Professional Painting',
      description: isHe
        ? 'הצעת מחיר חינם. 050-8898584'
        : 'Free estimates. 050-8898584',
      images: ['/images/og-image.jpg'],
    },

    // Alternate languages
    alternates: {
      canonical: `https://your-domain.com/${locale}`,
      languages: {
        'he': 'https://your-domain.com/he',
        'en': 'https://your-domain.com/en',
      },
    },

    // Robots
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },

    // Verification (add your codes here)
    verification: {
      google: 'your-google-verification-code',
    },
  };
}
```

### 10.2 Dynamic Sitemap

```typescript
// src/app/sitemap.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.com';
  const locales = ['he', 'en'];
  const pages = ['', '/about', '/gallery', '/contact'];

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const page of pages) {
      entries.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'weekly' : 'monthly',
        priority: page === '' ? 1.0 : 0.8,
        alternates: {
          languages: {
            he: `${baseUrl}/he${page}`,
            en: `${baseUrl}/en${page}`,
          },
        },
      });
    }
  }

  return entries;
}
```

### 10.3 Dynamic Robots.txt

```typescript
// src/app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
```

### 10.4 JSON-LD Structured Data (Schema.org)

Add this to the root layout or home page:

```typescript
// src/components/seo/JsonLd.tsx
export function LocalBusinessJsonLd({ locale }: { locale: string }) {
  const isHe = locale === 'he';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://your-domain.com',
    name: isHe ? 'רוני הצבעי' : 'Roni HaTzabai',
    alternateName: 'Roni Adri Painting Services',
    description: isHe
      ? 'עבודות שפכטל וצבע מקצועיות במודיעין והסביבה. 20 שנות ניסיון.'
      : 'Professional painting and spackling services in Modi\'in. 20 years experience.',
    url: 'https://your-domain.com',
    telephone: '+972-50-889-8584',
    email: 'ron997@hotmail.co.il',
    address: {
      '@type': 'PostalAddress',
      streetAddress: isHe ? 'לבונה 17/4' : 'Levona 17/4',
      addressLocality: isHe ? 'מודיעין' : 'Modi\'in',
      addressCountry: 'IL',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 31.897,
      longitude: 35.005,
    },
    areaServed: [
      {
        '@type': 'City',
        name: isHe ? 'מודיעין-מכבים-רעות' : 'Modi\'in-Maccabim-Re\'ut',
      },
      {
        '@type': 'AdministrativeArea',
        name: isHe ? 'אזור השפלה' : 'Shfela Region',
      },
    ],
    priceRange: '₪₪',
    image: 'https://your-domain.com/images/logo.png',
    serviceType: [
      isHe ? 'צביעת דירות' : 'Apartment Painting',
      isHe ? 'שפכטל אמריקאי' : 'American Spackle',
      isHe ? 'תיקוני רטיבות ועובש' : 'Moisture & Mold Repair',
      isHe ? 'צביעת משרדים' : 'Office Painting',
    ],
    foundingDate: '2005',
    founder: {
      '@type': 'Person',
      name: isHe ? 'רוני אדרי' : 'Roni Adri',
    },
    sameAs: [],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: isHe ? 'שירותי צביעה' : 'Painting Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: isHe ? 'צביעת דירה ריקה' : 'Empty Apartment Painting',
            description: isHe ? 'הנחה של עד 30%' : 'Up to 30% discount',
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
```

### 10.5 SEO Checklist

| Task | Details |
|------|---------|
| ✅ Unique `<title>` per page | Different for each page + locale |
| ✅ `<meta description>` per page | 150-160 chars, includes keywords and CTA |
| ✅ Open Graph tags | Title, description, image (1200x630), URL |
| ✅ Twitter Card tags | `summary_large_image` |
| ✅ `hreflang` alternate links | Hebrew ↔ English on every page |
| ✅ Canonical URLs | One canonical per page |
| ✅ `sitemap.xml` | Dynamic, includes all pages and locales |
| ✅ `robots.txt` | Allow all except `/api/` and `/_next/` |
| ✅ JSON-LD Schema | `LocalBusiness` with address, phone, services |
| ✅ Semantic HTML | `<header>`, `<main>`, `<nav>`, `<article>`, `<section>`, `<footer>` |
| ✅ Heading hierarchy | One `<h1>` per page, proper `<h2>`-`<h6>` nesting |
| ✅ Image `alt` text | Descriptive alt in both Hebrew and English |
| ✅ Next.js `<Image>` | Automatic WebP/AVIF, lazy loading, `sizes` attribute |
| ✅ Core Web Vitals | LCP < 2.5s, FID < 100ms, CLS < 0.1 |
| ✅ HTTPS | Vercel provides SSL by default |
| ✅ Mobile-friendly | Responsive design (see section 11) |
| ✅ Fast loading | Code splitting, image optimization, font optimization |
| ✅ Google Search Console | Submit sitemap, verify ownership |
| ✅ `favicon.ico` + Apple Touch Icon | Multiple sizes |

### 10.6 Post-Deployment SEO Steps

1. **Google Search Console:** Go to https://search.google.com/search-console → Add property → Verify via HTML tag or DNS → Submit sitemap URL: `https://your-domain.com/sitemap.xml`
2. **Google My Business:** Create/claim the listing for "רוני הצבעי" at the Modi'in address. Link to the website.
3. **Request Indexing:** In Search Console, use "URL Inspection" → enter each page URL → click "Request Indexing."
4. **OG Image:** Create a professional 1200x630px image with the logo + "רוני הצבעי" + phone number for social sharing. Save as `/public/images/og-image.jpg`.

---

## 11. Mobile Responsiveness — Critical Requirements

> ⚠️ **This is marked as CRITICAL by the client. Mobile experience must be flawless.**

### 11.1 Breakpoints

```
Mobile:     < 640px    (sm)   — Primary target
Tablet:     640-1024px (md)   — Secondary
Desktop:    > 1024px   (lg)   — Full layout
Wide:       > 1280px   (xl)   — Luxurious spacing
```

### 11.2 Mobile-Specific Rules

| Element | Mobile Behavior |
|---------|----------------|
| **Navbar** | Hamburger menu (animated). Logo left, menu button right (in RTL: reversed). Full-screen overlay menu with rainbow gradient background. |
| **Hero** | Uses `hero_mobile.png`. Shorter height (80vh). Text centered. Badges stack vertically (2x2 grid). CTA button full-width. Font size reduced. |
| **Service Cards** | Single column, full width. Horizontal scroll carousel as alternative option. |
| **Timeline (What's Included)** | Single column. Line on the left side (RTL: right). Steps stack vertically. |
| **Quote Form** | Full-width inputs. Large touch targets (min 48px height). Select dropdown native on mobile. |
| **Gallery** | Single column or 2-column grid. Lightbox with swipe support. |
| **Floating Buttons** | Fixed bottom-right corner. Stacked vertically (WhatsApp on top, Call below). Size: 56px diameter. Z-index: 50. Margin from edges: 16px. |
| **Footer** | Single column. All content stacked. |
| **Font Sizes** | Base: 16px (prevents iOS zoom). Headings scale down proportionally. |
| **Touch Targets** | All interactive elements ≥ 48x48px. |
| **Spacing** | Horizontal padding: 16px (mobile), 24px (tablet), 32px+ (desktop). |

### 11.3 Testing Checklist

- [ ] Test on iPhone SE (smallest common viewport: 375px)
- [ ] Test on iPhone 14 Pro Max (430px)
- [ ] Test on iPad (768px)
- [ ] Test on Android (360px common)
- [ ] Verify no horizontal scrolling occurs
- [ ] Verify all tap targets are accessible
- [ ] Verify form inputs don't zoom on iOS (font-size ≥ 16px)
- [ ] Verify floating buttons don't overlap content
- [ ] Verify images load properly at all sizes
- [ ] Verify RTL layout doesn't break on mobile
- [ ] Test with slow 3G throttling (Chrome DevTools)

---

## 12. Image Management

### 12.1 Source Locations → Project Locations

| Source (Windows) | Destination (Project) |
|-----------------|----------------------|
| `C:\production\roni\images\logo.png` | `public/images/logo.png` |
| `C:\production\roni\images\hero_desktop.png` | `public/images/hero_desktop.png` |
| `C:\production\roni\images\hero_mobile.png` | `public/images/hero_mobile.png` |
| `C:\production\roni\images\general\*` | `public/images/general/` |
| `C:\production\roni\works_gallery\*` | `public/works_gallery/` |

### 12.2 Image Optimization Strategy

```typescript
// next.config.js — image optimization
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};
```

**Usage Pattern:**

```tsx
import Image from 'next/image';

// Hero — responsive with different sources
<picture>
  <source media="(max-width: 768px)" srcSet="/images/hero_mobile.png" />
  <Image
    src="/images/hero_desktop.png"
    alt="רוני הצבעי - עבודות צבע מקצועיות"
    fill
    priority
    className="object-cover"
    sizes="100vw"
  />
</picture>

// Gallery items — lazy loaded
<Image
  src={`/works_gallery/${filename}`}
  alt={`עבודת צביעה - ${index}`}
  width={600}
  height={400}
  loading="lazy"
  className="rounded-xl"
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
/>
```

### 12.3 Gallery Data Structure

Create a config file for gallery images so they're easy to manage:

```typescript
// src/lib/gallery-data.ts
export interface GalleryImage {
  src: string;
  alt_he: string;
  alt_en: string;
  category: 'apartments' | 'offices' | 'moisture' | 'spackle';
  width: number;
  height: number;
}

export const galleryImages: GalleryImage[] = [
  // Developer: populate this array with actual images from /works_gallery/
  // Example:
  {
    src: '/works_gallery/1.jpg',
    alt_he: 'צביעת דירה - פרויקט 1',
    alt_en: 'Apartment Painting - Project 1',
    category: 'apartments',
    width: 800,
    height: 600,
  },
  // ... add all images
];
```

---

## 13. WhatsApp & Call Floating Buttons

```tsx
// src/components/layout/FloatingButtons.tsx
'use client';

import { Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const PHONE_NUMBER = '972508898584';
const WHATSAPP_URL = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent('שלום, אשמח לקבל הצעת מחיר')}`;
const CALL_URL = `tel:+${PHONE_NUMBER}`;

export function FloatingButtons() {
  return (
    <div className="fixed bottom-6 start-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#20BD5A] transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="WhatsApp"
      >
        {/* Pulse ring animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ring" />
        <MessageCircle className="h-7 w-7 relative z-10" />
      </motion.a>

      {/* Call Button */}
      <motion.a
        href={CALL_URL}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-rainbow-blue text-white shadow-lg hover:bg-blue-600 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Call 050-8898584"
      >
        <Phone className="h-7 w-7" />
      </motion.a>
    </div>
  );
}
```

> **Note:** Use `start-6` instead of `left-6` for RTL compatibility (CSS logical properties). In RTL, this positions the buttons on the right side.

---

## 14. Performance Optimization

| Optimization | Implementation |
|-------------|---------------|
| **Code Splitting** | Next.js App Router does this automatically per route |
| **Image Optimization** | Next.js `<Image>` with AVIF/WebP, responsive `sizes` |
| **Font Optimization** | `next/font` with `display: swap`, subset to Hebrew+Latin |
| **Lazy Loading** | Gallery images with `loading="lazy"`, dynamic imports for lightbox |
| **Preloading** | `priority` on hero image, `<link rel="preload">` for critical fonts |
| **Bundle Size** | Import only needed icons from Lucide (`import { Phone } from 'lucide-react'`) |
| **CSS** | Tailwind purges unused styles automatically |
| **Compression** | Vercel handles Brotli/Gzip automatically |
| **Caching** | Static assets cached with immutable headers on Vercel |

**Lighthouse targets:**
- Performance: > 90
- Accessibility: > 90
- Best Practices: > 90
- SEO: > 95

---

## 15. Build Phases & Checklist

### Phase 1 — Project Setup (Day 1)

- [ ] Install Node.js LTS on local machine
- [ ] Create Next.js project with TypeScript + Tailwind
- [ ] Install all dependencies (see section 4.2)
- [ ] Configure Tailwind with rainbow theme (section 6.2)
- [ ] Set up fonts (Heebo + Outfit) via `next/font`
- [ ] Configure i18n with `next-intl` (section 7)
- [ ] Create translation files (he.json + en.json) with full content
- [ ] Set up `.env.local` with Resend keys
- [ ] Create folder structure (section 5)
- [ ] Set up global CSS with rainbow utilities (section 6.3)
- [ ] Copy images to `public/` directory

### Phase 2 — Layout Shell (Day 2)

- [ ] Build `Header.tsx` — sticky, with nav links, language switcher, CTA button
- [ ] Build `MobileMenu.tsx` — hamburger with full-screen rainbow overlay
- [ ] Build `Footer.tsx` — contact info, quick links, copyright
- [ ] Build `FloatingButtons.tsx` — WhatsApp + Call (section 13)
- [ ] Build root layout with RTL/LTR support
- [ ] Verify navigation works for all 4 pages × 2 locales

### Phase 3 — Home Page (Days 3-5)

- [ ] Build `HeroSection.tsx` — responsive hero with desktop/mobile images, animated text, badges, CTA
- [ ] Build `ServicesGrid.tsx` — 6 rainbow service cards with hover effects
- [ ] Build `WhatIncludedSection.tsx` — 10-step timeline with rainbow gradient line
- [ ] Build `MoistureSection.tsx` — dark section with cyan accent
- [ ] Build `AdvantagesSection.tsx` — 6 benefits in bento grid
- [ ] Build `QuoteFormSection.tsx` — form with validation + Resend integration
- [ ] Build `StatsCounter.tsx` — animated number counters
- [ ] Build reusable UI components: `RainbowButton`, `RainbowCard`, `SectionHeading`, `ScrollReveal`
- [ ] Add scroll-triggered animations (Framer Motion + Intersection Observer)

### Phase 4 — About + Gallery + Contact Pages (Days 6-7)

- [ ] Build About page: hero, story section, values grid
- [ ] Build Gallery page: masonry grid, filter buttons, lightbox integration
- [ ] Build Contact page: contact cards, quote form, Google Maps embed
- [ ] Populate gallery data structure with actual images
- [ ] Test all forms end-to-end (form → API → Resend → email arrives)

### Phase 5 — SEO & Polish (Day 8)

- [ ] Add metadata to all pages (section 10.1)
- [ ] Generate sitemap.ts and robots.ts (sections 10.2-10.3)
- [ ] Add JSON-LD structured data (section 10.4)
- [ ] Create OG image (1200x630) with logo + business name + phone
- [ ] Add `alt` text to all images in both languages
- [ ] Verify semantic HTML structure
- [ ] Add favicon + Apple touch icon

### Phase 6 — Mobile & QA (Day 9)

- [ ] Test responsive design at all breakpoints (section 11)
- [ ] Test RTL layout in Hebrew
- [ ] Test LTR layout in English
- [ ] Test on real devices (iPhone, Android, iPad) or BrowserStack
- [ ] Run Lighthouse audit — fix any scores below 90
- [ ] Test form submission with real Resend API key
- [ ] Verify email arrives at ron997@hotmail.co.il
- [ ] Cross-browser test: Chrome, Safari, Firefox, Edge
- [ ] Fix any hydration errors or console warnings
- [ ] Verify all links work (WhatsApp, Call, Google Maps)

### Phase 7 — Deployment (Day 10)

- [ ] Final local build: `npm run build` — verify no errors
- [ ] Initialize Git and push to GitHub (section 16)
- [ ] Verify Vercel auto-deploys from the repo
- [ ] Set environment variables in Vercel dashboard
- [ ] Test production site on Vercel URL
- [ ] Connect custom domain (if available)
- [ ] Submit sitemap to Google Search Console
- [ ] Request indexing in Google Search Console

---

## 16. Deployment — GitHub + Vercel

### 16.1 Initialize Git & Push to GitHub

```bash
# ============================================
# After the project is fully built and tested locally:
# ============================================

cd C:\production\roni

# Initialize git (if not already initialized)
git init

# Add the remote repository
git remote add origin https://github.com/ofergithubacounnt/roni.git

# IMPORTANT: Make sure .env.local is in .gitignore!
# Verify:
cat .gitignore | findstr ".env"

# Stage all files
git add .

# Commit
git commit -m "feat: complete Roni HaTzabai website — Next.js, TypeScript, Rainbow Theme, i18n, SEO"

# Push to main branch
git branch -M main
git push -u origin main

# ============================================
# Vercel will automatically detect the push
# and deploy from:
# https://vercel.com/ofer-boost-medias-projects/roni
# ============================================
```

### 16.2 Vercel Environment Variables

Go to the Vercel project dashboard → Settings → Environment Variables → Add:

| Variable | Value | Environment |
|----------|-------|-------------|
| `RESEND_API_KEY` | `re_xxxxxxxxxxxx` | Production, Preview |
| `FROM_EMAIL` | `onboarding@resend.dev` (or verified domain) | Production, Preview |
| `CONTACT_EMAIL` | `ron997@hotmail.co.il` | Production, Preview |
| `NEXT_PUBLIC_SITE_URL` | `https://your-domain.com` | Production |
| `NEXT_PUBLIC_DEFAULT_LOCALE` | `he` | Production, Preview |

### 16.3 Vercel Configuration (Optional)

```json
// vercel.json (optional — for redirects)
{
  "redirects": [
    {
      "source": "/",
      "destination": "/he",
      "permanent": false
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

---

## Appendix A — Constants File

```typescript
// src/lib/constants.ts
export const BUSINESS = {
  name: { he: 'רוני הצבעי', en: 'Roni HaTzabai' },
  owner: { he: 'רוני אדרי', en: 'Roni Adri' },
  phone: '050-8898584',
  phoneIntl: '+972508898584',
  email: 'ron997@hotmail.co.il',
  address: {
    he: 'לבונה 17/4, מודיעין',
    en: 'Levona 17/4, Modi\'in, Israel',
  },
  whatsappUrl: `https://wa.me/972508898584?text=${encodeURIComponent('שלום, אשמח לקבל הצעת מחיר')}`,
  callUrl: 'tel:+972508898584',
  experience: 20,
  discountEmpty: 30,
} as const;

export const LOCALES = ['he', 'en'] as const;
export type Locale = (typeof LOCALES)[number];
```

---

## Appendix B — Utility Functions

```typescript
// src/lib/utils.ts
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Merge Tailwind classes safely
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Get rainbow color by index
export function getRainbowColor(index: number): string {
  const colors = [
    '#FF3B3B', '#FF8C42', '#FFD93D', '#6BCB77',
    '#45B7D1', '#4D96FF', '#6C5CE7', '#A855F7',
  ];
  return colors[index % colors.length];
}
```

---

*Document version: 1.0 — Generated March 2026*
*Project: Roni HaTzabai Website*
*Stack: Next.js 14 + TypeScript + Tailwind CSS + Resend + Vercel*
