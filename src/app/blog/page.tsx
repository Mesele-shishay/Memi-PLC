"use client";
import React from "react";
import Link from "next/link";
import { Calendar, MessageCircle, Tag, Bookmark } from "lucide-react";
import Header from "@/components/Header";
import headerData from "@/components/headerData";
import { useSearchParams, useRouter } from "next/navigation";
import Pagination from "@/components/Pagination";

export default function BlogPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pageParam = searchParams.get("page");
  const currentPage = pageParam ? parseInt(pageParam, 10) : 1;
  const blogPosts = [
    {
      slug: "how-to-spend-perfect-day-croatia",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "How to Spend the Perfect Day on Croatia's Most Magical Island",
      excerpt:
        "Discover the ultimate guide to experiencing the most magical island in Croatia. From hidden beaches to local cuisine, this comprehensive guide will help you plan the perfect day.",
      author: "Schloss",
      date: "July 14, 2022",
      category: "Travel",
      readTime: "8 min read",
      authorImage:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80",
    },
    {
      slug: "house-boating-lake-shasta",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "House Boating On Lake Shasta",
      excerpt:
        "The Best Way To Spend A Long 4th of July Weekend. Wake Boarding, Swimming, Barbecues and unforgettable memories on the water.",
      author: "James",
      date: "July 14, 2022",
      category: "Adventure",
      readTime: "6 min read",
      authorImage:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80",
    },
    {
      slug: "choose-right-laptop",
      image:
        "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "How To Choose The Right Laptop For Remote Work",
      excerpt:
        "Choosing The Right Laptop For Programming Can Be A Tough Process. It's Easy To Get Confused with all the options available.",
      author: "Robert",
      date: "July 14, 2022",
      category: "Technology",
      readTime: "10 min read",
      authorImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80",
    },
    {
      slug: "buying-new-car-sense",
      image:
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Why Buying A New Car Makes More Sense Than Ever",
      excerpt:
        "Many Experts Will Tell You Buying Cars Used Is Best For Your Long Term Financial Health. Here's why that might be changing.",
      author: "Mary",
      date: "July 14, 2022",
      category: "Finance",
      readTime: "7 min read",
      authorImage:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80",
    },
    {
      slug: "lasagne-pasta-cake",
      image:
        "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Lasagne Is But A Pasta Cake",
      excerpt:
        "We Discuss The Decoration Of A Common Food From A Different Perspective - A... Pasta Cake that will change how you think about Italian cuisine.",
      author: "Jon Karrther",
      date: "July 14, 2022",
      category: "Food",
      readTime: "5 min read",
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
            Discover stories, tips, and insights from our team of writers and
            contributors.
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
