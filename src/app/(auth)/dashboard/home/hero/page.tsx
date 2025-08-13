"use client";

import React from "react";
import { HeroEditor } from "@/components/dashboard/HeroEditor";
import { HeroEditorSkeleton } from "@/components/dashboard/SectionSkeletons";
import { HeroSectionProps } from "@/types";
import { useHomeContent } from "@/hooks/useHomeContent";

export default function HeroEditorPage() {
  const { data, loading, saving, error, save } = useHomeContent();
  const [heroPreview, setHeroPreview] = React.useState<string | null>(null);

  const onSave = React.useCallback(
    async (partial: any) => {
      await save(partial);
    },
    [save]
  );

  const onHeroImage = React.useCallback(async (file: File) => {
    // The HeroEditor now handles image uploads directly
    // This callback is kept for backward compatibility
    setHeroPreview(null);
  }, []);

  if (loading || !data) {
    return (
      <div className="py-6">
        <HeroEditorSkeleton />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 md:gap-8 py-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-bold">Hero Editor</h1>
        {saving ? (
          <span className="text-sm text-primary-600">Saving...</span>
        ) : null}
      </div>

      {error ? (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-red-700">
          {error}
        </div>
      ) : null}

      <HeroEditor
        hero={data?.hero}
        onSave={onSave}
        onHeroImage={onHeroImage}
        heroPreview={heroPreview}
      />
    </div>
  );
}
