import { CheckCircle } from 'lucide-react'

interface Props {
  index: number
  title: string
  description: string
  sub_description: string
  items: {
    title: string
  }[]
}

export default function ContentSide({ index, title, description, sub_description, items }: Props) {
  return (
    <div className={`ml-0 md:ml-4 lg:ml-0 space-y-4 sm:space-y-6 flex flex-col justify-center ${index % 2 == 0 ? 'lg:order-2' : 'lg:order-1 lg:text-right'} transition-all`}>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--primary)] drop-shadow-sm mb-1 sm:mb-2">{title}</h2>
      <span className="text-base sm:text-xl block text-gray-600 dark:text-gray-300 font-semibold mb-1">{description}</span>
      <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mb-2">{sub_description}</p>
      <ul className="flex flex-col gap-2 sm:gap-4 mt-2 sm:mt-4">
        {items && items.map((item) => (
          <li key={item.title} className={`flex items-center gap-2 sm:gap-3 text-sm sm:text-lg font-medium text-[var(--accent)] ${index % 2 == 1 && 'lg:flex-row-reverse lg:justify-end'} group relative pl-6 sm:pl-0`}>
            {/* Step line cho mobile */}
            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-0.5 bg-[var(--secondary)] rounded-full block sm:hidden"></span>
            <CheckCircle className="text-[var(--secondary)] group-hover:scale-110 transition-transform duration-200" size={18} />
            <span className="text-gray-700 dark:text-gray-200 group-hover:text-[var(--primary)] transition-colors duration-200">{item.title}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
