# Implementation patterns

## Contents

- Checkout, PaymentIntent, webhook, portal, refund, and testing patterns

Adapt examples to the installed SDK and verify fields against current official docs. Load credentials securely; never put real keys in committed code.

## Hosted Checkout

Authenticate the user, resolve a server-owned product/plan, create a pending order, then create a Checkout Session from trusted values:

```python
session = stripe.checkout.Session.create(
    mode="payment",
    line_items=[{"price": trusted_price_id, "quantity": trusted_quantity}],
    success_url=f"{app_url}/checkout/complete?session_id={{CHECKOUT_SESSION_ID}}",
    cancel_url=f"{app_url}/checkout/cancelled",
    metadata={"order_id": order.id},
    idempotency_key=f"checkout:{order.id}",
)
```

Exact idempotency-option syntax varies by SDK. Do not accept price, quantity, amount, currency, or operation key directly from the browser.

## Payment Element or PaymentIntent

For embedded UI, prefer a custom-mode Checkout Session. The server returns its client secret; the browser initializes Stripe with a publishable key, mounts Payment Element, and uses the current confirmation action. Fulfillment remains webhook-driven.

When raw PaymentIntents are justified:

```python
intent = stripe.PaymentIntent.create(
    amount=trusted_amount,
    currency=trusted_currency,
    customer=verified_customer_id,
    metadata={"order_id": order.id},
    idempotency_key=f"payment:{order.id}",
)
```

Omit `payment_method_types` on current online integrations. Verify ownership before exposing a client secret.

## Webhook

```text
raw_body = request.raw_bytes
event = stripe.verify_webhook(raw_body, Stripe-Signature, webhook_secret)

transaction:
  inserted = processed_events.insert_unique(event.id, status="processing")
  if not inserted: return 200
  route_to_idempotent_handler(event)
  processed_events.mark_complete(event.id)

return 200
```

Do not parse JSON first or manually verify a simplified HMAC.

## Subscription and portal

Create Checkout Sessions with subscription mode and a trusted recurring Price ID. Grant access from verified lifecycle events. Create a short-lived portal session only after confirming the authenticated user owns the Customer:

```python
portal = stripe.billing_portal.Session.create(
    customer=verified_customer_id,
    return_url=f"{app_url}/account/billing",
)
```

## Refund

Authorize the action, load the trusted original payment, validate refundable amount, create the refund with a stable idempotency key, record it as pending, and finalize through verified events and reconciliation.

## Testing

Use official test PaymentMethods/cards for success, declines, insufficient funds, and authentication. Prefer identifiers such as `pm_card_visa` in server tests where supported. Use Stripe CLI forwarding/replay for signature, duplicate-delivery, and recovery tests.
