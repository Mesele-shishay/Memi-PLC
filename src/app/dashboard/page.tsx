"use client";
import React from "react";
import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { DataTable } from "@/components/data-table";
import { SectionCards } from "@/components/section-cards";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

import { getAllCourses, getAllBlogPosts } from "@/lib/mockApi";
import { ChartBar } from "@/components/chart-bar";
import { ChartDonut } from "@/components/chart-donut";
import { ChartRadial } from "@/components/chart-radial";
import { ChartSparkline } from "@/components/chart-sparkline";

export default function Page() {
  const courses = getAllCourses();
  const blogPosts = getAllBlogPosts();

  const totalCourses = courses.length;
  const totalBlogPosts = blogPosts.length;
  const popularCourses = courses.filter((c) => c.isPopular).length;
  const newCourses = courses.filter((c) => (c as any).isNew).length;

  const tableData = courses.map((course, index) => ({
    id: index + 1,
    header: course.title,
    type: course.category ?? "Course",
    status: (course as any).isNew ? "In Process" : "Done",
    target: String(course.students ?? 0),
    limit:
      typeof course.duration === "string"
        ? course.duration
        : String(course.duration ?? "-"),
    reviewer: course.instructor ?? "—",
  }));
  return (
    <div className="flex flex-col gap-4 md:gap-6 py-4 md:py-6">
      <SectionCards
        totalCourses={totalCourses}
        totalBlogPosts={totalBlogPosts}
        popularCourses={popularCourses}
        newCourses={newCourses}
      />

      {/* Charts grid */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 md:gap-6">
        <div className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/70 backdrop-blur-xl shadow-2xl p-4 md:p-6 xl:col-span-8">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 to-indigo-50/60" />
          <div className="relative">
            <ChartAreaInteractive />
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/70 backdrop-blur-xl shadow-2xl p-4 md:p-6 xl:col-span-4">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 to-indigo-50/30" />
          <div className="relative">
            <ChartDonut />
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/70 backdrop-blur-xl shadow-2xl p-4 md:p-6 xl:col-span-4">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 to-indigo-50/30" />
          <div className="relative">
            <ChartRadial />
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/70 backdrop-blur-xl shadow-2xl p-4 md:p-6 xl:col-span-8">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 to-indigo-50/30" />
          <div className="relative">
            <ChartBar />
          </div>
        </div>
        <div className="xl:col-span-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          <div className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/70 backdrop-blur-xl shadow-2xl p-3">
            <div className="relative">
              <div className="mb-2 text-sm text-black/70">Daily Signups</div>
              <ChartSparkline />
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/70 backdrop-blur-xl shadow-2xl p-3">
            <div className="relative">
              <div className="mb-2 text-sm text-black/70">Active Users</div>
              <ChartSparkline />
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/70 backdrop-blur-xl shadow-2xl p-3">
            <div className="relative">
              <div className="mb-2 text-sm text-black/70">Revenue</div>
              <ChartSparkline />
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/70 backdrop-blur-xl shadow-2xl p-3">
            <div className="relative">
              <div className="mb-2 text-sm text-black/70">Conversion</div>
              <ChartSparkline />
            </div>
          </div>
        </div>
      </div>

      {/* Data table */}
      <div className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/80 backdrop-blur-xl shadow-2xl p-2 sm:p-4">
        <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-white/40" />
        <div className="relative">
          <DataTable data={tableData} />
        </div>
      </div>
    </div>
  );
}
