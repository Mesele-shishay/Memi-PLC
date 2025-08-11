import React from "react";
import { FeaturedCoursesEditorSkeleton } from "@/components/dashboard/SectionSkeletons";

export default function Loading() {
  return (
    <div className="py-6">
      <FeaturedCoursesEditorSkeleton />
    </div>
  );
}
