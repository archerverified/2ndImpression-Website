2nd Impression Style Guidelines

Project Analysis & Structure
Design System Extraction (from Screenshot & Repo):

Colors: Primary blue (#0048ff), accent blue (#001aff), neutral cream (#fffff5), white (#ffffff), black (#000000), gray (#666666). Inferred from hero (blue text/buttons), background (cream), footer (black).
Typography: Headings (RocaOne Bold, sizes 48px/36px/24px, line-height 1.1), Body (Inter Regular, sizes 16px/14px, line-height 1.5), Buttons (Product Sans Medium, 16px).
Spacing: Scale (4px base): xs=4px, sm=8px, md=16px, lg=32px, xl=64px. Sections use lg/xl padding.
Breakpoints: Mobile (375px), Tablet (768px), Desktop (1440px). Responsive: Stack sections vertically on mobile.
Components: Buttons (rounded-md, bg-primary, text-white), Cards (shadow-md, bg-white, p-md), Icons (32x32px, colorful), Navbar (fixed, bg-white, shadow-sm).

Project File Tree (Updated from Repo):

2ndImpression-Website/
├── .gitignore
├── DEPLOYMENT.md
├── README.md
├── SETUP.md
├── package.json
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── HeroSection.tsx
│   │   ├── AnimatedTestimonials.tsx
│   │   ├── BenefitsSection.tsx
│   │   ├── ValueProposition.tsx
│   │   ├── AnimatedPeople.tsx
│   │   ├── FAQSection.tsx
│   │   ├── CTASection.tsx
│   │   ├── Footer.tsx
│   │   ├── PopupModal.tsx
│   │   └── ui/  # Add subcomponents here
│   ├── imports/  # Figma assets
│   ├── styles/
│   │   └── globals.css  # Tailwind config + custom vars
│   └── App.tsx
└── docs/  # New: Add style-guideline.md here

design-system.json:

{
  "colors": {
    "primary": "#0048ff",
    "accent": "#001aff",
    "background": "#fffff5",
    "neutral": "#ffffff",
    "text": "#000000",
    "gray": "#666666"
  },
  "typography": {
    "fonts": {
      "heading": "RocaOne",
      "body": "Inter",
      "button": "Product Sans"
    },
    "sizes": {
      "h1": "48px",
      "h2": "36px",
      "h3": "24px",
      "body": "16px",
      "small": "14px"
    },
    "weights": {
      "bold": 700,
      "medium": 500,
      "regular": 400
    },
    "lineHeights": {
      "heading": 1.1,
      "body": 1.5
    }
  },
  "spacing": {
    "base": "4px",
    "xs": "4px",
    "sm": "8px",
    "md": "16px",
    "lg": "32px",
    "xl": "64px"
  },
  "breakpoints": {
    "mobile": "375px",
    "tablet": "768px",
    "desktop": "1440px"
  },
  "components": {
    "button": {
      "base": "rounded-md bg-primary text-white px-md py-sm font-button font-medium"
    },
    "card": {
      "base": "bg-neutral shadow-md p-md rounded-lg"
    },
    "icon": {
      "size": "32px"
    },
    "navbar": {
      "base": "fixed top-0 w-full bg-neutral shadow-sm p-md"
    }
  }
}

Developer Instructions
Cursor Master Prompt (Create style-guideline.md):
In Cursor, open docs/style-guideline.md (create if absent). Use @src/styles/globals.css for Tailwind refs. Implement Markdown with sections: Overview, Colors, Typography, Spacing, Breakpoints, Components. Map to design-system.json. Ensure A11y (aria-labels on icons), responsive (media queries), dark mode (prefers-color-scheme vars). Code block for Tailwind config extensions. No deps install; use existing Tailwind v4.

# Style Guidelines for 2ndImpression Website

## Overview
This guide ensures design fidelity to Figma specs using Tailwind CSS v4. Prioritize utility-first classes, semantic HTML, and reusability. Reference design-system.json for tokens.

## Colors
- Primary: #0048ff (buttons, accents)
- Accent: #001aff (hover states)
- Background: #fffff5 (main sections)
- Neutral: #ffffff (cards, modals)
- Text: #000000 (body)
- Gray: #666666 (subtext)

Tailwind Extension:
```js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#0048ff',
        accent: '#001aff',
        background: '#fffff5',
        // etc.
      }
    }
  }
}

Typography

Fonts: RocaOne (headings), Inter (body), Product Sans (buttons)
Sizes: h1 48px, h2 36px, h3 24px, body 16px, small 14px
Weights: Bold 700, Medium 500, Regular 400
Line Heights: Headings 1.1, Body 1.5

Tailwind Classes: font-rocaone text-5xl font-bold leading-tight
Spacing

Scale: xs(4px), sm(8px), md(16px), lg(32px), xl(64px)
Usage: p-md, m-lg, gap-sm

Breakpoints

Mobile: 375px (sm:)
Tablet: 768px (md:)
Desktop: 1440px (lg:)

Responsive: flex flex-col md:flex-row
Components

Button: <button class="rounded-md bg-primary text-white px-md py-sm font-medium">Text</button>
Card: Content
Icon: ...
Navbar: 

Accessibility & Edge Cases

A11y: aria-hidden on decoratives, focus states (outline-primary)
Dark Mode: @media (prefers-color-scheme: dark) { bg-gray-900 text-white }
Responsive: Test at breakpoints; auto-layout for grids/flex.