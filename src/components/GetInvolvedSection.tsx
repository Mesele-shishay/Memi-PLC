"use client";

import React from "react";

interface GetInvolvedSectionProps {
  title: string;
  subtitle: string;
  involvementOptions: {
    icon: string;
    title: string;
    description: string;
    ctaText: string;
    ctaHref: string;
    image?: {
      src: string;
      alt: string;
      fallback: string;
    };
  }[];
}

export default function GetInvolvedSection({
  title,
  subtitle,
  involvementOptions,
}: GetInvolvedSectionProps) {
  return (
    <section className="relative py-20 md:py-24 lg:py-32 overflow-hidden">
      {/* Modern background with subtle aurora */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary-50 via-accent-50/30 to-primary-50/50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(16,185,129,0.08),transparent_40%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(34,197,94,0.06),transparent_40%)]"></div>
      <div className="aurora-blob aurora-blob--blue w-[32rem] h-[32rem] -top-32 -left-24"></div>
      <div className="aurora-blob aurora-blob--indigo w-[28rem] h-[28rem] -bottom-24 -right-16 animation-delay-1500"></div>
      <div className="aurora-blob aurora-blob--violet w-[22rem] h-[22rem] top-1/3 -right-28 animation-delay-3000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
            {title}
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Involvement options grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 items-stretch gap-6 md:gap-8 xl:gap-10">
          {involvementOptions.map((option, index) => (
            <div
              key={index}
              className="group relative isolate cursor-pointer h-full rounded-3xl p-[1px] bg-gradient-to-br from-primary-200/70 via-accent-200/50 to-secondary-200/70 hover:from-primary-300/80 hover:via-accent-300/60 hover:to-secondary-300/80 transition-all duration-500 shadow-2xl shadow-accent/10"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => (window.location.href = option.ctaHref)}
              role="button"
              tabIndex={0}
            >
              <div className="relative h-full rounded-[calc(theme(borderRadius.3xl)-1px)] bg-white/80 backdrop-blur-xl border border-white/40 hover:border-white/60 transition-colors duration-500 flex flex-col justify-between hover-tilt">
                <span className="card-shine"></span>
                {/* Image with gradient background */}
                <div className="mb-6 md:mb-8 transform group-hover:scale-[1.02] group-hover:-translate-y-1.5 transition-all duration-500 cursor-pointer">
                  <div className="gradient-bg-medium rounded-2xl p-4 md:p-6 aspect-[16/10] flex items-center justify-center relative overflow-hidden ring-1 ring-primary-100/60">
                    <div className="absolute inset-0 bg-gradient-to-r from-accent-400/10 to-primary-400/10"></div>
                    {option.image?.src ? (
                      <div className="relative z-10 w-full h-full flex items-center justify-center overflow-hidden rounded-xl">
                        <img
                          src={option.image.src}
                          alt={option.image.alt}
                          className="w-full h-full object-cover rounded-xl shadow-lg"
                          onError={(e) => {
                            // Fallback to emoji if image fails to load
                            const target = e.target as HTMLImageElement;
                            target.style.display = "none";
                            const fallbackDiv =
                              target.nextElementSibling as HTMLElement;
                            if (fallbackDiv) {
                              fallbackDiv.style.display = "flex";
                            }
                          }}
                        />
                        {/* Fallback emoji */}
                        <div
                          className="absolute inset-0 flex items-center justify-center text-6xl bg-gradient-to-br from-accent-100 to-primary-100 rounded-xl"
                          style={{ display: "none" }}
                        >
                          {option.image.fallback}
                        </div>
                      </div>
                    ) : (
                      <div className="text-5xl md:text-6xl relative z-10">
                        {option.icon}
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4 md:space-y-6 flex-1 px-6 md:px-8 pb-6 md:pb-8">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="flex-shrink-0 w-11 h-11 md:w-12 md:h-12 gradient-primary-to-accent rounded-2xl flex items-center justify-center shadow-lg shadow-accent group-hover:shadow-accent-hover group-hover:scale-110 transition-all duration-300 cursor-pointer">
                      <span className="text-xl md:text-2xl">{option.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-black leading-tight">
                        {option.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-black/90 leading-relaxed text-sm md:text-base lg:text-lg line-clamp-3">
                    {option.description}
                  </p>
                </div>

                {/* Call to action button */}
                <div className="mt-auto px-6 md:px-8 pt-5 md:pt-6 border-t border-secondary-200/50">
                  <a
                    href={option.ctaHref}
                    className="group/btn inline-flex items-center gap-2 text-primary font-semibold text-sm md:text-base cursor-pointer"
                  >
                    <span>{option.ctaText}</span>
                    <span className="w-5 h-5 rounded-full bg-accent-100 group-hover/btn:bg-accent-200 flex items-center justify-center transition-colors duration-300">
                      <svg
                        className="w-3 h-3 transform group-hover:translate-x-0.5 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </a>
                </div>

                {/* Floating decorative elements */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent-400 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-primary-400 rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16 md:mt-20">
          <div className="relative inline-block">
            <div className="absolute inset-0 gradient-primary-dark rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            <button className="relative gradient-primary-dark text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl font-bold text-base md:text-lg hover:from-primary-700 hover:to-accent-700 transition-all duration-300 shadow-xl shadow-accent hover:shadow-accent-hover hover:scale-105 transform cursor-pointer w-full sm:w-auto">
              Join Our Mission Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
