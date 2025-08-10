"use client";

import React from "react";
import { PricingSectionProps } from "@/types";

interface PricingEditorProps {
  pricing: PricingSectionProps;
  onSave: (partial: any) => Promise<void>;
}

export function PricingEditor({ pricing, onSave }: PricingEditorProps) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/80 backdrop-blur-xl shadow-2xl p-6">
      <h2 className="text-xl font-semibold mb-4">Pricing</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            className="w-full rounded-lg border p-2"
            defaultValue={pricing.title}
            onBlur={async (e) =>
              onSave({
                pricing: { ...pricing, title: e.target.value },
              })
            }
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Subtitle</label>
          <input
            className="w-full rounded-lg border p-2"
            defaultValue={pricing.subtitle}
            onBlur={async (e) =>
              onSave({
                pricing: { ...pricing, subtitle: e.target.value },
              })
            }
          />
        </div>
      </div>
      <div className="mt-4">
        <label className="block text-sm font-medium mb-1">
          Billing Options (comma separated)
        </label>
        <input
          className="w-full rounded-lg border p-2"
          defaultValue={pricing.billingOptions.join(", ")}
          onBlur={async (e) =>
            onSave({
              pricing: {
                ...pricing,
                billingOptions: e.target.value
                  .split(",")
                  .map((s) => s.trim())
                  .filter(Boolean),
              },
            })
          }
        />
      </div>
      <div className="mt-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold">Plans</h3>
          <button
            className="text-sm px-3 py-1.5 rounded-lg border bg-white hover:bg-gray-50"
            onClick={async () =>
              onSave({
                pricing: {
                  ...pricing,
                  plans: [
                    ...pricing.plans,
                    {
                      name: "New",
                      price: "$0",
                      period: "/mo",
                      features: [],
                    },
                  ],
                },
              })
            }
          >
            Add Plan
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {pricing.plans.map((p, i) => (
            <div
              key={`plan-${i}`}
              className="rounded-xl border p-3 bg-white space-y-2"
            >
              <input
                className="w-full rounded-lg border p-2"
                defaultValue={p.name}
                onBlur={async (e) => {
                  const next = pricing.plans.map((it, idx) =>
                    idx === i ? { ...it, name: e.target.value } : it
                  );
                  await onSave({
                    pricing: { ...pricing, plans: next },
                  });
                }}
              />
              <div className="grid grid-cols-2 gap-2">
                <input
                  className="rounded-lg border p-2"
                  defaultValue={p.price}
                  onBlur={async (e) => {
                    const next = pricing.plans.map((it, idx) =>
                      idx === i ? { ...it, price: e.target.value } : it
                    );
                    await onSave({
                      pricing: { ...pricing, plans: next },
                    });
                  }}
                />
                <input
                  className="rounded-lg border p-2"
                  defaultValue={p.period}
                  onBlur={async (e) => {
                    const next = pricing.plans.map((it, idx) =>
                      idx === i ? { ...it, period: e.target.value } : it
                    );
                    await onSave({
                      pricing: { ...pricing, plans: next },
                    });
                  }}
                />
              </div>
              <input
                className="w-full rounded-lg border p-2"
                placeholder="Highlight"
                defaultValue={p.highlight}
                onBlur={async (e) => {
                  const next = pricing.plans.map((it, idx) =>
                    idx === i ? { ...it, highlight: e.target.value } : it
                  );
                  await onSave({
                    pricing: { ...pricing, plans: next },
                  });
                }}
              />
              <label className="inline-flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  defaultChecked={p.isPopular}
                  onChange={async (e) => {
                    const next = pricing.plans.map((it, idx) =>
                      idx === i ? { ...it, isPopular: e.target.checked } : it
                    );
                    await onSave({
                      pricing: { ...pricing, plans: next },
                    });
                  }}
                />
                Popular
              </label>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">Features</span>
                  <button
                    className="text-xs px-2 py-1 rounded border bg-white hover:bg-gray-50"
                    onClick={async () => {
                      const next = pricing.plans.map((it, idx) =>
                        idx === i
                          ? {
                              ...it,
                              features: [...it.features, "New feature"],
                            }
                          : it
                      );
                      await onSave({
                        pricing: { ...pricing, plans: next },
                      });
                    }}
                  >
                    Add
                  </button>
                </div>
                <div className="space-y-1">
                  {p.features.map((feat, fi) => (
                    <div
                      key={`plan-${i}-feat-${fi}`}
                      className="grid grid-cols-4 gap-2 items-center"
                    >
                      <input
                        className="col-span-3 rounded-lg border p-2"
                        defaultValue={feat}
                        onBlur={async (e) => {
                          const next = pricing.plans.map((it, idx) =>
                            idx === i
                              ? {
                                  ...it,
                                  features: it.features.map((fv, fidx) =>
                                    fidx === fi ? e.target.value : fv
                                  ),
                                }
                              : it
                          );
                          await onSave({
                            pricing: { ...pricing, plans: next },
                          });
                        }}
                      />
                      <button
                        className="text-xs px-2 py-1 rounded border bg-white hover:bg-gray-50"
                        onClick={async () => {
                          const next = pricing.plans.map((it, idx) =>
                            idx === i
                              ? {
                                  ...it,
                                  features: it.features.filter(
                                    (_, fidx) => fidx !== fi
                                  ),
                                }
                              : it
                          );
                          await onSave({
                            pricing: { ...pricing, plans: next },
                          });
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              <button
                className="text-sm px-3 py-1.5 rounded-lg border bg-white hover:bg-gray-50"
                onClick={async () => {
                  const next = pricing.plans.filter((_, idx) => idx !== i);
                  await onSave({
                    pricing: { ...pricing, plans: next },
                  });
                }}
              >
                Remove Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
