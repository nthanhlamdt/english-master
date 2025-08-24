import { Vocabulary } from '@/types'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { Loader2, MoreHorizontal, Pencil, Trash2 } from "lucide-react"
import { useState } from 'react'
import { deleteVocabulary } from '@/lib/apis/api'
import { toast } from 'react-toastify'

interface props {
  vacabulary: Vocabulary
  callback: () => void
}

export default function ActionsCell({ vacabulary, callback }: props) {
  const [isLoading, setIsLoading] = useState(false)
  const [openEdit, setOpenEdit] = useState(false)

  const handleDeleteVocabulary = async () => {
    setIsLoading(true)
    await deleteVocabulary(vacabulary._id)
      .then(res => {
        toast.success(`Xóa từ vựng ${res.data?.word} thành công`)
        callback()
      })
      .catch(() => {
        toast.error('Xóa từ vựng không thành công')
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  if (isLoading) return <Loader2 className="h-4 w-4 animate-spin" />
  return (
    <>
      {/* <Dialog open={openEdit} onOpenChange={setOpenEdit}>
        <DicalogUpdateVocabularyTopic callback={callback} topic={topic} />
      </Dialog> */}

      {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : (
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
              onSelect={(e) => { e.preventDefault(); setOpenEdit(true) }}
            >
              <Pencil className="h-4 w-4" />
              Sửa
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem
              className="text-red-600"
              onClick={handleDeleteVocabulary}
            >
              <Trash2 className="h-4 w-4" />
              Xóa
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </>
  )
}
