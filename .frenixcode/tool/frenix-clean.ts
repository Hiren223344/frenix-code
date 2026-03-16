import fs from "fs";
import path from "path";

/**
 * Frenix Clean-Code Janitor: Automatically fixes common "slop" and formatting issues
 * Usage: frenix-clean <file_path>
 */

const filePath = process.argv[2];

if (!filePath || !fs.existsSync(filePath)) {
    console.error("Usage: frenix-clean <file_path>");
    process.exit(1);
}

let content = fs.readFileSync(filePath, "utf8");
let originalContent = content;

// 1. Remove console.logs (except warn/error) - The "No Noise" rule
content = content.replace(/\bconsole\.log\((.*)\);?\n?/g, "");

// 2. Fix trailing whitespace
content = content.split("\n").map(line => line.trimEnd()).join("\n");

// 3. Ensure single trailing newline
content = content.trimEnd() + "\n";

// 4. Force 'use client' to the very top if it exists
if (content.includes("'use client'") || content.includes('"use client"')) {
    content = content.replace(/['"]use client['"];?\n?/g, "");
    content = "'use client';\n" + content;
}

if (content !== originalContent) {
    fs.writeFileSync(filePath, content);
    console.log(`✨ ${path.basename(filePath)} cleaned and polished.`);
} else {
    console.log(`✅ ${path.basename(filePath)} is already clean.`);
}
