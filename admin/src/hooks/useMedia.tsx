// src/hooks/useMedia.tsx (rút gọn)
'use client'
import { getMediaList, uploadImageSingle } from "@/lib/apis/api"
import { ImageData } from "@/types"
import { useCallback, useState } from "react"
import { toast } from "react-toastify"

export default function useMedia() {
  const [images, setImages] = useState<ImageData[]>([])
  const [loading, setLoading] = useState(false)

  const getMedias = useCallback(async () => {
    setLoading(true)
    await getMediaList()
      .then((res) => {
        setImages(res.data as ImageData[])
      })
      .catch((err) => {
        toast.error(err.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  const uploadImage = useCallback(async (file: File) => {
    setLoading(true)
    await uploadImageSingle(file)
      .then((res) => {
        toast.success('Tải lên thành công')
        return res.data
      })
      .catch((err) => {
        toast.error(err.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return { images, loading, getMedias, uploadImage, setImages }
}