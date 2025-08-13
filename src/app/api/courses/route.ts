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

    const res = await fetch(`${API_BASE}/courses`, {
      cache: "no-store",
      headers,
    });
    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch courses" },
      { status: 500 }
    );
  }
}

const courseCreateSchema = z.object({
  id: z.string().optional(),
  slug: z.string().optional(),
  title: z.string().min(1),
  description: z.string().min(1),
  instructor: z.string().min(1),
  duration: z.string().min(1),
  level: z.enum(["Beginner", "Intermediate", "Advanced"]),
  category: z.string().min(1),
  students: z.number().int().nonnegative().default(0),
  price: z.string().min(1),
  originalPrice: z.string().optional(),
  image: z.string().min(1),
  features: z.array(z.string()).default([]),
  isPopular: z.boolean().optional(),
  isNew: z.boolean().optional(),
});

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const parsed = courseCreateSchema.parse(json);

    const authHeader = req.headers.get("authorization");
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    if (authHeader) {
      headers["Authorization"] = authHeader;
    }

    const res = await fetch(`${API_BASE}/courses`, {
      method: "POST",
      headers,
      body: JSON.stringify(parsed),
    });
    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || "Failed to create course" },
      { status: 400 }
    );
  }
}
