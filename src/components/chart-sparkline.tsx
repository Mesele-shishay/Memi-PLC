"use client";

import * as React from "react";
import { Area, AreaChart } from "recharts";

import { ChartConfig, ChartContainer } from "@/components/ui/chart";

const data = [
  { x: 1, y: 12 },
  { x: 2, y: 14 },
  { x: 3, y: 10 },
  { x: 4, y: 16 },
  { x: 5, y: 18 },
  { x: 6, y: 15 },
  { x: 7, y: 20 },
];

const chartConfig = {
  series: { label: "Trend", color: "var(--primary)" },
} satisfies ChartConfig;

export function ChartSparkline() {
  return (
    <ChartContainer config={chartConfig} className="h-16 w-full">
      <AreaChart data={data}>
        <defs>
          <linearGradient id="fillSeries" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor="var(--color-series)"
              stopOpacity="var(--chart-gradient-start)"
            />
            <stop
              offset="95%"
              stopColor="var(--color-series)"
              stopOpacity="var(--chart-gradient-end)"
            />
          </linearGradient>
        </defs>
        <Area
          dataKey="y"
          type="monotone"
          stroke="var(--color-series)"
          fill="url(#fillSeries)"
          strokeWidth={2}
        />
      </AreaChart>
    </ChartContainer>
  );
}

export default ChartSparkline;
