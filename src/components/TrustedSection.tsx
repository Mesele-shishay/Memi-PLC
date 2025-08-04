"use client";

import React from "react";
import { TrustedSectionProps } from "@/types";

const TrustedSection: React.FC<TrustedSectionProps> = ({ title, brands }) => {
  // Ethiopian educational institutions and learning partners
  const brandLogos = [
    { name: "Addis Ababa University", logo: "🎓" },
    { name: "Ethiopian Ministry of Education", logo: "🏛️" },
    { name: "Bahir Dar University", logo: "📚" },
    { name: "Hawassa University", logo: "🔬" },
    { name: "Mekelle University", logo: "⚡" },
  ];

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Modern background with gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-emerald-50/20 to-green-50/30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.06),transparent_40%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,197,94,0.04),transparent_40%)]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-900 via-emerald-800 to-green-800 bg-clip-text text-transparent mb-6 leading-tight">
            {title}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Partnered with Ethiopia's leading educational institutions for
            excellence in learning
          </p>
        </div>

        {/* Partners grid with modern cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-20">
          {brandLogos.map((brand, index) => (
            <div
              key={index}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Glass morphism background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-white/60 backdrop-blur-xl rounded-3xl border border-white/20 shadow-xl shadow-emerald-500/5 group-hover:shadow-emerald-500/15 transition-all duration-500"></div>

              <div className="relative p-8 rounded-3xl text-center">
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/25 group-hover:shadow-emerald-500/40 group-hover:scale-110 transition-all duration-300">
                    <span className="text-3xl">{brand.logo}</span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-emerald-800 transition-colors duration-300 leading-tight">
                      {brand.name}
                    </h3>
                    <div className="w-12 h-0.5 bg-gradient-to-r from-emerald-400 to-green-400 mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>

                {/* Floating decorative elements */}
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Ethiopian education statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {[
            {
              number: "15,000+",
              label: "Ethiopian Students Trained",
              delay: "0ms",
            },
            { number: "850+", label: "Courses Completed", delay: "150ms" },
            { number: "8+", label: "Years Transforming Lives", delay: "300ms" },
          ].map((stat, index) => (
            <div
              key={index}
              className="group relative text-center"
              style={{ animationDelay: stat.delay }}
            >
              {/* Glass morphism background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-xl rounded-2xl border border-white/20 shadow-xl shadow-slate-900/5 group-hover:shadow-emerald-500/10 transition-all duration-300"></div>

              <div className="relative p-8 rounded-2xl">
                <div className="space-y-4">
                  <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-green-400 mx-auto rounded-full group-hover:w-20 transition-all duration-300"></div>
                  <p className="text-slate-600 font-medium text-base lg:text-lg leading-relaxed">
                    {stat.label}
                  </p>
                </div>

                {/* Success indicator */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="w-6 h-6 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/30 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-white text-xs">✓</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ethiopian flag accent */}
        <div className="flex justify-center mt-16">
          <div className="flex items-center space-x-4 bg-gradient-to-r from-white/80 to-white/60 backdrop-blur-xl rounded-2xl border border-white/20 shadow-xl px-8 py-4">
            <span className="text-3xl">🇪🇹</span>
            <div className="text-center">
              <div className="text-lg font-bold text-emerald-800">
                Proudly Ethiopian
              </div>
              <div className="text-sm text-slate-600">
                Empowering local education
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedSection;
