"use client";

import * as React from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const data = [
  { label: "Jan", courses: 22, blog: 12 },
  { label: "Feb", courses: 28, blog: 16 },
  { label: "Mar", courses: 35, blog: 18 },
  { label: "Apr", courses: 30, blog: 22 },
  { label: "May", courses: 42, blog: 25 },
  { label: "Jun", courses: 38, blog: 21 },
];

const chartConfig = {
  courses: {
    label: "Courses",
    color: "var(--primary)",
  },
  blog: {
    label: "Blog Posts",
    color: "var(--primary)",
  },
} satisfies ChartConfig;

export function ChartBar() {
  return (
    <ChartContainer
      config={chartConfig}
      className="aspect-auto h-[260px] w-full"
    >
      <BarChart data={data}>
        <defs>
          <linearGradient id="fillCourses" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="0%"
              stopColor="var(--color-courses)"
              stopOpacity="var(--chart-gradient-start)"
            />
            <stop
              offset="100%"
              stopColor="var(--color-courses)"
              stopOpacity="var(--chart-gradient-end)"
            />
          </linearGradient>
          <linearGradient id="fillBlog" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="0%"
              stopColor="var(--color-blog)"
              stopOpacity="var(--chart-gradient-start)"
            />
            <stop
              offset="100%"
              stopColor="var(--color-blog)"
              stopOpacity="var(--chart-gradient-end)"
            />
          </linearGradient>
        </defs>
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <XAxis
          dataKey="label"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
        />
        <YAxis width={28} axisLine={false} tickLine={false} tickMargin={8} />
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar
          dataKey="courses"
          radius={[4, 4, 0, 0]}
          fill="url(#fillCourses)"
          stroke="var(--color-courses)"
        />
        <Bar
          dataKey="blog"
          radius={[4, 4, 0, 0]}
          fill="url(#fillBlog)"
          stroke="var(--color-blog)"
        />
      </BarChart>
    </ChartContainer>
  );
}

export default ChartBar;
