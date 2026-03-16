import fs from "fs";
import path from "path";

/**
 * Frenix Agent Generator: Creates high-agency agent definitions
 * Usage: frenix-ai-gen <agent_name> <purpose>
 */

const [,, name, purpose] = process.argv;

if (!name || !purpose) {
    console.log("Usage: frenix-ai-gen <agent_name> <purpose>");
    process.exit(1);
}

const templatePath = path.resolve(process.cwd(), "packages/frenixcode/src/agent/generate.txt");
const agentDir = path.resolve(process.cwd(), ".frenixcode/agent");

if (!fs.existsSync(agentDir)) fs.mkdirSync(agentDir, { recursive: true });

const agentContent = `---
name: ${name.toLowerCase().replace(/\s+/g, "-")}
description: ${purpose}
---

# ${name} Agent

Inherits from the **Master Ultra-Pro Architect** core.

## Primary Directives
1. Solve "${purpose}" with zero residuals.
2. Follow the Plan-Execute-Review workflow.
3. Consult \`memory.md\` for M-### lessons.

## Operational Standards
- Architecture: Functional DDD.
- Design Taste: Cinematic / Premium.
- Security: Zero-Trust.
`;

const targetFile = path.join(agentDir, `${name.toLowerCase()}.md`);
fs.writeFileSync(targetFile, agentContent);

console.log(`🤖 Agent "${name}" created: .frenixcode/agent/${name.toLowerCase()}.md`);
