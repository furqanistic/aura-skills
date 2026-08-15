# Integration workflow

## Contents

- Existing integration audit
- Order state and payment initiation
- Return, callback, verification, OTC, plugins, and tests

## Audit first

Identify current dependencies/plugin versions, merchant integration guide, gateway environment, credentials, payment modes, request builder, signing/canonicalization, return/callback routes, status verification, order/payment schema, reversal/refund behavior, settlement reports, and tests. Compare the implementation to the latest pack supplied for that merchant. Old public tutorials may describe retired fields or URLs.

## Order model

Persist a pending order before contacting the gateway. Store a unique merchant reference, authenticated customer, trusted amount/currency, selected enabled mode, creation/expiry, gateway transaction/reference IDs, raw provider status code, normalized internal status, attempts, callback receipt, verification result, reversal/refund state, and settlement/reconciliation state.

Use an explicit state machine such as pending, awaiting-customer, processing/unknown, paid, failed, canceled, expired, reversed/refunded, and reconciliation-required as supported. Prevent invalid backwards transitions.

## Initiation

Build requests on the server from allowlisted products and server-calculated totals. Format timestamps, amounts, phone/account values, URLs, and optional fields exactly as documented. Generate the integrity value only after finalizing all signed fields. Never let the frontend submit a merchant/store ID, signing value, success status, or arbitrary return URL.

For hosted checkout, redirect or POST using the documented method and allowlisted Easypaisa domain. For direct/mobile-account flows, follow the approved customer-consent and authentication process; never collect a wallet PIN or OTP on merchant infrastructure.

## Return and server notification

The browser return may display an order-status page but must not fulfill. Locate the internal order from a validated reference, show a safe pending/result view, and let the backend obtain truth from an authenticated callback/postback or approved status check.

For callbacks, preserve the raw fields required by the contract, verify source/authentication/integrity before mutation, validate amount/reference ownership, atomically claim the external transaction/event, apply the allowed state transition, append an audit event, and enqueue fulfillment with an outbox where useful. Acknowledge using the exact contracted response.

## Unknown outcomes

If initiation, callback, or status lookup times out, store an ambiguous/processing state. Query the approved status source or merchant portal and reconcile later. Do not initiate a second charge because a response was lost.

## OTC

When OTC is enabled, model token/reference generation, expiry, customer instructions, delayed cash payment, and settlement separately from instant wallet payment. Do not grant access merely because an OTC token was created.

## Plugins

Official public material lists WooCommerce/WordPress, OpenCart, Magento, and PrestaShop plugins. Before using one, verify publisher, current version, platform compatibility, maintenance, signing implementation, callback route behavior, secret storage, order-state mapping, and security advisories. A plugin does not remove the need for merchant onboarding, staging tests, or reconciliation.

## Testing

Cover valid payment, invalid signature, wrong amount/order/customer, duplicate callback, concurrent callback, delayed/missing callback, customer cancellation, authentication failure, gateway decline, timeout/lost response, status recovery, expired order/token, reversal/refund where supported, settlement mismatch, and cross-user access. Use approved staging data only and retain certification evidence.
