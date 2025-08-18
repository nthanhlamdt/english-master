import { LucideIcon } from "lucide-react";
import { StatsCard } from "./StatsCard";

interface StatsData {
  title: string;
  value: string | number;
  change: {
    value: string;
    isPositive: boolean;
  };
  icon: LucideIcon;
}

interface StatsGridProps {
  stats: StatsData[];
  columns?: 1 | 2 | 3 | 4;
}

export function StatsGrid({ stats, columns = 4 }: StatsGridProps) {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-2 2xl:grid-cols-4"
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-6 mb-8`}>
      {stats.map((stat, index) => (
        <StatsCard key={index} {...stat} />
      ))}
    </div>
  );
}