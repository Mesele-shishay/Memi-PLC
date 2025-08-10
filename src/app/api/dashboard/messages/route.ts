import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/inMemoryDb";

export async function GET() {
  try {
    const items = db.listMessages();
    return NextResponse.json(items);
  } catch (e) {
    return NextResponse.json(
      { error: "Failed to fetch messages" },
      { status: 500 }
    );
  }
}

const messageSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  company: z.string().optional(),
  inquiryType: z.string().optional(),
  subject: z.string().min(1),
  message: z.string().min(1),
});

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const data = messageSchema.parse(json);
    const created = db.createMessage(data);
    return NextResponse.json(created, { status: 201 });
  } catch (e: any) {
    return NextResponse.json(
      { error: e?.message || "Invalid payload" },
      { status: 400 }
    );
  }
}
