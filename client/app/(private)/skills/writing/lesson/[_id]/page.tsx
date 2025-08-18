'use client'
import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  Edit3,
  Lightbulb,
  Target,
  Clock,
  FileText,
  Send,
  RefreshCw,
  Trophy,
  Star
} from "lucide-react"

interface WritingCriteria {
  name: string
  description: string
  score: number
  maxScore: number
  feedback: string[]
  color: string
}

interface WritingResult {
  totalScore: number
  criteria: WritingCriteria[]
  overallFeedback: string
  suggestions: string[]
  grade: string
}

export default function WritingLessonPage({ params }: { params: { _id: string } }) {
  const { _id } = params

  // State management
  const [essay, setEssay] = useState("")
  const [wordCount, setWordCount] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [result, setResult] = useState<WritingResult | null>(null)

  // Mock data
  const [lessonData] = useState({
    id: _id,
    title: "Viết đoạn văn về bảo vệ môi trường",
    topic: "Environmental Protection",
    description: "Viết một đoạn văn ngắn (150-200 từ) về chủ đề bảo vệ môi trường. Sử dụng các từ vựng và cấu trúc ngữ pháp đã học.",
    minWords: 150,
    maxWords: 200,
    timeLimit: 30,
    tips: [
      "Bắt đầu với câu chủ đề rõ ràng và hấp dẫn",
      "Sử dụng các từ nối để tạo sự mạch lạc",
      "Đưa ra ví dụ cụ thể và thực tế",
      "Kết thúc với câu kết luận mạnh mẽ",
      "Kiểm tra ngữ pháp và chính tả trước khi nộp"
    ],
    vocabulary: [
      "environmental protection",
      "sustainable development",
      "climate change",
      "renewable energy",
      "carbon footprint",
      "green technology"
    ]
  })

  // Tính số từ
  useEffect(() => {
    const words = essay.trim() ? essay.trim().split(/\s+/).length : 0
    setWordCount(words)
  }, [essay])

  // Kiểm tra có thể submit
  const canSubmit = wordCount >= lessonData.minWords && essay.trim().length > 0

  // Xử lý submit bài viết
  const handleSubmit = async () => {
    if (!canSubmit) return

    setIsSubmitting(true)

    try {
      await new Promise(resolve => setTimeout(resolve, 2000))

      const mockResult: WritingResult = {
        totalScore: 78,
        criteria: [
          {
            name: "Content & Ideas",
            description: "Ý tưởng và nội dung bài viết",
            score: 20,
            maxScore: 25,
            feedback: [
              "Ý tưởng rõ ràng và logic",
              "Cần phát triển thêm ví dụ cụ thể",
              "Kết luận có thể mạnh mẽ hơn"
            ],
            color: "bg-blue-500"
          },
          {
            name: "Organization",
            description: "Cấu trúc và tổ chức bài viết",
            score: 18,
            maxScore: 25,
            feedback: [
              "Cấu trúc đoạn văn tốt",
              "Cần cải thiện các câu chuyển tiếp",
              "Đoạn mở đầu và kết thúc rõ ràng"
            ],
            color: "bg-green-500"
          },
          {
            name: "Grammar & Accuracy",
            description: "Ngữ pháp và độ chính xác",
            score: 22,
            maxScore: 25,
            feedback: [
              "Sử dụng ngữ pháp chính xác",
              "Một vài lỗi nhỏ về thì",
              "Cấu trúc câu đa dạng"
            ],
            color: "bg-purple-500"
          },
          {
            name: "Vocabulary & Style",
            description: "Từ vựng và phong cách viết",
            score: 18,
            maxScore: 25,
            feedback: [
              "Sử dụng từ vựng phù hợp",
              "Cần đa dạng hóa từ vựng hơn",
              "Phong cách viết tự nhiên"
            ],
            color: "bg-orange-500"
          }
        ],
        overallFeedback: "Bài viết của bạn có nội dung tốt và ngữ pháp chính xác. Tuy nhiên, cần cải thiện về cấu trúc và đa dạng từ vựng để đạt điểm cao hơn.",
        suggestions: [
          "Thêm các ví dụ cụ thể để minh họa ý tưởng",
          "Sử dụng nhiều từ nối để tạo sự mạch lạc",
          "Mở rộng vốn từ vựng về chủ đề môi trường",
          "Luyện tập viết các câu phức tạp hơn"
        ],
        grade: "B+"
      }

      setResult(mockResult)

    } catch (error) {
      console.error('Submit failed:', error)
      alert('Có lỗi xảy ra khi nộp bài')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Reset bài viết
  const handleReset = () => {
    setEssay("")
    setResult(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-8">
      <div className="max-w-7xl mx-auto px-4 space-y-8">

        {/* Header với gradient */}
        <div className="text-center space-y-6">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-3xl opacity-20"></div>
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Edit3 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Writing Lesson
                  </h1>
                  <p className="text-gray-600 text-lg">Nâng cao kỹ năng viết tiếng Anh</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

          {/* Left Column - Lesson Info & Tips */}
          <div className="space-y-6">

            {/* Lesson Information Card */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl rounded-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 text-white">
                <div className="flex items-center gap-3 mb-3">
                  <BookOpen className="w-6 h-6" />
                  <CardTitle className="text-xl">Thông tin bài học</CardTitle>
                </div>
                <h3 className="text-lg font-semibold">{lessonData.title}</h3>
              </div>
              <CardContent className="p-6 space-y-4">
                <p className="text-gray-700 leading-relaxed">{lessonData.description}</p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-3 rounded-xl text-center">
                    <Target className="w-5 h-5 text-blue-500 mx-auto mb-2" />
                    <div className="text-sm text-gray-600">Số từ</div>
                    <div className="font-semibold text-blue-600">{lessonData.minWords}-{lessonData.maxWords}</div>
                  </div>
                  <div className="bg-orange-50 p-3 rounded-xl text-center">
                    <Clock className="w-5 h-5 text-orange-500 mx-auto mb-2" />
                    <div className="text-sm text-gray-600">Thời gian</div>
                    <div className="font-semibold text-orange-600">{lessonData.timeLimit} phút</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Writing Tips Card */}
            <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-0 shadow-xl rounded-2xl">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-xl flex items-center justify-center">
                    <Lightbulb className="w-5 h-5 text-white" />
                  </div>
                  <CardTitle className="text-lg text-gray-800">Gợi ý viết bài</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {lessonData.tips.map((tip, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-semibold text-orange-600">{index + 1}</span>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">{tip}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Vocabulary Card */}
            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-0 shadow-xl rounded-2xl">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-400 rounded-xl flex items-center justify-center">
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  <CardTitle className="text-lg text-gray-800">Từ vựng gợi ý</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {lessonData.vocabulary.map((word, index) => (
                    <Badge key={index} variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-200">
                      {word}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Center Column - Writing Area */}
          <div className="xl:col-span-2 space-y-6">

            {/* Writing Editor Card */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl rounded-2xl">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <Edit3 className="w-5 h-5 text-white" />
                    </div>
                    <CardTitle className="text-xl">Viết bài luận</CardTitle>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="text-sm text-gray-600">Số từ</div>
                      <div className={`font-semibold ${wordCount >= lessonData.minWords ? 'text-green-600' : 'text-red-500'
                        }`}>
                        {wordCount}/{lessonData.minWords}
                      </div>
                    </div>
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                      <Progress
                        value={Math.min((wordCount / lessonData.minWords) * 100, 100)}
                        className="w-12 h-12"
                      />
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <Textarea
                  value={essay}
                  onChange={(e) => setEssay(e.target.value)}
                  placeholder="Bắt đầu viết bài luận của bạn ở đây..."
                  className="min-h-[400px] text-lg leading-relaxed border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 resize-none"
                />

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Button
                      onClick={handleReset}
                      variant="outline"
                      className="border-gray-300 hover:bg-gray-50"
                    >
                      <RefreshCw className="w-4 h-4 mr-2" />
                      Làm lại
                    </Button>
                  </div>

                  <Button
                    onClick={handleSubmit}
                    disabled={!canSubmit || isSubmitting}
                    className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Đang chấm điểm...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Nộp bài
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Results Card */}
            {result && (
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl rounded-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Trophy className="w-8 h-8" />
                      <div>
                        <CardTitle className="text-2xl">Kết quả chấm điểm</CardTitle>
                        <p className="text-green-100">Đánh giá chi tiết từ AI</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold">{result.totalScore}/100</div>
                      <div className="text-green-100">{result.grade}</div>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6 space-y-6">
                  {/* Criteria Scores */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {result.criteria.map((criterion, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-xl border">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-semibold text-gray-800">{criterion.name}</h4>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-blue-600">{criterion.score}</div>
                            <div className="text-sm text-gray-500">/ {criterion.maxScore}</div>
                          </div>
                        </div>

                        <Progress
                          value={(criterion.score / criterion.maxScore) * 100}
                          className="h-2 mb-3"
                        />

                        <p className="text-sm text-gray-600 mb-3">{criterion.description}</p>

                        <div className="space-y-2">
                          {criterion.feedback.map((feedback, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-sm">
                              <Star className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{feedback}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Overall Feedback */}
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                    <h4 className="font-semibold text-blue-800 mb-2">Nhận xét tổng quan</h4>
                    <p className="text-blue-700 leading-relaxed">{result.overallFeedback}</p>
                  </div>

                  {/* Suggestions */}
                  <div className="bg-orange-50 p-4 rounded-xl border border-orange-200">
                    <h4 className="font-semibold text-orange-800 mb-3">Gợi ý cải thiện</h4>
                    <div className="space-y-2">
                      {result.suggestions.map((suggestion, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-orange-700">{suggestion}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}