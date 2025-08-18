import { Section } from "@/components/common";
import { Film, Music, Podcast } from "lucide-react";
import CardEntertainmentSection from "./CardEntertainmentSection";

export function EntertainmentSection() {
  const dataEntertainment = [
    {
      title: "Xem phim học ngôn ngữ",
      description: "Thưởng thức phim hay với phụ đề thông minh, học từ vựng trong ngữ cảnh thực tế",
      Icon: Film,
      color: "primary",
    },
    {
      title: "Nghe âm nhạc và học từ vựng",
      description: "Thưởng thức bài hát hay và học từ vựng mới thông qua lời bài hát",
      Icon: Music,
      color: "secondary",
    },
    {
      title: "Nghe podcast và học từ vựng",
      description: "Thưởng thức podcast và học từ vựng mới thông qua các chủ đề thú vị",
      Icon: Podcast,
      color: "warning",
    }
  ]
  return (
    <Section
      title="Giải trí học tập"
      headline="Học tiếng Anh qua giải trí"
      description="Vừa học vừa chơi với nội dung giải trí hấp dẫn và bổ ích"
      color="primary"
      Icon={Film}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl px-5 md:px-0 mx-auto">
        {
          dataEntertainment.map((item, index) => (
            <CardEntertainmentSection key={index} {...item} />
          ))
        }
      </div>
    </Section>
  )
}
