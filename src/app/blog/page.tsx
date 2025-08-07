"use client";
import React, { Suspense } from "react";
import Link from "next/link";
import { Calendar, MessageCircle, Tag, Bookmark } from "lucide-react";
import Header from "@/components/Header";
import headerData from "@/components/headerData";
import { useSearchParams, useRouter } from "next/navigation";
import Pagination from "@/components/Pagination";

function BlogPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pageParam = searchParams.get("page");
  const currentPage = pageParam ? parseInt(pageParam, 10) : 1;
  const blogPosts = [
    {
      slug: "ethiopian-coffee-ceremony-guide",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title:
        "The Complete Guide to Ethiopian Coffee Ceremony: A Cultural Journey",
      excerpt:
        "Discover the ancient tradition of Ethiopian coffee ceremony, from the roasting process to the three rounds of serving. Learn about its cultural significance and how to host your own ceremony.",
      author: "Tigist Alemu",
      date: "December 15, 2023",
      category: "Culture",
      readTime: "8 min read",
      authorImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80",
    },
    {
      slug: "addis-ababa-tech-startup-scene",
      image:
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title:
        "Addis Ababa's Thriving Tech Startup Ecosystem: What You Need to Know",
      excerpt:
        "Explore the growing technology scene in Ethiopia's capital, from innovative startups to digital transformation initiatives that are shaping the country's future.",
      author: "Samuel Getachew",
      date: "December 12, 2023",
      category: "Technology",
      readTime: "10 min read",
      authorImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80",
    },
    {
      slug: "ethiopian-cuisine-beginners-guide",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",

      title: "Ethiopian Cuisine for Beginners: Essential Dishes and Flavors",
      excerpt:
        "From Injera to Doro Wat, discover the essential dishes that make Ethiopian cuisine unique. Learn about spices, cooking techniques, and where to find authentic Ethiopian food.",
      author: "Sara Abebe",
      date: "December 10, 2023",
      category: "Food",
      readTime: "12 min read",
      authorImage:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80",
    },
    {
      slug: "amharic-language-learning-tips",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Learning Amharic: Practical Tips for Beginners and Travelers",
      excerpt:
        "Master the basics of Ethiopia's official language with practical phrases, pronunciation guides, and cultural context that will help you connect with locals.",
      author: "Mulugeta Bekele",
      date: "December 8, 2023",
      category: "Language",
      readTime: "7 min read",
      authorImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80",
    },
    {
      slug: "ethiopian-business-opportunities",
      image:
        "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Business Opportunities in Ethiopia: A Guide for Entrepreneurs",
      excerpt:
        "Discover emerging business opportunities in Ethiopia's growing economy, from agriculture to technology, and learn about the regulatory environment for foreign investors.",
      author: "Hanna Mekonnen",
      date: "December 5, 2023",
      category: "Business",
      readTime: "9 min read",
      authorImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80",
    },
  ];

  const postsPerPage = 3;
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);
  const paginatedPosts = blogPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    if (page === 1) {
      params.delete("page");
    } else {
      params.set("page", String(page));
    }
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100">
      <Header {...headerData} />
      <div className="pt-24 lg:pt-32 container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 max-w-7xl">
        {/* Blog Section Header */}
        <div className="text-center mb-12">
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our latest blog posts and stay updated on the latest news
            and insights from Memi Place.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedPosts.map((post, index) => (
            <Link
              key={index}
              href={`/blog/${post.slug}`}
              className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 block group"
            >
              {/* Post Image */}
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:bg-gray-100 transition-colors">
                  <Bookmark className="w-4 h-4 text-gray-600" />
                </button>
                <div className="absolute bottom-3 left-3">
                  <span className="px-2 py-1 bg-white/90 text-xs font-medium text-gray-700 rounded shadow">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Post Content */}
              <div className="p-6">
                <h2 className="font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors text-lg lg:text-xl">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Metadata */}
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <img
                    src={post.authorImage}
                    alt={post.author}
                    className="w-8 h-8 rounded-full object-cover border border-gray-200"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {post.author}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default function BlogPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100">
          <Header {...headerData} />
          <div className="pt-24 lg:pt-32 container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 max-w-7xl">
            <div className="text-center">
              <div className="animate-pulse">
                <div className="h-4 bg-gray-200 rounded w-1/4 mx-auto mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
              </div>
            </div>
          </div>
        </div>
      }
    >
      <BlogPageContent />
    </Suspense>
  );
}
