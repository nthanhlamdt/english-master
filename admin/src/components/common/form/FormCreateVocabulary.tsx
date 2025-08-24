'use client'

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Input } from "@/components/ui/input"
import { DialogImageToMedia } from "../dialog"
import { useState } from "react"
import { ImageData } from "@/types"
import Image from "next/image"
import { Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { createVocabulary, getQuizList } from "@/lib/apis/api" // Đảm bảo đã có hàm này
import { Quiz } from "@/types" // Đảm bảo Quiz có trường _id và assignment
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import FormCreateQuiz from "@/components/common/form/FormCreateQuiz" // Đảm bảo đã import đúng
import { toast } from "react-toastify"

// Schema validation
const schema = z.object({
  word: z.string().min(1, "Từ vựng không được để trống"),
  transcription: z.string().min(1, "Phát âm không được để trống"),
  partOfSpeech: z.string().min(1, "Từ vựng không được để trống"),
  definition: z.string().min(1, "Định nghĩa không được để trống"),
  vietnameseMeaning: z.string().min(1, "Nghĩa tiếng Việt không được để trống"),
  example: z.string().min(1, "Ví dụ không được để trống"),
  image: z.string().min(1, "Ảnh chủ đề không được để trống"),
  vocabularyTopicId: z.string().min(1, "Chủ đề không được để trống"),
  quizId: z.string().min(1, "Bài tập không được để trống")
})

type FormData = z.infer<typeof schema>

interface FormCreateVocabularyProps {
  setIsLoading: (isLoading: boolean) => void
  callback: () => void
  topicId: string
}

export default function FormCreateVocabulary({ setIsLoading, callback, topicId }: FormCreateVocabularyProps) {
  const [url, setUrl] = useState("")
  const [quizList, setQuizList] = useState<Quiz[]>([])
  const [openQuizDialog, setOpenQuizDialog] = useState(false)
  const [openCreateQuizDialog, setOpenCreateQuizDialog] = useState(false)
  const [searchQuiz, setSearchQuiz] = useState("")

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      word: "",
      transcription: "",
      partOfSpeech: "",
      definition: "",
      vietnameseMeaning: "",
      example: "",
      image: "",
      vocabularyTopicId: topicId,
      quizId: ""
    }
  })

  const onSubmit = async (data: FormData) => {
    setIsLoading(true)
    await createVocabulary(data)
      .then(() => {
        toast.success('Thêm từ vựng thành công')
      })
      .catch((err) => toast.error('Lỗi: ' + err.response.data.message))
      .finally(() => {
        form.reset()
        setUrl("")
        setIsLoading(false)
        callback()
      })
  }

  const partOfSpeechs = [
    {
      label: 'Danh từ',
      value: 'Noun'
    },
    {
      label: 'Động từ',
      value: 'Verb'
    },
    {
      label: 'Tính từ',
      value: 'Adjective'
    },
    {
      label: 'Trạng từ',
      value: 'Adverb'
    },
    {
      label: 'Giới từ',
      value: 'Preposition'
    },
    {
      label: 'Liên từ',
      value: 'Conjunction'
    },
    {
      label: 'Cụm từ',
      value: 'Interjection'
    }
  ]

  return (
    <Form {...form}>
      <form id="form-create-vocabulary" className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        {/* Từ vựng */}
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="word"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-medium">
                  Từ vựng <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Nhập từ vựng..."
                    {...field}
                    className="h-12 text-base"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* phiên âm */}
          <FormField
            control={form.control}
            name="transcription"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-medium">
                  Phiên âm <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Nhập phiên âm..."
                    {...field}
                    className="h-12 text-base"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* Nghĩa tiếng Việt */}
          <FormField
            control={form.control}
            name="vietnameseMeaning"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-medium">
                  Nghĩa tiếng Việt <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Nhập nghĩa tiếng Việt..."
                    {...field}
                    className="h-12 text-base"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Loại từ */}
          <FormField
            control={form.control}
            name="partOfSpeech"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-medium">
                  Loại từ <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="w-full py-5">
                      <SelectValue placeholder="Chọn loại từ" />
                    </SelectTrigger>

                    <SelectContent>
                      {partOfSpeechs.map((item) => (
                        <SelectItem key={item.value} value={item.value}>{item.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Định nghĩa */}
        <FormField
          control={form.control}
          name="definition"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-medium">
                Định nghĩa <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Nhập định nghĩa..."
                  {...field}
                  className="h-12 text-base"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Ví dụ */}
        <FormField
          control={form.control}
          name="example"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-medium">
                Ví dụ <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Nhập ví dụ..."
                  {...field}
                  className="h-12 text-base"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Hình ảnh */}
        <FormField
          control={form.control}
          name="image"
          render={() => (
            <FormItem>
              <FormLabel className="text-base font-medium">
                Ảnh chủ đề <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <div className="space-y-3">
                  <DialogImageToMedia
                    onSelect={(image: ImageData) => {
                      form.setValue("image", image._id || "")
                      setUrl(image.url)
                    }}
                  />

                  {url && (
                    <div className="relative w-24 h-24 rounded-md border">
                      <Image
                        src={url}
                        alt="Ảnh chủ đề"
                        fill
                        sizes="96px"
                        className="object-cover"
                      />
                      <Button
                        type="button"
                        onClick={() => {
                          setUrl("")
                          form.setValue("image", "")
                        }}
                        className="absolute right-2 cursor-pointer top-2 text-sm text-red-500"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  )}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Quiz chọn */}
        <FormField
          control={form.control}
          name="quizId"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-medium">
                Bài tập Quiz <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <div>
                  <Button type="button" variant="outline" onClick={() => setOpenQuizDialog(true)}>
                    {field.value
                      ? `Đã chọn: ${quizList.find(q => q._id === field.value)?.question || "Quiz"}`
                      : "Chọn bài tập quiz"}
                  </Button>
                  <Dialog open={openQuizDialog} onOpenChange={setOpenQuizDialog}>
                    <DialogTrigger asChild />
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>Chọn bài tập Quiz</DialogTitle>
                      </DialogHeader>
                      <Input
                        placeholder="Tìm kiếm quiz..."
                        value={searchQuiz}
                        onChange={e => setSearchQuiz(e.target.value)}
                        className="mb-4"
                      />
                      <div className="h-96 max-h-[80vh] overflow-y-auto space-y-2 mb-4">
                        {quizList
                          .filter(q =>
                            q.assignment.toLowerCase().includes(searchQuiz.toLowerCase()) ||
                            q.question.toLowerCase().includes(searchQuiz.toLowerCase())
                          )
                          .map(quiz => (
                            <div
                              key={quiz._id}
                              className={`w-full flex flex-col cursor-pointer items-start gap-1 border-2 p-2 rounded-md ${field.value === quiz._id ? "border-blue-500" : " border-gray-400"}`}
                              onClick={() => {
                                field.onChange(quiz._id)
                                setOpenQuizDialog(false)
                              }}
                            >
                              <span className="font-semibold text-sm">{quiz.assignment}</span>
                              <span className="text-xs text-muted-foreground text-left">{quiz.question}</span>
                            </div>
                          ))}
                        {quizList.length === 0 && (
                          <div className="px-4 py-2 text-muted-foreground">Không có quiz nào</div>
                        )}
                      </div>
                      <Button
                        type="button"
                        variant="secondary"
                        className="w-full"
                        onClick={() => setOpenCreateQuizDialog(true)}
                      >
                        + Thêm quiz mới
                      </Button>
                    </DialogContent>
                  </Dialog>
                  {/* Dialog thêm quiz mới */}
                  <Dialog open={openCreateQuizDialog} onOpenChange={setOpenCreateQuizDialog}>
                    <DialogContent className="max-w-lg">
                      <DialogHeader>
                        <DialogTitle>Thêm mới Quiz</DialogTitle>
                      </DialogHeader>
                      <FormCreateQuiz
                        callback={() => {
                          getQuizList().then(res => setQuizList(res.data || []))
                          setOpenCreateQuizDialog(false)
                        }}
                      />
                    </DialogContent>
                  </Dialog>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}