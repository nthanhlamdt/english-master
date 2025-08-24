"use client"
import { ColumnDef } from "@tanstack/react-table"
import Image from "next/image"
import { Checkbox } from "@/components/ui/checkbox"
import { Vocabulary } from "@/types"
import ActionsCell from "./ActionsCell"

export const columnsVocabulary = (callback: () => void): ColumnDef<Vocabulary>[] => [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "word",
    header: () => <div className="text-center">Từ vựng</div>,
    cell: ({ row }) => {
      return <div className="text-center">{row.original.word}</div>
    }
  },
  {
    accessorKey: "transcription",
    header: "Phiên âm"
  },

  {
    accessorKey: "partOfSpeech",
    header: "Loại từ"
  },

  {
    accessorKey: "definition",
    header: "Định nghĩa"
  },

  {
    accessorKey: "vietnameseMeaning",
    header: "Nghĩa tiếng Việt"
  },

  {
    accessorKey: "example",
    header: "Ví dụ"
  },

  {
    accessorKey: "image",
    header: "Hình ảnh",
    cell: ({ row }) => {
      return <Image
        src={row.original.image.url}
        alt={row.original.word}
        width={80}
        height={80}
        className="w-full h-full max-w-[50px] max-h-[50px] aspect-square object-cover border-gray-200"
        priority
      />
    }
  },
  {
    accessorKey: "quizId",
    header: "Câu hỏi"
  },

  {
    id: "actions",
    cell: ({ row }) => <ActionsCell vacabulary={row.original} callback={callback} />
  },
]