import { LabelList, Pie, PieChart } from "recharts";

import { ChartContainer } from "@/components/ui/chart";

// const chartData = [
//   { browser: "chrome", visitors: 275 },
//   { browser: "safari", visitors: 200 },
//   { browser: "firefox", visitors: 187 },
//   { browser: "edge", visitors: 173 },
//   { browser: "other", visitors: 90 },
// ];

const chartConfig = {
  // visitors: {
  //   label: "Miqdori",
  // },
  // chrome: {
  //   label: "Chrome",
  //   color: "hsl(var(--chart-1))",
  // },
  // safari: {
  //   label: "Safari",
  //   color: "hsl(var(--chart-2))",
  // },
  // firefox: {
  //   label: "Firefox",
  //   color: "hsl(var(--chart-3))",
  // },
  // edge: {
  //   label: "Edge",
  //   color: "hsl(var(--chart-4))",
  // },
  // other: {
  //   label: "Other",
  //   color: "hsl(var(--chart-5))",
  // },
};

export default function MyPieChart({ chartData, values, themeColor }) {
  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square max-h-[280px] w-full"
    >
      <PieChart>
        <Pie
          fill={`hsl(var(--chart-${themeColor}))`}
          data={chartData}
          dataKey="qiymat"
          labelLine={true}
          label={({ payload, ...props }) => {
            return (
              <text
                cx={props.cx}
                cy={props.cy}
                x={props.x}
                y={props.y}
                textAnchor={props.textAnchor}
                dominantBaseline={props.dominantBaseline}
                fill="hsla(var(--foreground))"
              >
                {`${payload.key}`}
              </text>
            );
          }}
          nameKey="qiymat"
        >
          <LabelList
            dataKey="key"
            className="fill-background"
            stroke="none"
            fontSize={12}
            formatter={(value) => values[value]}
          />
        </Pie>
      </PieChart>
    </ChartContainer>
  );
}
