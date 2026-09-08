# Venture-Economics Snapshot

## Current business model

RentGuard is modeled as a one-time, renter-paid service used at the beginning of an off-campus lease. The renter completes a guided room-by-room move-in inspection, organizes evidence of pre-existing damage, and receives a standardized property-condition record designed to make later security-deposit disputes easier to document.

- **User:** College student renting an off-campus house or apartment.
- **Buyer:** The renter whose security deposit is at risk.
- **Payer:** The renter.
- **Price and payment rhythm:** **$19.99 once per lease / move-in inspection.** No subscription is assumed in the current model.

## Unit economics — modeled, not yet observed

The MVP does not currently process real payments, so the numbers below are planning assumptions rather than observed operating results.

| Item | Modeled amount per paid customer | Basis |
|---|---:|---|
| Revenue | $19.99 | Current test price |
| Payment processing | ~$0.88 | Illustrative card-processing assumption of 2.9% + $0.30 |
| Incremental hosting/storage/report delivery | ~$0.25 | Early-stage planning allowance; actual cost not yet measured |
| Modeled variable cost | **~$1.13** | Processing + delivery allowance |
| Modeled contribution before acquisition cost | **~$18.86** | $19.99 - $1.13 |
| Modeled contribution margin | **~94%** | $18.86 / $19.99 |

These figures intentionally exclude founder labor, fixed development time, legal review, insurance, and future support costs. Those costs would matter before treating the model as scalable.

## Acquisition

- **Likely acquisition path:** Campus housing groups, student organizations, move-in checklists/QR codes, social media aimed at students signing leases, referrals between roommates, and partnerships with student-housing organizations or property-management channels.
- **Initial acquisition-cost goal:** **$5 or less per paying customer** during early testing. This is a decision target, not an observed CAC.
- At the modeled $18.86 contribution before acquisition cost, a $5 CAC would leave roughly **$13.86 contribution per customer** before fixed costs and founder labor.
- **Maximum theoretical CAC before contribution turns negative:** roughly **$18.86**, although operating that close to break-even would leave no room for fixed costs, support, refunds, or profit.

## Retention / repeat purchase

RentGuard is not currently modeled as a high-frequency subscription. The base assumption is **one purchase per lease**, with a possible repeat purchase when the same renter moves into a new property in a later year. Near-term growth therefore depends more on new move-ins, roommate referrals, and campus distribution than on monthly retention.

A future version could test landlord/property-manager payment or multi-property products, but those are not part of the current MVP and should not be counted as validated revenue streams.

## Most fragile economic assumptions

1. **Willingness to pay $19.99:** The most important unresolved assumption is whether target renters will take a credible paid-intent step at this price rather than relying on their phone camera, notes app, landlord checklist, or doing nothing.
2. **Acquisition efficiency:** Even with attractive software-like gross margins, the model weakens quickly if reaching a paying renter costs too much relative to the one-time purchase price.
3. **Perceived value at move-in:** RentGuard creates value before a dispute occurs, when the financial loss is still uncertain. The product must make the avoided-risk value concrete enough that renters act now instead of postponing documentation.

## Economic decision logic

The current experiment tests the first and most consequential economic question: **does a $19.99 offer create enough purchase intent among eligible college renters to justify a stronger payment test?** If the precommitted behavioral threshold is met, the next economic test should require a stronger commitment such as beginning checkout, placing a refundable deposit, or completing another instructor-approved payment-intent step. If it is missed, we should revise the value proposition, price, or target segment before building expensive product features.
