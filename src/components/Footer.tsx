"use client";

import React, { useState } from "react";
import { FooterProps } from "@/types";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer: React.FC<FooterProps> = ({
  newsletter,
  sections,
  legal,
  copyright,
}) => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Simulate newsletter signup
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Newsletter section */}
      <div className="relative bg-gradient-to-br from-primary via-accent to-primary/80 py-20">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Enhanced title with gradient text */}
            <div className="mb-8">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
                {newsletter.title}
              </h2>
              {newsletter.subtitle && (
                <p className="text-xl text-white/90 font-light">
                  {newsletter.subtitle}
                </p>
              )}
            </div>

            {/* Modern enhanced form */}
            <form
              onSubmit={handleNewsletterSubmit}
              className="max-w-2xl mx-auto"
            >
              <div className="relative group">
                {/* Glowing background effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-white/10 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

                <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-2 shadow-2xl">
                  <div className="flex flex-col sm:flex-row gap-2">
                    {/* Enhanced input with floating label effect */}
                    <div className="relative flex-1">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder=""
                        className="w-full px-6 py-4 text-secondary bg-transparent border-0 rounded-xl focus:outline-none peer placeholder-transparent"
                        required
                        id="newsletter-email"
                      />
                      <label
                        htmlFor="newsletter-email"
                        className={`absolute left-6 transition-all duration-300 pointer-events-none ${
                          email
                            ? "top-2 text-xs text-primary font-medium"
                            : "top-4 text-base text-primary/70 peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary peer-focus:font-medium"
                        }`}
                      >
                        {newsletter.placeholder}
                      </label>

                      {/* Input border animation */}
                      <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-accent scale-x-0 peer-focus:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </div>

                    {/* Enhanced submit button */}
                    <button
                      type="submit"
                      disabled={isSubscribed}
                      className="relative px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-75 disabled:transform-none group/btn overflow-hidden cursor-pointer"
                    >
                      {/* Button background animation */}
                      <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>

                      <span className="relative z-10 flex items-center space-x-2">
                        {isSubscribed ? (
                          <>
                            <svg
                              className="w-5 h-5 animate-bounce"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span>Subscribed!</span>
                          </>
                        ) : (
                          <>
                            <span>{newsletter.buttonText}</span>
                            <svg
                              className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform duration-300"
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
                          </>
                        )}
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Success message with animation */}
              {isSubscribed && (
                <div className="mt-4 p-4 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30 animate-fade-in">
                  <p className="text-white font-medium flex items-center justify-center space-x-2">
                    <span className="animate-bounce">🎉</span>
                    <span>
                      Thank you for subscribing! Check your email for
                      confirmation.
                    </span>
                  </p>
                </div>
              )}
            </form>

            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap justify-center items-center gap-8">
              <div className="flex items-center space-x-2 text-white/80">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm">100% Secure</span>
              </div>
              <div className="flex items-center space-x-2 text-white/80">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-sm">No Spam Ever</span>
              </div>
              <div className="flex items-center space-x-2 text-white/80">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm">Unsubscribe Anytime</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company info */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <span className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Memi PLC
                </span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                Fast-growing company based in Tigray, Ethiopia, creating a
                global platform for transforming local products, services, and
                youth potential into sustainable economic opportunities.
                Empowering Tigray's youth and showcasing regional potential
                globally.
              </p>

              {/* Enhanced social links */}
              <div className="flex space-x-4">
                {[
                  {
                    name: "Twitter",
                    icon: Twitter,
                    color: "hover:bg-primary-500",
                  },
                  {
                    name: "LinkedIn",
                    icon: Linkedin,
                    color: "hover:bg-primary-600",
                  },
                  {
                    name: "Facebook",
                    icon: Facebook,
                    color: "hover:bg-primary-700",
                  },
                  {
                    name: "Instagram",
                    icon: Instagram,
                    color: "hover:bg-accent-500",
                  },
                ].map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <button
                      key={index}
                      className={`relative w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg group overflow-hidden cursor-pointer`}
                    >
                      {/* Hover effect background */}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      <IconComponent className="w-5 h-5 relative z-10 transform group-hover:scale-110 transition-transform duration-300 text-white" />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Footer sections */}
            {sections.map((section, index) => (
              <div key={index}>
                <h3 className="font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-primary transition-colors duration-300 cursor-pointer"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">{copyright}</p>

              <div className="flex space-x-6">
                {legal.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="text-gray-400 hover:text-primary text-sm transition-colors duration-300 cursor-pointer"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
