import { execSync } from "child_process";

/**
 * Frenix Git Flow: Automates standardized branch naming and PR prep
 * Usage: frenix-git <type> <branch_name>
 */

const [,, type, name] = process.argv;

const validTypes = ["feat", "fix", "refactor", "docs", "chore"];

if (!type || !name || !validTypes.includes(type)) {
    console.error(`Usage: frenix-git <${validTypes.join("|")}> <branch_name>`);
    process.exit(1);
}

const finalName = `${type}/${name.toLowerCase().replace(/\s+/g, "-")}`;

try {
    console.log(`🌿 Switching to new branch: ${finalName}...`);
    execSync(`git checkout -b ${finalName}`);
    console.log("✅ Branch created.");
} catch (e) {
    console.error(`❌ Failed to create branch: ${e.message}`);
}
