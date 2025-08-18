import { WelcomeSection } from "@/components/common";
import { HeaderIpa, ListCardIpa } from "@/components/features";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { symbols } from "@/mock/data";
import { IStreakCardProps, IWelcomeContentProps, IButton, IDescription, IStatsOverview } from "@/types";
import { BookOpen, Clock, Play, Mic, Brain, Target, Headphones } from "lucide-react";

export default function page() {
  const buttons: IButton[] = [
    { type: 'default', text: 'Tiếp tục học IPA', icon: Play },
    { type: 'outline', text: 'Luyện phát âm', icon: Mic }
  ]

  const descriptions: IDescription[] = [
    {
      text: 'Học bảng phiên âm quốc tế IPA để phát âm chính xác tiếng Anh. Luyện tập với các âm cơ bản đến nâng cao.',
    }
  ]

  const streakCard: IStreakCardProps = {
    icon: "🎵",
    title: "Tiến độ IPA",
    value: 45,
    valueText: '45%',
    progress: 100,
    progressDescription: "Dự kiến hoàn thành: 4 tháng nữa",
    color: "from-purple-500 to-purple-400"
  }

  const welcomeContent: IWelcomeContentProps = {
    hightlightColor: "text-purple-600",
    Icon: Headphones,
    title: "Học IPA",
    titleHighlight: "Phát Âm",
    badge: " Hệ thống",
    badge2: "🎵 Hoàn thành 45%",
    descriptions: descriptions,
    buttons: buttons,
    background: "from-purple-500 via-violet-400 to-indigo-200"
  }

  const statsOverview: IStatsOverview[] = [
    {
      title: "Âm đã học",
      value: "32/44",
      change: "+5 âm tuần này",
      Icon: BookOpen,
      color: "from-purple-500 to-purple-400",
    },
    {
      title: "Bài luyện âm",
      value: "89",
      change: "12 bài mới",
      Icon: Brain,
      color: "from-violet-500 to-violet-400",
    },
    {
      title: "Độ chính xác",
      value: "87%",
      change: "Cải thiện 5%",
      Icon: Target,
      color: "from-indigo-500 to-indigo-400",
    },
    {
      title: "Thời gian luyện",
      value: "28h",
      change: "Trung bình 1h/ngày",
      Icon: Clock,
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

      <Card>
        <CardHeader>
          <HeaderIpa />
        </CardHeader>

        <CardContent>
          {symbols.map(symbol => (<ListCardIpa key={symbol.soundType} {...symbol} />))}
        </CardContent>
      </Card>
    </>
  )
}