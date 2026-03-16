import fs from "fs";
import path from "path";

/**
 * Frenix Route Generator: Scaffolds Next.js API routes with Zod validation
 * Usage: frenix-route-gen <route_name>
 */

const name = process.argv[2];
if (!name) {
    console.error("Usage: frenix-route-gen <route_name>");
    process.exit(1);
}

const routeDir = path.resolve(process.cwd(), `src/app/api/${name.toLowerCase()}`);
if (!fs.existsSync(routeDir)) fs.mkdirSync(routeDir, { recursive: true });

const template = `import { NextResponse } from 'next/server';
import { z } from 'zod';

const RequestSchema = z.object({
  id: z.string(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { id } = RequestSchema.parse(body);

    return NextResponse.json({ success: true, data: { id } });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, error: error.errors }, { status: 400 });
    }
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
`;

fs.writeFileSync(path.join(routeDir, "route.ts"), template);

console.log(`🚀 API Route "${name}" scaffolded: src/app/api/${name.toLowerCase()}/route.ts`);
