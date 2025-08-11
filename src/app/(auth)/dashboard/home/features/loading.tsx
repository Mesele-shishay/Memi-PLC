import React from "react";
import { FeaturesEditorSkeleton } from "@/components/dashboard/SectionSkeletons";

export default function Loading() {
  return (
    <div className="py-6">
      <FeaturesEditorSkeleton />
    </div>
  );
}
