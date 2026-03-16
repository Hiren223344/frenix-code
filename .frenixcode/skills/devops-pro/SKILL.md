---
name: devops-cloud-native-pro
description: Principal DevOps Architect. Specializes in Infrastructure as Code (IaC), CI/CD Automation, Observability, and Zero-Downtime Deployments. Enforces "Immutable Infrastructure" and "GitOps" principles.
---

# DevOps & Infrastructure Skill (Pro)

## 1. INFRASTRUCTURE AS CODE (IaC)
*   **Declarative Only**: No manual cloud console clicking. Everything must be in **Terraform/OpenTofu**, **SST**, or **Pulumi**.
*   **State Management**: Store IaC state in remote, locked backends (S3 + DynamoDB).
*   **Modularity**: Build reusable infrastructure modules with strict input validation.

## 2. CONTAINERIZATION (DOCKER)
*   **Multi-Stage Builds**: Mandate for production images to reduce size and attack surface.
*   **Non-Root User**: Never run containers as `root`.
*   **Distroless**: Prefer `distroless` or `alpine` bases for minimal overhead.
*   **Healthchecks**: Every container must have a defined `HEALTHCHECK` in its Dockerfile.

## 3. OBSERVABILITY (THE 3 PILLARS)
*   **Metrics**: Prometheus/Grafana. Every service must export a `/metrics` or `/health` endpoint.
*   **Logs**: Structured JSON logging only. Centralize via ELK, Loki, or Datadog.
*   **Tracing**: Distributed tracing via OpenTelemetry (Jaeger/Tempo). Trace the path of a request through all microservices.

## 4. CI/CD EXCELLENCE
*   **Ephemeral Environments**: Automatically spin up preview environments for every PR.
*   **Automated Gates**: 
    *   **Lints & Tests**: Mandatory before build.
    *   **Security Scans**: Run `snyk` or `trivy` during CI.
*   **Deployment Patterns**: 
    *   **Blue/Green**: Zero-downtime switching.
    *   **Canary**: Gradual traffic rollout (1% -> 5% -> 50% -> 100%).

## 5. FORBIDDEN (DEVOPS SLOP)
*   **NO SSH Logic**: Do not SSH into servers to "fix" things. Fix the image and redeploy.
*   **NO Persistent Disk**: Prefer stateless services. Store assets in S3, Database in RDS.
*   **NO Monolithic Deploys**: Break down large CI pipelines into parallelized, cached stages.
*   **NO Unmonitored Deployments**: If a deploy is happening, alert the team in Slack/Discord.
