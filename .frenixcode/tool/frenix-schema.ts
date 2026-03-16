import { execSync } from "child_process";

/**
 * Frenix Schema Helper: Syncs DB schema and generates client types
 * Usage: frenix-schema sync|gen
 */

const action = process.argv[2];

if (action !== "sync" && action !== "gen") {
    console.error("Usage: frenix-schema sync|gen");
    process.exit(1);
}

console.log(`\n💾 Executing Schema ${action}...\n`);

try {
    if (action === "sync") {
        console.log("Syncing database with schema...");
        execSync("npx prisma db push || npx drizzle-kit push:pg");
    } else {
        console.log("Generating typesafe client...");
        execSync("npx prisma generate || npx drizzle-kit generate:pg");
    }
    console.log("✅ Schema operation complete.");
} catch (e) {
    console.error(`❌ Schema operation failed: ${e.message}`);
}
