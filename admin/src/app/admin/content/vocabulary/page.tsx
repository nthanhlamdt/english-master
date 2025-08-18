import { VocabularyHeader, VocabularyTopicContent } from "@/components/features";
import { getVocabularyTopics } from "@/lib/apis/api";
import { VocabularyTopic } from "@/types";

export default async function page() {
  const topics = (await getVocabularyTopics()).data as VocabularyTopic[]

  return (
    <>
      <VocabularyHeader />

      <VocabularyTopicContent topics={topics} />
    </>
  );
}