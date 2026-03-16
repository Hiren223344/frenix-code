import { execSync } from "child_process";

/**
 * Frenix Bundle Auditor: Checks production bundle sizes
 * Usage: frenix-bundle
 */

console.log("\n📦 Auditing production bundle...\n");

try {
    const buildOutput = execSync("npm run build").toString();
    console.log(buildOutput);
    
    // Check for large chunks
    const largeChunks = buildOutput.match(/([0-9.]+) (kB|mB) .* (\[big\])/g);
    if (largeChunks) {
        console.warn("⚠️  Large chunks detected:\n" + largeChunks.join("\n"));
    } else {
        console.log("✅ Bundle size is within healthy limits.");
    }
} catch (e) {
    console.error(`❌ Bundle audit failed: ${e.message}`);
}
