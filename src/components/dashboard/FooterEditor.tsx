"use client";

import React from "react";
import { FooterProps } from "@/types";

interface FooterEditorProps {
  footer: FooterProps;
  onSave: (partial: any) => Promise<void>;
}

export function FooterEditor({ footer, onSave }: FooterEditorProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/30 bg-gradient-to-br from-white/90 via-white/80 to-white/70 backdrop-blur-xl shadow-xl p-6">
      {/* Header Section */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h2 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Footer Section Editor
            </h2>
            <p className="text-gray-600 mt-1 text-sm">
              Manage your footer content, newsletter, and legal information
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <span className="px-3 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
              {footer.sections.length} Sections
            </span>
            <span className="px-3 py-1.5 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
              {footer.legal.length} Legal Links
            </span>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="mb-6">
        <div className="bg-gradient-to-br from-blue-50/50 to-indigo-50/50 rounded-2xl p-5 border border-blue-100/50">
          <div className="mb-4">
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              Newsletter Configuration
            </h3>
            <p className="text-sm text-gray-600">
              Set up your newsletter signup form
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wide mb-2">
                Newsletter Title
              </label>
              <input
                className="w-full rounded-xl border-2 border-gray-200 p-3 text-sm focus:outline-none focus:ring-3 focus:ring-blue-200 focus:border-blue-400 transition-all duration-200 bg-white/90 hover:bg-white"
                defaultValue={footer.newsletter.title}
                placeholder="Enter newsletter title..."
                onBlur={async (e) =>
                  onSave({
                    footer: {
                      ...footer,
                      newsletter: {
                        ...footer.newsletter,
                        title: e.target.value,
                      },
                    },
                  })
                }
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wide mb-2">
                Newsletter Subtitle
              </label>
              <input
                className="w-full rounded-xl border-2 border-gray-200 p-3 text-sm focus:outline-none focus:ring-3 focus:ring-blue-200 focus:border-blue-400 transition-all duration-200 bg-white/90 hover:bg-white"
                defaultValue={footer.newsletter.subtitle}
                placeholder="Enter newsletter subtitle..."
                onBlur={async (e) =>
                  onSave({
                    footer: {
                      ...footer,
                      newsletter: {
                        ...footer.newsletter,
                        subtitle: e.target.value,
                      },
                    },
                  })
                }
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wide mb-2">
                Input Placeholder
              </label>
              <input
                className="w-full rounded-xl border-2 border-gray-200 p-3 text-sm focus:outline-none focus:ring-3 focus:ring-blue-200 focus:border-blue-400 transition-all duration-200 bg-white/90 hover:bg-white"
                defaultValue={footer.newsletter.placeholder}
                placeholder="Enter input placeholder..."
                onBlur={async (e) =>
                  onSave({
                    footer: {
                      ...footer,
                      newsletter: {
                        ...footer.newsletter,
                        placeholder: e.target.value,
                      },
                    },
                  })
                }
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wide mb-2">
                Button Text
              </label>
              <input
                className="w-full rounded-xl border-2 border-gray-200 p-3 text-sm focus:outline-none focus:ring-3 focus:ring-blue-200 focus:border-blue-400 transition-all duration-200 bg-white/90 hover:bg-white"
                defaultValue={footer.newsletter.buttonText}
                placeholder="Enter button text..."
                onBlur={async (e) =>
                  onSave({
                    footer: {
                      ...footer,
                      newsletter: {
                        ...footer.newsletter,
                        buttonText: e.target.value,
                      },
                    },
                  })
                }
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Sections */}
      <div className="mb-6">
        <div className="bg-gradient-to-br from-purple-50/50 to-pink-50/50 rounded-2xl p-5 border border-purple-100/50">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-bold text-gray-800">
                Footer Sections
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Organize your footer navigation and links
              </p>
            </div>
            <button
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              onClick={async () =>
                onSave({
                  footer: {
                    ...footer,
                    sections: [
                      ...footer.sections,
                      { title: "New Section", links: [] },
                    ],
                  },
                })
              }
            >
              + Add Section
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {footer.sections.map((sec, si) => (
              <div
                key={`fsec-${si}`}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50 shadow-sm"
              >
                {/* Section Header */}
                <div className="mb-4">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-xs font-semibold text-purple-600 uppercase tracking-wide">
                      Section {si + 1}
                    </span>
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  </div>
                </div>

                {/* Section Title */}
                <div className="mb-4">
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2">
                    Section Title
                  </label>
                  <input
                    className="w-full rounded-lg border-2 border-gray-200 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-400 transition-all duration-200 bg-white"
                    defaultValue={sec.title}
                    placeholder="Enter section title..."
                    onBlur={async (e) => {
                      const next = footer.sections.map((it, idx) =>
                        idx === si ? { ...it, title: e.target.value } : it
                      );
                      await onSave({
                        footer: { ...footer, sections: next },
                      });
                    }}
                  />
                </div>

                {/* Links Management */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                      Links ({sec.links.length})
                    </span>
                    <button
                      className="px-3 py-1.5 rounded-lg bg-purple-50 text-purple-600 text-xs font-medium hover:bg-purple-100 hover:text-purple-700 transition-all duration-200 border border-purple-200 hover:border-purple-300"
                      onClick={async () => {
                        const next = footer.sections.map((it, idx) =>
                          idx === si
                            ? {
                                ...it,
                                links: [
                                  ...it.links,
                                  { label: "New Link", href: "/" },
                                ],
                              }
                            : it
                        );
                        await onSave({
                          footer: { ...footer, sections: next },
                        });
                      }}
                    >
                      + Add Link
                    </button>
                  </div>

                  <div className="space-y-3">
                    {sec.links.map((link, li) => (
                      <div
                        key={`fsec-${si}-link-${li}`}
                        className="bg-gray-50/50 rounded-lg p-3 border border-gray-100"
                      >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                          <div>
                            <label className="block text-xs font-medium text-gray-600 mb-1">
                              Label
                            </label>
                            <input
                              className="w-full rounded-lg border border-gray-200 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-400 transition-all duration-200 bg-white"
                              defaultValue={link.label}
                              placeholder="Link label..."
                              onBlur={async (e) => {
                                const next = footer.sections.map((it, idx) =>
                                  idx === si
                                    ? {
                                        ...it,
                                        links: it.links.map((l, lidx) =>
                                          lidx === li
                                            ? { ...l, label: e.target.value }
                                            : l
                                        ),
                                      }
                                    : it
                                );
                                await onSave({
                                  footer: { ...footer, sections: next },
                                });
                              }}
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-gray-600 mb-1">
                              URL
                            </label>
                            <input
                              className="w-full rounded-lg border border-gray-200 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-400 transition-all duration-200 bg-white"
                              defaultValue={link.href}
                              placeholder="/page-url"
                              onBlur={async (e) => {
                                const next = footer.sections.map((it, idx) =>
                                  idx === si
                                    ? {
                                        ...it,
                                        links: it.links.map((l, lidx) =>
                                          lidx === li
                                            ? { ...l, href: e.target.value }
                                            : l
                                        ),
                                      }
                                    : it
                                );
                                await onSave({
                                  footer: { ...footer, sections: next },
                                });
                              }}
                            />
                          </div>
                        </div>

                        <div className="flex justify-end">
                          <button
                            className="px-3 py-1.5 rounded-lg bg-red-50 text-red-600 text-xs font-medium hover:bg-red-100 hover:text-red-700 transition-all duration-200 border border-red-200 hover:border-red-300"
                            onClick={async () => {
                              const next = footer.sections.map((it, idx) =>
                                idx === si
                                  ? {
                                      ...it,
                                      links: it.links.filter(
                                        (_, lidx) => lidx !== li
                                      ),
                                    }
                                  : it
                              );
                              await onSave({
                                footer: { ...footer, sections: next },
                              });
                            }}
                          >
                            Remove Link
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section Actions */}
                <div className="pt-3 border-t border-gray-100">
                  <button
                    className="w-full px-3 py-2 rounded-lg bg-red-50 text-red-600 text-sm font-medium hover:bg-red-100 hover:text-red-700 transition-all duration-200 border border-red-200 hover:border-red-300"
                    onClick={async () => {
                      const next = footer.sections.filter(
                        (_, idx) => idx !== si
                      );
                      await onSave({
                        footer: { ...footer, sections: next },
                      });
                    }}
                  >
                    Remove Section
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Legal and Copyright */}
      <div className="mb-6">
        <div className="bg-gradient-to-br from-gray-50/50 to-slate-50/50 rounded-2xl p-5 border border-gray-100/50">
          <div className="mb-4">
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              Legal & Copyright
            </h3>
            <p className="text-sm text-gray-600">
              Manage legal links and copyright information
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wide mb-2">
                Legal Links
              </label>
              <p className="text-xs text-gray-500 mb-2">
                Format: label|href, comma separated
              </p>
              <input
                className="w-full rounded-xl border-2 border-gray-200 p-3 text-sm focus:outline-none focus:ring-3 focus:ring-gray-200 focus:border-gray-400 transition-all duration-200 bg-white/90 hover:bg-white"
                defaultValue={footer.legal
                  .map((l) => `${l.label}|${l.href}`)
                  .join(", ")}
                placeholder="Privacy Policy|/privacy, Terms|/terms..."
                onBlur={async (e) => {
                  const items = e.target.value
                    .split(",")
                    .map((s) => s.trim())
                    .filter(Boolean)
                    .map((pair) => {
                      const [label, href] = pair
                        .split("|")
                        .map((s) => s?.trim() ?? "");
                      return { label, href };
                    });
                  await onSave({ footer: { ...footer, legal: items } });
                }}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wide mb-2">
                Copyright Text
              </label>
              <input
                className="w-full rounded-xl border-2 border-gray-200 p-3 text-sm focus:outline-none focus:ring-3 focus:ring-gray-200 focus:border-gray-400 transition-all duration-200 bg-white/90 hover:bg-white"
                defaultValue={footer.copyright}
                placeholder="© 2024 Company Name..."
                onBlur={async (e) =>
                  onSave({
                    footer: { ...footer, copyright: e.target.value },
                  })
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
