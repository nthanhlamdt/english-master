import {
  Star,
  Play,
  Heart,
  Eye,
} from "lucide-react";
import Image from "next/image";

interface CardMovieProps {
  id: string;
  title: string;
  originalTitle?: string;
  description: string;
  poster: string;
  backdrop?: string;
  year: number;
  duration: string;
  rating: number;
  genre: string[];
  director: string;
  cast: string[];
  language: string;
  country: string;
  isWatched: boolean;
  isFavorite: boolean;
  isNew: boolean;
  isTrending: boolean;
  trailerUrl?: string;
  imdbRating?: number;
  rottenTomatoes?: number;
  metacritic?: number;
}

export default function CardMovie({
  title,
  poster,
  year,
  duration,
  rating,
  genre,
  isWatched,
  isFavorite,
  isNew,
  isTrending
}: CardMovieProps) {
  return (
    <div className="group cursor-pointer">
      <div className="space-y-2">
        {/* Thumbnail */}
        <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100">
          <Image
            src={poster}
            alt={title}
            fill
            className="object-cover transition-transform duration-200 group-hover:scale-105"
          />

          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <div className="bg-black/80 rounded-full p-2">
              <Play className="w-5 h-5 text-white fill-current" />
            </div>
          </div>

          {/* Duration Badge */}
          <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-1 py-0.5 rounded">
            {duration}
          </div>

          {/* Status Indicators */}
          <div className="absolute top-2 left-2 flex gap-1">
            {isNew && (
              <div className="bg-red-500 text-white text-xs px-1 py-0.5 rounded">
                NEW
              </div>
            )}
            {isTrending && (
              <div className="bg-orange-500 text-white text-xs px-1 py-0.5 rounded">
                HOT
              </div>
            )}
          </div>
        </div>

        {/* Info */}
        <div className="space-y-1">
          <h3 className="font-medium text-sm text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>

          <div className="flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 fill-current text-yellow-500" />
              <span>{rating}</span>
              <span>•</span>
              <span>{year}</span>
            </div>

            <div className="flex items-center gap-1">
              {isFavorite && <Heart className="w-3 h-3 text-red-500 fill-current" />}
              {isWatched && <Eye className="w-3 h-3 text-green-500" />}
            </div>
          </div>

          <div className="text-xs text-gray-500 line-clamp-1">
            {genre.slice(0, 2).join(", ")}
          </div>
        </div>
      </div>
    </div>
  );
}
