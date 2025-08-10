import { NextResponse } from "next/server";
import { db } from "@/lib/inMemoryDb";
import { z } from "zod";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const blogPost = db.getBlogPostBySlug(slug);

    if (!blogPost) {
      return NextResponse.json(
        { error: "Blog post not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(blogPost);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch blog post" },
      { status: 500 }
    );
  }
}

const blogUpdateSchema = z.object({
  slug: z.string(),
  image: z.string().min(1).optional(),
  title: z.string().min(1).optional(),
  description: z.string().min(1).optional(),
  author: z.string().optional(),
  date: z.string().optional(),
  category: z.string().min(1).optional(),
  readTime: z.string().optional(),
  authorImage: z.string().optional(),
});

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const json = await req.json();
    const parsed = blogUpdateSchema.parse({ ...json, slug });
    const updated = db.updateBlogPost(parsed);
    if (!updated) {
      return NextResponse.json(
        { error: "Blog post not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(updated);
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || "Failed to update blog post" },
      { status: 400 }
    );
  }
}

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const ok = db.deleteBlogPost(slug);
    if (!ok) {
      return NextResponse.json(
        { error: "Blog post not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || "Failed to delete blog post" },
      { status: 400 }
    );
  }
}
