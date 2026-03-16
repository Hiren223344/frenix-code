import { cmd } from "./cmd"
import { ProvidersLoginCommand } from "./providers"

export const SigninCommand = cmd({
  command: "signin",
  describe: "sign in with your Frenix account",
  builder: (yargs) =>
    yargs.option("method", {
      alias: ["m"],
      describe: "login method label",
      type: "string",
    }),
  async handler(args) {
    await ProvidersLoginCommand.handler({
      ...args,
      provider: "frenix",
      method: args.method ?? "API key",
    } as any)
  },
})
