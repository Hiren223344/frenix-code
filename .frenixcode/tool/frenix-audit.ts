import { execSync } from "child_process";
import fs from "fs";
import path from "path";

/**
 * Audit Tool: Performs high-speed architectural and security scans
 * Usage: frenix-audit <directory>
 */

const targetDir = process.argv[2] || process.cwd();

console.log(`\n🛡️  FrenixCode Ultra-Pro Auditor: Scanning ${targetDir}...\n`);

const issues: string[] = [];

// 1. Check for N+1 vulnerabilities (Prisma/Drizzle)
const files = execSync(`git ls-files "${targetDir}"`).toString().split("\n");
const tsFiles = files.filter(f => f.endsWith(".ts") || f.endsWith(".tsx"));

tsFiles.forEach(file => {
    const content = fs.readFileSync(path.resolve(targetDir, file), "utf8");
    
    // Scan for potential N+1 loops
    if (content.includes(".map(") && (content.includes("prisma.") || content.includes("db.select("))) {
        issues.push(`[PERFORMANCE] Potential N+1 detected in ${file}. Use .include or .select instead of mapping DB calls.`);
    }

    // Scan for hardcoded secrets
    const secretRegex = /(api_key|secret|password|token)\s*=\s*['"][a-zA-Z0-9]{10,}['"]/gi;
    if (secretRegex.test(content)) {
        issues.push(`[SECURITY] Potential hardcoded secret found in ${file}.`);
    }

    // Scan for missing error handling in async
    if (content.includes("async ") && !content.includes("try") && !content.includes(".catch")) {
        issues.push(`[STABILITY] Async function without try/catch or typed error handling in ${file}.`);
    }
});

if (issues.length === 0) {
    console.log("✅ Audit Passed: No critical Ultra-Pro violations found.");
} else {
    console.log(`❌ Audit Failed: Found ${issues.length} issues:\n`);
    issues.forEach(i => console.log(`- ${i}`));
    process.exit(1);
}
