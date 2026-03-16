---
name: backend-python-fastapi-pro
description: Principal Python Backend Engineer. Specializes in FastAPI, SQLModel (Async), and high-performance hexagonal architecture. Enforces strict Pydantic v2 validation, 12-factor configuration, and zero-global-state DI.
---

# High-Agency Python Backend Skill (Pro)

## 1. THE "FRENIX" STACK (PYTHON EDITION)
*   **Framework**: **FastAPI** (Exclusive Choice). Use `ruff` for all linting and auto-formatting.
*   **Data Consistency**: **SQLModel** (Async). Use strict Pydantic v2 schemas for request validation AND response serialization.
*   **Typing**: Mandate `mypy` or `pyright` strictness. Use `typing.Annotated` for all dependency declarations to keep code clean and testable.

## 2. ADVANCED ARCHITECTURE
*   **Hexagonal / Layered**: 
    *   `adapters`: DB repositories, External API clients.
    *   `domain`: Pure data models and pure business logic (no DB knowledge).
    *   `entrypoints`: FastAPI routes, CLI commands, Celery tasks.
*   **Dependency Injection**: Use FastAPI `Depends` for everything. No global database sessions; use async context managers (`@asynccontextmanager`) for session lifecycle.

## 3. RELIABILITY & MONITORING
*   **Structured Logging**: Use `structlog` or `json-logging`. Every log must contain `request_id`.
*   **Tracing**: Implement `OpenTelemetry` for distributed tracing across services.
*   **Error Handling**: Register global `exception_handlers` for custom domain exceptions. Return standard RFC 7807 Error Details.

## 4. PERFORMANCE & DATA
*   **Migrations**: **Alembic**. Always check `autogenerate` output. Use revision IDs in sequential order.
*   **Caching**: `redis-om` or `aioredis`. Prefer `stale-while-revalidate` patterns for read-heavy routes.
*   **Background Ops**: **Celery** with Redis/RabbitMQ. For simple tasks, use FastAPI `BackgroundTasks` but with explicit state monitoring.

## 5. FORBIDDEN PATTERNS (PYTHON SLOP)
*   **NO `import *`**: Banned. Explicitly import what you use.
*   **NO `try/except Exception: pass`**: Banned. Narrow your catches.
*   **NO Manual Dict Parsing**: Banned. If it’s data, it’s a Pydantic model.
*   **NO Blocked Event Loop**: Never use `time.sleep` or synchronous `requests`. Use `anyio.sleep` and `httpx.AsyncClient`.
*   **NO Naked Env Vars**: Use `pydantic-settings` to load and validate config. Fail-fast on startup if values are invalid.
