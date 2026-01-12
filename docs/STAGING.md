# Staging Environment Guide

This document explains how to work with the staging environment for the 2ndImpression website.

## Quick Start

### Running Staging Mode Locally

```bash
npm run dev:staging
```

This loads `.env.staging` and runs the dev server.

### Building for Staging

```bash
npm run build:staging
```

### Previewing Staging Build

```bash
npm run preview:staging
```

This serves the staging build on port 4174.

## Environment Files

| File | Purpose |
|------|---------|
| `.env.example` | Template with all available variables (commit to git) |
| `.env.local` | Local overrides (gitignored) |
| `.env.staging` | Staging configuration |
| `.env.production` | Production configuration |

## Environment Variables

| Variable | Description |
|----------|-------------|
| `VITE_APP_ENV` | Environment: `local`, `staging`, `production` |
| `VITE_SITE_URL` | Full site URL |
| `VITE_API_URL` | API endpoint |
| `VITE_GA_ID` | Google Analytics ID |
| `VITE_FORM_ENDPOINT` | Form submission URL |
| `VITE_EMAILJS_PUBLIC_KEY` | EmailJS public key |
| `VITE_EMAILJS_SERVICE_ID` | EmailJS service ID |
| `VITE_EMAILJS_NOTIFICATION_TEMPLATE_ID` | Notification template |
| `VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID` | Auto-reply template |

## Using Environment Variables in Code

```typescript
import { env, isStaging, isProduction } from '../config/env';

// Access variables
console.log(env.SITE_URL);
console.log(env.FORM_ENDPOINT);

// Check environment
if (isStaging) {
  console.log('Running in staging mode');
}
```

## Deployment

### Vercel

1. Connect GitHub repo
2. Set build command: `npm run build:staging` for staging branch
3. Add environment variables in Vercel dashboard

### Netlify

1. Connect GitHub repo
2. Add to `netlify.toml`:
   ```toml
   [context.staging]
     command = "npm run build:staging"
   ```
3. Set environment variables in Netlify dashboard

## Troubleshooting

- **Variables not loading**: Ensure they start with `VITE_`
- **Changes not reflecting**: Restart dev server after editing `.env` files
- **Build issues**: Check that all required variables are set
