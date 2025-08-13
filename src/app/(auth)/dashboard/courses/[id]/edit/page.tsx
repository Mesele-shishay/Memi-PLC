"use client";

import React from "react";
import { useParams } from "next/navigation";
import { CourseForm } from "@/components/forms/CourseForm";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { api } from "@/lib/apiClient";

export default function EditCoursePage() {
  const params = useParams<{ id: string }>();
  const id = params.id;
  const [initial, setInitial] = React.useState<any | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    let mounted = true;
    api.internal<any>(`/api/courses/${id}`)
      .then((data) => mounted && setInitial(data))
      .finally(() => mounted && setLoading(false));
    return () => {
      mounted = false;
    };
  }, [id]);

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
      <CourseForm mode="edit" initial={initial} />
    </div>
  );
}
