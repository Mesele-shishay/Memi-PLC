import React from "react";
import BlogPost from "@/components/BlogPost";
import RelatedPosts from "@/components/RelatedPosts";
import Header from "@/components/Header";
import headerData from "@/components/headerData";
import { getBlogPostBySlug } from "@/lib/mockApi";

interface BlogDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  // Await the params promise in Next.js 15
  const { slug } = await params;

  // In a real app, you would fetch the blog post data based on the slug
  // For now, we'll use the existing data structure

  return (
    <div className="min-h-screen bg-white">
      <Header {...headerData} />
      <div className="pt-24 lg:pt-32 container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 max-w-7xl">
        <BlogPost slug={slug} />
        <RelatedPosts currentSlug={slug} />
      </div>
    </div>
  );
}
