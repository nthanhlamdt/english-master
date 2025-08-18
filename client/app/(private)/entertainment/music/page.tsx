import { WelcomeSection } from "@/components/common";
import { Musics } from "@/components/features";
import { IStreakCardProps, IWelcomeContentProps, IButton, IDescription, IStatsOverview } from "@/types";
import { Clock, Play, Music, Brain, Target } from "lucide-react";

export default function page() {
  const buttons: IButton[] = [
    { type: 'default', text: 'Nghe nhạc mới', icon: Play },
    { type: 'outline', text: 'Xem lại bài hát yêu thích', icon: Music }
  ]

  const descriptions: IDescription[] = [
    {
      text: 'Học tiếng Anh qua âm nhạc với lyrics thông minh. Từ pop đến rock, nâng cao kỹ năng nghe và phát âm.',
    }
  ]

  const streakCard: IStreakCardProps = {
    icon: "🎵",
    title: "Bài hát đã nghe",
    value: 156,
    valueText: '156 bài',
    progress: 100,
    progressDescription: "Mục tiêu: 300 bài trong năm",
    color: "from-purple-500 to-purple-400"
  }

  const welcomeContent: IWelcomeContentProps = {
    hightlightColor: "text-purple-600",
    Icon: Music,
    title: "Học Tiếng Anh",
    titleHighlight: "Qua Âm Nhạc",
    badge: " Giải trí",
    badge2: "🎵 Đã nghe 156 bài",
    descriptions: descriptions,
    buttons: buttons,
    background: "from-purple-500 via-violet-500 to-indigo-200"
  }

  const statsOverview: IStatsOverview[] = [
    {
      title: "Bài hát đã nghe",
      value: "156",
      change: "+12 bài tháng này",
      Icon: Music,
      color: "from-purple-500 to-purple-400",
    },
    {
      title: "Thời gian nghe",
      value: "89h",
      change: "Trung bình 3h/tuần",
      Icon: Clock,
      color: "from-violet-500 to-violet-400",
    },
    {
      title: "Từ vựng học được",
      value: "892",
      change: "67 từ mới",
      Icon: Brain,
      color: "from-indigo-500 to-indigo-400",
    },
    {
      title: "Độ thuộc lời",
      value: "65%",
      change: "Cải thiện 8%",
      Icon: Target,
      color: "from-blue-500 to-blue-400",
    },
  ]

  return (
    <>
      <WelcomeSection
        welcomeContent={welcomeContent}
        statsOverview={statsOverview}
        streakCard={streakCard}
      />

      <Musics />
    </>
  )
}