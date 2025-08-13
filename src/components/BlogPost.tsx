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

// Define the BlogPost interface locally
interface BlogPostType {
  slug: string;
  image: string;
  title: string;
  description: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  authorImage: string;
}

interface BlogPostProps {
  slug: string;
  post: BlogPostType;
  topPosts?: { slug: string; image: string; title: string; author: string }[];
  tags?: string[];
}

export default function BlogPost({
  slug,
  post,
  topPosts = [],
  tags = [],
}: BlogPostProps) {
  const postData: BlogPostType = post;

  return (
    <div className="mb-8">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 mb-12">
        {/* Main Content */}
        <div className="w-full lg:w-[70%]">
          <div className="mb-6 lg:mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-3">
              {postData.title}
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
              <span className="inline-flex items-center gap-2">
                <Calendar className="w-4 h-4" /> {postData.date}
              </span>

              <span className="inline-flex items-center gap-2">
                <Tag className="w-4 h-4" /> {postData.category}
              </span>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl shadow-sm border border-gray-200">
            <img
              src={postData.image}
              alt={postData.title}
              className="w-full h-56 sm:h-72 lg:h-[28rem] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />
          </div>

          <article
            className="prose prose-slate max-w-none mt-6 prose-headings:tracking-tight prose-a:text-primary"
            dangerouslySetInnerHTML={{ __html: postData.description }}
          />
        </div>

        {/* Sidebar */}
        <aside className="w-full lg:w-[30%] space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-primary" />{" "}
              Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/blog?tag=${encodeURIComponent(tag)}`}
                  className="px-3 py-1.5 bg-white text-gray-700 rounded-full text-xs sm:text-sm border border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-primary" />{" "}
              Top Posts
            </h3>
            <div className="space-y-3 lg:space-y-4">
              {topPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="flex gap-3 hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200 border border-transparent hover:border-gray-200"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-gray-900 line-clamp-2 hover:text-primary transition-colors duration-200">
                      {post.title}
                    </h4>
                    <p className="text-xs text-gray-600 mt-1">{post.author}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
