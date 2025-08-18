import { DataTable } from "@/components/common";
import { Card, CardContent } from "@/components/ui/card";
import { columnsVocabularyTopic, VocabularyTopic } from "@/types";

export function VocabularyTopicContent({ topics }: { topics: VocabularyTopic[] }) {
  return (
    <Card>
      <CardContent>
        <DataTable columns={columnsVocabularyTopic} data={topics} />
      </CardContent>
    </Card>
  );
}
