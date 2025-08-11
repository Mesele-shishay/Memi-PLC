import React from "react";
import { PricingEditorSkeleton } from "@/components/dashboard/SectionSkeletons";

export default function Loading() {
  return (
    <div className="py-6">
      <PricingEditorSkeleton />
    </div>
  );
}
