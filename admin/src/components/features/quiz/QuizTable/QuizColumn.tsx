"use client"
import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@/components/ui/checkbox"
import { Quiz } from "@/types"
import ActionsCell from "@/components/features/quiz/QuizTable/ActionsCell"

export const columnsQuiz = (callback: () => void): ColumnDef<Quiz>[] => [
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
    accessorKey: "assignment",
    header: "Đề bài"
  },
  {
    accessorKey: "question",
    header: "Câu hỏi"
  },
  {
    accessorKey: "answer",
    header: "Đáp án"
  },
  {
  accessorKey: "options",
  header: "Lựa chọn",
  cell: ({ row }) => {
    const options = row.original.options;
    if (!options || options.length === 0) return <span className="italic text-muted-foreground">Không có</span>;
    return `[${options.join(", ")}]` ;
    }
  },
  {
    accessorKey: "type",
    header: "Loại câu hỏi"
  },
  {
      id: "actions",
      cell: ({ row }) => <ActionsCell quiz={row.original} callback={callback} />
    },
]