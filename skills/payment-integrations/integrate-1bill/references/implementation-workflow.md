# Implementation workflow

## Contents

- Existing-integration audit
- Bill/reference model
- Inquiry, payment, status, and void flows
- Customer experience
- Testing and certification

## Audit first

Record the installed implementation's product, catalogue/API version, role, base URLs, auth/signing method, bill categories, transaction identifiers, timeout rules, error map, settlement format, and certification status. Compare code to the merchant's current private pack. Preserve certified behavior unless a versioned change is planned and recertified.

## Data model

Model at least:

- internal bill/invoice ID;
- public reference such as PSID or prefixed consumer number;
- category and biller/prefix configuration;
- amount, currency (normally PKR when contracted), expiry, and amount mutability;
- pending, paid, expired, voided/reversed, and ambiguous states as required;
- initiating channel and external transaction/correlation identifiers;
- raw status codes mapped to internal normalized outcomes;
- inquiry, payment, status-check, reversal, and settlement timestamps;
- immutable audit records and reconciliation status.

Use the exact reference length, check digit, prefix construction, character set, and uniqueness rules supplied for the biller. Public examples often show 14-digit PSIDs, but do not assume that all 1BILL billers use one universal format.

## Inquiry

Validate the incoming message according to the certified contract. Locate one eligible bill using an indexed unique reference. Return only allowed payer-facing data. Enforce expiry and already-paid rules. Do not mutate financial state during inquiry. Keep latency predictable and avoid calling slow dependencies synchronously unless the design has bounded timeouts and failure behavior.

## Payment

Verify authentication/integrity first. Resolve the exact bill and validate amount/category rules. Atomically claim the external transaction ID, reject or safely acknowledge duplicates according to the contract, post payment once, append an audit event, and return the certified response.

If downstream fulfillment is slow, commit the financial state and use an outbox/queue. Do not make a successful bill-payment response depend on email, entitlement delivery, or unrelated integrations.

## Unknown outcomes and status inquiry

Network timeout does not mean failure. Record the attempt as ambiguous and use the official status-inquiry operation or reconciliation source before retrying. Map provider codes conservatively. Never create a second payment because the first response was lost.

## Void or reversal

Implement only when the signed product plan and certification pack allow it. Authorize by original transaction identifiers, enforce the permitted time/state rules, make it idempotent, append an audit record, and reconcile the result. Do not treat a business refund as identical to a network void unless the contract says so.

## Customer experience

Show the correct category and full reference with grouping/copy controls, amount, expiry, and concise steps for supported bank/wallet/ATM/OTC channels. Never shorten or silently transform the reference. Explain that channel menus can label 1BILL differently and that support needs the transaction/reference identifiers, not only a screenshot.

## Testing and certification

Cover valid and invalid inquiry, fixed/variable amounts, expired/already-paid bills, duplicate transactions, concurrent payment, malformed/auth failures, latency/timeouts, lost responses, status recovery, reversal, settlement mismatch, and channel-specific certification cases. Use only sandbox data. Complete formal certification and retain the approved test evidence before production cutover.
