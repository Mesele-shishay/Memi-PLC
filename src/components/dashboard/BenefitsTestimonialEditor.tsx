"use client";

import React from "react";
import { BenefitSectionProps, TestimonialSectionProps } from "@/types";
import {
  Plus,
  Trash2,
  CheckCircle,
  Circle,
  Star,
  User,
  Quote,
  Briefcase,
  Image as ImageIcon,
} from "lucide-react";

interface BenefitsTestimonialEditorProps {
  benefits: BenefitSectionProps;
  testimonial: TestimonialSectionProps;
  onSave: (partial: any) => Promise<void>;
}

export function BenefitsTestimonialEditor({
  benefits,
  testimonial,
  onSave,
}: BenefitsTestimonialEditorProps) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/80 backdrop-blur-xl shadow-2xl p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Benefits Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-200/20">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Benefits
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                Manage your platform benefits and features
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1.5 rounded-full">
              {benefits.benefits.length} items
            </span>
            <button
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 text-white font-medium hover:from-green-700 hover:to-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              onClick={async () =>
                onSave({
                  benefits: {
                    ...benefits,
                    benefits: [
                      ...benefits.benefits,
                      {
                        id: String(Date.now()),
                        text: "New benefit",
                        completed: false,
                      },
                    ],
                  },
                })
              }
            >
              <Plus className="h-4 w-4" />
              Add Benefit
            </button>
          </div>

          <div className="space-y-3">
            {benefits.benefits.map((b, i) => (
              <div
                key={`benefit-${b.id}-${i}`}
                className="group/benefit relative p-4 rounded-xl border border-gray-200/50 bg-white/60 backdrop-blur-sm hover:shadow-lg hover:border-green-200/50 transition-all duration-200"
              >
                <div className="flex items-center gap-3">
                  <button
                    className="flex-shrink-0 p-1.5 rounded-full hover:bg-gray-100 transition-colors duration-200"
                    onClick={async () => {
                      const next = benefits.benefits.map((it, idx) =>
                        idx === i ? { ...it, completed: !it.completed } : it
                      );
                      await onSave({
                        benefits: { ...benefits, benefits: next },
                      });
                    }}
                  >
                    {b.completed ? (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    ) : (
                      <Circle className="h-5 w-5 text-gray-400" />
                    )}
                  </button>

                  <input
                    className="flex-1 rounded-lg border border-gray-200 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-200"
                    defaultValue={b.text}
                    placeholder="Enter benefit description"
                    onBlur={async (e) => {
                      const next = benefits.benefits.map((it, idx) =>
                        idx === i ? { ...it, text: e.target.value } : it
                      );
                      await onSave({
                        benefits: { ...benefits, benefits: next },
                      });
                    }}
                  />

                  <button
                    className="flex-shrink-0 p-2 rounded-full bg-red-50 text-red-500 hover:bg-red-100 transition-colors duration-200 opacity-0 group-hover/benefit:opacity-100"
                    onClick={async () => {
                      const next = benefits.benefits.filter(
                        (_, idx) => idx !== i
                      );
                      await onSave({
                        benefits: { ...benefits, benefits: next },
                      });
                    }}
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State for Benefits */}
          {benefits.benefits.length === 0 && (
            <div className="text-center py-8">
              <div className="mx-auto w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-3">
                <CheckCircle className="h-8 w-8 text-gray-400" />
              </div>
              <p className="text-gray-500 text-sm">No benefits added yet</p>
            </div>
          )}
        </div>

        {/* Testimonial Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-200/20">
              <Star className="h-6 w-6 text-amber-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Testimonial
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                Manage customer testimonials and reviews
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <Star className="h-4 w-4 text-amber-500" />
                  Section Title
                </label>
                <input
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-200"
                  defaultValue={testimonial.title}
                  placeholder="Enter section title"
                  onBlur={async (e) =>
                    onSave({
                      testimonial: {
                        ...testimonial,
                        title: e.target.value,
                      },
                    })
                  }
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <User className="h-4 w-4 text-blue-500" />
                  Customer Name
                </label>
                <input
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-200"
                  defaultValue={testimonial.testimonial.name}
                  placeholder="Enter customer name"
                  onBlur={async (e) =>
                    onSave({
                      testimonial: {
                        ...testimonial,
                        testimonial: {
                          ...testimonial.testimonial,
                          name: e.target.value,
                        },
                      },
                    })
                  }
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <Quote className="h-4 w-4 text-green-500" />
                Customer Quote
              </label>
              <textarea
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-200 min-h-24 resize-none"
                defaultValue={testimonial.testimonial.quote}
                placeholder="Enter customer testimonial quote..."
                onBlur={async (e) =>
                  onSave({
                    testimonial: {
                      ...testimonial,
                      testimonial: {
                        ...testimonial.testimonial,
                        quote: e.target.value,
                      },
                    },
                  })
                }
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-purple-500" />
                  Customer Role
                </label>
                <input
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-200"
                  defaultValue={testimonial.testimonial.role}
                  placeholder="e.g., CEO, Developer, Designer"
                  onBlur={async (e) =>
                    onSave({
                      testimonial: {
                        ...testimonial,
                        testimonial: {
                          ...testimonial.testimonial,
                          role: e.target.value,
                        },
                      },
                    })
                  }
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <ImageIcon className="h-4 w-4 text-indigo-500" />
                  Avatar URLs
                </label>
                <input
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-200"
                  defaultValue={testimonial.avatars.join(", ")}
                  placeholder="https://example.com/avatar1.jpg, https://example.com/avatar2.jpg"
                  onBlur={async (e) =>
                    onSave({
                      testimonial: {
                        ...testimonial,
                        avatars: e.target.value
                          .split(",")
                          .map((s) => s.trim())
                          .filter(Boolean),
                      },
                    })
                  }
                />
                <p className="text-xs text-gray-500">
                  Separate multiple URLs with commas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
