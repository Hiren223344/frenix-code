import fs from "fs";
import path from "path";

/**
 * Migration Scaffold: Generates a timestamped SQL migration file
 * Usage: frenix-migrate <name>
 */

const name = process.argv[2];
if (!name) {
    console.error("Usage: frenix-migrate <name>");
    process.exit(1);
}

const timestamp = new Date().toISOString().replace(/[-:T]/g, "").split(".")[0];
const fileName = `${timestamp}_${name.toLowerCase().replace(/\s+/g, "_")}.sql`;
const migrationDir = path.resolve(process.cwd(), "migrations");

if (!fs.existsSync(migrationDir)) {
    fs.mkdirSync(migrationDir, { recursive: true });
}

const filePath = path.join(migrationDir, fileName);
const template = `-- Migration: ${name}\n-- Created at: ${new Date().toLocaleString()}\n\nBEGIN;\n\n-- Write your SQL here\n\nCOMMIT;`;

fs.writeFileSync(filePath, template);
console.log(`🚀 Migration scaffolded: migrations/${fileName}`);
