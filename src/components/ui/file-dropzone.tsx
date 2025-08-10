"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { IconUpload, IconPhoto } from "@tabler/icons-react";

type FileDropzoneProps = {
  label?: string;
  accept?: string;
  onFile: (file: File) => void;
  previewUrl?: string | null;
  className?: string;
  shape?: "rect" | "circle";
  rectHeightClass?: string; // e.g., "h-40"
  circleSizeClass?: string; // e.g., "h-24 w-24"
};

export function FileDropzone({
  label,
  accept = "image/*",
  onFile,
  previewUrl,
  className,
  shape = "rect",
  rectHeightClass = "h-40",
  circleSizeClass = "h-24 w-24",
}: FileDropzoneProps) {
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const [dragActive, setDragActive] = React.useState(false);

  function openFileDialog() {
    inputRef.current?.click();
  }

  function handleFiles(files: FileList | null) {
    const file = files?.[0];
    if (file) onFile(file);
  }

  return (
    <div className={cn("space-y-2", className)}>
      {label ? (
        <div className="text-sm font-medium text-foreground">{label}</div>
      ) : null}
      <div
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            openFileDialog();
          }
        }}
        onClick={openFileDialog}
        onDragOver={(e) => {
          e.preventDefault();
          setDragActive(true);
        }}
        onDragLeave={() => setDragActive(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragActive(false);
          handleFiles(e.dataTransfer?.files ?? null);
        }}
        className={cn(
          "relative group cursor-pointer rounded-lg border border-dashed border-primary/30 bg-primary-50/40 hover:bg-primary-50/60 transition-colors",
          dragActive && "bg-primary-100/60 border-primary",
          shape === "rect" && cn("w-full overflow-hidden", rectHeightClass),
          shape === "circle" &&
            cn(
              "rounded-full inline-flex items-center justify-center",
              circleSizeClass
            )
        )}
      >
        {previewUrl ? (
          <img
            src={previewUrl}
            alt="Preview"
            className={cn(
              "object-cover",
              shape === "rect" && "w-full h-full rounded-lg",
              shape === "circle" && cn("rounded-full", circleSizeClass)
            )}
          />
        ) : (
          <div
            className={cn(
              "absolute inset-0 flex flex-col items-center justify-center gap-2 text-sm text-muted-foreground p-4",
              shape === "circle" && "relative"
            )}
          >
            {shape === "circle" ? (
              <IconPhoto className="text-primary" />
            ) : (
              <IconUpload className="text-primary" />
            )}
            <div className="text-center">
              <div className="font-medium text-primary">Click to upload</div>
              <div className="text-xs">or drag & drop</div>
            </div>
          </div>
        )}
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          className="hidden"
          onChange={(e) => handleFiles(e.target.files)}
        />
      </div>
    </div>
  );
}
