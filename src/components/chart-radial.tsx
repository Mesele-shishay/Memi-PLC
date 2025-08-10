"use client";

import * as React from "react";
import { RadialBar, RadialBarChart, PolarAngleAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const data = [
  { name: "Completion", value: 72, fill: "var(--color-completion)" },
];

const chartConfig = {
  completion: { label: "Completion", color: "var(--primary)" },
} satisfies ChartConfig;

export function ChartRadial() {
  return (
    <ChartContainer
      config={chartConfig}
      className="aspect-square h-[260px] w-full"
    >
      <RadialBarChart
        data={data}
        innerRadius={60}
        outerRadius={110}
        startAngle={90}
        endAngle={-270}
      >
        <defs>
          <linearGradient id="fillCompletion" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="0%"
              stopColor="var(--color-completion)"
              stopOpacity="var(--chart-gradient-start)"
            />
            <stop
              offset="100%"
              stopColor="var(--color-completion)"
              stopOpacity="var(--chart-gradient-end)"
            />
          </linearGradient>
        </defs>
        <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
        <RadialBar
          background
          dataKey="value"
          cornerRadius={8}
          fill="url(#fillCompletion)"
        />
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
      </RadialBarChart>
    </ChartContainer>
  );
}

export default ChartRadial;
