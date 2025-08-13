"use client";

import React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Loader2, Pencil, Trash2, Eye } from "lucide-react";
import { api } from "@/lib/apiClient";
import { BlogPost } from "@/types/api";

type BlogItem = {
  slug: string;
  title: string;
  description: string;
  author: string;
  category: string;
  image: string;
  readTime?: string;
  date?: string;
};

export default function BlogListPage() {
  const [items, setItems] = React.useState<BlogItem[] | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [deleting, setDeleting] = React.useState<string | null>(null);

  React.useEffect(() => {
    let mounted = true;
    api
      .internal<BlogItem[]>("/api/blog")
      .then((data) => {
        if (mounted) setItems(data);
      })
      .finally(() => mounted && setLoading(false));
    return () => {
      mounted = false;
    };
  }, []);

  async function onDelete(slug: string) {
    if (!confirm("Delete this blog post?")) return;
    setDeleting(slug);
    try {
      await api.internal(`/api/blog/${slug}`, { method: "DELETE" });
      setItems((prev) => (prev ? prev.filter((b) => b.slug !== slug) : prev));
    } finally {
      setDeleting(null);
    }
  }

  return (
    <div className="py-4 md:py-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Blog Posts</h1>
        <Button asChild>
          <Link href="/dashboard/blog/new">New Post</Link>
        </Button>
      </div>
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <Card
              key={i}
              className="group overflow-hidden transition duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="relative -mt-6 -mx-6 aspect-[16/9] overflow-hidden">
                <Skeleton className="h-full w-full rounded-none" />
              </div>
              <CardContent className="space-y-3 pt-4">
                <div className="flex items-center gap-2">
                  <Skeleton className="h-5 w-20 rounded-full" />
                  <Skeleton className="h-5 w-16 rounded-full" />
                </div>
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <div className="flex items-center gap-3 pt-1">
                  <Skeleton className="size-8 rounded-full" />
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-4 w-16" />
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <div className="flex gap-2">
                  <Skeleton className="h-9 w-16" />
                  <Skeleton className="h-9 w-16" />
                  <Skeleton className="h-9 w-16" />
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items?.map((b) => (
            <Card
              key={b.slug}
              className="group overflow-hidden transition duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            >
              {/* Image */}
              <div className="relative -mt-6 -mx-6 aspect-[16/9] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={b.image}
                  alt={b.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent" />
                <div className="absolute left-4 top-3 flex gap-2">
                  <Badge
                    variant="outline"
                    className="bg-background/70 backdrop-blur"
                  >
                    {b.category}
                  </Badge>
                  {b.readTime ? (
                    <Badge
                      variant="secondary"
                      className="bg-background/70 backdrop-blur"
                    >
                      {b.readTime}
                    </Badge>
                  ) : null}
                </div>
              </div>

              {/* Content */}
              <CardContent className="space-y-3 pt-4">
                <h3 className="text-lg font-semibold leading-tight line-clamp-2">
                  {b.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {b.description}
                </p>
                <div className="flex items-center gap-3 pt-1">
                  <Avatar>
                    <AvatarFallback>
                      {b.author?.slice(0, 2).toUpperCase() || "AU"}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-sm text-muted-foreground">
                    <span className="text-foreground font-medium">
                      {b.author}
                    </span>
                    <span className="mx-2">•</span>
                    <span>{b.date}</span>
                  </div>
                </div>
              </CardContent>

              {/* Actions */}
              <CardFooter className="pt-0">
                <div className="flex gap-2">
                  <Button asChild size="sm" variant="outline">
                    <Link href={`/dashboard/blog/${b.slug}`}>View</Link>
                  </Button>
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="rounded-full"
                  >
                    <Link href={`/dashboard/blog/${b.slug}/edit`}>
                      <Pencil /> Edit
                    </Link>
                  </Button>
                  <Button
                    size="sm"
                    className="rounded-full bg-red-600 hover:bg-red-700 text-white dark:bg-red-600 dark:hover:bg-red-500 focus-visible:ring-red-500"
                    variant="destructive"
                    onClick={() => onDelete(b.slug)}
                    disabled={deleting === b.slug}
                  >
                    {deleting === b.slug ? (
                      <>
                        <Loader2 className="animate-spin" /> Deleting...
                      </>
                    ) : (
                      <>
                        <Trash2 /> Delete
                      </>
                    )}
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
