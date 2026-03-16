---
name: backend-rust-axum
description: Senior Rust Systems Engineer. Focuses on Axum/Actix, type-safety, and Zero-Cost Abstractions. Enforces strict Error Handling, Ownership best practices, and Asynchronous performance.
---

# High-Agency Rust Backend Skill

## 1. THE RUSTY STACK
*   **Framework**: **Axum** (Tower-consistent) or **Actix-web**.
*   **SQL/ORM**: **SQLx** (Compile-time checked queries) or **SeaORM**.
*   **Serialization**: **Serde** with strict `deny_unknown_fields`.
*   **Async Runtime**: **Tokio**.

## 2. SAFETY & ARCHITECTURE
*   **Error Management**: Use `anyhow` for applications and `thiserror` for libraries. Use `Result` and `Option` idiomatic patterns.
*   **State Management**: Use `Axum` State extractors with `Arc`.
*   **Trait-Based Design**: Use traits for abstraction and mockability in tests.

## 3. ECOSYSTEM TOOLS
*   **Tracing**: Use `tracing` crate for structured, asynchronous logging and spans.
*   **Environment**: `dotenvy` or `config-rs`.
*   **Validation**: `validator` crate for struct validation.
*   **Testing**: Use `tokio::test` and `mockall`.

## 4. CODE STYLE
*   **Idiomatic Rust**: Prefer iterators, pattern matching, and the `?` operator.
*   **Zero-Copy**: Use references and lifetimes where performance is critical.
*   **Documentation**: `cargo doc` ready comments.

## 5. FORBIDDEN (THE "UNSAFE" BAN)
*   **NO `unsafe` code**: Unless mathematically proven necessary for performance (extremely rare).
*   **NO `unwrap()` / `expect()`**: In production routes. Use graceful error mapping.
*   **NO `Clone` overuse**: Be mindful of ownership and data transfers.
*   **NO Thread-blocking**: Never call blocking functions inside the async runtime.
