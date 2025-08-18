import { LucideIcon } from "lucide-react";

interface HeadingProps {
  title: string;
  description: string;
  headline: string;
  color: string;
  Icon: LucideIcon
}

export default function Heading({ title, headline, description, color, Icon }: HeadingProps) {
  return (
    <div className="text-center">
      <div className={`bg-${color} max-w-fit mx-auto flex items-center gap-2 text-white border-4 border-${color}/50 px-8 py-3 rounded-full font-bold`}>
        <Icon className="w-6 h-6" />
        <span>{title}</span>
      </div>
      <h2 className={`text-${color} text-4xl font-[800] my-3`}>{headline}</h2>
      <p className="text-gray-500">{description}</p>
    </div>
  )
}
