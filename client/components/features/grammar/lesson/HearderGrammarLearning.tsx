interface IHearderGrammarLearningProps {
  icon: string
  title: string;
  description: string;
}

export function HearderGrammarLearning({ icon, title, description }: IHearderGrammarLearningProps) {
  return (
    <div className="flex items-center gap-2 mb-5">
      <span className="p-2 bg-yellow-400 rounded-md text-white">{icon}</span>
      <div>
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  )
}
