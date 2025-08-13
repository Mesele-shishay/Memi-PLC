"use client";

import React from "react";
import { FeaturesEditor } from "@/components/dashboard/FeaturesEditor";
import { FeaturesEditorSkeleton } from "@/components/dashboard/SectionSkeletons";
import { useHomeContent } from "@/hooks/useHomeContent";

export default function FeaturesEditorPage() {
  const { data, loading, saving, error, save } = useHomeContent();
  const [featurePreviews, setFeaturePreviews] = React.useState<
    Record<number, string | null>
  >({});

  const onSave = React.useCallback(
    async (partial: any) => {
      await save(partial);
    },
    [save]
  );

  const onFeatureImage = React.useCallback(
    async (index: number, file: File) => {
      // The FeaturesEditor now handles image uploads directly
      // This callback is kept for backward compatibility
      setFeaturePreviews((prev) => ({ ...prev, [index]: null }));
    },
    []
  );

  if (loading || !data) {
    return (
      <div className="py-6">
        <FeaturesEditorSkeleton />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 md:gap-8 py-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-bold">Features Editor</h1>
        {saving ? (
          <span className="text-sm text-primary-600">Saving...</span>
        ) : null}
      </div>

      {error ? (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-red-700">
          {error}
        </div>
      ) : null}

      <FeaturesEditor
        features={data?.features}
        onSave={onSave}
        onFeatureImage={onFeatureImage}
        featurePreviews={featurePreviews}
      />
    </div>
  );
}
