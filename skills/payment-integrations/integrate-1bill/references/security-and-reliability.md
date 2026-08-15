# Security and reliability

## Contents

- Credentials and message integrity
- Replay/idempotency controls
- Logs, reconciliation, operations, and rollout

## Credentials and integrity

Use the precise authentication, encryption, certificate, signing, IP/network, and timestamp rules from the current certification specification. Store secrets and private keys in managed secret storage. Separate sandbox, certification, and production credentials. Never commit or log client secrets, signing material, certificates, full sensitive payloads, or personally identifying bill details.

Do not improvise cryptography. Verify canonicalization, encoding, algorithms, key rotation, certificate chains, clocks, and replay windows with official test vectors.

## Authorization and validation

Allow only approved source networks/clients where contracted, but do not use IP filtering as the sole authentication control. Validate content type, size, required identifiers, character sets, amount precision/range, timestamps, and enum values before database work. Rate-limit safely without blocking legitimate network retries.

## Idempotency and concurrency

Create database uniqueness constraints on the certified transaction identifier and public bill reference. Process payment posting in a transaction or use an equivalent atomic compare-and-set. Return the contractually correct duplicate response without repeating fulfillment. Use an outbox for downstream effects.

## Logging and support

Log normalized operation, environment, channel, internal bill ID, masked public reference, external correlation/transaction ID, result code, latency, and retry/status resolution. Redact credentials, signatures, personal data, and full payloads. Preserve an append-only financial audit trail with controlled operator access.

Recent community reports include both successful use and cases where funds were deducted but transaction records were difficult to locate. Treat these as anecdotal, not proof of platform behavior, but design support and reconciliation so every ambiguous payment can be traced by reference, channel, amount, time, and transaction ID.

## Reconciliation

Reconcile internal bills/payments against the contracted 1LINK or settlement source daily or at the required frequency. Detect missing, duplicated, amount-mismatched, reversed, and unknown transactions. Never auto-correct financial mismatches without an auditable rule and operator visibility.

## Production rollout

Require successful sandbox and certification results, approved production endpoints/credentials, synchronized clocks, monitoring, alerts, runbooks, escalation contacts, reconciliation dry runs, rollback/traffic-disable controls, and operator training. Start with controlled traffic if permitted. Do not run live financial tests without explicit authorization and an agreed recovery plan.
