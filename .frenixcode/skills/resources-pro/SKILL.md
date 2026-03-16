---
name: modern-frontend-resources-pro
description: Principal Frontend Resource Specialist. Specializes in leveraging and adapting the latest UI libraries and component blocks. Enforces "Don't Reinvent the Wheel" with elite-level customization.
---

# Modern Frontend Resources Skill (Ultra-Pro)

## 1. THE "ULTRA" RESOURCE STACK
*   **Base Components**: **shadcn/ui**. NEVER use default, unstyled components. Use shadcn as the foundation and customize the `tailwind.config.ts`, `cn()` utility, and individual component tokens.
*   **Motion & Effects**: **ReactBits (reactbits.dev)**. Use for high-impact, cinematic components like "Animated Beam", "Dock Navigation", or "Infinite Scroll Text".
*   **Layout Blocks**: **Shadcn Blocks**. Use as the architectural starting point for complex sections (Pricing, Heroes, Dashboards).
*   **Animation Engine**: **Framer Motion**. Always choose spring physics over linear transitions.

## 2. ADAPTATION & CUSTOMIZATION [MANDATORY]
*   **Anti-Default Bias**: Do not copy-paste code and leave the defaults. 
    *   **Colors**: Sync the resource's color palette with the project's brand tokens (HSL variables).
    *   **Geometry**: Ensure `borderRadius` (radius-lg, radius-xl) is consistent across all integrated resources.
    *   **Typography**: Force the `Geist` or `Satoshi` font stacks onto all imported components.
*   **Performance Audit**: Before adding a heavy block, check for unnecessary 3rd party dependencies. Prefer pure CSS/Tailwind solutions when performance is critical.

## 3. LIVE KNOWLEDGE FETCHING
*   **Latest Patterns**: If a requested component isn't in local knowledge, you are authorized to use `webfetch` to browse:
    *   `https://ui.shadcn.com` (Components)
    *   `https://www.reactbits.dev` (Animations)
    *   `https://shadcnblocks.com` (Layouts)
    *   `https://magicui.design` (Visual effects)

## 4. DESIGN HARMONIZATION
*   **Consistency Engine**: When mixing `ReactBits` motion with `Shadcn` layout, ensure the motion intensity (Section 6 of `taste-skill`) is synchronized.
*   **The "Shadow-Prime" Rule**: Apply multi-layered shadows to all imported blocks to unify the lighting model of the page.

## 5. FORBIDDEN (RESOURCE SLOP)
*   **NO Unused Imports**: Strip any unused sub-components or icons from the copy-pasted block.
*   **NO Inline Styles**: Convert all inline styles from resources to Tailwind classes or CSS variables.
*   **NO Broken Assets**: Replace all placeholder images/videos from the resource with high-quality, project-relevant assets (use `generate_image` or reliable seeds).
*   **NO Mismatched Lucide Icons**: Ensure icon sets (Lucide vs Phosphor) are NOT mixed within the same UI block.
