"use client";

import React from "react";
import { GetInvolvedEditor } from "@/components/dashboard/GetInvolvedEditor";
import { GetInvolvedEditorSkeleton } from "@/components/dashboard/SectionSkeletons";
import { useHomeContent } from "@/hooks/useHomeContent";

export default function GetInvolvedEditorPage() {
  const { data, loading, saving, error, save } = useHomeContent();
  const [involvedPreviews, setInvolvedPreviews] = React.useState<
    Record<number, string | null>
  >({});

  const onSave = React.useCallback(
    async (partial: any) => {
      await save(partial);
    },
    [save]
  );

  const onInvolvedImage = React.useCallback(
    async (index: number, file: File) => {
      const toDataUrl = (f: File) =>
        new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(String(reader.result));
          reader.onerror = reject;
          reader.readAsDataURL(f);
        });
      const dataUrl = await toDataUrl(file);
      setInvolvedPreviews((prev) => ({ ...prev, [index]: dataUrl }));
      const next = {
        involvementOptions: (data?.getInvolved.involvementOptions ?? []).map(
          (opt, i) =>
            i === index
              ? {
                  ...opt,
                  image: {
                    ...(opt.image ?? {
                      alt: opt.title,
                      fallback: opt.icon || "✨",
                    }),
                    src: dataUrl,
                  },
                }
              : opt
        ),
      };
      await save({ getInvolved: { ...data!.getInvolved, ...next } });
    },
    [save, data]
  );

  if (loading || !data) {
    return (
      <div className="py-6">
        <GetInvolvedEditorSkeleton />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 md:gap-8 py-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-bold">Get Involved Editor</h1>
        {saving ? (
          <span className="text-sm text-primary-600">Saving...</span>
        ) : null}
      </div>

      {error ? (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-red-700">
          {error}
        </div>
      ) : null}

      <GetInvolvedEditor
        getInvolved={data?.getInvolved}
        onSave={onSave}
        onInvolvedImage={onInvolvedImage}
        involvedPreviews={involvedPreviews}
      />
    </div>
  );
}
