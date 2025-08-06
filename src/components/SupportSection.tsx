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
    <section className="relative py-16 lg:py-20 overflow-hidden">
      {/* Modern background with gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-50/50 via-primary-50/30 to-accent-50/40"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(16,185,129,0.12),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(34,197,94,0.08),transparent_50%)]"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Full width title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight">
            {title}
          </h2>
        </div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-start">
          {/* Left content - Subtitle and Features */}
          <div className="relative z-10">
            <div className="space-y-6">
              {/* Features list with modern styling */}
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="group flex items-start space-x-4 p-4 rounded-xl transition-all duration-300 hover:bg-white/60 hover:shadow-lg hover:shadow-accent/10 hover:-translate-y-1 cursor-pointer"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="flex-shrink-0 relative">
                      <div className="w-12 h-12 gradient-primary-to-accent rounded-xl flex items-center justify-center shadow-lg shadow-accent group-hover:shadow-accent-hover group-hover:scale-110 transition-all duration-300 cursor-pointer">
                        <span className="text-xl">{feature.icon}</span>
                      </div>
                      <div className="absolute -inset-1 gradient-primary-light rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
                    </div>
                    <div className="flex-1 space-y-1">
                      <h3 className="text-lg lg:text-xl font-bold text-black group-hover:text-black transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-black leading-relaxed text-sm lg:text-base">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right content - Modern learning dashboard */}
          <div className="relative lg:pl-8">
            <div className="relative group">
              {/* Glass morphism main card */}
              <div className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-2xl rounded-3xl shadow-2xl shadow-secondary-900/10 p-6 border border-white/20 overflow-hidden">
                {/* Dashboard header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 gradient-primary-dark rounded-xl flex items-center justify-center">
                      <span className="text-white text-xl">🎓</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black">
                        Memi Learning Support
                      </h3>
                      <p className="text-sm text-black">
                        Ethiopian Education Hub
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-primary-400 rounded-full animate-pulse"></div>
                    <div
                      className="w-3 h-3 bg-accent-400 rounded-full animate-pulse"
                      style={{ animationDelay: "0.5s" }}
                    ></div>
                    <div
                      className="w-3 h-3 bg-accent-400 rounded-full animate-pulse"
                      style={{ animationDelay: "1s" }}
                    ></div>
                  </div>
                </div>

                {/* Ethiopian map representation with learning centers */}
                <div className="gradient-bg-medium rounded-2xl p-6 mb-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-400/10 to-primary-400/10"></div>
                  <div className="text-center relative z-10">
                    <div className="text-4xl mb-3">🇪🇹</div>
                    <h4 className="text-base font-bold text-accent-800 mb-1">
                      Learning Centers Across Ethiopia
                    </h4>
                    <p className="text-xs text-accent-700 mb-3">
                      Addis Ababa • Bahir Dar • Hawassa • Mekelle
                    </p>

                    {/* Learning center indicators */}
                    <div className="flex justify-center space-x-4 mt-3">
                      {["Addis Ababa", "Bahir Dar", "Hawassa", "Mekelle"].map(
                        (city, i) => (
                          <div key={city} className="text-center">
                            <div
                              className="w-3 h-3 bg-accent-500 rounded-full mx-auto mb-1 animate-pulse"
                              style={{ animationDelay: `${i * 0.3}s` }}
                            ></div>
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
                <div className="grid grid-cols-3 gap-3">
                  <div className="text-center p-3 gradient-bg-light rounded-lg border border-accent-200/50">
                    <div className="text-xl font-bold text-accent-600">
                      2.8s
                    </div>
                    <p className="text-xs text-accent-700 font-medium">
                      Avg Response
                    </p>
                  </div>
                  <div className="text-center p-3 bg-gradient-to-br from-accent-50 to-primary-50 rounded-lg border border-accent-200/50">
                    <div className="text-xl font-bold text-accent-600">96%</div>
                    <p className="text-xs text-accent-700 font-medium">
                      Student Success
                    </p>
                  </div>
                  <div className="text-center p-3 bg-gradient-to-br from-primary-50 to-accent-50 rounded-lg border border-primary-200/50">
                    <div className="text-xl font-bold text-primary-600">
                      24/7
                    </div>
                    <p className="text-xs text-primary-700 font-medium">
                      Available
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 gradient-primary-to-accent rounded-2xl shadow-xl shadow-accent p-4 text-white hover:shadow-accent-hover hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  <span className="text-sm font-bold">Live Support</span>
                </div>
                <div className="text-xs opacity-90 mt-1">
                  Ethiopian Time Zone
                </div>
              </div>

              <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-xl p-4 border-4 border-accent-200 hover:border-accent-300 transition-colors duration-300 cursor-pointer">
                <div className="text-center">
                  <div className="text-2xl mb-1">🤝</div>
                  <div className="text-xs font-bold text-accent-700">
                    Mentorship
                  </div>
                </div>
              </div>

              {/* Animated background elements */}
              <div className="absolute top-16 right-16 w-2 h-2 bg-accent-400 rounded-full animate-pulse"></div>
              <div
                className="absolute bottom-16 left-16 w-1.5 h-1.5 bg-primary-400 rounded-full animate-bounce"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute top-1/2 right-8 w-1 h-1 bg-accent-400 rounded-full animate-pulse"
                style={{ animationDelay: "2s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
