# Integration workflow

## Audit and select a mode

Identify the existing guide or plugin version, request builder, secure-hash code, gateway URLs, credentials, return/callback endpoints, status/refund behavior, database model, reports, and tests. Compare these with the current merchant pack before changing code.

Choose only an approved mode. Public v4.2 material describes HTTP POST page redirection and API testing, while feature pages describe hosted/redirection, Mobile Wallet, voucher, and card capabilities. Availability is contractual, not implied by public documentation.

## Order model

Persist an order before gateway initiation. Store a unique merchant reference, authenticated customer, trusted amount/currency, method, expiry, JazzCash transaction/reference IDs, raw and normalized statuses, request attempt, callback receipt, verification result, reversal/refund state, and settlement state.

Use explicit states such as pending, awaiting-customer, processing/unknown, paid, failed, canceled, expired, reversed/refunded, and reconciliation-required where supported. Allow only valid forward transitions.

## Request and customer flow

Generate requests entirely on the server. Format transaction references, timestamps, expiry, amounts, URLs, and optional fields exactly as documented. Finalize the signed field set before calculating the integrity value. Never allow the client to supply authoritative amount, merchant ID, password, hash, success result, or arbitrary return URL.

For redirection or hosted checkout, submit only to an allowlisted JazzCash domain. For Mobile Wallet, do not collect the customer's MPIN or OTP. For vouchers, persist the voucher/reference and expiry; issuance is not payment. For card modes, use the approved hosted or PCI-compliant approach and never downgrade 3DS or fraud controls.

## Return, callback, and status

Use the return route to show a safe order-status page. Do not fulfill there. For any server notification, preserve required raw values, verify integrity before mutation, match the internal order and amount, atomically claim the external transaction/event, apply one allowed state transition, append an audit record, and enqueue idempotent fulfillment.

If a request or callback times out, keep the order processing/unknown. Use the contracted status API, merchant dashboard, or reconciliation report. Do not repeat initiation merely because the response was lost.

## Plugins and SDKs

Before adopting a plugin or SDK, verify its publisher, release/version, supported commerce platform, current endpoints and hash behavior, secret storage, callback authorization, order mapping, maintenance, and security advisories. Test its failure and duplicate-notification handling rather than assuming the package is correct.

## Tests

Cover success for every enabled method, invalid or missing hash, wrong amount/reference/customer, duplicate and concurrent callbacks, delayed/missing callback, cancellation, decline, expiry, timeout/lost response, status recovery, voucher created but unpaid, 3DS outcomes where relevant, refund/reversal where supported, settlement mismatch, and cross-user access. Use only approved sandbox data.
