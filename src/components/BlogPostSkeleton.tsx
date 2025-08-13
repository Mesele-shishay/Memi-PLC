import React from "react";

interface BlogPostSkeletonProps {
  count?: number;
}

export default function BlogPostSkeleton({ count = 6 }: BlogPostSkeletonProps) {
  return (
    <div className="space-y-8">
      {/* Loading text */}
      <div className="text-center mb-8">
        <h3 className="text-lg font-semibold text-primary-700 mb-2">
          Loading blog posts...
        </h3>
        <p className="text-sm text-primary-600/90">
          Please wait while we fetch the latest articles
        </p>
      </div>

      {/* Skeleton loading cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(count)].map((_, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden animate-pulse"
          >
            {/* Skeleton image */}
            <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300"></div>

            {/* Skeleton content */}
            <div className="p-6 space-y-4">
              {/* Skeleton title */}
              <div className="space-y-2">
                <div className="h-5 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>

              {/* Skeleton description */}
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                <div className="h-4 bg-gray-200 rounded w-4/6"></div>
              </div>

              {/* Skeleton meta */}
              <div className="flex items-center justify-between">
                <div className="flex space-x-4">
                  <div className="h-3 bg-gray-200 rounded w-16"></div>
                  <div className="h-3 bg-gray-200 rounded w-20"></div>
                </div>
                <div className="h-3 bg-gray-200 rounded w-12"></div>
              </div>

              {/* Skeleton author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                  <div className="space-y-1">
                    <div className="h-3 bg-gray-200 rounded w-20"></div>
                    <div className="h-2 bg-gray-200 rounded w-16"></div>
                  </div>
                </div>
                <div className="h-4 bg-gray-200 rounded w-24"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
