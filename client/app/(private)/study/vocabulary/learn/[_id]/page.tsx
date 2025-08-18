import { VocabularyLearning } from "@/components/features"
import { vocabularyTopics } from "@/mock/data"

export default function page({ params }: { params: { _id: string } }) {
  const { _id } = params
  const topics = vocabularyTopics.find(topic => topic._id === _id)
  if (!topics) {
    return <div>Không tìm thấy từ vựng</div>
  }
  return (
    <>
      <VocabularyLearning topics={topics} />
    </>
  )
}
