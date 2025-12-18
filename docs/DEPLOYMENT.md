# Deployment Notes

## Recommended deployment

Vercel is the simplest deployment target because the project uses Next.js App Router and API routes.

## Steps

1. Push repository to GitHub.
2. Import the repo into Vercel.
3. Add environment variables from `.env.example`.
4. Deploy.
5. Confirm these routes:
   - `/`
   - `/dashboard`
   - `/audit`
   - `/campaign-builder`
   - `/case-study`
   - `/blog`
   - `/sitemap.xml`
   - `/robots.txt`

## Production improvements

- Connect lead form to HubSpot, Salesforce, Airtable, or custom CRM
- Connect campaign dashboard to GA4 / Google Ads APIs
- Connect campaign plan generator to OpenAI or another LLM
- Store leads and audit history in PostgreSQL, Supabase, or DynamoDB
- Add authentication for client dashboard access
- Add WordPress or headless CMS integration
