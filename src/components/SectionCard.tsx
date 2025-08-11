"use client";

import React from "react";
import Link from "next/link";

type SectionCardProps = {
  title: string;
  description: string;
  href: string;
  icon: React.ElementType;
  accentClass: string; // Tailwind gradient class e.g. "bg-gradient-to-br from-blue-500 to-purple-600"
};

export function SectionCard({
  title,
  description,
  href,
  icon: Icon,
  accentClass,
}: SectionCardProps) {
  return (
    <Link
      href={href}
      className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded-2xl"
    >
      <div className={`relative rounded-2xl p-[1px] ${accentClass}`}>
        <div className="relative rounded-2xl bg-white/80 backdrop-blur-sm border border-white/60 p-6 shadow-sm transition-all duration-300 hover:shadow-md">
          {/* Ambient glow */}
          <div
            className={`pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full blur-2xl opacity-20 ${accentClass}`}
          />

          {/* Shine */}
          <div
            className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-hidden
          >
            <div className="absolute inset-0 rounded-2xl bg-[linear-gradient(120deg,rgba(255,255,255,0.0),rgba(255,255,255,0.25),rgba(255,255,255,0.0))] [mask-image:linear-gradient(black,transparent)]" />
          </div>

          {/* Icon */}
          <div
            className={`inline-flex items-center justify-center p-3 rounded-xl text-white mb-4 shadow-sm ring-1 ring-white/30 ${accentClass}`}
          >
            <Icon className="h-6 w-6" />
          </div>

          <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1.5">
            {title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>

          <div className="mt-4 flex items-center text-primary-600 text-sm font-medium">
            <span className="transition-colors group-hover:text-primary-700">
              Edit Section
            </span>
            <svg
              className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
