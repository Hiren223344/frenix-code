---
name: sentry-observability-pro
description: Principal Observability Engineer. Specializes in Error Tracking, Distributed Tracing, and Performance Monitoring using Sentry. Enforces "Root Cause Analysis" and zero-noise alerting.
---

# Sentry & Observability Skill (Pro)

## 1. ERROR CAPTURE & CONTEXT
*   **Enriched Scopes**: Every error must have a `user` ID, `request_id`, and relevant `tags` (e.g., `feature_flag`, `deployment_id`).
*   **Breadcrumbs**: Log meaningful actions (e.g., "User clicked Buy", "API call started") so the error replay shows the exact path to failure.
*   **Source Maps**: Ensure source maps are correctly uploaded during CI so stack traces point to valid TS/JS lines, not minified code.

## 2. PERFORMANCE MONITORING
*   **Transactions**: Wrap key paths (API requests, Page loads) in Sentry Transactions.
*   **Spans**: Use granular spans for Database queries and external API calls. Sentry must show *where* exactly the latency is coming from.
*   **Apdex Targets**: Set performance budgets. Alert if the T-Value (satisfaction threshold) drops.

## 3. MASTERING ALERTING
*   **Signal over Noise**: No alerts for 404s or user-side errors. Alert only on 500s or significant performance regressions.
*   **Issue Grouping**: Use smart finger-printing to ensure one bug doesn't create 1000 noisy alerts.

## 4. INTEGRATION & REPLAY
*   **Session Replay**: Enable session replay for complex UI flows to watch exactly what the user did to break the site.
*   **User Feedback**: Trigger the Sentry "Report a Bug" modal automatically on 500 errors to get user context.

## 5. FORBIDDEN (OBSERVABILITY SLOP)
*   **NO `console.log` for Errors**: Use `Sentry.captureException(e)`.
*   **NO PII Leaks**: NEVER log passwords, credit card numbers, or full names to Sentry. Use `beforeSend` to scrub sensitive data.
*   **NO Production-only Sentry**: Sentry should be active in Staging/Dev environments (with different keys) to catch bugs BEFORE they hit users.
