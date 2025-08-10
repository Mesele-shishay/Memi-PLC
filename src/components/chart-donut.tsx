"use client";

import * as React from "react";
import { Pie, PieChart, Cell } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const data = [
  { name: "Popular", value: 8 },
  { name: "New", value: 5 },
  { name: "Other", value: 19 },
];

const chartConfig = {
  popular: { label: "Popular", color: "var(--primary)" },
  new: { label: "New", color: "var(--primary)" },
  other: { label: "Other", color: "var(--primary)" },
} satisfies ChartConfig;

const OPACITIES = [1, 0.7, 0.4];

export function ChartDonut() {
  return (
    <ChartContainer
      config={chartConfig}
      className="aspect-square h-[260px] w-full"
    >
      <PieChart>
        <ChartTooltip content={<ChartTooltipContent />} />
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          outerRadius={90}
          innerRadius={60}
          stroke="transparent"
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill="var(--primary)"
              fillOpacity={OPACITIES[index % OPACITIES.length]}
            />
          ))}
        </Pie>
      </PieChart>
    </ChartContainer>
  );
}

export default ChartDonut;
