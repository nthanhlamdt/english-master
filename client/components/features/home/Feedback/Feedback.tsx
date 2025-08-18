import { Section } from "@/components/common";
import CardFeedback from "./CardFeedback";
import { MessageCircleCodeIcon } from "lucide-react";

export function Feedback() {
  return (
    <Section
      title="Học viên nói gì về chúng tôi"
      headline="Hơn 100,000 học viên đã tin tưởng và thành công"
      description="Sự nổ lực của chúng tôi đã được đánh giá cao bởi học viên"
      color="secondary"
      Icon={MessageCircleCodeIcon}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
        <CardFeedback
          color="primary"
          name="John Doe"
          avatar="https://github.com/shadcn.png"
          role="Học viên"
          rating={5}
          feedback="Chúng tôi đã đạt được nhiều thành tựu và tiến bộ trong quá trình học tập"
        />

        <CardFeedback
          color="primary"
          name="John Doe"
          avatar="https://github.com/shadcn.png"
          role="Học viên"
          rating={5}
          feedback="Chúng tôi đã đạt được nhiều thành tựu và tiến bộ trong quá trình học tập"
        />

        <CardFeedback
          color="primary"
          name="John Doe"
          avatar="https://github.com/shadcn.png"
          role="Học viên"
          rating={5}
          feedback="Chúng tôi đã đạt được nhiều thành tựu và tiến bộ trong quá trình học tập"
        />

        <CardFeedback
          color="primary"
          name="John Doe"
          avatar="https://github.com/shadcn.png"
          role="Học viên"
          rating={5}
          feedback="Chúng tôi đã đạt được nhiều thành tựu và tiến bộ trong quá trình học tập"
        />
      </div>
    </Section>
  )
}
