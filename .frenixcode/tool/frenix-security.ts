import { execSync } from "child_process";

/**
 * Frenix Security Scanner: Deep OWASP & Dependency Audit
 * Usage: frenix-security <path>
 */

const target = process.argv[2] || ".";

console.log(`\n🛡️  Frenix Security Scan: Checking ${target}...\n`);

try {
    console.log("Checking for vulnerable dependencies...");
    const audit = execSync("npm audit --json").toString();
    const parsed = JSON.parse(audit);
    
    if (parsed.metadata.vulnerabilities.high > 0 || parsed.metadata.vulnerabilities.critical > 0) {
        console.log(`❌ Found ${parsed.metadata.vulnerabilities.high} high and ${parsed.metadata.vulnerabilities.critical} critical vulnerabilities.`);
    } else {
        console.log("✅ Dependencies are clean.");
    }
    
    console.log("\nScanning for exposed API keys...");
    const leaks = execSync(`grep -rE "(api_key|secret|password|token)\\s*=\\s*['\\"][a-zA-Z0-9]{10,}['\\"]" ${target} || true`).toString();
    
    if (leaks) {
        console.warn("⚠️  Potential secret leaks detected:\n" + leaks);
    } else {
        console.log("✅ No overt secret leaks found.");
    }

} catch (e) {
    console.error(`❌ Security scan failed: ${e.message}`);
}
