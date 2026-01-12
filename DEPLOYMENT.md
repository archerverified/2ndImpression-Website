# Deployment Guide

## Pre-Deployment Checklist

Before deploying your 2xReputation landing page, ensure:

- [ ] All components render correctly locally
- [ ] All images and assets load properly
- [ ] Forms submit correctly (email capture)
- [ ] Responsive design works on mobile/tablet/desktop
- [ ] All links and CTAs point to correct URLs
- [ ] Popup modal displays on page load
- [ ] Animations and carousels work smoothly

## Environment Setup

### Environment Variables

Create a `.env` file if you need to configure:

```bash
# API endpoints (if using backend services)
VITE_API_URL=https://api.yourservice.com

# Analytics tracking IDs
VITE_GA_ID=UA-XXXXXXXXX-X

# Form submission endpoints
VITE_FORM_ENDPOINT=https://forms.yourservice.com/submit
```

## Deployment Platforms

### Vercel (Recommended)

**Why Vercel?**
- Optimized for React/Vite projects
- Automatic HTTPS
- Global CDN
- Zero configuration needed

**Steps:**

1. **Install Vercel CLI** (optional)
   ```bash
   npm install -g vercel
   ```

2. **Deploy via GitHub** (easiest)
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Configure:
     - Framework Preset: Vite
     - Build Command: `npm run build`
     - Output Directory: `dist`
   - Click "Deploy"

3. **Deploy via CLI**
   ```bash
   vercel
   ```

### Netlify

**Steps:**

1. **Via GitHub**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" > "Import an existing project"
   - Connect to GitHub
   - Select repository
   - Configure:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Deploy!

2. **Via Netlify CLI**
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod
   ```

### Custom Domain Setup

#### For 2ndimpression.co:

1. **Add Custom Domain** in your hosting platform
2. **Update DNS Records:**
   
   **Vercel:**
   - Type: A Record
   - Name: @
   - Value: 76.76.21.21
   
   - Type: CNAME
   - Name: www
   - Value: cname.vercel-dns.com

   **Netlify:**
   - Type: A Record  
   - Name: @
   - Value: 75.2.60.5
   
   - Type: CNAME
   - Name: www
   - Value: [your-site].netlify.app

3. **Wait for DNS propagation** (can take up to 48 hours)

## Performance Optimization

### Image Optimization

**Note:** Figma Make assets are already optimized, but if you're hosting locally:

```bash
# Install image optimization tools
npm install --save-dev vite-plugin-imagemin
```

### Code Splitting

Vite automatically handles code splitting. For manual optimization:

```tsx
// Lazy load components
const HeroSection = lazy(() => import('./components/HeroSection'));
```

### Font Loading Optimization

Consider self-hosting fonts for better performance:

1. Download fonts from CDN
2. Place in `/public/fonts`
3. Update `globals.css` with local paths

## Analytics Setup

### Google Analytics

Add to your `index.html` or use a React analytics package:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## Form Integration

### Newsletter Signup

Update `CTASection.tsx` to integrate with your email service:

```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  try {
    const response = await fetch('YOUR_API_ENDPOINT', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    });
    
    if (response.ok) {
      alert('Thanks for subscribing!');
      setEmail('');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};
```

### Popup Modal Email Capture

Similarly update `PopupModal.tsx` for the GPT promotion signup.

## SSL/HTTPS

Both Vercel and Netlify provide automatic HTTPS. For custom domains:

1. SSL certificates are auto-generated
2. HTTP automatically redirects to HTTPS
3. No additional configuration needed

## Monitoring

### Recommended Tools:

- **Vercel Analytics** - Built-in with Vercel
- **Google Analytics** - Traffic and user behavior
- **Hotjar** - Heatmaps and session recordings
- **Sentry** - Error tracking

## Post-Deployment

### Testing Checklist:

- [ ] Test all pages and sections
- [ ] Verify forms submit correctly
- [ ] Check mobile responsiveness  
- [ ] Test on different browsers (Chrome, Safari, Firefox)
- [ ] Verify all CTAs link correctly
- [ ] Test popup modal behavior
- [ ] Check page load speed (use PageSpeed Insights)
- [ ] Verify SEO meta tags

### SEO Optimization:

Add meta tags to your `index.html`:

```html
<head>
  <title>2nd Impression | Reputation Management Services</title>
  <meta name="description" content="Professional reputation management services. Remove negative reviews, de-index unwanted content, and protect your online presence.">
  <meta property="og:title" content="2nd Impression | Reputation Management">
  <meta property="og:description" content="Clean up your digital reputation with expert DMCA agents and reputation management specialists.">
  <meta property="og:image" content="URL_TO_PREVIEW_IMAGE">
  <meta property="og:url" content="https://2ndimpression.co">
  <meta name="twitter:card" content="summary_large_image">
</head>
```

## Rollback Strategy

Both Vercel and Netlify maintain deployment history:

- **Vercel**: Go to Deployments > Select previous deployment > Promote to Production
- **Netlify**: Go to Deploys > Select previous deploy > Publish deploy

## Support

If you encounter deployment issues:

1. Check build logs in your hosting platform
2. Verify all dependencies are listed in `package.json`
3. Ensure Node version compatibility
4. Test build locally: `npm run build`

## Maintenance

- Update dependencies monthly: `npm update`
- Monitor site performance with Lighthouse
- Review analytics monthly
- Test forms and integrations regularly
- Keep DNS records updated if changing hosting