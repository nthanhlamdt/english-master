import { Quizz } from "@/components/features"
import { grammarLessonData } from "@/mock/data"

export default async function page({ params }: { params: { id: string } }) {
  const { id } = await params
  const lesson = grammarLessonData.find(lesson => lesson._id === id)

  if (!lesson) {
    return <div className="flex items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Bài học không tồn tại</h1>
    </div>
  }

  return (
    <>
      <Quizz quizzs={lesson?.quizz} />
    </>
  )
}
