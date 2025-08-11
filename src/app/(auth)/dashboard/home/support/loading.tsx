import React from "react";
import { SupportEditorSkeleton } from "@/components/dashboard/SectionSkeletons";

export default function Loading() {
  return (
    <div className="py-6">
      <SupportEditorSkeleton />
    </div>
  );
}
