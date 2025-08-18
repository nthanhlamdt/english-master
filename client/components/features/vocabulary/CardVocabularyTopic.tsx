import { EnhancedPopover, LockedContentPopover } from "@/components/common";
import { Card } from "@/components/ui/card";
import { Popover } from "@/components/ui/popover";
import { PopoverTrigger } from "@radix-ui/react-popover";
import { Star } from "lucide-react";
import Image from "next/image";

interface CardVocabularyTopicProps {
  _id: string;
  name: string;
  url: string;
  progress: number;
  isUnlocked: boolean;
  isCompleted: boolean;
}

export default function CardVocabularyTopic({
  _id,
  name,
  url,
  progress,
  isCompleted,
  isUnlocked
}: CardVocabularyTopicProps) {
  const getCardStyle = () => {
    if (isCompleted) return "bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 border-green-300 shadow-xl hover:shadow-2xl";
    if (isUnlocked) return "bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 border-blue-300 shadow-lg hover:shadow-xl";
    return "bg-gradient-to-br from-gray-50 via-slate-50 to-zinc-50 border-gray-300 opacity-75";
  };

  const getProgressColor = () => {
    if (progress >= 100) return "from-green-400 to-emerald-500";
    if (progress >= 70) return "from-blue-400 to-indigo-500";
    if (progress >= 40) return "from-yellow-400 to-orange-500";
    return "from-red-400 to-pink-500";
  };

  return (
    <div className="w-full cursor-pointer">
      <Popover>
        <div className='text-center group'>
          <PopoverTrigger className='w-full'>
            <Card className={`relative transition-all duration-500 ease-out p-4 ${getCardStyle()} hover:scale-105 overflow-hidden`}>
              {/* Animated Background */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full blur-xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-lg animate-pulse delay-500"></div>
              </div>

              {/* Main Content */}
              <div className="relative z-10">

                {/* Image Container */}
                <div className='relative mb-6'>
                  <div className='relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-2 shadow-2xl border border-gray-100'>
                    <div className="relative overflow-hidden rounded-2xl">
                      <Image
                        src={url}
                        alt={name}
                        width={240}
                        height={240}
                        className="w-full aspect-square object-cover object-center transition-all duration-500 group-hover:scale-105"
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h4 className={`font-bold text-xl mb-4 transition-all duration-300 ${isUnlocked ? 'text-gray-800 group-hover:text-blue-600' : 'text-gray-500'
                  }`}>
                  {name}
                </h4>

                {/* Progress Section */}
                <div className="space-y-4">
                  <div className="relative">
                    <div className="h-4 bg-gray-200 rounded-full overflow-hidden shadow-inner">
                      <div className={`h-full bg-gradient-to-r ${getProgressColor()} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${progress}%` }}>
                      </div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs font-bold text-white drop-shadow-lg">
                        {Math.round(progress)}%
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Tiến độ học tập</span>
                    <span className="font-bold text-gray-800">{Math.round(progress)}%</span>
                  </div>
                </div>

                {/* Star Rating */}
                <Star className={`absolute -top-1 -right-1 ${progress === 100 ? 'fill-yellow-400 text-yellow-500 animate-pulse' : 'fill-gray-300 text-gray-400'
                  }`} />
              </div>
            </Card>
          </PopoverTrigger>

          {isUnlocked ? (
            <EnhancedPopover
              href={`/study/vocabulary/${_id}`}
              skill="vocabulary"
            />
          ) : (
            <LockedContentPopover />
          )}
        </div>
      </Popover>
    </div>
  );
}