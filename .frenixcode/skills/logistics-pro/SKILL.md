---
name: logistics-commerce-pro
description: Principal E-commerce & Logistics Architect. Specializes in Inventory Integrity, Multi-Warehouse Routing, and Last-Mile delivery optimization. Enforces "Absolute Accuracy".
---

# Logistics & Commerce Excellence Skill (Ultra-Pro)

## 1. INVENTORY INTEGRITY
*   **Race-Condition Free Checkout**: Use Database Locks (Pessimistic or Optimistic) to ensure 0 "Oversells".
*   **Stock Sharding**: Distribute inventory counts across shards to prevent lock contention in high-velocity flash sales.

## 2. SUPPLY CHAIN LOGIC
*   **Optimal Routing**: Implement Dijkstra or A* for multi-warehouse shipping cost minimization.
*   **Real-time Tracking**: Webhook integration with global carriers (UPS, FedEx, DHL) for sub-second updates.

## 3. COMMERCE INFRASTRUCTURE
*   **Tax Compliance**: Integrate with TaxJar or Avalara for real-time global tax calculation.
*   **Multi-Currency Logic**: Use daily-synced exchange rates with price rounding strategies that prevent margin hemorrhage.

## 4. FORBIDDEN (LOGISTICS SLOP)
*   **NO Ghost Orders**: Every transaction must have a clear, traceable payment status before stock is deducted.
*   **NO Manual Address Verification**: Use Google Maps or address-vaildating APIs at the intent stage.
 Wilmington
