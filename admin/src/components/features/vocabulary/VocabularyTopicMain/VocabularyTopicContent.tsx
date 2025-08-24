'use client'
import { DataTable } from "@/components/common";
import { Card, CardContent } from "@/components/ui/card";
import { getVocabularyTopics } from "@/lib/apis/api";
import { VocabularyTopic } from "@/types";
import { useEffect, useState } from "react";
import { columnsVocabularyTopic } from "../VocabularyTopicTable/VocabularyTopicColumn";

interface props {
  refresh: boolean
  callback: () => void
}

export default function VocabularyTopicContent({ refresh, callback }: props) {
  const [topics, setTopics] = useState<VocabularyTopic[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    const fetchTopics = async () => {
      setIsLoading(true)
      await getVocabularyTopics()
        .then(res => {
          setTopics(res.data || [])
        })
        .catch(() => {
          setTopics([])
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
          columns={columnsVocabularyTopic(callback)}
          data={topics}
          isLoading={isLoading}
          columnNameSearch="name"
        />
      </CardContent>
    </Card>
  );
}
