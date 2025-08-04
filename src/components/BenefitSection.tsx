"use client";

import React from "react";
import { BenefitSectionProps } from "@/types";

const BenefitSection: React.FC<BenefitSectionProps> = ({
  title,
  benefits,
  testimonial,
}) => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Modern background with gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-emerald-50/30 to-green-50/50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,197,94,0.08),transparent_50%)]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-20 items-center">
          {/* Left content */}
          <div className="relative z-10">
            <div className="space-y-8">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-transparent leading-tight">
                {title}
              </h2>

              {/* Benefits list with modern styling */}
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div
                    key={benefit.id}
                    className="group flex items-start space-x-4 p-4 rounded-2xl transition-all duration-300 hover:bg-white/50 hover:shadow-lg hover:shadow-emerald-500/10 hover:-translate-y-1"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="flex-shrink-0 relative">
                      <div className="w-8 h-8 bg-gradient-to-r from-emerald-600 to-green-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/25 group-hover:shadow-emerald-500/40 group-hover:scale-110 transition-all duration-300">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-green-400 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
                    </div>
                    <div className="flex-1">
                      <span className="text-lg font-medium text-slate-700 group-hover:text-slate-900 transition-colors duration-200">
                        {benefit.text}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Modern testimonial card */}
              <div className="relative group">
                {/* Glass morphism background */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-white/60 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl shadow-emerald-500/10"></div>
                <div className="relative p-8 rounded-3xl">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0 relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/30">
                        <span className="text-white font-bold text-xl">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      {/* Floating ring animation */}
                      <div className="absolute -inset-2 border-2 border-emerald-400/30 rounded-2xl animate-pulse"></div>
                    </div>
                    <div className="flex-1 space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-slate-900 text-lg">
                            {testimonial.name}
                          </h4>
                          {testimonial.role && (
                            <p className="text-slate-600 text-sm font-medium">
                              {testimonial.role}
                            </p>
                          )}
                        </div>
                        <div className="flex items-center space-x-2 bg-green-100 px-3 py-1 rounded-full">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-xs text-green-700 font-semibold">
                            Verified
                          </span>
                        </div>
                      </div>

                      <blockquote className="text-slate-700 text-base leading-relaxed italic">
                        "{testimonial.quote}"
                      </blockquote>

                      {/* Modern 5-star rating */}
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className="relative"
                            style={{ animationDelay: `${i * 100}ms` }}
                          >
                            <svg
                              className="w-5 h-5 text-amber-400 drop-shadow-sm hover:scale-110 transition-transform duration-200"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                            <div className="absolute inset-0 bg-amber-400/20 rounded-full scale-150 opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                          </div>
                        ))}
                        <span className="ml-2 text-sm font-medium text-slate-600">
                          5.0
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right content - Modern dashboard visualization */}
          <div className="relative lg:pl-8">
            {/* Main dashboard container */}
            <div className="relative group">
              {/* Modern glassmorphism card */}
              <div className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-2xl rounded-3xl shadow-2xl shadow-slate-900/10 p-8 border border-white/20 overflow-hidden">
                {/* Dashboard header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-emerald-600 to-green-600 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">
                        Memi Learning
                      </h3>
                      <p className="text-xs text-slate-500">Course Progress</p>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="p-4 bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl">
                    <div className="text-2xl font-bold text-emerald-600">
                      92%
                    </div>
                    <div className="text-sm text-emerald-600/70">
                      Course Progress
                    </div>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl">
                    <div className="text-2xl font-bold text-teal-600">28</div>
                    <div className="text-sm text-teal-600/70">
                      Lessons Completed
                    </div>
                  </div>
                </div>

                {/* Course completion card with animation */}
                <div className="bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl p-6 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="relative">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">
                          Course Completed!
                        </h4>
                        <p className="text-white/80 text-sm">
                          Ethiopian Business Development
                        </p>
                      </div>
                    </div>
                    <div className="text-3xl font-bold mb-1">
                      Certificate Earned
                    </div>
                    <div className="text-white/80 text-sm">
                      by Hanan Tadesse • 2 hours ago
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements with modern design */}
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-r from-emerald-400 to-green-500 rounded-2xl flex items-center justify-center shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-110 transition-all duration-300 group/icon">
                <span className="text-2xl group-hover/icon:scale-110 transition-transform duration-200">
                  📚
                </span>
              </div>

              <div className="absolute top-1/3 -right-8 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-2xl p-4 shadow-xl shadow-teal-500/30 text-white hover:shadow-teal-500/50 hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <div className="text-xl font-bold">94%</div>
                  <div className="text-xs opacity-90">Success Rate</div>
                </div>
              </div>

              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-xl shadow-slate-900/10 border-4 border-emerald-200 hover:border-emerald-300 hover:scale-110 transition-all duration-300">
                <span className="text-2xl">🎓</span>
              </div>

              {/* Animated background elements */}
              <div className="absolute top-10 right-10 w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <div
                className="absolute bottom-20 left-10 w-1 h-1 bg-teal-400 rounded-full animate-bounce"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute top-1/2 left-5 w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"
                style={{ animationDelay: "2s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitSection;
