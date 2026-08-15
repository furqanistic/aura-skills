---
name: integrate-easypaisa
description: Design, implement, review, and troubleshoot secure Easypaisa merchant payment integrations for Pakistani websites, mobile apps, and commerce platforms. Covers Easypaisa Mobile Account and OTC flows, approved hosted or direct integration methods, callbacks/postbacks, transaction verification, reversals, settlement, merchant reporting, plugins, reconciliation, onboarding, and production rollout. Use when adding Easypaisa payments, repairing an existing Easypay/Easypaisa gateway, migrating outdated code, or preparing a merchant integration for certification and launch.
---

# Integrate Easypaisa

Build Easypaisa payments from the merchant's current approved integration guide, not from copied legacy snippets. Easypaisa documentation and enabled payment modes can differ by merchant agreement and environment.

## First: detect the existing integration

Inspect the repository for Easypaisa/Easypay packages, plugins, gateway clients, merchant/store IDs, hash-key configuration, environment URLs, hosted checkout forms, mobile-account or OTC flows, return/callback/postback routes, transaction-status verification, reversal handling, order fields, settlement jobs, tests, and deployment secrets.

- If an integration exists, identify the guide/version it implements, enabled modes, environment, signing/canonicalization rules, endpoints, order lifecycle, and known failures. Repair it incrementally and preserve certified behavior.
- If no integration exists, design it using the project's existing stack and the merchant's latest onboarding/integration pack.
- Never invent or copy credential names, request fields, endpoint URLs, hash ordering, algorithms, response codes, status values, or callback rules. Verify each against current merchant documentation and test vectors.

## Confirm the product and merchant eligibility

Official Easypaisa material currently advertises Online Payment Gateway onboarding for a business/entity with a live website or mobile app, subject to application, documentation, KYC/due diligence, and integration. Publicly listed modes include Easypaisa Mobile Account and OTC; plugins are listed for WooCommerce, OpenCart, Magento, and PrestaShop. Actual enabled modes, fees, settlement, limits, and technical contracts must come from the merchant agreement.

Do not confuse the Online Payment Gateway with a personal wallet transfer, merchant QR/Till, payment link, bulk disbursement, bank card acquirer, escrow, or recurring-subscription engine. Confirm the required Easypaisa product before coding.

## Workflow

1. Obtain the latest merchant integration guide, sandbox/staging details, approved payment modes, credentials, test accounts/data, signature examples, callback rules, status/reversal APIs, certification cases, settlement terms, and production cutover pack.
2. Record the exact guide/API/plugin version and compare it with existing code.
3. Create an internal pending order with a unique merchant order/reference ID before starting payment.
4. Calculate product, quantity, amount, currency, discounts, delivery, and customer ownership on the server. Never accept authoritative payment values from the client.
5. Generate the request and integrity value exactly from the documented fields, order, encoding, and algorithm. Keep signing secrets server-side.
6. Send customers only through the contracted hosted/direct/mobile-account/OTC flow. Use HTTPS return and server-notification URLs.
7. Treat the browser return as user experience only. Verify and deduplicate the server callback/postback, then confirm ambiguous outcomes with the approved status mechanism or merchant portal.
8. Fulfill once after server-side verification. Record transaction, order, channel, status, and settlement identifiers for support and reconciliation.
9. Implement failure, cancellation, timeout, duplicate, delayed callback, reversal, refund where supported, and settlement-mismatch paths.
10. Test in staging with approved cases and complete merchant certification/approval before live mode.

## Non-negotiable rules

- Never expose merchant credentials or hash/signing keys in browser code, mobile apps, repositories, logs, screenshots, or errors.
- Never mark an order paid from query parameters, a success page, client JSON, SMS, screenshot, or redirect alone.
- Verify message integrity using the exact official canonicalization; timing-safe comparison is required where the application compares digests.
- Enforce unique order and external transaction identifiers and make fulfillment idempotent.
- Treat timeout or lost response as unknown—not failed—until verified.
- Use integer minor units or the exact decimal formatting required by the guide; never binary floating point.
- Do not retry charge/payment creation blindly.
- Do not perform live payments, reversals, refunds, or credential changes without explicit approval.

## Reference routing

- Read [references/integration-workflow.md](references/integration-workflow.md) for order states, hosted/mobile-account/OTC flows, callbacks, verification, plugins, and testing.
- Read [references/security-and-operations.md](references/security-and-operations.md) before implementing signing, secrets, idempotency, reconciliation, monitoring, or production rollout.
- Read [references/research-notes.md](references/research-notes.md) for dated official sources, current public claims, community evidence, and details that must be re-verified.

## Verification and output

Run relevant formatter, static analysis/type checking, tests, and builds. Report whether Easypaisa was found or added from scratch, the product/modes and guide version used, flows implemented, callback verification, idempotency, transaction-status recovery, reconciliation, certification status, and remaining merchant-portal configuration. Clearly separate public research, merchant-provided specifications, staging evidence, and live approval.
