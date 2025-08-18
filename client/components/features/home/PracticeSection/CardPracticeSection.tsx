import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, LucideIcon } from "lucide-react"

interface CardPracticeSectionProps {
  title: string
  description: string
  color: string
  Icon: LucideIcon
}

export default function CardPracticeSection({ title, description, color, Icon }: CardPracticeSectionProps) {
  return (
    <Card className={`group bg-gradient-to-r border-${color} from-${color}/30 flex flex-col justify-between to-${color}/10 m-0 hover:scale-105 transition - all duration - 300`}>
      <div className="flex flex-col gap-4">
        <CardHeader className="flex flex-col items-center">
          <div className={`bg-${color} rounded-xl p-5 text-white group-hover:scale-115 transition-all duration-300`}>
            <Icon className={`text-4xl font-bold`} />
          </div>
        </CardHeader>

        <CardContent className="flex flex-col items-center justify-between gap-2">
          <CardTitle className={`text-${color} text-2xl text-center font-bold group-hover:text-${color}/80 transition-all duration-300`}>{title}</CardTitle>
          <CardDescription className="text-center">{description}</CardDescription>
        </CardContent>
      </div>

      <CardFooter>
        <Button className={`w-full bg-${color} hover:bg-${color}/80 cursor-pointer`}>Thử ngay <ArrowRight className="w-4 h-4" /></Button >
      </CardFooter >
    </Card >
  )
}
