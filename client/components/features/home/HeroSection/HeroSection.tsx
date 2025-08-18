import { Button } from "@/components/ui/button";
import { ExternalLink, Play } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="py-16 md:py-24 px-6 w-full h-auto bg-gradient-to-r from-primary/40 to-primary/10">
      <div className="flex flex-col xl:flex-row items-center justify-between gap-10 w-full max-w-7xl mx-auto">
        <div className="flex flex-col gap-4">
          <p className="text-white text-center text-4xl sm:text-6xl max-w-lg xl:text-start leading-normal font-[800] mb-4">
            <span className="text-primary">Học Tiếng Anh</span>
            <span className="block text-black text-3xl sm:text-5xl">Thông minh cùng</span>
            <span className="text-[var(--secondary)]">EnglishMaster</span>
          </p>

          <p className="text-neutral-500 text-center text-sm sm:text-2xl max-w-lg xl:text-start leading-tight font-[400] mb-4">
            Trải nghiệm học tiếng Anh hoàn toàn mới với AI cá nhân hóa, giúp bạn thành thạo 4 kỹ năng một cách
            <span className="text-primary/80 font-bold"> thú vị </span>
            và
            <span className="text-neutral-400 font-bold"> hiệu quả.</span>
          </p>

          <div className="flex gap-3 justify-center xl:justify-start">
            <Button className="py-6 hover:scale-105 cursor-pointer font-bold"><Play /> Học miễn phí ngay </Button>
            <Button variant="outline" className="py-6 hover:scale-105 hover:bg-white hover:text-primary cursor-pointer border-2 border-primary font-bold"><ExternalLink /> Khám phá ngay</Button>
          </div>
        </div>

        <Image src="/images/hero.svg" alt="hero-section" width={500} height={500} />
      </div>
    </section>
  )
}
