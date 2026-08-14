---
name: project-structure
description: Expert backend architecture and project structure for scalable, secure, maintainable applications. Inspects the existing stack, prefers cohesive feature modules, and adapts to Express, NestJS, Fastify, Django, Rails, Go, and other backends. Use when designing a backend, reviewing architecture, reorganizing folders, refactoring modules, or implementing a production-grade backend feature.
---

# Backend Architecture

Inspect the existing repository before proposing or making changes. Identify its language, framework, package manager, data layer, authentication, API style, tests, deployment model, conventions, and current module boundaries. Preserve compatible choices and avoid framework migrations unless explicitly requested.

## Workflow

1. Map the current structure and request flow.
2. Identify ownership, coupling, duplication, and misplaced responsibilities.
3. Choose the smallest architecture change that satisfies the request.
4. Keep HTTP handling, business rules, data access, validation, and serialization distinct where the stack supports it.
5. Prefer feature-based modules for new or reorganized backends; respect an established alternative when changing it would create unnecessary churn.
6. Implement incrementally and preserve public behavior unless the user requests a breaking change.
7. Run the project's relevant formatter, linter, type checker, and tests.
8. Report the resulting structure, important decisions, and remaining risks.

## Guardrails

- Centralize configuration and validate required environment variables at startup.
- Keep secrets out of source, logs, and responses.
- Validate at system boundaries and derive identity or authorization from verified server context.
- Keep database and integration details behind clear boundaries.
- Avoid generic shared modules until code is genuinely reused.
- Add abstractions only when they reduce current complexity or support a concrete extension.
- Keep naming, imports, file extensions, and framework patterns consistent with the repository.

## Detailed guidance

Read [references/architecture-guide.md](references/architecture-guide.md) when the task needs folder templates, framework-specific examples, API and database rules, authentication or payment structure, review checklists, or a full architecture recommendation. Search that file by its headings and load only the relevant sections for the current task.

## Output

Lead with concrete findings or completed changes. For reviews, distinguish observed problems from optional improvements. For implementation, name the files changed and verification performed.
