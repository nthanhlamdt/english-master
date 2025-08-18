import {
  Play,
  Heart,
  Music,
  Headphones,
} from "lucide-react";
import Image from "next/image";

interface CardMusicProps {
  id: string;
  title: string;
  artist: string;
  album?: string;
  duration: string;
  thumbnail: string;
  genre: string[];
  releaseYear: number;
  isLiked: boolean;
  isPlaying: boolean;
  isNew: boolean;
  isTrending: boolean;
  views?: number;
  explicit?: boolean;
  featured?: string[];
}

export function CardMusic({
  title,
  artist,
  album,
  duration,
  thumbnail,
  genre,
  releaseYear,
  isLiked,
  isPlaying,
  isNew,
  isTrending,
  views,
  explicit,
}: CardMusicProps) {
  return (
    <div className="group cursor-pointer">
      <div className="space-y-3">
        {/* Thumbnail */}
        <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover transition-transform duration-200 group-hover:scale-105"
          />

          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <div className="bg-black/80 rounded-full p-3">
              <Play className="w-6 h-6 text-white fill-current" />
            </div>
          </div>

          {/* Status Badges */}
          <div className="absolute top-2 left-2 flex gap-1">
            {isNew && (
              <div className="bg-green-500 text-white text-xs px-1 py-0.5 rounded">
                NEW
              </div>
            )}
            {isTrending && (
              <div className="bg-orange-500 text-white text-xs px-1 py-0.5 rounded">
                HOT
              </div>
            )}
            {explicit && (
              <div className="bg-gray-800 text-white text-xs px-1 py-0.5 rounded">
                E
              </div>
            )}
          </div>

          {/* Duration Badge */}
          <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-1 py-0.5 rounded">
            {duration}
          </div>

          {/* Playing Indicator */}
          {isPlaying && (
            <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-1 py-0.5 rounded flex items-center gap-1">
              <div className="w-1 h-1 bg-white rounded-full animate-pulse"></div>
              LIVE
            </div>
          )}
        </div>

        {/* Info */}
        <div className="space-y-1">
          <h3 className="font-medium text-sm text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>

          <div className="flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <Music className="w-3 h-3" />
              <span>{artist}</span>
              {album && (
                <>
                  <span>•</span>
                  <span className="line-clamp-1">{album}</span>
                </>
              )}
            </div>

            <div className="flex items-center gap-1">
              {isLiked && <Heart className="w-3 h-3 text-red-500 fill-current" />}
              {isPlaying && <Headphones className="w-3 h-3 text-green-500" />}
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-gray-400">
            <div className="flex items-center gap-1">
              <span>{releaseYear}</span>
              {genre.length > 0 && (
                <>
                  <span>•</span>
                  <span>{genre[0]}</span>
                </>
              )}
            </div>

            {views && (
              <div className="flex items-center gap-1">
                <span>{views.toLocaleString()} views</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
