import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen } from "lucide-react";
import GrammarLessonCard from "./GrammarLessonCard";
import { IGrammarLesson } from "@/types/grammar";

export function GrammarLessons({ lessons }: { lessons: IGrammarLesson[] }) {
  return (
    <Card className="w-full">
      <CardHeader className="flex items-center gap-4">
        <CardTitle className="p-2 bg-yellow-400 rounded-md text-white"><BookOpen /></CardTitle>
        <CardDescription className="text-2xl font-semibold">Danh sách ngữ pháp</CardDescription>
      </CardHeader>

      <CardContent className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
        {lessons.length > 0 && lessons.map((lesson) => (
          <GrammarLessonCard
            key={lesson._id}
            title={lesson.title}
            description={lesson.description}
            level={lesson.level}
            icon={lesson.icon}
            _id={lesson._id}
          />
        ))}
      </CardContent>
    </Card>
  )
}
