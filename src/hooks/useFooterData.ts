import React from "react";
import { FooterProps } from "@/types";
import { api } from "@/lib/apiClient";

export function useFooterData() {
  const [data, setData] = React.useState<FooterProps | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  const fetchData = React.useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const homeContent = await api.get<{ footer: FooterProps }>(
        "/api/dashboard/home",
        {
          cache: "no-store",
        }
      );
      setData(homeContent.footer);
    } catch (e: any) {
      setError(e?.message ?? "Failed to load footer data");
    } finally {
      setLoading(false);
    }
  }, []);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
}
