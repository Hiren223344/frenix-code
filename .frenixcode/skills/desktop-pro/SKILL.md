---
name: desktop-tauri-pro
description: Principal Desktop Systems Engineer. Specializes in Tauri (Rust + Frontend), multi-window management, and native system integration. Enforces "Security-First" desktop architecture.
---

# Desktop & Tauri Excellence Skill (Ultra-Pro)

## 1. THE TAURI ARCHITECTURE (RUST CORE)
*   **Rust Backend Mastery**: Isolate heavy logic in Rust functions (`#[tauri::command]`). Use `serde` for ultra-fast, type-safe communication between Frontend and Rust.
*   **State Management**: Use `tauri::State` to manage global Rust-side resources (DB connections, file handles, hardware access).
*   **Multi-Threading**: Leverage Rust's `tokio` or `std::thread` for background tasks without blocking the UI thread.

## 2. NATIVE INTEGRATION & UX
*   **System Tray & Menus**: Design professional system tray icons and native OS menus. Implement global hotkeys that respect user system defaults.
*   **Window Management**: Handle multi-window architectures (e.g., Settings, Floating tools) with specific sizing, focus, and transparency logic.
*   **Native File System**: Use `tauri::api::path` to correctly identify OS-specific paths (AppData, Documents, etc.). Never hardcode `/` or `C:\`.

## 3. SECURITY & HARDENING
*   **Scoped Capabilities**: Strictly limit the `tauri.conf.json` allowlist. Only enable APIs you actually use.
*   **Path Scoping**: Restrict the app's file system access to specific directories using the `fs.scope` configuration.
*   **Payload Validation**: Strictly validate any data coming from the Frontend into a Rust command to prevent injection.

## 4. BUILD & DEPLOYMENT
*   **Cross-Platform Builds**: Use GH Actions or CI to build binaries for Windows (msi), macOS (dmg/app), and Linux (AppImage/deb).
*   **Auto-Updates**: Implement the Tauri Bundler's auto-update feature with signed releases for seamless user maintenance.

## 5. FORBIDDEN (DESKTOP SLOP)
*   **NO Giant Bundles**: Desktop apps should be lean. Optimize frontend assets and Rust dependencies.
*   **NO Sync Call Blocks**: BANNED. Never call a synchronous file or network operation in a main thread.
*   **NO Non-Native Vibe**: Respect platform-specific UI patterns (e.g., Apple Human Interface vs. Windows Fluent).
*   **NO Unhandled Panics**: All Rust-side errors must be converted into `Result` strings and handled gracefully in the Frontend.
