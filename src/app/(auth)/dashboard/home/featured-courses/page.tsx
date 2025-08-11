"use client";

import React from "react";
import { FeaturedCoursesEditor } from "@/components/dashboard/FeaturedCoursesEditor";
import { FeaturedCoursesEditorSkeleton } from "@/components/dashboard/SectionSkeletons";
import { useHomeContent } from "@/hooks/useHomeContent";

export default function FeaturedCoursesEditorPage() {
  const { data, loading, saving, error, save } = useHomeContent();

  if (loading || !data) {
    return (
      <div className="py-6">
        <FeaturedCoursesEditorSkeleton />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 md:gap-8 py-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-bold">
          Featured Courses Editor
        </h1>
        {saving ? (
          <span className="text-sm text-primary-600">Saving...</span>
        ) : null}
      </div>

      {error ? (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-red-700">
          {error}
        </div>
      ) : null}

      <FeaturedCoursesEditor
        featuredCourses={data.featuredCourses}
        onSave={save}
      />
    </div>
  );
}
