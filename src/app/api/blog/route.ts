import { NextResponse } from "next/server";
import { getAllBlogPosts } from "@/lib/mockApi";

export async function GET() {
  try {
    const blogPosts = getAllBlogPosts();
    return NextResponse.json(blogPosts);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch blog posts" },
      { status: 500 }
    );
  }
}
