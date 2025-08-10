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
import { TipTapEditor } from "@/components/ui/tiptap-editor";

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
    fetch("/api/categories", { cache: "no-store" })
      .then((r) => r.json())
      .then((data) => {
        if (!mounted) return;
        setCategories(Array.isArray(data) ? data : []);
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
    const formData = new FormData(e.currentTarget);
    setSubmitting(true);
    setError(null);
    try {
      const raw = Object.fromEntries(formData.entries());
      const parsed = blogSchema.parse({
        slug: (raw.slug as string) || slug,
        image: imageDataUrl || (initial?.image as string) || "",
        title: (raw.title as string) || title,
        description: raw.description,
        category: category || (raw.category as string),
      });

      if (mode === "create") {
        const res = await fetch("/api/blog", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(parsed),
        });
        if (!res.ok) throw new Error(await res.text());
        const created = await res.json();
        router.push(`/dashboard/blog/${created.slug}`);
      } else if (mode === "edit" && initial?.slug) {
        const res = await fetch(`/api/blog/${initial.slug}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(parsed),
        });
        if (!res.ok) throw new Error(await res.text());
        router.push(`/dashboard/blog/${initial.slug}`);
      }
    } catch (e: any) {
      setError(e?.message || "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  }

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
              onFile={(file) => {
                const reader = new FileReader();
                reader.onload = () => {
                  const result = reader.result as string;
                  setImageDataUrl(result);
                  setImagePreview(result);
                };
                reader.readAsDataURL(file);
              }}
              shape="rect"
              rectHeightClass="h-48"
            />
          </div>
          <div className="md:col-span-2 space-y-2">
            <Label>Description</Label>
            <input type="hidden" name="description" value="" />
            <TipTapEditor
              value={(initial as any)?.description || ""}
              onChange={(html) => {
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
