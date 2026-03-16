---
name: mobile-expo-pro
description: Principal Mobile Engineer. Specializes in Expo & React Native. Enforces "Native-Feel" performance, optimized asset management, and high-quality App Store delivery.
---

# Mobile & Expo Excellence Skill (Ultra-Pro)

## 1. PERFORMANCE & NATIVE-FEEL
*   **60FPS UX**: Mandate the use of **FlashList** over FlatList for high-performance scrolling. Use **Reanimated v3** for gesture-based, CPU-offloaded animations.
*   **Native Modules**: Use Expo Modules (Nitro) to bridge custom Swift/Kotlin code when React Native abstractions are insufficient.
*   **Asset Optimization**: Use `expo-image` for high-performance image loading with blurhash placeholders.

## 2. CROSS-PLATFORM HARMONIZATION
*   **Platform Specifics**: Use `Platform.select()` for OS-specific UI adjustments (e.g., Safe Area Insets on iOS vs. Status Bar handling on Android).
*   **Design Tokens Sync**: Ensure common tokens from `design-systems-pro` translate correctly into React Native StyleSheet or NativeWind.

## 3. OFFLINE & PERSISTENCE
*   **Local DB**: Use **SQLite** (via expo-sqlite) or **WatermelonDB** for large-scale local storage. Use **MMKV** for ultra-fast, key-value persistence.
*   **Background Sync**: Implement `expo-background-fetch` and `expo-task-manager` for data synchronization while the app is backgrounded.

## 4. DELIVERY & STORE OPS
*   **EAS (Expo Application Services)**: Automate builds and submissions to the App Store and Google Play via EAS Build and EAS Submit.
*   **Over-the-Air (OTA) Updates**: Use **EAS Update** for critical bug fixes without waiting for store review (Section 5 of `compliance-pro`).
*   **Deep Linking**: Correctly configure Universal Links (iOS) and App Links (Android) for seamless user transitions.

## 5. FORBIDDEN (MOBILE SLOP)
*   **NO Inline Objects in Props**: BANNED in hot components to prevent unnecessary re-renders. Use `useMemo` and `useCallback`.
*   **NO Unhandled Safe Areas**: Content must NEVER overlap with the Notch or Home Indicator.
*   **NO Heavy Bundles**: Audit 3rd party libraries. Every byte counts for users on cellular data.
*   **NO Missing Splash/Icons**: Every build must have high-quality, scaled system assets.
