import { HearderGrammarLearning, LearningMethodsCard, LessonInfo, LessonMain } from '@/components/features'
import { grammarLessonData } from '@/mock/data/GrammarData';
import { BookOpen } from 'lucide-react';
import Link from 'next/link';

export default async function page({ params }: { params: { _id: string } }) {
  const { _id } = await params;
  const lesson = grammarLessonData.find((lesson) => lesson._id === _id);

  if (!lesson) {
    return <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Không tìm thấy bài học</h2>
        <p className="text-gray-600 mb-4">Bài học bạn đang tìm kiếm không tồn tại.</p>
        <Link href="/" className="btn-primary">
          Quay lại trang chủ
        </Link>
      </div>
    </div>
  }

  return (
    <div>
      <HearderGrammarLearning
        title={lesson.title}
        description={lesson.description}
        icon={lesson.icon}
      />

      <div className='flex flex-col xl:flex-row gap-5'>
        <LessonMain grammarLesson={lesson} />

        <div className='xl:max-w-sm w-full flex flex-col gap-5'>
          <LearningMethodsCard />
          <LessonInfo />
        </div>
      </div>
    </div>
  )
}
