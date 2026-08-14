# Stripe Connect

## Contents

- Business model and liability
- Accounts v2, onboarding, charge patterns, fees, and operations

Determine who owns the customer relationship, who is merchant of record, who bears losses/disputes, when funds move, whether payments have one or many sellers, and how the platform earns revenue. Do not choose configuration from UI preference alone.

Use current Accounts v2 controller properties/configurations for new work rather than legacy account-type shortcuts. Verify fields and regional availability against current official docs.

## Charge patterns

- Use direct charges when independent businesses own their customers and payment relationship.
- Use destination charges when the platform owns checkout and transfers funds to one account with the payment.
- Use separate charges and transfers for multi-seller payments or controlled transfer timing.

Do not use destination charges for hold-and-release. Do not use `application_fee_amount` with separate charges and transfers; retain the fee by transferring less. For direct/destination charges, use supported application fees only after confirming fee liability and economics.

## Accounts and onboarding

Request only needed configurations and capabilities. Transfer-only marketplace recipients should not be forced through merchant/card-payment requirements, while direct-payment merchants need appropriate merchant configuration. Prefer hosted or embedded onboarding and include account-status/notification UI for future requirements. Avoid custom API onboarding unless the business accepts its compliance burden.

## Security and operations

Never let clients choose arbitrary connected accounts, destinations, fees, or transfer amounts. Resolve ownership from authenticated internal records. Protect account sessions/onboarding links. Verify OAuth `state` where applicable. Store account IDs under uniqueness and ownership constraints.

Decide whether Customers and Subscriptions live on platform or connected accounts. Avoid mixing objects without explicit account context. Handle platform and connected-account webhooks as required, recording account context. Monitor capability and requirement changes.

Test restricted accounts, onboarding refresh/return, payout failures, refunds, disputes, reversals, negative balances, disconnection, and fee reconciliation.
