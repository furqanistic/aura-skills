---
name: integrate-jazzcash
description: Design, implement, review, migrate, and troubleshoot secure JazzCash merchant payment integrations for Pakistani websites, apps, and commerce platforms. Cover HTTP POST redirection, approved APIs or hosted checkout, JazzCash Mobile Wallet, voucher payments, cards when enabled, secure hashes, callbacks, status checks, refunds, settlement, reconciliation, onboarding, testing, and production rollout. Use when adding JazzCash, repairing an existing JazzCash gateway, or upgrading an outdated merchant integration.
---

# Integrate JazzCash

Use the merchant's current approved JazzCash documentation. Treat public samples as orientation only because enabled products, versions, fields, endpoints, and certification requirements can differ by merchant and environment.

## Inspect before changing anything

Search the repository for JazzCash packages, plugins, SDKs, payment forms, `pp_` fields, merchant IDs, passwords, integrity salts, secure-hash builders, sandbox/live URLs, return or callback routes, status/refund logic, transaction tables, reconciliation jobs, tests, and deployment secrets.

- If JazzCash exists, identify its integration mode, API/document version, environment, enabled payment methods, hashing rules, order lifecycle, and failures. Explain the safest upgrade path and preserve working or certified behavior.
- If it does not exist, design the integration in the project's current stack using the latest documentation supplied for that merchant.
- Never guess or copy endpoint URLs, credential names, signed fields, field ordering, encodings, algorithms, response codes, or status meanings. Confirm them against the merchant portal, current guide, and test vectors.

## Confirm the product

The current public JazzCash sandbox documentation is labeled v4.2 and describes HTTP POST page redirection and API testing. Its public feature pages describe Mobile Wallet, voucher, card, hosted/redirection, and related gateway capabilities. Confirm what the merchant has actually been approved to use.

Do not confuse the Online Payment Gateway with personal wallet transfers, business QR/Raast QR, payment links, bulk payments, retail agent services, or another JazzCash corporate API. Confirm the required product before implementation.

## Workflow

1. Obtain the latest merchant guide, selected integration mode, enabled methods, sandbox credentials, return/callback rules, hash examples, status/refund operations, response-code table, certification cases, settlement terms, and production pack.
2. Record the exact documentation, plugin, or API version. Compare it with any existing implementation before editing.
3. Create a server-side pending order with a unique merchant transaction/reference ID.
4. Calculate products, amount, currency, discounts, delivery, expiry, and customer ownership on the server.
5. Build and hash the final request exactly as documented. Keep merchant passwords, integrity salts, keys, and certificates server-side.
6. Send the customer through the approved hosted, redirection, wallet, voucher, or card flow. Never collect a JazzCash MPIN, OTP, or card details unless the contracted PCI-compliant method explicitly permits it.
7. Treat the browser return as presentation only. Authenticate and deduplicate the server notification, validate the order and amount, and verify ambiguous outcomes through the approved status source.
8. Fulfill once after authoritative success. Persist gateway transaction, response, payment method, reversal/refund, and settlement identifiers.
9. Handle cancellation, decline, expiry, timeout, lost response, duplicate/delayed callback, reversal/refund, and settlement mismatch.
10. Pass sandbox and merchant certification tests before requesting production activation.

## Non-negotiable rules

- Never expose credentials or integrity material in frontend code, mobile binaries, repositories, logs, URLs, screenshots, or errors.
- Never mark an order paid from a redirect, query parameter, client response, SMS, or screenshot alone.
- Implement canonicalization and secure-hash verification exactly as specified; use timing-safe digest comparison where applicable.
- Enforce uniqueness for internal order references and JazzCash transaction identifiers. Make payment transitions and fulfillment idempotent.
- Treat timeouts as unknown until status verification or reconciliation proves the outcome. Never blindly create a second charge.
- Use integer minor units or the guide's exact amount format; never binary floating point.
- Never perform live payments, captures, refunds, reversals, or credential changes without explicit approval.

## Reference routing

- Read [references/integration-workflow.md](references/integration-workflow.md) for modes, order states, request handling, callbacks, status recovery, plugins, and testing.
- Read [references/security-and-operations.md](references/security-and-operations.md) before implementing hashes, secrets, idempotency, monitoring, reconciliation, or go-live controls.
- Read [references/research-notes.md](references/research-notes.md) for dated sources and details that must be rechecked.

## Verify and report

Run the project's formatter, static/type checks, tests, and build. Report whether JazzCash existed or was added from scratch; the guide/API/plugin version; enabled methods; implemented flows; callback and hash verification; idempotency; unknown-state recovery; reconciliation; certification status; and remaining merchant-portal configuration. Separate public research, merchant specifications, sandbox evidence, and live approval.
