"use client";
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface BlogPostDetailSkeletonProps {
  showSidebar?: boolean;
}

export default function BlogPostDetailSkeleton({
  showSidebar = true,
}: BlogPostDetailSkeletonProps) {
  return (
    <div className="mb-8">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 mb-12">
        {/* Main Content */}
        <div className="w-full lg:w-[70%]">
          <div className="mb-6 lg:mb-8">
            <Skeleton className="h-8 sm:h-10 w-3/4 mb-3" />
            <div className="flex flex-wrap items-center gap-3">
              <Skeleton className="h-4 w-28" />
              <Skeleton className="h-4 w-24" />
            </div>
          </div>

          <Skeleton className="w-full h-56 sm:h-72 lg:h-[28rem] rounded-2xl" />

          <div className="mt-6 space-y-3">
            <Skeleton className="h-5 w-11/12" />
            <Skeleton className="h-5 w-10/12" />
            <Skeleton className="h-5 w-9/12" />
            <Skeleton className="h-5 w-10/12" />
            <Skeleton className="h-5 w-8/12" />
          </div>
        </div>

        {/* Sidebar */}
        {showSidebar && (
          <aside className="w-full lg:w-[30%] space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Skeleton className="w-2 h-2 rounded-full" />
                <Skeleton className="h-5 w-20" />
              </div>
              <div className="flex flex-wrap gap-2">
                {Array.from({ length: 6 }).map((_, i) => (
                  <Skeleton key={i} className="h-7 w-20 rounded-full" />
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <Skeleton className="w-2 h-2 rounded-full" />
                <Skeleton className="h-5 w-24" />
              </div>
              <div className="space-y-3 lg:space-y-4">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={i}
                    className="flex gap-3 p-2 rounded-lg border border-gray-100"
                  >
                    <Skeleton className="w-16 h-16 rounded-md" />
                    <div className="flex-1 space-y-2">
                      <Skeleton className="h-4 w-9/12" />
                      <Skeleton className="h-3 w-5/12" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}
