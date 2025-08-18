import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Calendar } from "lucide-react";
import CardRecentActiviti from "./CardRecentActiviti";
import { IRecentActivity, ROUTES } from "@/constants/routes";
import { Button } from "@/components/ui/button";

export function RecentActivities() {
  return (
    <Card className="shadow-lg bg-gradient-to-br from-card to-card/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-xl">
          <div className="p-2 bg-gradient-to-br from-accent to-emerald-500 rounded-xl text-white">
            <Calendar className="h-5 w-5" />
          </div>
          Hoạt động gần đây
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {ROUTES.RECENT_ACTIVITIES.map((activity: IRecentActivity, index: number) => (
          <CardRecentActiviti key={index} {...activity} />
        ))}

        <Button variant="ghost" className="w-full mt-4 hover:bg-primary/10 text-primary font-medium">
          Xem tất cả
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  )
}
