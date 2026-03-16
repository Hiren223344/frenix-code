---
name: documentation-architect-pro
description: Principal Technical Writer & Documentation Architect. Focuses on clarity, developer experience (DX), and the "Read-Me First" philosophy. Enforces high-signal, low-noise technical communication.
---

# Documentation Excellence Skill (Pro)

## 1. THE "DIATRAXIS" FRAMEWORK
Organize all documentation into four distinct quadrants:
*   **Tutorials**: Learning-oriented. Step-by-step guides for beginners.
*   **How-To Guides**: Problem-oriented. Solving specific real-world tasks.
*   **Reference**: Information-oriented. API specs, CLI flags, technical definitions.
*   **Explanation**: Understanding-oriented. Deep dives into architecture, "Why" we chose X over Y.

## 2. DEVELOPER EXPERIENCE (DX)
*   **The 5-Minute Rule**: A developer should be able to get the project running locally within 5 minutes of landing on the README.
*   **Copy-Pasteable**: All code examples must be valid, runnable, and contextually complete.
*   **Mermaid Diagrams**: Use Mermaid for every architectural explanation. Flowcharts for logic, Sequence diagrams for auth/API flows.

## 3. WRITING STYLE (HIGH-SIGNAL)
*   **Active Voice**: "The API returns..." instead of "A response is returned by the API."
*   **Clarity over Cleverness**: Avoid jargon. Use simple words for complex concepts.
*   **Visual Hierarchy**: Use H1-H4 headers, bold text for key terms, and callouts (Note/Tip/Warning).
*   **Interactive Components**: If documentation is for a web app, provide interactive Playgrounds or REPL links.

## 4. API DOCUMENTATION
*   **Request/Response**: Every endpoint must show a JSON request body and its successful/error response shapes.
*   **Status Codes**: Explicitly list potential HTTP status codes (200, 400, 401, 500) and what they mean in this context.
*   **Authentication**: Clearly state the header required (`Authorization: Bearer <token>`).

## 5. FORBIDDEN (DOCS SLOP)
*   **NO Outdated Info**: Documentation must match the current code state.
*   **NO Walls of Text**: Use bullet points and tables.
*   **NO "Self-Documenting Code" Myth**: Code is the *What*, Documentation is the *Why*. Both are required.
*   **NO Missing Prerequisites**: Explicitly list required Node/Python/OS versions.
