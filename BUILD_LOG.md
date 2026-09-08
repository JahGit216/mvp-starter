# AI and Build Log

| Time | Specification or prompt | What changed | What we inspected or tested | Human judgment |
|---|---|---|---|---|
| 2026-09-08 | Replace the BUSFIN 4215 starter with the RentGuard venture MVP using the existing precommitted experiment. | Replaced the ClearShift interface with a RentGuard landing page, student-renter positioning, guided inspection product preview, condition-report mockup, one-time $19.99 offer, repeated purchase-intent CTAs, transparent experiment section, and privacy/ethics disclosure. Updated local interaction handling so all dialog close controls work. | Inspected the original `index.html`, `styles.css`, `app.js`, `experiment.js`, and `EXPERIMENT.md`. Preserved the starter's local-only click demonstration architecture and did not add a backend or persistent customer-data collection. | The page intentionally tests a concrete $19.99 purchase-intent action rather than a generic “learn more” click. It does not claim a click equals a completed purchase, and the local click counter is explicitly separated from credible experiment evidence. |

## Team ownership

- Team members: To be completed by the team.
- Who owned the current product path: To be completed by the team.
- Who owned the test and evidence: To be completed by the team.
- Who owned the economics: To be completed by the team.
- Important limitation the team can explain candidly: A CTA click is evidence of purchase intent, not proof that a renter would actually complete a $19.99 transaction. The current MVP does not transmit or persist participant data, so formal experiment denominators and eligible actions must be recorded separately and transparently.
