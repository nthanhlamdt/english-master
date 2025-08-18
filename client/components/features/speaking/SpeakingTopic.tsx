import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { speakingTopicData } from "@/mock/data";
import CardSpeakingTopic from "./CardSpeakingTopic";

export function SpeakingTopic() {
  return (
    <Card>
      <CardHeader className="flex items-center gap-4">
        <CardTitle className="p-2 bg-gradient-to-r from-pink-500 to-rose-300 rounded-md text-white">
          🗣️
        </CardTitle>
        <CardDescription className="text-2xl font-semibold">Danh sách bài nói</CardDescription>
      </CardHeader>

      <CardContent className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
        {speakingTopicData.map((topic) => (
          <CardSpeakingTopic key={topic._id} {...topic} />
        ))}
      </CardContent>
    </Card>
  )
}
