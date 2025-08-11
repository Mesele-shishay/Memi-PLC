import React from "react";
import { TrustedBrandsEditorSkeleton } from "@/components/dashboard/SectionSkeletons";

export default function Loading() {
  return (
    <div className="py-6">
      <TrustedBrandsEditorSkeleton />
    </div>
  );
}
