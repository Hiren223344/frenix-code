---
name: high-performance-go-ultra-pro
description: Distinguished Go Performance Engineer. Specializes in pprof, zero-copy networking, and escape analysis. Enforces "Mechanical Sympathy" and "Allocation-Zero" hot paths.
---

# High-Performance Go Ultra-Pro Skill

## 1. CONCURRENCY & SCHEDULER TUNING
*   **Goroutine Pools**: Use `ants` or custom worker pools for massive concurrency. BANNED: Spawning millions of goroutines without a semaphore/limit.
*   **GOMAXPROCS Awareness**: Tune based on container CPU limits, not just physical cores, to prevent context-switch thrashing.
*   **Lock-Free Sync**: Prioritize `atomic` package and `sync.Map` for fast, contention-free shared state.

## 2. MEMORY & ESCAPE ANALYSIS
*   **Escape Analysis**: Use `go build -gcflags="-m"` to ensure hot-path variables stay on the Stack. BANNED: Unnecessary pointers that force heap allocation.
*   **sync.Pool**: Frequently reuse buffers and slices. This is the #1 way to reduce GC overhead in high-throughput Go services.
*   **Pre-Allocation**: Always specify capacity for slices (`make([]T, 0, cap)`) and maps to prevent re-allocation triggers.

## 3. ZERO-COPY NETWORKING
*   **Buffer Reuse**: Use `io.CopyBuffer` with a pooled buffer instead of `io.ReadAll`.
*   **Struct Packing**: Order struct fields from largest to smallest to minimize padding and save memory.
*   **Fast HTTP**: Use `fasthttp` or `fiber` for ultra-high performance APIs that bypass `net/http` allocation overhead.

## 4. PROFILING & TOOLING
*   **Pprof**: Always expose `/debug/pprof` endpoints. Use for CPU, Mem, and Goroutine profiling.
*   **Benchmarking**: Every hot-path function must have a `_test.go` benchmark. Use `testing.B` and `b.ReportAllocs()`.
*   **GCTRACE**: Run with `GODEBUG=gctrace=1` to optimize Garbage Collector intensity.

## 5. FORBIDDEN (GO SLOP)
*   **NO `interface{}` in Hot Loops**: BANNED. It causes boxing/unboxing and heap escapes.
*   **NO Goroutine Leaks**: Every goroutine must have a clear `Done()` channel or `Context` cancellation.
*   **NO `fmt.Sprintf` in Iterations**: Use `strconv` or `strings.Builder` for high-frequency string concatenation.
*   **NO Unbuffered Channels**: Use buffered channels where appropriate to prevent blocking the sender.
