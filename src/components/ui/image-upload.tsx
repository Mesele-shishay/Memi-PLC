"use client";

import React, { useState, useRef } from "react";
import { Button } from "./button";
import { Input } from "./input";
import { Label } from "./label";
import { useFileUpload } from "@/hooks/useFileUpload";
import { UploadProgress } from "@/components/ui/upload-progress";
import { X, Upload, Image as ImageIcon } from "lucide-react";

interface ImageUploadProps {
  value?: string;
  onChange: (url: string) => void;
  onRemove?: () => void;
  label?: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  accept?: string;
  maxSize?: number; // in MB
}

export const ImageUpload: React.FC<ImageUploadProps> = ({
  value,
  onChange,
  onRemove,
  label = "Image",
  placeholder = "Click to upload image",
  className = "",
  disabled = false,
  accept = "image/*",
  maxSize = 5,
}) => {
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { uploadSingleFile, isUploading, uploadProgress } = useFileUpload();
  const [uploadStatus, setUploadStatus] = useState<{
    status: "idle" | "uploading" | "success" | "error";
    message: string;
  }>({ status: "idle", message: "" });

  const handleFile = async (file: File) => {
    setError(null);
    setUploadStatus({ status: "uploading", message: "Uploading image..." });

    // Validate file type
    if (!file.type.startsWith("image/")) {
      const errorMsg = "Please select an image file";
      setError(errorMsg);
      setUploadStatus({ status: "error", message: errorMsg });
      return;
    }

    // Validate file size
    if (file.size > maxSize * 1024 * 1024) {
      const errorMsg = `File size must be less than ${maxSize}MB`;
      setError(errorMsg);
      setUploadStatus({ status: "error", message: errorMsg });
      return;
    }

    try {
      const result = await uploadSingleFile(file);

      if (result.success && result.data) {
        const uploadData = Array.isArray(result.data)
          ? result.data[0]
          : result.data;
        onChange(uploadData.url);
        setUploadStatus({
          status: "success",
          message: "Image uploaded successfully!",
        });

        // Clear success message after 3 seconds
        setTimeout(() => {
          setUploadStatus({ status: "idle", message: "" });
        }, 3000);
      } else {
        const errorMsg = result.error || "Upload failed";
        setError(errorMsg);
        setUploadStatus({ status: "error", message: errorMsg });

        // Clear error message after 5 seconds
        setTimeout(() => {
          setUploadStatus({ status: "idle", message: "" });
        }, 5000);
      }
    } catch (err) {
      const errorMsg = "Upload failed. Please try again.";
      setError(errorMsg);
      setUploadStatus({ status: "error", message: errorMsg });

      // Clear error message after 5 seconds
      setTimeout(() => {
        setUploadStatus({ status: "idle", message: "" });
      }, 5000);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleClick = () => {
    if (!disabled && !isUploading) {
      fileInputRef.current?.click();
    }
  };

  const handleRemove = () => {
    onChange("");
    if (onRemove) {
      onRemove();
    }
  };

  return (
    <div className={`space-y-2 ${className}`}>
      {label && <Label>{label}</Label>}

      <div
        className={`
          relative border-2 border-dashed rounded-lg p-4 text-center cursor-pointer
          transition-colors duration-200 ease-in-out
          ${dragActive ? "border-green-500 bg-green-50" : "border-gray-300"}
          ${
            disabled
              ? "opacity-50 cursor-not-allowed"
              : "hover:border-green-400"
          }
          ${value ? "border-green-500" : ""}
        `}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={handleClick}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept={accept}
          onChange={handleChange}
          className="hidden"
          disabled={disabled || isUploading}
        />

        <UploadProgress
          isUploading={isUploading}
          uploadProgress={uploadProgress}
          uploadStatus={uploadStatus}
        />

        {value ? (
          <div className="space-y-2">
            <div className="relative inline-block">
              <img
                src={value}
                alt="Uploaded"
                className="max-h-32 max-w-full rounded object-cover"
              />
              {!disabled && (
                <Button
                  type="button"
                  variant="destructive"
                  size="sm"
                  className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemove();
                  }}
                >
                  <X className="h-3 w-3" />
                </Button>
              )}
            </div>
            <p className="text-sm text-gray-600">Click to change image</p>
          </div>
        ) : (
          <div className="space-y-2">
            <Upload className="mx-auto h-8 w-8 text-gray-400" />
            <p className="text-sm text-gray-600">{placeholder}</p>
            <p className="text-xs text-gray-500">
              Drag and drop or click to upload (max {maxSize}MB)
            </p>
          </div>
        )}

        {isUploading && (
          <div className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center rounded-lg">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-500 mx-auto"></div>
              <p className="text-sm text-gray-600 mt-2">Uploading...</p>
            </div>
          </div>
        )}
      </div>

      {error && (
        <p className="text-sm text-red-600 flex items-center gap-1">
          <X className="h-4 w-4" />
          {error}
        </p>
      )}

      {value && (
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <ImageIcon className="h-3 w-3" />
          <span>Image uploaded successfully</span>
        </div>
      )}
    </div>
  );
};
