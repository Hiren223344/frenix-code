import fs from "fs";
import path from "path";

/**
 * Frenix Env Verifier: Ensures .env matches .env.example
 * Usage: frenix-env
 */

const envPath = path.resolve(process.cwd(), ".env");
const examplePath = path.resolve(process.cwd(), ".env.example");

if (!fs.existsSync(envPath) || !fs.existsSync(examplePath)) {
    console.error("❌ Error: Missing .env or .env.example");
    process.exit(1);
}

const envKeys = Object.keys(require("dotenv").parse(fs.readFileSync(envPath)));
const exampleKeys = Object.keys(require("dotenv").parse(fs.readFileSync(examplePath)));

const missing = exampleKeys.filter(k => !envKeys.includes(k));

if (missing.length > 0) {
    console.error(`❌ Missing keys in .env: ${missing.join(", ")}`);
    process.exit(1);
} else {
    console.log("✅ .env is synchronized with .env.example.");
}
