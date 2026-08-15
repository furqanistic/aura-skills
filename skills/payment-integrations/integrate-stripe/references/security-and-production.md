# Security and production readiness

## Contents

- Keys, PCI, integrity, privacy, observability, migration, and go-live

Prefer a separate restricted API key with minimum permissions per backend service. Store keys in managed secrets or uncommitted environment configuration, separate environments, and use IP restrictions when practical. Never expose `sk_`, `rk_`, or `whsec_` values in source, clients, logs, screenshots, support tickets, analytics, or errors. Rotate exposed keys immediately and review request logs.

Use Checkout or Elements so card data goes directly to Stripe. Do not proxy raw card data. Authenticate and authorize every endpoint that creates a Checkout/Portal session, refund, subscription change, transfer, or account link. Rate-limit sensitive endpoints.

## Financial integrity

- Use integer minor units or proper decimal types, not floating point.
- Store currency with amounts and respect zero-decimal currencies.
- Resolve prices, plans, fees, destinations, discounts, and quantities server-side.
- Use stable idempotency keys for retried creates and financial mutations.
- Enforce unique Stripe object and internal operation IDs.
- Keep an audit trail for refunds, credits, transfers, and entitlements.

Use Stripe's current fraud tooling and business-specific controls. Minimize personal data in metadata. Restrict Dashboard/internal-tool access and require strong 2FA. Show safe customer errors without exposing raw Stripe objects or stack details.

Track checkout conversion, attempts, webhook latency/failure, duplicate events, invoice failures, refunds, disputes, transfer failures, and reconciliation mismatches. Correlate request/object IDs with internal records. Reconcile orders, payments, subscriptions, invoices, refunds, transfers, and entitlements on a schedule.

## Migration and go-live

Inventory SDK/API/webhook versions, deprecated objects, stored IDs, and Dashboard settings. Upgrade in sandbox with compatibility tests, monitoring, and rollback. Before launch confirm live restricted keys, webhook secrets/URLs/events, Products/Prices, tax and portal settings, payment methods, branding, receipts, statement descriptors, alerts, replay tooling, refund/cancellation/dispute procedures, legal pages, and merchant-of-record responsibilities. Run a low-value live test only with explicit approval.
