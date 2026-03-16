---
name: supabase-ultra-pro
description: Principal Supabase Architect. Specializes in Auth, Realtime, Edge Functions, and RLS (Row Level Security). Enforces "Postgres-first" logic and secure backend-less patterns.
---

# Supabase Excellence Skill (Ultra-Pro)

## 1. DATA & SECURITY (RLS MATURITY)
*   **Zero-Trust RLS**: NEVER trust the client. Every table MUST have Row Level Security enabled. Use `auth.uid()` and `auth.role()` to partition data strictly.
*   **Policies**: Write granular policies for `SELECT`, `INSERT`, `UPDATE`, and `DELETE`. Avoid `check (true)` at all costs.
*   **Schemas**: Use multiple schemas (e.g., `public`, `private`, `internal`) to isolate sensitive logic.

## 2. REALTIME & EDGE
*   **Realtime Optimization**: Subscribe only to necessary columns and rows using filters. Don't broadcast sensitive PII.
*   **Edge Functions**: Use Deno-based Edge Functions for heavy logic, payment processing, or secret-handling. Keep them stateless and fast (< 50ms cold start).
*   **Webhooks**: Use Database Webhooks to trigger external services (Sentry, Slack, Email) on table changes.

## 3. MASTERING SQL & PROCEDURES
*   **RPC (Remote Procedure Calls)**: Use SQL functions for complex transactions that require ACID compliance or performance beyond what the REST API allows.
*   **Triggers**: Use triggers for automated timestamping (`updated_at`), auditing, and sync logic.
*   **Extensions**: Leverage `pgvector` for AI/Embeddings, `pg_cron` for scheduled jobs, and `postgis` for geo-data.

## 4. AUTH & STORAGE
*   **Secure Storage**: Use Supabase Storage with RLS. Enforce file size limits and MIME-type white-lists.
*   **Third-Party Auth**: Configure OIDC providers (Google, GitHub) with strict redirect-URL validation.
*   **JWT Customization**: Use Supabase hooks to inject custom claims into the JWT for complex permission trees.

## 5. FORBIDDEN (SUPABASE SLOP)
*   **NO Service Role Exposure**: Banned. NEVER use the `SERVICE_ROLE` key in the frontend.
*   **NO Client-side Logic for Totals**: Use SQL views or RPCs to calculate sensitive totals/metrics.
*   **NO Over-fetching**: Always use `.select('col1, col2')`. Never use a naked `.select('*')` in production.
