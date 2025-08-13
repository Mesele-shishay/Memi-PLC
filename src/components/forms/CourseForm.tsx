"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { FileDropzone } from "@/components/ui/file-dropzone";
import { UploadProgress } from "@/components/ui/upload-progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { api } from "@/lib/apiClient";
import { useFileUpload } from "@/hooks/useFileUpload";

const courseSchema = z.object({
  slug: z.string().min(1, "Slug is required"),
  title: z.string().min(1),
  description: z.string().min(1),
  instructor: z.string().min(1),
  duration: z.string().min(1),
  level: z.enum(["Beginner", "Intermediate", "Advanced"]),
  category: z.string().min(1),
  students: z.coerce.number().int().nonnegative().default(0),
  price: z.string().min(1),
  originalPrice: z.string().optional(),
  image: z.string().min(1),
  features: z.string().optional(),
  isPopular: z.coerce.boolean().optional(),
  isNew: z.coerce.boolean().optional(),
});

export type CourseFormInitial = Partial<z.infer<typeof courseSchema>> & {
  id?: string;
};

export function CourseForm({
  initial,
  mode = "create",
}: {
  initial?: CourseFormInitial;
  mode?: "create" | "edit";
}) {
  const router = useRouter();
  const [submitting, setSubmitting] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [level, setLevel] = React.useState<string>(
    (initial?.level as string) || "Beginner"
  );
  const [imagePreview, setImagePreview] = React.useState<string | null>(
    (initial?.image as string) || null
  );
  const [imageDataUrl, setImageDataUrl] = React.useState<string | null>(null);
  const [categories, setCategories] = React.useState<string[]>([]);
  const [category, setCategory] = React.useState<string>(
    (initial?.category as string) || ""
  );
  const [title, setTitle] = React.useState<string>(initial?.title || "");
  const [slug, setSlug] = React.useState<string>((initial as any)?.slug || "");
  const [slugTouched, setSlugTouched] = React.useState<boolean>(false);
  const { uploadSingleFile, isUploading, uploadProgress } = useFileUpload();
  const [uploadStatus, setUploadStatus] = React.useState<{
    status: "idle" | "uploading" | "success" | "error";
    message: string;
  }>({ status: "idle", message: "" });

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
    return () => {
      mounted = false;
    };
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    setSubmitting(true);
    setError(null);
    try {
      const raw = Object.fromEntries(formData.entries());
      const parsed = courseSchema.parse({
        slug: (raw.slug as string) || slug,
        title: (raw.title as string) || title,
        description: raw.description,
        instructor: raw.instructor,
        duration: raw.duration,
        level: level,
        category: category || (raw.category as string),
        students: raw.students,
        price: raw.price,
        originalPrice: raw.originalPrice,
        image:
          imageDataUrl ||
          (initial?.image as string) ||
          (raw.image as string) ||
          "",
        features: raw.features,
        isPopular: raw.isPopular === "on",
        isNew: raw.isNew === "on",
      });

      const features = parsed.features
        ? parsed.features
            .split(",")
            .map((f) => f.trim())
            .filter(Boolean)
        : [];

      const payload = { ...parsed, features };

      if (mode === "create") {
        const created = await api.internal<{ id: string }>("/api/courses", {
          method: "POST",
          body: JSON.stringify(payload),
        });
        router.push(`/dashboard/courses/${created.id}`);
      } else if (mode === "edit" && initial?.id) {
        await api.internal(`/api/courses/${initial.id}`, {
          method: "PUT",
          body: JSON.stringify(payload),
        });
        router.push(`/dashboard/courses/${initial.id}`);
      }
    } catch (e: any) {
      setError(e?.message || "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {mode === "create" ? "Create Course" : "Edit Course"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={onSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div>
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
          <div>
            <Label htmlFor="instructor">Instructor</Label>
            <Input
              id="instructor"
              name="instructor"
              defaultValue={initial?.instructor || ""}
              required
            />
          </div>
          <div className="md:col-span-2">
            <Label htmlFor="description">Description</Label>
            <Input
              id="description"
              name="description"
              defaultValue={initial?.description || ""}
              required
            />
          </div>
          <div>
            <Label htmlFor="duration">Duration</Label>
            <Input
              id="duration"
              name="duration"
              defaultValue={initial?.duration || ""}
              required
            />
          </div>
          <div>
            <Label htmlFor="level">Level</Label>
            <Select value={level} onValueChange={setLevel}>
              <SelectTrigger id="level" className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Beginner">Beginner</SelectItem>
                <SelectItem value="Intermediate">Intermediate</SelectItem>
                <SelectItem value="Advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>
            <input type="hidden" name="level" value={level} />
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

          <div>
            <Label htmlFor="price">Price</Label>
            <Input
              id="price"
              name="price"
              defaultValue={initial?.price || ""}
              required
            />
          </div>
          <div>
            <Label htmlFor="originalPrice">Original Price</Label>
            <Input
              id="originalPrice"
              name="originalPrice"
              defaultValue={initial?.originalPrice || ""}
            />
          </div>
          <div className="md:col-span-2">
            <FileDropzone
              label="Course Image"
              previewUrl={imagePreview}
              onFile={async (file) => {
                // Reset upload status
                setUploadStatus({
                  status: "uploading",
                  message: "Uploading image...",
                });
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
                    throw new Error(
                      "Only JPEG, PNG, GIF, and WebP images are allowed"
                    );
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
              }}
              shape="rect"
              rectHeightClass="h-48"
              disabled={isUploading}
            />

            {/* Upload Progress Bar */}
            <UploadProgress
              isUploading={isUploading}
              uploadProgress={uploadProgress}
              uploadStatus={uploadStatus}
            />

            <p className="text-xs text-gray-500 text-center mt-2">
              Recommended: 800x600px, max 5MB
            </p>
            {/* Keep a hidden input for backward compatibility */}
            <input
              type="hidden"
              name="image"
              value={imagePreview || initial?.image || ""}
            />
          </div>
          <div className="md:col-span-2">
            <Label htmlFor="features">Features (comma separated)</Label>
            <Input
              id="features"
              name="features"
              defaultValue={(initial as any)?.features?.join?.(", ") || ""}
            />
          </div>
          <div className="flex items-center gap-2 md:col-span-2">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="isPopular"
                defaultChecked={Boolean(initial?.isPopular)}
              />{" "}
              Popular
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="isNew"
                defaultChecked={Boolean(initial?.isNew)}
              />{" "}
              New
            </label>
          </div>
          {error ? (
            <div className="text-destructive md:col-span-2">{error}</div>
          ) : null}
          <div className="md:col-span-2 flex gap-3">
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
