import { NextResponse } from "next/server";
import { z } from "zod";
import { API_BASE } from "@/lib/apiBase";
import { Category, CategoryResponse } from "@/types/api";

export async function GET(request: Request) {
  try {
    const authHeader = request.headers.get("authorization");
    const headers: Record<string, string> = {};

    if (authHeader) {
      headers["Authorization"] = authHeader;
    }

    const res = await fetch(`${API_BASE}/categories`, {
      cache: "no-store",
      headers,
    });
    
    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      return NextResponse.json(errorData, { status: res.status });
    }
    
    const data = await res.json();
    return NextResponse.json(data as Category[], { status: res.status });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch categories" },
      { status: 500 }
    );
  }
}

const categorySchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1),
  description: z.string().min(1),
  slug: z.string().min(1),
  color: z.string().optional(),
  icon: z.string().optional(),
});

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const parsed = categorySchema.parse(json);

    const authHeader = req.headers.get("authorization");
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    if (authHeader) {
      headers["Authorization"] = authHeader;
    }

    const res = await fetch(`${API_BASE}/categories`, {
      method: "POST",
      headers,
      body: JSON.stringify(parsed),
    });
    
    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      return NextResponse.json(errorData, { status: res.status });
    }
    
    const data = await res.json();
    return NextResponse.json(data as CategoryResponse, { status: res.status });
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || "Failed to create category" },
      { status: 400 }
    );
  }
}
