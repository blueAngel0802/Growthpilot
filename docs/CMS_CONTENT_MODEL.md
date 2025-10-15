# CMS / WordPress Content Model

This project is built in Next.js, but the content structure is CMS-ready and can map to WordPress, a headless CMS, or a custom admin panel.

## Page Model

| Field | Type | Notes |
| --- | --- | --- |
| `title` | Text | SEO page title |
| `slug` | Text | URL path |
| `metaDescription` | Text | Search result description |
| `heroHeadline` | Text | Main H1 |
| `heroSubheadline` | Rich text | Intro paragraph |
| `primaryCtaLabel` | Text | CTA button text |
| `primaryCtaUrl` | URL | CTA destination |
| `sections` | Repeater | Flexible content modules |
| `schemaType` | Select | Organization, LocalBusiness, FAQ, Article |

## Campaign Landing Page Model

| Field | Type | Notes |
| --- | --- | --- |
| `campaignName` | Text | Internal campaign name |
| `adGroup` | Text | PPC ad group |
| `targetKeyword` | Text | Main paid keyword |
| `offer` | Text | Offer shown in hero |
| `formId` | Text | Lead form integration ID |
| `thankYouUrl` | URL | Post-submit URL |
| `trackingEvents` | Repeater | GA4/GTM event definitions |

## Blog / SEO Content Model

| Field | Type | Notes |
| --- | --- | --- |
| `title` | Text | Blog title |
| `excerpt` | Text | Meta description and card preview |
| `slug` | Text | URL path |
| `category` | Select | SEO, SEM, AI, Web Development |
| `body` | Rich text | Article content |
| `faqs` | Repeater | FAQ schema source |
| `internalLinks` | Repeater | Links to service/campaign pages |

## WordPress Implementation Notes

This could be implemented using:

- Custom Post Types for Campaign Landing Pages and Case Studies
- Advanced Custom Fields for flexible page sections
- Yoast or Rank Math for metadata control
- Gravity Forms, HubSpot Forms, or custom API form submission
- GTM script injection through theme or plugin configuration
