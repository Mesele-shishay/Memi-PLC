"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";

export default function CategoriesPage() {
  const [items, setItems] = React.useState<string[] | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [newName, setNewName] = React.useState("");
  const [submitting, setSubmitting] = React.useState(false);
  const [deleting, setDeleting] = React.useState<string | null>(null);

  React.useEffect(() => {
    let mounted = true;
    fetch("/api/categories", { cache: "no-store" })
      .then((r) => r.json())
      .then((data) => mounted && setItems(Array.isArray(data) ? data : []))
      .finally(() => mounted && setLoading(false));
    return () => {
      mounted = false;
    };
  }, []);

  async function addCategory() {
    const name = newName.trim();
    if (!name) return;
    setSubmitting(true);
    try {
      const res = await fetch("/api/categories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      });
      if (res.ok) {
        const { name: added } = await res.json();
        setItems((prev) =>
          prev
            ? Array.from(new Set([...prev, added])).sort((a, b) =>
                a.localeCompare(b)
              )
            : [added]
        );
        setNewName("");
      }
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="max-w-2xl mx-auto py-4 md:py-6 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Categories</h1>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Add new category</CardTitle>
        </CardHeader>
        <CardContent className="flex gap-2">
          <Input
            placeholder="e.g. Technology"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addCategory()}
          />
          <Button onClick={addCategory} disabled={submitting}>
            {submitting ? "Adding..." : "Add"}
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>All categories</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="space-y-2">
              {Array.from({ length: 6 }).map((_, i) => (
                <Skeleton key={i} className="h-9 w-full" />
              ))}
            </div>
          ) : (
            <div className="space-y-2">
              {items && items.length ? (
                items.map((c) => (
                  <div
                    key={c}
                    className="flex items-center justify-between rounded-lg border p-2"
                  >
                    <div>{c}</div>
                    <Button
                      variant="outline"
                      size="sm"
                      disabled
                      onClick={() => setDeleting(c)}
                    >
                      {deleting === c ? "Deleting..." : "Delete"}
                    </Button>
                  </div>
                ))
              ) : (
                <div className="text-sm text-muted-foreground">
                  No categories yet.
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
