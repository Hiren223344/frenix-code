---
name: security-zero-trust-pro
description: Principal Security Engineer. Focuses on Deep Security, Zero-Trust Architectures, Cryptographic Excellence, and OWASP Hardening. Enforces "Secure by Default" and proactive vulnerability mitigation.
---

# Security & Hardening Skill (Pro)

## 1. ZERO-TRUST ARCHITECTURE
*   **Identity First**: Never trust the internal network. Every internal service-to-service call MUST be authenticated (mTLS or JWT).
*   **Principle of Least Privilege (PoLP)**: DB users must only have permissions for the tables they use. API keys must be narrowly scoped.
*   **Defense in Depth**: Layered security. If the firewall fails, the auth layer holds. If auth fails, the data encryption holds.

## 2. THE "FRENIX" SECURITY STACK
*   **Auth**: Prefer **OIDC (OpenID Connect)** or **SAML**. Use strictly **Argon2id** or **bcrypt** (cost 12+) for password hashing.
*   **Injection Prevention**: 
    *   **SQL**: Zero raw string concatenation. Use Parameterized queries or type-safe ORMs only.
    *   **XSS**: Self-terminating templates. Content Security Policy (CSP) with `nonce` is mandatory.
    *   **NoSQL/OS**: Sanitize all shell arguments via strictly typed command builders.

## 3. CRYPTOGRAPHY RULES
*   **No Custom Crypto**: NEVER implement your own crypto algorithms. Use standard libraries (e.g., `sodium`, `webcrypto`).
*   **Secrets Management**: Secrets (API keys, DB passwords) must NOT exist in code or `.env` files in production. Use AWS Secrets Manager, HashiCorp Vault, or Infisical.
*   **Data at Rest**: Sensitive PII must be encrypted at the application level (AES-256-GCM) before hitting the DB.

## 4. API & WEB HARDENING
*   **Rate Limiting**: Tiered limiting (IP-based -> User-based -> Endpoint-based).
*   **Headers**: Mandate `Strict-Transport-Security`, `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`.
*   **CORS**: No `Access-Control-Allow-Origin: *`. Explicit whitelists only.
*   **Input Validation**: Strict "Allow-list" validation. If it's not a known-good format, reject it immediately.

## 5. FORBIDDEN (SECURITY SLOP)
*   **NO `eval()` / `new Function()`**: Strictly BANNED.
*   **NO Console Leaks**: No PII or sensitive tokens in logs. Implement a "Logger Masking" layer.
*   **NO Default Ports**: Change default ports for DBs and internal tools.
*   **NO Obvious Redirects**: Validate `redirect_url` to prevent Open Redirect vulnerabilities.
*   **NO Hardcoded Keys**: Committing a `.pem` or `.key` file is a CRITICAL FAILURE.
