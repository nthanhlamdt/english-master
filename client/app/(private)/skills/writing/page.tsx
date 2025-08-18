import { WelcomeSection } from "@/components/common";
import { WritingTopic } from "@/components/features";
import { IStreakCardProps, IWelcomeContentProps, IButton, IDescription, IStatsOverview } from "@/types";
import { BookOpen, Clock, Play, PenTool, Brain, Target } from "lucide-react";

export default function page() {
  const buttons: IButton[] = [
    { type: 'default', text: 'Bắt đầu viết', icon: Play },
    { type: 'outline', text: 'Xem bài viết', icon: BookOpen }
  ]

  const descriptions: IDescription[] = [
    {
      text: 'Luyện kỹ năng viết tiếng Anh từ cơ bản đến nâng cao. Viết email, essay, và các loại văn bản khác nhau.',
    }
  ]

  const streakCard: IStreakCardProps = {
    icon: "✍️",
    title: "Tiến độ viết",
    value: 41,
    valueText: '41%',
    progress: 100,
    progressDescription: "Dự kiến hoàn thành: 4 tháng nữa",
    color: "from-teal-500 to-teal-400"
  }

  const welcomeContent: IWelcomeContentProps = {
    hightlightColor: "text-teal-600",
    Icon: PenTool,
    title: "Luyện Viết",
    titleHighlight: "Tiếng Anh",
    badge: " Sáng tạo",
    badge2: "✍️ Hoàn thành 41%",
    descriptions: descriptions,
    buttons: buttons,
    background: "from-teal-500 via-cyan-500 to-blue-200"
  }

  const statsOverview: IStatsOverview[] = [
    {
      title: "Bài viết hoàn thành",
      value: "89",
      change: "+6 bài tuần này",
      Icon: BookOpen,
      color: "from-teal-500 to-teal-400",
    },
    {
      title: "Loại văn bản",
      value: "12",
      change: "3 loại mới",
      Icon: Brain,
      color: "from-cyan-500 to-cyan-400",
    },
    {
      title: "Điểm trung bình",
      value: "8.2/10",
      change: "Cải thiện 0.5 điểm",
      Icon: Target,
      color: "from-blue-500 to-blue-400",
    },
    {
      title: "Thời gian viết",
      value: "32h",
      change: "Trung bình 1.1h/ngày",
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

      <WritingTopic />
    </>
  )
}