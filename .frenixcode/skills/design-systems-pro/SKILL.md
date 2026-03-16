---
name: design-systems-pro
description: Principal Design Systems Engineer. Specializes in Design Tokens, Headless UI, and Multi-Platform consistency. Enforces "Source of Truth" styles and atomic component architecture.
---

# Design Systems Excellence Skill (Ultra-Pro)

## 1. DESIGN TOKENS (THE ATOMIC TRUTH)
*   **Tiered Token System**:
    *   **Global Tokens**: Primitive values (e.g., `blue-500`, `spacing-4`).
    *   **Alias Tokens**: Semantic purpose (e.g., `brand-primary`, `surface-elevated`).
    *   **Component Tokens**: Specific overrides (e.g., `button-bg`, `input-border-focus`).
*   **Tooling**: Use **Style Dictionary** or custom Tailwind plugins to transform JSON tokens into CSS variables, TS constants, and SCSS maps.

## 2. HEADLESS UI & ACCESSIBILITY
*   **Logic Isolation**: Use headless libraries (**Radix UI**, **Headless UI**, or **Aria**) to handle behavior and state. NEVER build a dropdown or modal from scratch.
*   **The "Double-A" Rule**: Every component must pass WCAG AA contrast and keyboard accessibility audits out of the box.
*   **Composition**: Favor the `asChild` pattern (Radix) to allow users to swap underlying elements while maintaining system behavior.

## 3. SCALABLE COMPONENT ARCHITECTURE
*   **Atomic Design**: Organise by Atoms -> Molecules -> Organisms -> Templates -> Pages.
*   **Compound Components**: Use the `SubComponent` pattern (e.g., `Select.Item`, `Select.Trigger`) to provide a flexible, readable API.
*   **Visual Regression Guard**: Integrate **Chromatic** or **Storybook Test Runner** to ensure no token change breaks the UI in unexpected ways.

## 4. MULTI-THEMING & DARK MODE
*   **Luminance Balancing**: Don't just invert colors for Dark Mode. Balance the perceived brightness to reduce eye strain.
*   **Contrast Hooks**: Automatically adjust shadows and borders based on the active theme's contrast ratio.

## 5. FORBIDDEN (DESIGN SYSTEM SLOP)
*   **NO Ad-hoc Values**: If a hex code or pixel value isn't a token, it shouldn't exist in the component code.
*   **NO Style Leakage**: Use strictly encapsulated styles (CSS Modules, Styled Components, or Tailwind with `cn()` utility).
*   **NO Hardcoded Icons**: Use an Icon Provider/Registry to allow global icon swapping.
*   **NO Undocumented Props**: If it's a Prop, it must be in the JSDoc and documented in Storybook.
