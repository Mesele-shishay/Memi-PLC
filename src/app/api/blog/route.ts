import { NextResponse } from "next/server";
import { db } from "@/lib/inMemoryDb";
import { z } from "zod";

export async function GET() {
  try {
    const blogPosts = db.getBlogPosts();
    return NextResponse.json(blogPosts);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch blog posts" },
      { status: 500 }
    );
  }
}

const blogCreateSchema = z.object({
  slug: z.string().optional(),
  image: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
  category: z.string().min(1),
  author: z.string().optional().default(""),
  date: z.string().optional().default(""),
  readTime: z.string().optional().default(""),
  authorImage: z.string().optional().default(""),
});

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const parsed = blogCreateSchema.parse(json);
    // Ensure minimal fields required by DB layer
    const created = db.createBlogPost({
      slug: parsed.slug,
      image: parsed.image,
      title: parsed.title,
      description: parsed.description,
      category: parsed.category,
      author: parsed.author || "",
      date: parsed.date || new Date().toISOString().split("T")[0],
      readTime: parsed.readTime || "",
      authorImage: parsed.authorImage || "",
    } as any);
    return NextResponse.json(created, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || "Failed to create blog post" },
      { status: 400 }
    );
  }
}
