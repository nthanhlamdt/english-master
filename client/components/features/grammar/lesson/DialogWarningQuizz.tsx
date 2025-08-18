'use client'
import { Button } from "@/components/ui/button";
import { DialogHeader, Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Clock, Play, Target } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

export function DialogWarningQuizz() {
  const { id } = useParams()
  const router = useRouter()
  const handleStartQuiz = () => {
    router.push(`/quizz/${id}`)
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Play className="w-4 h-4" />
          Luyện tập
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Target className="w-5 h-5 text-blue-600" />
            Bắt đầu luyện tập
          </DialogTitle>
          <DialogDescription>
            Bạn sắp bắt đầu bài luyện tập. Hãy đảm bảo đã đọc kỹ lý thuyết trước khi làm bài nhé!
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="bg-blue-50 p-3 rounded-lg">
            <h4 className="font-medium text-blue-900 mb-2">📋 Hướng dẫn:</h4>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Đọc kỹ câu hỏi trước khi trả lời</li>
              <li>• Bạn có thể xem lại lý thuyết bất cứ lúc nào</li>
              <li>• Kết quả sẽ được lưu để theo dõi tiến độ</li>
            </ul>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Clock className="w-4 h-4" />
            <span>Thời gian ước tính: 10-15 phút</span>
          </div>
        </div>

        <DialogFooter>
          <DialogClose>
            <Button variant='outline' className="w-full hover:bg-white hover:shadow-md hover:text-primary cursor-pointer">Hủy</Button>
          </DialogClose>
          <Button onClick={handleStartQuiz} className="cursor-pointer hover:bg-primary/60 hover:shadow-md">
            <Play className="w-4 h-4 mr-2" />
            Bắt đầu ngay
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
