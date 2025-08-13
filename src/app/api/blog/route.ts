import { NextResponse } from "next/server";
import { z } from "zod";
import { API_BASE } from "@/lib/apiBase";
import { BlogPost, BlogPostResponse } from "@/types/api";

export async function GET(request: Request) {
  try {
    const authHeader = request.headers.get("authorization");
    const headers: Record<string, string> = {};

    if (authHeader) {
      headers["Authorization"] = authHeader;
    }

    const res = await fetch(`${API_BASE}/blog`, {
      cache: "no-store",
      headers,
    });
    const data = await res.json();
    return NextResponse.json(data as BlogPost[], { status: res.status });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch blog posts" },
      { status: 500 }
    );
  }
}

const blogPostSchema = z.object({
  id: z.string().optional(),
  slug: z.string().optional(),
  title: z.string().min(1),
  description: z.string().min(1),
  author: z.string().optional(),
  date: z.string().optional(),
  image: z.string().min(1),
  category: z.string().min(1),
  readTime: z.string().optional(),
  authorImage: z.string().optional(),
});

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const parsed = blogPostSchema.parse(json);

    const authHeader = req.headers.get("authorization");
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    if (authHeader) {
      headers["Authorization"] = authHeader;
    }

    const res = await fetch(`${API_BASE}/blog`, {
      method: "POST",
      headers,
      body: JSON.stringify(parsed),
    });
    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || "Failed to create blog post" },
      { status: 400 }
    );
  }
}
