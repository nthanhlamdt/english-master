import { AvatarFallback, Avatar, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle, Quote, Star } from 'lucide-react'

interface CardFeedbackProps {
  color: string
  name: string
  avatar: string
  role: string
  rating: number
  feedback: string
}

export default function CardFeedback({ color, name, avatar, role, rating, feedback }: CardFeedbackProps) {
  return (
    <div className="group relative">
      <div
        className={`absolute inset-0 bg-${color}-500/20 rounded-2xl lg:rounded-[2rem] blur-xl group-hover:bg-${color}-500/30 transition-all duration-500`}
      ></div>
      <Card className="relative bg-white/80 backdrop-blur-2xl shadow-2xl rounded-2xl lg:rounded-[2rem] overflow-hidden group-hover:transform group-hover:scale-105 transition-all duration-500 border border-neutral-200/30">
        <CardContent className="p-6 lg:p-10">
          <div className="flex -center mb-6 lg:mb-8">
            <div className="relative">
              <Avatar className="h-12 w-12 lg:h-20 lg:w-20 mr-4 lg:mr-6 ring-3 lg:ring-4 ring-white shadow-2xl">
                <AvatarImage src={avatar || "/placeholder.svg"} alt={name} />
                <AvatarFallback className={`bg-${color}-500 text-white font-black text-lg lg:text-2xl`}>
                  {name
                    .split(" ")
                    .map((n: string) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-1 lg:-bottom-2 flex items-center justify-center bg-accent right-0 w-6 h-6 lg:w-8 lg:h-8 bg-accent-500 rounded-full border-2 lg:border-3 border-white shadow-lg">
                <CheckCircle className="h-3 w-3 lg:h-4 lg:w-4 text-white" />
              </div>
            </div>
            <div>
              <h4 className="font-black text-lg lg:text-2xl text-neutral-800">{name}</h4>
              <p className="text-neutral-600 font-semibold text-sm lg:text-lg">{role}</p>
            </div>
          </div>

          <div className="flex mb-4 lg:mb-6">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} className="h-4 w-4 lg:h-6 lg:w-6 fill-yellow-500 text-yellow-500" />
            ))}
          </div>

          <blockquote className="text-neutral-700 text-sm lg:text-lg leading-relaxed relative font-medium">
            <Quote className="absolute -top-2 lg:-top-4 -left-2 lg:-left-4 h-6 w-6 lg:h-8 lg:w-8 text-neutral-300" />
            {feedback}
            <Quote className="absolute -bottom-2 lg:-bottom-4 -right-2 lg:-right-4 h-6 w-6 lg:h-8 lg:w-8 text-neutral-300 rotate-180" />
          </blockquote>
        </CardContent>
      </Card>
    </div>
  )
}
