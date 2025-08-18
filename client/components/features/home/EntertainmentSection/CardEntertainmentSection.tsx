import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, LucideIcon } from "lucide-react"

interface props {
  Icon: LucideIcon
  title: string
  description: string
  color: string
}

const colorMap: Record<string, string> = {
  primary: "from-primary/30 to-primary/10",
  secondary: "from-secondary/30 to-secondary/10",
  warning: "from-warning/30 to-warning/10",
}

export default function CardEntertainmentSection({ Icon, title, description, color }: props) {
  return (
    <Card
      className={`relative bg-gradient-to-r gap-0 hover:scale-105 ${colorMap[color]} backdrop-blur-xl shadow-2xl rounded-lg lg:rounded-xl overflow-hidden group-hover:transform group-hover:scale-105 transition-all duration-500 border border-${color} flex flex-col justify-between`}
    >
      <CardHeader className="pb-2 lg:pb-4">
        <div className="flex items-center justify-between mb-2 lg:mb-2">
          <div
            className={`h-12 w-12 lg:h-16 lg:w-16 bg-${color} rounded-xl lg:rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-lg`}
          >
            <Icon className="h-6 w-6 lg:h-8 lg:w-8 text-white" />
          </div>
          <div className="text-xl lg:text-2xl animate-pulse">🎉</div>
        </div>
        <CardTitle className="text-lg lg:text-2xl font-black text-neutral-800 mb-2 lg:mb-3 tracking-tight">
          {title}
        </CardTitle>
        <CardDescription className="text-neutral-600 text-sm lg:text-md leading-relaxed font-medium">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-2 lg:space-y-4">
        <div
          className={`relative overflow-hidden bg-${color} rounded-xl lg:rounded-2xl group-hover:scale-105 transition-transform duration-500 bg-${color}-500 p-8 lg:p-12`}
        >
          <div className="text-center">
            <Icon className="h-16 w-16 lg:h-20 lg:w-20 text-white/80 mx-auto mb-4" />
            <div className="text-white font-bold text-lg lg:text-xl">Khám phá ngay</div>
          </div>
          <div className="absolute top-4 right-4 text-white/20">
            <Icon className="h-8 w-8 lg:h-12 lg:w-12" />
          </div>
        </div>
        <Button
          className={`w-full bg-${color} cursor-pointer hover:bg-${color}/80 hover:shadow-2xl text-white font-bold rounded-md lg:rounded-lg py-3 lg:py-4 text-sm lg:text-lg transform hover:scale-105 transition-all duration-300 border border-white/20`}
        >
          <Icon className="h-4 w-4 lg:h-5 lg:w-5 mr-2" />
          Khám phá ngay
          <ArrowRight className="h-4 w-4 lg:h-5 lg:w-5 ml-2" />
        </Button>
      </CardContent>
    </Card>
  )
}
