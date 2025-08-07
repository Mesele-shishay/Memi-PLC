import React from "react";
import {
  Calendar,
  MessageCircle,
  Tag,
  Share2,
  Bookmark,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";
import {
  getAllBlogPosts,
  getTopPosts,
  getUniqueCategories,
} from "@/lib/mockApi";

// Define the BlogPost interface locally since it's not exported from mockApi
interface BlogPostType {
  slug: string;
  image: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  authorImage: string;
}

interface BlogPostProps {
  slug: string;
  post?: BlogPostType;
}

export default function BlogPost({ slug, post }: BlogPostProps) {
  // If no post data is provided, we'll use default content
  const postData: BlogPostType = post || {
    slug,
    image: "",
    title: "",
    excerpt: "",
    author: "",
    date: "",
    category: "",
    readTime: "",
    authorImage: "",
  };

  // Get top posts from API, excluding current post
  const topPosts = getTopPosts(slug, 5).map((post) => ({
    slug: post.slug,
    image: post.image,
    title: post.title,
    author: post.author,
  }));

  // Get unique categories from all blog posts for tags
  const tags = getUniqueCategories();

  return (
    <div className="mb-8">
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 mb-12">
        {/* Main Content Area - 70% width on desktop, full width on mobile */}
        <div className="w-full lg:w-[70%]">
          {/* Main Title */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 lg:mb-6">
            {postData.title}
          </h1>

          {/* Featured Image */}
          <div className="mb-4 lg:mb-6">
            <img
              src={postData.image}
              alt={postData.title}
              className="w-full h-48 sm:h-64 lg:h-96 object-cover rounded-lg"
            />
          </div>

          {/* Metadata */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 mb-4 lg:mb-6 text-gray-600 text-sm sm:text-base">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{postData.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              <span>Comments: 18</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4" />
              <span>Category: {postData.category}</span>
            </div>
          </div>

          {/* Article Heading */}
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 lg:mb-4">
            Don't Wait. The Purpose Of Our Lives Is To Be Happy!
          </h3>

          {/* Article Text */}
          <p className="text-gray-700 leading-relaxed mb-4 lg:mb-6 text-sm sm:text-base">
            {postData.excerpt}
          </p>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            {postData.excerpt}
          </p>
        </div>

        {/* Sidebar - 30% width on desktop, full width on mobile */}
        <div className="w-full lg:w-[30%]">
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-2 mb-6 lg:mb-8">
            <button className="flex items-center gap-2 px-3 sm:px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors text-sm sm:text-base">
              <Share2 className="w-4 h-4" />
              Share
            </button>
            <button className="flex items-center gap-2 px-3 sm:px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors text-sm sm:text-base">
              <Bookmark className="w-4 h-4" />
              Marking
            </button>
            <button className="flex items-center gap-2 px-3 sm:px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors text-sm sm:text-base">
              <MessageCircle className="w-4 h-4" />
              Comment
            </button>
          </div>

          {/* Tags Section */}
          <div className="mb-6 lg:mb-8">
            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 lg:mb-4 flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500"></div>
              Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/blog?tag=${encodeURIComponent(tag)}`}
                  className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs sm:text-sm hover:bg-gray-200 transition-colors cursor-pointer"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>

          {/* Top Posts Section */}
          <div>
            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 lg:mb-4 flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500"></div>
              Top Post
            </h3>
            <div className="space-y-3 lg:space-y-4">
              {topPosts.map((post, index) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="flex gap-2 sm:gap-3 hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h4 className="text-xs sm:text-sm font-medium text-gray-900 line-clamp-2 hover:text-primary transition-colors duration-200">
                      {post.title}
                    </h4>
                    <p className="text-xs text-gray-600 mt-1">{post.author}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
