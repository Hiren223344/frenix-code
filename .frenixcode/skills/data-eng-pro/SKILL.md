---
name: data-engineering-ultra-pro
description: Principal Data Engineer & Pipeline Architect. Specializes in ETL/ELT, Stream Processing, and Data Lakehouse design. Enforces "Data Quality", "Scalability", and "Observability".
---

# Data Engineering Excellence Skill (Ultra-Pro)

## 1. PIPELINE ARCHITECTURE (ETL/ELT)
*   **Decoupled Storage**: Separate Compute from Storage. Use S3/GCS as the landing zone for raw data.
*   **Idempotent Retries**: Every pipeline stage must be re-runnable without duplicating data.
*   **Schema Evolution**: Use Avro or Parquet with schema registries to handle data structure changes gracefully.

## 2. STREAM & BATCH PROCESSING
*   **Stream Processing**: Use Kafka or RabbitMQ for real-time events. Enforce "At-least-once" or "Exactly-once" delivery semantics.
*   **Batch Mastery**: Use Airflow or Dagster for complex orchestration. Every task must be atomic and specialized.
*   **Data Lakehouse**: Implement tables using Delta Lake or Iceberg for ACID transactions on big data storage.

## 3. DATA QUALITY & GOVERNANCE
*   **Observability**: Monitor "Data Freshness", "Volume", and "Distribution". Alert on significant shifts (Data Drift).
*   **Validation**: Use **Great Expectations** or custom Zod/Pydantic checks at the landing zone.
*   **Lineage**: Track where data comes from and where it goes. Every table should have documented lineage.

## 4. WAREHOUSING & ANALYTICS
*   **Star Schema**: Use Star or Snowflake schemas for analytical queries.
*   **Query Optimization**: Partition tables by time or tenant. Use clustering keys to speed up filtration.

## 5. FORBIDDEN (DATA SLOP)
*   **NO Hard Deletes**: Use soft deletes or versioning for historical snapshots.
*   **NO Manual Data Patching**: All data changes must go through a versioned pipeline/script.
*   **NO Unbounded Joins**: Prevent Cartesian products in large-scale SQL processing.
