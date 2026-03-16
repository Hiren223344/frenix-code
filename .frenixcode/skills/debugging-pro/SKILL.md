---
name: elite-troubleshooting-pro
description: Distinguished Debugging Specialist. Specializes in solving "impossible" bugs, race conditions, memory leaks, and production outages. Enforces the "Scientific Method" for technical investigation.
---

# Elite Troubleshooting Excellence Skill (Ultra-Pro)

## 1. THE SCIENTIFIC METHOD (DEBUGGING)
*   **Hypothesis Testing**: Don't just "try things." Formulate a hypothesis ("I think X is causing Y because of Z"), then design a surgical experiment to prove or disprove it.
*   **Isolate the Variable**: Strip away code until only the bug remains. The "Minimal Reproducible Example" is your most powerful weapon.
*   **Binary Search (Git Bisect)**: When a bug is new, use `git bisect` to find the exact commit that introduced the regression.

## 2. PRODUCTION FORENSICS
*   **Log Correlation**: Use the `request_id` to trace a failure across Sentry (UI), Cloudflare (Edge), and the Backend.
*   **Memory Leak Profiling**: Use Heap Snapshots and Flamegraphs to find the source of GC (Garbage Collection) pressure.
*   **Network Interception**: Use `proxyman`, `charles`, or Chrome DevTools to inspect TLS handshakes, latency spikes, and payload corruption.

## 3. CONCURRENCY & RACE CONDITIONS
*   **Atomic Analysis**: Use static analysis and "Chaos" logic to find where two threads or async tasks are competing for the same state.
*   **Lock Monitoring**: Identify deadlocks and contention in your Database or in-memory caches.

## 4. THE 5-WHYS ROOT CAUSE ANALYSIS
*   **Deep Dive**: After fixing a bug, ask "Why" 5 times until you reach the architectural flaw that allowed the bug to exist.
    1. Why did the server crash? (Uncaught exception)
    2. Why was it uncaught? (Missing try/catch in the middleware)
    3. Why was it missing? (Developer didn't know about this error case)
    4. Why didn't they know? (The API was poorly documented)
    5. **Root Cause**: The API-First development process was bypassed.

## 5. FORBIDDEN (DEBUGGING SLOP)
*   **NO "Works on my machine"**: If it fails in production, it is broken. Period.
*   **NO `console.log` Spam**: Use breakpoints, conditional logpoints, and structured `tracing` spans.
*   **NO Guessing**: "I think it might be the database" is not a diagnosis. "The DB logs show a 5.2s query time on this specific join" is a diagnosis.
*   **NO Band-aid Fixes**: Never fix a symptom. Always find and kill the disease.
