import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { IQuickAction, ROUTES } from "@/constants/routes";
import { Zap } from "lucide-react";
import CardQuickAction from "./CardQuickAction";

export function QuickActions() {
  return (
    <Card className="xl:col-span-2 shadow-lg bg-gradient-to-br from-card to-card/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-2xl">
          <div className="p-2 bg-gradient-to-br from-primary to-secondary rounded-xl text-white">
            <Zap className="h-6 w-6" />
          </div>
          Hành động nhanh
        </CardTitle>
        <CardDescription className="text-base">Các tính năng thường dùng để tối ưu hóa việc học</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          {ROUTES.QUICK_ACTIONS.map((action: IQuickAction, index: number) => (
            <CardQuickAction key={index} {...action} />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
