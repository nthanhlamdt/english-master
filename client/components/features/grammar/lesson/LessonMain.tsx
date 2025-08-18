'use client'
import { useState } from "react"
import StorySection from "./StorySection"
import StructureSection from "./StructureSection"
import UsegeSection from "./UsegeSection"
import InteractiveSection from "./InteractiveSection"
import TipsSection from "./TipsSection"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { IGrammarLesson } from "@/types/grammar"
import { DialogWarningQuizz } from "./DialogWarningQuizz"

export function LessonMain({ grammarLesson }: { grammarLesson: IGrammarLesson }) {
  const [activeTab, setActiveTab] = useState<'story' | 'structure' | 'usage' | 'interactive' | 'tips'>('story')

  const activeTabText = {
    'story': '📖 Câu chuyện',
    'structure': '🎯 Cấu trúc',
    'usage': '👥 Cách sử dụng',
    'interactive': '💡 Tương tác',
    'tips': '🧠 Mẹo ghi nhớ'
  }

  const activeTabComponent = {
    'story': <StorySection {...grammarLesson.story} />,
    'structure': <StructureSection {...grammarLesson.structure} />,
    'usage': <UsegeSection {...grammarLesson.usage} />,
    'interactive': <InteractiveSection {...grammarLesson.interactive} />,
    'tips': <TipsSection {...grammarLesson.tips} />
  }

  const handleNext = () => {
    if (activeTab !== 'tips') {
      setActiveTab(prev => {
        const nextTab = Object.keys(activeTabText)[Object.keys(activeTabText).indexOf(prev) + 1]
        return nextTab as 'story' | 'structure' | 'usage' | 'interactive' | 'tips'
      })
    }

  }

  const handleBack = () => {
    setActiveTab(prev => {
      const prevTab = Object.keys(activeTabText)[Object.keys(activeTabText).indexOf(prev) - 1]
      return prevTab as 'story' | 'structure' | 'usage' | 'interactive' | 'tips'
    })
  }

  return (
    <Card className="w-full">
      <CardHeader className="flex items-center justify-between">
        <CardTitle className="text-xl flex items-center gap-2 font-bold text-primary">{activeTabText[activeTab]}</CardTitle>
        <div className="flex items-center gap-4">
          {
            activeTab !== 'story' && (
              <Button
                variant="outline"
                onClick={handleBack}
                className="cursor-pointer hover:bg-primary/5"
              >
                <ArrowLeft />
                Trở lại
              </Button>
            )
          }
          {
            activeTab !== 'tips' ? (
              <Button onClick={handleNext} className="cursor-pointer">
                Tiếp theo
                <ArrowRight />
              </Button>
            ) : <DialogWarningQuizz />
          }
        </div>
      </CardHeader>

      <CardContent>
        {activeTabComponent[activeTab]}
      </CardContent>
    </Card>
  )
}
