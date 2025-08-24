"use client"
import { ColumnDef } from "@tanstack/react-table"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { VocabularyTopic } from "@/types"
import ActionsCell from "./ActionsCell"

export const columnsVocabularyTopic = (callback: () => void): ColumnDef<VocabularyTopic>[] => [
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
    accessorKey: "orderIndex",
    header: () => <div className="text-center">Thứ tự</div>,
    cell: ({ row }) => {
      return <div className="text-center">{row.original.orderIndex}</div>
    }
  },
  {
    accessorKey: "name",
    header: "Chủ đề"
  },
  {
    accessorKey: "image",
    header: "Hình ảnh",
    cell: ({ row }) => {
      return <Image
        src={row.original.image.url}
        alt={row.original.name}
        width={80}
        height={80}
        className="max-w-[50px] max-h-[50px] aspect-square object-cover border-gray-200"
        priority
      />
    }
  },
  {
    accessorKey: "isActive",
    header: "Trạng thái",
    cell: ({ row }) => {
      return <div >
        {row.original.isActive ? <Badge variant="secondary">Hoạt động</Badge> : <Badge variant="destructive">Không hoạt động</Badge>}
      </div>
    }
  },

  {
    id: "actions",
    cell: ({ row }) => <ActionsCell topic={row.original} callback={callback} />
  },
]