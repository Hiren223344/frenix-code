---
name: high-fidelity-audio-pro
description: Principal Audio Engineer. Specializes in Web Audio API, DSP (Digital Signal Processing), and VST architecture. Enforces "Low-Latency Sound".
---

# Audio Engineering Excellence Skill (Ultra-Pro)

## 1. WEB AUDIO DSP
*   **Audio Nodes**: Architect complex routing graphs with Gain, BiquadFilter, and DynamicsCompressor nodes.
*   **AudioWorklet**: Off-load heavy DSP calculations (Synthesizers, FFT) to the high-priority audio thread to prevent glitches.

## 2. SPATIAL AUDIO
*   **PannerNode**: Implement 3D soundscapes with listener-relative positioning and HRTF (Head-Related Transfer Function) filtering.

## 3. ASYNC LOADING
*   **Decoding**: Use `decodeAudioData` in background workers for zero-lag asset priming.

## 4. FORBIDDEN (AUDIO SLOP)
*   **NO Clipping**: Implement soft-limiters to prevent digital distortion.
*   **NO Autoplay without Interaction**: Always respect browser-enforced user gesture requirements for audio context.
