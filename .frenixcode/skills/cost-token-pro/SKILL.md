---
name: cost-token-management-pro
description: Principal AI Cost Engineer. Specializes in Token Optimization, Context Window Management, and LLM Economics. Enforces "Cost-Aware" architectural decisions and high-efficiency prompting.
---

# Cost & Token Management Skill (Ultra-Pro)

## 1. LLM ECONOMICS & ARCHITECTURE
*   **Tiered Model Routing**: Use strictly the "Cheapest Model for the Task" philosophy.
    *   **Level 1 (Haiku/Flash)**: Summarization, basic classification, and formatting.
    *   **Level 2 (Sonnet/GPT-4o)**: Complex multi-step reasoning and logical analysis.
    *   **Level 3 (Opus 4.6/DeepThink)**: Hardcode logic, architectural design, and ultimate quality checks.
*   **Caching First**: Implement **Prompt Caching** (e.g., Anthropic Prompt Caching) for all recurring system prompts and large context blocks. This reduces cost by 90% for repeated turns.

## 2. TOKEN OPTIMIZATION (THE SURGICAL APPROACH)
*   **Context Compaction**: Proactively "compact" long conversation histories. Keep the important "state" but discard the chat noise.
*   **Minimalist Prompting**: Strip all "politeness" and filler from system prompts. Every character costs money. Use high-density technical instructions.
*   **Selective RAG**: Don't dump the whole document into context. Use Rerankers to pick ONLY the top 3-5 high-signal chunks.

## 3. MONITORING & BUDGETING
*   **Streaming Budgets**: Monitor token usage in real-time. If a generation exceeds a `max_token` safety limit, terminate and fail-fast.
*   **Cost-Aware Logs**: Every log entry for an AI call must include: `prompt_tokens`, `completion_tokens`, and `estimated_usd_cost`.
*   **Rate Limiting by Cost**: Limit users based on their $ spend, not just request count.

## 4. CONTEXT WINDOW MANAGEMENT
*   **Sliding Windows**: For long documents, use a sliding window with overlap to maintain continuity without hitting the context ceiling.
*   **Summarization Chains**: Summarize the "History" into a high-density "Memory" block every 10 turns to reset the context window.

## 5. FORBIDDEN (COST SLOP)
*   **NO Naked Context**: Never send raw, un-trimmed data to an expensive model.
*   **NO Infinite Retries**: Set a maximum "Retry Budget" for failing LLM calls.
*   **NO Redundant System Prompts**: Ensure the system prompt is only sent once per session when caching is available.
*   **NO "Blind" calls**: Every call must define `max_tokens` and a specific `stop_sequence`.
