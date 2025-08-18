import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import GrammarConceptCard from "./GrammarConceptCard";
import { IUsegeSectionProps } from "@/types";

export default function UsegeSection({ title, description, contexts }: IUsegeSectionProps) {
  return (
    <Card className="bg-accent/10 border-l-4 border-l-accent">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        {contexts.length > 0 && contexts.map(context => (
          <GrammarConceptCard
            key={context.title}
            title={context.title}
            description={context.description}
            examples={context.examples}
            color="accent"
          />
        ))}

      </CardContent>
    </Card>
  )
}
