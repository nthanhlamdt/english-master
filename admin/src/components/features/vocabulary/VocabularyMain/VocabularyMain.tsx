'use client'
import { DataTable, PageHeader } from "@/components/common";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { columnsVocabulary } from "../VocabularyTable/VocabularyColumn";
import { Vocabulary } from "@/types";
import { getVocabularyByTopicId } from "@/lib/apis/api";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import FormCreateVocabulary from "@/components/common/form/FormCreateVocabulary";

export function VocabularyMain({ _id }: { _id: string }) {
  const [isLoading, setIsLoading] = useState(false)
  const [vocabularys, setVocabularys] = useState<Vocabulary[]>([])
  const [refresh, setRefresh] = useState(false)
  const [topicName, setTopicName] = useState('')

  useEffect(() => {
    const fetchVocabulary = async () => {
      setIsLoading(true)
      await getVocabularyByTopicId(_id)
        .then(res => {
          setVocabularys(res.data?.vocabulary || [])
          setTopicName(res.data?.vocabularyTopic.name || '')
        })
        .catch(() => {
          setVocabularys([])
        })
        .finally(() => {
          setIsLoading(false)
        })
    }
    fetchVocabulary()
  }, [refresh, _id])

  return (
    <>
      <Dialog>
        <header>
          <PageHeader
            title={`Chủ đề ${topicName}`}
            subtitle={`Quản lý danh sách từ vựng chủ đề ${topicName}`}
            primaryAction={{
              label: "Thêm từ vựng",
            }}
          />
        </header>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>Thêm từ vựng</DialogTitle>
            <DialogDescription>
              Thêm từ vựng mới
            </DialogDescription>
          </DialogHeader>
          <FormCreateVocabulary
            setIsLoading={setIsLoading}
            callback={() => setRefresh(!refresh)}
            topicId={_id}
          />
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Hủy</Button>
            </DialogClose>
            <Button
              type="submit"
              form="form-create-vocabulary"
              disabled={isLoading}
            >
              {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Lưu'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Card>
        <CardContent>
          <DataTable
            columns={columnsVocabulary(() => setRefresh(!refresh))}
            data={vocabularys}
            isLoading={isLoading}
            columnNameSearch="word"
          />
        </CardContent>
      </Card>
    </>
  )
}
