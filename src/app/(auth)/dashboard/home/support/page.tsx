"use client";

import React from "react";
import { SupportEditor } from "@/components/dashboard/SupportEditor";
import { SupportEditorSkeleton } from "@/components/dashboard/SectionSkeletons";
import { useHomeContent } from "@/hooks/useHomeContent";

export default function SupportEditorPage() {
  const { data, loading, saving, error, save } = useHomeContent();

  const onSave = React.useCallback(
    async (partial: any) => {
      await save(partial);
    },
    [save]
  );

  if (loading || !data) {
    return (
      <div className="py-6">
        <SupportEditorSkeleton />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 md:gap-8 py-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-bold">Support Editor</h1>
        {saving ? (
          <span className="text-sm text-primary-600">Saving...</span>
        ) : null}
      </div>

      {error ? (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-red-700">
          {error}
        </div>
      ) : null}

      <SupportEditor support={data?.support} onSave={onSave} />
    </div>
  );
}
