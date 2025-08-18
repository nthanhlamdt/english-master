import { WelcomeSection } from "@/components/common";
import { VocabularyTopic } from "@/components/features";
import { IStreakCardProps, IWelcomeContentProps, IButton, IDescription, IStatsOverview } from "@/types";
import { BookOpen, Clock, Play, Brain, Target, } from "lucide-react";

export default function page() {
  const buttons: IButton[] = [
    { type: 'default', text: 'Tiếp tục học từ vựng', icon: Play },
    { type: 'outline', text: 'Ôn tập từ vựng', icon: BookOpen }
  ]

  const descriptions: IDescription[] = [
    {
      text: 'Mở rộng vốn từ vựng tiếng Anh một cách có hệ thống. Học từ vựng theo chủ đề, ngữ cảnh và áp dụng vào thực tế.',
    }
  ]

  const streakCard: IStreakCardProps = {
    icon: "📚",
    title: "Tiến độ từ vựng",
    value: 78,
    valueText: '78%',
    progress: 100,
    progressDescription: "Dự kiến hoàn thành: 1 tháng nữa",
    color: "from-emerald-500 to-emerald-400"
  }

  const welcomeContent: IWelcomeContentProps = {
    hightlightColor: "text-emerald-600",
    Icon: BookOpen,
    title: "Học Từ Vựng",
    titleHighlight: "Tiếng Anh",
    badge: " Hệ thống",
    badge2: "📚 Hoàn thành 78%",
    descriptions: descriptions,
    buttons: buttons,
    background: "from-emerald-500 via-green-400 to-teal-200"
  }

  const statsOverview: IStatsOverview[] = [
    {
      title: "Từ vựng đã học",
      value: "1,245",
      change: "+45 từ tuần này",
      Icon: BookOpen,
      color: "from-emerald-500 to-emerald-400",
    },
    {
      title: "Chủ đề hoàn thành",
      value: "18/25",
      change: "3 chủ đề mới",
      Icon: Brain,
      color: "from-green-500 to-green-400",
    },
    {
      title: "Bài kiểm tra",
      value: "92%",
      change: "Điểm trung bình cao",
      Icon: Target,
      color: "from-teal-500 to-teal-400",
    },
    {
      title: "Thời gian học",
      value: "35h",
      change: "Trung bình 1.2h/ngày",
      Icon: Clock,
      color: "from-cyan-500 to-cyan-400",
    },
  ]

  return (
    <>
      <WelcomeSection
        welcomeContent={welcomeContent}
        statsOverview={statsOverview}
        streakCard={streakCard}
      />

      <VocabularyTopic />
    </>
  )
}