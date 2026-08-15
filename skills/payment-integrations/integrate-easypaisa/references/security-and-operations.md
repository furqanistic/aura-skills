# Security and operations

## Contents

- Secrets and signing
- Idempotency, privacy, monitoring, reconciliation, and launch

## Secrets and signing

Store merchant/store credentials, hash/signing keys, certificates, and API secrets in managed secret storage or uncommitted server environment configuration. Separate staging and production. Rotate exposed values with Easypaisa support and audit affected transactions.

Implement the precise documented field inclusion, ordering, separators, empty-field handling, encoding, case normalization, amount/time formats, and algorithm. Validate against merchant-provided examples. Do not reuse JazzCash, Stripe, or old Easypay signing code because fields look similar.

## Idempotency and financial integrity

Enforce database uniqueness on merchant order/reference and gateway transaction identifiers. Verify the callback order belongs to the expected customer and amount. Use transactional compare-and-set for paid transitions and an outbox for fulfillment. Make emails, credits, inventory, and access grants independently idempotent.

## Privacy and authorization

Minimize phone numbers and personal data. Mask them in logs and operator UI. Protect status, reversal/refund, and merchant tools with server authorization. Never expose full callback payloads, credentials, or internal errors to customers.

## Monitoring and support

Track initiation success, redirects, payment conversion, gateway failures, callback verification failures, callback latency, unknown states, duplicates, reversals, settlements, and reconciliation mismatches. Log safe correlation fields: internal order, masked customer/reference, external transaction, mode, result code, timestamps, and latency.

Recent Pakistani developer discussions emphasize onboarding friction and difficulty locating current documentation. Treat community reports as anecdotal, but maintain runbooks and merchant-support contacts for unknown transactions, missing callbacks, settlement issues, and credential rotation.

## Reconciliation

Use merchant-portal transaction history, settlement reports, and reversal reports or contracted APIs/files. Compare internal orders to provider records at least at the business-required frequency. Surface missing, duplicate, wrong-amount, reversed, unsettled, and unknown payments for controlled review. Never use screenshots as reconciliation evidence.

## Go live

Require KYC/onboarding completion, approved integration/certification, live credentials and URLs, HTTPS, secret storage, callback reachability, firewall/CDN exclusions where necessary, clock synchronization, monitoring, alerts, reconciliation dry run, rollback/disable control, operator training, and support contacts. Perform a controlled live transaction only with explicit approval and a recovery plan.
