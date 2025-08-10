"use client";

import React from "react";
import { FileDropzone } from "@/components/ui/file-dropzone";
import { FeaturesSectionProps } from "@/types";

interface FeaturesEditorProps {
  features: FeaturesSectionProps;
  onSave: (partial: any) => Promise<void>;
  onFeatureImage: (index: number, file: File) => Promise<void>;
  featurePreviews: Record<number, string | null>;
}

export function FeaturesEditor({
  features,
  onSave,
  onFeatureImage,
  featurePreviews,
}: FeaturesEditorProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/30 bg-gradient-to-br from-white/90 via-white/80 to-white/70 backdrop-blur-xl shadow-xl p-6">
      {/* Header Section */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h2 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Features Section Editor
            </h2>
            <p className="text-gray-600 mt-1 text-sm">
              Customize your features content and visual presentation
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <span className="px-3 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
              {features.features.length} Features
            </span>
          </div>
        </div>
      </div>

      {/* Features Grid - 2 columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {features.features.map((feature, index) => (
          <div
            key={index}
            className="group/feature relative overflow-hidden rounded-2xl border border-gray-200/50 bg-gradient-to-br from-white/95 to-gray-50/40 p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-gray-300/50 hover:-translate-y-1"
          >
            {/* Feature Header with Number */}
            <div className="mb-5">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white text-sm font-bold">
                    {index + 1}
                  </div>
                  <span className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                    Feature {index + 1}
                  </span>
                </div>
                <div className="w-3 h-3 rounded-full bg-green-400 shadow-sm"></div>
              </div>
            </div>

            {/* Feature Title */}
            <div className="mb-4">
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2">
                Title
              </label>
              <input
                className="w-full rounded-xl border-2 border-gray-200 p-3 text-sm font-medium focus:outline-none focus:ring-3 focus:ring-blue-200 focus:border-blue-400 transition-all duration-200 bg-white/90 hover:bg-white"
                defaultValue={feature.title}
                placeholder="Enter feature title..."
                onBlur={async (e) => {
                  const next = features.features.map((f, i) =>
                    i === index ? { ...f, title: e.target.value } : f
                  );
                  await onSave({
                    features: { ...features, features: next },
                  });
                }}
              />
            </div>

            {/* Feature Description */}
            <div className="mb-5">
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2">
                Description
              </label>
              <textarea
                className="w-full rounded-xl border-2 border-gray-200 p-3 text-sm focus:outline-none focus:ring-3 focus:ring-blue-200 focus:border-blue-400 transition-all duration-200 bg-white/90 hover:bg-white resize-none"
                defaultValue={feature.description}
                placeholder="Describe this feature..."
                rows={3}
                onBlur={async (e) => {
                  const next = features.features.map((f, i) =>
                    i === index ? { ...f, description: e.target.value } : f
                  );
                  await onSave({
                    features: { ...features, features: next },
                  });
                }}
              />
            </div>

            {/* Feature Image */}
            <div className="mb-5">
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2">
                Feature Image
              </label>
              <FileDropzone
                label="Upload Image"
                onFile={(file) => onFeatureImage(index, file)}
                previewUrl={
                  featurePreviews[index] ?? feature.image?.src ?? null
                }
                rectHeightClass="h-32"
              />
            </div>

            {/* Feature Actions */}
            <div className="pt-4 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 font-medium">
                  ID: {index}
                </span>
                <button
                  className="px-4 py-2 rounded-lg bg-red-50 text-red-600 text-sm font-medium hover:bg-red-100 hover:text-red-700 transition-all duration-200 border border-red-200 hover:border-red-300"
                  onClick={async () => {
                    const next = features.features.filter(
                      (_, i) => i !== index
                    );
                    await onSave({
                      features: { ...features, features: next },
                    });
                  }}
                >
                  Remove Feature
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Feature Button */}
      <div className="mt-8 text-center">
        <button
          className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          onClick={async () => {
            const newFeature = {
              title: "New Feature",
              description: "Describe this amazing feature...",
              image: { src: "", alt: "" },
            };
            await onSave({
              features: {
                ...features,
                features: [...features.features, newFeature],
              },
            });
          }}
        >
          + Add New Feature
        </button>
      </div>
    </div>
  );
}
