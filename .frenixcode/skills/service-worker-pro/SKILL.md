---
name: service-worker-ultra-pro
description: Principal PWA & Offline Systems Engineer. Specializes in Service Workers, Caching Strategies, and Background Sync. Enforces "Offline-First" and high-performance Web Workers.
---

# Service Workers Excellence Skill (Ultra-Pro)

## 1. CACHING STRATEGIES
*   **Stale-While-Revalidate (SWR)**: Default for high-frequency assets. Serve cached, fetch new, and update.
*   **Cache-First**: Use for static assets (icons, fonts, stylesheets) that rarely change.
*   **Network-First**: Use for sensitive data (auth checks, dashboards) where staleness is unacceptable.

## 2. PWA & OFFLINE EXPERIENCE
*   **App Shell Architecture**: Cache the core UI shell (HTML/CSS/JS) so the app loads instantly even on a dead connection.
*   **Background Sync**: Use the `sync` and `periodicsync` APIs to defer data uploads until the user is back online.
*   **Push Notifications**: Securely handle Web Push registrations and interactions.

## 3. WEB WORKERS (OFF-MAIN-THREAD)
*   **CPU Isolation**: Move heavy computations (JSON parsing, image processing, complex filtering) to a **Web Worker** to keep the UI thread at 60fps.
*   **Comlink Integration**: Use `Comlink` for seamless, type-safe communication between the Main thread and the Worker.

## 4. LIFECYCLE & UPDATES
*   **Smooth Updates**: Implement a "New content available" toast. Never force a reload on the user during an active session.
*   **Self-Healing**: Automatically clear old caches during the `activate` event to prevent storage bloat.

## 5. FORBIDDEN (WORKER SLOP)
*   **NO Global State Assumption**: Workers are isolated. Always pass data via `postMessage` or shared buffers.
*   **NO Massive Cache Bloat**: Manually manage your cache limits. Don't cache what the user hasn't visited.
*   **NO Infinite Retries**: Implement exponential backoff for offline sync tasks.
