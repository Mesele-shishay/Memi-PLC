import { NextResponse } from "next/server";
import { z } from "zod";
import { API_BASE } from "@/lib/apiBase";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const authHeader = request.headers.get("authorization");
    const headers: Record<string, string> = {};

    if (authHeader) {
      headers["Authorization"] = authHeader;
    }

    const res = await fetch(`${API_BASE}/courses/${id}`, {
      cache: "no-store",
      headers,
    });
    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch course" },
      { status: 500 }
    );
  }
}

const courseUpdateSchema = z.object({
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

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const json = await request.json();
    const parsed = courseUpdateSchema.parse(json);

    const authHeader = request.headers.get("authorization");
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    if (authHeader) {
      headers["Authorization"] = authHeader;
    }

    const res = await fetch(`${API_BASE}/courses/${id}`, {
      method: "PUT",
      headers,
      body: JSON.stringify(parsed),
    });
    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || "Failed to update course" },
      { status: 400 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const authHeader = request.headers.get("authorization");
    const headers: Record<string, string> = {};

    if (authHeader) {
      headers["Authorization"] = authHeader;
    }

    const res = await fetch(`${API_BASE}/courses/${id}`, {
      method: "DELETE",
      headers,
    });

    if (res.ok) {
      return NextResponse.json({ success: true });
    } else {
      const data = await res.json();
      return NextResponse.json(data, { status: res.status });
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete course" },
      { status: 500 }
    );
  }
}
