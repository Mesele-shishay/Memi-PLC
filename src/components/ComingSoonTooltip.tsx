"use client";

import React, { useState, useEffect } from "react";

interface ComingSoonTooltipProps {
  children: React.ReactNode;
  className?: string;
}

const ComingSoonTooltip: React.FC<ComingSoonTooltipProps> = ({
  children,
  className = "",
}) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleInteraction = () => {
    if (isMobile) {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 2000); // Hide after 2 seconds on mobile
    }
  };

  return (
    <div
      className={`relative group ${className}`}
      onMouseEnter={() => !isMobile && setShowTooltip(true)}
      onMouseLeave={() => !isMobile && setShowTooltip(false)}
      onClick={handleInteraction}
    >
      {children}

      {/* Tooltip */}
      <div
        className={`absolute z-50 px-3 py-2 text-sm text-white bg-gray-800 rounded-lg shadow-lg transition-all duration-300 pointer-events-none ${
          showTooltip
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-1"
        } ${
          isMobile
            ? "bottom-full left-1/2 transform -translate-x-1/2 mb-2"
            : "top-full left-1/2 transform -translate-x-1/2 mt-2"
        }`}
      >
        <span className="block">Coming Soon</span>

        {/* Tooltip arrow */}
        <div
          className={`absolute w-2 h-2 bg-gray-800 transform rotate-45 ${
            isMobile
              ? "top-full left-1/2 -translate-x-1/2 -translate-y-1"
              : "bottom-full left-1/2 -translate-x-1/2 translate-y-1"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default ComingSoonTooltip;
