'us'
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ImageIcon } from "lucide-react";
import Image from "next/image";
import { ImageCard } from "./ImageCard";
import { ImageData } from "@/types";
import { AddImageCard } from "./AddImageCard";
import useMedia from "@/hooks/useMedia";
import { useEffect, useState } from "react";

interface DialogImageToMediaProps {
  onSelect: (image: ImageData) => void
}

export function DialogImageToMedia({ onSelect }: DialogImageToMediaProps) {
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null)
  const { images, getMedias } = useMedia()

  useEffect(() => {
    getMedias()
  }, [getMedias])

  const handleSelect = () => {
    if (selectedImage) {
      onSelect(selectedImage)
    }
    setSelectedImage(null)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full" variant="outline">
          <ImageIcon className="w-4 h-4" />
          Chọn ảnh từ thư viện
        </Button>
      </DialogTrigger>

      <DialogContent className="w-[800px] !max-w-[95vw] !max-h-[80%] flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2"><ImageIcon />Chọn hình ảnh từ thư viện</DialogTitle>
          <DialogDescription>Chọn hình ảnh từ thư viện media hoặc tải lên hình ảnh mới</DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-4 overflow-y-auto flex-1 p-2">
          {/* Add new image card */}
          <AddImageCard onLoad={getMedias} />
          {images.map((image) => (
            <ImageCard
              key={image._id}
              image={image}
              isSelected={selectedImage?._id === image._id}
              onSelect={(img) => setSelectedImage(img)}
              onDeselect={(img) => setSelectedImage(img)}
            />
          ))}
        </div>

        <DialogFooter>
          {selectedImage && (
            <div className="border-t pt-4 mt-4 w-full">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-3">
                  <Image
                    src={selectedImage.url}
                    alt="Selected"
                    className="w-16 h-16 object-cover rounded"
                    width={selectedImage.width}
                    height={selectedImage.height}
                  />
                  <div>
                    <p className="font-medium">Ảnh đã chọn</p>
                    <p className="text-sm text-gray-600">
                      {selectedImage.width} × {selectedImage.height} • {selectedImage.format.toUpperCase()}
                    </p>
                  </div>
                </div>
                <DialogClose>
                  <Button onClick={handleSelect}>
                    Sử dụng ảnh này
                  </Button>
                </DialogClose>
              </div>
            </div>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
