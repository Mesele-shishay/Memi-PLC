import React from "react";
import { TeamEditorSkeleton } from "@/components/dashboard/SectionSkeletons";

export default function Loading() {
  return (
    <div className="py-6">
      <TeamEditorSkeleton />
    </div>
  );
}
