import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { IQuizResult } from "@/types";

interface MutipleChoiceProps {
  assignment: string
  question: string
  options: string[]
  onChange: (value: string) => void
  quizzResult: IQuizResult
}

export default function MutipleChoice({ assignment, question, options, onChange, quizzResult }: MutipleChoiceProps) {
  return (
    <div>
      <div className="flex flex-col bg-primary/10 p-4 border-l-4 border-l-primary">
        <span className="font-semibold text-primary text-xl">Đề bài:</span>
        <span className="text-gray-600 text-md">{assignment}</span>
      </div>

      <div className="mt-5 flex flex-col gap-2">
        <h2 className="text-2xl font-bold p-1 mb-2">Complete: &#34;{question}.&#34;</h2>
        <RadioGroup value={quizzResult.userAnswer} defaultValue="option-one" onValueChange={(value) => onChange(value)}>
          {
            options.length >= 2 && options.map(option => (
              <div key={option} className="flex items-center space-x-2 pl-4 bg-primary/10 rounded-md">
                <RadioGroupItem className="border-primary" value={option} id={option} />
                <Label htmlFor={option} className="text-lg w-full py-4">{option}</Label>
              </div>
            ))
          }
        </RadioGroup>
      </div>
    </div>
  )
}
