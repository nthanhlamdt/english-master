import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import CardWritingTopic from "./CardWritingTopic";
import { writingTopicData } from "@/mock/data";

export function WritingTopic() {
  return (
    <Card>
      <CardHeader className="flex items-center gap-4">
        <CardTitle className="p-2 bg-gradient-to-r from-orange-500 to-amber-300 rounded-md text-white">
          ✍️
        </CardTitle>
        <CardDescription className="text-2xl font-semibold">Danh sách bài viết</CardDescription>
      </CardHeader>

      <CardContent className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
        {writingTopicData.map((topic) => (
          <CardWritingTopic key={topic._id} {...topic} />
        ))}
      </CardContent>
    </Card>
  )
}
