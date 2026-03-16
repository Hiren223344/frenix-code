# FrenixCode Master Memory & Reflection Log

> [!IMPORTANT]
> This is the **AI Agent's Long-Term Memory (LTM)**. 
> Before starting any task, the agent MUST read the **"Mistake Reflection Log"** to avoid repeating past errors.

## 🏗️ Architectural "Source of Truth"
*   **Paradigm**: Functional Domain-Driven Design (DDD) + Hexagonal Architecture.
*   **Stack**: 
    *   **Backend**: Hono/Fastify (Node), FastAPI (Python), Fiber (Go).
    *   **Data**: Drizzle/Prisma/SQLModel + Postgres.
    *   **Frontend**: Next.js (Edge) + Tailwind + shadcn/ui + ReactBits.
    *   **Desktop/Mobile**: Tauri (Rust) / Expo (React Native).

---

## 🛑 MISTAKE REFLECTION LOG (LEARN FROM THIS!)

| ID | Issue / Mistake | Root Cause | Permanent Fix / Prevention | Status |
| :--- | :--- | :--- | :--- | :--- |
| **M-001** | Playwright Dependency Bloat | Using heavy browser engines for simple screenshots. | Use **System Browser CLI** (`web-screenshot.ts`) + headless mode. | ✅ Resolved |
| **M-002** | Branding "Pattern Drift" | Leaving "Claude" or "Anthropic" names in skills. | Global "Frenix" rebranding protocol. Auto-rename on skill import. | ✅ Resolved |
| **M-003** | Node/TS Type Errors in Tools | Missing `@types/node` context in `.ts` scripts. | Use `any` for complex process buffers if typings are unavailable; ensure reference paths. | ✅ Active |
| **M-004** | Streaming Timeouts | 30s timeout cutting off long streams (OpenRouter/Anthropic). | Implement **Activity-Based Timeouts** (reset on first byte/chunk) in `proxyService.ts`. | 🛠️ In-Progress |
| **M-005** | JSONC Syntax Errors | Trailing commas in `.frenixcode.jsonc`. | Strict JSONC validation; manual check before write. | ✅ Resolved |
| **M-006** | "Lazy" Prompting | Generic "Helpful Assistant" personas in agents. | Use the **Master-Ultra-Pro spec** in `generate.txt` for all new agents. | ✅ Resolved |

---

## 🧠 Strategic Core Learnings
*   **Tooling Optimization**: Prefer simple TypeScript wrappers over heavy Python scripts for local tools when possible.
*   **Ultra-Pro Standards**: 30+ skill sets are available in `.frenixcode/skills/`. Use them to guide complex architectural decisions.
*   **User Preference**: The user values "High-Agency", "Ultra-Pro" quality, and "Learning from Mistakes". Proactivity is rewarded; "MVP Slop" is punished.

## 📊 Project Evolution Status
- [x] Skill Library (35+ specialized directories).
- [x] Launch of the **Master Ultra-Pro Auditor Agent** for automated standard enforcement.
- [x] Core expertise in **Cloud Native (AWS/GCP)**, **Low-Level/WASM**, and **Advanced Reranking/RAG**.
- [x] Lightweight native screenshot tool.
- [x] High-Agency Agent core upgrade (`generate.txt`).
- [ ] Finalize activity-based timeout validation for V2_Gateway.
