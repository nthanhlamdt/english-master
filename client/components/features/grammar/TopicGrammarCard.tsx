import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle } from "lucide-react";

export default function TopicGrammarCard() {
  return (
    <Card className="border border-yellow-400">
      <CardHeader className="flex items-center gap-4">
        <span className="p-2 bg-yellow-400 rounded-md text-white"><CheckCircle /></span>
        <div>
          <CardTitle>Beginer</CardTitle>
          <CardDescription>Các bài học ngữ pháp cơ bản cho người mới bắt đầu</CardDescription>
          <Progress value={50} />
        </div>
      </CardHeader>
    </Card>
  )
}
