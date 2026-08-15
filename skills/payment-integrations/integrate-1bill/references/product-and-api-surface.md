# Product and API surface

## Contents

- What 1BILL is
- Confirmed categories and public operations
- 1BILL versus other 1LINK products
- Role and documentation boundaries

## What 1BILL is

1LINK describes 1BILL as Pakistan's unified bill-payment collection service. Billing entities become available across participating members' alternative delivery channels and over-the-counter channels. A unique biller prefix is attached to a customer ID, consumer number, bill number, or similar reference so the payer does not need to locate every biller separately.

Publicly described categories are:

- invoice/voucher or fixed payments;
- top-up or variable/partial payments;
- credit-card bill payments;
- packages or bundles.

Treat category semantics as contractual. A fixed bill must not accept a payer-modified amount. A variable/top-up flow must validate allowed ranges and business rules from the current specification.

## Public API catalogue

The public 1LINK sandbox catalogue currently labels 1BILL product version `1.0.0` and lists:

- `POST /BillInquiry`;
- `POST /BillPayment`;
- `POST /voidbillpayment`;
- `POST /CheckPaymentStatus`;
- `POST /PaymentCompany/GetPaymentCompanies`;
- package operations including bundle detail, company list, and classifications.

These names confirm the operation surface only. Do not infer request schemas, headers, authentication, response codes, signatures, paths, or production behavior from the names. Detailed specifications require portal access and product-plan selection.

## Choose the correct product

- Choose 1BILL for biller-prefixed invoice, voucher, top-up, credit-card bill, or package collection through member channels.
- Evaluate 1GO/Raast P2M for merchant QR codes, Raast Alias, IBAN, or Request to Pay.
- Evaluate 1IBFT for interbank transfer use cases.
- Evaluate an approved internet payment gateway for debit/credit-card checkout.

Do not combine product APIs because their credentials, certification, liabilities, and message contracts can differ.

## Organization role

Confirm whether the organization is a bank/member, non-bank initiator, biller, government entity, or a customer integrating through an approved partner. The public portal says fintechs and businesses can register for sandbox access, but production collaboration and certification require coordination with 1LINK. Do not promise instant self-service production access, pricing, settlement terms, or eligibility.
