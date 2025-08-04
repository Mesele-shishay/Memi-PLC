"use client";

import React from "react";
import { HeroSectionProps } from "@/types";

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  ctaButtons,
  badges,
}) => {
  return (
    <section className="relative min-h-screen flex items-center py-20 lg:py-32 overflow-hidden">
      {/* Modern background with gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-emerald-50/30 to-green-50/40"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(34,197,94,0.1),transparent_50%)]"></div>

      {/* Animated background elements */}
      <div className="absolute top-20 left-20 w-4 h-4 bg-emerald-400 rounded-full animate-pulse opacity-20"></div>
      <div
        className="absolute top-40 right-32 w-2 h-2 bg-green-400 rounded-full animate-bounce opacity-30"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-32 left-32 w-3 h-3 bg-teal-400 rounded-full animate-pulse opacity-25"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-20 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-900 via-emerald-800 to-green-800 bg-clip-text text-transparent leading-tight">
                {title}
              </h1>
              <p className="text-xl sm:text-2xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {subtitle}
              </p>
            </div>

            {/* Modern CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {ctaButtons.map((button, index) => (
                <div key={index} className="relative group">
                  {button.variant === "primary" ? (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                      <button
                        onClick={button.onClick}
                        className="relative bg-gradient-to-r from-emerald-600 to-green-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:from-emerald-700 hover:to-green-700 transition-all duration-300 shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-105 transform"
                      >
                        {button.label}
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={button.onClick}
                      className="relative bg-white/80 backdrop-blur-xl text-slate-900 px-10 py-5 rounded-2xl font-bold text-lg border-2 border-white/20 hover:border-emerald-300 hover:bg-emerald-50/50 hover:text-emerald-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
                    >
                      {button.label}
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Ethiopian learning stats */}
            <div className="flex justify-center lg:justify-start">
              <div className="flex items-center space-x-8 bg-white/60 backdrop-blur-xl rounded-2xl border border-white/20 shadow-lg px-8 py-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600">🇪🇹</div>
                  <div className="text-xs text-slate-600 font-medium">
                    Ethiopian
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">15K+</div>
                  <div className="text-xs text-slate-600 font-medium">
                    Students
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-600">94%</div>
                  <div className="text-xs text-slate-600 font-medium">
                    Success
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right content - Modern learning dashboard */}
          <div className="relative">
            {/* Main dashboard container */}
            <div className="relative group">
              {/* Glass morphism background */}
              <div className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-2xl rounded-3xl shadow-2xl shadow-slate-900/10 p-8 border border-white/20 overflow-hidden">
                {/* Dashboard header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/30">
                      <span className="text-white text-2xl">🎓</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">
                        Memi Learning Platform
                      </h3>
                      <p className="text-sm text-slate-600">
                        Ethiopian Excellence Hub
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

                {/* Course progress visualization */}
                <div className="bg-gradient-to-br from-emerald-50 to-green-100 rounded-2xl p-6 mb-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 to-green-400/10"></div>
                  <div className="relative">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="font-bold text-emerald-800">
                          Ethiopian Business Development
                        </h4>
                        <p className="text-sm text-emerald-700">
                          Advanced Course
                        </p>
                      </div>
                      <div className="text-2xl">📊</div>
                    </div>

                    {/* Progress bar */}
                    <div className="bg-white/60 rounded-full h-3 mb-3 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-emerald-500 to-green-500 h-full rounded-full shadow-sm"
                        style={{ width: "87%" }}
                      ></div>
                    </div>
                    <div className="text-sm text-emerald-800 font-medium">
                      87% Complete
                    </div>
                  </div>
                </div>

                {/* Student achievement */}
                <div className="bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl p-6 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12"></div>
                  <div className="relative">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                        <span className="text-lg">🏆</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">
                          Certificate Earned!
                        </h4>
                        <p className="text-white/90 text-sm">
                          by Hanan Tadesse
                        </p>
                      </div>
                    </div>
                    <p className="text-white/80 text-sm">
                      Advanced Ethiopian Business Development
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating achievement badges */}
              <div className="absolute -top-4 -right-4 space-y-3">
                {badges.map((badge, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-emerald-500 to-green-500 text-white px-4 py-3 rounded-2xl shadow-xl shadow-emerald-500/25 transform hover:scale-105 transition-all duration-300"
                    style={{
                      transform: `rotate(${index * 4 - 4}deg) translateX(${
                        index * 8
                      }px)`,
                      animationDelay: `${index * 200}ms`,
                    }}
                  >
                    <div className="text-sm font-bold">
                      {badge.label}
                      {badge.value && (
                        <span className="block text-xs opacity-90">
                          {badge.value}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Learning milestone */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border-4 border-emerald-200 hover:border-emerald-300 transition-colors duration-300">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/30">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">
                      Lesson Completed
                    </p>
                    <p className="text-xs text-emerald-700 font-medium">
                      +50 learning points
                    </p>
                  </div>
                </div>
              </div>

              {/* Success indicator */}
              <div className="absolute top-1/3 -right-8 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-2xl shadow-xl shadow-teal-500/30 p-4 text-white hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-2xl mb-1">🎯</div>
                  <p className="text-xs font-bold">Goal</p>
                  <p className="text-xs opacity-90">Achieved</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
