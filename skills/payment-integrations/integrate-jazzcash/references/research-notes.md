# Research notes

Research checked on 2026-08-15.

## Official sources

- [JazzCash sandbox documentation v4.2](https://sandbox.jazzcash.com.pk/SandboxDocumentation/v4.2/index.html) describes merchant self-registration, credentials, testing, go-live guidance, HTTP POST page redirection, and API testing.
- [JazzCash payment features](https://sandbox.jazzcash.com.pk/SandboxDocumentation/v4.2/features.html) describes Mobile Wallet, voucher, debit/credit card, direct pay, authorize/capture, hosted, and redirection capabilities. Confirm merchant eligibility and enabled modes.
- [JazzCash resources](https://sandbox.jazzcash.com.pk/SandboxDocumentation/v4.2/Resources.html) publishes response-code mapping and tokenization simulation material.
- [JazzCash version reference](https://sandbox.jazzcash.com.pk/SandboxDocumentation/ReferenceVersion.html) recommends the current integration version where possible.
- [JazzCash corporate onboarding](https://corporateonboarding.jazzcash.com.pk/online-payment) provides the online merchant onboarding flow.
- [JazzCash merchant dashboard](https://sandbox.jazzcash.com.pk/MerchantDashboard) advertises monitoring, transaction reports, refunds, plugins, hosted checkout, SDKs, APIs, PCI controls, TLS, and fraud rules.

## Community evidence

- A July 2026 [PakFreelancers discussion](https://www.reddit.com/r/PakFreelancers/comments/1ukdv8v/anyone_worked_with_jazzcash_api/) claims public API 1.1 examples no longer matched requirements encountered by a developer. Treat this as anecdotal evidence to verify the merchant-specific version, not as an API contract.
- A September 2025 [developersPak discussion](https://www.reddit.com/r/developersPak/comments/1nts9w2/payment_gateways_in_pakistan/) describes merchant registration and client-provided credentials as practical prerequisites.
- A May 2025 [PakistaniDevs discussion](https://www.reddit.com/r/PakistaniDevs/comments/1kkub13) immediately asks whether the developer has obtained a merchant account.

## Recheck before implementation

Confirm the latest merchant guide/API/plugin version, integration mode, enabled methods, URLs, credential types, hash fields/order/algorithm, amount and timestamp formats, return/callback authentication, status/capture/refund/reversal operations, response codes, test cases, fees, limits, settlement, certification, and production approval. If the merchant's current approved material conflicts with this skill, follow that material and update the skill afterward.
