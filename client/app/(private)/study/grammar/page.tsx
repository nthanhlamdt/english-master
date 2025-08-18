import { WelcomeSection } from "@/components/common";
import { GrammarLessons } from "@/components/features";
import { grammarLessonData } from "@/mock/data";
import { IStreakCardProps, IWelcomeContentProps, IButton, IDescription, IStatsOverview } from "@/types";
import { BookOpen, Clock, Play, Brain, Target, FileText } from "lucide-react";

export default function page() {
  const buttons: IButton[] = [
    { type: 'default', text: 'Tiếp tục học ngữ pháp', icon: Play },
    { type: 'outline', text: 'Xem lại bài học', icon: BookOpen }
  ]

  const descriptions: IDescription[] = [
    {
      text: 'Học ngữ pháp tiếng Anh một cách có hệ thống từ cơ bản đến nâng cao. Mỗi bài học được thiết kế để giúp bạn hiểu sâu và áp dụng thực tế.',
    }
  ]

  const streakCard: IStreakCardProps = {
    icon: "📚",
    title: "Tiến độ ngữ pháp",
    value: 65,
    valueText: '65%',
    progress: 100,
    progressDescription: "Dự kiến hoàn thành: 2 tháng nữa",
    color: "from-orange-400 to-orange-300"
  }

  const welcomeContent: IWelcomeContentProps = {
    hightlightColor: "text-slate-200",
    Icon: FileText,
    title: "Học Ngữ Pháp",
    titleHighlight: "Tiếng Anh",
    badge: " Hệ thống",
    badge2: "📚 Hoàn thành 65%",
    descriptions: descriptions,
    buttons: buttons,
    background: "from-orange-400 via-amber-400 to-yellow-200"
  }

  const statsOverview: IStatsOverview[] = [
    {
      title: "Bài học ngữ pháp",
      value: "23/35",
      change: "+3 bài tuần này",
      Icon: BookOpen,
      color: "from-indigo-600 to-indigo-700",
    },
    {
      title: "Quy tắc đã học",
      value: "45",
      change: "8 quy tắc mới",
      Icon: Brain,
      color: "from-purple-600 to-purple-700",
    },
    {
      title: "Bài tập hoàn thành",
      value: "156",
      change: "Điểm trung bình: 8.5/10",
      Icon: Target,
      color: "from-emerald-600 to-emerald-700",
    },
    {
      title: "Thời gian học",
      value: "42h",
      change: "Trung bình 1.5h/ngày",
      Icon: Clock,
      color: "from-amber-600 to-amber-700",
    },
  ]

  return (
    <>
      <WelcomeSection
        welcomeContent={welcomeContent}
        statsOverview={statsOverview}
        streakCard={streakCard}
      />
      <GrammarLessons lessons={grammarLessonData} />
    </>
  )
}