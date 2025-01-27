
import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A multiple bar chart";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 105, mobile: 200 },
  { month: "March", desktop: 137, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 109, mobile: 130 },
  { month: "June", desktop: 114, mobile: 140 },
];

const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "hsl(var(--chart-1))",
    },
    mobile: {
      label: "Mobile",
      color: "hsl(var(--chart-2))",
    },
  };

export function HeroChart() {
  return (
    <Card className="p-0 border-none shadow-lg bg-white/70 absolute bottom-5 -left-5 animate-upAndDown  rounded-xl">
      <CardHeader className="px-4 pt-4 pb-0">
        <CardTitle>Bar Chart - Multiple</CardTitle>
        <CardDescription className="text-xs">January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="p-3">
        <ChartContainer config={chartConfig} className="h-16 w-60">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              className="rounded-md"
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}