"use client";

import React from "react";
import { useParams } from "next/navigation";
import { BlogForm } from "@/components/forms/BlogForm";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function EditBlogPage() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;
  const [initial, setInitial] = React.useState<any | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    let mounted = true;
    fetch(`/api/blog/${slug}`, { cache: "no-store" })
      .then((r) => r.json())
      .then((data) => mounted && setInitial(data))
      .finally(() => mounted && setLoading(false));
    return () => {
      mounted = false;
    };
  }, [slug]);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto py-4 md:py-6">
        <Card>
          <CardHeader>
            <Skeleton className="h-7 w-1/2" />
          </CardHeader>
          <CardContent className="space-y-3">
            <Skeleton className="h-4 w-2/3" />
            <Skeleton className="h-4 w-1/3" />
            <Skeleton className="h-4 w-1/4" />
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!initial) {
    return <div className="max-w-4xl mx-auto py-4 md:py-6">Not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto py-4 md:py-6">
      <BlogForm mode="edit" initial={initial} />
    </div>
  );
}
