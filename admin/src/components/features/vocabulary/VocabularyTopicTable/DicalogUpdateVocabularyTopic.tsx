import FormUpdateVocabularyTopic from "@/components/common/form/FormUpdateVocabularyTopic";
import { Button } from "@/components/ui/button";
import { DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { VocabularyTopic } from "@/types";
import { Loader2 } from "lucide-react";
import { useState } from "react";

interface props {
  topic: VocabularyTopic
  callback: () => void
}

export default function DicalogUpdateVocabularyTopic({ topic, callback }: props) {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Chỉnh sửa chủ đề</DialogTitle>
        <DialogDescription>
          Chỉnh sửa chủ đề từ vựng
        </DialogDescription>
      </DialogHeader>

      <FormUpdateVocabularyTopic
        setIsLoading={setIsLoading}
        callback={callback}
        topic={topic}
      />

      <DialogFooter>
        <DialogClose asChild>
          <Button variant="outline">Hủy</Button>
        </DialogClose>
        <Button
          type="submit"
          form="form-update-vocabulary-topic"
          disabled={isLoading}
        >
          {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Sửa'}
        </Button>
      </DialogFooter>
    </DialogContent>
  )
}
