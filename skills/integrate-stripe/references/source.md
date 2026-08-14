# Source and retained coverage

This skill expands on W. Shawn Hobson's `stripe-integration` skill from the
[`wshobson/agents`](https://github.com/wshobson/agents/blob/main/plugins/payment-processing/skills/stripe-integration/SKILL.md)
repository.

The expanded skill retains its coverage of:

- one-time and recurring payments;
- hosted, embedded, and custom Checkout;
- Payment Element, Express Checkout Element, PaymentIntents, and SetupIntents;
- subscription Products, Prices, Subscriptions, and Invoices;
- verified payment, subscription, invoice, and refund webhooks;
- customer records, multiple payment methods, metadata, and billing details;
- refunds, disputes, Strong Customer Authentication, Connect marketplaces;
- test mode, successful payments, declines, 3DS authentication, and insufficient funds.

It adds server-authoritative pricing, restricted keys, idempotency, event ordering,
reconciliation, Accounts v2 guidance, liability decisions, tax, usage billing,
observability, migration safety, and production rollout checks.
