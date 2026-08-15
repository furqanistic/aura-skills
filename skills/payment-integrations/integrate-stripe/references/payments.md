# Payments

## Contents

- Integration choice
- One-time payments and pricing
- Payment Element and PaymentIntents
- Saved methods, customers, refunds, disputes, SCA, and tests

## Choose the surface

Use Payment Links for simple no-code sales, hosted or embedded Checkout Sessions for most payments and subscriptions, Checkout Sessions with `ui_mode: custom` plus Payment Element for branded embedded UI, PaymentIntents for justified bespoke state control or off-session charges, and SetupIntents to save a method without charging.

Checkout Sessions can support Stripe-hosted checkout, embedded checkout, and custom UI with Payment Element or Express Checkout Element. Prefer them when built-in line items, discounts, tax, shipping, address collection, saved payment methods, and checkout lifecycle handling reduce custom code.

Do not start new integrations with Charges, Sources, Tokens, Card Element, or Plans. Do not hardcode `payment_method_types: ['card']`; manage eligible methods in Stripe and allow dynamic methods. Verify current Terminal exceptions in official docs.

## Authoritative payments

- Resolve trusted Product or Price IDs on the server.
- Calculate quantity, discounts, shipping, fees, tax behavior, amount, and currency on the server.
- Create an internal pending order before its Stripe object.
- Put only non-sensitive internal identifiers in metadata.
- Use HTTPS return URLs, but treat the return page as informational until backend confirmation.
- Fulfill once from a verified webhook and record Stripe IDs for reconciliation.

Use Stripe Tax where appropriate, but do not guess tax registrations or provide legal conclusions. `automatic_tax` and explicit tax rates can conflict; verify the migration path for existing billing objects.

## Payment Element and PaymentIntents

Prefer Payment Element backed by Checkout Sessions where supported. For raw PaymentIntents, create and update them on the server, expose only the client secret to the authenticated order owner, reuse an existing intent after cart changes, and confirm status through webhooks. Use Confirmation Tokens when current guidance requires server-side finalization from collected payment details.

## Saving and charging later

Use SetupIntents to save payment methods. Record consent and terms for future/off-session use. Associate methods with the verified Stripe Customer. If an off-session charge requires authentication, bring the customer back on-session.

Never accept a Customer or PaymentMethod ID without verifying ownership against the authenticated internal account.

## Customers

Store Customer IDs under uniqueness constraints and reuse them for persistent users. Use the Customer Portal for self-service billing when possible. Never expose one customer's Stripe resources to another or store sensitive data in metadata.

Support multiple payment methods and billing-detail updates only through authenticated ownership checks. Keep customer metadata minimal and use it for stable, non-sensitive internal references rather than business secrets.

## Refunds and disputes

Authorize refund endpoints, load the trusted original order, validate the refundable balance, use an idempotency key, and record a pending refund. Finalize state through refund events and reconciliation. Handle disputes as a lifecycle with evidence, operator notifications, and appropriate fulfillment controls.

## SCA and asynchronous methods

Let Checkout or Stripe.js handle Strong Customer Authentication. Model processing, requires-action, succeeded, failed, canceled, refunded, and disputed states as needed. Do not assume every method settles immediately.

## Testing

Use Stripe sandbox/test keys and official test PaymentMethods or cards. Cover success, decline, insufficient funds, authentication required/failure, delayed success/failure, duplicate submit, retry, abandoned checkout, partial/full refund, dispute, and cross-user access. Use Stripe CLI forwarding and replay; never use real card data in tests.
