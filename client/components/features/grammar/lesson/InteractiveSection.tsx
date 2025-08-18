import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import GrammarConceptCard from "./GrammarConceptCard";
import { IInteractiveSectionProps } from "@/types";

export default function InteractiveSection({ title, description, scenarios }: IInteractiveSectionProps) {
  return (
    <Card className="bg-secondary/10 border-l-4 border-l-secondary">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        {
          scenarios.length > 0 && scenarios.map(scenario => (
            <GrammarConceptCard
              key={scenario.title}
              title={scenario.title}
              description={scenario.description}
              examples={scenario.examples.map(example => `${example.isCorrect ? '✅' : '❌'} ` + example.text)}
              color="secondary"
            />
          ))
        }
      </CardContent>
    </Card>
  )
}
