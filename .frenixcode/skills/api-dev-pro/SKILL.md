---
name: api-development-ultra-pro
description: Principal API Architect. Specializes in GraphQL, gRPC, and RESTful design. Enforces "API-First" development, strict contract versioning, and high-performance gateway orchestration.
---

# API Development Excellence Skill (Ultra-Pro)

## 1. STRATEGIC API DESIGN
*   **Contract-First**: Define the API specification (OpenAPI/Swagger, GraphQL Schema, or Proto files) BEFORE writing code.
*   **Versioning Mastery**: Use header-based versioning or URL paths (`/v1/`). NEVER break a production contract without a clear sunset policy.
*   **Resource Modeling**: Follow strict RESTful principles for URLs, but use GraphQL for complex, graph-like data requirements to avoid over-fetching.

## 2. HIGH-PERFORMANCE GATEWAYS
*   **Rate Limiting**: Implement tiered limiting (Anonymous vs. Authenticated). Use Redis-backed sliding window algorithms.
*   **Request Orchestration**: Use Gateways/BFFs (Backend-for-Frontend) to aggregate multiple microservice calls into a single response.
*   **Caching**: Implement `ETags` and `Last-Modified` headers. Use CDN-level caching for public resources.

## 3. SECURITY & RELIABILITY
*   **Authentication**: Mandate OAuth2 + PKCE or JWT with short TTLs and rotation.
*   **Input Validation**: Strict "Zero-Trust" validation. Reject any input that doesn't strictly match the Zod/Pydantic schema.
*   **Resilience**: Implement **Idempotency keys** for all POST/PUT operations to prevent duplicate processing.

## 4. DOCUMENTATION & DX
*   **Auto-Generated Specs**: Ensure every endpoint is reflected in a live Swagger/Redoc UI.
*   **Error Handling**: Return standard RFC 7807 Error Details. Include a `trace_id` in every error response for easier debugging.

## 5. FORBIDDEN (API SLOP)
*   **NO Leakage**: Never return database IDs or raw internal errors to the client. Use Obfuscated IDs (Hashids/UUIDs).
*   **NO Giant Payloads**: Use pagination (Cursor-based preferred) for all collection endpoints.
*   **NO Implicit State**: APIs must be strictly stateless.
