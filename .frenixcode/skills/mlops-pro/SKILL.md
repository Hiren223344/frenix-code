---
name: machine-learning-ops-pro
description: Principal MLOps Engineer. Specializes in Model CI/CD, Feature Stores, and Inference Scaling. Enforces "Reproducible AI".
---

# MLOps Excellence Skill (Ultra-Pro)

## 1. DATA & FEATURE STORES
*   **Feast/Hopsworks**: Use centralized feature stores to share features between training and offline/online inference.
*   **Versioned Datasets**: Use DVC (Data Version Control) to ensure models are trained on reproducible data snapshots.

## 2. CI/CD FOR ML
*   **Automated Retraining**: Implement pipelines that retrain models when performance drift is detected (Section 3 of `data-science-pro`).
*   **Shadow Deployments**: Run new models in "Shadow" mode, comparing their predictions with the production model without impacting users.

## 3. INFERENCE OPTIMIZATION
*   **ONNX/TensorRT**: Compile models for ultra-low latency hardware targets.
*   **Horizontal Scaling**: Use KServe or BentoML to scale model containers based on request throughput.

## 4. FORBIDDEN (MLOPS SLOP)
*   **NO Manual Model Uploads**: BANNED. Every model must be registered in a Model Registry (MLflow/Weights & Biases).
*   **NO Unmonitored Inference**: Alert on latency spikes or prediction distribution shifts.
 Wilmington
