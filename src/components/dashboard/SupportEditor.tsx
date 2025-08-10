"use client";

import React from "react";
import { SupportSectionProps } from "@/types";

interface SupportEditorProps {
  support: SupportSectionProps;
  onSave: (partial: any) => Promise<void>;
}

export function SupportEditor({ support, onSave }: SupportEditorProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/30 bg-gradient-to-br from-white/90 via-white/80 to-white/70 backdrop-blur-xl shadow-xl p-6">
      {/* Header Section */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h2 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Support Section Editor
            </h2>
            <p className="text-gray-600 mt-1 text-sm">
              Manage your support content and customer ratings
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <span className="px-3 py-1.5 rounded-full bg-orange-100 text-orange-700 text-sm font-medium">
              {support.features.length} Features
            </span>
            <span className="px-3 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-medium">
              {support.ratings.length} Ratings
            </span>
          </div>
        </div>
      </div>

      {/* Section Title & Subtitle */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-gradient-to-br from-orange-50/50 to-amber-50/50 rounded-2xl p-4 border border-orange-100/50">
          <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wide mb-2">
            Section Title
          </label>
          <input
            className="w-full rounded-xl border-2 border-gray-200 p-3 text-base font-medium focus:outline-none focus:ring-3 focus:ring-orange-200 focus:border-orange-400 transition-all duration-200 bg-white/90 hover:bg-white"
            defaultValue={support.title}
            placeholder="Enter section title..."
            onBlur={async (e) =>
              onSave({
                support: { ...support, title: e.target.value },
              })
            }
          />
        </div>
        <div className="bg-gradient-to-br from-amber-50/50 to-yellow-50/50 rounded-2xl p-4 border border-amber-100/50">
          <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wide mb-2">
            Subtitle
          </label>
          <textarea
            className="w-full rounded-xl border-2 border-gray-200 p-3 focus:outline-none focus:ring-3 focus:ring-amber-200 focus:border-amber-400 transition-all duration-200 bg-white/90 hover:bg-white resize-none"
            defaultValue={support.subtitle}
            placeholder="Enter section subtitle..."
            rows={3}
            onBlur={async (e) =>
              onSave({
                support: { ...support, subtitle: e.target.value },
              })
            }
          />
        </div>
      </div>

      {/* Support Features */}
      <div className="mb-6">
        <div className="bg-gradient-to-br from-blue-50/50 to-indigo-50/50 rounded-2xl p-5 border border-blue-100/50">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-bold text-gray-800">
                Support Features
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Configure your support service features
              </p>
            </div>
            <button
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              onClick={async () =>
                onSave({
                  support: {
                    ...support,
                    features: [
                      ...support.features,
                      {
                        icon: "✨",
                        title: "New Feature",
                        description: "Description",
                      },
                    ],
                  },
                })
              }
            >
              + Add Feature
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {support.features.map((f, i) => (
              <div
                key={`supfeat-${i}`}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50 shadow-sm"
              >
                <div className="mb-3">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                      Feature {i + 1}
                    </span>
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1">
                        Icon
                      </label>
                      <input
                        className="w-full rounded-lg border-2 border-gray-200 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-all duration-200 bg-white"
                        defaultValue={f.icon}
                        placeholder="✨"
                        onBlur={async (e) => {
                          const next = support.features.map((it, idx) =>
                            idx === i ? { ...it, icon: e.target.value } : it
                          );
                          await onSave({
                            support: { ...support, features: next },
                          });
                        }}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1">
                        Title
                      </label>
                      <input
                        className="w-full rounded-lg border-2 border-gray-200 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-all duration-200 bg-white"
                        defaultValue={f.title}
                        placeholder="Feature title..."
                        onBlur={async (e) => {
                          const next = support.features.map((it, idx) =>
                            idx === i ? { ...it, title: e.target.value } : it
                          );
                          await onSave({
                            support: { ...support, features: next },
                          });
                        }}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1">
                        Description
                      </label>
                      <input
                        className="w-full rounded-lg border-2 border-gray-200 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-all duration-200 bg-white"
                        defaultValue={f.description}
                        placeholder="Description..."
                        onBlur={async (e) => {
                          const next = support.features.map((it, idx) =>
                            idx === i
                              ? { ...it, description: e.target.value }
                              : it
                          );
                          await onSave({
                            support: { ...support, features: next },
                          });
                        }}
                      />
                    </div>
                  </div>

                  <div className="pt-3 border-t border-gray-100">
                    <button
                      className="w-full px-3 py-2 rounded-lg bg-red-50 text-red-600 text-sm font-medium hover:bg-red-100 hover:text-red-700 transition-all duration-200 border border-red-200 hover:border-red-300"
                      onClick={async () => {
                        const next = support.features.filter(
                          (_, idx) => idx !== i
                        );
                        await onSave({
                          support: { ...support, features: next },
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
        </div>
      </div>

      {/* Ratings */}
      <div className="mb-6">
        <div className="bg-gradient-to-br from-green-50/50 to-emerald-50/50 rounded-2xl p-5 border border-green-100/50">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-bold text-gray-800">
                Customer Ratings
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Manage your customer satisfaction ratings
              </p>
            </div>
            <button
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 text-white text-sm font-medium hover:from-green-700 hover:to-emerald-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              onClick={async () =>
                onSave({
                  support: {
                    ...support,
                    ratings: [
                      ...support.ratings,
                      { company: "Company", score: "5/5", rating: 5 },
                    ],
                  },
                })
              }
            >
              + Add Rating
            </button>
          </div>

          <div className="space-y-4">
            {support.ratings.map((r, i) => (
              <div
                key={`rating-${i}`}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50 shadow-sm"
              >
                <div className="mb-3">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-xs font-semibold text-green-600 uppercase tracking-wide">
                      Rating {i + 1}
                    </span>
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1">
                      Company
                    </label>
                    <input
                      className="w-full rounded-lg border-2 border-gray-200 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-400 transition-all duration-200 bg-white"
                      defaultValue={r.company}
                      placeholder="Company name..."
                      onBlur={async (e) => {
                        const next = support.ratings.map((it, idx) =>
                          idx === i ? { ...it, company: e.target.value } : it
                        );
                        await onSave({
                          support: { ...support, ratings: next },
                        });
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1">
                      Score
                    </label>
                    <input
                      className="w-full rounded-lg border-2 border-gray-200 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-400 transition-all duration-200 bg-white"
                      defaultValue={r.score}
                      placeholder="5/5"
                      onBlur={async (e) => {
                        const next = support.ratings.map((it, idx) =>
                          idx === i ? { ...it, score: e.target.value } : it
                        );
                        await onSave({
                          support: { ...support, ratings: next },
                        });
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1">
                      Rating
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      min="0"
                      max="5"
                      className="w-full rounded-lg border-2 border-gray-200 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-400 transition-all duration-200 bg-white"
                      defaultValue={r.rating}
                      placeholder="5.0"
                      onBlur={async (e) => {
                        const val = parseFloat(e.target.value || "0");
                        const next = support.ratings.map((it, idx) =>
                          idx === i ? { ...it, rating: val } : it
                        );
                        await onSave({
                          support: { ...support, ratings: next },
                        });
                      }}
                    />
                  </div>
                </div>

                <div className="pt-3 border-t border-gray-100">
                  <button
                    className="w-full px-3 py-2 rounded-lg bg-red-50 text-red-600 text-sm font-medium hover:bg-red-100 hover:text-red-700 transition-all duration-200 border border-red-200 hover:border-red-300"
                    onClick={async () => {
                      const next = support.ratings.filter(
                        (_, idx) => idx !== i
                      );
                      await onSave({
                        support: { ...support, ratings: next },
                      });
                    }}
                  >
                    Remove Rating
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
