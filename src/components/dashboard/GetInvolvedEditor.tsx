"use client";

import React from "react";
import { FileDropzone } from "@/components/ui/file-dropzone";
import { GetInvolvedSectionProps } from "@/types";
import {
  Plus,
  Trash2,
  Sparkles,
  Image as ImageIcon,
  Type,
  FileText,
  MousePointer,
  Link,
} from "lucide-react";

interface GetInvolvedEditorProps {
  getInvolved: GetInvolvedSectionProps;
  onSave: (partial: any) => Promise<void>;
  onInvolvedImage: (index: number, file: File) => Promise<void>;
  involvedPreviews: Record<number, string | null>;
}

export function GetInvolvedEditor({
  getInvolved,
  onSave,
  onInvolvedImage,
  involvedPreviews,
}: GetInvolvedEditorProps) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/80 backdrop-blur-xl shadow-2xl p-8">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-200/20">
            <Sparkles className="h-6 w-6 text-purple-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Get Involved
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Manage ways for users to engage with your platform
            </p>
          </div>
        </div>
        <button
          className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          onClick={async () =>
            onSave({
              getInvolved: {
                ...getInvolved,
                involvementOptions: [
                  ...getInvolved.involvementOptions,
                  {
                    icon: "✨",
                    title: "New Option",
                    description: "Description",
                    ctaText: "Learn more",
                    ctaHref: "/",
                    image: { src: "", alt: "", fallback: "✨" },
                  },
                ],
              },
            })
          }
        >
          <Plus className="h-4 w-4" />
          Add Option
        </button>
      </div>

      {/* Options Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {getInvolved.involvementOptions.map((opt, i) => (
          <div
            key={`involved-${i}`}
            className="group/card relative rounded-2xl border border-gray-200/50 bg-white/60 backdrop-blur-sm p-6 space-y-4 hover:shadow-xl hover:border-purple-200/50 transition-all duration-300 hover:-translate-y-1"
          >
            {/* Remove Button */}
            <button
              className="absolute top-4 right-4 p-2 rounded-full bg-red-50 text-red-500 hover:bg-red-100 transition-colors duration-200 opacity-0 group-hover/card:opacity-100"
              onClick={async () => {
                const next = getInvolved.involvementOptions.filter(
                  (_, idx) => idx !== i
                );
                await onSave({
                  getInvolved: {
                    ...getInvolved,
                    involvementOptions: next,
                  },
                });
              }}
            >
              <Trash2 className="h-4 w-4" />
            </button>

            {/* Image Section */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <ImageIcon className="h-4 w-4 text-blue-500" />
                Option Image
              </label>
              <FileDropzone
                label="Image"
                onFile={(file) => onInvolvedImage(i, file)}
                previewUrl={involvedPreviews[i] ?? opt.image?.src ?? null}
                rectHeightClass="h-32"
              />
            </div>

            {/* Icon Input */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-amber-500" />
                Icon
              </label>
              <input
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200 text-center text-2xl"
                defaultValue={opt.icon}
                placeholder="✨"
                onBlur={async (e) => {
                  const next = getInvolved.involvementOptions.map((it, idx) =>
                    idx === i ? { ...it, icon: e.target.value } : it
                  );
                  await onSave({
                    getInvolved: {
                      ...getInvolved,
                      involvementOptions: next,
                    },
                  });
                }}
              />
              <p className="text-xs text-gray-500 text-center">
                Use emoji or special characters
              </p>
            </div>

            {/* Title Input */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <Type className="h-4 w-4 text-green-500" />
                Title
              </label>
              <input
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200"
                defaultValue={opt.title}
                placeholder="Enter option title"
                onBlur={async (e) => {
                  const next = getInvolved.involvementOptions.map((it, idx) =>
                    idx === i ? { ...it, title: e.target.value } : it
                  );
                  await onSave({
                    getInvolved: {
                      ...getInvolved,
                      involvementOptions: next,
                    },
                  });
                }}
              />
            </div>

            {/* Description Input */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <FileText className="h-4 w-4 text-blue-500" />
                Description
              </label>
              <textarea
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200 min-h-20 resize-none"
                defaultValue={opt.description}
                placeholder="Describe this involvement option..."
                onBlur={async (e) => {
                  const next = getInvolved.involvementOptions.map((it, idx) =>
                    idx === i ? { ...it, description: e.target.value } : it
                  );
                  await onSave({
                    getInvolved: {
                      ...getInvolved,
                      involvementOptions: next,
                    },
                  });
                }}
              />
            </div>

            {/* CTA Section */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <MousePointer className="h-4 w-4 text-purple-500" />
                Call to Action
              </label>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600 w-16">Text:</span>
                  <input
                    className="flex-1 rounded-xl border border-gray-200 px-4 py-2.5 text-gray-900 placeholder-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200 text-sm"
                    placeholder="e.g., Learn more, Get started"
                    defaultValue={opt.ctaText}
                    onBlur={async (e) => {
                      const next = getInvolved.involvementOptions.map(
                        (it, idx) =>
                          idx === i ? { ...it, ctaText: e.target.value } : it
                      );
                      await onSave({
                        getInvolved: {
                          ...getInvolved,
                          involvementOptions: next,
                        },
                      });
                    }}
                  />
                </div>

                <div className="flex items-center gap-2">
                  <Link className="h-4 w-4 text-green-600" />
                  <input
                    className="flex-1 rounded-xl border border-gray-200 px-4 py-2.5 text-gray-900 placeholder-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200 text-sm"
                    placeholder="e.g., /volunteer, /donate"
                    defaultValue={opt.ctaHref}
                    onBlur={async (e) => {
                      const next = getInvolved.involvementOptions.map(
                        (it, idx) =>
                          idx === i ? { ...it, ctaHref: e.target.value } : it
                      );
                      await onSave({
                        getInvolved: {
                          ...getInvolved,
                          involvementOptions: next,
                        },
                      });
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {getInvolved.involvementOptions.length === 0 && (
        <div className="text-center py-12">
          <div className="mx-auto w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mb-4">
            <Sparkles className="h-12 w-12 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No involvement options yet
          </h3>
          <p className="text-gray-500 mb-6">
            Get started by adding ways for users to engage with your platform
          </p>
          <button
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            onClick={async () =>
              onSave({
                getInvolved: {
                  ...getInvolved,
                  involvementOptions: [
                    {
                      icon: "✨",
                      title: "New Option",
                      description: "Description",
                      ctaText: "Learn more",
                      ctaHref: "/",
                      image: { src: "", alt: "", fallback: "✨" },
                    },
                  ],
                },
              })
            }
          >
            <Plus className="h-4 w-4" />
            Add Your First Option
          </button>
        </div>
      )}
    </div>
  );
}
