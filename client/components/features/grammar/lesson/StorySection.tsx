import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { IStorySectionProps } from "@/types";


export default function StorySection({ title, story, grammarPoints, questions }: IStorySectionProps) {
  return (
    <Card className="bg-primary/10 border-l-4 border-l-primary">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        <CardDescription className="p-4 bg-white rounded-md text-md">
          {story}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex gap-8 ml-6 flex-col lg:flex-row">
        <div>
          <CardTitle>Điểm ngữ pháp trong câu chuyện:</CardTitle>
          <ul className="list-disc list-inside text-md text-gray-600 space-y-1 mt-2 list-">
            {grammarPoints.length > 0 && grammarPoints.map(grammarPoints => (
              <li key={grammarPoints}>{grammarPoints}</li>
            ))}
          </ul>
        </div>

        <div>
          <CardTitle>Câu hỏi thảo luận:</CardTitle>
          <ul className="list-disc list-inside text-md text-gray-600 space-y-1 mt-2 list-">
            {questions.length > 0 && questions.map(question => (
              <li key={question}>{question}</li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
