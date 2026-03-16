---
name: database-performance-pro
description: Principal Data Architect. Specializes in Schema Design, Query Optimization, High-Availability, and Data Consistency. Enforces "Read-Heavy vs Write-Heavy" optimization strategies.
---

# Database Excellence Skill (Pro)

## 1. DATA MODELING ELITE
*   **Normalization**: Aim for 3NF for transactional data. Use Denormalization strictly for performance Hotspots.
*   **Indexes**: 
    *   **Mandatory**: Proper indexing on all `WHERE`, `JOIN`, and `ORDER BY` columns.
    *   **Composite**: Use Left-prefixing rules (A, B, C) for multi-column queries.
    *   **Partial**: Use partial indexes (Postgres) for boolean flags (e.g., `is_active=true`).
*   **Foreign Keys**: ALWAYS enforce referential integrity at the DB level, not just the application level.

## 2. QUERY PERFORMANCE (ANTI-SLOP)
*   **N+1 Prevention**: Strictly BANNED. Use Joins, `IN` clauses, or Graph-style loaders (DataLoader pattern).
*   **Selective Select**: No `SELECT *`. Explicitly name columns to reduce I/O and memory pressure.
*   **Explaining**: Before committing complex SQL, run `EXPLAIN ANALYZE` and prove it avoids Sequential Scans on large tables.

## 3. SCALABILITY & CONSISTENCY
*   **ACID Compliance**: Mandatory for financial/critical data.
*   **Read Replicas**: Architect apps to separate `Read` vs `Write` connections for horizontal scaling.
*   **Migrations**: 
    *   **Zero-Downtime**: Use "Expand and Contract" pattern (Add column -> Migrated data -> Remove old column).
    *   **Locking**: Avoid `ALTER TABLE` on multi-million row tables during peak hours. Use tools like `gh-ost` or `pt-online-schema-change`.

## 4. PERSISTENCE STACK
*   **Postgres**: The default for relational. Use `JSONB` for flexible metadata, not core business entities.
*   **Redis**: Strictly for Caching, Rate Limiting, and Pub/Sub. No persistent "Golden Data" in Redis.
*   **Migration Tooling**: Use version-controlled migration files (Alembic, SeaORM, Drizzle-kit). No manual `CREATE TABLE`.

## 5. FORBIDDEN PATTERNS
*   **NO Implicit Conversions**: Ensure types match (e.g., don't compare `VARCHAR` to `INT`).
*   **NO Giant Blobs**: Do not store files/images in the DB. Store URLs/Keys pointing to S3/CDN.
*   **NO Unlimited Queries**: Every list endpoint MUST have a `LIMIT` and `OFFSET/CURSOR`.
*   **NO Silent Failures**: Use Transaction Savepoints for complex multi-step updates.
