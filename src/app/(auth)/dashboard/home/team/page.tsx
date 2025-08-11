"use client";

import React from "react";
import { TeamEditor } from "@/components/dashboard/TeamEditor";
import { TeamEditorSkeleton } from "@/components/dashboard/SectionSkeletons";
import { useHomeContent } from "@/hooks/useHomeContent";

export default function TeamEditorPage() {
  const { data, loading, saving, error, save } = useHomeContent();
  const [teamPreviews, setTeamPreviews] = React.useState<
    Record<number, string | null>
  >({});

  const onSave = React.useCallback(
    async (partial: any) => {
      await save(partial);
    },
    [save]
  );

  const onTeamImage = React.useCallback(
    async (index: number, file: File) => {
      const toDataUrl = (f: File) =>
        new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(String(reader.result));
          reader.onerror = reject;
          reader.readAsDataURL(f);
        });
      const dataUrl = await toDataUrl(file);
      setTeamPreviews((prev) => ({ ...prev, [index]: dataUrl }));
      const next = {
        team: (data?.team.team ?? []).map((member, i) =>
          i === index
            ? {
                ...member,
                image: {
                  ...(member.image ?? { alt: member.name, fallback: "👤" }),
                  src: dataUrl,
                },
              }
            : member
        ),
      };
      await save({ team: { ...data!.team, ...next } });
    },
    [save, data]
  );

  if (loading || !data) {
    return (
      <div className="py-6">
        <TeamEditorSkeleton />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 md:gap-8 py-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-bold">Team Editor</h1>
        {saving ? (
          <span className="text-sm text-primary-600">Saving...</span>
        ) : null}
      </div>

      {error ? (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-red-700">
          {error}
        </div>
      ) : null}

      <TeamEditor
        team={data?.team}
        onSave={onSave}
        onTeamImage={onTeamImage}
        teamPreviews={teamPreviews}
      />
    </div>
  );
}
