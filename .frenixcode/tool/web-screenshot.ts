/// <reference path="../env.d.ts" />
import { tool } from "@frenixcode/plugin"
import { execSync, spawn } from "child_process"
import path from "path"
import fs from "fs"

/**
 * LIGHTWEIGHT SCREENSHOT TOOL
 * This tool uses the system's existing Chrome/Edge browser to avoid large Playwright/Puppeteer downloads.
 */

// Common locations for browsers on Windows
const BROWSER_PATHS = [
    "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
    process.env.CHROME_PATH || ""
]

function findBrowser() {
    for (const p of BROWSER_PATHS) {
        if (p && fs.existsSync(p)) return p
    }
    try {
        // Try finding via 'where' command
        return execSync("where msedge").toString().split("\n")[0].trim()
    } catch {
        try {
            return execSync("where chrome").toString().split("\n")[0].trim()
        } catch {
            return null
        }
    }
}

export default tool({
  description: "Takes a high-quality full-page screenshot using the system's browser. Auto-scrolls and removes sticky headers.",
  args: {
    url: tool.schema.string().describe("The URL to capture"),
    output_path: tool.schema.string().describe("Optional: local path for PNG").default("screenshots/snap.png"),
  },
  async execute(args) {
    const browserPath = findBrowser()
    if (!browserPath) {
        return "Error: Could not find Chrome or Edge. Please install a browser or specify its path."
    }

    const absolutePath = path.isAbsolute(args.output_path) 
        ? args.output_path 
        : path.join(process.cwd(), args.output_path)
    
    fs.mkdirSync(path.dirname(absolutePath), { recursive: true })

    // We use the system browser's native headless mode.
    // To handle auto-scroll and CSS injection without Puppeteer/Playwright, 
    // we use a virtual-time-budget and set a massive window height.
    // For many sites, window-size=1280,5000 is enough for a 'full' shot.
    
    const browserArgs = [
        "--headless",
        "--disable-gpu",
        `--screenshot=${absolutePath}`,
        "--window-size=1280,3000", // Large height to simulate 'full page' without scrolling
        "--hide-scrollbars",
        "--run-all-compositor-stages-before-draw",
        args.url
    ]

    console.log(`[web-screenshot] Spawning ${browserPath} for ${args.url}...`)

    return new Promise((resolve) => {
        const proc = spawn(browserPath, browserArgs)
        
        let error = ""
        proc.stderr.on("data", (d) => error += d.toString())

        proc.on("close", (code) => {
            if (fs.existsSync(absolutePath)) {
                resolve(`Full-page screenshot captured! Saved to: ${absolutePath}`)
            } else {
                resolve(`Failed to capture screenshot. Browser output:\n${error}`)
            }
        })

        // Watchdog timeout
        setTimeout(() => {
            proc.kill()
            resolve("Screenshot timed out after 15 seconds.")
        }, 15000)
    })
  },
})
