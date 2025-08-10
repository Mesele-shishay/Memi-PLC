"use client";

import React from "react";
import { FileDropzone } from "@/components/ui/file-dropzone";
import { HeroSectionProps } from "@/types";

interface HeroEditorProps {
  hero: HeroSectionProps;
  onSave: (partial: any) => Promise<void>;
  onHeroImage: (file: File) => Promise<void>;
  heroPreview: string | null;
}

export function HeroEditor({
  hero,
  onSave,
  onHeroImage,
  heroPreview,
}: HeroEditorProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/30 bg-gradient-to-br from-white/90 via-white/80 to-white/70 backdrop-blur-xl shadow-xl p-6">
      {/* Header Section */}
      <div className="mb-6">
        <h2 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
          Hero Section Editor
        </h2>
        <p className="text-gray-600 mt-1 text-sm">
          Customize your hero section content and appearance
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="flex flex-col lg:flex-row gap-6 mb-6">
        {/* Left Column - Text Content */}
        <div className="flex-1 space-y-4">
          {/* Hero Title */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wide">
              Hero Title
            </label>
            <input
              className="w-full rounded-xl border-2 border-gray-200 p-3 text-base font-medium focus:outline-none focus:ring-2 focus:ring-primary-200 focus:border-primary-400 transition-all duration-200 bg-white/80 hover:bg-white"
              defaultValue={hero.title}
              placeholder="Enter your hero title..."
              onBlur={async (e) => {
                await onSave({
                  hero: { ...hero, title: e.target.value },
                });
              }}
            />
          </div>

          {/* Subtitle */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wide">
              Subtitle
            </label>
            <textarea
              className="w-full rounded-xl border-2 border-gray-200 p-3 focus:outline-none focus:ring-2 focus:ring-primary-200 focus:border-primary-400 transition-all duration-200 bg-white/80 hover:bg-white resize-none"
              defaultValue={hero.subtitle}
              placeholder="Enter your hero subtitle..."
              rows={3}
              onBlur={async (e) => {
                await onSave({
                  hero: { ...hero, subtitle: e.target.value },
                });
              }}
            />
          </div>
        </div>

        {/* Right Column - Image Upload */}
        <div className="w-full lg:w-[320px]">
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wide">
              Hero Image
            </label>
            <FileDropzone
              label="Upload Hero Image"
              onFile={onHeroImage}
              previewUrl={heroPreview ?? hero.image.src}
              rectHeightClass="h-40"
            />
          </div>
        </div>
      </div>

      {/* CTAs and Badges Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* CTA Buttons */}
        <div className="bg-gradient-to-br from-blue-50/50 to-indigo-50/50 rounded-2xl p-4 border border-blue-100/50">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="text-base font-bold text-gray-800">
                Call-to-Action Buttons
              </h3>
              <p className="text-xs text-gray-600 mt-1">
                Configure your primary action buttons
              </p>
            </div>
            <button
              className="px-3 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              onClick={async () =>
                onSave({
                  hero: {
                    ...hero,
                    ctaButtons: [
                      ...hero.ctaButtons,
                      { label: "New CTA", variant: "primary" },
                    ],
                  },
                })
              }
            >
              + Add CTA
            </button>
          </div>

          <div className="space-y-3">
            {hero.ctaButtons.map((btn, i) => (
              <div
                key={`cta-${i}`}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-3 border border-gray-200/50 shadow-sm"
              >
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <input
                    className="rounded-lg border-2 border-gray-200 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-all duration-200"
                    defaultValue={btn.label}
                    placeholder="Button text..."
                    onBlur={async (e) => {
                      const next = hero.ctaButtons.map((b, idx) =>
                        idx === i ? { ...b, label: e.target.value } : b
                      );
                      await onSave({
                        hero: { ...hero, ctaButtons: next },
                      });
                    }}
                  />
                  <select
                    className="rounded-lg border-2 border-gray-200 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-all duration-200 bg-white"
                    defaultValue={btn.variant}
                    onChange={async (e) => {
                      const next = hero.ctaButtons.map((b, idx) =>
                        idx === i ? { ...b, variant: e.target.value as any } : b
                      );
                      await onSave({
                        hero: { ...hero, ctaButtons: next },
                      });
                    }}
                  >
                    <option value="primary">Primary</option>
                    <option value="secondary">Secondary</option>
                  </select>
                  <button
                    className="px-3 py-2 rounded-lg border-2 border-red-200 text-red-600 text-sm font-medium hover:bg-red-50 hover:border-red-300 transition-all duration-200"
                    onClick={async () => {
                      const next = hero.ctaButtons.filter(
                        (_, idx) => idx !== i
                      );
                      await onSave({
                        hero: { ...hero, ctaButtons: next },
                      });
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Badges */}
        <div className="bg-gradient-to-br from-emerald-50/50 to-teal-50/50 rounded-2xl p-4 border border-emerald-100/50">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="text-base font-bold text-gray-800">
                Trust Badges
              </h3>
              <p className="text-xs text-gray-600 mt-1">
                Add credibility indicators
              </p>
            </div>
            <button
              className="px-3 py-2 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-sm font-medium hover:from-emerald-700 hover:to-teal-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              onClick={async () =>
                onSave({
                  hero: {
                    ...hero,
                    badges: [
                      ...hero.badges,
                      { label: "New Badge", type: "rating", value: "5.0" },
                    ],
                  },
                })
              }
            >
              + Add Badge
            </button>
          </div>

          <div className="space-y-3">
            {hero.badges.map((bdg, i) => (
              <div
                key={`badge-${i}`}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-3 border border-gray-200/50 shadow-sm"
              >
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
                  <input
                    className="rounded-lg border-2 border-gray-200 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-400 transition-all duration-200"
                    defaultValue={bdg.label}
                    placeholder="Badge label..."
                    onBlur={async (e) => {
                      const next = hero.badges.map((b, idx) =>
                        idx === i ? { ...b, label: e.target.value } : b
                      );
                      await onSave({ hero: { ...hero, badges: next } });
                    }}
                  />
                  <input
                    className="rounded-lg border-2 border-gray-200 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-400 transition-all duration-200"
                    placeholder="Value..."
                    defaultValue={bdg.value}
                    onBlur={async (e) => {
                      const next = hero.badges.map((b, idx) =>
                        idx === i ? { ...b, value: e.target.value } : b
                      );
                      await onSave({ hero: { ...hero, badges: next } });
                    }}
                  />
                  <select
                    className="rounded-lg border-2 border-gray-200 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-400 transition-all duration-200 bg-white"
                    defaultValue={bdg.type}
                    onChange={async (e) => {
                      const next = hero.badges.map((b, idx) =>
                        idx === i ? { ...b, type: e.target.value as any } : b
                      );
                      await onSave({ hero: { ...hero, badges: next } });
                    }}
                  >
                    <option value="rating">Rating</option>
                    <option value="price">Price</option>
                    <option value="discount">Discount</option>
                  </select>
                  <button
                    className="px-3 py-2 rounded-lg border-2 border-red-200 text-red-600 text-sm font-medium hover:bg-red-50 hover:border-red-300 transition-all duration-200"
                    onClick={async () => {
                      const next = hero.badges.filter((_, idx) => idx !== i);
                      await onSave({
                        hero: { ...hero, badges: next },
                      });
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
