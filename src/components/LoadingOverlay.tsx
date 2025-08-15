"use client";

import React from "react";

type LoadingOverlayProps = {
  fullScreen?: boolean;
};

export default function LoadingOverlay({
  fullScreen = true,
}: LoadingOverlayProps) {
  return (
    <div
      className={
        fullScreen
          ? "relative min-h-screen flex items-center justify-center gradient-bg-light overflow-hidden"
          : "relative flex items-center justify-center overflow-hidden"
      }
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      {/* Aurora background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="aurora-blob aurora-blob--blue -top-28 -left-28 w-[28rem] h-[28rem] sm:w-[32rem] sm:h-[32rem]" />
        <div className="aurora-blob aurora-blob--violet top-1/3 -right-24 w-[24rem] h-[24rem] sm:w-[28rem] sm:h-[28rem] animation-delay-2000" />
        <div className="aurora-blob aurora-blob--indigo bottom-[-8rem] left-1/3 w-[30rem] h-[30rem] md:w-[36rem] md:h-[36rem] animation-delay-4000" />
        <div className="absolute inset-0 grid-overlay opacity-40" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        {/* Main Spinner */}
        <div className="relative flex items-center justify-center mx-auto">
          {/* Outer ring */}
          <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 border-4 border-blue-200 rounded-full motion-safe:animate-spin motion-reduce:animate-none">
            <div className="absolute top-0 left-0 w-full h-full border-4 border-transparent border-t-blue-500 rounded-full motion-safe:animate-spin motion-reduce:animate-none" />
          </div>

          {/* Inner ring */}
          <div
            className="absolute top-2 left-2 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 border-4 border-blue-200 rounded-full motion-safe:animate-spin motion-reduce:animate-none"
            style={{ animationDirection: "reverse", animationDuration: "1.5s" }}
          >
            <div
              className="absolute top-0 left-0 w-full h-full border-4 border-transparent border-t-blue-400 rounded-full motion-safe:animate-spin motion-reduce:animate-none"
              style={{
                animationDirection: "reverse",
                animationDuration: "1.5s",
              }}
            />
          </div>

          {/* Center dot */}
          <div className="absolute top-5 left-5 sm:top-6 sm:left-6 md:top-7 md:left-7 w-3 h-3 sm:w-4 sm:h-4 bg-blue-500 rounded-full motion-safe:animate-pulse motion-reduce:animate-none" />
        </div>

        {/* Loading text */}
        <div className="mt-6 sm:mt-7">
          <h3 className="text-base sm:text-lg md:text-xl font-semibold text-blue-700 mb-1.5 sm:mb-2">
            Loading...
          </h3>
          <p className="text-xs sm:text-sm md:text-base text-blue-600/90">
            Please wait while we prepare your experience
          </p>
          <span className="sr-only">Content is loading</span>
        </div>

        {/* Animated dots */}
        <div className="mt-4 flex justify-center gap-1.5">
          <div
            className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full motion-safe:animate-bounce motion-reduce:animate-none"
            style={{ animationDelay: "0ms" }}
          />
          <div
            className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full motion-safe:animate-bounce motion-reduce:animate-none"
            style={{ animationDelay: "150ms" }}
          />
          <div
            className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full motion-safe:animate-bounce motion-reduce:animate-none"
            style={{ animationDelay: "300ms" }}
          />
        </div>
      </div>
    </div>
  );
}
