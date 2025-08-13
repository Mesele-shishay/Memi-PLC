import React from "react";
import { HomeContent } from "@/types";
import { api } from "@/lib/apiClient";

export function useHomeContent() {
  const [data, setData] = React.useState<HomeContent | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [saving, setSaving] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const fetchData = React.useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const json = await api.internal<HomeContent>("/api/dashboard/home", {
        cache: "no-store",
      });
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
      const json = await api.internal<HomeContent>("/api/dashboard/home", {
        method: "PUT",
        body: JSON.stringify(partial),
      });
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
