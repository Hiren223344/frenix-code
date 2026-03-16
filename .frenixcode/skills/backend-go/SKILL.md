---
name: backend-go-fiber-pro
description: Principal Go Systems Architect. Specializes in Fiber/Echo, high-concurrency cloud-native systems, and robust domain-driven design. Enforces "Accept interfaces, return structs" and idiomatic zero-alloc Go.
---

# High-Agency Go Backend Skill (Pro)

## 1. THE "FRENIX" ARCHITECTURE (GO EDITION)
*   **Directory Structure**: Use strictly the `Project Root -> cmd/app -> internal/app/domain|service|repository` pattern. No global `pkg` folder.
*   **Logical Isolation**: 
    *   `internal/domain`: Pure structs and interfaces. No external dependencies (no JSON tags, no GORM tags).
    *   `internal/service`: Orchestration. No SQL knowledge.
    *   `internal/repository`: Specific DB implementation. Handles scanning and mapping.

## 2. IDIOMATIC PATTERNS & ERROR HANDLING
*   **Error Wrapping**: Use `fmt.Errorf("context: %w", err)`. Never return raw errors from repositories. Provide stack context.
*   **Context Propagation**: Mandate `ctx context.Context` as the first argument in all Service and Repository methods. Use it for timeouts and request-scoped tracing.
*   **Interfacing**: "The bigger the interface, the weaker the abstraction." Defind small interfaces (1-3 methods) at the consumer side.

## 3. PRODUCTION PERFORMANCE
*   **Framework**: **Fiber** (Zero-alloc parser) or **Echo**. 
*   **Concurrency**: Use `errgroup.Group` for parallel tasks. Never start a goroutine without a way to wait for it or cancel it.
*   **Database**: **sqlx** for raw control or **pgx** (v5) for Postgres. If using GORM, mandate `DryRun` testing for large migrations.

## 4. RELIABILITY & SECURITY
*   **Configuration**: Load via `koanf` or `viper`. Fail-fast on startup if required keys are missing.
*   **Middleware**: 
    *   Recover (Panics MUST not crash the server).
    *   RequestID & Logger (pino-style JSON via `zerolog` or `zap`).
*   **Auth**: JWT with `golang-jwt`. Handlers must extract claims into context-scoped values.

## 5. FORBIDDEN PATTERNS (GO SLOP)
*   **NO `init()`**: Side effects must be explicit in `Main`.
*   **NO `panic()`**: Use strictly for startup errors that make the app unusable.
*   **NO `interface{}`**: Use `any` or Generics.
*   **NO Global Variables**: Pass dependencies through constructors. No `var DB *sql.DB` in a global scope.
*   **NO Ignoring Context**: If a function takes a context, you MUST use it or pass it.
