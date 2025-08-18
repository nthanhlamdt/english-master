'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { BookOpen, Target, Clock, Trophy, CheckCircle, Play, BarChart3, Sparkles, BookMarked, Lightbulb, Star, TrendingUp, Award } from 'lucide-react'

// Types for the reading lesson
interface VocabularyWord {
  word: string
  meaning: string
  pronunciation: string
  example: string
  difficulty: 'easy' | 'medium' | 'hard'
}

interface ReadingParagraph {
  id: number
  content: string
  vocabularyWords: VocabularyWord[]
  miniQuestion: {
    question: string
    options: string[]
    correctAnswer: number
    explanation: string
  }
}

interface ReadingLesson {
  id: string
  title: string
  level: string
  duration: string
  paragraphs: ReadingParagraph[]
  totalQuestions: number
}

interface ProgressData {
  practiceMode: {
    completed: number
    total: number
    averageScore: number
  }
  testMode: {
    completed: number
    total: number
    averageScore: number
  }
  overallProgress: number
}

// Mock data for the reading lesson
const mockReadingLesson: ReadingLesson = {
  id: '1',
  title: 'The Future of Renewable Energy',
  level: 'B1',
  duration: '25 phút',
  totalQuestions: 12,
  paragraphs: [
    {
      id: 1,
      content: `The world is rapidly transitioning towards renewable energy sources as concerns about climate change and fossil fuel depletion continue to grow. Solar power, wind energy, and hydroelectric power are becoming increasingly popular alternatives to traditional coal and gas-fired power plants. These clean energy sources offer numerous environmental benefits, including reduced greenhouse gas emissions and improved air quality.`,
      vocabularyWords: [
        {
          word: 'transitioning',
          meaning: 'chuyển đổi, thay đổi',
          pronunciation: '/trænˈzɪʃənɪŋ/',
          example: 'The company is transitioning to digital systems.',
          difficulty: 'medium'
        },
        {
          word: 'renewable',
          meaning: 'có thể tái tạo, không cạn kiệt',
          pronunciation: '/rɪˈnjuːəbl/',
          example: 'Solar energy is a renewable resource.',
          difficulty: 'easy'
        },
        {
          word: 'depletion',
          meaning: 'cạn kiệt, suy giảm',
          pronunciation: '/dɪˈpliːʃən/',
          example: 'The depletion of natural resources is a serious concern.',
          difficulty: 'hard'
        }
      ],
      miniQuestion: {
        question: 'What is the main reason for the transition to renewable energy?',
        options: [
          'Cost reduction',
          'Climate change concerns',
          'Technological advancement',
          'Government regulations'
        ],
        correctAnswer: 1,
        explanation: 'The text mentions that concerns about climate change are driving the transition to renewable energy.'
      }
    },
    {
      id: 2,
      content: `However, the transition to renewable energy is not without challenges. One of the biggest obstacles is the intermittent nature of solar and wind power, which depends heavily on weather conditions. Energy storage solutions, such as advanced batteries and pumped hydro storage, are crucial for addressing this issue. Additionally, the initial investment costs for renewable energy infrastructure can be substantial, though they are decreasing over time.`,
      vocabularyWords: [
        {
          word: 'intermittent',
          meaning: 'không liên tục, gián đoạn',
          pronunciation: '/ˌɪntərˈmɪtənt/',
          example: 'Solar power is intermittent due to weather changes.',
          difficulty: 'medium'
        },
        {
          word: 'obstacles',
          meaning: 'chướng ngại vật, trở ngại',
          pronunciation: '/ˈɒbstəklz/',
          example: 'There are many obstacles to overcome in this project.',
          difficulty: 'easy'
        },
        {
          word: 'infrastructure',
          meaning: 'cơ sở hạ tầng',
          pronunciation: '/ˈɪnfrəstrʌktʃər/',
          example: 'The city needs to improve its infrastructure.',
          difficulty: 'medium'
        }
      ],
      miniQuestion: {
        question: 'What is the main challenge with solar and wind power?',
        options: [
          'High costs',
          'Intermittent nature',
          'Limited availability',
          'Technical complexity'
        ],
        correctAnswer: 1,
        explanation: 'The text states that the intermittent nature of solar and wind power is a major challenge.'
      }
    },
    {
      id: 3,
      content: `Despite these challenges, the benefits of renewable energy far outweigh the drawbacks. Countries around the world are setting ambitious targets for renewable energy adoption, with many aiming to achieve 100% clean energy by 2050. The development of smart grid technology and improved energy efficiency measures are also supporting this transition. As technology continues to advance, renewable energy will become even more accessible and affordable for everyone.`,
      vocabularyWords: [
        {
          word: 'outweigh',
          meaning: 'nặng hơn, quan trọng hơn',
          pronunciation: '/ˌaʊtˈweɪ/',
          example: 'The benefits outweigh the costs.',
          difficulty: 'medium'
        },
        {
          word: 'ambitious',
          meaning: 'tham vọng, đầy tham vọng',
          pronunciation: '/æmˈbɪʃəs/',
          example: 'The company has ambitious growth plans.',
          difficulty: 'easy'
        },
        {
          word: 'smart grid',
          meaning: 'lưới điện thông minh',
          pronunciation: '/smɑːt ɡrɪd/',
          example: 'Smart grid technology improves energy distribution.',
          difficulty: 'medium'
        }
      ],
      miniQuestion: {
        question: 'What is the target year for 100% clean energy mentioned in the text?',
        options: [
          '2030',
          '2040',
          '2050',
          '2060'
        ],
        correctAnswer: 2,
        explanation: 'The text mentions that many countries aim to achieve 100% clean energy by 2050.'
      }
    }
  ]
}

export default function ReadingLessonPage() {
  const [currentMode, setCurrentMode] = useState<'practice' | 'test'>('practice')
  const [currentParagraph, setCurrentParagraph] = useState(0)
  const [showVocabulary, setShowVocabulary] = useState<string | null>(null)
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 })
  const [practiceAnswers, setPracticeAnswers] = useState<Record<number, number>>({})
  const [testAnswers, setTestAnswers] = useState<Record<number, number>>({})
  const [isTestCompleted, setIsTestCompleted] = useState(false)
  const [testScore, setTestScore] = useState(0)
  const [progressData, setProgressData] = useState<ProgressData>({
    practiceMode: { completed: 0, total: 0, averageScore: 0 },
    testMode: { completed: 0, total: 0, averageScore: 0 },
    overallProgress: 0
  })

  // Calculate progress
  useEffect(() => {
    const practiceProgress = (Object.keys(practiceAnswers).length / mockReadingLesson.paragraphs.length) * 100
    const testProgress = isTestCompleted ? 100 : 0

    setProgressData({
      practiceMode: {
        completed: Object.keys(practiceAnswers).length,
        total: mockReadingLesson.paragraphs.length,
        averageScore: Object.keys(practiceAnswers).length > 0 ? 85 : 0
      },
      testMode: {
        completed: isTestCompleted ? 1 : 0,
        total: 1,
        averageScore: testScore
      },
      overallProgress: (practiceProgress + testProgress) / 2
    })
  }, [practiceAnswers, isTestCompleted, testScore])

  const handlePracticeAnswer = (paragraphId: number, answerIndex: number) => {
    setPracticeAnswers(prev => ({
      ...prev,
      [paragraphId]: answerIndex
    }))
  }

  const handleTestMode = () => {
    setCurrentMode('test')
    setCurrentParagraph(0)
    setTestAnswers({})
    setIsTestCompleted(false)
    setTestScore(0)
  }

  const handleTestAnswer = (paragraphId: number, answerIndex: number) => {
    setTestAnswers(prev => ({
      ...prev,
      [paragraphId]: answerIndex
    }))
  }

  const completeTest = () => {
    let correctAnswers = 0
    mockReadingLesson.paragraphs.forEach(paragraph => {
      const userAnswer = testAnswers[paragraph.id]
      if (userAnswer === paragraph.miniQuestion.correctAnswer) {
        correctAnswers++
      }
    })

    const score = Math.round((correctAnswers / mockReadingLesson.paragraphs.length) * 100)
    setTestScore(score)
    setIsTestCompleted(true)
  }

  const renderVocabularyHighlight = (content: string, vocabularyWords: VocabularyWord[]) => {
    let highlightedContent = content

    vocabularyWords.forEach(vocab => {
      const regex = new RegExp(`\\b${vocab.word}\\b`, 'gi')
      highlightedContent = highlightedContent.replace(regex,
        `<span class="vocabulary-word cursor-pointer font-semibold text-blue-600 hover:text-blue-800 transition-colors" 
         data-word="${vocab.word}">${vocab.word}</span>`
      )
    })

    return highlightedContent
  }

  const renderVocabularyTooltip = (word: VocabularyWord) => (
    <div className="absolute z-50 bg-white border border-gray-200 rounded-lg shadow-lg p-4 max-w-xs -translate-x-1/2 -translate-y-full mt-2">
      <div className="font-semibold text-gray-900 mb-2">{word.word}</div>
      <div className="text-sm text-gray-700 mb-1">
        <span className="font-medium">Nghĩa:</span> {word.meaning}
      </div>
      <div className="text-sm text-gray-600 mb-1">
        <span className="font-medium">Phát âm:</span> {word.pronunciation}
      </div>
      <div className="text-sm text-gray-600 mb-2">
        <span className="font-medium">Ví dụ:</span> {word.example}
      </div>
      <Badge variant={word.difficulty === 'easy' ? 'default' : word.difficulty === 'medium' ? 'secondary' : 'destructive'}>
        {word.difficulty === 'easy' ? 'Dễ' : word.difficulty === 'medium' ? 'Trung bình' : 'Khó'}
      </Badge>
    </div>
  )

  const handleVocabularyHover = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement
    if (target.classList.contains('vocabulary-word')) {
      const word = target.dataset.word
      if (word) {
        setShowVocabulary(word)
        // Get mouse position for tooltip placement
        setTooltipPosition({ x: e.clientX, y: e.clientY })
      }
    }
  }

  const handleVocabularyLeave = () => {
    setShowVocabulary(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 py-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-300/5 to-indigo-300/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Enhanced Header with Glassmorphism */}
        <div className="mb-16">
          <div className="text-center mb-12">
            {/* Animated Icon Container */}
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur-xl opacity-30 animate-pulse"></div>
              <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl shadow-2xl transform hover:scale-110 transition-all duration-500">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
              {/* Floating stars */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
            </div>

            <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-6 leading-tight">
              {mockReadingLesson.title}
            </h1>

            <div className="flex items-center justify-center gap-6 mb-8">
              <Badge variant="secondary" className="px-6 py-3 text-sm font-semibold bg-white/90 backdrop-blur-md border border-blue-200/50 text-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Target className="w-4 h-4 mr-2" />
                {mockReadingLesson.level}
              </Badge>
              <Badge variant="secondary" className="px-6 py-3 text-sm font-semibold bg-white/90 backdrop-blur-md border border-green-200/50 text-green-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Clock className="w-4 h-4 mr-2" />
                {mockReadingLesson.duration}
              </Badge>
              <Badge variant="secondary" className="px-6 py-3 text-sm font-semibold bg-white/90 backdrop-blur-md border border-purple-200/50 text-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Trophy className="w-4 h-4 mr-2" />
                {mockReadingLesson.totalQuestions} câu hỏi
              </Badge>
            </div>
          </div>

          {/* Enhanced Progress Overview with Glassmorphism */}
          <Card className="mb-12 bg-white/70 backdrop-blur-xl border-0 shadow-2xl rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5"></div>
            <CardHeader className="text-center pb-6 relative">
              <CardTitle className="flex items-center justify-center gap-3 text-2xl text-gray-800 font-bold">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                Tiến độ học tập
              </CardTitle>
            </CardHeader>
            <CardContent className="relative">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center group">
                  <div className="relative">
                    <div className="text-4xl font-bold text-blue-600 group-hover:scale-110 transition-transform duration-300 mb-2">
                      {progressData.practiceMode.averageScore}%
                    </div>
                    <div className="absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full animate-pulse shadow-lg"></div>
                  </div>
                  <div className="text-sm font-semibold text-gray-700 mb-1">Practice Mode</div>
                  <div className="text-xs text-gray-500 mb-3">{progressData.practiceMode.completed}/{progressData.practiceMode.total} hoàn thành</div>
                  <div className="relative">
                    <Progress value={progressData.practiceMode.averageScore} className="h-3 bg-blue-100/50 rounded-full overflow-hidden" />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full opacity-20"></div>
                  </div>
                </div>

                <div className="text-center group">
                  <div className="relative">
                    <div className="text-4xl font-bold text-green-600 group-hover:scale-110 transition-transform duration-300 mb-2">
                      {progressData.testMode.averageScore}%
                    </div>
                    <div className="absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-r from-green-500 to-green-600 rounded-full animate-pulse shadow-lg"></div>
                  </div>
                  <div className="text-sm font-semibold text-gray-700 mb-1">Test Mode</div>
                  <div className="text-xs text-gray-500 mb-3">{progressData.testMode.completed}/{progressData.testMode.total} hoàn thành</div>
                  <div className="relative">
                    <Progress value={progressData.testMode.averageScore} className="h-3 bg-green-100/50 rounded-full overflow-hidden" />
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 rounded-full opacity-20"></div>
                  </div>
                </div>

                <div className="text-center group">
                  <div className="relative">
                    <div className="text-4xl font-bold text-purple-600 group-hover:scale-110 transition-transform duration-300 mb-2">
                      {Math.round(progressData.overallProgress)}%
                    </div>
                    <div className="absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full animate-pulse shadow-lg"></div>
                  </div>
                  <div className="text-sm font-semibold text-gray-700 mb-1">Tổng thể</div>
                  <div className="text-xs text-gray-500 mb-3">Tiến độ chung</div>
                  <div className="relative">
                    <Progress value={progressData.overallProgress} className="h-3 bg-purple-100/50 rounded-full overflow-hidden" />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full opacity-20"></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Enhanced Mode Selection with 3D Effects */}
          <div className="flex justify-center gap-8 mb-12">
            <Button
              variant={currentMode === 'practice' ? 'default' : 'outline'}
              onClick={() => setCurrentMode('practice')}
              className={`flex items-center gap-4 px-10 py-5 text-xl font-semibold transition-all duration-500 transform ${currentMode === 'practice'
                ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 shadow-2xl hover:shadow-blue-500/25 hover:scale-105 hover:-translate-y-1'
                : 'bg-white/80 backdrop-blur-md border-2 border-blue-200/50 hover:border-blue-300 hover:bg-white/90 hover:shadow-xl hover:scale-105 hover:-translate-y-1'
                } rounded-2xl`}
            >
              <div className={`p-2 rounded-xl ${currentMode === 'practice' ? 'bg-white/20' : 'bg-blue-100'}`}>
                <Target className="w-6 h-6" />
              </div>
              Practice Mode
            </Button>

            <Button
              variant={currentMode === 'test' ? 'default' : 'outline'}
              onClick={handleTestMode}
              className={`flex items-center gap-4 px-10 py-5 text-xl font-semibold transition-all duration-500 transform ${currentMode === 'test'
                ? 'bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 hover:from-green-700 hover:via-emerald-700 hover:to-teal-700 shadow-2xl hover:shadow-green-500/25 hover:scale-105 hover:-translate-y-1'
                : 'bg-white/80 backdrop-blur-md border-2 border-green-200/50 hover:border-green-300 hover:bg-white/90 hover:shadow-xl hover:scale-105 hover:-translate-y-1'
                } rounded-2xl`}
            >
              <div className={`p-2 rounded-xl ${currentMode === 'test' ? 'bg-white/20' : 'bg-green-100'}`}>
                <Play className="w-6 h-6" />
              </div>
              Test Mode
            </Button>
          </div>
        </div>

        {/* Enhanced Reading Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Reading Text */}
          <div className="lg:col-span-2">
            <Card className="bg-white/80 backdrop-blur-xl border-0 shadow-2xl rounded-3xl overflow-hidden">
              <CardHeader className="border-b border-gray-100/50 pb-8 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5"></div>
                <CardTitle className="flex items-center justify-between text-3xl text-gray-800 font-bold relative">
                  <span className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl shadow-lg">
                      <BookMarked className="w-7 h-7 text-white" />
                    </div>
                    Nội dung bài đọc
                  </span>
                  {currentMode === 'test' && (
                    <Button
                      onClick={completeTest}
                      disabled={isTestCompleted}
                      className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 hover:from-green-700 hover:via-emerald-700 hover:to-teal-700 text-white px-8 py-3 shadow-2xl hover:shadow-green-500/25 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 rounded-2xl font-semibold text-lg"
                    >
                      {isTestCompleted ? (
                        <div className="flex items-center gap-2">
                          <Award className="w-5 h-5" />
                          Đã hoàn thành
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <TrendingUp className="w-5 h-5" />
                          Hoàn thành bài test
                        </div>
                      )}
                    </Button>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-10 space-y-10 relative">
                {mockReadingLesson.paragraphs.map((paragraph, index) => (
                  <div key={paragraph.id} className="relative group">
                    <div className="mb-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="relative">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                            {paragraph.id}
                          </div>
                          <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          Đoạn {paragraph.id}
                        </h3>
                      </div>

                      <div
                        className="text-gray-700 leading-relaxed text-justify text-lg bg-gradient-to-r from-gray-50 to-blue-50/30 p-8 rounded-2xl border-l-4 border-blue-500 shadow-lg hover:shadow-xl transition-all duration-300"
                        dangerouslySetInnerHTML={{
                          __html: renderVocabularyHighlight(paragraph.content, paragraph.vocabularyWords)
                        }}
                        onMouseOver={handleVocabularyHover}
                        onMouseOut={handleVocabularyLeave}
                      />

                      {/* Enhanced Vocabulary Tooltip positioned at hover location */}
                      {showVocabulary && paragraph.vocabularyWords.find(v => v.word === showVocabulary) && (
                        <div
                          className="fixed z-50 pointer-events-none"
                          style={{
                            left: tooltipPosition.x + 15,
                            top: tooltipPosition.y - 20,
                            transform: 'translateY(-100%)'
                          }}
                        >
                          <div className="bg-white/95 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-6 max-w-sm pointer-events-auto">
                            <div className="space-y-4">
                              <div className="flex items-center justify-between">
                                <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                  {paragraph.vocabularyWords.find(v => v.word === showVocabulary)!.word}
                                </div>
                                <Badge
                                  variant="outline"
                                  className={`px-3 py-1 text-xs font-semibold ${paragraph.vocabularyWords.find(v => v.word === showVocabulary)!.difficulty === 'easy'
                                    ? 'border-green-300 text-green-700 bg-green-50/80 backdrop-blur-sm'
                                    : paragraph.vocabularyWords.find(v => v.word === showVocabulary)!.difficulty === 'medium'
                                      ? 'border-yellow-300 text-yellow-700 bg-yellow-50/80 backdrop-blur-sm'
                                      : 'border-red-300 text-red-700 bg-red-50/80 backdrop-blur-sm'
                                    }`}
                                >
                                  {paragraph.vocabularyWords.find(v => v.word === showVocabulary)!.difficulty === 'easy' ? 'Dễ' : paragraph.vocabularyWords.find(v => v.word === showVocabulary)!.difficulty === 'medium' ? 'Trung bình' : 'Khó'}
                                </Badge>
                              </div>

                              <div className="space-y-3">
                                <div className="flex items-start gap-3 p-3 bg-blue-50/50 rounded-xl">
                                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-2 flex-shrink-0 shadow-sm"></div>
                                  <div>
                                    <div className="text-sm font-semibold text-blue-700 mb-1">Nghĩa:</div>
                                    <div className="text-gray-800 font-medium">{paragraph.vocabularyWords.find(v => v.word === showVocabulary)!.meaning}</div>
                                  </div>
                                </div>

                                <div className="flex items-start gap-3 p-3 bg-purple-50/50 rounded-xl">
                                  <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 flex-shrink-0 shadow-sm"></div>
                                  <div>
                                    <div className="text-sm font-semibold text-purple-700 mb-1">Phát âm:</div>
                                    <div className="text-gray-800 font-mono font-medium">{paragraph.vocabularyWords.find(v => v.word === showVocabulary)!.example}</div>
                                  </div>
                                </div>

                                <div className="flex items-start gap-3 p-3 bg-green-50/50 rounded-xl">
                                  <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mt-2 flex-shrink-0 shadow-sm"></div>
                                  <div>
                                    <div className="text-sm font-semibold text-green-700 mb-1">Ví dụ:</div>
                                    <div className="text-gray-800 italic font-medium">"{paragraph.vocabularyWords.find(v => v.word === showVocabulary)!.example}"</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Enhanced Mini Question with Glassmorphism */}
                    <Card className="bg-gradient-to-r from-blue-50/80 to-indigo-50/80 backdrop-blur-sm border-0 shadow-xl rounded-2xl overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5"></div>
                      <CardContent className="pt-8 relative">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl shadow-lg">
                            <Lightbulb className="w-6 h-6 text-white" />
                          </div>
                          <h4 className="font-bold text-blue-900 text-xl">
                            Câu hỏi mini:
                          </h4>
                        </div>

                        <p className="text-blue-800 text-lg mb-6 font-semibold leading-relaxed">{paragraph.miniQuestion.question}</p>

                        <div className="space-y-4">
                          {paragraph.miniQuestion.options.map((option, optionIndex) => (
                            <label key={optionIndex} className="flex items-center gap-4 cursor-pointer group p-4 rounded-xl hover:bg-white/50 transition-all duration-300">
                              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${(currentMode === 'practice' && practiceAnswers[paragraph.id] === optionIndex) ||
                                (currentMode === 'test' && testAnswers[paragraph.id] === optionIndex)
                                ? 'border-blue-500 bg-blue-500 shadow-lg'
                                : 'border-gray-300 group-hover:border-blue-400 group-hover:shadow-md'
                                }`}>
                                {((currentMode === 'practice' && practiceAnswers[paragraph.id] === optionIndex) ||
                                  (currentMode === 'test' && testAnswers[paragraph.id] === optionIndex)) && (
                                    <div className="w-2.5 h-2.5 bg-white rounded-full shadow-sm"></div>
                                  )}
                              </div>
                              <span className="text-blue-800 group-hover:text-blue-900 transition-colors font-medium text-lg">{option}</span>
                            </label>
                          ))}
                        </div>

                        {/* Enhanced Answer Explanation with Glassmorphism */}
                        {currentMode === 'practice' && practiceAnswers[paragraph.id] !== undefined && (
                          <div className="mt-8 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-lg">
                            <div className={`flex items-center gap-3 font-bold text-xl ${practiceAnswers[paragraph.id] === paragraph.miniQuestion.correctAnswer
                              ? 'text-green-600'
                              : 'text-red-600'
                              }`}>
                              {practiceAnswers[paragraph.id] === paragraph.miniQuestion.correctAnswer ? (
                                <>
                                  <div className="p-2 bg-green-100 rounded-xl">
                                    <CheckCircle className="w-6 h-6 text-green-600" />
                                  </div>
                                  <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                                    Chính xác! 🎉
                                  </span>
                                </>
                              ) : (
                                <>
                                  <div className="p-2 bg-red-100 rounded-xl">
                                    <div className="w-6 h-6 rounded-full border-2 border-red-600 flex items-center justify-center">
                                      <div className="w-2.5 h-2.5 bg-red-600 rounded-full"></div>
                                    </div>
                                  </div>
                                  <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                                    Chưa đúng! 💪
                                  </span>
                                </>
                              )}
                            </div>
                            <div className="text-gray-700 mt-4 leading-relaxed text-lg bg-gray-50/50 p-4 rounded-xl">
                              {paragraph.miniQuestion.explanation}
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Enhanced Test Results with Glassmorphism */}
          {currentMode === 'test' && isTestCompleted && (
            <div className="lg:col-span-2">
              <Card className="bg-gradient-to-r from-green-50/80 to-emerald-50/80 backdrop-blur-xl border-0 shadow-2xl rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5"></div>
                <CardHeader className="border-b border-green-100/50 pb-6 relative">
                  <CardTitle className="text-green-900 flex items-center gap-3 text-2xl font-bold relative">
                    <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl shadow-lg">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    Kết quả bài test
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6 relative">
                  <div className="text-center">
                    <div className="relative mb-6">
                      <div className="text-6xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                        {testScore}%
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-bounce"></div>
                      <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
                    </div>

                    <div className="text-green-800 mb-6 text-2xl font-bold">
                      {testScore >= 80 ? '🎉 Xuất sắc! Bạn thật tuyệt vời!' : testScore >= 60 ? '👍 Tốt! Hãy tiếp tục phát huy!' : '💪 Cần cải thiện! Đừng nản chí!'}
                    </div>

                    <div className="relative mb-6">
                      <Progress value={testScore} className="h-4 bg-green-100/50 rounded-full overflow-hidden" />
                      <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full opacity-20"></div>
                    </div>

                    <div className="text-lg text-green-700 font-semibold">
                      {Math.round((testScore / 100) * mockReadingLesson.totalQuestions)}/{mockReadingLesson.totalQuestions} câu đúng
                    </div>

                    {/* Achievement badges */}
                    <div className="flex justify-center gap-4 mt-6">
                      {testScore >= 80 && (
                        <div className="flex items-center gap-2 px-4 py-2 bg-yellow-100 rounded-full border border-yellow-300">
                          <Star className="w-5 h-5 text-yellow-600" />
                          <span className="text-yellow-800 font-semibold">Xuất sắc</span>
                        </div>
                      )}
                      {testScore >= 60 && (
                        <div className="flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full border border-blue-300">
                          <TrendingUp className="w-5 h-5 text-blue-600" />
                          <span className="text-blue-800 font-semibold">Tiến bộ</span>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}