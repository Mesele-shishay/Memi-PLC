"use client";

import React from "react";
import { FeaturesSectionProps } from "@/types";

const FeaturesSection: React.FC<FeaturesSectionProps> = ({
  title,
  subtitle,
  features,
}) => {
  // Get feature image or fallback to icon
  const getFeatureImage = (feature: any) => {
    if (feature.image?.src) {
      return (
        <div className="gradient-bg-medium rounded-2xl p-6 h-48 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-accent-400/10 to-primary-400/10"></div>
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            <img
              src={feature.image.src}
              alt={feature.image.alt}
              className="w-full h-full object-cover rounded-xl shadow-lg"
              onError={(e) => {
                // Fallback to emoji if image fails to load
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
                const fallbackDiv = target.nextElementSibling as HTMLElement;
                if (fallbackDiv) {
                  fallbackDiv.style.display = "flex";
                }
              }}
            />
            {/* Fallback emoji */}
            <div
              className="absolute inset-0 flex items-center justify-center text-6xl bg-gradient-to-br from-accent-100 to-primary-100 rounded-xl"
              style={{ display: "none" }}
            >
              {feature.image.fallback}
            </div>
          </div>
        </div>
      );
    }

    // Fallback to icon-based illustration if no image
    return (
      <div className="gradient-bg-medium rounded-2xl p-6 h-48 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-400/10 to-primary-400/10"></div>
        <div className="text-4xl relative z-10">{feature.icon || "✨"}</div>
      </div>
    );
  };

  return (
    <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden">
      {/* Modern background with gradient mesh */}
      <div className="absolute inset-0 gradient-bg-light"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(16,185,129,0.08),transparent_40%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(34,197,94,0.06),transparent_40%)]"></div>
      {/* Subtle aurora blobs removed to reduce animations */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-black mb-4 sm:mb-6 leading-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-base sm:text-lg lg:text-xl text-black max-w-3xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative cursor-pointer overflow-hidden"
            >
              {/* Glass morphism background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-white/60 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl shadow-accent/5"></div>

              <div className="relative p-6 md:p-8 lg:p-10 rounded-3xl flex flex-col h-full">
                {/* Feature image */}
                <div className="mb-6 sm:mb-8">{getFeatureImage(feature)}</div>

                {/* Feature content */}
                <div className="space-y-4 sm:space-y-6 flex-1">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 gradient-primary-to-accent rounded-2xl flex items-center justify-center shadow-lg shadow-accent cursor-pointer">
                      <span className="text-xl md:text-2xl">
                        {feature.image?.fallback || feature.icon || "✨"}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-black leading-tight">
                        {feature.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-black leading-relaxed text-sm md:text-base lg:text-lg">
                    {feature.description}
                  </p>
                </div>

                {/* Learn more link - always at bottom */}
                <div className="mt-auto pt-5 md:pt-6 border-t border-secondary-200/50">
                  <button
                    className="text-black hover:text-black font-semibold text-sm flex items-center space-x-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent-300 focus:ring-offset-2 focus:ring-offset-white"
                    aria-label="Learn more about feature"
                  >
                    <span>Learn more</span>
                    <div className="w-5 h-5 rounded-full bg-accent-100 flex items-center justify-center">
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </button>
                </div>

                {/* Floating decorative elements removed to reduce animations */}
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16 sm:mt-20">
          <div className="relative inline-block">
            <div className="absolute inset-0 gradient-primary-dark rounded-2xl blur opacity-30"></div>
            <button className="relative gradient-primary-dark text-white px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-bold text-base sm:text-lg hover:from-primary-700 hover:to-accent-700 shadow-xl shadow-accent focus:outline-none focus:ring-2 focus:ring-accent-300 focus:ring-offset-2 focus:ring-offset-white cursor-pointer">
              Explore All Memi PLC Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
