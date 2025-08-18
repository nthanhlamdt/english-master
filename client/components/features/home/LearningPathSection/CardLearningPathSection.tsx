import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";


const colorMapBgGradient: Record<string, string> = {
  primary: "bg-gradient-to-r from-primary/30 to-primary/10",
  secondary: "bg-gradient-to-r from-secondary/30 to-secondary/10",
  accent: "bg-gradient-to-r from-accent/30 to-accent/10",
}

interface CardLearningPathSectionProps {
  title: string
  description: string
  list: string[]
  color: "primary" | "secondary" | "accent"
  className?: string
}

export default function CardLearningPathSection({ title, description, list, color, className }: CardLearningPathSectionProps) {
  return (
    <Card className={`group  border-2 border-${color} ${colorMapBgGradient[color]} ${className} transition-all duration-300 w-full`}>
      <CardHeader >
        <div className="overflow-hidden rounded-xl aspect-2/1 w-full h-full">
          <Image
            src={`/images/anh.jpg`}
            alt={title}
            width={400}
            height={200}
            quality={100}
            className="w-full h-full object-cover group-hover:scale-115 transition-all duration-500"
          />
        </div>
      </CardHeader>

      <CardContent>
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        <CardDescription className="text-sm text-gray-500 my-2">{description}</CardDescription>
        <ul>
          {list.map((item, index) => (
            <li key={index} className="flex items-center gap-2 text-neutral-500">
              <CheckCircle className="w-4 h-4 text-green-500" />
              {item}
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter>
        <Button className={`w-full bg-${color} hover:bg-${color}/80 cursor-pointer`}>Bắt đầu ngay <ArrowRight className="w-4 h-4" /></Button>
      </CardFooter>
    </Card>
  )
}
