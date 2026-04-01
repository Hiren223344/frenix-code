import z from "zod"
import { Tool } from "./tool"
import { BrowserControl } from "../browser/server"

export const BrowserTool = Tool.define("browser", {
  description: "Control the browser via the Frenix Extension. Can click, type, and navigate.",
  parameters: z.object({
    action: z.enum(["click", "type", "navigate", "scroll", "scrape"]),
    url: z.string().optional().describe("URL for navigate action"),
    selector: z.string().optional().describe("CSS selector for click/type"),
    value: z.string().optional().describe("Text to type"),
    x: z.number().optional().describe("X coordinate for CDP click"),
    y: z.number().optional().describe("Y coordinate for CDP click"),
  }),
  async execute(params, ctx) {
    await ctx.ask({
      permission: "browser",
      metadata: params,
      patterns: ["*"],
      always: ["*"],
    })

    const result = await BrowserControl.sendAction(params)
    const success = !!result && (typeof result !== 'object' || !result.error)

    if (!success) {
      return {
        output: "Failed to send action. Is the browser extension connected to ws://localhost:3500?",
        title: "Browser Error",
        metadata: { success: false }
      }
    }

    let output = `Successfully sent ${params.action} command to browser.`
    if (params.action === 'scrape') {
      output = `Scraped content:\n\n${result}`
    }

    return {
      output,
      title: "Browser Action",
      metadata: { success: true, result }
    }
  },
})
