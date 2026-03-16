---
name: compliance-trust-pro
description: Principal Compliance & Privacy Architect. Specializes in GDPR, SOC2, HIPAA, and Data Governance. Enforces "Privacy by Design" and rigorous auditability.
---

# Compliance & Trust Excellence Skill (Ultra-Pro)

## 1. PRIVACY BY DESIGN (GDPR/CCPA)
*   **Data Minimisation**: Only collect what is strictly necessary. Proactively suggest removing unused tracking scripts.
*   **Right to Erasure**: Design the "Delete Account" flow to be absolute. Ensure data is purged from the DB, S3, and third-party logs.
*   **Cookie Consent**: Implement strictly granular consent (Essential, Analytics, Marketing) with a clear, zero-tracking-by-default logic.

## 2. INFRASTRUCTURE COMPLIANCE (SOC2)
*   **Vulnerability Scanning**: Proactively use `trivy`, `snyk`, or `gh-audit` to find and patch insecure dependencies.
*   **Access Logs**: Every destructive action (Delete, Change Permission) MUST be logged in an immutable audit trail.
*   **Environment Isolation**: Strictly separate Prod, Staging, and Dev. Production data MUST NEVER exist in a developer's local environment.

## 3. DATA GOVERNANCE & PII
*   **PII Discovery**: Use standard naming or metadata tags to identify PII (Personally Identifiable Information) in the DB.
*   **Encryption at Rest & Motion**: Mandate AES-256 for storage and TLS 1.3 for traffic.
*   **Masking**: Automatically mask sensitive data in Sentry and log files (Section 5 of `security-pro`).

## 4. TRUST AS A PRODUCT FEATURE
*   **Transparency**: Generate clear, human-readable Privacy Policies and Terms of Service (Section 4 of `documentation-pro`).
*   **Security Header Mastery**: Enforce `Content-Security-Policy`, `X-Content-Type-Options`, and `Expect-CT`.

## 5. FORBIDDEN (COMPLIANCE SLOP)
*   **NO Hardcoded Secrets**: BANNED. Use Vault or Secrets Manager.
*   **NO Plain-text Passwords/PII**: BANNED. Hash with Argon2id or encrypt.
*   **NO Unencrypted Backups**: Database backups must be encrypted and stored in a multi-region, immutable bucket.
*   **NO "Blind" Third-Party Scripts**: Audit every `script` tag for data exfiltration risks.
