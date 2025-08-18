import { LucideIcon } from "lucide-react"
import Heading from "./Heading"

interface SectionProps {
  children: React.ReactNode
  className?: string
  title: string
  description: string
  headline: string
  color: string
  Icon: LucideIcon
}

export function Section({ children, className, title, description, headline, color, Icon }: SectionProps) {
  return (
    <section className={`px-8 py-16 w-full h-auto ${className}`} >
      <Heading
        title={title}
        headline={headline}
        description={description}
        color={color}
        Icon={Icon}
      />
      <div className="mt-8">
        {children}
      </div>
    </section>
  )
}
