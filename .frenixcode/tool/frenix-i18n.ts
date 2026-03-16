import fs from "fs";
import { execSync } from "child_process";

/**
 * Frenix I18n Scanner: Finds hardcoded strings that need internationalization
 * Usage: frenix-i18n <path>
 */

const target = process.argv[2] || "src";
console.log(`\n🌍 Scanning ${target} for hardcoded strings...\n`);

try {
    const files = execSync(`git ls-files "${target}"`).toString().split("\n").filter(f => f.match(/\.(tsx|ts|jsx|js)$/));
    
    files.forEach(file => {
        const content = fs.readFileSync(file, "utf8");
        // Regex to find raw strings in JSX/TSX curly braces or tags
        const rawStringRegex = />([^<{}>]+)</g;
        let match;
        while ((match = rawStringRegex.exec(content)) !== null) {
            const text = match[1].trim();
            if (text.length > 3 && !text.includes("i18n") && !text.includes("{")) {
                console.log(`[i18n] Hardcoded text "${text}" found in ${file}`);
            }
        }
    });

    console.log("\n✅ Scan complete.");
} catch (e) {
    console.error(`❌ Scan failed: ${e.message}`);
}
