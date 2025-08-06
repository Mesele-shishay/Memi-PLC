import React from "react";
import { colors } from "@/styles/color-palette";

interface ColorShowcaseProps {
  className?: string;
}

const ColorShowcase: React.FC<ColorShowcaseProps> = ({ className = "" }) => {
  const colorGroups = [
    {
      title: "Primary Blue Shades",
      colors: [
        {
          name: "Primary Blue",
          value: colors.primaryBlue,
          class: "bg-primary",
        },
        { name: "Blue 50", value: colors.blue50, class: "bg-primary-50" },
        { name: "Blue 100", value: colors.blue100, class: "bg-primary-100" },
        { name: "Blue 200", value: colors.blue200, class: "bg-primary-200" },
        { name: "Blue 300", value: colors.blue300, class: "bg-primary-300" },
        { name: "Blue 400", value: colors.blue400, class: "bg-primary-400" },
        { name: "Blue 500", value: colors.blue500, class: "bg-primary-500" },
        { name: "Blue 600", value: colors.blue600, class: "bg-primary-600" },
        { name: "Blue 700", value: colors.blue700, class: "bg-primary-700" },
        { name: "Blue 800", value: colors.blue800, class: "bg-primary-800" },
        { name: "Blue 900", value: colors.blue900, class: "bg-primary-900" },
      ],
    },
    {
      title: "Complementary Colors",
      colors: [
        {
          name: "Complementary Orange",
          value: colors.complementaryOrange,
          class: "bg-secondary",
        },
        {
          name: "Orange Light",
          value: colors.complementaryOrangeLight,
          class: "bg-secondary-light",
        },
        {
          name: "Orange Dark",
          value: colors.complementaryOrangeDark,
          class: "bg-secondary-dark",
        },
      ],
    },
    {
      title: "Analogous Colors",
      colors: [
        {
          name: "Analogous Purple",
          value: colors.analogousPurple,
          class: "bg-accent",
        },
        {
          name: "Analogous Cyan",
          value: colors.analogousCyan,
          class: "bg-accent-light",
        },
      ],
    },
    {
      title: "Semantic Colors",
      colors: [
        { name: "Success", value: colors.success, class: "bg-green-500" },
        { name: "Warning", value: colors.warning, class: "bg-amber-500" },
        { name: "Error", value: colors.error, class: "bg-red-500" },
        { name: "Info", value: colors.info, class: "bg-blue-600" },
      ],
    },
  ];

  return (
    <section className={`py-16 bg-gray-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary-blue-dark mb-4">
            New Color Palette - Based on rgb(24, 118, 226)
          </h2>
          <p className="text-lg text-muted-blue max-w-3xl mx-auto">
            MEMi Trading PLC's new color system featuring beautiful blue tones
            with complementary orange and purple accents.
          </p>
        </div>

        <div className="space-y-12">
          {colorGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-primary-blue-dark mb-6">
                {group.title}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {group.colors.map((color, colorIndex) => (
                  <div key={colorIndex} className="group">
                    <div
                      className="h-24 rounded-lg mb-3 border border-gray-200 transition-all duration-200 group-hover:scale-105 group-hover:shadow-md"
                      style={{ backgroundColor: color.value }}
                    />
                    <div className="text-center">
                      <p className="font-medium text-primary-blue-dark text-sm mb-1">
                        {color.name}
                      </p>
                      <p className="text-xs text-muted-blue font-mono">
                        {color.value}
                      </p>
                      <p className="text-xs text-primary-blue mt-1">
                        {color.class}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Gradient Showcase */}
        <div className="bg-white rounded-xl shadow-lg p-8 mt-12">
          <h3 className="text-xl font-semibold text-primary-blue-dark mb-6">
            Gradient Examples
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group">
              <div className="h-24 rounded-lg mb-3 gradient-primary transition-all duration-200 group-hover:scale-105 group-hover:shadow-md" />
              <p className="text-center font-medium text-primary-blue-dark text-sm">
                Primary Gradient
              </p>
            </div>
            <div className="group">
              <div className="h-24 rounded-lg mb-3 gradient-complementary transition-all duration-200 group-hover:scale-105 group-hover:shadow-md" />
              <p className="text-center font-medium text-primary-blue-dark text-sm">
                Complementary Gradient
              </p>
            </div>
            <div className="group">
              <div className="h-24 rounded-lg mb-3 gradient-primary-light transition-all duration-200 group-hover:scale-105 group-hover:shadow-md" />
              <p className="text-center font-medium text-primary-blue-dark text-sm">
                Light Gradient
              </p>
            </div>
          </div>
        </div>

        {/* Usage Examples */}
        <div className="bg-white rounded-xl shadow-lg p-8 mt-12">
          <h3 className="text-xl font-semibold text-primary-blue-dark mb-6">
            Usage Examples
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <button className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors duration-200 shadow-primary hover:shadow-primary-hover">
                Primary Button
              </button>
            </div>
            <div className="text-center">
              <button className="bg-secondary text-white px-6 py-3 rounded-lg font-medium hover:bg-secondary-dark transition-colors duration-200 shadow-secondary hover:shadow-secondary-hover">
                Secondary Button
              </button>
            </div>
            <div className="text-center">
              <button className="bg-accent text-white px-6 py-3 rounded-lg font-medium hover:bg-accent-dark transition-colors duration-200 shadow-accent hover:shadow-accent-hover">
                Accent Button
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ColorShowcase;
