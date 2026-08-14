---
name: audit-backend-security
description: Backend security review and hardening for authentication, authorization, tokens, sessions, secrets, validation, injection, payments, uploads, webhooks, data exposure, rate limits, and deployment configuration. Use when asked to audit, security-review, harden, threat-check, or inspect backend code for vulnerabilities across Express, NestJS, Django, Rails, Go, and other stacks.
---

# Backend Security Review

Inspect the actual stack and trust boundaries before judging security. Map entry points, authentication, authorization, sensitive data, databases, uploads, payments, third-party integrations, background jobs, administrative paths, and deployment configuration. Treat client-controlled values and public endpoints as hostile.

## Workflow

1. Identify assets, actors, entry points, trust boundaries, and privilege transitions.
2. Trace sensitive operations from request or event source through validation, authorization, business logic, data access, and response or side effect.
3. Check secrets, authentication, token or session lifecycle, object-level and function-level authorization, validation, injection, error handling, logging, rate limiting, uploads, webhooks, payments, jobs, CORS, headers, and response filtering.
4. Validate candidate findings against reachable code and existing controls. Do not report theoretical issues as confirmed vulnerabilities.
5. Rank findings by exploitability and impact. Include the affected path, attack scenario, evidence, and smallest safe remediation.
6. Implement fixes only when the user asks for changes, then run focused tests and relevant project checks.

## Guardrails

- Never expose secrets, tokens, passwords, sensitive configuration, or private user fields.
- Never trust identity, role, price, credits, ownership, or permissions supplied by the client.
- Verify webhook signatures against the exact raw payload when required and make handlers idempotent.
- Enforce authorization at the server operation and object level, not only in the UI or route grouping.
- Bound expensive operations and uploads; validate type, size, storage path, and processing behavior.
- Keep production errors and logs free of credentials, tokens, personal data, and internal stack details.
- Obtain explicit confirmation before destructive actions or live production changes.

## Detailed guidance

Read [references/security-guide.md](references/security-guide.md) for the complete folder-by-folder checklist and specialized guidance on auth, tokens, cookies, payments, credits, uploads, integrations, jobs, logging, CORS, databases, abuse protection, and reporting. Search by heading and load only relevant sections.

## Output

Lead with validated findings ordered by severity. For each finding include affected code, exploit path, impact, existing mitigating controls, remediation, and a verification test. Explicitly say when no actionable finding is supported by the evidence.
