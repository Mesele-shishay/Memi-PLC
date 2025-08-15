import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function CourseDetailSkeleton() {
  return (
    <div className="min-h-screen bg-white">
      <div className="pt-24 lg:pt-32 container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 max-w-7xl">
        {/* Breadcrumb Skeleton */}
        <nav className="mb-6">
          <div className="flex items-center space-x-2">
            <Skeleton className="h-4 w-16" />
            <div className="text-gray-400">/</div>
            <Skeleton className="h-4 w-20" />
            <div className="text-gray-400">/</div>
            <Skeleton className="h-4 w-32" />
          </div>
        </nav>

        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 mb-12">
          {/* Main Content Area Skeleton */}
          <div className="w-full lg:w-[70%]">
            {/* Title Skeleton */}
            <Skeleton className="h-8 w-3/4 mb-4 lg:mb-6" />

            {/* Featured Image Skeleton */}
            <div className="mb-4 lg:mb-6 relative">
              <Skeleton className="w-full h-48 sm:h-64 lg:h-96 rounded-lg" />
              {/* Course badges skeleton */}
              <div className="absolute top-4 left-4 flex gap-2">
                <Skeleton className="w-16 h-6 rounded" />
                <Skeleton className="w-12 h-6 rounded" />
              </div>
            </div>

            {/* Metadata Skeleton */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 mb-4 lg:mb-6">
              <div className="flex items-center gap-2">
                <Skeleton className="w-16 h-4" />
                <Skeleton className="w-20 h-4" />
              </div>
              <div className="flex items-center gap-2">
                <Skeleton className="w-20 h-4" />
                <Skeleton className="w-16 h-4" />
              </div>
              <div className="flex items-center gap-2">
                <Skeleton className="w-20 h-4" />
                <Skeleton className="w-24 h-4" />
              </div>
              <div className="flex items-center gap-2">
                <Skeleton className="w-20 h-4" />
                <Skeleton className="w-16 h-4" />
              </div>
            </div>

            {/* Section Heading Skeleton */}
            <Skeleton className="h-6 w-48 mb-3 lg:mb-4" />

            {/* Features List Skeleton */}
            <ul className="list-disc pl-6 mb-6 space-y-2">
              {[...Array(5)].map((_, i) => (
                <li key={i}>
                  <Skeleton className="h-4 w-full max-w-md" />
                </li>
              ))}
            </ul>

            {/* Description Skeleton */}
            <Skeleton className="h-6 w-40 mb-3 lg:mb-4" />
            <div className="space-y-2 mb-4 lg:mb-6">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-4/6" />
            </div>

            {/* Instructor Skeleton */}
            <div className="flex items-center gap-3 mt-8">
              <Skeleton className="w-12 h-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-3 w-20" />
              </div>
            </div>
          </div>

          {/* Sidebar Skeleton */}
          <div className="w-full lg:w-[30%]">
            {/* Back to Courses Button Skeleton */}
            <div className="mb-6">
              <Skeleton className="w-32 h-8" />
            </div>

            {/* Action Buttons Skeleton */}
            <div className="flex flex-wrap gap-2 mb-6 lg:mb-8">
              <Skeleton className="w-20 h-8" />
              <Skeleton className="w-16 h-8" />
              <Skeleton className="w-20 h-8" />
            </div>

            {/* Tags Section Skeleton */}
            <div className="mb-6 lg:mb-8">
              <Skeleton className="h-5 w-16 mb-3 lg:mb-4" />
              <div className="flex flex-wrap gap-2">
                {[...Array(4)].map((_, i) => (
                  <Skeleton key={i} className="w-16 h-6 rounded" />
                ))}
              </div>
            </div>

            {/* Related Courses Section Skeleton */}
            <div>
              <Skeleton className="h-5 w-32 mb-3 lg:mb-4" />
              <div className="space-y-3 lg:space-y-4">
                {[...Array(3)].map((_, index) => (
                  <div key={index} className="flex gap-2 sm:gap-3 p-2">
                    <Skeleton className="w-12 h-12 sm:w-16 sm:h-16 rounded" />
                    <div className="flex-1 space-y-2">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-3 w-3/4" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Price and CTA Skeleton */}
            <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200 flex flex-col items-center">
              <div className="flex items-center space-x-2 mb-2">
                <Skeleton className="w-20 h-8" />
                <Skeleton className="w-16 h-6" />
              </div>
              <Skeleton className="w-full h-12" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
