import { execSync } from "child_process";

/**
 * Performance Profiler: Benchmarks specific code blocks or endpoints
 * Usage: frenix-bench <url_or_command>
 */

const target = process.argv[2];

if (!target) {
    console.log("Usage: frenix-bench <url_or_command>");
    process.exit(1);
}

console.log(`\n🚀 Benchmarking target: ${target}...\n`);

try {
    const start = Date.now();
    // Use autocannon for HTTP or native time for commands
    if (target.startsWith("http")) {
        console.log("Running HTTP Load Test...");
        const result = execSync(`npx autocannon -c 10 -d 5 ${target}`).toString();
        console.log(result);
    } else {
        execSync(target, { stdio: 'inherit' });
    }
    const end = Date.now();
    console.log(`\n⏱️  Execution Time: ${end - start}ms`);
} catch (e) {
    console.error(`❌ Benchmark failed: ${e.message}`);
}
