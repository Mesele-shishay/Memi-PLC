"use client";

import React from "react";
import { FeaturesSectionProps } from "@/types";

const FeaturesSection: React.FC<FeaturesSectionProps> = ({
  title,
  subtitle,
  features,
}) => {
  // Icons for each feature type
  const getFeatureIcon = (title: string) => {
    if (title.includes("Interactive") || title.includes("Learning"))
      return "🎓";
    if (title.includes("Certificate") || title.includes("Certification"))
      return "📜";
    if (title.includes("Progress") || title.includes("Tracking")) return "📈";
    if (title.includes("Community") || title.includes("Discussion"))
      return "💬";
    if (title.includes("Mobile") || title.includes("Access")) return "📱";
    if (title.includes("Support") || title.includes("Mentorship")) return "🤝";
    return "✨";
  };

  const getFeatureIllustration = (title: string) => {
    if (title.includes("Interactive") || title.includes("Learning")) {
      return (
        <div className="gradient-bg-medium rounded-2xl p-6 h-48 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-accent-400/10 to-primary-400/10"></div>
          <div className="text-center relative z-10">
            <div className="text-4xl mb-3">🎓</div>
            <div className="grid grid-cols-2 gap-3">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-12 h-8 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm flex items-center justify-center border border-accent-200/50"
                >
                  <div className="w-6 h-1 bg-accent-500 rounded"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    if (title.includes("Certificate") || title.includes("Certification")) {
      return (
        <div className="gradient-bg-medium rounded-2xl p-6 h-48 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-accent-400/10 to-primary-400/10"></div>
          <div className="text-center space-y-3 relative z-10">
            <div className="text-4xl">📜</div>
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-accent-200/50">
              <div className="space-y-2">
                <div className="h-2 bg-accent-500 rounded w-20 mx-auto"></div>
                <div className="h-1 bg-accent-300 rounded w-16 mx-auto"></div>
                <div className="h-1 bg-accent-300 rounded w-12 mx-auto"></div>
                <div className="w-8 h-8 gradient-accent-to-primary rounded-full mx-auto mt-3 flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (title.includes("Progress") || title.includes("Tracking")) {
      return (
        <div className="gradient-bg-medium rounded-2xl p-6 h-48 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-400/10 to-accent-400/10"></div>
          <div className="text-center space-y-3 relative z-10">
            <div className="text-4xl">📈</div>
            <div className="flex items-end space-x-2 justify-center">
              <div className="w-3 h-8 bg-accent-500 rounded-t shadow-sm"></div>
              <div className="w-3 h-12 bg-primary-500 rounded-t shadow-sm"></div>
              <div className="w-3 h-6 bg-accent-400 rounded-t shadow-sm"></div>
              <div className="w-3 h-10 bg-accent-600 rounded-t shadow-sm"></div>
              <div className="w-3 h-14 bg-primary-600 rounded-t shadow-sm"></div>
            </div>
            <div className="text-xs text-accent-700 font-medium">
              92% Complete
            </div>
          </div>
        </div>
      );
    }

    if (title.includes("Community") || title.includes("Discussion")) {
      return (
        <div className="gradient-bg-medium rounded-2xl p-6 h-48 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-accent-400/10 to-primary-400/10"></div>
          <div className="text-center space-y-3 relative z-10">
            <div className="text-4xl">💬</div>
            <div className="space-y-2">
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-2 shadow-sm border border-accent-200/50 text-left">
                <div className="h-1.5 bg-accent-400 rounded w-16"></div>
              </div>
              <div className="bg-accent-100/60 backdrop-blur-sm rounded-lg p-2 shadow-sm border border-accent-200/50 text-right">
                <div className="h-1.5 bg-primary-500 rounded w-12 ml-auto"></div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-2 shadow-sm border border-accent-200/50 text-left">
                <div className="h-1.5 bg-primary-400 rounded w-20"></div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="gradient-bg-medium rounded-2xl p-6 h-48 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-400/10 to-primary-400/10"></div>
        <div className="text-4xl relative z-10">✨</div>
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
                {/* Feature illustration */}
                <div className="mb-8 transform group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-500 cursor-pointer">
                  {getFeatureIllustration(feature.title)}
                </div>

                {/* Feature content */}
                <div className="space-y-6 flex-1">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 gradient-primary-to-accent rounded-2xl flex items-center justify-center shadow-lg shadow-accent group-hover:shadow-accent-hover group-hover:scale-110 transition-all duration-300 cursor-pointer">
                      <span className="text-2xl">
                        {getFeatureIcon(feature.title)}
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
              Explore All Memi PLC Courses
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
