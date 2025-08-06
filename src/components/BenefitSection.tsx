"use client";

import React from "react";
import { BenefitSectionProps } from "@/types";

const BenefitSection: React.FC<BenefitSectionProps> = ({
  title,
  benefits,
  testimonial,
}) => {
  return (
    <section className="relative py-16 lg:py-20 overflow-hidden">
      {/* Modern background with gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary-50 via-accent-50/30 to-primary-50/50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,197,94,0.08),transparent_50%)]"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Full width title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight">
            {title}
          </h2>
        </div>

        {/* Benefits and Dashboard side by side */}
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-start">
          {/* Left content - Benefits */}
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.id}
                className="group flex items-start space-x-3 p-4 rounded-xl transition-all duration-300 hover:bg-white/60 hover:shadow-lg hover:shadow-accent/10 hover:-translate-y-1 bg-white/40 backdrop-blur-sm border border-white/20 cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0 relative">
                  <div className="w-8 h-8 bg-gradient-to-r from-accent-600 to-primary-600 rounded-lg flex items-center justify-center shadow-md shadow-accent/25 group-hover:shadow-accent/40 group-hover:scale-110 transition-all duration-300">
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
                  <div className="absolute -inset-1 bg-gradient-to-r from-accent-400 to-primary-400 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
                </div>
                <div className="flex-1">
                  <span className="text-base font-medium text-black group-hover:text-black transition-colors duration-200">
                    {benefit.text}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right content - Modern dashboard visualization */}
          <div className="relative">
            {/* Main dashboard container */}
            <div className="relative group">
              {/* Modern glassmorphism card */}
              <div className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-2xl rounded-2xl shadow-xl shadow-secondary-900/10 p-6 border border-white/20 overflow-hidden">
                {/* Dashboard header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-7 h-7 bg-gradient-to-r from-accent-600 to-primary-600 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-black text-sm">
                        Memi Learning
                      </h3>
                      <p className="text-xs text-black">Course Progress</p>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                  </div>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-accent-50 to-primary-50 rounded-xl">
                    <div className="text-xl font-bold text-accent-600">92%</div>
                    <div className="text-xs text-accent-600/70">
                      Course Progress
                    </div>
                  </div>
                  <div className="p-3 bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl">
                    <div className="text-xl font-bold text-primary-600">28</div>
                    <div className="text-xs text-primary-600/70">
                      Lessons Completed
                    </div>
                  </div>
                </div>

                {/* Course completion card with animation */}
                <div className="bg-gradient-to-r from-accent-500 to-primary-500 rounded-xl p-4 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12"></div>
                  <div className="relative">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                        <svg
                          className="w-4 h-4"
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
                        <h4 className="font-semibold text-sm">
                          Course Completed!
                        </h4>
                        <p className="text-white/80 text-xs">
                          Ethiopian Business Development
                        </p>
                      </div>
                    </div>
                    <div className="text-2xl font-bold mb-1">
                      Certificate Earned
                    </div>
                    <div className="text-white/80 text-xs">
                      by Hanan Tadesse • 2 hours ago
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements with modern design */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-accent-400 to-primary-500 rounded-xl flex items-center justify-center shadow-lg shadow-accent/30 hover:shadow-accent/50 hover:scale-110 transition-all duration-300 group/icon cursor-pointer">
                <span className="text-lg group-hover/icon:scale-110 transition-transform duration-200">
                  📚
                </span>
              </div>

              <div className="absolute top-1/3 -right-6 bg-gradient-to-r from-primary-500 to-accent-600 rounded-xl p-3 shadow-lg shadow-primary/30 text-white hover:shadow-primary/50 hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="text-center">
                  <div className="text-lg font-bold">94%</div>
                  <div className="text-xs opacity-90">Success Rate</div>
                </div>
              </div>

              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg shadow-secondary-900/10 border-4 border-accent-200 hover:border-accent-300 hover:scale-110 transition-all duration-300 cursor-pointer">
                <span className="text-lg">🎓</span>
              </div>

              {/* Animated background elements */}
              <div className="absolute top-8 right-8 w-1.5 h-1.5 bg-accent-400 rounded-full animate-pulse"></div>
              <div
                className="absolute bottom-16 left-8 w-1 h-1 bg-primary-400 rounded-full animate-bounce"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute top-1/2 left-4 w-1 h-1 bg-primary-400 rounded-full animate-pulse"
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
