import React from "react";
import { HeroEditorSkeleton } from "@/components/dashboard/SectionSkeletons";

export default function Loading() {
  return (
    <div className="py-6">
      <HeroEditorSkeleton />
    </div>
  );
}
