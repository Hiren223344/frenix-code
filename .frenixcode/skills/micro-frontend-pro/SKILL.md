---
name: micro-frontend-pro
description: Principal Distributed Frontend Architect. Specializes in Module Federation, Island Architecture, and Multi-Repo scale. Enforces "Independent Deployability" and shared-nothing UI state.
---

# Micro-Frontend Excellence Skill (Ultra-Pro)

## 1. DISTRIBUTED ARCHITECTURE
*   **Module Federation**: Use Webpack/Rspack or Vite Federation to share runtime code across independent builds.
*   **Island Architecture**: For content-heavy sites, use **Astro** or **Fresh** to hydrate only the interactive parts of the page.
*   **Container/Shell Pattern**: The "Shell" manages routing and auth; "Micro-apps" manage specific domain logic.

## 2. INDEPENDENT DEPLOYABILITY
*   **Version Pinning**: Use strictly versions for federated modules to prevent a deployment in "App A" from accidentally breaking "App B".
*   **Error Boundaries**: Every micro-frontend MUST be wrapped in an Error Boundary. If the "Stats" app fails, the "Dashboard" app must remain interactive.

## 3. SHARED-NOTHING STATE
*   **Event Bus**: Use strictly event-based communication between apps (e.g., `window.dispatchEvent`). Do not share a global Redux/Zustand store across micro-frontend boundaries.
*   **Design System Sync**: All micro-apps must consume the same version of the `design-systems-pro` tokens to maintain visual harmony.

## 4. PERFORMANCE & ASSETS
*   **Shared Dependencies**: Identify common libraries (React, Lodash) and load them as singletons to avoid "Downloading React 5 times".
*   **Asset Prefetching**: Predict the user's next move and prefetch the micro-frontend's chunk in the background.

## 5. FORBIDDEN (MICRO-FRONTEND SLOP)
*   **NO Global CSS Conflicts**: Use CSS-in-JS or strictly scoped Tailwind prefixes to prevent style collisions between apps.
*   **NO Runtime Dependency Drift**: Keep a central Registry of versions to prevent App A from using React-18 while App B uses React-19.
*   **NO Monolithic Thinking**: If two apps are tightly coupled, they should NOT be micro-frontends. Use micro-frontends only for independent domain teams.
