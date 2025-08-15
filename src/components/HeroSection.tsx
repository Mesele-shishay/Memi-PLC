"use client";

import React from "react";
import Image from "next/image";
import { HeroSectionProps } from "@/types";

const HeroSection: React.FC<HeroSectionProps> = ({
  title = "Welcome",
  subtitle = "Discover amazing possibilities",
  ctaButtons = [],
  badges = [],
  image,
}) => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center py-20 lg:py-32 overflow-hidden gradient-bg-light">
      {/* Static background overlay */}
      <div className="absolute inset-0 grid-overlay opacity-50" />

      {/* Floating orbs removed for performance */}

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Title */}
        <div className="text-center mb-10 lg:mb-16">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 via-accent-500 to-primary-700 inline-block">
              {title}
            </span>
          </h1>
          <p className="mt-6 text-xl sm:text-2xl lg:text-3xl text-gray-800 leading-relaxed max-w-3xl mx-auto font-light">
            {subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
          {/* Left Column - CTAs and badges */}
          <div className="text-center lg:text-left space-y-8">
            {/* Badges */}
            {badges?.length ? (
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                {badges.map((badge, idx) => (
                  <div
                    key={`${badge.label}-${idx}`}
                    className="inline-flex items-center gap-2 rounded-full border border-primary-200/60 bg-white/70 backdrop-blur px-4 py-2 text-sm text-primary-700 shadow-sm"
                  >
                    <span className="text-primary-500">
                      {badge.type === "rating" && "⭐"}
                      {badge.type === "price" && "💸"}
                      {badge.type === "discount" && "🎯"}
                    </span>
                    <span className="font-medium">{badge.label}</span>
                    {badge.value ? (
                      <span className="ml-1 text-primary-600/80">
                        {badge.value}
                      </span>
                    ) : null}
                  </div>
                ))}
              </div>
            ) : null}

            {/* CTA Buttons */}
            {ctaButtons && ctaButtons.length > 0 ? (
              <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-3">
                {ctaButtons.map((button, index) => (
                  <div key={index} className="relative">
                    {button.variant === "primary" ? (
                      <button
                        onClick={button.onClick}
                        className="relative overflow-hidden bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-semibold text-base sm:text-lg shadow-primary focus:outline-none focus:ring-2 focus:ring-primary-300"
                      >
                        <span className="relative z-10">{button.label}</span>
                      </button>
                    ) : (
                      <button
                        onClick={button.onClick}
                        className="relative bg-white/90 backdrop-blur-xl text-gray-900 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-semibold text-base sm:text-lg border border-gray-200/70 shadow focus:outline-none focus:ring-2 focus:ring-primary-200"
                      >
                        {button.label}
                      </button>
                    )}
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          {/* Right Column - Static visual */}
          <div className="relative">
            <div className="relative rounded-3xl p-2 bg-white/60 backdrop-blur-xl border border-white/40 shadow-2xl">
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src={image?.src ?? "/next.svg"}
                  alt={image?.alt ?? "Hero image"}
                  width={1200}
                  height={900}
                  priority
                  className="h-[320px] sm:h-[420px] w-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 via-primary-900/10 to-transparent" />

                {/* Labels */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-xl bg-white/85 backdrop-blur px-3 py-2 text-sm text-gray-900 shadow">
                  <span className="text-primary-600">🎓</span>
                  <span className="font-semibold">Learning Platform</span>
                </div>
                <div className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-xl bg-primary-600/90 text-white px-3 py-2 text-sm shadow">
                  <span>✨</span>
                  <span className="font-semibold">Premium Access</span>
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
