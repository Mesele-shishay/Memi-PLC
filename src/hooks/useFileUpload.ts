import { useState } from "react";

interface UploadResponse {
  url: string;
  filename: string;
  originalName: string;
  size: number;
  mimetype: string;
}

interface UploadResult {
  success: boolean;
  data?: UploadResponse | UploadResponse[];
  message?: string;
  error?: string;
}

export const useFileUpload = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadError, setUploadError] = useState<string | null>(null);

  const getToken = (): string | null => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("admin-token");
    }
    return null;
  };

  const uploadSingleFile = async (file: File): Promise<UploadResult> => {
    const token = getToken();
    if (!token) {
      return { success: false, error: "Authentication required" };
    }

    setIsUploading(true);
    setUploadProgress(0);
    setUploadError(null);

    try {
      const formData = new FormData();
      formData.append("file", file);

      // Simulate progress for better UX
      const progressInterval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 90) return prev;
          return prev + Math.random() * 10;
        });
      }, 200);

      const response = await fetch("/api/upload/single", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      clearInterval(progressInterval);
      setUploadProgress(100);

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Upload failed");
      }

      return result;
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Upload failed";
      setUploadError(errorMessage);
      return {
        success: false,
        error: errorMessage,
      };
    } finally {
      setIsUploading(false);
      // Keep progress at 100 for a moment to show completion
      setTimeout(() => setUploadProgress(0), 1000);
    }
  };

  const uploadMultipleFiles = async (files: File[]): Promise<UploadResult> => {
    const token = getToken();
    if (!token) {
      return { success: false, error: "Authentication required" };
    }

    if (files.length === 0) {
      return { success: false, error: "No files selected" };
    }

    setIsUploading(true);
    setUploadProgress(0);
    setUploadError(null);

    try {
      const formData = new FormData();
      files.forEach((file) => {
        formData.append("files", file);
      });

      // Simulate progress for multiple files
      const progressInterval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 90) return prev;
          return prev + Math.random() * 5;
        });
      }, 300);

      const response = await fetch("/api/upload/multiple", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      clearInterval(progressInterval);
      setUploadProgress(100);

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Upload failed");
      }

      return result;
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Upload failed";
      setUploadError(errorMessage);
      return {
        success: false,
        error: errorMessage,
      };
    } finally {
      setIsUploading(false);
      setTimeout(() => setUploadProgress(0), 1000);
    }
  };

  const deleteFile = async (filename: string): Promise<UploadResult> => {
    const token = getToken();
    if (!token) {
      return { success: false, error: "Authentication required" };
    }

    try {
      const formData = new FormData();
      formData.append("filename", filename);

      const response = await fetch("/api/upload/delete", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Delete failed");
      }

      return result;
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Delete failed";
      setUploadError(errorMessage);
      return {
        success: false,
        error: errorMessage,
      };
    }
  };

  const clearError = () => {
    setUploadError(null);
  };

  return {
    uploadSingleFile,
    uploadMultipleFiles,
    deleteFile,
    isUploading,
    uploadProgress,
    uploadError,
    clearError,
  };
};
