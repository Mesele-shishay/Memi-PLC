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
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Modern background with gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 via-green-50/30 to-teal-50/40"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(16,185,129,0.12),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(34,197,94,0.08),transparent_50%)]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-20 items-center">
          {/* Left content */}
          <div className="relative z-10">
            <div className="space-y-8">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-900 via-emerald-800 to-green-800 bg-clip-text text-transparent leading-tight">
                {title}
              </h2>
              {subtitle && (
                <p className="text-xl text-slate-600 leading-relaxed">
                  {subtitle}
                </p>
              )}

              {/* Features list with modern styling */}
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="group flex items-start space-x-5 p-5 rounded-2xl transition-all duration-300 hover:bg-white/60 hover:shadow-lg hover:shadow-emerald-500/10 hover:-translate-y-1"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="flex-shrink-0 relative">
                      <div className="w-14 h-14 bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/25 group-hover:shadow-emerald-500/40 group-hover:scale-110 transition-all duration-300">
                        <span className="text-2xl">{feature.icon}</span>
                      </div>
                      <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-green-400 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
                    </div>
                    <div className="flex-1 space-y-2">
                      <h3 className="text-xl lg:text-2xl font-bold text-slate-900 group-hover:text-emerald-800 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed text-base lg:text-lg">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Modern ratings cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {ratings.map((rating, index) => (
                  <div
                    key={index}
                    className="relative group"
                    style={{
                      animationDelay: `${(index + features.length) * 150}ms`,
                    }}
                  >
                    {/* Glass morphism background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-xl rounded-2xl border border-white/20 shadow-xl shadow-emerald-500/5 group-hover:shadow-emerald-500/15 transition-all duration-300"></div>

                    <div className="relative p-6 rounded-2xl">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-sm font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                          {rating.company}
                        </div>
                        <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-green-500 rounded-lg flex items-center justify-center">
                          <span className="text-white text-xs font-bold">
                            ★
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3 mb-3">
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-5 h-5 transition-all duration-200 hover:scale-110 ${
                                i < Math.floor(rating.rating)
                                  ? "text-amber-400 drop-shadow-sm"
                                  : "text-slate-300"
                              }`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-lg font-bold text-slate-900">
                          {rating.score}
                        </span>
                      </div>
                      <p className="text-sm text-slate-500 font-medium">
                        Based on 2,500+ Ethiopian students
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
              <div className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-2xl rounded-3xl shadow-2xl shadow-slate-900/10 p-8 border border-white/20 overflow-hidden">
                {/* Dashboard header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-emerald-600 to-green-600 rounded-xl flex items-center justify-center">
                      <span className="text-white text-xl">🎓</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">
                        Memi Learning Support
                      </h3>
                      <p className="text-sm text-slate-600">
                        Ethiopian Education Hub
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <div
                      className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"
                      style={{ animationDelay: "0.5s" }}
                    ></div>
                    <div
                      className="w-3 h-3 bg-teal-400 rounded-full animate-pulse"
                      style={{ animationDelay: "1s" }}
                    ></div>
                  </div>
                </div>

                {/* Ethiopian map representation with learning centers */}
                <div className="bg-gradient-to-br from-emerald-50 to-green-100 rounded-2xl p-8 mb-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 to-green-400/10"></div>
                  <div className="text-center relative z-10">
                    <div className="text-5xl mb-4">🇪🇹</div>
                    <h4 className="text-lg font-bold text-emerald-800 mb-2">
                      Learning Centers Across Ethiopia
                    </h4>
                    <p className="text-sm text-emerald-700 mb-4">
                      Addis Ababa • Bahir Dar • Hawassa • Mekelle
                    </p>

                    {/* Learning center indicators */}
                    <div className="flex justify-center space-x-6 mt-4">
                      {["Addis Ababa", "Bahir Dar", "Hawassa", "Mekelle"].map(
                        (city, i) => (
                          <div key={city} className="text-center">
                            <div
                              className="w-3 h-3 bg-emerald-500 rounded-full mx-auto mb-1 animate-pulse"
                              style={{ animationDelay: `${i * 0.3}s` }}
                            ></div>
                            <div className="text-xs text-emerald-700 font-medium">
                              {city}
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>

                {/* Support metrics with Ethiopian context */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl border border-emerald-200/50">
                    <div className="text-2xl font-bold text-emerald-600">
                      2.8s
                    </div>
                    <p className="text-xs text-emerald-700 font-medium">
                      Avg Response
                    </p>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl border border-teal-200/50">
                    <div className="text-2xl font-bold text-teal-600">96%</div>
                    <p className="text-xs text-teal-700 font-medium">
                      Student Success
                    </p>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200/50">
                    <div className="text-2xl font-bold text-green-600">
                      24/7
                    </div>
                    <p className="text-xs text-green-700 font-medium">
                      Available
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl shadow-xl shadow-emerald-500/30 p-4 text-white hover:shadow-emerald-500/50 hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  <span className="text-sm font-bold">Live Support</span>
                </div>
                <div className="text-xs opacity-90 mt-1">
                  Ethiopian Time Zone
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 border-4 border-emerald-200 hover:border-emerald-300 transition-colors duration-300">
                <div className="text-center">
                  <div className="text-2xl mb-1">🤝</div>
                  <div className="text-xs font-bold text-emerald-700">
                    Mentorship
                  </div>
                </div>
              </div>

              {/* Animated background elements */}
              <div className="absolute top-16 right-16 w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <div
                className="absolute bottom-16 left-16 w-1.5 h-1.5 bg-green-400 rounded-full animate-bounce"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute top-1/2 right-8 w-1 h-1 bg-teal-400 rounded-full animate-pulse"
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
