import { WelcomeSection } from "@/components/common";
import { QuickActions, RecentActivities } from "@/components/features";
import { IStatsOverview, IStreakCardProps, IWelcomeContentProps } from "@/types";
import { Award, ChartColumn, Clock, Flame, LucideIcon, PlayCircle, Star } from "lucide-react";

export default function DashboardPage() {
  const buttons: { type: 'outline' | 'default'; text: string; icon: LucideIcon }[] = [
    { type: 'outline', text: 'Xem tiến độ', icon: ChartColumn },
    { type: 'default', text: 'Tiếp tục học', icon: PlayCircle }
  ]

  const descriptions: { text: string, textHighlight?: string | '' }[] = [
    {
      text: 'Bạn đang có tiến độ tuyệt vời! Hôm nay hãy tiếp tục với',
      textHighlight: 'bài học Từ vựng'
    },
    {
      text: 'và duy trì chuỗi',
      textHighlight: '15 ngày'
    },
    {
      text: 'học liên tục.'
    }
  ]

  const streakCard: IStreakCardProps = {
    icon: "🔥",
    title: "Chuỗi ngày hiện tại",
    value: 15,
    valueText: '15',
    progress: 30,
    progressDescription: "Tiếp tục cố gắng nhé!",
    color: "from-yellow-500/80 to-orange-500/80"
  }

  const welcomeContent: IWelcomeContentProps = {
    hightlightColor: "text-yellow-300",
    Icon: "/images/logo.png",
    title: "Chào mừng trở lại!",
    titleHighlight: "Tiếp tục hành trình",
    badge: "🎯 Học tập thông minh",
    badge2: "🔥 Chuỗi 15 ngày",
    descriptions: descriptions,
    buttons: buttons,
    background: "from-blue-800 to-blue-500"
  }

  const statsOverview: IStatsOverview[] = [
    {
      title: "Tổng điểm",
      value: "2,847",
      change: "+127 hôm nay",
      Icon: Star,
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "Chuỗi ngày",
      value: "15",
      change: "Kỷ lục: 23 ngày",
      Icon: Flame,
      color: "from-red-500 to-pink-500",
    },
    {
      title: "Thời gian học",
      value: "2.5h",
      change: "Tuần này",
      Icon: Clock,
      color: "from-blue-500 to-indigo-500",
    },
    {
      title: "Cấp độ",
      value: "B1",
      change: "Intermediate",
      Icon: Award,
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
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 w-full mt-4">
        <QuickActions />
        <RecentActivities />
      </div>
    </>
  );
}