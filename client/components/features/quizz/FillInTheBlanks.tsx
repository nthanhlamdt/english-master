import { Input } from "@/components/ui/input";
import { IQuizResult } from "@/types";

interface FillInTheBlanksProps {
  assignment: string
  question: string
  onChange: (value: string) => void
  quizzResult: IQuizResult
}

export default function FillInTheBlanks({ assignment, question, onChange, quizzResult }: FillInTheBlanksProps) {
  return (
    <div>
      <div className="flex flex-col bg-primary/10 p-4 border-l-4 border-l-primary">
        <span className="font-semibold text-primary text-xl">Đề bài:</span>
        <span className="text-gray-600 text-md">{assignment}</span>
      </div>

      <div className="mt-5 flex flex-col gap-2">
        <h2 className="text-2xl font-bold p-1 mb-2">Complete: &#34;{question}.&#34;</h2>
        <Input
          placeholder="Nhập câu trả lời của bạn"
          className="w-full p-3 h-10"
          value={quizzResult.userAnswer}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  )
}
