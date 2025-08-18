import { IStatsOverview } from "@/types";
import CardStatsOverview from "./CardStatsOverview";

export default function StatsOverview({ statsOverview }: { statsOverview: IStatsOverview[] }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
      {statsOverview.map((stat: IStatsOverview) => (
        <CardStatsOverview key={stat.title} {...stat} />
      ))}
    </div>
  )
}
