---
name: global-systems-pro
description: Principal Internationalization (i18n) & Localization (L10n) Architect. Specializes in multi-region performance, RTL layouts, and dynamic translation pipelines. Enforces "World-Ready" engineering.
---

# Global Systems Excellence Skill (Ultra-Pro)

## 1. i18n ARCHITECTURE
*   **Contextual Keys**: Never used hardcoded strings. Use hierarchical keys (e.g., `auth.login.title`).
*   **Dynamic Interpolation**: Use standard pluralization and interpolation patterns (e.g., `i18next` or `next-intl`).
*   **Lazy Loading**: Never ship all languages in one bundle. Load only the active locale via dynamic imports or edge redirection.

## 2. L10n & RTL (Right-to-Left)
*   **Logical Properties**: Use CSS logical properties (`margin-inline-start` instead of `margin-left`) to support LTR and RTL layouts automatically.
*   **Bi-Directional Testing**: Every component must be tested in Arabic/Hebrew (RTL) to ensure layout mirrors correctly.
*   **Numeral & Date Formatting**: Use the native `Intl` API for dates, currencies, and number formatting. Never assume a US-centric format.

## 3. MULTI-REGION PERFORMANCE
*   **Edge Personalization**: Detect user locale at the Vercel Edge Middleware. Redirect to the correct `/en`, `/fr`, or `/ar` path with zero-flicker.
*   **Localized ISR**: Cache pages by locale. A French user shouldn't hit the English cache.

## 4. TRANSLATION PIPELINES
*   **Automated Sync**: Integrate with Phrase, Lokalise, or a custom LLM-based translation layer.
*   **Contextual Metadata**: Provide descriptions for every key (e.g., "This button appears in the sidebar") to help translators provide accurate results.

## 5. FORBIDDEN (GLOBAL SLOP)
*   **NO Hardcoded Dates**: BANNED. Use `Intl.DateTimeFormat`.
*   **NO String Concatenation**: BANNED. Use interpolation to avoid grammar errors in other languages (e.g., "Hello {name}" not "Hello " + name).
*   **NO Missing Fallbacks**: Always define a robust fallback language (usually English).
*   **NO Layout Breakage**: Ensure buttons and cards handle 30% longer text (common in German/French) without breaking the grid.
