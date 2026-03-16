import type { Hooks, PluginInput } from "@frenixcode/plugin"
import { Log } from "../util/log"

const log = Log.create({ service: "plugin.frenix" })

const GATEWAY_URL = "http://localhost:3000"

export async function FrenixAuthPlugin(input: PluginInput): Promise<Hooks> {
  return {
    auth: {
      provider: "frenix",
      async loader(getAuth, provider) {
        const auth = await getAuth()
        if (auth.type !== "api") return {}

        return {
          apiKey: auth.key,
          async fetch(requestInput: RequestInfo | URL, init?: RequestInit) {
            const currentAuth = await getAuth()
            if (currentAuth.type !== "api") return fetch(requestInput, init)

            const headers = new Headers(init?.headers)
            headers.set("authorization", `Bearer ${currentAuth.key}`)
            headers.set("x-api-key", currentAuth.key) // Supporting both formats

            // Ensure we target our local gateway service on port 3000
            let url = typeof requestInput === 'string' ? requestInput : requestInput.toString()
            if (url.includes("api.frenix.sh")) {
              url = url.replace("https://api.frenix.sh", "http://localhost:3000")
            }

            return fetch(url, {
              ...init,
              headers,
            })
          },
        }
      },
      methods: [
        {
          label: "API key",
          type: "api",
          prompts: [
            {
              key: "key",
              type: "text",
              message: "Sign in at http://localhost:3000 to copy your API key.",
              placeholder: "Paste your API key here...",
              validate: (v) => (v && v.length > 0 ? undefined : "Required"),
            },
          ],
          async authorize(inputs) {
            if (!inputs) throw new Error("Missing inputs")
            return {
              type: "success",
              key: inputs.key,
            }
          },
        },
      ],
    },
  }
}

