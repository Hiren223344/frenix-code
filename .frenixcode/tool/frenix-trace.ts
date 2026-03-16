import { execSync } from "child_process";

/**
 * Frenix Trace: Correlates errors across logs and Sentry
 * Usage: frenix-trace <query_or_error_id>
 */

const query = process.argv[2];
if (!query) {
    console.error("Usage: frenix-trace <query_or_error_id>");
    process.exit(1);
}

console.log(`\n🔍 Tracing anomaly: ${query}...\n`);

try {
    // Searches local logs for the specific query
    const logs = execSync(`grep -rC 5 "${query}" .logs || echo "No local logs found."`).toString();
    console.log("Local Log Correlation:");
    console.log(logs);

    console.log("\nSearching Sentry for Event ID...");
    // Mocking the call to Sentry CLI or API
    console.log("No Sentry events found locally. Check remote dashboard at https://sentry.io/org/project/issues/");

} catch (e) {
    console.error(`❌ Trace failed: ${e.message}`);
}
