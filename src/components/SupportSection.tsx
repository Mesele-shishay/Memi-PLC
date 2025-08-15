"use client";

import React from "react";
import { SupportSectionProps } from "@/types";

const SupportSection: React.FC<SupportSectionProps> = ({
  title,
  subtitle,
  features,
  ratings,
}) => {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* Modern background with gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-50/50 via-primary-50/30 to-accent-50/40"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(16,185,129,0.12),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(34,197,94,0.08),transparent_50%)]"></div>
      <div className="absolute inset-0 grid-overlay opacity-30" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Full width title */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black leading-tight">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-4 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg text-gray-800 leading-relaxed">
              {subtitle}
            </p>
          ) : null}

          {/* Ratings row */}
          {ratings?.length ? (
            <div
              className="mt-6 flex flex-wrap items-center justify-center gap-3"
              aria-label="ratings"
            >
              <span className="sr-only">Ratings</span>
              {ratings.map((r, i) => (
                <div
                  key={`${r.company}-${i}`}
                  className="inline-flex items-center gap-2 rounded-full border border-primary-200/60 bg-white/70 backdrop-blur px-3.5 py-2 text-xs sm:text-sm text-primary-700 shadow-sm"
                >
                  <span className="text-primary-500">⭐</span>
                  <span className="font-semibold">{r.score}</span>
                  <span className="text-primary-600/80">{r.company}</span>
                </div>
              ))}
            </div>
          ) : null}
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-start">
          {/* Left content - Subtitle and Features */}
          <div className="relative z-10">
            <div className="space-y-6">
              {/* Features list with modern styling */}
              <div className="space-y-3 sm:space-y-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl cursor-pointer"
                  >
                    <div className="flex-shrink-0 relative">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 gradient-primary-to-accent rounded-xl flex items-center justify-center shadow-lg shadow-accent cursor-pointer">
                        <span className="text-xl">{feature.icon}</span>
                      </div>
                    </div>
                    <div className="flex-1 space-y-1">
                      <h3 className="text-base sm:text-lg lg:text-xl font-bold text-black">
                        {feature.title}
                      </h3>
                      <p className="text-black leading-relaxed text-sm sm:text-base lg:text-base">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right content - Modern learning dashboard */}
          <div className="relative md:pl-6 lg:pl-8 mt-4 sm:mt-6 lg:mt-0">
            <div className="relative group">
              {/* Glass morphism main card */}
              <div className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-2xl rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 border border-white/20 overflow-hidden">
                {/* Dashboard header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0 mb-4 sm:mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 gradient-primary-dark rounded-xl flex items-center justify-center">
                      <span className="text-white text-xl">🎓</span>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-black">
                        Memi Learning Support
                      </h3>
                      <p className="text-xs sm:text-sm text-black">
                        Ethiopian Education Hub
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-primary-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-accent-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-accent-400 rounded-full"></div>
                  </div>
                </div>

                {/* Ethiopian map representation with learning centers */}
                <div className="gradient-bg-medium rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-400/10 to-primary-400/10"></div>
                  <div className="text-center relative z-10">
                    <div className="text-3xl sm:text-4xl mb-3">🇪🇹</div>
                    <h4 className="text-sm sm:text-base font-bold text-accent-800 mb-1">
                      Learning Centers Across Ethiopia
                    </h4>
                    <p className="text-xs text-accent-700 mb-3">
                      Addis Ababa • Bahir Dar • Hawassa • Mekelle
                    </p>

                    {/* Learning center indicators */}
                    <div className="flex justify-center flex-wrap gap-3 sm:gap-4 mt-3">
                      {["Addis Ababa", "Bahir Dar", "Hawassa", "Mekelle"].map(
                        (city, i) => (
                          <div key={city} className="text-center">
                            <div className="w-3 h-3 bg-accent-500 rounded-full mx-auto mb-1"></div>
                            <div className="text-xs text-accent-700 font-medium">
                              {city}
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>

                {/* Support metrics with Ethiopian context */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                  <div className="text-center p-3 gradient-bg-light rounded-lg border border-accent-200/50">
                    <div className="text-lg sm:text-xl font-bold text-accent-600">
                      2.8s
                    </div>
                    <p className="text-xs text-accent-700 font-medium">
                      Avg Response
                    </p>
                  </div>
                  <div className="text-center p-3 bg-gradient-to-br from-accent-50 to-primary-50 rounded-lg border border-accent-200/50">
                    <div className="text-lg sm:text-xl font-bold text-accent-600">
                      96%
                    </div>
                    <p className="text-xs text-accent-700 font-medium">
                      Student Success
                    </p>
                  </div>
                  <div className="text-center p-3 bg-gradient-to-br from-primary-50 to-accent-50 rounded-lg border border-primary-200/50">
                    <div className="text-lg sm:text-xl font-bold text-primary-600">
                      24/7
                    </div>
                    <p className="text-xs text-primary-700 font-medium">
                      Available
                    </p>
                  </div>
                </div>
              </div>
              {/* Floating and animated decorative elements removed to improve performance */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
