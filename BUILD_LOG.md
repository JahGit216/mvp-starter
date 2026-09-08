# AI and Build Log

| Time | Specification or prompt | What changed | What we inspected or tested | Human judgment |
|---|---|---|---|---|
| 2026-09-08 | Replace the BUSFIN 4215 starter with the RentGuard venture MVP using the existing precommitted experiment. | Replaced the ClearShift interface with a RentGuard landing page, student-renter positioning, guided inspection product preview, condition-report mockup, one-time $19.99 offer, repeated purchase-intent CTAs, transparent experiment section, and privacy/ethics disclosure. Updated local interaction handling so all dialog close controls work. | Inspected the original `index.html`, `styles.css`, `app.js`, `experiment.js`, and `EXPERIMENT.md`. Preserved the starter's local-only click demonstration architecture and did not add a backend or persistent customer-data collection. | The page intentionally tests a concrete $19.99 purchase-intent action rather than a generic “learn more” click. It does not claim a click equals a completed purchase, and the local click counter is explicitly separated from credible experiment evidence. |
| 2026-09-08 | Complete the Venture MVP submission package before live user evidence is available. | Completed `ECONOMICS.md`; converted `EVIDENCE.md` into a precommitted live-test protocol; prepared `REVISION_RECEIPT.md` without fabricating observations; clarified the current business model and economics assumptions. | Checked each required submission component against the assignment package: live product, hypothesis/decision rule, evidence denominator, economics, build log, revision receipt, and source. | Modeled economics are labeled assumptions rather than actual results. Evidence-dependent fields remain pending until real participants interact with the MVP. |

## AI use and candor

ChatGPT was used as a build and drafting partner to inspect the starter repository, translate the RentGuard venture concept into the website and experiment files, draft interface copy, structure the economics snapshot, and prepare the evidence/revision documentation. The human venture owner selected the RentGuard concept, target customer, security-deposit problem, $19.99 pricing hypothesis, and the decision to test purchase intent before building a backend or full inspection system.

AI-generated suggestions were not treated as customer evidence. No customer behaviors, conversion rates, interviews, revenue, CAC, or payment results were fabricated. Any number not yet observed is labeled as a target, assumption, or modeled amount.

## Team ownership

- **Current team member / venture owner:** Jack Adams. If additional Venture MVP teammates join, add their names and roles here before submission.
- **Who owned the current product path:** Jack Adams — RentGuard concept, college-renter target segment, security-deposit problem, guided move-in inspection mechanism, and current $19.99 offer.
- **Who owned the test and evidence:** Jack Adams — with AI assistance preparing the precommitted test structure. Actual participant behavior will be recorded manually during the live test.
- **Who owned the economics:** Jack Adams — with AI assistance modeling the initial unit economics and explicitly separating assumptions from observed results.
- **Important limitation the team can explain candidly:** A CTA click is evidence of purchase intent, not proof that a renter would actually complete a $19.99 transaction. The current MVP does not transmit or persist participant data, so formal experiment denominators and eligible actions must be recorded separately and transparently.

## Current unresolved questions

1. Will at least 15% of eligible target renters take the priced CTA action?
2. Does $19.99 feel small relative to the security-deposit risk, or does it create too much friction before the product has proven itself?
3. Which part of the value proposition matters most to renters: guided documentation, organization/timestamps, the condition report, or dispute readiness?
4. Can RentGuard acquire customers cheaply enough for a one-time-per-lease model to work?
