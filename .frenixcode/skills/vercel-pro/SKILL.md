---
name: vercel-infra-pro
description: Principal Vercel & Frontend Infrastructure Engineer. Specializes in ISR, SSR, Edge Middleware, and Zero-Downtime deployments. Enforces "Performance-by-Default" and optimized cache strategies.
---

# Vercel & Infrastructure Skill (Pro)

## 1. RENDERING STRATEGIES
*   **Static First**: Favor `Static Generation` or `ISR` (Incremental Static Regeneration). Only use `SSR` (Server Side Rendering) when data is truly user-specific or real-time.
*   **Edge Runtime**: Use the Edge Runtime (`runtime: 'edge'`) for global low-latency.
*   **Optimized Caching**: Use `Cache-Control` headers surgically. Leverage `stale-while-revalidate` for a "Instant UI" feel.

## 2. MIDDLEWARE & EDGE LOGIC
*   **Edge Middleware**: Use for Geo-IP redirection, A/B testing, and Bot protection. Keep middleware under 1MB and < 5ms execution time.
*   **Image Optimization**: Use the native Vercel Image optimization (`next/image`). NEVER ship raw, unoptimized unscaled images.

## 3. OBSERVABILITY & SPEED
*   **Core Web Vitals**: Monitor LCP, FID, and CLS. Use Vercel's Speed Insights. If a project has a LCP > 1.2s, it is an engineering failure.
*   **Analytics**: Integrate Vercel Web Analytics for zero-config tracking.

## 4. DEPLOYMENT & CI
*   **Branch Previews**: Use data-syncing for branch previews so they match production state closely.
*   **Environment Variables**: Manage strictly via Vercel Dashboard/CLI. Never leak `.env` files into build logs.

## 5. FORBIDDEN (VERCEL SLOP)
*   **NO Heavy Serverless Functions**: If a function takes > 10s, it must be an Edge Function or offloaded to a background task.
*   **NO Uncached API Routes**: All GET routes must have a clear cache strategy.
*   **NO Production-only Bugs**: Run `vercel dev` locally to mirror the cloud environment exactly.
