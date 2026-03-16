import fs from "fs";
import path from "path";

/**
 * Frenix UI Component Generator: Scaffolds shadcn-style atomic components
 * Usage: frenix-ui-gen <component_name>
 */

const name = process.argv[2];
if (!name) {
    console.error("Usage: frenix-ui-gen <component_name>");
    process.exit(1);
}

const componentDir = path.resolve(process.cwd(), "src/components/ui");
if (!fs.existsSync(componentDir)) fs.mkdirSync(componentDir, { recursive: true });

const template = `'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export interface ${name}Props extends React.HTMLAttributes<HTMLDivElement> {}

const ${name} = React.forwardRef<HTMLDivElement, ${name}Props>(
  ({ className, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
        className={cn('p-4 rounded-xl border bg-card text-card-foreground shadow-sm', className)}
        {...props}
      />
    );
  }
);
${name}.displayName = '${name}';

export { ${name} };
`;

const targetPath = path.join(componentDir, `${name.toLowerCase()}.tsx`);
fs.writeFileSync(targetPath, template);

console.log(`🎨 UI Component "${name}" scaffolded: src/components/ui/${name.toLowerCase()}.tsx`);
