"use client";

import React from "react";
import { FileDropzone } from "@/components/ui/file-dropzone";
import { UploadProgress } from "@/components/ui/upload-progress";
import { FeaturesSectionProps } from "@/types";
import { useFileUpload } from "@/hooks/useFileUpload";

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
  const { uploadSingleFile } = useFileUpload();
  const [perUpload, setPerUpload] = React.useState<
    Record<
      number,
      {
        isUploading: boolean;
        progress: number;
        status: "idle" | "uploading" | "success" | "error";
        message: string;
      }
    >
  >({});

  const handleFeatureImageUpload = async (index: number, file: File) => {
    setPerUpload((prev) => ({
      ...prev,
      [index]: {
        isUploading: true,
        progress: 0,
        status: "uploading",
        message: "Uploading image...",
      },
    }));

    try {
      // Validate file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        throw new Error("File size must be less than 5MB");
      }

      // Validate file type
      const allowedTypes = [
        "image/jpeg",
        "image/jpg",
        "image/png",
        "image/gif",
        "image/webp",
      ];
      if (!allowedTypes.includes(file.type)) {
        throw new Error("Only JPEG, PNG, GIF, and WebP images are allowed");
      }

      // Local progress simulation for this specific dropzone
      const interval = window.setInterval(() => {
        setPerUpload((prev) => {
          const current = prev[index] || {
            isUploading: true,
            progress: 0,
            status: "uploading",
            message: "Uploading image...",
          };
          const nextProgress =
            current.progress >= 90
              ? current.progress
              : current.progress + Math.random() * 10;
          return { ...prev, [index]: { ...current, progress: nextProgress } };
        });
      }, 200);

      const result = await uploadSingleFile(file);
      if (result.success && result.data) {
        window.clearInterval(interval);
        setPerUpload((prev) => ({
          ...prev,
          [index]: {
            ...(prev[index] || {
              isUploading: false,
              progress: 0,
              status: "idle",
              message: "",
            }),
            progress: 100,
          },
        }));
        const uploadData = Array.isArray(result.data)
          ? result.data[0]
          : result.data;
        await onFeatureImage(index, file);
        // Update the feature image with the uploaded URL
        const updatedFeatures = features.features.map((feature, i) =>
          i === index
            ? {
                ...feature,
                image: {
                  ...feature.image,
                  src: uploadData.url,
                  alt: feature.image?.alt ?? feature.title,
                },
              }
            : feature
        );
        await onSave({
          features: { ...features, features: updatedFeatures },
        });
        setPerUpload((prev) => ({
          ...prev,
          [index]: {
            isUploading: false,
            progress: 100,
            status: "success",
            message: "Image uploaded successfully!",
          },
        }));

        // Clear success message after 3 seconds
        setTimeout(() => {
          setPerUpload((prev) => ({
            ...prev,
            [index]: {
              isUploading: false,
              progress: 0,
              status: "idle",
              message: "",
            },
          }));
        }, 3000);
      } else {
        throw new Error(result.error || "Upload failed");
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Upload failed";
      setPerUpload((prev) => ({
        ...prev,
        [index]: {
          isUploading: false,
          progress: 0,
          status: "error",
          message: errorMessage,
        },
      }));

      // Clear error message after 5 seconds
      setTimeout(() => {
        setPerUpload((prev) => ({
          ...prev,
          [index]: {
            isUploading: false,
            progress: 0,
            status: "idle",
            message: "",
          },
        }));
      }, 5000);
    }
  };

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
            className="group/card relative rounded-2xl border border-gray-200/50 bg-white/60 backdrop-blur-sm p-6 space-y-4 hover:shadow-xl hover:border-green-200/50 transition-all duration-300 hover:-translate-y-1"
          >
            {/* Remove Button */}
            <button
              className="absolute top-4 right-4 p-2 rounded-full bg-red-50 text-red-500 hover:bg-red-100 transition-colors duration-200 opacity-0 group-hover/card:opacity-100"
              onClick={async () => {
                const next = features.features.filter((_, i) => i !== index);
                await onSave({
                  features: { ...features, features: next },
                });
              }}
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>

            {/* Feature Title */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                Feature Title
              </label>
              <input
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                defaultValue={feature.title}
                placeholder="Enter feature title"
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
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                Description
              </label>
              <textarea
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 min-h-20 resize-none"
                defaultValue={feature.description}
                placeholder="Describe this feature..."
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
                onFile={(file) => handleFeatureImageUpload(index, file)}
                previewUrl={
                  featurePreviews[index] ?? feature.image?.src ?? null
                }
                rectHeightClass="h-32"
                disabled={Boolean(perUpload[index]?.isUploading)}
              />
              <UploadProgress
                isUploading={Boolean(perUpload[index]?.isUploading)}
                uploadProgress={perUpload[index]?.progress ?? 0}
                uploadStatus={{
                  status: perUpload[index]?.status ?? "idle",
                  message: perUpload[index]?.message ?? "",
                }}
              />
              <p className="text-xs text-gray-500 text-center mt-2">
                Recommended: 400x300px, max 5MB
              </p>
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
          className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-600 text-white font-medium hover:from-green-700 hover:to-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          onClick={async () => {
            const newFeature = {
              title: "New Feature",
              description: "Describe this feature...",
              image: { src: "", alt: "New Feature", fallback: "✨" },
            };
            await onSave({
              features: {
                ...features,
                features: [...features.features, newFeature],
              },
            });
          }}
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          Add New Feature
        </button>
      </div>
    </div>
  );
}
