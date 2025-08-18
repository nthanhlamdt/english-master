'use client'
import { IQuizResult, IQuizz } from "@/types"
import { useState } from "react"
import SummaryResults from "./SummaryResults"
import QuizzCard from "./QuizzCard"
import { ProgessBar } from "./ProgessBar"

interface IQuizzCardProps {
  quizzs: IQuizz[]
}

export function Quizz({ quizzs }: IQuizzCardProps) {
  const [questionNumber, setQuestionNumber] = useState<number>(1)
  console.log('quizz:', quizzs)
  const [results, setResults] = useState<IQuizResult[]>(quizzs.map((quizz, index) => {
    return {
      questionNumber: index + 1,
      question: quizz.question,
      userAnswer: "",
      correctAnswer: quizz.answer,
      explanation: quizz.explanation
    }
  }))

  const handleNext = () => {
    setQuestionNumber(prev => prev + 1)
  }

  const handlePrevious = () => {
    if (questionNumber > 1) {
      setQuestionNumber(prev => prev - 1)
    }
  }

  const onRetry = () => {
    setQuestionNumber(1)
    setResults(quizzs.map((quizz, index) => {
      return {
        questionNumber: index + 1,
        question: quizz.question,
        userAnswer: "",
        correctAnswer: quizz.answer,
        explanation: quizz.explanation
      }
    }))
  }

  const onChange = (value: string) => {
    setResults(prev => {
      const newResults = [...prev]
      newResults[questionNumber - 1].userAnswer = value
      return newResults
    })
  }

  return (
    <>
      <ProgessBar />
      <div className="mx-auto p-5 max-w-4xl overflow-auto">
        {
          questionNumber === quizzs.length ?
            (<SummaryResults
              onRetry={onRetry}
              results={results}
            />) :
            (<QuizzCard
              questionNumber={questionNumber}
              quizz={quizzs[questionNumber - 1]}
              quizzResult={results[questionNumber - 1]}
              handleNext={handleNext}
              handlePrevious={handlePrevious}
              isLastQuestion={questionNumber === quizzs.length}
              onChange={onChange}
            />)
        }
      </div>
    </>
  )
}
