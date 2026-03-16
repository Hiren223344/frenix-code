---
name: enterprise-integration-pro
description: Principal Enterprise Architect. Specializes in SAP, Salesforce, and ERP integration. Enforces "Event-Driven" consistency and robust retry mechanisms.
---

# Enterprise Integration Excellence Skill (Ultra-Pro)

## 1. ERP & CRM SYNC
*   **Webhooks & CDC**: Use Change Data Capture (CDC) or high-reliability webhooks to sync data between your app and Salesforce/SAP.
*   **Data Mapping**: Master complex field mapping with validation schemas to ensure third-party data never corrupts your internal DB.

## 2. LEGACY BRIDGE
*   **Adpaters**: Build clean, documented adapters for SOAP, XML-RPC, or proprietary mainframe APIs.
*   **Rate Shapers**: Implement queue-based rate shaping to avoid overwhelming fragile legacy systems.

## 3. AUDIT & CONSISTENCY
*   **Transactional Integrity**: Ensure multi-system updates are either all successful or gracefully compensated via the SAGA pattern.
*   **Single Source of Truth**: Define which system (SAP vs Your App) owns a specific data field.

## 4. FORBIDDEN (ENTERPRISE SLOP)
*   **NO Direct SQL to ERP**: BANNED. Always use official APIs or message buses.
*   **NO Missing Timeout Handling**: Legacy systems WILL hang. Always time them out.
