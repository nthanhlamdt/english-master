
import CardVocabularyTopic from "./CardVocabularyTopic";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { vocabularyTopics, type IVocabularyTopic } from "@/mock/data";
import { BookOpen } from "lucide-react";

export function VocabularyTopic() {
  return (
    <Card>
      <CardHeader className="flex items-center gap-4">
        <CardTitle className="p-2 bg-yellow-400 rounded-md text-white"><BookOpen /></CardTitle>
        <CardDescription className="text-2xl font-semibold">Danh sách chủ đề từ vựng</CardDescription>
      </CardHeader>

      <CardContent className="grid grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4">
        {vocabularyTopics.map((topic: IVocabularyTopic) => (
          <CardVocabularyTopic
            key={topic._id}
            _id={topic._id}
            name={topic.name}
            url={topic.url}
            progress={topic.progress}
            isCompleted={topic.progress > 80}
            isUnlocked={topic.isUnlock}
          />
        ))}
      </CardContent>
    </Card>
  )
}
