"use client";

import React from "react";
import Image from "next/image";
import { HeroSectionProps } from "@/types";

const MAX_TILT_DEG = 8;

const HeroSection: React.FC<HeroSectionProps> = ({
  title = "Welcome",
  subtitle = "Discover amazing possibilities",
  ctaButtons = [],
  badges = [],
  image,
}) => {
  const [tiltStyle, setTiltStyle] = React.useState<React.CSSProperties>({});
  const cardRef = React.useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const element = cardRef.current;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;
    const percentX = (offsetX / rect.width) * 2 - 1; // -1 to 1
    const percentY = (offsetY / rect.height) * 2 - 1; // -1 to 1
    const rotateY = percentX * MAX_TILT_DEG;
    const rotateX = -percentY * MAX_TILT_DEG;
    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`,
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)",
      transition: "transform 500ms cubic-bezier(0.2, 0.8, 0.2, 1)",
    });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center py-20 lg:py-32 overflow-hidden gradient-bg-light">
      {/* Aurora background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="aurora-blob aurora-blob--blue -top-24 -left-24 w-[36rem] h-[36rem]" />
        <div className="aurora-blob aurora-blob--violet top-1/3 -right-24 w-[30rem] h-[30rem] animation-delay-2000" />
        <div className="aurora-blob aurora-blob--indigo bottom-[-10rem] left-1/3 w-[40rem] h-[40rem] animation-delay-4000" />
        <div className="absolute inset-0 grid-overlay opacity-50" />
      </div>

      {/* Floating orbs */}
      <div className="absolute top-24 left-10 w-3 h-3 rounded-full bg-primary-400/40 animate-float-y" />
      <div className="absolute top-40 right-24 w-4 h-4 rounded-full bg-primary-500/40 animate-float-x" />
      <div className="absolute bottom-32 left-24 w-2.5 h-2.5 rounded-full bg-accent-500/40 animate-float-y" />

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Title */}
        <div className="text-center mb-10 lg:mb-16">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 via-accent-500 to-primary-700 animate-gradient-x inline-block">
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
                    className="inline-flex items-center gap-2 rounded-full border border-primary-200/60 bg-white/70 backdrop-blur px-4 py-2 text-sm text-primary-700 shadow-sm hover:shadow-primary transition-shadow animate-fade-in"
                    style={{ animationDelay: `${idx * 100}ms` }}
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
                  <div key={index} className="relative group">
                    {button.variant === "primary" ? (
                      <button
                        onClick={button.onClick}
                        className="relative overflow-hidden bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-semibold text-base sm:text-lg shadow-primary hover:shadow-primary-hover transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-300"
                      >
                        <span className="relative z-10">{button.label}</span>
                        <span className="pointer-events-none absolute inset-0 -translate-x-full bg-white/25 mix-blend-overlay skew-x-12 group-hover:translate-x-full transition-transform duration-700" />
                      </button>
                    ) : (
                      <button
                        onClick={button.onClick}
                        className="relative bg-white/90 backdrop-blur-xl text-gray-900 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-semibold text-base sm:text-lg border border-gray-200/70 hover:border-primary-300 hover:bg-white transition-all duration-300 shadow hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-200"
                      >
                        {button.label}
                      </button>
                    )}
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          {/* Right Column - Visual with parallax tilt */}
          <div className="relative">
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative rounded-3xl p-2 bg-white/60 backdrop-blur-xl border border-white/40 shadow-2xl"
              style={tiltStyle}
            >
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

                {/* Floating labels */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-xl bg-white/85 backdrop-blur px-3 py-2 text-sm text-gray-900 shadow animate-float-y">
                  <span className="text-primary-600">🎓</span>
                  <span className="font-semibold">Learning Platform</span>
                </div>
                <div className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-xl bg-primary-600/90 text-white px-3 py-2 text-sm shadow animate-float-x">
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
