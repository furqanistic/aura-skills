# Research notes

## Contents

- Official sources
- Community evidence
- Re-verification requirements

Research checked on 2026-08-15.

## Official sources

- [Easypaisa Online Payment Gateway](https://easypaisa.com.pk/online-payment-gateway/) publicly describes merchant application, document submission, KYC/due diligence, website/mobile integration, Mobile Account and OTC modes, platform plugins, merchant support, and portal transaction/settlement/reversal reports.
- [Easypaisa Merchant Portal](https://merchantportal.easypaisa.com.pk/) advertises QR integration, push notifications/secure payments, and payment links; confirm which product is contracted rather than mixing these with the Online Payment Gateway.
- [Corporate onboarding portal](https://registerbusiness.easypaisa.com.pk/) identifies online payment and other corporate products. Product access remains subject to onboarding.
- [Staging integration guides page](https://easypaystg.easypaisa.com.pk/easypay-merchant/faces/pg/site/IntegrationGuides.jsf) exists but detailed current documents may require access or be shared by the merchant integration team.

## Community evidence

- A December 2025 [developersPak thread](https://www.reddit.com/r/developersPak/comments/1pgvreh/how_easypaisa_payment_api_can_be_registered_and/) shows developers still need merchant onboarding guidance rather than a public self-service key flow.
- A May 2025 [PakistaniDevs thread](https://www.reddit.com/r/PakistaniDevs/comments/1kkub13) immediately asks whether the developer has obtained a merchant account, reinforcing that credentials and documentation are merchant-specific.
- A July 2026 [PakStartups discussion](https://www.reddit.com/r/PakStartups/comments/1uuw13o/i_am_literally_going_insane_trying_to_launch_a/) describes KYC/onboarding friction across Pakistani gateways and restricted access to wallet push APIs. Treat it as operational context, not an API contract.

## Re-verify before implementation

Confirm the current merchant guide/API/plugin version, enabled modes, URLs, credential types, signing fields/order/algorithm, amount and date formats, callbacks, status/reversal/refund operations, response codes, test cases, fees, limits, settlement, certification, and production approval. If merchant-provided documentation conflicts with this skill, follow the current approved pack and update the skill afterward.
