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
                target.style.display = 'none';
                const fallbackDiv = target.nextElementSibling as HTMLElement;
                if (fallbackDiv) {
                  fallbackDiv.style.display = 'flex';
                }
              }}
            />
            {/* Fallback emoji */}
            <div 
              className="absolute inset-0 flex items-center justify-center text-6xl bg-gradient-to-br from-accent-100 to-primary-100 rounded-xl"
              style={{ display: 'none' }}
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
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Modern background with gradient mesh */}
      <div className="absolute inset-0 gradient-bg-light"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(16,185,129,0.08),transparent_40%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(34,197,94,0.06),transparent_40%)]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Glass morphism background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-white/60 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl shadow-accent/5 group-hover:shadow-accent/15 transition-all duration-500"></div>

              <div className="relative p-8 lg:p-10 rounded-3xl flex flex-col h-full">
                {/* Feature image */}
                <div className="mb-8 transform group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-500 cursor-pointer">
                  {getFeatureImage(feature)}
                </div>

                {/* Feature content */}
                <div className="space-y-6 flex-1">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 gradient-primary-to-accent rounded-2xl flex items-center justify-center shadow-lg shadow-accent group-hover:shadow-accent-hover group-hover:scale-110 transition-all duration-300 cursor-pointer">
                      <span className="text-2xl">
                        {feature.image?.fallback || feature.icon || "✨"}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl lg:text-2xl font-bold text-black group-hover:text-black transition-colors duration-300 leading-tight">
                        {feature.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-black leading-relaxed text-base lg:text-lg">
                    {feature.description}
                  </p>
                </div>

                {/* Learn more link - always at bottom */}
                <div className="mt-auto pt-6 border-t border-secondary-200/50">
                  <button className="group/btn text-black hover:text-black font-semibold text-sm flex items-center space-x-2 group-hover:space-x-3 transition-all duration-300 cursor-pointer">
                    <span>Learn more</span>
                    <div className="w-5 h-5 rounded-full bg-accent-100 group-hover/btn:bg-accent-200 flex items-center justify-center transition-colors duration-300">
                      <svg
                        className="w-3 h-3 transform group-hover:translate-x-0.5 transition-transform duration-300"
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

                {/* Floating decorative elements */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent-400 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-primary-400 rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-20">
          <div className="relative inline-block">
            <div className="absolute inset-0 gradient-primary-dark rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            <button className="relative gradient-primary-dark text-white px-10 py-5 rounded-2xl font-bold text-lg hover:from-primary-700 hover:to-accent-700 transition-all duration-300 shadow-xl shadow-accent hover:shadow-accent-hover hover:scale-105 transform cursor-pointer">
              Explore All Memi PLC Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
