# RentGuard — Venture MVP

RentGuard helps college students renting off-campus housing document pre-existing property damage before move-in so they have organized evidence if a security-deposit dispute happens later.

The current MVP tests one consequential question: **will eligible college renters take a meaningful $19.99 purchase-intent action for a guided move-in inspection and standardized property-condition report?**

## Live product

**Live URL:** https://jahgit216.github.io/mvp-starter/

**Repository/source:** https://github.com/JahGit216/mvp-starter

## Current offer

- **Customer:** College students renting off-campus houses or apartments.
- **Pain:** Poor documentation of pre-existing damage can make it harder to dispute security-deposit charges later.
- **Product:** Guided room-by-room move-in documentation that organizes evidence and produces a standardized condition record.
- **Payer:** The renter.
- **Price hypothesis:** **$19.99 once per lease / inspection.**
- **Meaningful test action:** Click **“Protect My Deposit — $19.99.”**

The first MVP deliberately does **not** process a real payment or transmit sensitive housing data. The click tests purchase intent; it is not represented as a completed sale.

## Consequential hypothesis and decision rule

See [`EXPERIMENT.md`](EXPERIMENT.md).

The precommitted test uses at least **30 eligible target-segment visitors** as the planned denominator and treats **15% CTA conversion or greater** as the threshold for continuing to a stronger commitment test.

## Submission package

- [`EXPERIMENT.md`](EXPERIMENT.md) — named causal hypothesis, target segment, ethical test, and precommitted decision rule.
- [`EVIDENCE.md`](EVIDENCE.md) — live user-test protocol, denominator, behavioral measure, and results table. Evidence fields remain pending until real participants interact with the MVP.
- [`ECONOMICS.md`](ECONOMICS.md) — renter-paid one-time revenue model, modeled contribution economics, acquisition logic, and fragile assumptions.
- [`BUILD_LOG.md`](BUILD_LOG.md) — AI use, build history, candor, team ownership, and unresolved questions.
- [`REVISION_RECEIPT.md`](REVISION_RECEIPT.md) — current pre-test revisions plus the fields that will be completed after the first live test/revision cycle.

## Evidence integrity

The local click count on the page is only a transparent same-device demonstration. It is **not** treated as credible customer evidence. Formal evidence must include the number of eligible target users exposed to the offer, the number who take the priced action, the resulting conversion rate, and comparison with the threshold written before data collection.

No customer behavior, payment result, revenue, CAC, or conversion number is claimed unless it is actually observed. Modeled numbers in the economics file are explicitly labeled as assumptions or targets.

## Run locally

```bash
npm run serve
npm test
```

Open <http://localhost:8000>.

## Deployment

Pushing to `main` triggers the included GitHub Actions workflow that runs the tests and deploys the static site to GitHub Pages.
