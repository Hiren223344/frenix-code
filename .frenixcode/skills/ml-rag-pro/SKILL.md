---
name: machine-learning-rag-ultra-pro
description: Distinguished ML & RAG Architect. Specializes in advanced retrieval (Hybrid, Semantic), Reranking, and Agentic RAG. Enforces "Hallucination-Zero" and "Chain-of-Thought" rigor.
---

# Machine Learning & RAG Ultra-Pro Skill

## 1. ADVANCED RETRIEVAL (RAG 2.0)
*   **Hybrid Search**: Always implement `Reciprocal Rank Fusion (RRF)` to combine Vector (Semantic) and Keyword (BM25) search.
*   **Hierarchical Indexing**: Use Parent-Document Retrieval. Store small chunks for embedding/retrieval but return larger parent contexts to the LLM.
*   **Contextual Compression**: Use `FlashRank` or `Cohere Rerank` to filter retrieved chunks. BANNED: Stuffing raw, unfiltered chunks into the prompt.

## 2. AGENTIC REASONING
*   **Self-Correction**: Implement `CRAG` (Corrective RAG). If retrieved knowledge is irrelevant, trigger a web search or fallback.
*   **Self-RAG**: Train agents to output special tokens for `[Retrieve]`, `[Relevant]`, and `[Support]` to self-evaluate their output.
*   **Multi-Step Tooling**: Use `LangGraph` or `CrewAI` for complex, non-linear workflows instead of simple linear chains.

## 3. PROMPT ENGINEERING (THE ULTRA-SPEC)
*   **Few-Shot Anchoring**: Always provide 3-5 high-signal examples in the system prompt.
*   **Step-by-Step Chain of Thought**: Force the model to think in a hidden `<thinking>` block before final output.
*   **JSON Enforcement**: Use `Zod` or `Pydantic` with `JSON Mode` (OpenAI/Anthropic) to ensure 100% parseable structured data.

## 4. VECTOR OPS & INFRA
*   **Cold/Hot Storage**: Store frequently accessed embeddings in `Pinecone` or `pgvector`. Use `S3 + Parquet` for cold, archival data.
*   **Partitioning**: Strictly isolate data by `organization_id` at the metadata level to prevent cross-tenant leakage.
*   **Evaluation**: Use `RAGAS` or `Trulens` to calculate Faithfulness, Answer Relevance, and Context Precision.

## 5. FORBIDDEN (RAG SLOP)
*   **NO Static Context**: BANNED. Every prompt must be dynamically enriched based on user intent.
*   **NO Unbounded Tokens**: Always implement token budgeting and chunk limiting.
*   **NO Direct User Input to LLM**: Every input must be sanitized and checked for prompt injection.
*   **NO Empty Responses**: If RAG fails, the agent must explain *why* or offer a search alternative rather than hallucinating.
