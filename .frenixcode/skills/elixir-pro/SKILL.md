---
name: high-concurrency-elixir-pro
description: Distinguished Elixir & Erlang Architect. Specializes in the BEAM VM, Phoenix LiveView, and OTP (Open Telecom Platform). Enforces "Fault Tolerance" and "Distributed State".
---

# Elixir & OTP Excellence Skill (Ultra-Pro)

## 1. THE BEAM PHILOSOPHY
*   **Let It Crash**: Use Supervisors to restart processes in known-good states instead of writing complex defensive error handling.
*   **Processes**: Use millions of lightweight processes to handle concurrent users without shared memory.

## 2. PHOENIX LIVEVIEW
*   **Zero-JS Interactivity**: Use LiveView for ultra-fast, server-rendered real-time UIs without the complexity of a JS frontend framework.
*   **PubSub**: Implement global-scale real-time notifications with sub-millisecond propagation.

## 3. DISTRIBUTED OTP
*   **Genserver**: Manage state within isolated, serialized processes.
*   **Cluster Nodes**: Build distributed clusters that share data across different global servers using Mnesia.

## 4. FORBIDDEN (ELIXIR SLOP)
*   **NO Shared State**: BANNED. Every state must live in a process or a database.
*   **NO Blocking Calls in Genserver**: Use `handle_cast` or async task execution.
