import React from "react";
import { ChevronLeft, ChevronRight, Bookmark } from "lucide-react";
import Link from "next/link";

interface RelatedPostsProps {
  currentSlug: string;
}

export default function RelatedPosts({ currentSlug }: RelatedPostsProps) {
  const relatedPosts = [
    {
      slug: "house-boating-lake-shasta",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "House Boating On Lake Shasta",
      subtitle:
        "The Best Way To Spend A Long 4th of July Weekend. Wake Boarding, Swimming, Barbecues...",
      author: "James",
      date: "July 14, 2022",
      authorImage:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80",
    },
    {
      slug: "choose-right-laptop",
      image:
        "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "How To Choose The Right Laptop For...",
      subtitle:
        "Choosing The Right Laptop For Programming Can Be A Tough Process. It's Easy To Get Confused...",
      author: "Robert",
      date: "July 14, 2022",
      authorImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80",
    },
    {
      slug: "buying-new-car-sense",
      image:
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Why Buying A New Car Makes More Sense...",
      subtitle:
        "Many Experts Will Tell You Buying Cars Used Is Best For Your Long Term Financial Health. Here's...",
      author: "Mary",
      date: "July 14, 2022",
      authorImage:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80",
    },
    {
      slug: "lasagne-pasta-cake",
      image:
        "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Lasagne Is But A Pasta Cake",
      subtitle:
        "We Discuss The Decoration Of A Common Food From A Different Perspective - A... Pasta Cake",
      author: "Jon Karrther",
      date: "July 14, 2022",
      authorImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80",
    },
  ];

  return (
    <div>
      {/* Section Header with Navigation */}
      <div className="flex items-center justify-between mb-6 lg:mb-8">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-2">
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500"></div>
          Related Posts
        </h3>
        <div className="flex gap-2">
          <button className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
            <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" />
          </button>
          <button className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>

             {/* Related Posts Grid */}
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
         {relatedPosts
           .filter(post => post.slug !== currentSlug) // Exclude current post
           .map((post, index) => (
           <Link
             key={index}
             href={`/blog/${post.slug}`}
             className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow block"
           >
            {/* Post Image */}
            <div className="relative">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-40 sm:h-48 object-cover"
              />
              <button className="absolute top-2 right-2 sm:top-3 sm:right-3 w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50 transition-colors">
                <Bookmark className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
              </button>
            </div>

            {/* Post Content */}
            <div className="p-3 sm:p-4">
              <h4 className="font-bold text-gray-900 mb-2 line-clamp-2 text-sm sm:text-base">
                {post.title}
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 line-clamp-3">
                {post.subtitle}
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
