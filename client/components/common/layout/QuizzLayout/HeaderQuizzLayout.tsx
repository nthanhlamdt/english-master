'use client'
import { ArrowLeft, Brain, Clock, FileQuestion } from "lucide-react";
import { useRouter } from "next/navigation";

export function HeaderQuizzLayout() {
  const router = useRouter()

  return (
    <header className="sticky top-0 z-50 w-full bg-white h-24 px-5 flex items-center justify-between">
      <div className="flex items-center justify-start gap-4 ">
        <div
          onClick={() => router.back()}
          className="flex items-center cursor-pointer text-lg gap-2 text-gray-500 px-4 border-r border-r-gray-400"
        >
          <ArrowLeft className="w-6 h-6" />
          <span className="hidden md:block">Quay lại bài học</span>
        </div>

        <div className="flex items-center gap-4">
          <Brain className="w-10 h-10 text-purple-500" />

          <div>
            <h1 className="text-2xl font-bold">Bài kiểm tra</h1>
            <p className="text-sm text-gray-500">Personal Pronouns (Đại từ nhân xưng)</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <span className="flex items-center gap-1"><Clock /> 5:00</span>
        <span className="flex items-center gap-1"><FileQuestion /> 1/10</span>
      </div>
    </header>
  )
}
