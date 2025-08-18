import { EnhancedPopover, LockedContentPopover } from "@/components/common";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Popover, PopoverTrigger } from "@/components/ui/popover";
import { Progress } from "@/components/ui/progress";
import {
  Star,
  Clock,
  Target,
  PenTool,
} from "lucide-react";

interface CardWritingTopicProps {
  _id: string,
  title: string;
  description: string;
  level: "A1" | "A2" | "B1" | "B2" | "C1";
  duration: string;
  isUnlocked: boolean;
  isCompleted: boolean;
  completed: number;
  total: number;
}

export default function CardWritingTopic({
  _id,
  title,
  description,
  level,
  duration,
  isUnlocked,
  isCompleted,
  completed,
  total,
}: CardWritingTopicProps) {
  const progress = (completed / total) * 100;

  const getCardStyle = () => {
    if (isCompleted) return "bg-gradient-to-br from-teal-50 border-2 via-teal-50 to-cyan-50 border-teal-300 shadow-xl hover:shadow-2xl";
    if (isUnlocked && !isCompleted) return "bg-white border-2 border-teal-300 shadow-xl hover:shadow-2xl";
    return "bg-gradient-to-br from-gray-50 via-slate-50 to-zinc-50 border-gray-300 opacity-75";
  };

  const getLevelColor = () => {
    switch (level) {
      case "A1": return "bg-green-100 text-green-800 border-green-200";
      case "A2": return "bg-blue-100 text-blue-800 border-blue-200";
      case "B1": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "B2": return "bg-orange-100 text-orange-800 border-orange-200";
      case "C1": return "bg-red-100 text-red-800 border-red-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getIconColor = () => {
    if (isCompleted) return "bg-emerald-100 text-emerald-600";
    if (isUnlocked && !isCompleted) return "bg-teal-100 text-teal-600";
    return "bg-gray-100 text-gray-400";
  };

  const getTitleColor = () => {
    if (isCompleted) return "text-gray-800 group-hover:text-emerald-600";
    if (isUnlocked && !isCompleted) return "text-gray-800 group-hover:text-teal-600";
    return "text-gray-500";
  };

  const getDescriptionColor = () => {
    if (isCompleted) return "text-gray-600";
    if (isUnlocked && !isCompleted) return "text-gray-600";
    return "text-gray-500";
  };

  return (
    <Popover>
      <PopoverTrigger className='w-full text-center group'>
        <Card className={`relative flex flex-col h-full justify-between transition-all duration-500 ease-out p-6 ${getCardStyle()} hover:scale-105 overflow-hidden`}>
          <CardHeader className="relative z-10 p-0">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl">✍️</span>
                <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getLevelColor()}`}>
                  {level}
                </span>
              </div>

              <div className="flex items-center gap-1">
                <Star className={`w-5 h-5 ${completed === total ? 'fill-yellow-400 text-yellow-500 animate-pulse' : 'fill-gray-300 text-gray-400'}`} />
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-0">
            <CardTitle className={`font-bold text-lg mb-2 transition-all duration-300 ${getTitleColor()}`}>{title}</CardTitle>
            <CardDescription className={`text-sm mb-4 line-clamp-2 ${getDescriptionColor()}`}>{description}</CardDescription>

            {/* 3 PenTool Icons */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${getIconColor()}`}>
                <PenTool className="w-4 h-4" />
              </div>
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${getIconColor()}`}>
                <PenTool className="w-4 h-4" />
              </div>
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${getIconColor()}`}>
                <PenTool className="w-4 h-4" />
              </div>
            </div>
          </CardContent>

          <CardFooter className="p-0 space-y-3 flex flex-col">
            <div className="flex items-center justify-between w-full mb-4 text-xs">
              <div className="flex items-center gap-1 text-gray-600">
                <Clock className="w-3 h-3" />
                <span>{duration}</span>
              </div>
              <div className="flex items-center gap-1 text-gray-600">
                <Target className="w-3 h-3" />
                <span>{completed}/{total}</span>
              </div>
            </div>

            <Progress value={progress} className="bg-teal-100! [&>div]:bg-teal-500!" />

            <div className="flex justify-between text-xs w-full">
              <span className="text-gray-600">Tiến độ viết</span>
              <span className="font-bold text-gray-800">{Math.round(progress)}%</span>
            </div>
          </CardFooter>
        </Card>
      </PopoverTrigger>

      {isUnlocked ? (
        <EnhancedPopover
          href={`/skills/writing/lesson/${_id}`}
          skill="writing"
        />
      ) : (
        <LockedContentPopover />
      )}
    </Popover>
  );
}
