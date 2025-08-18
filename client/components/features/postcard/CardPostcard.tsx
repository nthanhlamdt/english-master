import { Button } from "@/components/ui/button";
import {
  Heart,
  Share2,
  Bookmark,
  MessageCircle,
  Eye,
  Calendar,
  MapPin,
  Download,
  Sparkles,
  Star,
  Zap
} from "lucide-react";
import Image from "next/image";

interface CardPostcardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  author: {
    name: string;
    avatar: string;
    verified?: boolean;
  };
  location?: string;
  tags: string[];
  likes: number;
  comments: number;
  views: number;
  downloads: number;
  createdAt: string;
  isLiked: boolean;
  isSaved: boolean;
  isNew: boolean;
  isTrending: boolean;
  isFeatured: boolean;
  category: string;
}

export default function CardPostcard({
  title,
  image,
  author,
  location,
  likes,
  comments,
  views,
  downloads,
  createdAt,
  isLiked,
  isSaved,
  isNew,
  isTrending,
  isFeatured,
  category
}: CardPostcardProps) {
  return (
    <div className="group relative">

      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-gray-200 transition-all duration-500 hover:shadow-2xl hover:shadow-gray-200/50">
        {/* Main Image */}
        <div className="relative aspect-[5/4] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-110"
          />

          {/* Animated Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

          {/* Floating Badges */}
          <div className="absolute top-4 left-4 flex gap-2">
            {isNew && (
              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs px-3 py-1.5 rounded-full font-semibold shadow-lg flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                NEW
              </div>
            )}
            {isTrending && (
              <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs px-3 py-1.5 rounded-full font-semibold shadow-lg flex items-center gap-1">
                <Zap className="w-3 h-3" />
                HOT
              </div>
            )}
            {isFeatured && (
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-3 py-1.5 rounded-full font-semibold shadow-lg flex items-center gap-1">
                <Star className="w-3 h-3" />
                FEATURED
              </div>
            )}
          </div>

          {/* Floating Action Buttons */}
          <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
            <Button size="sm" className="h-9 w-9 p-0 bg-white/90 hover:bg-white shadow-lg backdrop-blur-sm">
              <Heart className={`w-4 h-4 ${isLiked ? 'text-red-500 fill-current' : 'text-gray-600'}`} />
            </Button>
            <Button size="sm" className="h-9 w-9 p-0 bg-white/90 hover:bg-white shadow-lg backdrop-blur-sm">
              <Bookmark className={`w-4 h-4 ${isSaved ? 'text-blue-500 fill-current' : 'text-gray-600'}`} />
            </Button>
            <Button size="sm" className="h-9 w-9 p-0 bg-white/90 hover:bg-white shadow-lg backdrop-blur-sm">
              <Share2 className="w-4 h-4 text-gray-600" />
            </Button>
          </div>

          {/* Bottom Info Panel */}
          <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
            <div className="flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/20 backdrop-blur-sm">
                  <Image
                    src={author.avatar}
                    alt={author.name}
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold">{author.name}</span>
                    {author.verified && (
                      <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    )}
                  </div>
                  <div className="text-xs opacity-80">{likes.toLocaleString()} likes</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          <div className="space-y-4">
            {/* Title & Category */}
            <div className="space-y-2">
              <h3 className="font-bold text-lg text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                {title}
              </h3>
              <div className="flex items-center gap-3">
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                  {category}
                </span>
                {location && (
                  <div className="flex items-center gap-1 text-gray-500">
                    <MapPin className="w-3 h-3" />
                    <span className="text-xs">{location}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Stats Row */}
            <div className="flex items-center justify-between pt-2 border-t border-gray-100">
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <Eye className="w-3 h-3" />
                  <span>{views.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle className="w-3 h-3" />
                  <span>{comments}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Download className="w-3 h-3" />
                  <span>{downloads}</span>
                </div>
              </div>

              <div className="flex items-center gap-1 text-xs text-gray-400">
                <Calendar className="w-3 h-3" />
                <span>{createdAt}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
