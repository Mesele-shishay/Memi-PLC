import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export function HomeEditorSkeleton() {
  return (
    <div className="grid gap-8">
      {/* Hero Section Skeleton */}
      <div className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/80 backdrop-blur-xl shadow-2xl p-6">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1 space-y-4">
            <Skeleton className="h-4 w-24 rounded-lg" />
            <Skeleton className="h-12 w-full rounded-xl" />
            <Skeleton className="h-4 w-20 rounded-lg" />
            <Skeleton className="h-24 w-full rounded-xl" />
          </div>
          <div className="w-full lg:w-[380px]">
            <Skeleton className="h-48 w-full rounded-2xl" />
          </div>
        </div>
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-3">
            <Skeleton className="h-4 w-32 rounded-lg" />
            <Skeleton className="h-8 w-20 rounded-lg" />
            <Skeleton className="h-8 w-full rounded-lg" />
            <Skeleton className="h-8 w-full rounded-lg" />
          </div>
          <div className="space-y-3">
            <Skeleton className="h-4 w-24 rounded-lg" />
            <Skeleton className="h-8 w-20 rounded-lg" />
            <Skeleton className="h-8 w-full rounded-lg" />
            <Skeleton className="h-8 w-full rounded-lg" />
          </div>
        </div>
      </div>

      {/* Features Section Skeleton */}
      <div className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/80 backdrop-blur-xl shadow-2xl p-6">
        <div className="mb-4 flex items-center justify-between">
          <Skeleton className="h-6 w-24 rounded-lg" />
          <Skeleton className="h-4 w-16 rounded-lg" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="rounded-2xl border border-gray-200 p-4 bg-white"
            >
              <Skeleton className="h-6 w-full rounded-lg mb-2" />
              <Skeleton className="h-16 w-full rounded-lg mb-3" />
              <Skeleton className="h-32 w-full rounded-2xl" />
            </div>
          ))}
        </div>
      </div>

      {/* Trusted Brands Section Skeleton */}
      <div className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/80 backdrop-blur-xl shadow-2xl p-6">
        <div className="mb-4">
          <Skeleton className="h-6 w-32 rounded-lg" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <Skeleton key={i} className="h-16 w-full rounded-2xl" />
          ))}
        </div>
      </div>

      {/* Support Section Skeleton */}
      <div className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/80 backdrop-blur-xl shadow-2xl p-6">
        <div className="mb-4">
          <Skeleton className="h-6 w-28 rounded-lg" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Skeleton className="h-32 w-full rounded-2xl" />
          <Skeleton className="h-32 w-full rounded-2xl" />
        </div>
      </div>

      {/* Footer Section Skeleton */}
      <div className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/80 backdrop-blur-xl shadow-2xl p-6">
        <div className="mb-4">
          <Skeleton className="h-6 w-24 rounded-lg" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="space-y-2">
              <Skeleton className="h-4 w-20 rounded-lg" />
              <Skeleton className="h-3 w-16 rounded-lg" />
              <Skeleton className="h-3 w-24 rounded-lg" />
            </div>
          ))}
        </div>
      </div>

      {/* Team Section Skeleton */}
      <div className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/80 backdrop-blur-xl shadow-2xl p-6">
        <div className="mb-4">
          <Skeleton className="h-6 w-20 rounded-lg" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="text-center space-y-3">
              <Skeleton className="h-24 w-24 rounded-full mx-auto" />
              <Skeleton className="h-5 w-24 rounded-lg mx-auto" />
              <Skeleton className="h-4 w-32 rounded-lg mx-auto" />
            </div>
          ))}
        </div>
      </div>

      {/* Get Involved Section Skeleton */}
      <div className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/80 backdrop-blur-xl shadow-2xl p-6">
        <div className="mb-4">
          <Skeleton className="h-6 w-36 rounded-lg" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="text-center space-y-3">
              <Skeleton className="h-32 w-full rounded-2xl" />
              <Skeleton className="h-5 w-28 rounded-lg mx-auto" />
              <Skeleton className="h-4 w-40 rounded-lg mx-auto" />
            </div>
          ))}
        </div>
      </div>

      {/* Pricing Section Skeleton */}
      <div className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/80 backdrop-blur-xl shadow-2xl p-6">
        <div className="mb-4">
          <Skeleton className="h-6 w-28 rounded-lg" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="rounded-2xl border border-gray-200 p-4 bg-white"
            >
              <Skeleton className="h-6 w-24 rounded-lg mb-2" />
              <Skeleton className="h-8 w-16 rounded-lg mb-3" />
              <Skeleton className="h-20 w-full rounded-lg mb-3" />
              <Skeleton className="h-10 w-full rounded-lg" />
            </div>
          ))}
        </div>
      </div>

      {/* Benefits & Testimonial Section Skeleton */}
      <div className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/80 backdrop-blur-xl shadow-2xl p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <Skeleton className="h-6 w-32 rounded-lg" />
            <Skeleton className="h-4 w-24 rounded-lg" />
            <Skeleton className="h-16 w-full rounded-lg" />
          </div>
          <div className="space-y-4">
            <Skeleton className="h-6 w-28 rounded-lg" />
            <Skeleton className="h-4 w-20 rounded-lg" />
            <Skeleton className="h-20 w-full rounded-lg" />
            <Skeleton className="h-12 w-16 rounded-full mx-auto" />
          </div>
        </div>
      </div>

      {/* Featured Courses Section Skeleton */}
      <div className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/80 backdrop-blur-xl shadow-2xl p-6">
        <div className="mb-4">
          <Skeleton className="h-6 w-36 rounded-lg" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="rounded-2xl border border-gray-200 p-4 bg-white"
            >
              <Skeleton className="h-32 w-full rounded-2xl mb-3" />
              <Skeleton className="h-5 w-28 rounded-lg mb-2" />
              <Skeleton className="h-4 w-40 rounded-lg mb-2" />
              <Skeleton className="h-8 w-20 rounded-lg" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
