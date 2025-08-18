import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import CardListeningTopic from "./CardListeningTopic";
import { IListeningTopic } from "@/types";

interface ListeningTopicProps {
  listeningTopics: IListeningTopic[]
}

export function ListeningTopic({ listeningTopics }: ListeningTopicProps) {
  return (
    <Card>
      <CardHeader className="flex items-center gap-4">
        <CardTitle className="p-2 bg-gradient-to-r from-pink-500 to-pink-300 rounded-md text-white">
          🎧
        </CardTitle>
        <CardDescription className="text-2xl font-semibold">Danh sách bài nghe</CardDescription>
      </CardHeader>

      <CardContent className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
        {listeningTopics.map((topic) => (
          <CardListeningTopic key={topic._id} {...topic} />
        ))}
      </CardContent>
    </Card>
  )
}
