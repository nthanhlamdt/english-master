import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import GrammarConceptCard from "./GrammarConceptCard";
import { ITipsSectionProps } from "@/types";

export default function TipsSection({ title, description, tips }: ITipsSectionProps) {
  return (
    <Card className="bg-warning/10 border-l-4 border-l-warning">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        {
          tips.length > 0 && tips.map(tip => (
            <GrammarConceptCard
              key={tip.title}
              title={tip.title}
              description={tip.description}
              examples={tip.examples}
              color="warning"
            />
          ))
        }
      </CardContent>
    </Card>
  )
}
