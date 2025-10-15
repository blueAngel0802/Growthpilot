# SEO / SEM Strategy

## SEO Goals

- Improve organic visibility for high-intent service keywords.
- Keep page structure clean and easy for search engines to crawl.
- Support fast loading, mobile-first UX, and conversion-friendly content.
- Use structured data where appropriate.

## SEO Implementation

- Metadata configured in `lib/seo.ts` and page-level metadata.
- Sitemap generated in `app/sitemap.ts`.
- Robots configuration generated in `app/robots.ts`.
- Clear H1/H2 hierarchy across pages.
- FAQ/content sections can be added as CMS-driven modules.
- Internal linking between home page and case study page.

## Suggested Target Keywords

- SEO landing page developer
- SEM landing page development
- agency web development
- campaign dashboard development
- AI workflow automation for marketing
- full stack developer for marketing agency
- conversion-focused website development

## SEM / PPC Landing Page Strategy

Each ad campaign should have a dedicated landing page with:

- Message match between ad copy and hero headline.
- One primary CTA.
- Trust/proof blocks above or near the form.
- Fast load time and mobile-first layout.
- UTM capture and hidden fields for campaign attribution.
- Event tracking for CTA clicks, form starts, form submissions, phone clicks, and scroll depth.

## Conversion Optimization Ideas

- Add service-specific proof points near the CTA.
- Move the form higher on mobile pages.
- Test CTA copy such as “Book Free Audit” vs “Get Growth Plan.”
- Add short FAQ section to reduce objections.
- Use thank-you page events for cleaner conversion tracking.

## Campaign Example

Campaign: Google Search Ads for “SEO landing page developer”

Landing page goal: Book qualified consultation call

Primary CTA: Book Free Audit

Events:

- `cta_click_book_audit`
- `form_start_lead_audit`
- `form_submit_lead_audit`
- `phone_click_header`
- `scroll_75_percent`
