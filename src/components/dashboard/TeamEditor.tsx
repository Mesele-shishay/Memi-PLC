"use client";

import React from "react";
import { FileDropzone } from "@/components/ui/file-dropzone";
import { TeamSectionProps } from "@/types";
import {
  Plus,
  Trash2,
  User,
  Mail,
  Linkedin,
  Briefcase,
  Award,
} from "lucide-react";

interface TeamEditorProps {
  team: TeamSectionProps;
  onSave: (partial: any) => Promise<void>;
  onTeamImage: (index: number, file: File) => Promise<void>;
  teamPreviews: Record<number, string | null>;
}

export function TeamEditor({
  team,
  onSave,
  onTeamImage,
  teamPreviews,
}: TeamEditorProps) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/80 backdrop-blur-xl shadow-2xl p-8">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-200/20">
            <User className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Team Management
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Manage your team members and their information
            </p>
          </div>
        </div>
        <button
          className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          onClick={async () =>
            onSave({
              team: {
                ...team,
                team: [
                  ...team.team,
                  {
                    id: String(Date.now()),
                    name: "New Member",
                    role: "Role",
                    description: "",
                    image: { src: "", alt: "", fallback: "👤" },
                    expertise: [],
                  },
                ],
              },
            })
          }
        >
          <Plus className="h-4 w-4" />
          Add Member
        </button>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {team.team.map((m, i) => (
          <div
            key={`team-${m.id}-${i}`}
            className="group/card relative rounded-2xl border border-gray-200/50 bg-white/60 backdrop-blur-sm p-6 space-y-4 hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 hover:-translate-y-1"
          >
            {/* Remove Button */}
            <button
              className="absolute top-4 right-4 p-2 rounded-full bg-red-50 text-red-500 hover:bg-red-100 transition-colors duration-200 opacity-0 group-hover/card:opacity-100"
              onClick={async () => {
                const next = team.team.filter((_, idx) => idx !== i);
                await onSave({ team: { ...team, team: next } });
              }}
            >
              <Trash2 className="h-4 w-4" />
            </button>

            {/* Avatar Section */}
            <div className="flex flex-col items-center">
              <FileDropzone
                label="Avatar"
                shape="circle"
                circleSizeClass="h-28 w-28"
                onFile={(file) => onTeamImage(i, file)}
                previewUrl={teamPreviews[i] ?? m.image?.src ?? null}
              />
            </div>

            {/* Name Input */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <User className="h-4 w-4 text-blue-500" />
                Full Name
              </label>
              <input
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                defaultValue={m.name}
                placeholder="Enter full name"
                onBlur={async (e) => {
                  const next = team.team.map((it, idx) =>
                    idx === i ? { ...it, name: e.target.value } : it
                  );
                  await onSave({ team: { ...team, team: next } });
                }}
              />
            </div>

            {/* Role Input */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <Briefcase className="h-4 w-4 text-green-500" />
                Role
              </label>
              <input
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                defaultValue={m.role}
                placeholder="Enter job role"
                onBlur={async (e) => {
                  const next = team.team.map((it, idx) =>
                    idx === i ? { ...it, role: e.target.value } : it
                  );
                  await onSave({ team: { ...team, team: next } });
                }}
              />
            </div>

            {/* Description Input */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Bio</label>
              <textarea
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 min-h-20 resize-none"
                defaultValue={m.description}
                placeholder="Tell us about this team member..."
                onBlur={async (e) => {
                  const next = team.team.map((it, idx) =>
                    idx === i ? { ...it, description: e.target.value } : it
                  );
                  await onSave({ team: { ...team, team: next } });
                }}
              />
            </div>

            {/* Expertise Input */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <Award className="h-4 w-4 text-amber-500" />
                Expertise
              </label>
              <input
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                placeholder="e.g., React, TypeScript, UI/UX"
                defaultValue={m.expertise.join(", ")}
                onBlur={async (e) => {
                  const next = team.team.map((it, idx) =>
                    idx === i
                      ? {
                          ...it,
                          expertise: e.target.value
                            .split(",")
                            .map((s) => s.trim())
                            .filter(Boolean),
                        }
                      : it
                  );
                  await onSave({ team: { ...team, team: next } });
                }}
              />
              <p className="text-xs text-gray-500">
                Separate multiple skills with commas
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-gray-700">
                Contact Information
              </label>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Linkedin className="h-4 w-4 text-blue-600" />
                  <input
                    className="flex-1 rounded-xl border border-gray-200 px-4 py-2.5 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 text-sm"
                    placeholder="LinkedIn URL"
                    defaultValue={m.linkedin}
                    onBlur={async (e) => {
                      const next = team.team.map((it, idx) =>
                        idx === i ? { ...it, linkedin: e.target.value } : it
                      );
                      await onSave({ team: { ...team, team: next } });
                    }}
                  />
                </div>

                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-green-600" />
                  <input
                    className="flex-1 rounded-xl border border-gray-200 px-4 py-2.5 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 text-sm"
                    placeholder="Email address"
                    defaultValue={m.email}
                    onBlur={async (e) => {
                      const next = team.team.map((it, idx) =>
                        idx === i ? { ...it, email: e.target.value } : it
                      );
                      await onSave({ team: { ...team, team: next } });
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {team.team.length === 0 && (
        <div className="text-center py-12">
          <div className="mx-auto w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mb-4">
            <User className="h-12 w-12 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No team members yet
          </h3>
          <p className="text-gray-500 mb-6">
            Get started by adding your first team member
          </p>
          <button
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            onClick={async () =>
              onSave({
                team: {
                  ...team,
                  team: [
                    {
                      id: String(Date.now()),
                      name: "New Member",
                      role: "Role",
                      description: "",
                      image: { src: "", alt: "", fallback: "👤" },
                      expertise: [],
                    },
                  ],
                },
              })
            }
          >
            <Plus className="h-4 w-4" />
            Add Your First Member
          </button>
        </div>
      )}
    </div>
  );
}
