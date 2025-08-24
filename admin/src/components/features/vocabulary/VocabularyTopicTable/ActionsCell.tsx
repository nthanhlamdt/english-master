import { VocabularyTopic } from '@/types'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { Eye, EyeOff, Info, Loader2, MoreHorizontal, Pencil, Trash2 } from "lucide-react"
import { useState } from 'react'
import { deleteVocabularyTopic, updateIsActiveVocabularyTopic } from '@/lib/apis/api'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import { Dialog } from '@/components/ui/dialog'
import DicalogUpdateVocabularyTopic from './DicalogUpdateVocabularyTopic'

interface props {
  topic: VocabularyTopic
  callback: () => void
}

export default function ActionsCell({ topic, callback }: props) {
  const [isLoading, setIsLoading] = useState(false)
  const [openEdit, setOpenEdit] = useState(false)
  const router = useRouter()
  const handleDelete = async () => {
    setIsLoading(true)
    await deleteVocabularyTopic(topic._id)
      .then(() => {
        toast.success('Xóa chủ đề từ vựng thành công')
        callback()
      })
      .catch(() => {
        toast.error('Xóa chủ đề từ vựng thất bại')
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const handleUpdateIsAciveTopicVocabulary = async () => {
    setIsLoading(true)
    await updateIsActiveVocabularyTopic(topic._id)
      .then(() => {
        toast.success('Cập nhật trạng thái xuất bản thành công')
        callback()
      })
      .catch(() => {
        toast.error('Cập nhật trạng thái xuất bản thất bại')
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  if (isLoading) return <Loader2 className="h-4 w-4 animate-spin" />
  return (
    <>
      <Dialog open={openEdit} onOpenChange={setOpenEdit}>
        <DicalogUpdateVocabularyTopic callback={callback} topic={topic} />
      </Dialog>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Hành động</DropdownMenuLabel>
          <DropdownMenuItem
            onClick={() => router.push(`/admin/content/vocabulary/${topic._id}`)}
          >
            <Info className="h-4 w-4 " />
            Chi tiết
          </DropdownMenuItem>

          <DropdownMenuItem
            onSelect={(e) => { e.preventDefault(); setOpenEdit(true) }}
          >
            <Pencil className="h-4 w-4" />
            Sửa
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={handleUpdateIsAciveTopicVocabulary}
          >
            {!topic.isActive ? (
              <Eye className="h-4 w-4" />
            ) : (
              <EyeOff className="h-4 w-4" />
            )}
            {!topic.isActive ? 'Xuất bản' : 'Ẩn'}
          </DropdownMenuItem>
          <DropdownMenuSeparator />

          <DropdownMenuItem className="text-red-600" onClick={handleDelete}>
            <Trash2 className="h-4 w-4" />
            Xóa
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
