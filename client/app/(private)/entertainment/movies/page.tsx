import { WelcomeSection } from "@/components/common";
import { Movies } from "@/components/features";
import { IStreakCardProps, IWelcomeContentProps, IButton, IDescription, IStatsOverview } from "@/types";
import { Clock, Play, Film, Brain, Target } from "lucide-react";

export default function page() {
  const buttons: IButton[] = [
    { type: 'default', text: 'Xem phim mới', icon: Play },
    { type: 'outline', text: 'Xem lại phim yêu thích', icon: Film }
  ]

  const descriptions: IDescription[] = [
    {
      text: 'Học tiếng Anh qua phim với phụ đề thông minh. Từ phim hài đến phim kinh dị, nâng cao kỹ năng nghe và hiểu văn hóa.',
    }
  ]

  const streakCard: IStreakCardProps = {
    icon: "🎬",
    title: "Phim đã xem",
    value: 28,
    valueText: '28 bộ',
    progress: 100,
    progressDescription: "Mục tiêu: 50 phim trong năm",
    color: "from-red-500 to-red-400"
  }

  const welcomeContent: IWelcomeContentProps = {
    hightlightColor: "text-red-600",
    Icon: Film,
    title: "Học Tiếng Anh",
    titleHighlight: "Qua Phim",
    badge: " Giải trí",
    badge2: "🎬 Đã xem 28 phim",
    descriptions: descriptions,
    buttons: buttons,
    background: "from-red-500 via-rose-500 to-pink-200"
  }

  const statsOverview: IStatsOverview[] = [
    {
      title: "Phim đã xem",
      value: "28",
      change: "+3 phim tháng này",
      Icon: Film,
      color: "from-red-500 to-red-400",
    },
    {
      title: "Thời gian xem",
      value: "156h",
      change: "Trung bình 5.2h/tuần",
      Icon: Clock,
      color: "from-rose-500 to-rose-400",
    },
    {
      title: "Từ vựng học được",
      value: "1,234",
      change: "45 từ mới",
      Icon: Brain,
      color: "from-pink-500 to-pink-400",
    },
    {
      title: "Độ hiểu",
      value: "78%",
      change: "Cải thiện 12%",
      Icon: Target,
      color: "from-fuchsia-500 to-fuchsia-400",
    },
  ]

  return (
    <>
      <WelcomeSection
        welcomeContent={welcomeContent}
        statsOverview={statsOverview}
        streakCard={streakCard}
      />

      <Movies />
    </>
  )
}