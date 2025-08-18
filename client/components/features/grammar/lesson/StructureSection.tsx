import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import GrammarConceptCard from "./GrammarConceptCard";
import { IStructureSectionProps } from "@/types";

export default function StructureSection({ title, description, patterns }: IStructureSectionProps) {
  return (
    <Card className="bg-green-100 border-l-4 border-l-green-500">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        {patterns.length > 0 && patterns.map(pattern => (
          <GrammarConceptCard
            key={pattern.pattern}
            title={pattern.pattern}
            description={pattern.explanation}
            examples={pattern.examples}
            color="green"
          />
        ))}
      </CardContent>
    </Card>
  )
}
