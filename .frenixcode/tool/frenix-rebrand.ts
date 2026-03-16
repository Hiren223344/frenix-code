import fs from "fs";
import path from "path";
import { execSync } from "child_process";

/**
 * Frenix Rebrander: Globally renames projects to the Frenix identity
 * Usage: frenix-rebrand <original_name> <new_name>
 */

const [,, oldName, newName] = process.argv;

if (!oldName || !newName) {
    console.log("Usage: frenix-rebrand <original_name> <new_name>");
    process.exit(1);
}

console.log(`\n🏷️  Rebranding project: ${oldName} -> ${newName}...\n`);

const files = execSync(`git ls-files`).toString().split("\n").filter(Boolean);

files.forEach(file => {
    if (fs.lstatSync(file).isDirectory()) return;
    const content = fs.readFileSync(file, "utf8");
    if (content.includes(oldName)) {
        const newContent = content.replace(new RegExp(oldName, "g"), newName);
        fs.writeFileSync(file, newContent);
        console.log(`Fixed: ${file}`);
    }
});

console.log("\n✅ Rebrand complete.");
