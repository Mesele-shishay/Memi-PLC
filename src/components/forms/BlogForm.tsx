"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FileDropzone } from "@/components/ui/file-dropzone";
import { UploadProgress } from "@/components/ui/upload-progress";
import { TipTapEditor } from "@/components/ui/tiptap-editor";
import { api } from "@/lib/apiClient";
import { useFileUpload } from "@/hooks/useFileUpload";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2, CheckCircle, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const blogSchema = z.object({
  slug: z.string().min(1, "Slug is required"),
  image: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
  category: z.string().min(1),
  author: z.string().optional(),
  date: z.string().optional(),
  readTime: z.string().optional(),
  authorImage: z.string().optional(),
});

export type BlogFormInitial = Partial<z.infer<typeof blogSchema>> & {
  slug?: string;
};

export function BlogForm({
  initial,
  mode = "create",
}: {
  initial?: BlogFormInitial;
  mode?: "create" | "edit";
}) {
  const router = useRouter();
  const [submitting, setSubmitting] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [categories, setCategories] = React.useState<string[]>([]);
  const [category, setCategory] = React.useState<string>(
    initial?.category || ""
  );
  const [imagePreview, setImagePreview] = React.useState<string | null>(null);
  const [imageDataUrl, setImageDataUrl] = React.useState<string | null>(null);
  const [title, setTitle] = React.useState<string>(initial?.title || "");
  const [slug, setSlug] = React.useState<string>(initial?.slug || "");
  const [slugTouched, setSlugTouched] = React.useState<boolean>(false);
  const [description, setDescription] = React.useState<string>(
    (initial as any)?.description || ""
  );
  const [uploadStatus, setUploadStatus] = React.useState<{
    status: "idle" | "uploading" | "success" | "error";
    message: string;
  }>({ status: "idle", message: "" });

  const { uploadSingleFile, isUploading, uploadProgress } = useFileUpload();

  function slugify(input: string): string {
    return input
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
  }

  React.useEffect(() => {
    let mounted = true;
    api
      .internal<string[]>("/api/categories", { cache: "no-store" })
      .then((data) => {
        if (!mounted) return;
        setCategories(Array.isArray(data) ? data : []);
      })
      .catch((error) => {
        console.error("Failed to fetch categories:", error);
      });
    if (initial?.image) setImagePreview(initial.image as string);
    // Initialize slug from title for create mode if not provided
    if (mode === "create" && !initial?.slug && title && !slugTouched) {
      setSlug(slugify(title));
    }

    return () => {
      mounted = false;
    };
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const parsed = blogSchema.parse({
        slug: slug,
        image: imageDataUrl || (initial?.image as string) || "",
        title: title,
        description: description,
        category: category,
      });

      if (mode === "create") {
        const created = await api.internal<{ slug: string }>("/api/blog", {
          method: "POST",
          body: JSON.stringify(parsed),
        });
        router.push(`/dashboard/blog/${created.slug}`);
      } else if (mode === "edit" && initial?.slug) {
        await api.internal(`/api/blog/${initial.slug}`, {
          method: "PUT",
          body: JSON.stringify(parsed),
        });
        router.push(`/dashboard/blog/${initial.slug}`);
      }
    } catch (e: any) {
      setError(e?.message || "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  }

  const handleImageUpload = async (file: File) => {
    // Reset upload status
    setUploadStatus({ status: "uploading", message: "Uploading image..." });
    setError(null);

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
        const uploadData = Array.isArray(result.data)
          ? result.data[0]
          : result.data;

        setImageDataUrl(uploadData.url);
        setImagePreview(uploadData.url);
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
      setError(errorMessage);

      // Clear error message after 5 seconds
      setTimeout(() => {
        setUploadStatus({ status: "idle", message: "" });
      }, 5000);
    }
  };

  return (
    <Card>
      <CardContent>
        <form
          onSubmit={onSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2"
        >
          <div className="md:col-span-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              name="title"
              value={title}
              onChange={(e) => {
                const next = e.target.value;
                setTitle(next);
                if (mode === "create" && !slugTouched) {
                  setSlug(slugify(next));
                }
              }}
              required
            />
          </div>
          <div>
            <Label htmlFor="slug">Slug</Label>
            <Input
              id="slug"
              name="slug"
              value={slug}
              onChange={(e) => {
                setSlugTouched(true);
                setSlug(e.target.value);
              }}
              onFocus={() => setSlugTouched(true)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-full" id="category">
                <SelectValue
                  placeholder={
                    categories.length ? "Select category" : "No categories"
                  }
                />
              </SelectTrigger>
              <SelectContent>
                {categories.map((c) => (
                  <SelectItem key={c} value={c}>
                    {c}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <input type="hidden" name="category" value={category} />
            {categories.length === 0 ? (
              <p className="text-sm text-muted-foreground">
                No categories yet.
              </p>
            ) : null}
          </div>
          <div className="md:col-span-2">
            <FileDropzone
              label="Cover Image"
              previewUrl={imagePreview}
              onFile={handleImageUpload}
              shape="rect"
              rectHeightClass="h-48"
              disabled={isUploading}
            />

            <UploadProgress
              isUploading={isUploading}
              uploadProgress={uploadProgress}
              uploadStatus={uploadStatus}
            />

            <p className="text-xs text-gray-500 text-center mt-2">
              Recommended: 1200x800px, max 5MB
            </p>
          </div>
          <div className="md:col-span-2 space-y-2">
            <Label>Description</Label>
            <input type="hidden" name="description" value={description} />
            <TipTapEditor
              value={description}
              onChange={(html) => {
                setDescription(html);
                const hidden = (document.querySelector(
                  'input[name="description"]'
                ) as HTMLInputElement)!;
                hidden.value = html;
              }}
            />
          </div>

          {error ? (
            <div className="text-destructive md:col-span-2">{error}</div>
          ) : null}
          <div className="md:col-span-2 flex gap-3 justify-end border-t pt-6">
            <Button type="submit" disabled={submitting}>
              {submitting ? "Saving..." : mode === "create" ? "Create" : "Save"}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => router.back()}
            >
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
