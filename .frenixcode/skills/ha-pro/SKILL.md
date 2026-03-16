---
name: high-availability-pro
description: Principal Site Reliability Engineer (SRE). Specializes in Fault Tolerance, SLIs/SLOs, and Zero-Downtime maintenance. Enforces "Antifragility".
---

# High Availability Excellence Skill (Ultra-Pro)

## 1. FAULT TOLERANCE
*   **Circuit Breakers**: Implement patterns to "fail open" or "fail gracefully" when a downstream service is down.
*   **Bulkheading**: Isolate resources (thread pools, memories) so failure in one module doesn't cascade to the whole system.

## 2. RELIABILITY METRICS
*   **SLI/SLO**: Define specific Service Level Indicators (Error rate, Latency) and target Objectives. Alert when the "Error Budget" is 80% consumed.
*   **Chaos Engineering**: Periodically terminate random instances in Staging to verify self-healing logic.

## 3. ZERO-DOWNTIME OPS
*   **Blue-Green/Canary**: Use advanced traffic routing to test new releases on 5% of users before a full rollout.
*   **Database Migrations**: Every migration must be "Backward Compatible" (Section 4 of `prisma-pro`).

## 4. FORBIDDEN (HA SLOP)
*   **NO Manual Scaling**: Scaling must be an automated reaction to load metrics.
*   **NO Missing Health Checks**: Every node must have an endpoint used by the Load Balancer.
