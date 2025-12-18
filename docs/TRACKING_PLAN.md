# GA4 / GTM Tracking Plan

## Recommended events

| Event name | Trigger | Purpose |
|---|---|---|
| `cta_click_primary` | Main CTA click | Measures high-intent conversion behavior |
| `lead_form_start` | User focuses first form field | Measures form engagement |
| `lead_form_submit_attempt` | Form submit attempted | Measures submission intent |
| `lead_form_submit_success` | API returns success | Measures completed lead |
| `lead_form_submit_error` | API returns failure | Detects form issues |
| `seo_audit_started` | Audit form submitted | Measures tool usage |
| `seo_audit_completed` | Audit returns result | Measures completed tool interaction |
| `campaign_plan_started` | Campaign builder submitted | Measures planning tool usage |
| `campaign_plan_generated` | Campaign plan API returns result | Measures completion |
| `phone_click` | Phone link click | Measures call intent |
| `pricing_section_view` | Pricing/offer section viewed | Measures buying intent |
| `qualified_lead_created` | Lead score passes threshold | Measures high-value conversion |

## Implementation note

The project includes `lib/analytics.ts`, which pushes events into `window.dataLayer` and calls `gtag` when available. This keeps the code ready for GTM/GA4 implementation without requiring tracking credentials in the demo.
