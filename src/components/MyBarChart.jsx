import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A bar chart with a custom label";

export default function MyBarChart({ chartData, themeColor }) {
  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: `hsl(var(--chart-${themeColor}))`,
    },
    label: {
      color: "hsl(var(--background))",
    },
  };
  return (
    <ChartContainer className="h-[250px] w-full" config={chartConfig}>
      <BarChart
        accessibilityLayer
        data={chartData}
        layout="vertical"
        margin={{
          right: 20,
          left: 20,
        }}
      >
        <CartesianGrid horizontal={false} />
        <YAxis
          dataKey="key"
          type="category"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          hide
        />
        <XAxis dataKey="qiymat" type="number" />
        <ChartTooltip
          cursor={true}
          content={<ChartTooltipContent indicator="line" />}
        />
        <Bar
          dataKey="qiymat"
          layout="vertical"
          fill="var(--color-desktop)"
          radius={4}
        >
          <LabelList
            dataKey="key"
            position="insideLeft"
            offset={8}
            className="fill-[--color-label]"
            fontSize={12}
          />
          <LabelList
            dataKey="qiymat"
            position="right"
            offset={8}
            className="fill-foreground"
            fontSize={12}
          />
        </Bar>
      </BarChart>
    </ChartContainer>
  );
}
