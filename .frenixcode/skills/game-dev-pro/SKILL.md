---
name: game-dev-ultra-pro
description: Principal Game Architect. Specializes in ECS (Entity Component System), WGSL/GLSL shaders, and deterministic logic. Enforces "60FPS/120FPS" targets and "Zero-Lag" physics.
---

# Game Development Ultra-Pro Skill

## 1. RENDERING & SHADER ARCHITECTURE
*   **WebGPU/WebGL 2**: Target WebGPU for compute-heavy effects. Optimize draw calls via **Instanced Rendering** for millions of particles/objects.
*   **WGSL/GLSL Mastery**: Write fragmented shaders for high-fidelity post-processing (Bloom, Color Grading, SSR). Use Vertex shaders for efficient procedural mesh deformation.
*   **SDFs (Signed Distance Fields)**: Use for ultra-sharp UI rendering and compact 3D representations.

## 2. ECS (ENTITY COMPONENT SYSTEM)
*   **Data-Oriented Design**: Store components in contiguous memory arrays (SoA - Struct of Arrays) to maximize CPU cache hits.
*   **System Decoupling**: Isolate logic (Systems) from state (Components). BANNED: Monolithic "Player" or "Enemy" classes with hundreds of methods.
*   **Scaling**: Use ECS to handle >10k active, moving entities with zero frame drop.

## 3. PHYSICS & DETERMINISM
*   **Fixed Timestep**: All physics calculations must happen in a `fixedUpdate` loop at a constant frequency (e.g., 60Hz). BANNED: Frame-rate dependent movement.
*   **Deterministic State**: Use integer-based physics or strict floating-point controls for lockstep multiplayer. State at Frame N must be identical on all clients.
*   **Spatial Partitioning**: Mandate `Octrees`, `Quadtrees`, or `BVH` (Bounding Volume Hierarchy) for collision detection.

## 4. TOOLING & PIPELINES
*   **Three.js / React Three Fiber**: Use for 3D web experiences. Optimize via `useFrame` and `useThree`.
*   **BabylonJS**: Use for high-performance enterprise 3D and PBR (Physically Based Rendering) materials.
*   **PixiJS**: Use for ultra-fast 2D sprite rendering.

## 5. FORBIDDEN (GAME SLOP)
*   **NO O(n²) Collision Logic**: BANNED. Everything must use a spatial index.
*   **NO Main-Thread Physics**: Offload complex physics (e.g., cloth, fluid) to Web Workers.
*   **NO Uncompressed Assets**: Always use `Draco` for meshes and `Basis Universal` for textures.
*   **NO Memory Leaks in Loops**: Strictly dispose of geometries and textures to prevent heap bloat.
