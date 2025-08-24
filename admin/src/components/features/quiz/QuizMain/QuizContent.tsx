'use client'
import { DataTable } from "@/components/common";
import { columnsQuiz } from "@/components/features/quiz/QuizTable/QuizColumn";
import { Card, CardContent } from "@/components/ui/card";
import { getQuizList } from "@/lib/apis/api";
import { Quiz } from "@/types";
import { useEffect, useState } from "react";

interface props {
  refresh: boolean
  callback: () => void
}

export default function QuizContent({ refresh, callback }: props) {
  const [quizs, setQuizs] = useState<Quiz[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
      const fetchTopics = async () => {
        setIsLoading(true)
        await getQuizList()
          .then(res => {
            setQuizs(res.data || [])
          })
          .catch(() => {
            setQuizs([])
          })
          .finally(() => {
            setIsLoading(false)
          })
      }
      fetchTopics()
    }, [refresh])

  return (
    <Card>
      <CardContent>
        <DataTable
          columns={columnsQuiz(callback)}
          data={quizs}
          isLoading={isLoading}
          columnNameSearch="question"
        />
      </CardContent>
    </Card>
  );
}
