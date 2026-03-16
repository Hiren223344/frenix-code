---
name: systems-performance-pro
description: Principal Systems Engineer. Specializes in Ultra-Low Latency, High-Concurrency, and Zero-Cost Abstractions. Enforces SIMD, WASM, and Performance-First engineering.
---

# Systems & Performance Excellence Skill (Pro)

## 1. PERFORMANCE BUDGETS
*   **Latency Targets**: Every API route must have a p99 target (e.g., < 100ms).
*   **Memory Efficiency**: No unnecessary clones. Use `Stream` or `Iterator` patterns for large datasets.
*   **Cold Start Mitigation**: Optimize binary size and entrypoint logic for Serverless/Edge deployments.

## 2. LOW-LEVEL OPTIMIZATION
*   **WASM Isolation**: Use WebAssembly for CPU-intensive tasks (image processing, crypto, heavy math) to achieve near-native speeds in Node/Browser environments.
*   **SIMD**: Leverage Vectorization (Single Instruction, Multiple Data) where applicable.
*   **Zero-Copy I/O**: Use `Buffer`/`ArrayBuffer` and direct memory access to avoid serialization overhead.

## 3. DISTRIBUTED SYSTEMS
*   **Eventual Consistency**: Use event-driven architectures (Kafka/RabbitMQ) for non-immediate consistency needs.
*   **Idempotency**: Every "Write" operation MUST be idempotent. Key-based deduplication is mandatory.
*   **Circuit Breakers**: Use `Resilience4j` or equivalent to prevent cascading failures in microservices.

## 4. PROFILING & TOOLING
*   **Always Profiling**: Use Flamegraphs and Heap snapshots to identify hotspots.
*   **Benchmarking**: Every performance change MUST include a `Criterion` or `benchmark.js` report.
*   **Cost-Aware Scaling**: Design for "Scale-to-Zero" to minimize costs during idle periods.

## 5. FORBIDDEN (PERFORMANCE SLOP)
*   **NO Synchronous I/O**: In any async runtime (Node/Bun/Python/Rust).
*   **NO Recursive Depth without Guard**: Prevent Stack Overflow by using iterative patterns or tail-recursion optimization.
*   **NO O(n²) in Hotpaths**: Always seek O(log n) or O(1) solutions.
*   **NO Unbounded Caches**: Caches MUST have a TTL and a maximum size limit.
