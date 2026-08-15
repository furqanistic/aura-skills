# Security and operations

## Hashes and secrets

Store merchant IDs, passwords, integrity salts, API secrets, and certificates in managed secret storage or uncommitted server configuration. Separate sandbox and production values. Rotate exposed material with JazzCash support.

Implement the documented inclusion rules, lexical/declared field order, delimiters, empty-field treatment, character encoding, case normalization, amount/time formats, and hash algorithm. Validate against current merchant test vectors. Do not reuse Easypaisa or copied legacy JazzCash hash code merely because field names look familiar.

## Financial integrity

Add database uniqueness for merchant references and JazzCash transaction identifiers. Validate customer ownership, amount, currency, and allowed state transition. Use transactional compare-and-set for paid status and an outbox where appropriate. Make inventory, credits, access, email, and refund bookkeeping independently idempotent.

## Privacy and authorization

Minimize and mask phone, CNIC, card, and customer data. Never log secrets, full payment data, MPINs, OTPs, or unsafe callback bodies. Protect order status, refund, capture, reconciliation, and operator actions with server-side authorization and audit logs.

## Monitoring and reconciliation

Track initiation success, redirect conversion, gateway failures, hash failures, callback latency, duplicate events, unknown states, voucher expiry, reversals/refunds, settlements, and mismatches. Log safe correlation IDs and raw provider codes without sensitive values.

Reconcile internal records with contracted status APIs, merchant dashboard exports, and settlement/refund reports. Flag missing, duplicate, wrong-amount, reversed, unsettled, and unknown transactions for controlled review. A screenshot is not financial evidence.

## Go live

Require completed onboarding/KYC, merchant certification, live credentials and URLs, HTTPS, callback reachability, clock synchronization, secret management, monitoring, alerts, reconciliation dry run, rollback/disable controls, operator runbooks, and support contacts. Perform a controlled live transaction only with explicit approval and a recovery plan.
