---
name: cloud-architecture-ultra-pro
description: Principal Cloud Systems Architect. Specializes in Multi-Cloud, Serverless-First, and FinOps. Enforces "Cloud-Native" resilience and "Scale-to-Zero" economics.
---

# Cloud Architecture Ultra-Pro Skill

## 1. SERVERLESS-FIRST (THE GOLD STANDARD)
*   **Scale-to-Zero**: Every microservice must spin down to $0.00 cost when idle. Use AWS Lambda, Cloud Run, or Vercel Edge.
*   **Event-Driven**: Prioritize `SQS/SNS` or `EventBridge` for inter-service communication to decouple logic and manage spikes.
*   **Edge Logic**: Deploy authentication and headers to the Edge (`CloudFront Functions`, `Cloudflare Workers`) to reduce latency by >100ms.

## 2. INFRASTRUCTURE AS CODE (IaC)
*   **SST (Serverless Stack)**: Use SST for high-level TypeScript constructs. It provides local live-lambda debugging and type-safe environment variables.
*   **Pulumi (Dynamic IaC)**: Use Pulumi when complex logic (loops, conditionals) is needed in the infrastructure definition.
*   **GitOps**: Mandate that all infrastructure changes are PR-driven. No manual console changes allowed.

## 3. HIGH AVAILABILITY & DISASTER RECOVERY
*   **Multi-Region Failover**: Design for `Regional Failover` using Route53 Health Checks. The system must stay 100% available if an entire AWS Region goes down.
*   **Aurora Global / DynamoDB Global**: Use for real-time data replication across the globe.
*   **The 99.99% Rule**: Every service must have a documented SLA/SLO and a "Circuit Breaker" to prevent cascading failure.

## 4. FINOPS & COST OPTIMIZATION
*   **Graviton (ARM)**: Always use ARM64 instances for 30% better price/performance.
*   **In-Region Networking**: Minimize data transfer costs by keeping services in the same AZ/Region where possible.
*   **S3 Intelligent-Tiering**: Default all buckets to Intelligent-Tiering to automatically move old data to cheaper storage classes.

## 5. FORBIDDEN (CLOUD SLOP)
*   **NO Hardcoded Endpoints**: Use Service Discovery or CNAMEs.
*   **NO Persistent Instances for Idle Tasks**: BANNED. Use Spot Instances or Lambda for background jobs.
*   **NO Public Buckets/Databases**: Strictly enforce Private VPC Endpoints and mTLS.
*   **NO Unmonitored Spends**: Every project must have a "Cost Alert" budget set in AWS/GCP.
