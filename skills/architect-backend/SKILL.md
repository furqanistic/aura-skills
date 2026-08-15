---
name: architect-backend
description: Design, review, organize, and evolve scalable, secure, maintainable backend systems across any language, framework, runtime, database, API style, deployment model, or architecture. Detects whether a backend already exists and produces a safe improvement path before changing it; otherwise designs a new backend from scratch. Use when planning backend architecture, reviewing an existing system, reorganizing files, modernizing modules, selecting boundaries, or implementing production-grade backend features.
---

# Backend Architecture

Work with any backend ecosystem, including JavaScript/TypeScript, Python, Go, Java/Kotlin, C#/.NET, PHP, Ruby, Rust, Elixir, C/C++, Swift server frameworks, serverless functions, and other stacks. Do not default to Node.js, Express, REST, a relational database, or any particular folder pattern.

## First: detect the backend

Inspect the complete repository before recommending architecture or writing code. Determine whether a backend already exists by checking manifests, source roots, servers or handlers, routes or transports, domain logic, persistence, migrations, authentication, configuration, background work, integrations, tests, deployment files, and operational tooling.

- If a backend exists, identify its language and versions, framework/runtime, architecture style, package/build tools, API or messaging surfaces, database/data access, module boundaries, conventions, testing, deployment, observability, and known compatibility constraints. Preserve good existing choices.
- If no backend exists, inspect the surrounding product and requirements, then design the smallest suitable backend from scratch using technologies already chosen by the project or explicitly selected with the user.
- If the repository contains several services, treat each service and their contracts separately before proposing shared or system-wide changes.

## Existing-backend assessment

Before a material refactor, explain:

1. **Current structure** — how requests, messages, jobs, data, and dependencies flow today.
2. **What should stay** — sound choices and conventions worth preserving.
3. **What should change** — concrete problems supported by repository evidence.
4. **Recommended target** — the smallest architecture that resolves those problems.
5. **Update path** — ordered, incremental steps with compatibility, migration, testing, deployment, and rollback notes.

Do not rewrite the entire backend, introduce a new framework, split into microservices, or impose a fashionable architecture unless evidence and the user's goal justify it. If implementation was requested, provide the assessment concisely and then follow the update path.

## Workflow

1. Map entry points, request/message/job flows, state changes, dependencies, and external contracts.
2. Identify ownership, coupling, cohesion, duplication, cycles, misplaced responsibilities, scaling limits, and operational gaps.
3. Select architecture based on real constraints: team size, domain complexity, traffic, consistency, latency, security, deployment, and expected change.
4. Choose the smallest change that satisfies the request. Consider the existing style, modular monoliths, layered/MVC, feature modules, hexagonal/ports-and-adapters, event-driven systems, serverless, or services only where appropriate.
5. Separate transport, business rules, data access, validation, and serialization to the degree supported by the stack and problem; avoid ceremonial layers with no value.
6. Implement incrementally and preserve public APIs, messages, data, and deployment behavior unless a breaking change is approved.
7. Add or update migration, compatibility, and rollback handling when contracts or persisted data change.
8. Run the ecosystem's relevant formatter, linter/static analysis, compiler/type checker, unit/integration tests, and build.
9. Report the final structure, decisions, verification, migration status, and remaining risks.

## Guardrails

- Centralize configuration and validate required environment variables at startup.
- Keep secrets out of source, logs, and responses.
- Validate at system boundaries and derive identity or authorization from verified server context.
- Keep database and integration details behind clear boundaries.
- Avoid generic shared modules until code is genuinely reused.
- Add abstractions only when they reduce current complexity or support a concrete extension.
- Keep naming, imports, file extensions, framework patterns, toolchain, and runtime compatibility consistent with the repository.
- Prefer a modular monolith for many new products unless independent deployment or scaling boundaries are already justified.
- Treat distributed systems, queues, caches, and microservices as operational commitments, not default folder-organization tools.

## Detailed guidance

Read [references/architecture-guide.md](references/architecture-guide.md) when the task needs folder templates, framework-specific examples, API and database rules, authentication or payment structure, review checklists, or a full architecture recommendation. Search that file by its headings and load only the relevant sections for the current task.

## Output

Lead with whether an existing backend was found. For existing systems, summarize the current structure and safe update path. For new systems, explain the chosen architecture and why it fits. Distinguish observed problems from optional improvements. For implementation, name changed files, compatibility or migration work, and verification performed.
