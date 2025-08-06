"use client";

import React, { useState, useEffect } from "react";
import { HeaderProps } from "@/types";

const Header: React.FC<HeaderProps> = ({ logo, navLinks, ctaButtons }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isButtonPressed, setIsButtonPressed] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  // Handle menu open/close with animation delay
  const handleMenuToggle = () => {
    setIsButtonPressed(true);

    if (isMenuOpen) {
      setIsAnimating(true);
      setTimeout(() => {
        setIsMenuOpen(false);
        setIsAnimating(false);
        setIsButtonPressed(false);
      }, 500);
    } else {
      setIsMenuOpen(true);
      setTimeout(() => {
        setIsButtonPressed(false);
      }, 300);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white/10 backdrop-blur-md border-b border-white/20`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Enhanced Logo */}
            <div className="flex-shrink-0">
              <div className="relative group">
                <span className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent transition-all duration-500 group-hover:scale-105">
                  {logo}
                </span>
                {/* Logo glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10"></div>
              </div>
            </div>

            {/* Enhanced Desktop Navigation */}
            <nav className="hidden lg:flex space-x-1">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="relative px-4 py-2 text-black hover:text-primary transition-all duration-300 font-medium rounded-lg group overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Hover background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg"></div>

                  {/* Underline effect */}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></div>

                  <span className="relative z-10">{link.label}</span>
                </a>
              ))}
            </nav>

            {/* Enhanced Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              {ctaButtons.map((button, index) => (
                <button
                  key={index}
                  onClick={button.onClick}
                  className={`relative px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 overflow-hidden ${
                    button.variant === "primary"
                      ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg hover:shadow-xl hover:shadow-primary/25"
                      : "text-black hover:text-primary border-2 border-secondary-200 hover:border-primary/30 hover:bg-primary/5"
                  }`}
                >
                  {/* Button background animation */}
                  {button.variant === "primary" && (
                    <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  )}

                  <span className="relative z-10 flex items-center space-x-2">
                    <span>{button.label}</span>
                    {button.variant === "primary" && (
                      <svg
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
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
                    )}
                  </span>
                </button>
              ))}
            </div>

            {/* Enhanced Mobile menu button with advanced animations */}
            <div className="lg:hidden">
              <button
                onClick={handleMenuToggle}
                className={`relative p-3 text-black hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-xl transition-all duration-300 group overflow-hidden ${
                  isButtonPressed
                    ? "scale-95 bg-primary/10"
                    : "hover:bg-primary/5"
                }`}
                aria-expanded={isMenuOpen}
                disabled={isAnimating}
              >
                <span className="sr-only">Open main menu</span>

                {/* Ripple effect on click */}
                <div
                  className={`absolute inset-0 bg-primary/20 rounded-xl transform scale-0 transition-transform duration-300 ${
                    isButtonPressed ? "scale-100" : ""
                  }`}
                ></div>

                {/* Animated hamburger icon with enhanced effects */}
                <div className="relative w-6 h-6 z-10">
                  {/* Top line with enhanced animation */}
                  <span
                    className={`absolute left-0 w-6 h-0.5 bg-current transform transition-all duration-500 ease-out ${
                      isMenuOpen
                        ? "rotate-45 translate-y-2.5 bg-primary"
                        : "translate-y-0"
                    }`}
                    style={{
                      transformOrigin: "center",
                      transitionDelay: isMenuOpen ? "0ms" : "200ms",
                    }}
                  ></span>

                  {/* Middle line with scale and fade */}
                  <span
                    className={`absolute left-0 w-6 h-0.5 bg-current transform transition-all duration-500 ease-out translate-y-2.5 ${
                      isMenuOpen
                        ? "opacity-0 scale-x-0 bg-primary"
                        : "opacity-100 scale-x-100"
                    }`}
                    style={{
                      transformOrigin: "center",
                      transitionDelay: isMenuOpen ? "100ms" : "100ms",
                    }}
                  ></span>

                  {/* Bottom line with enhanced animation */}
                  <span
                    className={`absolute left-0 w-6 h-0.5 bg-current transform transition-all duration-500 ease-out ${
                      isMenuOpen
                        ? "-rotate-45 translate-y-2.5 bg-primary"
                        : "translate-y-5"
                    }`}
                    style={{
                      transformOrigin: "center",
                      transitionDelay: isMenuOpen ? "0ms" : "200ms",
                    }}
                  ></span>
                </div>

                {/* Button glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10"></div>

                {/* Pulse animation when menu is open */}
                {isMenuOpen && (
                  <div className="absolute inset-0 bg-primary/5 rounded-xl animate-pulse"></div>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ease-out ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        {/* Animated Backdrop */}
        <div
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-all duration-500 ease-out ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
        ></div>

        {/* Slide-in Menu with enhanced animation */}
        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-all duration-500 ease-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
          style={{
            transformOrigin: "right center",
            boxShadow: isMenuOpen
              ? "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              : "0 0 0 0 rgba(0, 0, 0, 0)",
          }}
        >
          {/* Menu Header with animation */}
          <div className="flex items-center justify-between p-6 border-b border-secondary-100">
            <span
              className={`text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent transition-all duration-700 ${
                isMenuOpen
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-4"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              {logo}
            </span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className={`p-2 text-black hover:text-primary rounded-lg transition-all duration-300 hover:bg-secondary-100 ${
                isMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-75"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Menu Content */}
          <div className="flex flex-col h-full">
            {/* Navigation Links with staggered animation */}
            <nav className="flex-1 px-6 py-8">
              <div className="space-y-2">
                {navLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className={`block px-4 py-3 text-lg text-black hover:text-primary hover:bg-primary/5 rounded-xl transition-all duration-300 font-medium transform ${
                      isMenuOpen
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-8"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                    style={{
                      transitionDelay: `${400 + index * 100}ms`,
                      transitionDuration: "500ms",
                    }}
                  >
                    <span className="relative">
                      {link.label}
                      {/* Hover underline effect */}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </a>
                ))}
              </div>
            </nav>

            {/* CTA Buttons with animation */}
            <div className="p-6 border-t border-secondary-100 space-y-3">
              {ctaButtons.map((button, index) => (
                <button
                  key={index}
                  onClick={() => {
                    button.onClick?.();
                    setIsMenuOpen(false);
                  }}
                  className={`w-full px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-[1.02] ${
                    button.variant === "primary"
                      ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg hover:shadow-xl hover:shadow-primary/25"
                      : "text-black hover:text-primary border-2 border-secondary-200 hover:border-primary/30 hover:bg-primary/5"
                  } ${
                    isMenuOpen
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{
                    transitionDelay: `${600 + index * 100}ms`,
                    transitionDuration: "500ms",
                  }}
                >
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <span>{button.label}</span>
                    {button.variant === "primary" && (
                      <svg
                        className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
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
                    )}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
