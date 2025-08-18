import { WelcomeSection } from "@/components/common";
import { ReadingTopic } from "@/components/features";
import { IStreakCardProps, IWelcomeContentProps, IButton, IDescription, IStatsOverview } from "@/types";
import { BookOpen, Clock, Play, BookText, Brain, Target } from "lucide-react";

export default function page() {
  const buttons: IButton[] = [
    { type: 'default', text: 'Bắt đầu đọc', icon: Play },
    { type: 'outline', text: 'Xem bài đọc', icon: BookOpen }
  ]

  const descriptions: IDescription[] = [
    {
      text: 'Luyện kỹ năng đọc hiểu tiếng Anh với các bài đọc đa dạng. Từ truyện ngắn đến bài báo, nâng cao khả năng đọc hiểu.',
    }
  ]

  const streakCard: IStreakCardProps = {
    icon: "📖",
    title: "Tiến độ đọc",
    value: 68,
    valueText: '68%',
    progress: 100,
    progressDescription: "Dự kiến hoàn thành: 2 tháng nữa",
    color: "from-indigo-500 to-indigo-400"
  }

  const welcomeContent: IWelcomeContentProps = {
    hightlightColor: "text-indigo-600",
    Icon: BookText,
    title: "Luyện Đọc",
    titleHighlight: "Tiếng Anh",
    badge: " Đa dạng",
    badge2: "📖 Hoàn thành 68%",
    descriptions: descriptions,
    buttons: buttons,
    background: "from-indigo-500 via-blue-500 to-cyan-200"
  }

  const statsOverview: IStatsOverview[] = [
    {
      title: "Bài đọc hoàn thành",
      value: "156",
      change: "+12 bài tuần này",
      Icon: BookOpen,
      color: "from-indigo-500 to-indigo-400",
    },
    {
      title: "Từ vựng mới",
      value: "892",
      change: "45 từ mới",
      Icon: Brain,
      color: "from-blue-500 to-blue-400",
    },
    {
      title: "Tốc độ đọc",
      value: "180 wpm",
      change: "Tăng 15 wpm",
      Icon: Target,
      color: "from-cyan-500 to-cyan-400",
    },
    {
      title: "Thời gian đọc",
      value: "45h",
      change: "Trung bình 1.5h/ngày",
      Icon: Clock,
      color: "from-sky-500 to-sky-400",
    },
  ]

  return (
    <>
      <WelcomeSection
        welcomeContent={welcomeContent}
        statsOverview={statsOverview}
        streakCard={streakCard}
      />

      <ReadingTopic />
    </>
  )
}