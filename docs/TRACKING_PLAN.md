# GA4 / Google Tag Manager Tracking Plan

## Purpose

This tracking plan shows how the demo project would be measured in a real agency campaign environment.

## Core Events

| Event Name | Trigger | Purpose |
| --- | --- | --- |
| `cta_click_book_audit` | User clicks primary CTA | Measures CTA engagement |
| `form_start_lead_audit` | User focuses first form field | Measures form intent |
| `form_submit_lead_audit` | User submits lead form | Primary conversion |
| `phone_click_header` | User clicks phone link | Tracks call intent |
| `scroll_75_percent` | User reaches 75% page depth | Measures page engagement |
| `case_study_view` | User views case study page | Measures proof content interest |
| `recommendation_goal_change` | User switches AI recommendation tab | Measures dashboard interaction |

## Recommended GTM Variables

- Page URL
- Page Path
- UTM Source
- UTM Medium
- UTM Campaign
- UTM Term
- UTM Content
- Button Text
- Form ID
- Referrer

## Conversion Setup

Primary conversion:

- `form_submit_lead_audit`

Secondary conversions:

- `phone_click_header`
- `cta_click_book_audit`
- `case_study_view`

## UTM Example

```txt
?utm_source=google&utm_medium=cpc&utm_campaign=agency_audit&utm_term=seo_landing_page&utm_content=headline_test_a
```

## Client Reporting Notes

Report weekly on:

- Spend
- Conversions
- Cost per acquisition
- Landing page conversion rate
- Top converting channel
- Top improvement recommendation
- Next experiment
