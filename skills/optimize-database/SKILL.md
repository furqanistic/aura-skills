---
name: optimize-database
description: Database performance optimization for MongoDB, PostgreSQL, MySQL, MariaDB, SQLite, Redis, and ORMs such as Prisma, Drizzle, TypeORM, Sequelize, and Mongoose. Use when diagnosing slow queries, designing indexes, fixing pagination or N+1 problems, reviewing data models, planning caching, improving migration safety, or scaling database workloads.
---

# Database Optimization

Inspect evidence before optimizing. Determine the database, query layer, schemas, indexes, representative queries, data volume, read/write pattern, latency symptoms, pooling, caching, migrations, and deployment environment. Do not recommend a database migration without a concrete reason.

## Workflow

1. Reproduce or characterize the performance problem with timings, query plans, slow-query logs, or representative code.
2. Trace the request to every database operation and identify over-fetching, repeated queries, N+1 behavior, unbounded reads, expensive joins or populations, application-side filtering, and missing limits.
3. Match indexes to real filters, joins, sort order, uniqueness requirements, and selectivity. Account for write and storage cost.
4. Prefer stable cursor pagination for large or rapidly changing datasets; always enforce a maximum page size.
5. Select only required fields and batch work where supported.
6. Add caching only after defining ownership, keying, invalidation, TTL, consistency, and failure behavior.
7. Treat schema and index changes as migrations with staging validation, rollout, monitoring, and rollback plans.
8. Verify improvements using the same measurement method and report before/after evidence when available.

## Safety

Never run destructive or irreversible database operations without explicit confirmation. This includes dropping data or indexes, truncation, unsafe deletes, column removal or rename, migration resets, and blind production-cache flushes. Confirm the environment, recommend a backup, test on staging, and prepare rollback steps first.

## Detailed guidance

Read [references/database-guide.md](references/database-guide.md) for database-specific index and query patterns, ORM advice, pooling, caching, migration and backup checklists, large-scale strategies, or the detailed review format. Search by heading and load only the sections relevant to the detected stack.

## Output

Prioritize findings by measured or likely impact. For every recommendation, state the evidence, expected benefit, tradeoff, safe rollout, and verification method. Separate urgent correctness risks from speculative tuning.
