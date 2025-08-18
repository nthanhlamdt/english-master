import { ListVocabularyLesson } from "@/components/features"
import { vocabularyTopics } from "@/mock/data"

export default async function page({ params }: { params: { _id: string } }) {
  const { _id } = await params
  const topic = vocabularyTopics.find((topic) => topic._id === _id)
  if (!topic) {
    return <div>Topic not found</div>
  }
  return (
    <ListVocabularyLesson topic={topic} />
  )
}
