import { Ripgrep } from "../file/ripgrep"
import { Instance } from "../project/instance"
import PROMPT_MASTER_FAST from "./prompt/master_fast.txt"
import PROMPT_MASTER_PLAN from "./prompt/master_plan.txt"
import type { Provider } from "@/provider/provider"
import type { Agent } from "@/agent/agent"
import { PermissionNext } from "@/permission/next"
import { Skill } from "@/skill"

export namespace SystemPrompt {
  export function instructions() {
    return PROMPT_MASTER_FAST.trim()
  }

  export function provider(_model: Provider.Model, agent?: string) {
    if (agent === "plan") return [PROMPT_MASTER_PLAN]
    return [PROMPT_MASTER_FAST]
  }

  export async function environment(model: Provider.Model) {
    const project = Instance.project
    return [
      [
        `You are powered by the model named ${model.api.id}. The exact model ID is ${model.providerID}/${model.api.id}`,
        `Here is some useful information about the environment you are running in:`,
        `<env>`,
        `  Working directory: ${Instance.directory}`,
        `  Workspace root folder: ${Instance.worktree}`,
        `  Is directory a git repo: ${project.vcs === "git" ? "yes" : "no"}`,
        `  Platform: ${process.platform}`,
        `  Today's date: ${new Date().toDateString()}`,
        `</env>`,
        `<directories>`,
        `  ${
          project.vcs === "git" && false
            ? await Ripgrep.tree({
                cwd: Instance.directory,
                limit: 50,
              })
            : ""
        }`,
        `</directories>`,
      ].join("\n"),
    ]
  }

  export async function skills(agent: Agent.Info) {
    if (PermissionNext.disabled(["skill"], agent.permission).has("skill")) return

    const list = await Skill.available(agent)

    return [
      "Skills provide specialized instructions and workflows for specific tasks.",
      "Use the skill tool to load a skill when a task matches its description.",
      Skill.fmt(list, { verbose: true }),
    ].join("\n")
  }
}
