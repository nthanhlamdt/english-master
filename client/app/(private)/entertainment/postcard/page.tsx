import { WelcomeSection } from "@/components/common";
import { Postcards } from "@/components/features";
import { IStreakCardProps, IWelcomeContentProps, IButton, IDescription, IStatsOverview } from "@/types";
import { Clock, Map, Play, Mail, Brain } from "lucide-react";

export default function page() {
  const buttons: IButton[] = [
    { type: 'default', text: 'Đọc bưu thiếp mới', icon: Play },
    { type: 'outline', text: 'Xem lại bưu thiếp yêu thích', icon: Mail }
  ]

  const descriptions: IDescription[] = [
    {
      text: 'Học tiếng Anh qua bưu thiếp từ khắp nơi trên thế giới. Khám phá văn hóa và nâng cao kỹ năng đọc hiểu.',
    }
  ]

  const streakCard: IStreakCardProps = {
    icon: "📮",
    title: "Bưu thiếp đã đọc",
    value: 89,
    valueText: '89 tấm',
    progress: 100,
    progressDescription: "Mục tiêu: 200 bưu thiếp trong năm",
    color: "from-emerald-500 to-emerald-400"
  }

  const welcomeContent: IWelcomeContentProps = {
    hightlightColor: "text-emerald-600",
    Icon: Mail,
    title: "Học Tiếng Anh",
    titleHighlight: "Qua Bưu Thiếp",
    badge: " Khám phá",
    badge2: "📮 Đã đọc 89 tấm",
    descriptions: descriptions,
    buttons: buttons,
    background: "from-emerald-500 via-green-500 to-teal-200"
  }

  const statsOverview: IStatsOverview[] = [
    {
      title: "Bưu thiếp đã đọc",
      value: "89",
      change: "+8 tấm tháng này",
      Icon: Mail,
      color: "from-emerald-500 to-emerald-400",
    },
    {
      title: "Quốc gia khám phá",
      value: "23",
      change: "3 quốc gia mới",
      Icon: Map,
      color: "from-green-500 to-green-400",
    },
    {
      title: "Từ vựng học được",
      value: "567",
      change: "34 từ mới",
      Icon: Brain,
      color: "from-teal-500 to-teal-400",
    },
    {
      title: "Thời gian đọc",
      value: "45h",
      change: "Trung bình 1.5h/tuần",
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

      <Postcards />
    </>
  )
}