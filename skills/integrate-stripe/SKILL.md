---
name: integrate-stripe
description: Design, implement, review, and troubleshoot secure Stripe integrations for one-time payments, Checkout, Payment Element, subscriptions, invoices, saved payment methods, refunds, disputes, webhooks, customer management, Stripe Tax, and Connect platforms or marketplaces. Use when adding Stripe to a web or mobile backend, building SaaS billing, accepting payments, creating connected accounts, or preparing an existing Stripe integration for production.
---

# Integrate Stripe

Build Stripe integrations that match the existing application, business model, currency, countries, and ownership of payments. Always inspect the project before planning or writing Stripe code.

## First: detect the existing integration

Search the repository for Stripe packages, imports, configuration, environment-variable names, API clients, Checkout or PaymentIntent creation, webhook routes, database fields, migrations, tests, and frontend Stripe.js usage. Inspect package manifests and lockfiles to determine the installed Stripe SDK version. Identify any pinned account, request, or webhook API version without exposing secret values.

- If Stripe already exists, trace the complete payment flow and preserve compatible architecture. Find incomplete, outdated, insecure, or broken behavior and make the smallest safe fixes. Do not create a second Stripe client, webhook endpoint, Customer model, or payment flow without a clear reason.
- If Stripe does not exist, design the integration from scratch using the project's existing language, framework, database, validation, error handling, logging, and testing patterns.
- If the SDK or API version is old, check the official changelog and migration guide first. Upgrade deliberately with tests; never change a Stripe version silently during unrelated work.

Because Stripe changes over time, verify API choices against current official Stripe documentation before writing code. Prefer the latest supported SDK and API version unless the project is intentionally pinned; plan and test upgrades instead of silently changing versions.

## Workflow

1. Report whether an existing Stripe integration was found and list its relevant SDK/API versions and implemented flows.
2. Define whether the product needs one-time purchases, subscriptions, usage billing, invoices, saved methods, marketplace payments, or a combination.
3. Establish who is merchant of record, who owns the customer relationship, where funds settle, who handles disputes, and whether a platform fee applies.
4. Choose the simplest suitable surface: Payment Links for no-code sales, Checkout Sessions for most integrations, Checkout Sessions with Payment Element for embedded UI, or PaymentIntents only for bespoke payment-state control.
5. Make the server authoritative for products, Price IDs, amounts, currency, discounts, tax behavior, identity, entitlements, destinations, and fees. Never trust these values from the client.
6. Persist an internal pending order or subscription before redirecting to payment. Link Stripe objects with non-sensitive metadata.
7. Treat verified webhooks as the source of truth. Make fulfillment and state changes idempotent and safe for retries or out-of-order events.
8. Implement failure, cancellation, retry, refund, dispute, and reconciliation paths—not only success.
9. Test in a sandbox, exercise authentication and failure cases, replay webhooks, and complete a go-live review.

## Non-negotiable rules

- Never expose secret, restricted, or webhook keys in source, clients, logs, errors, or examples. Prefer least-privilege restricted keys per service.
- Never handle raw card numbers server-side unless the business has completed the required PCI process. Use Checkout or Stripe.js Elements.
- Never fulfill from a success redirect or client-reported status.
- Verify webhook signatures against the unmodified raw request body.
- Deduplicate event IDs with a unique constraint and make mutations transactional where possible.
- Use stable idempotency keys for retried financial POST operations.
- Do not use legacy Charges, Sources, Tokens, Plans, or Card Element for new work.
- Omit `payment_method_types` for dynamic payment methods except where current official Terminal guidance explicitly requires it.
- Never perform live charges, refunds, transfers, or account changes without explicit approval.

## Reference routing

- Read [references/payments.md](references/payments.md) for Checkout, Payment Element, PaymentIntents, SetupIntents, customers, refunds, disputes, SCA, and testing.
- Read [references/billing.md](references/billing.md) for subscriptions, invoices, trials, proration, customer portal, usage billing, and entitlements.
- Read [references/webhooks.md](references/webhooks.md) before implementing or reviewing a webhook endpoint.
- Read [references/connect.md](references/connect.md) for platforms, marketplaces, connected accounts, onboarding, fees, charge patterns, and liability.
- Read [references/security-and-production.md](references/security-and-production.md) for keys, PCI scope, financial integrity, observability, reconciliation, migrations, and go-live.
- Read [references/implementation-patterns.md](references/implementation-patterns.md) for adaptable implementation examples.
- Read [references/source.md](references/source.md) for the upstream skill credited as the foundation of this expanded skill.

## Verification and output

Run relevant formatting, linting, type checking, and tests. State whether Stripe was repaired or added from scratch, which versions were inspected or changed, which Stripe objects and webhook events were chosen, how internal state maps to Stripe, how duplicates are prevented, and which Dashboard setup remains. Separate sandbox validation from live verification.
