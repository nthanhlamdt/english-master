import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Lightbulb } from "lucide-react";
import TabsLessonIpa from "./TabsLessonIpa";
import TabsExampleIpa from "./TabsExampleIpa";

export function TabsIpaLearning() {
  return (
    <Tabs defaultValue="lesson" className="mt-5">
      <TabsList className="grid w-full grid-cols-2 bg-gradient-to-r from-blue-50 to-purple-50 p-1 rounded-xl border border-blue-200">
        <TabsTrigger
          value="lesson"
          className="data-[state=active]:bg-white data-[state=active]:shadow-lg data-[state=active]:text-blue-600 rounded-lg transition-all duration-300"
        >
          <BookOpen className="w-4 h-4 mr-2" />
          Tổng quan
        </TabsTrigger>
        <TabsTrigger
          value="examples"
          className="data-[state=active]:bg-white data-[state=active]:shadow-lg data-[state=active]:text-blue-600 rounded-lg transition-all duration-300"
        >
          <Lightbulb className="w-4 h-4 mr-2" />
          Ví dụ
        </TabsTrigger>
      </TabsList>

      <TabsContent value="lesson">
        <TabsLessonIpa />
      </TabsContent>

      <TabsContent value="examples">
        <TabsExampleIpa />
      </TabsContent>
    </Tabs>
  )
}
