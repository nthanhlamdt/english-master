import { Section } from "@/components/common";
import CardRoadmap from "./CardRoadmap";
import { roadmapSectionData } from "@/mock/data";
import { Target } from "lucide-react";

export function RoadmapSection() {
  const RoadmapItems = roadmapSectionData
  return (
    <Section
      title="Lộ trình học tập hoàn chỉnh"
      headline="3 cấp độ từ cơ bản đến thành thạo"
      description="Lộ trình được thiết kế khoa học, phù hợp với từng trình độ và mục tiêu học tập"
      className="bg-[var(--primary)]/10 py-10 sm:py-12 md:py-16"
      color="primary"
      Icon={Target}
    >
      <div className="relative mt-6 sm:mt-8 md:mt-10 max-w-full md:max-w-3xl lg:max-w-6xl mx-auto px-2 sm:px-4">
        {/* Line dọc giữa các step - gradient, node lớn, chỉ hiện trên desktop */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-2 -translate-x-1/2 z-0">
          <div className="h-full w-full rounded-full bg-gradient-to-b from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)] opacity-70 shadow-2xl"></div>
        </div>
        {/* Line ngang cho mobile/tablet */}
        <div className="block lg:hidden absolute left-0 right-0 top-8 h-1 w-full z-0">
          <div className="h-full w-full rounded-full bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)] opacity-60"></div>
        </div>
        {/* Card Roadmap */}
        <div className="flex flex-col gap-12 sm:gap-16 md:gap-20 relative z-10">
          {RoadmapItems && RoadmapItems.map((item, index) => (
            <CardRoadmap key={index} index={index} item={item} />
          ))}
        </div>
      </div>
    </Section>
  )
}
