import { $ } from "bun"

import { copyBinaryToSidecarFolder, getCurrentSidecar, windowsify } from "./utils"

const RUST_TARGET = Bun.env.TAURI_ENV_TARGET_TRIPLE

const sidecarConfig = getCurrentSidecar(RUST_TARGET)

const binaryPath = windowsify(`../frenixcode/dist/${sidecarConfig.ocBinary}/bin/frenixcode`)

await (sidecarConfig.ocBinary.includes("-baseline")
  ? $`cd ../frenixcode && bun run build --single --baseline`
  : $`cd ../frenixcode && bun run build --single`)

await copyBinaryToSidecarFolder(binaryPath, RUST_TARGET)
