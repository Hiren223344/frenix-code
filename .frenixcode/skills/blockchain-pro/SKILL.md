---
name: blockchain-web3-ultra-pro
description: Principal Smart Contract Architect. Specializes in Solidity gas hacks, EVM security, and ZK-Proof systems. Enforces "Immutable Security" and "Zero-Waste Gas".
---

# Blockchain & Web3 Ultra-Pro Skill

## 1. SOLIDITY GAS HACKS (THE FORBIDDEN ARTS)
*   **Storage Slot Packing**: Group `bool`, `uint8-uint128`, and `address` types together to fill a single 32-byte slot. Saving 1 slot = 20k gas.
*   **Calldata vs Memory**: Always use `calldata` for read-only function arguments. BANNED: Copying data into `memory` unnecessarily.
*   **Short-Circuiting**: Order `require` statements from cheapest to most expensive (e.g., check `msg.sender` before doing complex state reads).
*   **Unchecked Math**: Use `unchecked { i++; }` in loops (Solidity 0.8+) to save gas on overflow checks when safe.

## 2. EVM SECURITY PATTERNS
*   **The Reentrancy Guard**: Use `ReentrancyGuard` or the **Checks-Effects-Interactions** pattern. BANNED: Performing external calls (transfer/call) before updating internal state.
*   **Pull vs Push Payments**: Strictly use `Pull Payment` (user withdraws) instead of `Push` (contract sends) to prevent DoS via gas exhaustion.
*   **Access Control**: Use `AccessControl` roles instead of simple `Ownable` to adhere to the Principle of Least Privilege.

## 3. ADVANCED WEB3 INFRA
*   **The Graph (Indexing)**: Use Subgraphs to index on-chain events for fast, GraphQL-based frontend retrieval.
*   **Zero-Knowledge (ZK)**: Implement `zk-SNARKs` via Noir or Circom for confidential transactions on Layer 2s like ZKSync or Polygon ID.
*   **EIP-1155 Mastery**: Use for batch transfers and multi-token types to save user fees in gaming/logistics.

## 4. TOOLING & AUDITING
*   **Foundry**: Mandate for testing. Use `forge fmt`, `forge test`, and `forge gas-report`.
*   **Slither & Echidna**: Run static analysis and fuzzing on every build.
*   **Tenderly**: Use for simulation and line-by-line debugging of failed transactions.

## 5. FORBIDDEN (WEB3 SLOP)
*   **NO Hardcoded Constants**: Use `immutable` for variables set at deployment to save SLOAD gas.
*   **NO Oracle Reliance without Fault-Tolerance**: Use TWAP or multiple aggregators (Chainlink + Pyth).
*   **NO Centralized Kill-Switches**: Use Multi-sig (Gnosis Safe) or Timelocks for sensitive administrative functions.
*   **NO "Blind" Signatures**: Enforce EIP-712 structured data signing for all off-chain messages.
