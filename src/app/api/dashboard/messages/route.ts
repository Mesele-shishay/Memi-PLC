import { NextResponse } from "next/server";
import { z } from "zod";
import { API_BASE } from "@/lib/apiBase";

export async function GET(request: Request) {
  try {
    const authHeader = request.headers.get("authorization");
    const headers: Record<string, string> = {};

    if (authHeader) {
      headers["Authorization"] = authHeader;
    }

    const res = await fetch(`${API_BASE}/dashboard/messages`, {
      cache: "no-store",
      headers,
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      return NextResponse.json(errorData, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching messages:", error);
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

    const res = await fetch(`${API_BASE}/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      return NextResponse.json(errorData, { status: res.status });
    }

    const payload = await res.json();
    return NextResponse.json(payload);
  } catch (e: any) {
    console.error("Error creating message:", e);
    return NextResponse.json(
      { error: e?.message || "Invalid payload" },
      { status: 400 }
    );
  }
}
