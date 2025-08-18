import { AudioPlayerLesson, HeaderLesson, TranscriptListeningLesson } from '@/components/features'

export default function ListeningLessonPage() {

  return (
    <>
      <HeaderLesson />

      <div className='w-full flex flex-col 2xl:flex-row gap-4'>
        <AudioPlayerLesson />
        <TranscriptListeningLesson />
      </div>
    </>
  )
}