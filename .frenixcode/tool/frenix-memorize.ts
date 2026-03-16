import fs from "fs";
import path from "path";

/**
 * Memory Injector: Automatically updates memory.md with new learnings
 * Usage: frenix-memorize <id> <issue> <fix>
 */

const memoryPath = path.resolve(process.cwd(), ".frenixcode/memory.md");
const [,, id, issue, fix] = process.argv;

if (!id || !issue || !fix) {
    console.log("Usage: frenix-memorize <id> <issue> <fix>");
    process.exit(1);
}

if (!fs.existsSync(memoryPath)) {
    console.error("Error: memory.md not found.");
    process.exit(1);
}

let content = fs.readFileSync(memoryPath, "utf8");
const newEntry = `| **${id}** | ${issue} | Automated Discovery | ${fix} | ✅ Resolved |\n`;

// Inject into the Reflection Log table
if (content.includes("| ID |")) {
    const lines = content.split("\n");
    const tableIndex = lines.findIndex(l => l.includes("| ID |"));
    lines.splice(tableIndex + 3, 0, newEntry);
    content = lines.join("\n");
}

fs.writeFileSync(memoryPath, content);
console.log(`🧠 Memory Synchronized: ${id} correctly logged.`);
