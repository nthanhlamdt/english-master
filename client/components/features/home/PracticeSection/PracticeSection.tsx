import { Section } from "@/components/common";
import CardPracticeSection from "./CardPracticeSection";
import { BookAudio, Headphones, Mic, SquarePen, User2 } from "lucide-react";

export function PracticeSection() {
  return (
    <Section
      title="Luyện tập 4 kỹ năng"
      headline="Rèn luyện toàn diện với AI tiên tiến"
      description="Phát triển toàn diện khả năng nghe, nói, đọc, viết với AI hỗ trợ"
      className="bg-gradient-to-b from-secondary/30 to-secondary/5"
      color="secondary"
      Icon={User2}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-4 max-w-7xl mx-auto">
        <CardPracticeSection
          title="Nghe & Chép chính tả"
          description="Luyện nghe qua audio chất lượng cao và chép chính tả chính xác"
          color="primary"
          Icon={Headphones}
        />

        <CardPracticeSection
          title="Đọc sách báo"
          description="Đọc hiểu qua các bài báo, truyện ngắn với độ khó phù hợp"
          color="secondary"
          Icon={Mic}
        />

        <CardPracticeSection
          title="Viết & AI chấm"
          description="Luyện viết với AI chấm điểm và đưa ra gợi ý cải thiện"
          color="warning"
          Icon={BookAudio}
        />

        <CardPracticeSection
          title="Rèn luyện 4 kỹ năng"
          description="Phát triển toàn diện khả năng nghe, nói, đọc, viết với AI hỗ trợ"
          color="accent"
          Icon={SquarePen}
        />
      </div>
    </Section>
  )
}
