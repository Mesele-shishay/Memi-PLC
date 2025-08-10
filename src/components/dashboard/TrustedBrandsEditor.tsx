"use client";

import React from "react";

interface TrustedBrand {
  name: string;
  logo: string;
  alt: string;
}

interface TrustedBrandsSection {
  title: string;
  brands: TrustedBrand[];
}

interface TrustedBrandsEditorProps {
  trustedBrands: TrustedBrandsSection;
  onSave: (partial: any) => Promise<void>;
}

export function TrustedBrandsEditor({
  trustedBrands,
  onSave,
}: TrustedBrandsEditorProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/30 bg-gradient-to-br from-white/90 via-white/80 to-white/70 backdrop-blur-xl shadow-xl p-6">
      {/* Header Section */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h2 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Trusted Brands Editor
            </h2>
            <p className="text-gray-600 mt-1 text-sm">
              Manage your trusted brands and partners section
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <span className="px-3 py-1.5 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
              {trustedBrands.brands.length} Brands
            </span>
          </div>
        </div>
      </div>

      {/* Section Title */}
      <div className="mb-6">
        <div className="bg-gradient-to-br from-purple-50/50 to-indigo-50/50 rounded-2xl p-4 border border-purple-100/50">
          <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wide mb-2">
            Section Title
          </label>
          <input
            className="w-full rounded-xl border-2 border-gray-200 p-3 text-base font-medium focus:outline-none focus:ring-3 focus:ring-purple-200 focus:border-purple-400 transition-all duration-200 bg-white/90 hover:bg-white"
            defaultValue={trustedBrands.title}
            placeholder="Enter section title..."
            onBlur={async (e) =>
              onSave({
                trustedBrands: {
                  ...trustedBrands,
                  title: e.target.value,
                },
              })
            }
          />
        </div>
      </div>

      {/* Brands Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {trustedBrands.brands.map((brand, i) => (
          <div
            key={`brand-${i}`}
            className="group/brand relative overflow-hidden rounded-2xl border border-gray-200/50 bg-gradient-to-br from-white/95 to-gray-50/40 p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-gray-300/50 hover:-translate-y-1"
          >
            {/* Brand Header */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center text-white text-sm font-bold">
                    {i + 1}
                  </div>
                  <span className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                    Brand {i + 1}
                  </span>
                </div>
                <div className="w-3 h-3 rounded-full bg-green-400 shadow-sm"></div>
              </div>
            </div>

            {/* Brand Name */}
            <div className="mb-4">
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2">
                Brand Name
              </label>
              <input
                className="w-full rounded-xl border-2 border-gray-200 p-3 text-sm font-medium focus:outline-none focus:ring-3 focus:ring-purple-200 focus:border-purple-400 transition-all duration-200 bg-white/90 hover:bg-white"
                defaultValue={brand.name}
                placeholder="Enter brand name..."
                onBlur={async (e) => {
                  const next = trustedBrands.brands.map((b, idx) =>
                    idx === i ? { ...b, name: e.target.value } : b
                  );
                  await onSave({
                    trustedBrands: {
                      ...trustedBrands,
                      brands: next,
                    },
                  });
                }}
              />
            </div>

            {/* Brand Logo */}
            <div className="mb-4">
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2">
                Brand Logo
              </label>
              <input
                className="w-full rounded-xl border-2 border-gray-200 p-3 text-sm focus:outline-none focus:ring-3 focus:ring-purple-200 focus:border-purple-400 transition-all duration-200 bg-white/90 hover:bg-white"
                defaultValue={brand.logo}
                placeholder="Emoji, text, or logo URL..."
                onBlur={async (e) => {
                  const next = trustedBrands.brands.map((b, idx) =>
                    idx === i ? { ...b, logo: e.target.value } : b
                  );
                  await onSave({
                    trustedBrands: {
                      ...trustedBrands,
                      brands: next,
                    },
                  });
                }}
              />
            </div>

            {/* Alt Text */}
            <div className="mb-4">
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2">
                Alt Text
              </label>
              <input
                className="w-full rounded-xl border-2 border-gray-200 p-3 text-sm focus:outline-none focus:ring-3 focus:ring-purple-200 focus:border-purple-400 transition-all duration-200 bg-white/90 hover:bg-white"
                defaultValue={brand.alt}
                placeholder="Accessibility description..."
                onBlur={async (e) => {
                  const next = trustedBrands.brands.map((b, idx) =>
                    idx === i ? { ...b, alt: e.target.value } : b
                  );
                  await onSave({
                    trustedBrands: {
                      ...trustedBrands,
                      brands: next,
                    },
                  });
                }}
              />
            </div>

            {/* Brand Actions */}
            <div className="pt-4 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 font-medium">
                  ID: {i}
                </span>
                <button
                  className="px-4 py-2 rounded-lg bg-red-50 text-red-600 text-sm font-medium hover:bg-red-100 hover:text-red-700 transition-all duration-200 border border-red-200 hover:border-red-300"
                  onClick={async () => {
                    const next = trustedBrands.brands.filter(
                      (_, idx) => idx !== i
                    );
                    await onSave({
                      trustedBrands: {
                        ...trustedBrands,
                        brands: next,
                      },
                    });
                  }}
                >
                  Remove Brand
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Brand Button */}
      <div className="text-center">
        <button
          className="px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          onClick={async () =>
            onSave({
              trustedBrands: {
                ...trustedBrands,
                brands: [
                  ...trustedBrands.brands,
                  { name: "New Brand", logo: "🏢", alt: "Brand Logo" },
                ],
              },
            })
          }
        >
          + Add New Brand
        </button>
      </div>
    </div>
  );
}
