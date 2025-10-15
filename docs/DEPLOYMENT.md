# Deployment Guide

## Recommended Hosting

- Vercel for easiest Next.js deployment
- Netlify as another simple static/web deployment option
- AWS Amplify for AWS-based hosting

## Local Setup

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run start
```

## Vercel Deployment Steps

1. Push the project to GitHub.
2. Import the repository in Vercel.
3. Add environment variables:

```txt
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_SITE_URL=https://your-demo-domain.com
```

4. Click Deploy.
5. After deployment, verify:
   - Home page loads.
   - Case study page loads.
   - `/sitemap.xml` works.
   - `/robots.txt` works.
   - `/api/recommendations?goal=leads` returns JSON.

## QA Checklist

- Mobile layout works.
- CTA links work.
- Case study page works.
- API route works.
- Metadata appears correctly.
- No console errors.
- Lighthouse performance is acceptable.
- Tracking IDs are configured only in environment variables.
