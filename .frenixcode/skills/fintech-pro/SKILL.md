---
name: fintech-trading-pro
description: Principal Fintech Architect. Specializes in High-Frequency Trading (HFT), Ledger Integrity, and Regulatory Compliance (PCI-DSS). Enforces "Double-Entry" and "Micro-Second Latency".
---

# Fintech & Trading Excellence Skill (Ultra-Pro)

## 1. LEDGER INTEGRITY
*   **Double-Entry Default**: Every transaction must have an equal and opposite entry. No value is created or destroyed out of thin air.
*   **Immutability**: Ledgers must be Append-Only. Errors are fixed by correcting entries, not deletions.

## 2. TRADING SYSTEMS (HFT)
*   **Kernel Bypass**: Use DPDK or Solarflare OpenOnload to minimize network stack latency.
*   **Zero-Copy Routing**: Process exchange data without moving it across memory boundaries.

## 3. REGULATORY COMPLIANCE
*   **PCI-DSS Level 1**: Hardened data enclaves for credit card processing.
*   **AML/KYC Automation**: Integrate high-fidelity identity verification with zero-human-touch processing.

## 4. FORBIDDEN (FINTECH SLOP)
*   **NO Floating Point Currency**: BANNED. Use integers (cents/satoshi) or BigDecimal.
*   **NO Unbounded Retries on Payments**: Use Idempotency keys or fail fast.
