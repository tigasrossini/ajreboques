import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { MoreVertical, ChevronRight, Download } from "lucide-react";

const data = [
  { month: "Jan", views: 29, visits: 24, lastMonth: 20 },
  { month: "Feb", views: 24, visits: 19, lastMonth: 15 },
  { month: "Mar", views: 27, visits: 22, lastMonth: 18 },
  { month: "Apr", views: 32, visits: 28, lastMonth: 22 },
  { month: "May", views: 35, visits: 31, lastMonth: 25 },
  { month: "Jun", views: 38, visits: 34, lastMonth: 28 },
  { month: "Jul", views: 33, visits: 29, lastMonth: 23 },
  { month: "Aug", views: 36, visits: 32, lastMonth: 26 },
  { month: "Sep", views: 31, visits: 27, lastMonth: 21 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-gray-200 rounded-md shadow-lg">
        <h4 className="text-xs font-bold text-gray-600 mb-2">Statistic</h4>
        {payload.map((entry: any, index: number) => (
          <div
            key={index}
            className="flex items-center justify-between gap-4 py-1"
          >
            <div className="flex items-center gap-2">
              <div
                className="w-1 h-1 rounded-full"
                style={{ backgroundColor: entry.color }}
              ></div>
              <span className="text-xs font-bold text-gray-600">
                {entry.dataKey === "views"
                  ? "Sales"
                  : entry.dataKey === "visits"
                    ? "Views"
                    : "Last Month"}
              </span>
            </div>
            <span className="text-xs font-bold text-gray-600">
              {entry.value}
            </span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export const SalesChart = () => {
  const timeRangeButtons = ["Today", "Yesterday", "Week", "Month", "Year"];

  return (
    <Card className="border-gray-200 shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 border-b border-gray-200">
        <h2 className="text-xs font-bold text-gray-600">Sales</h2>
        <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
          <MoreVertical className="h-4 w-4 text-gray-500" />
        </Button>
      </CardHeader>

      <CardContent className="p-5">
        <div className="flex flex-col gap-7">
          <div className="flex items-center gap-0 rounded border border-gray-200 shadow-sm w-fit">
            {timeRangeButtons.map((period, index) => (
              <Button
                key={period}
                variant="ghost"
                size="sm"
                className={`h-6 px-2 text-xs font-bold rounded-none border-r border-gray-200 last:border-r-0 ${
                  index === 0 ? "rounded-l" : ""
                } ${index === timeRangeButtons.length - 1 ? "rounded-r" : ""}`}
              >
                {period}
              </Button>
            ))}
          </div>

          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 10, fontWeight: 700, fill: "#6B7280" }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 10, fontWeight: 700, fill: "#6B7280" }}
                  tickFormatter={(value) => `${value}k`}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="views" fill="#EC4899" barSize={5} />
                <Bar dataKey="visits" fill="#3B82F6" barSize={5} />
                <Bar dataKey="lastMonth" fill="#22C55E" barSize={5} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-pink-600 border border-white shadow-sm"></div>
              <span className="text-xs font-bold text-gray-600">Views</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-600 border border-white shadow-sm"></div>
              <span className="text-xs font-bold text-gray-600">Visits</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-600 border border-white shadow-sm"></div>
              <span className="text-xs font-bold text-gray-600">
                Last Month
              </span>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="border-t border-gray-200 p-5">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-gray-600">View More</span>
            <ChevronRight className="h-5 w-5 text-gray-500" />
          </div>
          <div className="flex items-center justify-end gap-2">
            <Download className="h-5 w-5 text-blue-600" />
            <span className="text-xs font-bold text-blue-600">Download</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};
