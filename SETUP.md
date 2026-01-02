# Setup Instructions

## About This Project

This project was built using **Figma Make**, which means it includes:

- React components generated from Figma designs
- Custom asset imports using the `figma:asset` scheme
- SVG imports from the `/imports` directory  
- Tailwind CSS v4.0 for styling
- Custom fonts (Product Sans, RocaOne, Inter)

## Important Notes

### Figma Asset Imports

Many components import assets using the `figma:asset` scheme:

```tsx
import imgExample from "figma:asset/abc123.png";
```

**This is a virtual module scheme specific to Figma Make.** These imports will work when running in the Figma Make environment. If you're deploying this project outside of Figma Make, you'll need to:

1. Extract the actual asset files from your Figma Make project
2. Place them in a `/public/assets` directory
3. Update the imports to use regular file paths

### SVG Imports

SVG graphics are imported from the `/imports` directory:

```tsx
import svgPaths from "../imports/svg-abc123";
```

These files contain SVG path data that's rendered inline in components.

## Development Setup

### Prerequisites

- Node.js 18 or higher
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/archerverified/2ndImpression-Website.git
cd 2ndImpression-Website

# Install dependencies
npm install

# Run development server
npm run dev
```

### Building for Production

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

## Project Structure

```
src/
├── App.tsx                 # Main application component
├── components/            # All React components
│   ├── Header.tsx
│   ├── HeroSection.tsx
│   ├── AnimatedTestimonials.tsx
│   ├── BenefitsSection.tsx
│   ├── ValueProposition.tsx
│   ├── AnimatedPeople.tsx
│   ├── FAQSection.tsx
│   ├── CTASection.tsx
│   ├── Footer.tsx
│   ├── PopupModal.tsx
│   └── CompanyLogos.tsx
├── styles/
│   └── globals.css        # Global styles, custom fonts, Tailwind config
└── imports/               # Figma-imported SVG and asset files
```

## Key Features

### Custom Fonts

The project uses three custom font families loaded via CDN:

- **Product Sans** - Primary body font
- **RocaOne** - Display headings and brand text  
- **Inter** - Secondary UI text

These are defined in `/src/styles/globals.css`.

### Brand Colors

- Primary Blue: `#0048ff`
- Background Cream: `#fffff5`
- Black: `#000000` / `#111111`
- White: `#ffffff`

### Components

#### Header
Sticky navigation with logo, menu links, and CTA buttons.

#### HeroSection  
Main landing section with headline, description, CTA, and company logos carousel.

#### AnimatedTestimonials
Auto-scrolling testimonial cards on blue background with navigation controls.

#### BenefitsSection
Grid of 6 service cards with icons, descriptions, and images.

#### ValueProposition
Two-column layout with value points and visualization.

#### AnimatedPeople
Dual-row infinite scrolling image carousel of case studies.

#### FAQSection
Accordion-style FAQ with expand/collapse functionality.

#### CTASection
Newsletter signup form on blue background.

#### Footer
Brand footer with links and copyright.

#### PopupModal
Welcome modal that appears on page load with email capture for GPT promotion.

## Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Deploy!

### Netlify

1. Connect repository
2. Build settings:
   - Build Command: `npm run build`  
   - Publish Directory: `dist`
3. Deploy!

## Troubleshooting

### Asset Import Errors

If you see errors about `figma:asset` imports:

1. You're likely running outside the Figma Make environment
2. Extract assets from Figma Make
3. Update import paths to use local files

### Font Loading Issues

If custom fonts don't load:

1. Check your internet connection (fonts load from CDN)
2. Verify the CDN URLs in `globals.css` are accessible
3. Consider hosting fonts locally for better performance

### Build Errors

If TypeScript throws errors:

1. Ensure all dependencies are installed: `npm install`
2. Check Node.js version (requires 18+)
3. Clear cache: `rm -rf node_modules package-lock.json && npm install`

## Support

For issues or questions:

- Check the README.md for project overview
- Review component code for implementation details
- Consult Figma Make documentation for asset handling

## License

Private - All rights reserved to 2ndimpression.co