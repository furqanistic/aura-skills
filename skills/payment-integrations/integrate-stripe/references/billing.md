# Billing and subscriptions

## Contents

- Subscription architecture
- Checkout and Customer Portal
- Trials, plan changes, invoices, entitlements, and usage billing

Use Products and Prices as the billing catalog. Map application plans to trusted Price IDs. Store Customer and Subscription identifiers plus needed status, while treating Stripe billing lifecycle events as the external financial truth.

Keep the core object model clear: Product describes what is sold, Price defines the amount and recurrence, Subscription represents the recurring agreement, and Invoice represents each billing cycle.

Use Billing APIs with Checkout Sessions in subscription mode for most SaaS products. Do not build renewal loops with raw PaymentIntents. Use Customer Portal for payment methods, invoices, cancellation, and plan changes when its configuration meets the product.

## Define lifecycle policy

Document when access begins, whether trialing or incomplete states receive access, grace periods, cancellation timing, failed-renewal behavior, upgrades, downgrades, quantities, prorations, and reactivation. Do not grant durable access from a success page. Drive entitlements from verified subscription and invoice events and reconcile periodically.

Handle relevant Checkout completion, invoice paid/failed, and subscription creation/update/pause/resume/deletion events. Select exact current event names from official docs and subscribe only to handled events.

## Trials and changes

Keep trial duration and plan selection server-controlled. Decide whether payment details are required and how abuse is limited. Preview prorations when users need to understand immediate charges or credits.

## Usage billing

Verify Stripe's current recommended usage-billing product before implementation. Define event schema, stable idempotency IDs, aggregation, late events, corrections, pricing versions, customer visibility, and reconciliation. Generate billable usage from trusted server events and retain an auditable ledger; never bill from client-reported totals.
