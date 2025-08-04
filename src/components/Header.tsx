"use client";

import React, { useState } from "react";
import { HeaderProps } from "@/types";

const Header: React.FC<HeaderProps> = ({ logo, navLinks, ctaButtons }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-secondary">{logo}</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {ctaButtons.map((button, index) => (
              <button
                key={index}
                onClick={button.onClick}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                  button.variant === "primary"
                    ? "bg-primary text-white hover:bg-accent shadow-md hover:shadow-lg"
                    : "text-gray-700 hover:text-primary"
                }`}
              >
                {button.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 pb-2 space-y-2">
                {ctaButtons.map((button, index) => (
                  <button
                    key={index}
                    onClick={button.onClick}
                    className={`w-full px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      button.variant === "primary"
                        ? "bg-primary text-white hover:bg-accent"
                        : "text-gray-700 hover:text-primary border border-gray-200"
                    }`}
                  >
                    {button.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
