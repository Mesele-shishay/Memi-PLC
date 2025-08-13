import React from "react";

export default function CourseDetailSkeleton() {
  return (
    <div className="min-h-screen bg-white">
      <div className="pt-24 lg:pt-32 container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 max-w-7xl">
        {/* Breadcrumb Skeleton */}
        <nav className="mb-6">
          <div className="flex items-center space-x-2">
            <div className="h-4 bg-gray-200 rounded w-16"></div>
            <div className="text-gray-400">/</div>
            <div className="h-4 bg-gray-200 rounded w-20"></div>
            <div className="text-gray-400">/</div>
            <div className="h-4 bg-gray-200 rounded w-32"></div>
          </div>
        </nav>

        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 mb-12">
          {/* Main Content Area Skeleton */}
          <div className="w-full lg:w-[70%]">
            {/* Title Skeleton */}
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-4 lg:mb-6"></div>

            {/* Featured Image Skeleton */}
            <div className="mb-4 lg:mb-6 relative">
              <div className="w-full h-48 sm:h-64 lg:h-96 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg animate-pulse"></div>
              {/* Course badges skeleton */}
              <div className="absolute top-4 left-4 flex gap-2">
                <div className="w-16 h-6 bg-gray-200 rounded animate-pulse"></div>
                <div className="w-12 h-6 bg-gray-200 rounded animate-pulse"></div>
              </div>
            </div>

            {/* Metadata Skeleton */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 mb-4 lg:mb-6">
              <div className="flex items-center gap-2">
                <div className="w-16 h-4 bg-gray-200 rounded"></div>
                <div className="w-20 h-4 bg-gray-200 rounded"></div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-20 h-4 bg-gray-200 rounded"></div>
                <div className="w-16 h-4 bg-gray-200 rounded"></div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-20 h-4 bg-gray-200 rounded"></div>
                <div className="w-24 h-4 bg-gray-200 rounded"></div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-20 h-4 bg-gray-200 rounded"></div>
                <div className="w-16 h-4 bg-gray-200 rounded"></div>
              </div>
            </div>

            {/* Section Heading Skeleton */}
            <div className="h-6 bg-gray-200 rounded w-48 mb-3 lg:mb-4"></div>

            {/* Features List Skeleton */}
            <ul className="list-disc pl-6 mb-6 space-y-2">
              {[...Array(5)].map((_, i) => (
                <li key={i}>
                  <div className="h-4 bg-gray-200 rounded w-full max-w-md"></div>
                </li>
              ))}
            </ul>

            {/* Description Skeleton */}
            <div className="h-6 bg-gray-200 rounded w-40 mb-3 lg:mb-4"></div>
            <div className="space-y-2 mb-4 lg:mb-6">
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded w-4/6"></div>
            </div>

            {/* Instructor Skeleton */}
            <div className="flex items-center gap-3 mt-8">
              <div className="w-12 h-12 bg-gray-200 rounded-full animate-pulse"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-24"></div>
                <div className="h-3 bg-gray-200 rounded w-20"></div>
              </div>
            </div>
          </div>

          {/* Sidebar Skeleton */}
          <div className="w-full lg:w-[30%]">
            {/* Back to Courses Button Skeleton */}
            <div className="mb-6">
              <div className="w-32 h-8 bg-gray-200 rounded animate-pulse"></div>
            </div>

            {/* Action Buttons Skeleton */}
            <div className="flex flex-wrap gap-2 mb-6 lg:mb-8">
              <div className="w-20 h-8 bg-gray-200 rounded animate-pulse"></div>
              <div className="w-16 h-8 bg-gray-200 rounded animate-pulse"></div>
              <div className="w-20 h-8 bg-gray-200 rounded animate-pulse"></div>
            </div>

            {/* Tags Section Skeleton */}
            <div className="mb-6 lg:mb-8">
              <div className="h-5 bg-gray-200 rounded w-16 mb-3 lg:mb-4"></div>
              <div className="flex flex-wrap gap-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-16 h-6 bg-gray-200 rounded animate-pulse"
                  ></div>
                ))}
              </div>
            </div>

            {/* Related Courses Section Skeleton */}
            <div>
              <div className="h-5 bg-gray-200 rounded w-32 mb-3 lg:mb-4"></div>
              <div className="space-y-3 lg:space-y-4">
                {[...Array(3)].map((_, index) => (
                  <div key={index} className="flex gap-2 sm:gap-3 p-2">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-200 rounded animate-pulse"></div>
                    <div className="flex-1 space-y-2">
                      <div className="h-4 bg-gray-200 rounded w-full"></div>
                      <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Price and CTA Skeleton */}
            <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200 flex flex-col items-center">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-20 h-8 bg-gray-200 rounded animate-pulse"></div>
                <div className="w-16 h-6 bg-gray-200 rounded animate-pulse"></div>
              </div>
              <div className="w-full h-12 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
