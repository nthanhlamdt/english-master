import FillInTheBlanks from "./FillInTheBlanks";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import MutipleChoice from "./MutipleChoice";
import { IQuizResult, IQuizz } from "@/types";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface QuizzCardProps {
  questionNumber: number
  quizz: IQuizz
  quizzResult: IQuizResult
  handleNext: () => void
  handlePrevious: () => void
  onChange: (value: string) => void
  isLastQuestion: boolean
}

export default function QuizzCard({ questionNumber, quizz, quizzResult, handleNext, handlePrevious, isLastQuestion, onChange }: QuizzCardProps) {
  return (
    <Card className="bg-white mt-10 mx-5">
      <CardHeader className="flex irtems-center justify-between">
        <span className="text-md text-gray-500">Câu hỏi {questionNumber}</span>
        <span className="text-md text-gray-500">Chưa trả lời</span>
      </CardHeader>

      <CardContent>
        {
          quizz.type === "fill-in-the-blanks" ?
            (<FillInTheBlanks
              assignment={quizz.assignment}
              question={quizz.question}
              onChange={onChange}
              quizzResult={quizzResult}
            />) :
            (
              <MutipleChoice
                assignment={quizz.assignment}
                question={quizz.question}
                options={quizz.options || []}
                onChange={onChange}
                quizzResult={quizzResult}
              />
            )
        }
      </CardContent>

      <CardFooter className="flex items-center justify-between">
        <Button
          className={`${questionNumber === 1 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
          onClick={handlePrevious}
        >
          <ArrowLeft />
          Câu trước
        </Button>

        <Button
          className="cursor-pointer"
          onClick={handleNext}
        >
          {isLastQuestion ? 'Hoàn thành' : 'Câu tiếp theo'}
          <ArrowRight />
        </Button>
      </CardFooter>
    </Card>
  )
}
