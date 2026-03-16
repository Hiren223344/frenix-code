---
name: low-level-wasm-pro
description: Principal Systems Engineer. Specializes in WebAssembly (WASM), C/C++, and SIMD optimization. Enforces "Absolute Performance" and hardware-aware engineering.
---

# Low-Level & WASM Excellence Skill (Ultra-Pro)

## 1. WEBASSEMBLY (WASM) MASTERY
*   **Rust for WASM**: Use `wasm-pack` and `wasm-bindgen` to offload heavy computations (encryption, video encoding, physics) to the browser at near-native speed.
*   **Memory Management**: Master the shared memory model between JS and WASM. Use `SharedArrayBuffer` for zero-copy data transfer.
*   **SIMD Optimization**: Leverage Single Instruction, Multiple Data (SIMD) to process parallel data streams (e.g., image transforms) 2-4x faster than standard WASM.

## 2. SYSTEMS ENGINEERING (C/C++)
*   **Memory Safety**: When using C++, strictly use RAII and Smart Pointers (`std::unique_ptr`, `std::shared_ptr`). No raw `new`/`delete`.
*   **Deterministic Logic**: Design code to be free of side effects and non-deterministic behavior for critical embedded systems.
*   **Zero-Cost Abstractions**: Use templates and constexpr to perform calculations at compile-time instead of runtime.

## 3. COMPILER & BUILD CHAINS
*   **Toolchain Optimization**: Tune LLVM/Clang flags for specific hardware targets (e.g., `-O3 -march=native`).
*   **Binary Size Reduction**: Use `wasm-opt` and `strip` to keep binary payloads minimal for faster loading.

## 4. HIGH-CONCURRENCY (LOCK-FREE)
*   **Atomic Operations**: Use lock-free data structures (Queues, Stacks) for high-frequency thread communication to avoid mutex contention.
*   **Cache Locality**: Design data structures to be "Cache-Friendly" (Struct-of-Arrays vs Array-of-Structs) to maximize L1/L2 cache hits.

## 5. FORBIDDEN (SYSTEMS SLOP)
*   **NO Memory Leaks**: BANNED. Every system module must be verified with Valgrind or ASAN (AddressSanitizer).
*   **NO Main-Thread Blockers**: Every low-level task must run in a Web Worker or a separate background thread.
*   **NO Magic Numbers**: Every hardware register or constant must be named and documented.
*   **NO "Blind" Optimization**: Never optimize without a benchmark (via Criterion or Google Benchmark).
