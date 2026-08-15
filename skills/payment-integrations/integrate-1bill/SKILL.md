---
name: integrate-1bill
description: Design, implement, review, and troubleshoot Pakistan 1LINK 1BILL integrations for bill inquiry, bill payment, fixed invoice or voucher collections, variable or top-up payments, credit-card bill payments, packages, payment-status inquiry, voids, PSID or consumer-number flows, reconciliation, and certification. Use when a bank, fintech, government entity, educational institution, utility, biller, or Pakistani business needs to add or repair a 1BILL collection workflow.
---

# Integrate 1BILL

Build reliable 1LINK 1BILL integrations without confusing 1BILL with 1GO/Raast P2M, 1IBFT, a card gateway, or an unrelated product named OneBill.

## First: inspect and classify

Always inspect the repository before planning or writing code. Search for 1LINK or 1BILL SDKs, clients, URLs, credentials, biller prefixes, PSID or consumer-number generation, inquiry/payment/void/status handlers, schemas, database records, message signatures, settlement files, reconciliation jobs, tests, and certification artifacts.

- If an integration exists, identify its exact 1LINK product, API/catalogue version, organization role, environment, endpoints, authentication/signing scheme, and implemented flows. Repair the current design with minimal disruption.
- If no integration exists, design it using the project's language, framework, data model, security, logging, job, and testing conventions.
- Never invent request fields, response codes, signatures, encryption, URLs, credentials, prefix rules, PSID length, or timeout behavior. Obtain them from the merchant's current 1LINK sandbox/certification documentation.

Determine the integration role before choosing a flow:

1. 1LINK member bank or non-bank initiator consuming 1BILL APIs;
2. billing entity exposing or connecting billing data for collection;
3. government or institutional collection through an approved partner;
4. merchant actually seeking 1GO/Raast P2M or card checkout rather than 1BILL.

## Confirm the product

1BILL is a unified bill-payment rail. It supports fixed invoice/voucher payments, variable/top-up payments, credit-card bill payments, and package/bundle flows. Customers normally enter a biller-prefixed consumer, bill, or PSID reference in a participating bank, wallet, ATM, or over-the-counter channel; the channel fetches bill details and submits payment.

Do not present 1BILL as an embedded card form, subscription engine, wallet push API, or instant Stripe replacement. If the requirement is QR, alias, IBAN, or Request to Pay merchant acceptance, evaluate 1GO/Raast P2M instead. If it is card checkout, evaluate an approved payment gateway.

## Workflow

1. Obtain the latest 1LINK developer-portal product selection, private API specification/OpenAPI file, onboarding pack, credentials, rate limits, test data, certification cases, and production cutover instructions.
2. Record the exact catalogue/API version and compare it with any existing implementation before changing code.
3. Define bill category, biller prefix/reference rules, amount rules, expiry, duplicate-payment policy, payer-visible fields, and internal invoice lifecycle.
4. Model inquiry, payment, void/reversal where contracted, payment-status inquiry, reconciliation, and exception handling as separate idempotent operations.
5. Keep the server authoritative for bill references, amounts, expiry, paid status, and settlement. Never trust a client screenshot or client-reported result.
6. Store correlation identifiers needed to trace the application record, 1LINK request, channel transaction, status inquiry, settlement, and support case.
7. Protect credentials and message integrity exactly as specified in the current certification pack. Reject invalid, replayed, unauthorized, or malformed requests safely.
8. Test duplicate, delayed, missing, reversed, timed-out, and ambiguous transactions—not only successful payment.
9. Complete 1LINK sandbox testing and formal certification before production. Change only approved environment configuration during cutover.

## Reliability rules

- Treat timeouts and transport failures as unknown outcomes until status inquiry or reconciliation proves the result; never retry payment blindly.
- Make bill inquiry read-only and payment posting idempotent under the contracted unique transaction identifiers.
- Enforce unique constraints for external transaction IDs and internal bill/payment references.
- Use transactional state changes and an append-only audit trail for financial events.
- Do not mark a bill paid only from the user's return screen, screenshot, SMS, or frontend request.
- Reconcile transaction records with 1LINK/settlement reports and surface mismatches to operators.
- Keep human-readable support data such as channel, reference, amount, date/time, and trace/transaction identifiers without logging secrets or full sensitive payloads.

## Reference routing

- Read [references/product-and-api-surface.md](references/product-and-api-surface.md) to choose the correct 1LINK product and understand publicly confirmed 1BILL operations.
- Read [references/implementation-workflow.md](references/implementation-workflow.md) for state modeling, inquiry/payment/status/void flows, PSID/reference UX, and certification.
- Read [references/security-and-reliability.md](references/security-and-reliability.md) before implementing authentication, financial state, retries, logging, reconciliation, or production rollout.
- Read [references/research-notes.md](references/research-notes.md) for dated official sources, public-doc limitations, recent community reports, and what must be re-verified.

## Verification and output

Run relevant formatting, linting, type checking, and tests. Report whether 1BILL was found or added from scratch, the role and product selected, versions and private specifications inspected, implemented operations, idempotency strategy, reconciliation plan, certification status, and remaining 1LINK or partner configuration. Clearly label assumptions and never describe sandbox success as production approval.
