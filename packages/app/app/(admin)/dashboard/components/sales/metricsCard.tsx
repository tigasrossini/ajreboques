import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  change?: string | null;
  isPositive?: boolean | null;
  color: string;
}

export const MetricCard = ({
  title,
  value,
  change,
  isPositive,
  color,
}: MetricCardProps) => {
  return (
    <Card className="border-gray-200 shadow-sm">
      <CardContent className="p-5">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div
              className={`w-1 h-1 rounded-full border border-gray-300 ${color}`}
            ></div>
            <h3 className="text-xs font-bold text-gray-600">{title}</h3>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xl font-semibold text-gray-900">{value}</span>

            {change && isPositive !== null && (
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-600" />
                <span className="text-xs font-bold text-green-600">
                  {change}
                </span>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
