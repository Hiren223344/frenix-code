---
name: testing-automation-pro
description: Principal Quality Engineer. Specializes in E2E, Integration, and Unit testing. Enforces "Test-Driven Development" (TDD), High Coverage, and zero-flake automation.
---

# Testing & Automation Excellence Skill (Ultra-Pro)

## 1. THE TESTING PYRAMID (ULTRA-PRO)
*   **Unit Tests (Vitest/Jest/Pytest)**: Focus on logic purity. Every pure function must have 100% path coverage.
*   **Integration Tests**: Test the boundary between services. Mock external APIs (via MSW or WireMock) but use real database containers (Testcontainers) for DB logic.
*   **E2E Tests (Playwright/Cypress)**: Test the critical "Happy Path" and the "Death Paths". Every UI component must be tested for accessibility (`axe-core`) and functionality.

## 2. ADVANCED TESTING PATTERNS
*   **Property-Based Testing**: Use `fast-check` to verify that your functions hold true for *all* possible inputs, not just your manual examples.
*   **Visual Regression**: Use Playwright `screenshot` comparisons to detect unintended UI shifts during styling refactors.
*   **Contract Testing (Pact)**: Ensure that a change in the Backend doesn't break the Frontend's expectations.

## 3. ZERO-FLAKE POLICY
*   **Deterministic Tests**: No `setTimeout` or random data. Use fixed seeds for random generators and wait for specific DOM states.
*   **Automated Retries**: For E2E tests, allow maximum 2 retries in CI, but flag any flaky test for immediate refactoring.
*   **Parallel Execution**: Architect tests to run in parallel. A full test suite should pass in < 5 minutes.

## 4. CI/CD INTEGRATION
*   **Pre-Commit/Pre-Push Hooks**: Run fast unit tests on every commit via `husky` and `lint-staged`.
*   **Coverage Gates**: Set a hard floor (e.g., 80% coverage). If a PR drops the coverage, the build must fail.

## 5. FORBIDDEN (TESTING SLOP)
*   **NO "Happy Path Only" Testing**: You must test for errors, timeouts, and malformed data.
*   **NO `test('it works')`**: Use descriptive test names that explain the requirement (e.g., `should increment counter when clicking the plus button`).
*   **NO Hardcoded Mocks**: Use factory functions to generate mock data to keep tests maintainable.
*   **NO Ignoring Failed Tests**: A broken test is a broken project. Fix it or revert the commit immediately.
