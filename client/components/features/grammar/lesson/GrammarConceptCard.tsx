import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { IGrammarConceptCardProps } from "@/types";

export default function GrammarConceptCard({ title, description, examples, color }: IGrammarConceptCardProps) {
  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardContent>
        <ul className="space-y-2">
          {
            examples.map(example => (
              <li
                key={example}
                className={`px-4 py-2 bg-${color}-200 bg-${color}/10 text-${color} text-${color}-600 rounded-sm`}
              >
                {example}
              </li>
            ))
          }
        </ul>
      </CardContent>
    </Card>
  )
}
