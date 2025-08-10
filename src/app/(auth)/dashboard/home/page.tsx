"use client";

import React from "react";
import { FileDropzone } from "@/components/ui/file-dropzone";
import { TrustedBrandsEditor } from "@/components/dashboard/TrustedBrandsEditor";
import { HeroEditor } from "@/components/dashboard/HeroEditor";
import { FeaturesEditor } from "@/components/dashboard/FeaturesEditor";
import { SupportEditor } from "@/components/dashboard/SupportEditor";
import { FooterEditor } from "@/components/dashboard/FooterEditor";
import { TeamEditor } from "@/components/dashboard/TeamEditor";
import { GetInvolvedEditor } from "@/components/dashboard/GetInvolvedEditor";
import { PricingEditor } from "@/components/dashboard/PricingEditor";
import { BenefitsTestimonialEditor } from "@/components/dashboard/BenefitsTestimonialEditor";
import { FeaturedCoursesEditor } from "@/components/dashboard/FeaturedCoursesEditor";
import { HomeEditorSkeleton } from "@/components/dashboard/HomeEditorSkeleton";
import {
  HomeContent,
  HeroSectionProps,
  FeaturesSectionProps,
  FeaturedCoursesSectionProps,
} from "@/types";

function useHomeContent() {
  const [data, setData] = React.useState<HomeContent | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [saving, setSaving] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const fetchData = React.useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/dashboard/home", { cache: "no-store" });
      const json = await res.json();
      setData(json);
    } catch (e: any) {
      setError(e?.message ?? "Failed to load");
    } finally {
      setLoading(false);
    }
  }, []);

  const save = React.useCallback(async (partial: Partial<HomeContent>) => {
    setSaving(true);
    setError(null);
    try {
      const res = await fetch("/api/dashboard/home", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(partial),
      });
      const json = await res.json();
      setData(json);
      return json as HomeContent;
    } catch (e: any) {
      setError(e?.message ?? "Failed to save");
      throw e;
    } finally {
      setSaving(false);
    }
  }, []);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, saving, error, refetch: fetchData, save };
}

export default function HomeEditorPage() {
  const { data, loading, saving, error, save } = useHomeContent();

  const [heroPreview, setHeroPreview] = React.useState<string | null>(null);
  const [featurePreviews, setFeaturePreviews] = React.useState<
    Record<number, string | null>
  >({});
  const [involvedPreviews, setInvolvedPreviews] = React.useState<
    Record<number, string | null>
  >({});
  const [teamPreviews, setTeamPreviews] = React.useState<
    Record<number, string | null>
  >({});

  // Wrapper function to match the expected onSave signature
  const onSave = React.useCallback(
    async (partial: any) => {
      await save(partial);
    },
    [save]
  );

  const onHeroImage = React.useCallback(
    async (file: File) => {
      const toDataUrl = (f: File) =>
        new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(String(reader.result));
          reader.onerror = reject;
          reader.readAsDataURL(f);
        });
      const dataUrl = await toDataUrl(file);
      setHeroPreview(dataUrl);
      await save({
        hero: {
          image: { src: dataUrl, alt: data?.hero.image.alt ?? "Hero" },
        } as Partial<HeroSectionProps> as any,
      });
    },
    [save, data?.hero.image.alt]
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

  return (
    <div className="flex flex-col gap-6 md:gap-8 py-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-bold">Home Editor</h1>
        {saving ? (
          <span className="text-sm text-primary-600">Saving...</span>
        ) : null}
      </div>

      {error ? (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-red-700">
          {error}
        </div>
      ) : null}

      {/* Skeletons while loading */}
      {loading || !data ? (
        <HomeEditorSkeleton />
      ) : (
        <div className="grid gap-8">
          <HeroEditor
            hero={data?.hero}
            onSave={onSave}
            onHeroImage={onHeroImage}
            heroPreview={heroPreview}
          />

          <FeaturesEditor
            features={data?.features}
            onSave={onSave}
            onFeatureImage={onFeatureImage}
            featurePreviews={featurePreviews}
          />

          <TrustedBrandsEditor
            trustedBrands={
              data?.trustedBrands ?? { title: "Trusted By", brands: [] }
            }
            onSave={onSave}
          />

          <SupportEditor support={data?.support} onSave={onSave} />

          <FooterEditor footer={data?.footer} onSave={onSave} />

          <TeamEditor
            team={data?.team}
            onSave={onSave}
            onTeamImage={onTeamImage}
            teamPreviews={teamPreviews}
          />

          <GetInvolvedEditor
            getInvolved={data?.getInvolved}
            onSave={onSave}
            onInvolvedImage={onInvolvedImage}
            involvedPreviews={involvedPreviews}
          />

          <PricingEditor pricing={data?.pricing} onSave={onSave} />

          <BenefitsTestimonialEditor
            benefits={data?.benefits}
            testimonial={data?.testimonial}
            onSave={onSave}
          />

          <FeaturedCoursesEditor
            featuredCourses={data.featuredCourses}
            onSave={save}
          />
        </div>
      )}
    </div>
  );
}
