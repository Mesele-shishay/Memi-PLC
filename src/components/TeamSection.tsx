"use client";

import React, { useState } from "react";
import Image from "next/image";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  image: {
    src: string;
    alt: string;
    fallback: string;
  };
  expertise: string[];
  linkedin?: string;
  email?: string;
}

interface TeamSectionProps {
  title: string;
  subtitle: string;
  team: TeamMember[];
}

export default function TeamSection({
  title,
  subtitle,
  team,
}: TeamSectionProps) {
  function TeamMemberCard({
    member,
    index,
  }: {
    member: TeamMember;
    index: number;
  }) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    const showFallback = hasError || !member.image.src;

    return (
      <div
        key={member.id}
        className="group relative cursor-pointer"
        style={{ animationDelay: `${index * 100}ms` }}
      >
        {/* Glass morphism background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-white/60 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl shadow-primary/5 group-hover:shadow-primary/15 transition-all duration-500"></div>

        <div className="relative p-8 lg:p-10 rounded-3xl flex flex-col h-full">
          {/* Member Image */}
          <div className="relative mb-10 md:mb-12 transform md:group-hover:scale-105 md:group-hover:-translate-y-2 transition-all duration-500 cursor-pointer motion-reduce:transform-none">
            {/* Image container with modern styling */}
            <div className="relative w-40 h-40 sm:w-44 sm:h-44 md:w-48 md:h-48 mx-auto">
              {/* Background gradient ring */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-primary/40 rounded-3xl blur-sm scale-110 md:group-hover:scale-125 transition-all duration-500"></div>

              {/* Main image container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center text-6xl border-4 border-white/20 shadow-2xl shadow-primary/20 md:group-hover:shadow-primary/40 transition-all duration-500">
                {showFallback ? (
                  <div className="w-full h-full flex items-center justify-center text-6xl bg-gradient-to-br from-primary/20 to-accent/20">
                    {member.image.fallback}
                  </div>
                ) : (
                  <>
                    {!isLoaded && (
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 animate-pulse bg-[linear-gradient(110deg,rgba(255,255,255,0.4),45%,rgba(255,255,255,0.65),55%,rgba(255,255,255,0.4))]"
                      ></div>
                    )}
                    <Image
                      src={member.image.src}
                      alt={member.image.alt}
                      fill
                      sizes="(max-width: 640px) 160px, (max-width: 768px) 176px, 192px"
                      className="object-cover md:group-hover:scale-110 transition-transform duration-700 motion-reduce:transform-none"
                      onLoadingComplete={() => setIsLoaded(true)}
                      onError={() => setHasError(true)}
                      loading="lazy"
                      unoptimized
                    />
                  </>
                )}
              </div>

              {/* Decorative elements */}
              <div
                aria-hidden="true"
                className="hidden sm:block absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-accent to-primary rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-500"
              ></div>
              <div
                aria-hidden="true"
                className="hidden sm:block absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-br from-primary to-accent rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-500"
              ></div>
            </div>

            {/* Hover overlay with social links */}
            <div className="hidden md:flex absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 to-accent/30 opacity-0 group-hover:opacity-100 transition-all duration-500 items-center justify-center backdrop-blur-md">
              <div className="flex space-x-4">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open LinkedIn profile of ${member.name}`}
                    className="w-12 h-12 gradient-primary-to-accent rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-xl shadow-primary/30 hover:shadow-primary/50 motion-reduce:transform-none"
                  >
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                )}
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    aria-label={`Email ${member.name}`}
                    className="w-12 h-12 gradient-accent-to-primary rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-xl shadow-accent/30 hover:shadow-accent/50 motion-reduce:transform-none"
                  >
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Member Info */}
          <div className="text-center space-y-6 flex-1">
            <div>
              <h3 className="text-xl lg:text-2xl font-bold text-black group-hover:text-black transition-colors duration-300 leading-tight mb-2">
                {member.name}
              </h3>
              <p className="text-primary font-semibold text-lg">
                {member.role}
              </p>
            </div>

            <p className="text-black/70 text-base leading-relaxed">
              {member.description}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      {/* Modern background with gradient mesh */}
      <div className="absolute inset-0 gradient-bg-light"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(24,118,226,0.08),transparent_40%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(118,24,226,0.06),transparent_40%)]"></div>

      {/* Floating Elements */}
      <div
        aria-hidden="true"
        className="hidden sm:block absolute top-32 left-20 w-6 h-6 bg-primary/20 rounded-full motion-safe:animate-pulse"
      ></div>
      <div
        aria-hidden="true"
        className="hidden sm:block absolute top-48 right-32 w-4 h-4 bg-accent/30 rounded-full motion-safe:animate-bounce"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        aria-hidden="true"
        className="hidden sm:block absolute bottom-40 left-32 w-5 h-5 bg-primary/25 rounded-full motion-safe:animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

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

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {team.map((member, index) => (
            <TeamMemberCard member={member} index={index} key={member.id} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 sm:mt-20">
          <div className="relative">
            {/* Glass morphism background for CTA */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl shadow-primary/10"></div>

            <div className="relative p-6 sm:p-8 lg:p-12 rounded-3xl">
              <p className="text-black/80 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                Ready to join our mission? We're always looking for passionate
                individuals to join our team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                <button className="relative bg-gradient-to-r from-primary to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-7 sm:px-8 py-4 rounded-2xl font-semibold text-base sm:text-lg shadow-xl shadow-primary/25 hover:shadow-primary/40 hover:scale-105 transition-all duration-300 transform cursor-pointer border-0 motion-reduce:transform-none motion-reduce:transition-none">
                  <span className="relative z-10">View Open Positions</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </button>
                <button className="relative bg-white/90 backdrop-blur-xl text-black px-7 sm:px-8 py-4 rounded-2xl font-semibold text-base sm:text-lg border-2 border-gray-200/50 hover:border-primary/30 hover:bg-white hover:text-black transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform cursor-pointer motion-reduce:transform-none">
                  Get in Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
