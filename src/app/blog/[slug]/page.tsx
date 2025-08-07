import React from "react";
import BlogPost from "@/components/BlogPost";
import RelatedPosts from "@/components/RelatedPosts";
import Header from "@/components/Header";
import headerData from "@/components/headerData";

interface BlogDetailPageProps {
  params: {
    slug: string;
  };
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  // In a real app, you would fetch the blog post data based on the slug
  // For now, we'll use the existing data structure

  return (
    <div className="min-h-screen bg-white">
      <Header {...headerData} />
      <div className="pt-24 lg:pt-32 container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 max-w-7xl">
        <BlogPost slug={params.slug} />
        <RelatedPosts currentSlug={params.slug} />
      </div>
    </div>
  );
}
