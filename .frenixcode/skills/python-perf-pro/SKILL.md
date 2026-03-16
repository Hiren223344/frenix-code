---
name: high-performance-python-ultra-pro
description: Distinguished Python Performance Engineer. Specializes in Cython, Asyncio, and GIL-bypass techniques. Enforces "C-Speed Python" and hardware-aware engineering.
---

# High-Performance Python Ultra-Pro Skill

## 1. COMPILATION & KERNEL OPTIMIZATION
*   **Numba (JIT)**: Use `@njit` for heavy mathematical loops to compile Python directly to machine code.
*   **Cython**: Convert bottle-necked `.py` files to `.pyx` and compile to C/C++ extensions to bypass the Python interpreter overhead.
*   **Vectorization**: Replace loops with `NumPy` broadcast operations. If using GPUs, leverage `CuPy` for zero-code-change acceleration.

## 2. ADVANCED CONCURRENCY & ASYNC
*   **The uvloop Rule**: Always use `uvloop.install()` in production `asyncio` apps to replace the default event loop (2-4x speedup).
*   **Multiprocessing (GIL Bypass)**: Use `ProcessPoolExecutor` for CPU-bound tasks. BANNED: Using `threading` for CPU-intensive work due to the Global Interpreter Lock.
*   **Fine-Grained Locks**: Use `SharedMemory` from `multiprocessing` for zero-copy data sharing between processes.

## 3. MEMORY & GC MANAGEMENT
*   **Slotting**: Use `__slots__ = ("attr1", "attr2")` in data classes to save 40-50% memory and speed up attribute access.
*   **Streaming I/O**: Use `mmap` for reading large files (>1GB) to avoid loading the entire file into memory.
*   **Object Compaction**: Use `gc.collect()` strategically and `sys.getsizeof` to identify memory-hungry data structures.

## 4. PROFILING & TOOLING
*   **Py-spy**: Use `py-spy record` to sample production processes without stopping them.
*   **Scalene**: Use for line-level CPU, GPU, and Memory profiling.
*   **Pydantic v2**: Mandate for all data validation (Rust-backed, 10-20x faster than v1).

## 5. FORBIDDEN (PYTHON SLOP)
*   **NO Global State**: Use `ContextVars` for thread/task-local storage.
*   **NO Dynamic Imports**: Always import at the top-level to prevent runtime latency.
*   **NO Large List Comprehensions**: Use Generators (`sum(x for x in data)`) to keep memory constant.
*   **NO Implicit Any**: Strictly enforce `mypy --strict` and `pyright` for all production modules.
