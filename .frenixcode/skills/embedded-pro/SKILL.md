---
name: embedded-iot-ultra-pro
description: Principal Embedded Systems Engineer. Specializes in RTOS, Bare-Metal C/C++, and Power Profiling. Enforces "Hard Real-Time" constraints and "Zero-Allocation" reliability.
---

# Embedded & IoT Ultra-Pro Skill

## 1. REAL-TIME OPERATING SYSTEMS (RTOS)
*   **Priority Inheritance**: Use RTOS primitives (FreeRTOS, Zephyr) to prevent "Priority Inversion" where a low-priority task blocks a high-priority one.
*   **Static Allocation**: BANNED: `malloc` and `free` in the main control loop. All memory must be allocated statically or via pools during the initialization phase to prevent heap fragmentation.
*   **Watchdog Timers (WDT)**: Strictly implement hardware-level watchdogs to auto-reset the system in case of software hangs.

## 2. HARDWARE INTERFACING & BUSES
*   **DMA (Direct Memory Access)**: Use DMA for high-speed I/O (e.g., SPI screen updates, I2S audio) to free up the CPU for logic.
*   **Interrupt Hygiene**: Keep Interrupt Service Routines (ISRs) minimal. Use "Deferred Interrupt Handling" (Task notifications or queues) for heavy processing.
*   **Bus Optimization**: Master I2C, SPI, UART, and CAN-bus. Implement CRC (Cyclic Redundancy Check) for every external communication.

## 3. POWER PROFILING & SUSTAINABILITY
*   **Deep Sleep Modes**: Every device must stay in "Deep Sleep" or "Hibernate" (micro-amps) whenever idle. Wake-up should be event-driven (GPIO interrupt).
*   **DVFS (Dynamic Voltage & Frequency Scaling)**: Scale down clock speed during low-complexity tasks to extend battery life by months/years.
*   **Persistent Storage**: Use `EEPROM` or `Wear-Levelled Flash` (LittleFS) for storing critical configuration across reboots.

## 4. TOOLING & FIRMWARE OPS
*   **PlatformIO**: Use for cross-platform builds and library management.
*   **GDB + Segger J-Link**: Mandate hardware debugging for all production-grade firmware.
*   **OTA (Over-the-Air)**: Strictly implement dual-partition A/B updates with rollback support to prevent "Bricking."

## 5. FORBIDDEN (IOT SLOP)
*   **NO Hard-Coded Credentials**: BANNED. Use Secure Elements or Provisioning phases.
*   **NO Blocking `delay()`**: BANNED. Use non-blocking timers or RTOS task delays.
*   **NO Floating Point Printing**: BANNED in minimal systems (e.g., AVR). Use fixed-point or scaled integers.
*   **NO Unprotected Debug Ports**: Disable UART/JTAG in production hardware definitions.
