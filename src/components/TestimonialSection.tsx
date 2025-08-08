"use client";

import React from "react";
import { TestimonialSectionProps } from "@/types";

const TestimonialSection: React.FC<TestimonialSectionProps> = ({
  title,
  testimonial,
  avatars,
}) => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          aria-hidden="true"
          className="hidden sm:block absolute -top-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl motion-safe:animate-pulse"
        ></div>
        <div
          aria-hidden="true"
          className="hidden sm:block absolute -bottom-40 -right-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl motion-safe:animate-pulse delay-1000"
        ></div>
        <div
          aria-hidden="true"
          className="hidden md:block absolute top-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl motion-safe:animate-pulse delay-500"
        ></div>

        {/* Floating particles - responsive positioning */}
        <div
          aria-hidden="true"
          className="hidden sm:block absolute top-20 left-1/4 w-2 h-2 bg-primary/30 rounded-full motion-safe:animate-bounce delay-300"
        ></div>
        <div
          aria-hidden="true"
          className="hidden sm:block absolute bottom-32 right-1/3 w-3 h-3 bg-accent/40 rounded-full motion-safe:animate-bounce delay-700"
        ></div>
        <div
          aria-hidden="true"
          className="hidden lg:block absolute top-1/2 left-1/6 w-1 h-1 bg-white/20 rounded-full motion-safe:animate-pulse delay-1200"
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Enhanced Header */}
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent px-4">
              {title}
            </h2>
            <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>

          {/* Enhanced Main testimonial with glassmorphism */}
          <div className="relative mb-12 sm:mb-16">
            {/* Quote marks decoration - hidden on mobile */}
            <div className="hidden sm:block absolute -top-6 lg:-top-8 -left-2 lg:-left-4 text-4xl lg:text-6xl text-primary/20 font-serif">
              "
            </div>
            <div className="hidden sm:block absolute -bottom-6 lg:-bottom-8 -right-2 lg:-right-4 text-4xl lg:text-6xl text-accent/20 font-serif rotate-180">
              "
            </div>

            <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-12 border border-white/10 shadow-2xl mx-2 sm:mx-0">
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light leading-relaxed mb-8 sm:mb-10 text-gray-100 italic text-center">
                "{testimonial.quote}"
              </div>

              {/* Enhanced Testimonial author - responsive layout */}
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                  <div className="relative w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform duration-300 motion-reduce:transform-none">
                    <span className="text-white font-bold text-lg sm:text-xl lg:text-2xl">
                      {testimonial.name.charAt(0)}
                    </span>
                    {/* Subtle animation ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-white/20 motion-safe:animate-pulse"></div>
                  </div>
                </div>

                <div className="text-center sm:text-left">
                  <h4 className="font-bold text-lg sm:text-xl text-white mb-1">
                    {testimonial.name}
                  </h4>
                  {testimonial.role && (
                    <p className="text-primary font-medium text-sm sm:text-base">
                      {testimonial.role}
                    </p>
                  )}

                  {/* Verification badge */}
                  <div className="flex items-center justify-center sm:justify-start mt-2 space-x-2">
                    <svg
                      className="w-4 h-4 text-primary-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-xs text-gray-400 font-medium">
                      Verified Customer
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced User avatars with animation - responsive layout */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12 sm:mb-16 px-4 sm:px-0">
            <div className="flex -space-x-3 sm:-space-x-4">
              {avatars.slice(0, 4).map((avatar, index) => (
                <div key={index} className="relative group">
                  {/* Glow effect */}
                  <div
                    className="absolute -inset-1 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-300"
                    style={{
                      background: `linear-gradient(135deg, hsl(${
                        index * 60
                      }, 70%, 60%), hsl(${index * 60 + 30}, 70%, 50%))`,
                    }}
                  ></div>

                  <div
                    className="relative w-12 sm:w-14 h-12 sm:h-14 rounded-full border-2 sm:border-4 border-gray-700 flex items-center justify-center transform group-hover:scale-110 group-hover:border-white/20 transition-all duration-300 shadow-xl motion-reduce:transform-none"
                    style={{
                      background: `linear-gradient(135deg, hsl(${
                        index * 60
                      }, 70%, 60%), hsl(${index * 60 + 30}, 70%, 50%))`,
                      animationDelay: `${index * 200}ms`,
                    }}
                  >
                    <span className="text-white font-bold text-xs sm:text-sm">
                      {String.fromCharCode(65 + index)}
                    </span>
                  </div>
                </div>
              ))}
              {avatars.length > 4 && (
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gray-600 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
                  <div className="relative w-12 sm:w-14 h-12 sm:h-14 bg-gray-700 rounded-full border-2 sm:border-4 border-gray-600 flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-xl motion-reduce:transform-none">
                    <span className="text-white text-xs font-bold">
                      +{avatars.length - 4}
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div className="text-center sm:text-left sm:ml-8">
              <p className="text-white font-bold text-base sm:text-lg mb-1">
                Join 100+ enterprise customers
              </p>
              <p className="text-primary text-sm font-medium">
                Trusted by technology leaders worldwide
              </p>
            </div>
          </div>

          {/* Enhanced Trust indicators with glassmorphism cards - responsive grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16 px-4 sm:px-0">
            {[
              {
                value: "4.9/5",
                label: "Customer Rating",
                icon: "⭐",
                color: "from-yellow-400 to-orange-400",
                extra: (
                  <div className="flex justify-center mt-3">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-400 hover:scale-125 transition-transform duration-200 motion-reduce:transform-none"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        style={{ animationDelay: `${i * 100}ms` }}
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                ),
              },
              {
                value: "120M+",
                label: "Ethiopian Users",
                icon: "🇪🇹",
                color: "from-primary to-accent",
              },
              {
                value: "95%",
                label: "Local Coverage",
                icon: "🌍",
                color: "from-primary-400 to-accent-400",
              },
            ].map((stat, index) => (
              <div key={index} className="group sm:col-span-1 lg:col-span-1">
                <div className="relative bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 h-full motion-reduce:transform-none motion-reduce:transition-none">
                  {/* Gradient glow effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-xl sm:rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10`}
                  ></div>

                  <div className="text-center">
                    <div className="text-3xl sm:text-4xl mb-2 sm:mb-3 transform group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <div
                      className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                    >
                      {stat.value}
                    </div>
                    <p className="text-gray-300 font-medium text-sm sm:text-base">
                      {stat.label}
                    </p>
                    {stat.extra}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced CTA with multiple buttons - responsive stacking */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 sm:px-0">
            <button className="w-full sm:w-auto relative group px-7 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-primary to-accent text-white rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden motion-reduce:transform-none motion-reduce:transition-none">
              {/* Button glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <span className="relative z-10 flex items-center justify-center space-x-2 sm:space-x-3">
                <span>Get Started Today</span>
                <svg
                  className="w-5 sm:w-6 h-5 sm:h-6 transform group-hover:translate-x-1 transition-transform duration-300 motion-reduce:transform-none"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </button>

            <button className="w-full sm:w-auto relative group px-7 sm:px-10 py-4 sm:py-5 bg-white/10 backdrop-blur-sm text-white border-2 border-white/20 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg hover:bg-white/20 hover:border-primary transition-all duration-300 motion-reduce:transition-none">
              <span className="flex items-center justify-center space-x-2 sm:space-x-3">
                <svg
                  className="w-5 sm:w-6 h-5 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.5a1.5 1.5 0 000-3H9v3zm4.5 0a1.5 1.5 0 000-3H12.5v3zm-6.5 0h1.5a1.5 1.5 0 000-3H7v3zm8 0V7a4 4 0 00-8 0v3"
                  />
                </svg>
                <span>Watch Demo</span>
              </span>
            </button>
          </div>

          {/* Additional trust message - responsive layout */}
          <div className="mt-6 sm:mt-8 text-center px-4 sm:px-0">
            <p className="text-gray-400 text-xs sm:text-sm flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-2">
              <svg
                className="w-4 h-4 text-primary-400 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-center">
                No setup fees • Cancel anytime • Enterprise-grade security
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
