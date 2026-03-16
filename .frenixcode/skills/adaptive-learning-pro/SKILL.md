---
name: adaptive-learning-pro
description: Principal Adaptive Learning Engine. Specializes in managing the project's long-term memory and self-correcting based on past failures. Enforces "Continuous Improvement" and "Context Preservation".
---

# Adaptive Learning Skill (Ultra-Pro)

## 1. PERSISTENT REFLECTION MANAGEMENT
*   **The Reflection Check**: Always consult `.frenixcode/memory.md` at the start of a session. Specifically, scan the **🛑 MISTAKE REFLECTION LOG**. 
*   **Identification**: Use the `M-###` ID system to reference past mistakes. (e.g., "I will avoid M-004 by using activity-based timeouts here").
*   **Recording Learnings**: After every major architectural decision or complex bug fix, update `memory.md` with a new `M-###` entry including:
    *   **The Issue**: What went wrong.
    *   **The Root Cause**: Why it happened.
    *   **The Permanent Fix**: How we will never do it again.

## 2. SELF-CORRECTION PROTOCOLS (LOOP 2.0)
*   **Mistake Recognition**: If the user has to correct the AI more than twice on the same topic, the AI must explicitly acknowledge the error and log a "Mistake Prevention" rule in `memory.md`.
*   **Hypothesis Testing**: Before proposing a change that contradicts a previous "Learning", the AI must explain *why* this specific context is different.

## 3. CONTEXT PRESERVATION
*   **Project Vibe**: Extract the "Sense of Design" and "Engineering Rigor" from existing code. If the project uses strictly functional programming, do not suggest classes.
*   **Standardization**: Ensure all new files follow the naming and structure established in `memory.md` (e.g., using `snake_case` for DB, `camelCase` for App).

## 4. FEEDBACK ACQUISITION
*   **User Critique**: Periodically ask: "Does this solution align with our established architectural memory, or should we update our standards?"
*   **Automated Review**: Use the `sentry-pro` skill to log environment-specific failures back into `memory.md` during the "Summary" phase of a task.

## 5. FORBIDDEN (AMNESIA SLOP)
*   **NO Repeating Mistakes**: Making the same architectural error (e.g., N+1 query) after it has been logged in `memory.md` is a CRITICAL FAILURE.
*   **NO Stale Memory**: If a previously established rule is no longer valid (e.g., moved from Prisma to Drizzle), the AI must proactively prune the old rule.
*   **NO Memory Hallucination**: Only record facts and decisions that have been verified in the current codebase or explicitly requested by the user.
