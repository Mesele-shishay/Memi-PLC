import React from "react";
import BlogPost from "@/components/BlogPost";
import RelatedPosts from "@/components/RelatedPosts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import headerData from "@/components/headerData";
import { api } from "@/lib/apiClient";
import { notFound } from "next/navigation";

interface BlogDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  // Await the params promise in Next.js 15
  const { slug } = await params;

  // Fetch the blog post data based on the slug
  const post = await api.get<any>(`/blog/${slug}`);
  if (!post) {
    notFound();
  }

  // Fetch all posts for sidebar data via API route for consistency
  const allPosts = await api.internal<any[]>("/api/blog");
  const topPosts = (allPosts || [])
    .filter((p) => p.slug !== slug)
    .slice(0, 5)
    .map((p) => ({
      slug: p.slug,
      image: p.image,
      title: p.title,
      author: p.author,
    }));
  const tags = Array.from(
    new Set((allPosts || []).map((p) => p.category))
  ).filter(Boolean);

  return (
    <div className="min-h-screen bg-white">
      <Header {...headerData} />
      <div className="pt-24 lg:pt-32 container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 max-w-7xl">
        <BlogPost slug={slug} post={post} topPosts={topPosts} tags={tags} />
        <RelatedPosts currentSlug={slug} />
      </div>
      <Footer />
    </div>
  );
}
