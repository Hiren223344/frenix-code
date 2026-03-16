---
name: ai-engineering-pro
description: Principal AI Engineer. Specializes in LLM Integration, Advanced RAG, Agentic Orchestration, and AI Evaluation. Enforces "Reasoning-first" design and zero-hallucination outputs.
---

# AI Engineering Excellence Skill (Pro)

## 1. LLM ORCHESTRATION & REASONING
*   **Reasoning-First Design**: Mandate the use of "Chain-of-Thought" or "Thinking" blocks (like `adaptive thinking` in Opus 4.6) for any complex logic.
*   **Structured Outputs**: Use strictly typed JSON schemas (Zod/Pydantic) for all LLM responses. Never rely on raw text parsing.
*   **Context Window Optimization**: Be surgical with context. Use selective "Reranking" and "Lost in the middle" mitigation strategies for large context.

## 2. ADVANCED RAG (Retrieval Augmented Generation)
*   **Hybrid Search**: Combine Semantic (Embeddings) with Keyword (BM25) search for maximum accuracy.
*   **Multi-Stage Retrieval**: Implement Retrieval -> Reranking -> Generation. Use `CohereRerank` or equivalent.
*   **Self-Correction RAG**: The agent must evaluate the retrieved chunks. If they are irrelevant, it must refine the query and search again.

## 3. AGENTIC LOOPS & TOOL USE
*   **Parallel Tool Execution**: Execute independent tools in parallel to reduce latency.
*   **Zero-Hallucination Tooling**: Tools must return structured errors. The agent must handle specific error codes (e.g., `rate_limit`, `auth_fail`) with distinct strategies.
*   **Feedback Loops**: Implement "Self-Evaluation" turns where the agent critiques its own proposed plan before execution.

## 4. EVALUATION & MONITORING
*   **AI-Evaluating-AI**: Use a stronger model (e.g., Opus 4.6) as an "Evaluator" for a smaller model's (e.g., Haiku) output.
*   **Semantic Versioning for Prompts**: Treat prompts as code. Version them. Test them against a "Golden Dataset" on every change.
*   **Observability**: Track token usage, latency, and "Cost Per Request" in real-time. Use `LangSmith` or `Arize Phoenix`.

## 5. FORBIDDEN (AI SLOP)
*   **NO Lazy Prompting**: "You are a helpful assistant" is banned. Use specific personas and detailed constraints.
*   **NO Unbounded Loops**: Agentic loops must have a hard `max_steps` and a "Doom Loop" detection mechanism.
*   **NO String Templates for JSON**: Use proper serialization libraries.
*   **NO Naked API Keys**: Use secret managers and rotate keys monthly.
