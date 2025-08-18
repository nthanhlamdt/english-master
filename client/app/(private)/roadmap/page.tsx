import { WelcomeSection } from "@/components/common";
import { Roadmap } from "@/components/features";
import { IStatsOverview, IStreakCardProps, IWelcomeContentProps } from "@/types";
import { BookOpen, ChartColumn, Clock, Flame, Goal, LucideIcon, Map, Play } from "lucide-react";

export default function page() {
  const buttons: { type: 'outline' | 'default'; text: string; icon: LucideIcon }[] = [
    { type: 'default', text: 'Tiếp tục học', icon: Play },
    { type: 'outline', text: 'Điều chỉnh mục tiêu', icon: Goal }
  ]

  const descriptions: { text: string, textHighlight?: string | '' }[] = [
    {
      text: 'Lộ trình học được thiết kế riêng cho bạn, giúp bạn tiến bộ từng bước một cách hiệu quả nhất. Hãy theo dõi tiến trình và đạt được mục tiêu của mình!',
    }
  ]

  const streakCard: IStreakCardProps = {
    icon: "🎯",
    title: "Phần trăm hoàn thành",
    value: 42,
    valueText: '42%',
    progress: 100,
    progressDescription: "Dự kiến hoàn thành: 3 tháng nữa",
    color: "from-emerald-500/80 via-teal-500/70 to-cyan-500/80"
  }

  const welcomeContent: IWelcomeContentProps = {
    hightlightColor: "text-yellow-300",
    Icon: Map,
    title: "Lộ trình học tiếng Anh",
    titleHighlight: "",
    badge: " Cá nhân hóa",
    badge2: "🎯 Hoàn thành 42%",
    descriptions: descriptions,
    buttons: buttons,
    background: "from-emerald-500/80 via-teal-500/70 to-cyan-500/80"
  }

  const statsOverview: IStatsOverview[] = [
    {
      title: "Tiến trình tổng thể",
      value: "42%",
      change: "+5% so với tuần trước",
      Icon: ChartColumn,
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "Bài học đã hoàn thành",
      value: "15/50",
      change: "3 bài học tuần này",
      Icon: Flame,
      color: "from-red-500 to-pink-500",
    },
    {
      title: "Chuỗi học tập",
      value: "7 ngày",
      change: "Kỷ lục cá nhân",
      Icon: BookOpen,
      color: "from-blue-500 to-indigo-500",
    },
    {
      title: "Thời gian học",
      value: "28h",
      change: "Intermediate",
      Icon: Clock,
      color: "from-purple-500 to-violet-500",
    },
  ]

  return (
    <>
      <WelcomeSection
        welcomeContent={welcomeContent}
        statsOverview={statsOverview}
        streakCard={streakCard}
      />

      <Roadmap />
    </>
  )
}
