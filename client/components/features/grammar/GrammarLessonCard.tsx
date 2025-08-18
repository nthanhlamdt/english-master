import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { IGrammarLessonCardProps } from "@/types/grammar";
import Link from "next/link";

export default function GrammarLessonCard({ _id, title, description, level, icon }: IGrammarLessonCardProps) {
  return (
    <Link href={`/study/grammar/${_id}`}>
      <Card className="cursor-pointer h-full flex flex-col justify-between hover:scale-105 hover:shadow-lg transition-all duration-300">
        <CardHeader className="flex items-start justify-between">
          <span className="p-2 bg-yellow-400 rounded-md text-white">{icon}</span>
          <Badge>{level}</Badge>
        </CardHeader>

        <CardContent className="space-y-2">
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardContent>

        <CardFooter>
          <Button className="w-full flex items-center gap-2 cursor-pointer">Bắt đầu <ArrowRight /></Button>
        </CardFooter>
      </Card>
    </Link>
  )
}
