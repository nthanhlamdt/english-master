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
import { createVocabularyTopic } from "@/lib/apis/api"
import { toast } from "react-toastify"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

// Schema validation
const schema = z.object({
  name: z.string().min(2, "Tên chủ đề phải có ít nhất 2 ký tự"),
  image: z.string().min(1, "Ảnh chủ đề không được để trống")
})

type FormData = z.infer<typeof schema>

interface FormCreateVocabularyTopicProps {
  setIsLoading: (isLoading: boolean) => void
}

export default function FormCreateVocabularyTopic({ setIsLoading }: FormCreateVocabularyTopicProps) {
  const [url, setUrl] = useState("")
  const router = useRouter()

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      image: ""
    }
  })

  const onSubmit = async (data: FormData) => {
    setIsLoading(true)
    await createVocabularyTopic(data)
      .then((res) => {
        toast.success('Đã tạo chủ đề ' + res?.data?.name)
        router.refresh()
      })
      .catch((err) => toast.error('Lỗi: ' + err.response.data.message))
      .finally(() => {
        form.reset()
        setUrl("")
        setIsLoading(false)
      })
  }

  return (
    <Form {...form}>
      <form id="form-create-vocabulary-topic" onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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