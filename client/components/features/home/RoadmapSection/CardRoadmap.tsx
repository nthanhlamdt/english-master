import { roadmap } from "@/types"
import CardSide from "./CardSide"
import ContentSide from "./ContentSide"

interface Props {
  index: number
  item: roadmap
}

export default function CardRoadmap({ index, item }: Props) {
  return (
    <div
      data-aos={`${index % 2 == 0 ? 'fade-left' : 'fade-right'}`}
      className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 lg:gap-20 w-full mx-auto animate-fade-in"
    >
      {/* Node số thứ tự lớn trên desktop, nhỏ trên mobile, vị trí responsive */}
      {/* Desktop: node lớn giữa line, Mobile: node nhỏ trên card */}
      <div className="flex lg:hidden absolute left-1/2 -top-6 -translate-x-1/2 z-20">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)] shadow-xl border-4 border-white dark:border-[var(--background)]">
          <span className="text-xl font-extrabold text-white drop-shadow-lg">{index + 1}</span>
        </div>
      </div>
      <div className="hidden lg:flex absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)] shadow-2xl border-8 border-white dark:border-[var(--background)]">
          <span className="text-4xl font-extrabold text-white drop-shadow-lg">{index + 1}</span>
        </div>
      </div>
      {/* CardSide và ContentSide */}
      <CardSide
        index={index}
        lesson={item.lesson}
        week={item.week}
      />
      <ContentSide
        index={index}
        title={item.title}
        description={item.description}
        sub_description={item.sub_description}
        items={item.items}
      />
    </div>
  )
}
