import { MetricCard } from "./metricsCard";

const metricsData = [
  {
    title: "All Sales",
    value: "245",
    change: "+21%",
    isPositive: true,
    color: "bg-blue-500",
  },
  {
    title: "Views",
    value: "4,567",
    change: "+6.54%",
    isPositive: true,
    color: "bg-orange-500",
  },
  {
    title: "Free Sales",
    value: "256",
    change: "+21%",
    isPositive: true,
    color: "bg-green-500",
  },
  {
    title: "Revenue",
    value: "$ 5,454",
    change: "+2.45%",
    isPositive: true,
    color: "bg-rose-500",
  },
  {
    title: "Avr. Interaction Time",
    value: "6 m 32 s",
    change: null,
    isPositive: null,
    color: "bg-indigo-500",
  },
];

export const MetricsGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
      {metricsData.map((metric, index) => (
        <MetricCard key={index} {...metric} />
      ))}
    </div>
  );
};
