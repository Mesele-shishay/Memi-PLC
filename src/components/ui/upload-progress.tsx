"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface UploadProgressProps {
  isUploading: boolean;
  uploadProgress: number;
  uploadStatus: {
    status: "idle" | "uploading" | "success" | "error";
    message: string;
  };
  className?: string;
}

export function UploadProgress({
  isUploading,
  uploadProgress,
  uploadStatus,
  className,
}: UploadProgressProps) {
  return (
    <div className={cn("space-y-3", className)}>
      {/* Upload Progress Bar */}
      {isUploading && uploadProgress > 0 && uploadProgress < 100 && (
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${uploadProgress}%` }}
          ></div>
        </div>
      )}

      {/* Upload Status Display */}
      {uploadStatus.status !== "idle" && (
        <div
          className={cn(
            "p-3 rounded-lg border-l-4 text-sm",
            uploadStatus.status === "uploading" &&
              "border-blue-500 bg-blue-50 text-blue-700",
            uploadStatus.status === "success" &&
              "border-green-500 bg-green-50 text-green-700",
            uploadStatus.status === "error" &&
              "border-red-500 bg-red-50 text-red-700"
          )}
        >
          <div className="flex items-center gap-2">
            {uploadStatus.status === "uploading" && (
              <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
            )}
            {uploadStatus.status === "success" && (
              <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-2.5 h-2.5 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            )}
            {uploadStatus.status === "error" && (
              <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-2.5 h-2.5 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            )}
            {uploadStatus.message}
          </div>
        </div>
      )}

      {/* Progress Percentage Text */}
      {isUploading && uploadProgress > 0 && uploadProgress < 100 && (
        <p className="text-xs text-gray-500 text-center">
          Uploading... {Math.round(uploadProgress)}%
        </p>
      )}
    </div>
  );
}
