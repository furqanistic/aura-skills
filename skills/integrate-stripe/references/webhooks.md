# Webhooks

## Contents

- Signature verification
- Idempotency and ordering
- Routing, retries, replay, and monitoring

Read the exact raw request bytes before JSON parsing. Verify `Stripe-Signature` with the endpoint's `whsec_` secret and official SDK. Use separate secrets per endpoint/environment. IP allowlisting is optional defense in depth, not a replacement for signatures. Never invent a custom signature algorithm or use the account key as the webhook secret.

## Idempotent processing

1. Verify the signature.
2. Atomically insert or claim the event ID under a unique constraint.
3. Route the event to one idempotent business handler.
4. Apply internal mutations transactionally where possible.
5. Mark processing complete.
6. Acknowledge only when safely recorded or processed.

For slow work, persist the verified event and enqueue it, then respond quickly. Make the worker idempotent too. Avoid a non-atomic “check then insert” race.

Events can arrive out of order. Retrieve current Stripe state for important transitions or prevent older events from overwriting newer state. Pin and test webhook API-version changes where supported.

Subscribe only to events the application handles, such as relevant Checkout completion/asynchronous outcomes, PaymentIntent lifecycle, invoice outcomes, subscription changes, refunds, disputes, and connected-account requirements. Do not fulfill from multiple overlapping events.

The upstream baseline highlights payment success/failure, subscription update/deletion, refund, and successful subscription-invoice events. Preserve those lifecycle responsibilities, but confirm current event names and choose the event that matches the selected Stripe integration and pinned API version.

Log event ID, type, object ID, internal ID, outcome, and duration without dumping payloads. Alert on sustained failures, signature failures, queue age, and unprocessed events. Provide safe replay and scheduled reconciliation. Test duplicate, delayed, out-of-order, malformed, and replayed events.
