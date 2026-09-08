# User-Test Evidence

## Status

**The live customer test has not yet been run.** This file is intentionally not populated with fabricated behavior. It is prepared so the class test can be recorded consistently and compared with the decision rule written before seeing results.

## Precommitted test

- **Date and setting:** To be completed when the in-class / live user test begins.
- **Target segment:** College students who currently rent, or expect to rent within the next 12 months, an off-campus house or apartment with a security deposit.
- **Test artifact:** The live RentGuard landing page and its “Protect My Deposit — $19.99” purchase-intent call to action.
- **Participant disclosure:** RentGuard is an early-stage student venture being tested. Clicking the call to action does not charge the participant or complete a purchase.
- **Planned denominator:** At least **30 eligible target-segment visitors** who view the landing page.
- **Primary behavioral measure:** Number of eligible visitors who click “Protect My Deposit — $19.99.”
- **Precommitted threshold:** **15% or greater** of eligible visitors take the test action.
- **Decision if below threshold:** Revise the value proposition, pricing, or explanation of the service and run another test before investing further in the full product.
- **Decision if threshold is met:** Continue developing the MVP and test a stronger form of commitment.

## Anonymous collection method

Before the landing page is used for the experiment, the visitor receives a one-question eligibility check asking whether they currently rent off campus, or expect to within the next 12 months, with a security deposit at risk.

If the visitor selects **Yes**, the site attempts to record one anonymous `eligible_view` event for that browser session. If that eligible visitor later clicks a priced RentGuard call to action, the site attempts to record one anonymous `cta_click` event for the session.

The Supabase table stores only:

- `event_type` — either `eligible_view` or `cta_click`
- `created_at` — server-generated timestamp

The site does **not** store a participant name, email, phone number, address, property information, lease, photos, payment data, or user identifier in the experiment table. Browser `sessionStorage` is used only on the visitor's device to reduce obvious duplicate counting within the same browser session; that local marker is not transmitted to Supabase.

Anonymous visitors are permitted to insert experiment events but are not given public read access to the experiment table.

## Evidence record — complete during testing

| Measure | Result |
|---|---:|
| Eligible participants invited/exposed | Pending |
| Eligible participants who actually viewed the offer (`eligible_view`) | Pending |
| Eligible participants who clicked the $19.99 CTA (`cta_click`) | Pending |
| CTA conversion rate | Pending |
| Precommitted threshold | 15% |
| Threshold met? | Pending |

## Observed behavior / friction

To be completed from actual observation. Record what participants **did**, where they hesitated, what they expected to happen after clicking, and any recurring confusion. Do not convert casual positive comments into behavioral evidence.

## Result compared with the precommitted threshold

Pending the live test. The calculation will be:

`cta_click events / eligible_view events = observed conversion rate`

The observed rate will be compared directly with the **15% threshold written before data collection**.

Because the automated counts are session-based rather than identity-based, they reduce obvious repeat counting but do not prove that every browser session represents a distinct person. During class, the team should also keep a simple manual tally of how many eligible testers were intentionally exposed to the page so obvious technical anomalies can be identified without collecting participant identities.

## What the evidence can support

If the threshold is met, the evidence can support the narrower claim that a meaningful share of tested eligible college renters showed **purchase intent** after seeing the $19.99 RentGuard offer.

It **cannot** prove that those users would complete a real $19.99 transaction, that RentGuard will successfully recover security deposits, that the product has legal evidentiary value in every jurisdiction, or that the venture has scalable customer acquisition economics. Those require stronger later tests.

## Ethics and privacy

No names, emails, payment details, property addresses, lease documents, residence photos, precise location, or sensitive personal information are required for this test. The experiment backend intentionally stores only the event type and server timestamp needed to calculate the precommitted denominator, numerator, and conversion rate.
