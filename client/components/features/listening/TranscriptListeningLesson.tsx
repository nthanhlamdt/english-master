'use client'
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function TranscriptListeningLesson() {
  const text = "The quick brown fox jumps over the lazy dog"

  const listText = text.trim().split(" ")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [inputText, setInputText] = useState("")
  const [resultText, setResultText] = useState<{
    index: number,
    text: string,
    isCorrect: boolean
  }[]>([])

  const handleOnChangeInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value)
  }

  const handleOnKeyDownInputText = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      setResultText([
        ...resultText,
        {
          index: currentIndex,
          text: inputText,
          isCorrect: inputText.toLowerCase().trim() === listText[currentIndex].toLowerCase().trim()
        }
      ])
      setInputText("")
      setCurrentIndex(currentIndex + 1)
    }
  }

  return (
    <Card className="w-full">
      <CardContent className='space-y-4'>
        <div className="p-4 rounded-lg">
          <p className="font-semibold">Gõ những gì bạn nghe được (Gõ <b>Enter</b> hoặc <b>Space</b> sau mỗi từ)</p>
          <Input
            placeholder="Gõ những gì bạn nghe được"
            value={inputText}
            onChange={e => handleOnChangeInputText(e)}
            onKeyDown={e => handleOnKeyDownInputText(e)}
            className="w-full bg-white/80 backdrop-blur-sm border-gray-300 shadow-sm mt-2 focus:border-2"
          />
        </div>

        {resultText.length > 0 && (
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Tiến độ của bạn</h3>
            </div>

            {/* Word-by-word display with corrections */}
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex flex-wrap gap-2 leading-relaxed">
                {resultText.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    {/* Correction for incorrect words */}
                    {!item.isCorrect ?
                      <div className="px-2 py-1 rounded-md text-sm font-medium bg-red-100 flex items-center gap-2">
                        <span className="text-red-700 line-through">
                          {item.text}
                        </span>
                        <span className="text-sm font-medium text-green-700">
                          {listText[item.index]}
                        </span>
                      </div>
                      :
                      <span className="inline-block px-2 py-1 rounded-md text-sm font-medium text-green-700 bg-green-100 border border-green-200">
                        {item.text}
                      </span>
                    }
                  </div>
                ))}
              </div>
            </div>

            {/* Progress summary */}
            <div className="mt-4 pt-4 border-t border-blue-200">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">
                  Điểm số: <span className="font-semibold text-blue-600">
                    {resultText.filter(item => item.isCorrect).length}/{resultText.length}
                  </span>
                </span>
                <span className="text-gray-600">
                  Tỷ lệ đúng: <span className="font-semibold text-blue-600">
                    {Math.round((resultText.filter(item => item.isCorrect).length / resultText.length) * 100)}%
                  </span>
                </span>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
