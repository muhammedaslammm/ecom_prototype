"use client";

import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { TrendingUp } from "lucide-react";

const data = [
  { month: "Jan", desktop: 186, mobile: 80 },
  { month: "Feb", desktop: 305, mobile: 200 },
  { month: "Mar", desktop: 237, mobile: 120 },
  { month: "Apr", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "Jun", desktop: 214, mobile: 140 },
];

const LineGraph = () => {
  return (
    <div className="rounded-xl p-6 shadow-md text-black space-y-4">
      <div>
        <h2 className="text-xl font-semibold">Revenue</h2>
        <p className="text-sm text-muted-foreground">January - June 2025</p>
      </div>

      <ResponsiveContainer width="%" height={100}>
        <LineChart data={data} margin={{ left: 12, right: 12 }}>
          <CartesianGrid stroke="#2e2e2e" vertical={false} />
          <XAxis
            dataKey="month"
            stroke="#888"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1c1c1c",
              border: "1px solid #333",
              borderRadius: "0.5rem",
              color: "#fff",
              fontSize: "0.875rem",
            }}
          />
          <Line
            type="monotone"
            dataKey="desktop"
            stroke="#4f46e5"
            strokeWidth={2.5}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="mobile"
            stroke="#22d3ee"
            strokeWidth={2.5}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>

      <div className="text-sm">
        <div className="flex items-center gap-2 font-medium">
          Trending up by 5.2% this month
          <TrendingUp className="h-4 w-4" />
        </div>
        <p className="text-muted-foreground">
          Showing total visitors for the last 6 months
        </p>
      </div>
    </div>
  );
};

export default LineGraph;
