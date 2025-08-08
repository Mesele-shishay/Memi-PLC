import React from "react";
import { ChevronLeft, ChevronRight, Bookmark } from "lucide-react";
import Link from "next/link";
import { getRelatedPosts } from "@/lib/mockApi";

interface RelatedPostsProps {
  currentSlug: string;
}

export default function RelatedPosts({ currentSlug }: RelatedPostsProps) {
  // Get related posts from API, excluding current post
  const relatedPosts = getRelatedPosts(currentSlug, 4);

  return (
    <div>
      {/* Section Header with Navigation */}
      <div className="flex items-center justify-between mb-6 lg:mb-8">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-2">
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-primary"></div>
          Related Posts
        </h3>
        <div className="flex gap-2">
          <button className="w-8 h-8 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-gray-50 transition-colors">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button className="w-8 h-8 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-gray-50 transition-colors">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Related Posts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {relatedPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all block"
          >
            {/* Post Image */}
            <div className="relative">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <button className="absolute top-2 right-2 sm:top-3 sm:right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50 transition-colors">
                <Bookmark className="w-4 h-4 text-gray-600" />
              </button>
            </div>

            {/* Post Content */}
            <div className="p-3 sm:p-4">
              <h4 className="font-bold text-gray-900 mb-2 line-clamp-2 text-sm sm:text-base group-hover:text-primary transition-colors">
                {post.title}
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 line-clamp-3">
                {post.excerpt}
              </p>

              {/* Author and Date */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src={post.authorImage}
                    alt={post.author}
                    className="w-5 h-5 sm:w-6 sm:h-6 rounded-full object-cover"
                  />
                  <span className="text-xs sm:text-sm text-gray-700">
                    {post.author}
                  </span>
                </div>
                <span className="text-xs text-gray-500">{post.date}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
