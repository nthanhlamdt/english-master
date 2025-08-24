'use client'

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Input } from "@/components/ui/input"
import { DialogImageToMedia } from "../dialog"
import { useState } from "react"
import { ImageData, VocabularyTopic } from "@/types"
import Image from "next/image"
import { Trash2 } from "lucide-react"
import { updateVocabularyTopic } from "@/lib/apis/api"
import { toast } from "react-toastify"
import { Button } from "@/components/ui/button"

// Schema validation
const schema = z.object({
  name: z.string().min(2, "Tên chủ đề phải có ít nhất 2 ký tự"),
  image: z.string().min(1, "Ảnh chủ đề không được để trống")
})

type FormData = z.infer<typeof schema>

interface FormUpdateVocabularyTopicProps {
  setIsLoading: (isLoading: boolean) => void
  callback: () => void
  topic: VocabularyTopic
}

export default function FormUpdateVocabularyTopic({ setIsLoading, callback, topic }: FormUpdateVocabularyTopicProps) {
  const [url, setUrl] = useState(topic.image.url)

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: topic.name,
      image: topic.image._id
    }
  })

  const onSubmit = async (data: FormData) => {
    setIsLoading(true)
    await updateVocabularyTopic(topic._id, data)
      .then(() => {
        toast.success('Cập nhật chủ đề từ vựng thành công')
      })
      .catch((err) => toast.error('Lỗi: ' + err.response.data.message))
      .finally(() => {
        form.reset()
        setUrl("")
        setIsLoading(false)
        callback()
      })
  }

  return (
    <Form {...form}>
      <form id="form-update-vocabulary-topic" onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Tên chủ đề */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-medium">
                Tên chủ đề <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Nhập tên chủ đề..."
                  {...field}
                  className="h-12 text-base"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Ảnh chủ đề */}
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
      </form>
    </Form>
  )
}