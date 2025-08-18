import { WelcomeSection } from "@/components/common";
import { SpeakingTopic } from "@/components/features";
import { IStreakCardProps, IWelcomeContentProps, IButton, IDescription, IStatsOverview } from "@/types";
import { BookOpen, Clock, Play, Mic, Brain, Target } from "lucide-react";

export default function page() {
  const buttons: IButton[] = [
    { type: 'default', text: 'Bắt đầu luyện nói', icon: Play },
    { type: 'outline', text: 'Xem bài học', icon: BookOpen }
  ]

  const descriptions: IDescription[] = [
    {
      text: 'Luyện kỹ năng nói tiếng Anh với AI. Thực hành giao tiếp, phát âm và tự tin trong các tình huống thực tế.',
    }
  ]

  const streakCard: IStreakCardProps = {
    icon: "🗣️",
    title: "Tiến độ nói",
    value: 52,
    valueText: '52%',
    progress: 100,
    progressDescription: "Dự kiến hoàn thành: 3 tháng nữa",
    color: "from-orange-500 to-orange-400"
  }

  const welcomeContent: IWelcomeContentProps = {
    hightlightColor: "text-orange-600",
    Icon: Mic,
    title: "Luyện Nói",
    titleHighlight: "Tiếng Anh",
    badge: " Thực hành",
    badge2: "🗣️ Hoàn thành 52%",
    descriptions: descriptions,
    buttons: buttons,
    background: "from-orange-500 via-amber-500 to-yellow-200"
  }

  const statsOverview: IStatsOverview[] = [
    {
      title: "Bài luyện nói",
      value: "67",
      change: "+8 bài tuần này",
      Icon: BookOpen,
      color: "from-orange-500 to-orange-400",
    },
    {
      title: "Tình huống giao tiếp",
      value: "24",
      change: "5 tình huống mới",
      Icon: Brain,
      color: "from-amber-500 to-amber-400",
    },
    {
      title: "Độ lưu loát",
      value: "75%",
      change: "Cải thiện 8%",
      Icon: Target,
      color: "from-yellow-500 to-yellow-400",
    },
    {
      title: "Thời gian luyện",
      value: "38h",
      change: "Trung bình 1.3h/ngày",
      Icon: Clock,
      color: "from-red-500 to-red-400",
    },
  ]

  return (
    <>
      <WelcomeSection
        welcomeContent={welcomeContent}
        statsOverview={statsOverview}
        streakCard={streakCard}
      />

      <SpeakingTopic />
    </>
  )
}