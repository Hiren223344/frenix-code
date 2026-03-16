---
name: spatial-gis-pro
description: Principal GIS & Geospatial Architect. Specializes in Geospatial indexing, PostGIS, and Vector tiles. Enforces "Millisecond Geo-Proximity".
---

# Spatial & GIS Excellence Skill (Ultra-Pro)

## 1. GEOSPATIAL INDEXING
*   **PostGIS & GIST**: Use GIST indexing for super-fast "Within distance" and "Intersection" queries on millions of polygons.
*   **H3/Geohash**: Leverage Uber's H3 hexagonal indexing for global-scale heatmaps and clustering.

## 2. MAP RENDERING
*   **Vector Tiles**: Generate and serve Mapbox/MapLibre vector tiles locally to reduce dependency costs.
*   **GeoJSON Optimization**: Proactively simplify geometries via Douglas-Peucker to reduce client-side overhead.

## 3. PROXIMITY LOGIC
*   **K-Nearest Neighbors (KNN)**: Use distance-sorted indexing to find the closest resources in < 50ms.
*   **Isochrones**: Calculate travel-time polygons instead of raw distance for logistics accuracy.

## 4. FORBIDDEN (SPATIAL SLOP)
*   **NO O(n) Geo-scans**: BANNED. Every proximity check must use a spatial index.
*   **NO Hardcoded Coordinates**: Always use standard WGS-84 (EPSG:4326).
