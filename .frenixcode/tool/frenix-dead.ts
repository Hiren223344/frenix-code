import { execSync } from "child_process";

/**
 * Frenix Dead-Code Hunter: Identifies unused exports and files
 * Usage: frenix-dead <path>
 */

const target = process.argv[2] || "src";
console.log(`\n💀 Hunting for dead code in ${target}...\n`);

try {
    // Uses knip or ts-prune internally or just a basic logic
    console.log("Analyzing exports...");
    const result = execSync(`npx ts-prune | grep -v "(unresolved)" || true`).toString();
    
    if (result) {
        console.warn("⚠️  Potential unused exports detected:\n" + result);
    } else {
        console.log("✅ No overt dead exports found.");
    }

} catch (e) {
    console.error(`❌ Dead-code hunt failed: ${e.message}`);
}
