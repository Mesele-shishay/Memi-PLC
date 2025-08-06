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
    <section className="relative min-h-screen flex flex-col justify-center py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_25%_25%,rgba(24,118,226,0.08),transparent_50%)]"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_75%_75%,rgba(24,118,226,0.06),transparent_50%)]"></div>
        <div className="absolute bottom-0 left-1/4 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(24,118,226,0.04),transparent_50%)]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-32 left-20 w-6 h-6 bg-blue-400/20 rounded-full animate-pulse"></div>
      <div
        className="absolute top-48 right-32 w-4 h-4 bg-blue-400/30 rounded-full animate-bounce"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-40 left-32 w-5 h-5 bg-blue-400/25 rounded-full animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute top-1/2 right-16 w-3 h-3 bg-blue-400/20 rounded-full animate-ping"
        style={{ animationDelay: "0.5s" }}
      ></div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* First Row - Title */}
        <div className="text-center mb-16 lg:mb-20">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black leading-tight tracking-tight">
            <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              {title}
            </span>
          </h1>
        </div>

        {/* Second Row - Content */}
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-20 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Subtitle */}
            <div className="space-y-6">
              <p className="text-xl sm:text-2xl lg:text-3xl text-black leading-relaxed max-w-3xl mx-auto lg:mx-0 font-light">
                {subtitle}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-8">
              {ctaButtons.map((button, index) => (
                <div key={index} className="relative group">
                  {button.variant === "primary" ? (
                    <button
                      onClick={button.onClick}
                      className="relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-5 rounded-2xl font-semibold text-lg shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300 transform cursor-pointer border-0"
                    >
                      <span className="relative z-10">{button.label}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    </button>
                  ) : (
                    <button
                      onClick={button.onClick}
                      className="relative bg-white/90 backdrop-blur-xl text-black px-10 py-5 rounded-2xl font-semibold text-lg border-2 border-gray-200/50 hover:border-blue-300 hover:bg-white hover:text-black transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform cursor-pointer"
                    >
                      {button.label}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="relative">
            <div className="relative group perspective-1000">
              {/* Main Card */}
              <div className="bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl shadow-gray-900/10 p-8 border border-white/20 overflow-hidden cursor-pointer transform hover:rotate-y-2 transition-all duration-700">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-white text-xl">🎓</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-black">
                        Learning Platform
                      </h3>
                      <p className="text-sm text-gray-600">Premium Access</p>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                    <div
                      className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"
                      style={{ animationDelay: "0.5s" }}
                    ></div>
                    <div
                      className="w-3 h-3 bg-blue-600 rounded-full animate-pulse"
                      style={{ animationDelay: "1s" }}
                    ></div>
                  </div>
                </div>

                {/* Course Progress */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 mb-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 to-blue-600/5"></div>
                  <div className="relative">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="font-bold text-black text-lg">
                          Ethiopian Business Development
                        </h4>
                        <p className="text-sm text-gray-600">
                          Advanced Course Module
                        </p>
                      </div>
                      <div className="text-2xl">📊</div>
                    </div>
                    <div className="bg-white/80 rounded-full h-3 mb-3 overflow-hidden shadow-inner">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full shadow-sm transition-all duration-1000"
                        style={{ width: "87%" }}
                      ></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-black">
                        87% Complete
                      </span>
                      <span className="text-xs text-gray-600">
                        3 of 4 modules
                      </span>
                    </div>
                  </div>
                </div>

                {/* Achievement Card */}
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full translate-y-8 -translate-x-8"></div>
                  <div className="relative">
                    <div className="flex items-center space-x-4 mb-3">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                        <span className="text-xl">🏆</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">
                          Certificate Earned!
                        </h4>
                        <p className="text-blue-100 text-sm">
                          by Hanan Tadesse
                        </p>
                      </div>
                    </div>
                    <p className="text-blue-100 text-sm leading-relaxed">
                      Advanced Ethiopian Business Development Certificate
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Achievement Badge */}
              <div className="absolute -top-6 -right-6 transform rotate-12">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white px-4 py-3 rounded-2xl shadow-2xl shadow-blue-500/30 transform hover:scale-110 transition-all duration-300 cursor-pointer">
                  <div className="text-center">
                    <div className="text-sm font-bold">NEW</div>
                    <div className="text-xs opacity-90">Achievement</div>
                  </div>
                </div>
              </div>

              {/* Bottom Notification */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white rounded-2xl shadow-2xl p-5 border border-gray-100 hover:border-gray-200 transition-colors duration-300 cursor-pointer max-w-xs">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                    <svg
                      className="w-5 h-5 text-white"
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
                    <p className="text-sm font-bold text-black">
                      Lesson Completed
                    </p>
                    <p className="text-xs text-gray-600">
                      +50 learning points earned
                    </p>
                  </div>
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
