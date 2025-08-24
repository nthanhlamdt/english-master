import { Quiz } from '@/types'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { Loader2, MoreHorizontal, Pencil, Trash2 } from "lucide-react"
import { useState } from 'react'

interface props {
  quiz: Quiz
  callback: () => void
}

export default function ActionsCell({ quiz, callback }: props) {
  const [isLoading, setIsLoading] = useState(false)

  if (isLoading) return <Loader2 className="h-4 w-4 animate-spin" />
  return (
    <>
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
            onSelect={(e) => { e.preventDefault(); }}
          >
            <Pencil className="h-4 w-4" />
            Sửa
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem className="text-red-600">
            <Trash2 className="h-4 w-4" />
            Xóa
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
