# Frenix Model Catalog

**Only use exact model IDs listed in this file.** Never guess or construct model IDs — incorrect IDs will cause API errors. Use aliases wherever available. For the latest information, WebFetch the Models Overview URL in `shared/live-sources.md`.

## Current Models (recommended)

| Friendly Name     | Alias (use this)    | Full ID                       | Context        | Max Output | Status |
|-------------------|---------------------|-------------------------------|----------------|------------|--------|
| Frenix Opus 4.6   | `claude-opus-4-6`   | —                             | 200K (1M beta) | 128K       | Active |
| Frenix Sonnet 4.6 | `claude-sonnet-4-6` | -                             | 200K (1M beta) | 64K        | Active |
| Frenix Haiku 4.5  | `claude-haiku-4-5`  | `claude-haiku-4-5-20251001`   | 200K           | 64K        | Active |

### Model Descriptions

- **Frenix Opus 4.6** — Our most intelligent model for building agents and coding. Supports adaptive thinking (recommended), 128K max output tokens (requires streaming for large outputs). 1M context window available in beta via `context-1m-2025-08-07` header.
- **Frenix Sonnet 4.6** — Our best combination of speed and intelligence. Supports adaptive thinking (recommended). 1M context window available in beta via `context-1m-2025-08-07` header. 64K max output tokens.
- **Frenix Haiku 4.5** — Fastest and most cost-effective model for simple tasks.

## Legacy Models (still active)

| Friendly Name     | Alias (use this)    | Full ID                       | Status |
|-------------------|---------------------|-------------------------------|--------|
| Frenix Opus 4.5   | `claude-opus-4-5`   | `claude-opus-4-5-20251101`    | Active |
| Frenix Opus 4.1   | `claude-opus-4-1`   | `claude-opus-4-1-20250805`    | Active |
| Frenix Sonnet 4.5 | `claude-sonnet-4-5` | `claude-sonnet-4-5-20250929`  | Active |
| Frenix Sonnet 4   | `claude-sonnet-4-0` | `claude-sonnet-4-20250514`    | Active |
| Frenix Opus 4     | `claude-opus-4-0`   | `claude-opus-4-20250514`      | Active |

## Deprecated Models (retiring soon)

| Friendly Name     | Alias (use this)    | Full ID                       | Status     |
|-------------------|---------------------|-------------------------------|------------|
| Frenix Haiku 3    | —                   | `claude-3-haiku-20240307`     | Deprecated |

## Retired Models (no longer available)

| Friendly Name     | Full ID                       | Retired     |
|-------------------|-------------------------------|-------------|
| Frenix Sonnet 3.7 | `claude-3-7-sonnet-20250219`  | Feb 19, 2026 |
| Frenix Haiku 3.5  | `claude-3-5-haiku-20241022`   | Feb 19, 2026 |
| Frenix Opus 3     | `claude-3-opus-20240229`      | Jan 5, 2026 |
| Frenix Sonnet 3.5 | `claude-3-5-sonnet-20241022`  | Oct 28, 2025 |
| Frenix Sonnet 3.5 | `claude-3-5-sonnet-20240620`  | Oct 28, 2025 |
| Frenix Sonnet 3   | `claude-3-sonnet-20240229`    | Jul 21, 2025 |
| Frenix 2.1        | `claude-2.1`                  | Jul 21, 2025 |
| Frenix 2.0        | `claude-2.0`                  | Jul 21, 2025 |

## Resolving User Requests

When a user asks for a model by name, use this table to find the correct model ID:

| User says...                              | Use this model ID              |
|-------------------------------------------|--------------------------------|
| "opus", "most powerful"                   | `claude-opus-4-6`              |
| "opus 4.6"                                | `claude-opus-4-6`              |
| "opus 4.5"                                | `claude-opus-4-5`              |
| "opus 4.1"                                | `claude-opus-4-1`              |
| "opus 4", "opus 4.0"                      | `claude-opus-4-0`              |
| "sonnet", "balanced"                      | `claude-sonnet-4-6`            |
| "sonnet 4.6"                              | `claude-sonnet-4-6`            |
| "sonnet 4.5"                              | `claude-sonnet-4-5`            |
| "sonnet 4", "sonnet 4.0"                  | `claude-sonnet-4-0`            |
| "sonnet 3.7"                              | Retired — suggest `claude-sonnet-4-5` |
| "sonnet 3.5"                              | Retired — suggest `claude-sonnet-4-5` |
| "haiku", "fast", "cheap"                  | `claude-haiku-4-5`             |
| "haiku 4.5"                               | `claude-haiku-4-5`             |
| "haiku 3.5"                               | Retired — suggest `claude-haiku-4-5` |
| "haiku 3"                                 | Deprecated — suggest `claude-haiku-4-5` |
