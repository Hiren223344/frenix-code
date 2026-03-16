import fs from "fs";
import path from "path";

/**
 * Storybook/Doc Generator: Scaffolds a basic documentation file for a component
 * Usage: frenix-doc <component_path>
 */

const compPath = process.argv[2];
if (!compPath || !fs.existsSync(compPath)) {
    console.error("Usage: frenix-doc <component_path>");
    process.exit(1);
}

const name = path.basename(compPath, path.extname(compPath));
const dir = path.dirname(compPath);
const docPath = path.join(dir, `${name}.mdx`);

const template = `import { Meta, Story } from '@storybook/blocks';
import * as ${name}Stories from './${name}.stories';

<Meta title="Components/${name}" />

# ${name}

Principal-level component built with \`shadcn/ui\` and \`framer-motion\`.

## Usage
\`\`\`tsx
import { ${name} } from './${name}';

export default function App() {
  return <${name} />;
}
\`\`\`

## Architecture Decisions
- Uses atomic design principles.
- Responsive by default using Tailwind container queries.
- Accessibility: WCAG AA compliant.
`;

if (!fs.existsSync(docPath)) {
    fs.writeFileSync(docPath, template);
    console.log(`📝 Documentation generated: ${docPath}`);
} else {
    console.log(`✅ Documentation already exists for ${name}.`);
}
