---
name: cloud-native-kubernetes-pro
description: Principal Kubernetes Architect. Specializes in CRDs, Operators, and Multi-Cluster networking. Enforces "GitOps" and "Platform Engineering".
---

# Kubernetes Excellence Skill (Ultra-Pro)

## 1. K8S ARCHITECTURE
*   **Custom Resources (CRDs)**: Extend the K8s API to manage your own domain-specific resources.
*   **Operators**: Build Go-based operators (using Kubebuilder) to automate the full lifecycle of complex stateful apps.

## 2. GITOPS FLOW
*   **ArgoCD/Flux**: Mandate that the cluster state matches the git repository state 100% of the time.
*   **Helm/Kustomize**: Use templates to manage multi-environment (Dev/Staging/Prod) configurations with zero duplication.

## 3. SERVICE MESH
*   **Istio/Linkerd**: Implement mTLS, circuit breaking, and traffic shadowing at the network layer.

## 4. FORBIDDEN (K8S SLOP)
*   **NO `kubectl edit` in Prod**: BANNED. Every change must be a Checked-in Git commit.
*   **NO Manual Scaling**: Use HPA and VPA to adapt to real-time resource demands.
