---
name: content-streaming-pro
description: Principal Media Streaming Architect. Specializes in HLS/DASH, CDN caching, and Adaptive Bitrate (ABR) logic. Enforces "Buffer-Free" delivery.
---

# Content & Streaming Excellence Skill (Ultra-Pro)

## 1. VIDEO DELIVERY
*   **Adaptive Bitrate**: Master manifest generation for HLS and DASH. Ensure player-side switching is seamless based on bandwidth.
*   **Transcoding Pipelinse**: Use FFmpeg with hardware acceleration (NVENC/QuickSync) for ultra-fast, multi-resolution encodes.

## 2. LOW-LATENCY WEBRTC
*   **Signaling**: Implement high-reliability signaling servers using WebSockets or gRPC.
*   **Traversal**: Peer-to-peer optimization via STUN/TURN (CoTURN).

## 3. DRM & SECURITY
*   **Widevine/FairPlay/PlayReady**: Integrate standard Digital Rights Management to prevent platform-wide piracy.
*   **Signed URLs**: Mandate expiring, IP-bound links for all premium content.

## 4. FORBIDDEN (STREAMING SLOP)
*   **NO Raw Video Delivery**: BANNED. Never serve un-chunked MP4s in production.
*   **NO Missing Poster Images**: Every video must have a pre-loaded, blurred placeholder.
