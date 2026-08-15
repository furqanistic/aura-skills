# Research notes

## Contents

- Official sources checked
- Recent community evidence
- Verification rules

Research checked on 2026-08-15.

## Official sources

- [1LINK 1BILL product page](https://1link.net.pk/products-services/bill-payment-service) describes invoice/fixed, top-up/variable, credit-card bill, and package/bundle payments plus biller-prefixed customer references.
- [1LINK Open APIs](https://1link.net.pk/products-services/1link-open-apis) confirms sandbox/certification catalogues and public bill inquiry, bill payment, and void capabilities.
- [1LINK API product catalogue](https://sandbox.1link.net.pk/uat-1link/sandbox/product/9125) currently shows 1BILL `1.0.0` and the public operation list.
- [1LINK getting started](https://sandbox.1link.net.pk/uat-1link/sandbox/start) documents registration, one-time Client Secret issuance, sandbox creation, and certification access.
- [1LINK developer support](https://sandbox.1link.net.pk/uat-1link/sandbox/index.php/support) says sandbox mock calls use the same mechanism as live with environment URL changes, but production collaboration remains subject to the applicable arrangement.
- [State Bank of Pakistan notification](https://www.sbp.org.pk/notifications/PSPOD/2025/ntf1.html) identifies 1LINK as a designated payment system from 2025-08-20.

## Recent community evidence

- A July 2026 [PakStartups discussion](https://www.reddit.com/r/PakStartups/comments/1uuw13o/i_am_literally_going_insane_trying_to_launch_a/) describes high onboarding friction in Pakistan and mixed 1BILL experiences, including one disputed/missing-record anecdote and another user reporting no issues.
- An August 2026 [developersPak discussion](https://www.reddit.com/r/developersPak/comments/1vn1xib/payment_gateway_and_1_bill/) shows developers sometimes conflate 1BILL with 1GO/Raast P2M and are still seeking reliable fee/integration details.
- Recent user discussions about PSIDs show that bank/wallet menu placement and category support vary, so customer instructions and support workflows must tolerate channel differences.

Reddit is useful for discovering operational failure modes, not for defining API contracts, fees, eligibility, or security fields.

## Re-verify before implementation

Always re-check the official portal for the current product/catalogue/API version, selected plan, detailed schema, authentication, rate limits, certification cases, endpoints, credentials, prefix/reference rules, response codes, settlement, pricing, and production approval. If the private pack conflicts with this skill, follow the current signed/certified documentation and update the skill afterward.
