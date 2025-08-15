"use client";

import React from "react";
import { FileDropzone } from "@/components/ui/file-dropzone";
import { UploadProgress } from "@/components/ui/upload-progress";
import { HeroSectionProps } from "@/types";
import { useFileUpload } from "@/hooks/useFileUpload";

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
  const { uploadSingleFile } = useFileUpload();
  const [isUploading, setIsUploading] = React.useState(false);
  const [uploadProgress, setUploadProgress] = React.useState(0);
  const [uploadStatus, setUploadStatus] = React.useState<{
    status: "idle" | "uploading" | "success" | "error";
    message: string;
  }>({ status: "idle", message: "" });

  const handleImageUpload = async (file: File) => {
    setUploadStatus({ status: "uploading", message: "Uploading image..." });
    setIsUploading(true);
    setUploadProgress(0);

    // Local progress simulation
    const interval = window.setInterval(() => {
      setUploadProgress((prev) =>
        prev >= 90 ? prev : prev + Math.random() * 10
      );
    }, 200);

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

      const result = await uploadSingleFile(file);
      if (result.success && result.data) {
        window.clearInterval(interval);
        setUploadProgress(100);
        const uploadData = Array.isArray(result.data)
          ? result.data[0]
          : result.data;
        await onHeroImage(file);
        // Update the hero image with the uploaded URL
        await onSave({
          hero: {
            ...hero,
            image: {
              src: uploadData.url,
              alt: hero.image?.alt ?? "Hero",
            },
          },
        });
        setUploadStatus({
          status: "success",
          message: "Image uploaded successfully!",
        });

        // Clear success message after 3 seconds
        setTimeout(() => {
          setUploadStatus({ status: "idle", message: "" });
        }, 3000);
      } else {
        throw new Error(result.error || "Upload failed");
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Upload failed";
      setUploadStatus({
        status: "error",
        message: errorMessage,
      });

      // Clear error message after 5 seconds
      setTimeout(() => {
        setUploadStatus({ status: "idle", message: "" });
      }, 5000);
    } finally {
      setIsUploading(false);
      setTimeout(() => setUploadProgress(0), 800);
    }
  };

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
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              Hero Title
            </label>
            <input
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
              defaultValue={hero.title}
              placeholder="Enter your hero title"
              onBlur={async (e) => {
                await onSave({
                  hero: { ...hero, title: e.target.value },
                });
              }}
            />
          </div>

          {/* Hero Subtitle */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              Hero Subtitle
            </label>
            <textarea
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 min-h-20 resize-none"
              defaultValue={hero.subtitle}
              placeholder="Enter your hero subtitle"
              onBlur={async (e) => {
                await onSave({
                  hero: { ...hero, subtitle: e.target.value },
                });
              }}
            />
          </div>

          {/* Call to Action */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-500"></span>
              Call to Action Text
            </label>
            <input
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
              defaultValue={hero.ctaButtons?.[0]?.label}
              placeholder="e.g., Get Started, Learn More"
              onBlur={async (e) => {
                await onSave({
                  hero: {
                    ...hero,
                    ctaButtons: [
                      { ...hero.ctaButtons?.[0], label: e.target.value },
                    ],
                  },
                });
              }}
            />
          </div>

          {/* CTA Link */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-500"></span>
              Call to Action Link
            </label>
            <input
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
              defaultValue={hero.ctaButtons?.[0]?.href}
              placeholder="e.g., /courses, /contact"
              onBlur={async (e) => {
                await onSave({
                  hero: {
                    ...hero,
                    ctaButtons: [
                      { ...hero.ctaButtons?.[0], href: e.target.value },
                    ],
                  },
                });
              }}
            />
          </div>
        </div>

        {/* Right Column - Image Upload */}
        <div className="flex-1 space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500"></span>
              Hero Image
            </label>
            <FileDropzone
              label="Upload Hero Image"
              onFile={handleImageUpload}
              previewUrl={heroPreview ?? hero.image?.src ?? null}
              rectHeightClass="h-64"
              disabled={isUploading}
            />

            <UploadProgress
              isUploading={isUploading}
              uploadProgress={uploadProgress}
              uploadStatus={uploadStatus}
            />

            <p className="text-xs text-gray-500 text-center">
              Recommended: 1200x800px, max 5MB
            </p>
          </div>
        </div>
      </div>

      {/* Image Alt Text */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
          Image Alt Text
        </label>
        <input
          className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
          defaultValue={hero.image?.alt}
          placeholder="Describe the image for accessibility"
          onBlur={async (e) => {
            await onSave({
              hero: {
                ...hero,
                image: { ...hero.image, alt: e.target.value },
              },
            });
          }}
        />
      </div>
    </div>
  );
}
