"use client";

import React from "react";
import { TrustedSectionProps } from "@/types";

const TrustedSection: React.FC<TrustedSectionProps> = ({ title, brands }) => {
  const brandLogos = [
    { name: "Addis Ababa University", logo: "🎓" },
    { name: "Ethiopian Ministry of Education", logo: "🏛️" },
    { name: "Bahir Dar University", logo: "📚" },
    { name: "Hawassa University", logo: "🔬" },
    { name: "Mekelle University", logo: "⚡" },
  ];

  const stats = [
    { number: "15,000+", label: "Ethiopian Students Trained" },
    { number: "850+", label: "Courses Completed" },
    { number: "8+", label: "Years Transforming Lives" },
  ];

  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 gradient-bg-light"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.06),transparent_40%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,197,94,0.04),transparent_40%)]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-4 leading-tight">
            {title}
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Partnered with Ethiopia's leading educational institutions for
            excellence in learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {brandLogos.map((brand, index) => (
            <div key={index} className="group relative cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-white/95 to-white/80 backdrop-blur-xl rounded-2xl border border-white/30 shadow-xl shadow-accent/5 group-hover:shadow-accent/15 transition-all duration-500"></div>
              <div className="relative p-6 rounded-2xl text-center">
                <div className="w-12 h-12 gradient-primary-to-accent rounded-xl flex items-center justify-center shadow-lg shadow-accent group-hover:shadow-accent-hover group-hover:scale-110 transition-all duration-300 mx-auto mb-3">
                  <span className="text-2xl">{brand.logo}</span>
                </div>
                <h3 className="text-sm font-bold text-black group-hover:text-black transition-colors duration-300">
                  {brand.name}
                </h3>
                <div className="w-8 h-0.5 gradient-primary-light mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative text-center cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-white/75 backdrop-blur-xl rounded-xl border border-white/30 shadow-xl shadow-secondary-900/5 group-hover:shadow-accent/10 transition-all duration-300"></div>
              <div className="relative p-6 rounded-xl">
                <div className="text-3xl lg:text-4xl font-bold text-black group-hover:scale-105 transition-transform duration-300 mb-2">
                  {stat.number}
                </div>
                <div className="w-12 h-1 gradient-primary-light mx-auto rounded-full group-hover:w-16 transition-all duration-300 mb-3"></div>
                <p className="text-black font-medium text-sm lg:text-base">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedSection;
