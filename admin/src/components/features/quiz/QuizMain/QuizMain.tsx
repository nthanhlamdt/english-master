'use client'
import { useState } from 'react'
import QuizHeader from './QuizHeader'
import QuizContent from '@/components/features/quiz/QuizMain/QuizContent'

export function QuizMain() {
  const [refresh, setRefresh] = useState(false)

  return (
    <div>
      <QuizHeader callback={() => setRefresh(!refresh)}/>
      <QuizContent refresh={refresh} callback={() => setRefresh(!refresh)}/>
    </div>
  )
}
