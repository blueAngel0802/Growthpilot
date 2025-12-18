# CMS Content Model

The blog is currently powered by structured TypeScript data in `lib/data.ts`. In a production agency build, this could map to WordPress, Sanity, Contentful, Strapi, or a custom database.

## Blog post fields

- `slug`
- `title`
- `excerpt`
- `category`
- `date`
- `readingTime`
- `content`

## Why this matters

This demonstrates understanding of CMS-ready architecture. The current implementation is simple for portfolio review, but the page structure is ready to move to a managed CMS without changing the front-end rendering pattern.
