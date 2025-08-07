"use client";
import React, { Suspense, useMemo } from "react";
import Link from "next/link";
import { Calendar, MessageCircle, Tag, Bookmark, X } from "lucide-react";
import Header from "@/components/Header";
import headerData from "@/components/headerData";
import { useSearchParams, useRouter } from "next/navigation";
import Pagination from "@/components/Pagination";
import { getAllBlogPosts, getBlogPostsByCategory, getUniqueCategories } from "@/lib/mockApi";

function BlogPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pageParam = searchParams.get("page");
  const tagParam = searchParams.get("tag");
  const currentPage = pageParam ? parseInt(pageParam, 10) : 1;
  const allBlogPosts = getAllBlogPosts();

  // Filter posts by tag if tag parameter is present
  const filteredPosts = useMemo(() => {
    if (!tagParam) return allBlogPosts;
    return getBlogPostsByCategory(tagParam);
  }, [allBlogPosts, tagParam]);

  const postsPerPage = 3;
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const paginatedPosts = filteredPosts.slice(
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

  const clearTagFilter = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("tag");
    params.delete("page"); // Reset to first page when clearing filter
    router.push(`?${params.toString()}`);
  };

  // Get unique categories for tag filtering
  const categories = useMemo(() => {
    return getUniqueCategories();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100">
      <Header {...headerData} />
      <div className="pt-24 lg:pt-32 container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 max-w-7xl">
        {/* Blog Section Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
            Blog
          </h1>
          <div className="flex justify-center mb-4">
            <span className="inline-block w-16 h-1 rounded bg-gradient-to-r from-primary to-accent"></span>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover insights, stories, and updates from our community and
            industry experts.
          </p>
        </div>

        {/* Tag Filter Section */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm font-medium text-gray-700">
              Filter by:
            </span>
            {categories.map((category) => (
              <Link
                key={category}
                href={`/blog?tag=${encodeURIComponent(category)}`}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200 ${
                  tagParam === category
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </Link>
            ))}
            {tagParam && (
              <button
                onClick={clearTagFilter}
                className="inline-flex items-center gap-1 px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-300 transition-colors duration-200"
              >
                <X className="w-3 h-3" />
                Clear Filter
              </button>
            )}
          </div>
        </div>

        {/* Results Summary */}
        {tagParam && (
          <div className="mb-6">
            <p className="text-gray-600">
              Showing {filteredPosts.length} post
              {filteredPosts.length !== 1 ? "s" : ""} for "{tagParam}"
            </p>
          </div>
        )}

        {/* Blog Posts Grid */}
        {paginatedPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group relative bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
              >
                {/* Blog Post Image */}
                <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden group-hover:bg-gradient-to-br group-hover:from-primary-100 group-hover:to-accent-100 transition-all duration-300">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback to emoji if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      const fallbackDiv =
                        target.nextElementSibling as HTMLElement;
                      if (fallbackDiv) {
                        fallbackDiv.style.display = "flex";
                      }
                    }}
                  />
                  {/* Fallback emoji */}
                  <div
                    className="absolute inset-0 flex items-center justify-center text-6xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                    style={{ display: "none" }}
                  >
                    📝
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-accent-400/20 group-hover:from-primary-400/30 group-hover:to-accent-400/30 transition-all duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center px-2 py-1 rounded-lg text-xs font-medium bg-white/90 backdrop-blur-sm border border-gray-200">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Blog Post Content */}
                <div className="p-6">
                  {/* Blog Post Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        by {post.author}
                      </p>
                    </div>
                  </div>

                  {/* Blog Post Description */}
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>

                  {/* Blog Post Meta */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      <span className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {post.date}
                      </span>
                      <span className="flex items-center">
                        <MessageCircle className="w-3 h-3 mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Tag className="w-3 h-3 text-gray-400" />
                      <span className="text-xs text-gray-500">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <img
                        src={post.authorImage}
                        alt={post.author}
                        className="w-8 h-8 rounded-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = "none";
                          const fallbackDiv =
                            target.nextElementSibling as HTMLElement;
                          if (fallbackDiv) {
                            fallbackDiv.style.display = "flex";
                          }
                        }}
                      />
                      <div
                        className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium text-gray-600"
                        style={{ display: "none" }}
                      >
                        {post.author.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {post.author}
                        </p>
                        <p className="text-xs text-gray-500">{post.date}</p>
                      </div>
                    </div>
                    <span className="text-sm text-primary font-medium">
                      Read More →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No posts found
            </h3>
            <p className="text-gray-600 mb-4">
              {tagParam
                ? `No posts found for "${tagParam}". Try a different filter.`
                : "No blog posts available at the moment."}
            </p>
            {tagParam && (
              <button
                onClick={clearTagFilter}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-200"
              >
                <X className="w-4 h-4" />
                Clear Filter
              </button>
            )}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default function BlogPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BlogPageContent />
    </Suspense>
  );
}
