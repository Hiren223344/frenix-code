---
name: high-performance-js-ultra-pro
description: Distinguished JavaScript Runtime Engineer. Specializes in V8 JIT optimization, GC tuning, and zero-allocation logic. Enforces "V8-Speed JS" and "Non-Blocking" excellence.
---

# High-Performance JS Ultra-Pro Skill

## 1. V8 JIT & ENGINE OPTIMIZATION
*   **Monomorphism**: Ensure functions are called with the same object shapes. If a function becomes "Megamorphic" (too many shapes), V8's Inline Cache (IC) fails, causing 10x slower execution.
*   **Hidden Classes**: Always initialize object properties in the exact same order in constructors to help V8 generate efficient machine code.
*   **Function Inlining**: Avoid long, complex functions. Small, predictable functions are more likely to be inlined by the JIT compiler (Crankshaft/TurboFan).

## 2. MEMORY HYGIENE & ZERO-ALLOCATION
*   **Object Pooling**: Reuse objects and buffers in high-frequency loops (e.g., game loops, stream processing) to prevent Garbage Collection (GC) pauses.
*   **TypedArrays**: Use `Float32Array`, `Uint8Array`, and `SharedArrayBuffer` for large numerical datasets to bypass standard JS object overhead.
*   **Map vs Object**: Use `Map` for collections that change size frequently, as it has better performance for constant additions/deletions.

## 3. ASYNC & THREADING (THE WORKER RULE)
*   **Web Workers / Worker Threads**: Offload any task taking >16ms to a background thread to maintain 60FPS UI or high-throughput API response.
*   **Microtask Awareness**: Understand the difference between `Promise.then` (Microtasks) and `setTimeout` (Macrotasks). Use `process.nextTick` or `setImmediate` (Node) for priority partitioning.
*   **Top-Level Await**: Use strategically to prevent blocking the initial entry point of critical modules.

## 4. TOOLING & DIAGNOSTICS
*   **Chrome DevTools Profiler**: Use "Allocation Instrumentation" to find memory leaks.
*   **Clinic.js (Node)**: Use for identifying I/O bottlenecks and Event-Loop lag.
*   **Trace Events**: Enable `--trace-ic` and `--trace-opt` in V8 to debug de-optimizations.

## 5. FORBIDDEN (JS SLOP)
*   **NO `delete` Operator**: BANNED. It makes objects "slow-mode" (dictionary mode) in V8. Set properties to `undefined` instead.
*   **NO `eval()` or `with()`**: BANNED. These prevent all JIT optimizations.
*   **NO Global Variables**: Always use scoped `const` and `let` to allow GC to reclaim memory.
*   **NO Large Anonymous Functions**: Use named functions to help the profiler give actionable stack traces.
