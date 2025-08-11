import React from "react";
import { FooterEditorSkeleton } from "@/components/dashboard/SectionSkeletons";

export default function Loading() {
  return (
    <div className="py-6">
      <FooterEditorSkeleton />
    </div>
  );
}
