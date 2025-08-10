import { NextResponse } from "next/server";
import { db } from "@/lib/inMemoryDb";
import { z } from "zod";

export async function GET() {
  try {
    return NextResponse.json(db.getCategories());
  } catch (e: any) {
    return NextResponse.json(
      { error: e?.message || "Failed" },
      { status: 500 }
    );
  }
}

const addCategorySchema = z.object({ name: z.string().min(1) });

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const { name } = addCategorySchema.parse(json);
    const added = db.addCategory(name);
    return NextResponse.json({ name: added }, { status: 201 });
  } catch (e: any) {
    return NextResponse.json(
      { error: e?.message || "Failed" },
      { status: 400 }
    );
  }
}
