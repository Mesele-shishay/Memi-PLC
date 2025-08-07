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

interface BlogPostProps {
  slug: string;
}

export default function BlogPost({ slug }: BlogPostProps) {
  return (
    <div className="mb-8">
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 mb-12">
        {/* Main Content Area - 70% width on desktop, full width on mobile */}
        <div className="w-full lg:w-[70%]">
          {/* Main Title */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 lg:mb-6">
            How to Spend the Perfect Day on Croatia's Most Magical Island
          </h1>

          {/* Featured Image */}
          <div className="mb-4 lg:mb-6">
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Kayaking in Croatia"
              className="w-full h-48 sm:h-64 lg:h-96 object-cover rounded-lg"
            />
          </div>

          {/* Metadata */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 mb-4 lg:mb-6 text-gray-600 text-sm sm:text-base">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>July 14, 2022</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              <span>Comments: 18</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4" />
              <span>Category: Sport</span>
            </div>
          </div>

          {/* Article Heading */}
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 lg:mb-4">
            Don't Wait. The Purpose Of Our Lives Is To Be Happy!
          </h3>

          {/* Article Text */}
          <p className="text-gray-700 leading-relaxed mb-4 lg:mb-6 text-sm sm:text-base">
            Upon arrival, your senses will be rewarded with the pleasant scent
            of lemongrass oil used to clean the natural wood found throughout
            the room, creating a relaxing atmosphere within the space. The
            gentle hum of the air conditioning and the soft rustle of palm
            leaves outside create a symphony of tranquility that immediately
            puts you at ease.
          </p>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            As you step onto the private balcony, the breathtaking view of the
            Adriatic Sea stretches before you like an endless canvas of blue.
            The crystal-clear waters sparkle in the Mediterranean sun, inviting
            you to dive in and explore the underwater world that lies beneath.
            The island's rugged coastline, dotted with hidden coves and pristine
            beaches, promises endless adventures and unforgettable memories.
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
              {[
                "Montenegro",
                "Wall Croatia",
                "Luxury Travel",
                "Travel Log",
                "Paradise Island",
                "Travel Info",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs sm:text-sm hover:bg-gray-200 transition-colors cursor-pointer"
                >
                  {tag}
                </span>
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
              {[
                {
                  image:
                    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
                  title:
                    "How To Spend The Perfect Day On Croatia's Most Magical Island",
                  author: "Schloss",
                },
                {
                  image:
                    "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
                  title:
                    "How To Spend The Perfect Day On Croatia's Most Magical Island",
                  author: "Schloss",
                },
                {
                  image:
                    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
                  title:
                    "How To Spend The Perfect Day On Croatia's Most Magical Island",
                  author: "Schloss",
                },
                {
                  image:
                    "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
                  title:
                    "How To Spend The Perfect Day On Croatia's Most Magical Island",
                  author: "Schloss",
                },
                {
                  image:
                    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
                  title:
                    "How To Spend The Perfect Day On Croatia's Most Magical Island",
                  author: "Schloss",
                },
              ].map((post, index) => (
                <div key={index} className="flex gap-2 sm:gap-3">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h4 className="text-xs sm:text-sm font-medium text-gray-900 line-clamp-2">
                      {post.title}
                    </h4>
                    <p className="text-xs text-gray-600 mt-1">{post.author}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
