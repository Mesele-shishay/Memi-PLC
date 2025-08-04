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

  // Convert USD to Ethiopian Birr (ETB)
  // Current exchange rate: 1 USD ≈ 127 ETB
  const convertToETB = (usdPrice: string): string => {
    if (usdPrice === "Custom" || usdPrice === "Free") return usdPrice;

    const numericPrice = parseInt(usdPrice.replace("$", ""));
    if (isNaN(numericPrice)) return usdPrice;

    const etbPrice = numericPrice * 127;
    return `${etbPrice.toLocaleString()} Br`;
  };

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Advanced Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/10 to-accent/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-accent/10 to-primary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl animate-pulse delay-500"></div>

        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-1/4 w-4 h-4 bg-primary/20 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-32 right-1/4 w-6 h-6 bg-accent/20 rotate-45 animate-bounce delay-700"></div>
        <div className="absolute top-1/3 right-1/6 w-3 h-3 bg-blue-400/20 rounded-full animate-pulse delay-1200"></div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(100,116,139,0.05)_1px,transparent_0)] bg-[length:24px_24px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Ultra-Modern Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="relative inline-block">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-slate-900 via-primary to-accent bg-clip-text text-transparent mb-6 sm:mb-8 px-4 leading-tight">
              {title}
            </h2>
            {/* Animated underline */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full animate-pulse"></div>
          </div>

          {subtitle && (
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto mb-8 sm:mb-12 px-4 leading-relaxed font-light">
              {subtitle}
            </p>
          )}

          {/* Ultra-Modern Billing Toggle */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8 px-4">
            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg border border-white/20">
              <div className="flex items-center space-x-1">
                <button
                  onClick={() => setIsYearly(false)}
                  className={`relative px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    !isYearly
                      ? "bg-primary text-white shadow-lg transform scale-105"
                      : "text-slate-600 hover:text-primary"
                  }`}
                >
                  {billingOptions[0]}
                  {!isYearly && (
                    <div className="absolute inset-0 bg-primary rounded-xl blur opacity-50 -z-10"></div>
                  )}
                </button>

                <button
                  onClick={() => setIsYearly(true)}
                  className={`relative px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    isYearly
                      ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg transform scale-105"
                      : "text-slate-600 hover:text-primary"
                  }`}
                >
                  {billingOptions[1]}
                  {isYearly && (
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-xl blur opacity-50 -z-10"></div>
                  )}
                </button>
              </div>
            </div>

            {isYearly && (
              <div className="flex items-center space-x-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full font-medium text-sm shadow-lg animate-bounce">
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
                <span>Same 20% Annualy</span>
              </div>
            )}
          </div>
        </div>

        {/* Ultra-Modern Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 sm:px-0 pt-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`group relative overflow-visible transition-all duration-500 hover:scale-[1.02] ${
                plan.isPopular ? "lg:-mt-8" : ""
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Card background with advanced effects */}
              <div
                className={`relative h-full bg-white/90 backdrop-blur-xl rounded-3xl border transition-all duration-500 ${
                  plan.isPopular
                    ? "border-primary/30 shadow-2xl shadow-primary/20 bg-gradient-to-br from-white via-primary/5 to-accent/5"
                    : "border-slate-200/50 shadow-xl hover:shadow-2xl hover:border-primary/30"
                }`}
              >
                {/* Animated background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Enhanced Popular Badge */}
                {plan.isPopular && (
                  <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 z-20 w-full flex justify-center px-4">
                    <div className="relative">
                      <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-3 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-xl whitespace-nowrap">
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
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full blur animate-pulse opacity-50"></div>
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
                          ? "bg-gradient-to-br from-primary/20 to-accent/20 text-primary"
                          : "bg-gradient-to-br from-purple-100 to-pink-200 text-purple-600"
                      }`}
                    >
                      {index === 0 ? "🚀" : index === 1 ? "💎" : "👑"}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3">
                      {plan.name}
                    </h3>

                    {/* Price with enhanced styling */}
                    <div className="relative">
                      <div
                        className={`text-4xl sm:text-5xl font-black mb-2 transition-all duration-300 group-hover:scale-110 ${
                          plan.isPopular
                            ? "bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                            : "text-slate-800"
                        }`}
                      >
                        {isYearly &&
                        plan.price !== "Custom" &&
                        plan.price !== "Free"
                          ? (() => {
                              const numericPrice = parseInt(
                                plan.price.replace("$", "")
                              );
                              const yearlyETB = Math.floor(
                                numericPrice * 12 * 0.8 * 127
                              );
                              return `${yearlyETB.toLocaleString()} Br`;
                            })()
                          : convertToETB(plan.price)}
                        <span className="text-lg font-medium text-slate-500 ml-1">
                          {isYearly
                            ? "/Year"
                            : plan.period
                            ? "/Month"
                            : "/Month"}
                        </span>
                      </div>

                      {isYearly &&
                        plan.price !== "Custom" &&
                        plan.price !== "Free" && (
                          <div className="text-sm text-slate-500 line-through">
                            {(() => {
                              const numericPrice = parseInt(
                                plan.price.replace("$", "")
                              );
                              const fullYearlyETB = Math.floor(
                                numericPrice * 12 * 127
                              );
                              return `${fullYearlyETB.toLocaleString()} Br`;
                            })()}
                            /Year
                          </div>
                        )}
                    </div>

                    {plan.highlight && (
                      <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 text-sm font-semibold rounded-full border border-green-200">
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
                        className="group/feature flex items-start space-x-3 p-2 rounded-lg hover:bg-slate-50/50 transition-all duration-200"
                        style={{ animationDelay: `${featureIndex * 100}ms` }}
                      >
                        <div className="flex-shrink-0 mt-1">
                          <div
                            className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 group-hover/feature:scale-110 ${
                              plan.isPopular
                                ? "bg-gradient-to-br from-primary to-accent text-white shadow-md"
                                : "bg-slate-100 text-slate-600 group-hover/feature:bg-primary group-hover/feature:text-white"
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
                        <span className="text-slate-700 leading-relaxed font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Ultra-Enhanced CTA Button */}
                  <button
                    className={`group/cta relative w-full py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-500 transform hover:scale-[1.02] overflow-hidden ${
                      plan.isPopular
                        ? "bg-gradient-to-r from-primary via-accent to-primary text-white shadow-2xl hover:shadow-primary/25"
                        : "bg-slate-100 text-slate-700 hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-white shadow-lg hover:shadow-xl"
                    }`}
                  >
                    {/* Button background animation */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r transition-opacity duration-500 ${
                        plan.isPopular
                          ? "from-accent via-primary to-accent opacity-0 group-hover/cta:opacity-100"
                          : "from-primary to-accent opacity-0 group-hover/cta:opacity-100"
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
                      <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-0 group-hover/cta:opacity-50 transition-opacity duration-500 -z-10"></div>
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
