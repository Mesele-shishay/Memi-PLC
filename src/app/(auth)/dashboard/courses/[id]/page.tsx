"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
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
import { Loader2, Pencil, Trash2 } from "lucide-react";
import { api } from "@/lib/apiClient";

export default function CourseDetailPage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const id = params.id;
  const [item, setItem] = React.useState<any | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [deleting, setDeleting] = React.useState(false);

  React.useEffect(() => {
    let mounted = true;
    api
      .internal<any>(`/api/courses/${id}`)
      .then((data) => {
        if (mounted) setItem(data);
      })
      .catch(() => {})
      .finally(() => mounted && setLoading(false));
    return () => {
      mounted = false;
    };
  }, [id]);

  async function onDelete() {
    if (!confirm("Delete this course?")) return;
    setDeleting(true);
    try {
      await api.internal(`/api/courses/${id}`, { method: "DELETE" });
      router.push("/dashboard/courses");
    } finally {
      setDeleting(false);
    }
  }

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto py-4 md:py-6">
        <Card className="overflow-hidden">
          <div className="relative -mt-6 -mx-6 aspect-[16/8] overflow-hidden">
            <Skeleton className="h-full w-full rounded-none" />
          </div>
          <CardContent className="space-y-4 pt-4">
            <div className="flex items-center gap-2">
              <Skeleton className="h-5 w-20 rounded-full" />
              <Skeleton className="h-5 w-16 rounded-full" />
            </div>
            <Skeleton className="h-7 w-3/4" />
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
            </div>
          </CardFooter>
        </Card>
      </div>
    );
  }

  if (!item) {
    return <div className="max-w-4xl mx-auto py-4 md:py-6">Not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto py-4 md:py-6 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Course</h1>
        <div className="flex gap-2">
          <Button asChild variant="outline" className="rounded-full">
            <Link href={`/dashboard/courses/${id}/edit`}>
              <Pencil /> Edit
            </Link>
          </Button>
          <Button
            variant="destructive"
            className="rounded-full bg-red-600 hover:bg-red-700 text-white dark:bg-red-600 dark:hover:bg-red-500 focus-visible:ring-red-500"
            onClick={onDelete}
            disabled={deleting}
          >
            {deleting ? (
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
      </div>
      <Card className="overflow-hidden">
        <div className="relative -mt-6 -mx-6 aspect-[16/8] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent" />
          <div className="absolute left-4 top-3 flex gap-2">
            <Badge variant="outline" className="bg-background/70 backdrop-blur">
              {item.category}
            </Badge>
            {item.level ? (
              <Badge
                variant="secondary"
                className="bg-background/70 backdrop-blur"
              >
                {item.level}
              </Badge>
            ) : null}
          </div>
        </div>
        <CardHeader className="pb-0">
          <CardTitle className="text-2xl leading-tight">{item.title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 pt-4">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarFallback>
                {item.instructor?.slice(0, 2).toUpperCase() || "IN"}
              </AvatarFallback>
            </Avatar>
            <div className="text-sm text-muted-foreground">
              <span className="text-foreground font-medium">
                {item.instructor}
              </span>
              <span className="mx-2">•</span>
              <span>{(item.students ?? 0).toLocaleString()} students</span>
            </div>
          </div>
          <div className="text-sm text-muted-foreground leading-6 space-y-3">
            <p>{item.description}</p>
          </div>
          <div className="text-sm text-muted-foreground flex flex-wrap gap-3">
            {item.duration ? <span>Duration: {item.duration}</span> : null}
            {item.price ? <span>Price: {item.price}</span> : null}
          </div>
          {Array.isArray(item.features) && item.features.length > 0 && (
            <div>
              <div className="text-sm font-medium">Features</div>
              <ul className="list-disc list-inside text-sm mt-1">
                {item.features.map((f: string, i: number) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
