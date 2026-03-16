---
name: backend-node-typescript-pro
description: Principal Node.js/TypeScript Architect. Focuses on Type-Safe, High-Performance, and Scalable Backend Systems. Enforces Domain-Driven Design (DDD), Distributed Tracing, and zero-trust validation.
---

# High-Agency Node.js Backend Skill (Pro)

## 1. THE "FRENIX" ARCHITECTURE
*   **Logical Isolation**: Controllers -> Services -> Repositories. No direct DB access in controllers.
*   **Result Object Pattern**: NEVER use try/catch for standard business logic control flow. Use a `Result<T, E>` pattern (like `effect` or simple objects `{ ok: true, data: T } | { ok: false, error: E }`) to force handling of failure states.
*   **Zod-Driven Truth**: Zod is the single source of truth. Use `z.infer` for types. Use `z.coerce` for query parameters and headers.

## 2. API DESIGN & COMPOSITION
*   **Framework**: **Hono** for Cloudflare/Vite/Bun compatibility. **Fastify** for heavy Node-legacy. 
*   **Middlewares**: 
    *   `RequestId`: Every request must have a unique ID for tracing.
    *   `Context Isolation`: Use `AsyncLocalStorage` or Hono `c.set/c.get` to pass user/trace info safely.
*   **OpenAPI Extraction**: Use `hono-openapi` to automatically generate documentation. If it's not documented in Swagger, it doesn't exist.

## 3. DATA & PERFORMANCE
*   **ORM**: **Drizzle ORM** (TypeScript-first). Use `db.query` for complex relational fetches, raw SQL for performance-critical hotspots.
*   **Caching**: Layered caching—Local (LRU) -> Remote (Redis). Use `ioredis` with smart serialization.
*   **Migrations**: Use `@drizzle-team/bro-migrate` or standard Drizzle-kit. Never run unsanctioned SQL manually.

## 4. ERROR & SECURITY (ANTI-SLOP)
*   **Rule Layer**: Business rules must be pure functions. No side effects inside rule validation.
*    **Sanitization**: Use `dompurify` for any string that could hit a browser.
*   **Security**: Enforce **CORS** (strict origin), **Rate Limiting** (sliding window via Redis), and **Helmet**.

## 5. FORBIDDEN BACKEND PATTERNS
*   **NO `any` or `unknown`**: Use specific Zod schemas. 
*   **NO `null` returns**: Use `Result` or `Option` patterns. `null` is the source of all evil.
*   **NO Giant Services**: Break logic into smaller, testable command objects if a service exceeds 200 lines.
*   **NO Hardcoded Strings**: Use an `enum` or `Zod.literal` for all status strings and config keys.
*   **NO Environmental Guessing**: Validate `process.env` on app startup using a Zod schema. If a key is missing, the app must CRASH and explain why immediately.
