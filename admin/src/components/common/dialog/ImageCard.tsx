import { Card, CardContent } from "@/components/ui/card"
import { ImageData } from "@/types/media"
import { Check } from "lucide-react"
import Image from "next/image"

interface ImageCardProps {
  image: ImageData
  isSelected?: boolean
  onSelect?: (image: ImageData) => void
  onDeselect?: (image: ImageData) => void
}

export function ImageCard({ image, isSelected = false, onSelect, onDeselect }: ImageCardProps) {
  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  const handleClick = () => {
    if (isSelected && onDeselect) {
      onDeselect(image)
    } else if (!isSelected && onSelect) {
      onSelect(image)
    }
  }

  return (
    <Card
      className={`relative cursor-pointer transition-all duration-200 hover:shadow-lg ${isSelected ? 'ring-2 ring-blue-500 shadow-lg' : 'hover:scale-105'}`}
      onClick={handleClick}
    >
      <CardContent>
        {/* Image */}
        <div className="relative aspect-square overflow-hidden rounded-lg mb-3">
          <Image
            src={image.url}
            alt={`Image ${image._id}`}
            className="w-full h-full object-cover"
            width={image.width}
            height={image.height}
            loading="lazy"
          />

          {/* Selection indicator */}
          {isSelected && (
            <div className="absolute top-2 right-2 bg-blue-500 text-white rounded-full p-1">
              <Check className="w-4 h-4" />
            </div>
          )}
        </div>

        <div className="space-y-2">
          {/* Format and size */}
          <div className="flex items-center justify-between text-xs text-gray-600">
            <span className="uppercase font-medium">{image.format}</span>
            <span>{formatFileSize(image.size)}</span>
          </div>

          {/* Dimensions */}
          <div className="text-xs text-gray-500 text-center">
            {image.width} × {image.height}
          </div>

          {/* Date */}
          <div className="text-xs text-gray-400 text-center">
            {new Date(image.createdAt).toLocaleDateString('vi-VN')}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}