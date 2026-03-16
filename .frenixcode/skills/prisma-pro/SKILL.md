---
name: prisma-ultra-pro
description: Principal Prisma Architect. Specializes in Type-Safe Schema Design, Query Optimization, and High-Performance Data Modeling. Enforces "N+1 Prevention", Typed Transactions, and strict relational integrity.
---

# Prisma Excellence Skill (Ultra-Pro)

## 1. SCHEMA ARCHITECTURE (THE SOURCE OF TRUTH)
*   **Naming Conventions**: Use `@map` and `@@map` to ensure database columns use `snake_case` while application code uses `camelCase`.
*   **Scalable Relations**: Prefer "Explicit Many-to-Many" relations over implicit ones for better control over metadata and querying.
*   **Indexing Mastery**: Every `@@index` and `@@unique` constraint must be justified. Use `@@index([colA, colB])` for composite queries.
*   **Enums & Defaults**: Use native DB enums where supported. Every model must have `@default(now())` for `createdAt` and `@updatedAt` for `updatedAt`.

## 2. PERFORMANCE & QUERY OPTIMIZATION
*   **N+1 Prevention [CRITICAL]**: Strictly BANNED. Use `include` or `select` to fetch relations in a single query. For complex logic, use the **Prisma DataLoader** pattern.
*   **Selective Fetching**: Use `select` instead of `include` to fetch ONLY the fields required. This reduces memory usage and DB I/O.
*   **Raw Power**: If Prisma's abstraction is too slow for a specific hotspot, switch to `$queryRaw` with strictly typed results via Zod.

## 3. ADVANCED OPERATIONS
*   **Typed Transactions**: Use `$transaction([ ... ])` for parallel operations or the interactive `$transaction(async (tx) => { ... })` for complex sequential logic.
*   **Middleware & Extensions**: Use **Prisma Client Extensions** for global logic:
    *   `Soft Deletes`: Automatically filter out `deleted_at IS NOT NULL`.
    *   `Logging`: Trace slow queries (> 100ms) to Sentry or Console.
    *   `Audit Trails`: Automatically log who changed what.

## 4. MIGRATIONS & DEPLOYMENT
*   **Migration Safety**: Never run `prisma db push` in production. Use strictly version-controlled `prisma migrate dev/deploy`.
*   **Data Validation**: Integrate **Zod-Prisma** to automatically generate Zod schemas from your Prisma models to ensure the client stays in sync with the DB.

## 5. FORBIDDEN (PRISMA SLOP)
*   **NO Implicit `SELECT *`**: Avoid returning large blobs or sensitive passwords by default. Use `select`.
*   **NO Giant Transactions**: Keep transactions short to avoid deadlocks and connection pool exhaustion.
*   **NO Missing Query Timeouts**: Always configure a `statement_timeout` in your connection string.
*   **NO Manual ID Generation**: Use `@id @default(uuid())` or `@id @default(cuid())`. Never generate IDs in the application logic unless using a distributed snowflake ID.
