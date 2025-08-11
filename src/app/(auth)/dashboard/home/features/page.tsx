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
      const toDataUrl = (f: File) =>
        new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(String(reader.result));
          reader.onerror = reject;
          reader.readAsDataURL(f);
        });
      const dataUrl = await toDataUrl(file);
      setFeaturePreviews((prev) => ({ ...prev, [index]: dataUrl }));
      const next = {
        ...data?.features,
        title: data?.features?.title ?? "Features",
        features: (data?.features.features ?? []).map((f, i) =>
          i === index
            ? {
                ...f,
                image: {
                  ...(f.image ?? { alt: f.title, fallback: "✨" }),
                  src: dataUrl,
                },
              }
            : f
        ),
      };
      await save({ features: next });
    },
    [save, data?.features.features]
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
