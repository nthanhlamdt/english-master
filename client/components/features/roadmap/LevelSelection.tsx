import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Layers, Lock, Rocket, Target } from "lucide-react";

interface ILevelSelectionProps {
  selectedLevel: string;
  setSelectedLevel: (level: string) => void;
}

export default function LevelSelection({ selectedLevel, setSelectedLevel }: ILevelSelectionProps) {
  return (
    <div>
      <Card className="border-0 shadow-lg bg-gradient-to-br from-card to-card/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-xl">
            <div className="p-2 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl text-white">
              <Layers className="h-5 w-5" />
            </div>
            Cấp độ
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <Button
              variant={selectedLevel === "beginner" ? "default" : "outline"}
              className={`w-full justify-start h-auto p-4 ${selectedLevel === "beginner"
                ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-md"
                : "border-0 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 hover:shadow-md"
                } transition-all duration-300`}
              onClick={() => setSelectedLevel("beginner")}
            >
              <div className="flex items-center gap-3 w-full">
                <div className="p-2 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg text-white">
                  <Rocket className="h-4 w-4" />
                </div>
                <div className="flex-1 text-left">
                  <div className="font-semibold">Beginner</div>
                  <div className="text-xs opacity-80">Cơ bản</div>
                </div>
                <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                  7/7
                </Badge>
              </div>
            </Button>

            <Button
              variant={selectedLevel === "intermediate" ? "default" : "outline"}
              className={`w-full justify-start h-auto p-4 ${selectedLevel === "intermediate"
                ? "bg-gradient-to-r from-purple-500 to-violet-500 text-white shadow-md"
                : "border-0 bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-950/30 dark:to-violet-950/30 hover:shadow-md"
                } transition-all duration-300`}
              onClick={() => setSelectedLevel("intermediate")}
            >
              <div className="flex items-center gap-3 w-full">
                <div className="p-2 bg-gradient-to-br from-purple-500 to-violet-500 rounded-lg text-white">
                  <Target className="h-4 w-4" />
                </div>
                <div className="flex-1 text-left">
                  <div className="font-semibold">Intermediate</div>
                  <div className="text-xs opacity-80">Trung cấp</div>
                </div>
                <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                  0/2
                </Badge>
              </div>
            </Button>

            <Button
              variant={selectedLevel === "advanced" ? "default" : "outline"}
              className={`w-full justify-start h-auto p-4 ${selectedLevel === "advanced"
                ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md"
                : "border-0 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 hover:shadow-md opacity-50"
                } transition-all duration-300`}
              onClick={() => setSelectedLevel("advanced")}
              disabled
            >
              <div className="flex items-center gap-3 w-full">
                <div className="p-2 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg text-white">
                  <Award className="h-4 w-4" />
                </div>
                <div className="flex-1 text-left">
                  <div className="font-semibold">Advanced</div>
                  <div className="text-xs opacity-80">Nâng cao</div>
                </div>
                <Lock className="h-4 w-4 text-muted-foreground" />
              </div>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
