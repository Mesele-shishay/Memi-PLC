// Color Palette based on rgb(24, 118, 226) - Updated for MEMi Trading PLC
// TypeScript definitions for use in React/Next.js applications

export interface ColorPalette {
  // Primary Blue - Base Color
  primaryBlue: string;
  primaryBlueHex: string;

  // Blue Shades
  blue50: string;
  blue100: string;
  blue200: string;
  blue300: string;
  blue400: string;
  blue500: string;
  blue600: string;
  blue700: string;
  blue800: string;
  blue900: string;
  blue950: string;
  blue1000: string;

  // Complementary Colors
  complementaryOrange: string;
  complementaryOrangeLight: string;
  complementaryOrangeDark: string;

  // Analogous Colors
  analogousPurple: string;
  analogousCyan: string;

  // Triadic Colors
  triadicGreen: string;
  triadicRed: string;

  // Split Complementary
  splitCompOrange: string;
  splitCompYellow: string;

  // Neutral Grays
  gray50: string;
  gray100: string;
  gray200: string;
  gray300: string;
  gray400: string;
  gray500: string;
  gray600: string;
  gray700: string;
  gray800: string;
  gray900: string;

  // Semantic Colors
  success: string;
  warning: string;
  error: string;
  info: string;

  // Background Colors
  bgPrimary: string;
  bgSecondary: string;
  bgTertiary: string;

  // Text Colors
  textPrimary: string;
  textSecondary: string;
  textTertiary: string;
  textInverse: string;

  // Border Colors
  borderLight: string;
  borderMedium: string;
  borderDark: string;

  // Shadow Colors
  shadowLight: string;
  shadowMedium: string;
  shadowDark: string;
}

export const colors: ColorPalette = {
  // Primary Blue - Base Color
  primaryBlue: "rgb(24, 118, 226)",
  primaryBlueHex: "#1876e2",

  // Blue Shades
  blue50: "rgb(237, 245, 255)",
  blue100: "rgb(219, 234, 254)",
  blue200: "rgb(191, 219, 254)",
  blue300: "rgb(147, 197, 253)",
  blue400: "rgb(96, 165, 250)",
  blue500: "rgb(59, 130, 246)",
  blue600: "rgb(37, 99, 235)",
  blue700: "rgb(29, 78, 216)",
  blue800: "rgb(30, 64, 175)",
  blue900: "rgb(30, 58, 138)",
  blue950: "rgb(23, 37, 84)",
  blue1000: "rgb(15, 23, 42)",

  // Complementary Colors
  complementaryOrange: "rgb(226, 118, 24)",
  complementaryOrangeLight: "rgb(255, 149, 55)",
  complementaryOrangeDark: "rgb(194, 87, 0)",

  // Analogous Colors
  analogousPurple: "rgb(118, 24, 226)",
  analogousCyan: "rgb(24, 226, 226)",

  // Triadic Colors
  triadicGreen: "rgb(118, 226, 24)",
  triadicRed: "rgb(226, 24, 118)",

  // Split Complementary
  splitCompOrange: "rgb(226, 118, 24)",
  splitCompYellow: "rgb(226, 226, 24)",

  // Neutral Grays
  gray50: "rgb(249, 250, 251)",
  gray100: "rgb(243, 244, 246)",
  gray200: "rgb(229, 231, 235)",
  gray300: "rgb(209, 213, 219)",
  gray400: "rgb(156, 163, 175)",
  gray500: "rgb(107, 114, 128)",
  gray600: "rgb(75, 85, 99)",
  gray700: "rgb(55, 65, 81)",
  gray800: "rgb(31, 41, 55)",
  gray900: "rgb(17, 24, 39)",

  // Semantic Colors
  success: "rgb(34, 197, 94)",
  warning: "rgb(245, 158, 11)",
  error: "rgb(239, 68, 68)",
  info: "rgb(24, 118, 226)", // Primary Blue

  // Background Colors
  bgPrimary: "rgb(255, 255, 255)",
  bgSecondary: "rgb(249, 250, 251)",
  bgTertiary: "rgb(243, 244, 246)",

  // Text Colors
  textPrimary: "rgb(17, 24, 39)",
  textSecondary: "rgb(75, 85, 99)",
  textTertiary: "rgb(156, 163, 175)",
  textInverse: "rgb(255, 255, 255)",

  // Border Colors
  borderLight: "rgb(229, 231, 235)",
  borderMedium: "rgb(209, 213, 219)",
  borderDark: "rgb(156, 163, 175)",

  // Shadow Colors
  shadowLight: "rgba(24, 118, 226, 0.1)",
  shadowMedium: "rgba(24, 118, 226, 0.2)",
  shadowDark: "rgba(24, 118, 226, 0.3)",
};

// Utility functions for color manipulation
export const colorUtils = {
  // Convert RGB to Hex
  rgbToHex: (r: number, g: number, b: number): string => {
    return (
      "#" +
      [r, g, b]
        .map((x) => {
          const hex = x.toString(16);
          return hex.length === 1 ? "0" + hex : hex;
        })
        .join("")
    );
  },

  // Convert Hex to RGB
  hexToRgb: (hex: string): { r: number; g: number; b: number } => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : { r: 0, g: 0, b: 0 };
  },

  // Lighten a color by percentage
  lighten: (color: string, percent: number): string => {
    const rgb = color.match(/\d+/g);
    if (!rgb) return color;

    const r = Math.min(
      255,
      parseInt(rgb[0]) + Math.round((255 * percent) / 100)
    );
    const g = Math.min(
      255,
      parseInt(rgb[1]) + Math.round((255 * percent) / 100)
    );
    const b = Math.min(
      255,
      parseInt(rgb[2]) + Math.round((255 * percent) / 100)
    );

    return `rgb(${r}, ${g}, ${b})`;
  },

  // Darken a color by percentage
  darken: (color: string, percent: number): string => {
    const rgb = color.match(/\d+/g);
    if (!rgb) return color;

    const r = Math.max(0, parseInt(rgb[0]) - Math.round((255 * percent) / 100));
    const g = Math.max(0, parseInt(rgb[1]) - Math.round((255 * percent) / 100));
    const b = Math.max(0, parseInt(rgb[2]) - Math.round((255 * percent) / 100));

    return `rgb(${r}, ${g}, ${b})`;
  },

  // Get contrast ratio for accessibility
  getContrastRatio: (color1: string, color2: string): number => {
    const getLuminance = (color: string): number => {
      const rgb = color.match(/\d+/g);
      if (!rgb) return 0;

      const [r, g, b] = rgb.map((x) => {
        const val = parseInt(x) / 255;
        return val <= 0.03928
          ? val / 12.92
          : Math.pow((val + 0.055) / 1.055, 2.4);
      });

      return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    };

    const lum1 = getLuminance(color1);
    const lum2 = getLuminance(color2);
    const brightest = Math.max(lum1, lum2);
    const darkest = Math.min(lum1, lum2);

    return (brightest + 0.05) / (darkest + 0.05);
  },

  // Check if text should be dark or light on a background
  getTextColor: (backgroundColor: string): string => {
    const contrastWithWhite = colorUtils.getContrastRatio(
      backgroundColor,
      "rgb(255, 255, 255)"
    );
    const contrastWithBlack = colorUtils.getContrastRatio(
      backgroundColor,
      "rgb(0, 0, 0)"
    );

    return contrastWithWhite > contrastWithBlack
      ? colors.textInverse
      : colors.textPrimary;
  },
};

// CSS-in-JS styles object
export const colorStyles = {
  // Background styles
  bgPrimary: { backgroundColor: colors.bgPrimary },
  bgSecondary: { backgroundColor: colors.bgSecondary },
  bgTertiary: { backgroundColor: colors.bgTertiary },

  // Text styles
  textPrimary: { color: colors.textPrimary },
  textSecondary: { color: colors.textSecondary },
  textTertiary: { color: colors.textTertiary },
  textInverse: { color: colors.textInverse },

  // Blue background styles
  bgBlue50: { backgroundColor: colors.blue50 },
  bgBlue100: { backgroundColor: colors.blue100 },
  bgBlue200: { backgroundColor: colors.blue200 },
  bgBlue300: { backgroundColor: colors.blue300 },
  bgBlue400: { backgroundColor: colors.blue400 },
  bgBlue500: { backgroundColor: colors.blue500 },
  bgPrimaryBlue: { backgroundColor: colors.primaryBlue },
  bgBlue600: { backgroundColor: colors.blue600 },
  bgBlue700: { backgroundColor: colors.blue700 },
  bgBlue800: { backgroundColor: colors.blue800 },
  bgBlue900: { backgroundColor: colors.blue900 },

  // Blue text styles
  textBlue50: { color: colors.blue50 },
  textBlue100: { color: colors.blue100 },
  textBlue200: { color: colors.blue200 },
  textBlue300: { color: colors.blue300 },
  textBlue400: { color: colors.blue400 },
  textBlue500: { color: colors.blue500 },
  textPrimaryBlue: { color: colors.primaryBlue },
  textBlue600: { color: colors.blue600 },
  textBlue700: { color: colors.blue700 },
  textBlue800: { color: colors.blue800 },
  textBlue900: { color: colors.blue900 },

  // Border styles
  borderLight: { borderColor: colors.borderLight },
  borderMedium: { borderColor: colors.borderMedium },
  borderDark: { borderColor: colors.borderDark },
  borderPrimaryBlue: { borderColor: colors.primaryBlue },

  // Semantic styles
  bgSuccess: { backgroundColor: colors.success },
  bgWarning: { backgroundColor: colors.warning },
  bgError: { backgroundColor: colors.error },
  bgInfo: { backgroundColor: colors.info },

  textSuccess: { color: colors.success },
  textWarning: { color: colors.warning },
  textError: { color: colors.error },
  textInfo: { color: colors.info },

  // Gradient styles
  gradientPrimary: {
    background: `linear-gradient(135deg, ${colors.primaryBlue}, ${colors.blue600})`,
  },
  gradientBlueLight: {
    background: `linear-gradient(135deg, ${colors.blue100}, ${colors.blue200})`,
  },
  gradientBlueDark: {
    background: `linear-gradient(135deg, ${colors.blue700}, ${colors.blue900})`,
  },
  gradientComplementary: {
    background: `linear-gradient(135deg, ${colors.primaryBlue}, ${colors.complementaryOrange})`,
  },
};

// Tailwind CSS classes mapping
export const tailwindClasses = {
  // Background classes
  bgPrimary: "bg-white",
  bgSecondary: "bg-gray-50",
  bgTertiary: "bg-gray-100",

  // Text classes
  textPrimary: "text-gray-900",
  textSecondary: "text-gray-600",
  textTertiary: "text-gray-400",
  textInverse: "text-white",

  // Blue classes
  bgPrimaryBlue: "bg-blue-600",
  textPrimaryBlue: "text-blue-600",
  borderPrimaryBlue: "border-blue-600",

  // Semantic classes
  bgSuccess: "bg-green-500",
  bgWarning: "bg-amber-500",
  bgError: "bg-red-500",
  bgInfo: "bg-blue-600",

  textSuccess: "text-green-500",
  textWarning: "text-amber-500",
  textError: "text-red-500",
  textInfo: "text-blue-600",
};

export default colors;
