import { WelcomeSection } from "@/components/common";
import { ListeningTopic } from "@/components/features";
import { listeningTopicData } from "@/mock/data";
import { IStreakCardProps, IWelcomeContentProps, IButton, IDescription, IStatsOverview } from "@/types";
import { BookOpen, Clock, Play, Headphones, Brain, Target } from "lucide-react";

export default function page() {
  const getListeningTopics = listeningTopicData

  const buttons: IButton[] = [
    { type: 'default', text: 'Bắt đầu nghe', icon: Play },
    { type: 'outline', text: 'Xem bài nghe', icon: BookOpen }
  ]

  const descriptions: IDescription[] = [
    {
      text: 'Luyện kỹ năng nghe hiểu tiếng Anh với các bài nghe đa dạng. Từ hội thoại đến bài giảng, nâng cao khả năng nghe hiểu.',
    }
  ]

  const streakCard: IStreakCardProps = {
    icon: "🎧",
    title: "Tiến độ nghe",
    value: 73,
    valueText: '73%',
    progress: 100,
    progressDescription: "Dự kiến hoàn thành: 1.5 tháng nữa",
    color: "from-pink-500 to-pink-400"
  }

  const welcomeContent: IWelcomeContentProps = {
    hightlightColor: "text-pink-600",
    Icon: Headphones,
    title: "Luyện Nghe",
    titleHighlight: "Tiếng Anh",
    badge: " Đa dạng",
    badge2: "🎧 Hoàn thành 73%",
    descriptions: descriptions,
    buttons: buttons,
    background: "from-pink-500 via-rose-500 to-red-200"
  }

  const statsOverview: IStatsOverview[] = [
    {
      title: "Bài nghe hoàn thành",
      value: "234",
      change: "+18 bài tuần này",
      Icon: BookOpen,
      color: "from-pink-500 to-pink-400",
    },
    {
      title: "Từ vựng nghe được",
      value: "1,567",
      change: "89 từ mới",
      Icon: Brain,
      color: "from-rose-500 to-rose-400",
    },
    {
      title: "Độ chính xác",
      value: "85%",
      change: "Cải thiện 7%",
      Icon: Target,
      color: "from-red-500 to-red-400",
    },
    {
      title: "Thời gian nghe",
      value: "52h",
      change: "Trung bình 1.8h/ngày",
      Icon: Clock,
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

      <ListeningTopic listeningTopics={getListeningTopics} />
    </>
  )
}