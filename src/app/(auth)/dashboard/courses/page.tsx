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
import { Course } from "@/types";

export default function CoursesListPage() {
  const [items, setItems] = React.useState<Course[] | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [deleting, setDeleting] = React.useState<string | null>(null);

  React.useEffect(() => {
    let mounted = true;
    api
      .internal<Course[]>("/api/courses")
      .then((data) => {
        if (mounted) setItems(data);
      })
      .finally(() => mounted && setLoading(false));
    return () => {
      mounted = false;
    };
  }, []);

  async function onDelete(id: string) {
    if (!confirm("Delete this course?")) return;
    setDeleting(id);
    try {
      await api.internal(`/api/courses/${id}`, { method: "DELETE" });
      setItems((prev) => (prev ? prev.filter((c) => c.id !== id) : prev));
    } finally {
      setDeleting(null);
    }
  }

  return (
    <div className="py-4 md:py-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Courses</h1>
        <Button asChild>
          <Link href="/dashboard/courses/new">New Course</Link>
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
          {items?.map((c) => (
            <Card
              key={c.id}
              className="group overflow-hidden transition duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            >
              {/* Image */}
              <div className="relative -mt-6 -mx-6 aspect-[16/9] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.image || "/vercel.svg"}
                  alt={c.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent" />
                <div className="absolute left-4 top-3 flex gap-2">
                  <Badge
                    variant="outline"
                    className="bg-background/70 backdrop-blur"
                  >
                    {c.category}
                  </Badge>
                  {c.level ? (
                    <Badge
                      variant="secondary"
                      className="bg-background/70 backdrop-blur"
                    >
                      {c.level}
                    </Badge>
                  ) : null}
                </div>
              </div>

              {/* Content */}
              <CardContent className="space-y-3 pt-4">
                <h3 className="text-lg font-semibold leading-tight line-clamp-2">
                  {c.title}
                </h3>
                <div className="text-sm text-muted-foreground line-clamp-2">
                  {c.duration ? `Duration: ${c.duration}` : null}
                </div>
                <div className="flex items-center gap-3 pt-1">
                  <Avatar>
                    <AvatarFallback>
                      {c.instructor?.slice(0, 2).toUpperCase() || "IN"}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-sm text-muted-foreground">
                    <span className="text-foreground font-medium">
                      {c.instructor}
                    </span>
                    <span className="mx-2">•</span>
                    <span>{(c.students ?? 0).toLocaleString()} students</span>
                  </div>
                </div>
              </CardContent>

              {/* Actions */}
              <CardFooter className="pt-0">
                <div className="flex gap-2">
                  <Button asChild size="sm" variant="outline">
                    <Link href={`/dashboard/courses/${c.id}`}>View</Link>
                  </Button>
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="rounded-full"
                  >
                    <Link href={`/dashboard/courses/${c.id}/edit`}>
                      <Pencil /> Edit
                    </Link>
                  </Button>
                  <Button
                    size="sm"
                    className="rounded-full bg-red-600 hover:bg-red-700 text-white dark:bg-red-600 dark:hover:bg-red-500 focus-visible:ring-red-500"
                    variant="destructive"
                    onClick={() => onDelete(c.id)}
                    disabled={deleting === c.id}
                  >
                    {deleting === c.id ? (
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
