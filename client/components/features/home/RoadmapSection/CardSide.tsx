import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Clock, Monitor, UsersRound } from "lucide-react";

interface Props {
  index: number
  week: number
  lesson: number
}

export default function CardSide({ index, week, lesson }: Props) {
  return (
    <div className={`w-full mx-0 sm:mx-2 lg:mx-0 relative overflow-visible rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 bg-white/80 dark:bg-[var(--background)]/80 shadow-xl md:shadow-2xl backdrop-blur-lg border border-[var(--primary)]/10 ${index % 2 == 0 ? 'lg:order-1' : 'lg:order-2'} transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_8px_32px_0_rgba(74,144,226,0.25)]`}>
      <div className="flex items-center justify-center gap-4 sm:gap-8 py-4 sm:py-6">
        <div className="flex flex-1 flex-col h-full gap-2 items-center justify-center bg-gradient-to-br from-[var(--primary)]/10 to-[var(--secondary)]/10 border-2 border-[var(--primary)]/20 rounded-xl md:rounded-2xl p-3 sm:p-5 md:p-6">
          <Monitor size={32} className="text-[var(--primary)] sm:size-10 md:size-12" />
          <span className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[var(--primary)] drop-shadow">{week || 1}</span>
          <span className="text-xs sm:text-base font-bold text-gray-500">Tuần</span>
        </div>
        <div className="flex flex-1 flex-col h-full gap-2 items-center justify-center bg-gradient-to-br from-[var(--accent)]/10 to-[var(--secondary)]/10 border-2 border-[var(--accent)]/20 rounded-xl md:rounded-2xl p-3 sm:p-5 md:p-6">
          <BookOpen size={32} className="text-[var(--accent)] sm:size-10 md:size-12" />
          <h3 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[var(--accent)] drop-shadow">{lesson || 1}</h3>
          <span className="text-xs sm:text-base font-bold text-gray-500">Bài học</span>
        </div>
      </div>
      <Button className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white text-base sm:text-lg font-bold py-2 sm:py-3 rounded-lg sm:rounded-xl shadow-lg hover:from-[var(--secondary)] hover:to-[var(--primary)] transition-all duration-300">Bắt đầu học ngay <ArrowRight size={18} className="sm:size-5" /></Button>
      <hr className="border-gray-200 my-4 sm:my-6" />
      <div className="flex items-center justify-center gap-4 sm:gap-8">
        <span className="flex items-center gap-2 text-xs sm:text-base text-gray-400"><Clock /> Học linh hoạt</span>
        <span className="flex items-center gap-2 text-xs sm:text-base text-gray-400"><UsersRound /> Hỗ trợ 24/7</span>
      </div>
    </div>
  )
}
