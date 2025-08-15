"use client";

import React, { useState } from "react";
import { PricingSectionProps } from "@/types";

const PricingSection: React.FC<PricingSectionProps> = ({
  title,
  subtitle,
  billingOptions,
  plans,
}) => {
  const [isYearly, setIsYearly] = useState(false);

  // Handle Ethiopian Birr prices
  const parsePrice = (price: string): number => {
    if (price === "Custom" || price === "Free") return 0;

    // Remove "ብር" and commas, then parse
    const cleanPrice = price.replace("ብር", "").replace(/,/g, "").trim();
    const numericPrice = parseInt(cleanPrice);
    return isNaN(numericPrice) ? 0 : numericPrice;
  };

  const formatPrice = (price: number): string => {
    if (price === 0) return "Free";
    return `${price.toLocaleString()} Br`;
  };

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      {/* Advanced Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/20 to-blue-100/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-300/20 to-blue-100/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-200/20 to-blue-100/20 rounded-full blur-3xl animate-pulse delay-500"></div>

        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-1/4 w-4 h-4 bg-blue-300/20 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-32 right-1/4 w-6 h-6 bg-blue-200/20 rotate-45 animate-bounce delay-700"></div>
        <div className="absolute top-1/3 right-1/6 w-3 h-3 bg-blue-400/20 rounded-full animate-pulse delay-1200"></div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(100,116,139,0.05)_1px,transparent_0)] bg-[length:24px_24px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Ultra-Modern Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="relative inline-block">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-700 to-blue-400 bg-clip-text text-transparent mb-6 sm:mb-8 px-4 leading-tight">
              {title}
            </h2>
            {/* Animated underline */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 rounded-full animate-pulse"></div>
          </div>

          {subtitle && (
            <p className="text-lg sm:text-xl text-black max-w-3xl mx-auto mb-8 sm:mb-12 px-4 leading-relaxed font-light">
              {subtitle}
            </p>
          )}

          {/* Ultra-Modern Billing Toggle */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8 px-4">
            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg border border-white/20">
              <div className="flex items-center space-x-1">
                <button
                  onClick={() => setIsYearly(false)}
                  className={`relative px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 cursor-pointer ${
                    !isYearly
                      ? "bg-blue-600 text-white shadow-lg transform scale-105"
                      : "text-black hover:text-blue-600"
                  }`}
                >
                  {billingOptions[0]}
                  {!isYearly && (
                    <div className="absolute inset-0 bg-blue-500 rounded-xl blur opacity-50 -z-10"></div>
                  )}
                </button>

                <button
                  onClick={() => setIsYearly(true)}
                  className={`relative px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 cursor-pointer ${
                    isYearly
                      ? "bg-gradient-to-r from-blue-600 to-blue-400 text-white shadow-lg transform scale-105"
                      : "text-black hover:text-blue-600"
                  }`}
                >
                  {billingOptions[1]}
                  {isYearly && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl blur opacity-50 -z-10"></div>
                  )}
                </button>
              </div>
            </div>

            {isYearly && (
              <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white px-4 py-2 rounded-full font-medium text-sm shadow-lg animate-bounce">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Save 20% Annually</span>
              </div>
            )}
          </div>
        </div>

        {/* Ultra-Modern Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 sm:px-0 pt-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`group relative overflow-visible transition-all duration-500 hover:scale-[1.02] cursor-pointer ${
                plan.isPopular ? "lg:-mt-8" : ""
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Card background with advanced effects */}
              <div
                className={`relative h-full bg-white/90 backdrop-blur-xl rounded-3xl border transition-all duration-500 ${
                  plan.isPopular
                    ? "border-blue-300/50 shadow-2xl shadow-blue-500/20 bg-gradient-to-br from-white via-blue-50 to-blue-100/50"
                    : "border-gray-200/50 shadow-xl hover:shadow-2xl hover:border-blue-300/50"
                }`}
              >
                {/* Animated background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Enhanced Popular Badge */}
                {plan.isPopular && (
                  <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 z-20 w-full flex justify-center px-4">
                    <div className="relative">
                      <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white px-3 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-xl whitespace-nowrap">
                        <span className="relative z-10 flex items-center space-x-1">
                          <svg
                            className="w-3 h-3 sm:w-4 sm:h-4 animate-spin"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          Most Popular
                          <span className="text-xs sm:text-sm"></span>
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full blur animate-pulse opacity-50"></div>
                    </div>
                  </div>
                )}

                {/* Card Content */}
                <div className="relative p-8 sm:p-10 h-full flex flex-col">
                  {/* Plan Icon & Header */}
                  <div className="text-center mb-8">
                    {/* Dynamic Plan Icon */}
                    <div
                      className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center text-2xl transition-all duration-300 group-hover:scale-110 ${
                        index === 0
                          ? "bg-gradient-to-br from-blue-100 to-blue-200 text-blue-600"
                          : index === 1
                          ? "bg-gradient-to-br from-blue-200/20 to-blue-300/20 text-blue-600"
                          : "bg-gradient-to-br from-blue-100 to-blue-200 text-blue-600"
                      }`}
                    >
                      {index === 0 ? "🚀" : index === 1 ? "💎" : "👑"}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-black mb-3">
                      {plan.name}
                    </h3>

                    {/* Price with enhanced styling */}
                    <div className="relative">
                      <div
                        className={`text-4xl sm:text-5xl font-black mb-2 transition-all duration-300 group-hover:scale-110 ${
                          plan.isPopular
                            ? "bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent"
                            : "text-black"
                        }`}
                      >
                        {isYearly &&
                        plan.price !== "Custom" &&
                        plan.price !== "Free"
                          ? (() => {
                              const monthlyPrice = parsePrice(plan.price);
                              const yearlyPrice = Math.floor(
                                monthlyPrice * 12 * 0.8
                              ); // 20% discount
                              return formatPrice(yearlyPrice);
                            })()
                          : plan.price}
                        <span className="text-lg font-medium text-black ml-1">
                          {isYearly ? "/Year" : plan.period || "/Month"}
                        </span>
                      </div>

                      {isYearly &&
                        plan.price !== "Custom" &&
                        plan.price !== "Free" && (
                          <div className="text-sm text-black line-through">
                            {(() => {
                              const monthlyPrice = parsePrice(plan.price);
                              const fullYearlyPrice = Math.floor(
                                monthlyPrice * 12
                              );
                              return formatPrice(fullYearlyPrice);
                            })()}
                            /Year
                          </div>
                        )}
                    </div>

                    {plan.highlight && (
                      <div className="inline-flex items-center px-3 py-1 bg-blue-50 text-blue-700 text-sm font-semibold rounded-full border border-blue-200">
                        <svg
                          className="w-3 h-3 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {plan.highlight}
                      </div>
                    )}
                  </div>

                  {/* Ultra-Modern Features List */}
                  <div className="flex-1 space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="group/feature flex items-start space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-all duration-200 cursor-pointer"
                        style={{ animationDelay: `${featureIndex * 100}ms` }}
                      >
                        <div className="flex-shrink-0 mt-1">
                          <div
                            className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 group-hover/feature:scale-110 ${
                              plan.isPopular
                                ? "bg-gradient-to-br from-blue-600 to-blue-400 text-white shadow-md"
                                : "bg-gray-100 text-gray-600 group-hover/feature:bg-blue-600 group-hover/feature:text-white"
                            }`}
                          >
                            <svg
                              className="w-3 h-3"
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
                        </div>
                        <span className="text-black leading-relaxed font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Ultra-Enhanced CTA Button */}
                  <button
                    className={`group/cta relative w-full py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-500 transform hover:scale-[1.02] overflow-hidden cursor-pointer ${
                      plan.isPopular
                        ? "bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white shadow-2xl hover:shadow-blue-500/25"
                        : "bg-gray-100 text-black hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-400 hover:text-white shadow-lg hover:shadow-xl"
                    }`}
                  >
                    {/* Button background animation */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r transition-opacity duration-500 ${
                        plan.isPopular
                          ? "from-blue-400 via-blue-600 to-blue-400 opacity-0 group-hover/cta:opacity-100"
                          : "from-blue-600 to-blue-400 opacity-0 group-hover/cta:opacity-100"
                      }`}
                    ></div>

                    {/* Ripple effect */}
                    <div className="absolute inset-0 bg-white/20 rounded-2xl scale-0 group-hover/cta:scale-100 transition-transform duration-500 opacity-0 group-hover/cta:opacity-100"></div>

                    <span className="relative z-10 flex items-center justify-center space-x-2">
                      <span>{plan.ctaText || "Get Started"}</span>
                      <svg
                        className="w-5 h-5 transform group-hover/cta:translate-x-1 transition-transform duration-300"
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

                    {/* Glow effect */}
                    {plan.isPopular && (
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl blur opacity-0 group-hover/cta:opacity-50 transition-opacity duration-500 -z-10"></div>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
