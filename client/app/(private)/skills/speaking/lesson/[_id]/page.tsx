'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import {
  Mic,
  MicOff,
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Headphones,
  Target,
  CheckCircle,
  XCircle,
  Star,
  Timer,
  BarChart3
} from "lucide-react"

interface Sentence {
  id: number
  text: string
  translation: string
  audioStart: number
  audioEnd: number
  pronunciation: string[]
}

interface ShadowingMode {
  id: string
  name: string
  description: string
  icon: any
  difficulty: string
  color: string
}

interface SpeakingSession {
  currentMode: string
  isRecording: boolean
  isPlaying: boolean
  isShadowing: boolean
  currentSentenceIndex: number
  totalScore: number
  sessionTime: number
  isLessonCompleted: boolean
  showTranslation: boolean
  showWaveform: boolean
}

export default function SpeakingLessonPage() {
  const [session, setSession] = useState<SpeakingSession>({
    currentMode: 'basic',
    isRecording: false,
    isPlaying: false,
    isShadowing: false,
    currentSentenceIndex: 0,
    totalScore: 0,
    sessionTime: 0,
    isLessonCompleted: false,
    showTranslation: false,
    showWaveform: false
  })

  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(1)
  const [isMuted, setIsMuted] = useState(false)
  const [recordingTime, setRecordingTime] = useState(0)
  const [sentenceScores, setSentenceScores] = useState<number[]>([])

  const audioRef = useRef<HTMLAudioElement>(null)
  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const audioChunksRef = useRef<Blob[]>([])
  const sessionTimerRef = useRef<NodeJS.Timeout | null>(null)

  // Shadowing modes
  const shadowingModes: ShadowingMode[] = [
    {
      id: 'basic',
      name: 'Cơ bản',
      description: 'Nghe và bắt chước từng câu',
      icon: Target,
      difficulty: 'Dễ',
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 'advanced',
      name: 'Nâng cao',
      description: 'Bắt chước với tốc độ nhanh hơn',
      icon: Target,
      difficulty: 'Trung bình',
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 'expert',
      name: 'Chuyên gia',
      description: 'Bắt chước hoàn hảo với timing chính xác',
      icon: Target,
      difficulty: 'Khó',
      color: 'from-red-500 to-pink-600'
    }
  ]

  // Mock data cho đoạn văn
  const [sentences] = useState<Sentence[]>([
    {
      id: 1,
      text: "Hello, how are you today?",
      translation: "Xin chào, hôm nay bạn khỏe không?",
      audioStart: 0,
      audioEnd: 3,
      pronunciation: ["həˈloʊ", "haʊ", "ɑːr", "juː", "təˈdeɪ"]
    },
    {
      id: 2,
      text: "I'm doing very well, thank you.",
      translation: "Tôi rất khỏe, cảm ơn bạn.",
      audioStart: 3,
      audioEnd: 6,
      pronunciation: ["aɪm", "ˈduːɪŋ", "ˈveri", "wel", "θæŋk", "juː"]
    },
    {
      id: 3,
      text: "What about you?",
      translation: "Còn bạn thì sao?",
      audioStart: 6,
      audioEnd: 8,
      pronunciation: ["wɒt", "əˈbaʊt", "juː"]
    },
    {
      id: 4,
      text: "I'm excited to learn English.",
      translation: "Tôi rất hào hứng học tiếng Anh.",
      audioStart: 8,
      audioEnd: 12,
      pronunciation: ["aɪm", "ɪkˈsaɪtɪd", "tuː", "lɜːn", "ˈɪŋɡlɪʃ"]
    }
  ])

  // Timer effect
  useEffect(() => {
    if (session.isRecording) {
      sessionTimerRef.current = setInterval(() => {
        setRecordingTime(prev => prev + 1)
      }, 1000)
    } else {
      if (sessionTimerRef.current) {
        clearInterval(sessionTimerRef.current)
      }
    }

    return () => {
      if (sessionTimerRef.current) {
        clearInterval(sessionTimerRef.current)
      }
    }
  }, [session.isRecording])

  // Audio controls
  const handlePlayPause = () => {
    if (audioRef.current) {
      if (session.isPlaying) {
        audioRef.current.pause()
        setSession(prev => ({ ...prev, isPlaying: false }))
      } else {
        audioRef.current.play()
        setSession(prev => ({ ...prev, isPlaying: true }))
      }
    }
  }

  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume)
    if (audioRef.current) {
      audioRef.current.volume = newVolume
    }
  }

  const handleMuteToggle = () => {
    setIsMuted(!isMuted)
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
    }
  }

  // Recording controls
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const mediaRecorder = new MediaRecorder(stream)
      mediaRecorderRef.current = mediaRecorder
      audioChunksRef.current = []

      mediaRecorder.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data)
      }

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' })
        // Here you would typically send the audio to your backend for analysis
        // For now, we'll simulate a score
        const simulatedScore = Math.floor(Math.random() * 40) + 60 // 60-100
        setSentenceScores(prev => {
          const newScores = [...prev]
          newScores[session.currentSentenceIndex] = simulatedScore
          return newScores
        })

        // Update total score
        const newTotalScore = sentenceScores.reduce((sum, score) => sum + score, simulatedScore) / (sentenceScores.length + 1)
        setSession(prev => ({
          ...prev,
          totalScore: newTotalScore,
          isRecording: false
        }))

        // Check if lesson is completed
        if (newTotalScore >= 80) {
          setSession(prev => ({ ...prev, isLessonCompleted: true }))
        }
      }

      mediaRecorder.start()
      setSession(prev => ({ ...prev, isRecording: true }))
      setRecordingTime(0)
    } catch (error) {
      console.error('Error accessing microphone:', error)
    }
  }

  const stopRecording = () => {
    if (mediaRecorderRef.current && session.isRecording) {
      mediaRecorderRef.current.stop()
      mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop())
    }
  }

  const nextSentence = () => {
    if (session.currentSentenceIndex < sentences.length - 1) {
      setSession(prev => ({ ...prev, currentSentenceIndex: prev.currentSentenceIndex + 1 }))
    }
  }

  const previousSentence = () => {
    if (session.currentSentenceIndex > 0) {
      setSession(prev => ({ ...prev, currentSentenceIndex: prev.currentSentenceIndex - 1 }))
    }
  }

  const resetLesson = () => {
    setSession(prev => ({
      ...prev,
      currentSentenceIndex: 0,
      totalScore: 0,
      sessionTime: 0,
      isLessonCompleted: false
    }))
    setSentenceScores([])
    setRecordingTime(0)
  }

  const currentSentence = sentences[session.currentSentenceIndex]
  const progress = (session.currentSentenceIndex / sentences.length) * 100
  const averageScore = sentenceScores.length > 0 ? sentenceScores.reduce((sum, score) => sum + score, 0) / sentenceScores.length : 0

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            ��️ Speaking Lesson - Shadowing Method
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Luyện tập kỹ năng nói bằng phương pháp Shadowing - Nghe và bắt chước chính xác từng câu
          </p>
        </div>

        {/* Progress Overview */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl rounded-2xl">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-700">Tiến độ</h3>
                <p className="text-2xl font-bold text-blue-600">{Math.round(progress)}%</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <BarChart3 className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-700">Điểm số</h3>
                <p className="text-2xl font-bold text-green-600">{Math.round(averageScore)}%</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Timer className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-700">Thời gian</h3>
                <p className="text-2xl font-bold text-purple-600">{Math.floor(session.sessionTime / 60)}:{String(session.sessionTime % 60).padStart(2, '0')}</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-700">Trạng thái</h3>
                <p className="text-2xl font-bold text-orange-600">
                  {session.isLessonCompleted ? 'Hoàn thành' : 'Đang học'}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column - Audio Player & Controls */}
          <div className="space-y-6">
            {/* Audio Player Card */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl rounded-2xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-100">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                    <Headphones className="w-5 h-5 text-white" />
                  </div>
                  <span>Audio mẫu</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                {/* Hidden audio element */}
                <audio
                  ref={audioRef}
                  src="/sounds/sound.mp3"
                  preload="metadata"
                  onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
                  onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
                  onEnded={() => setSession(prev => ({ ...prev, isPlaying: false }))}
                />

                {/* Large Play Button */}
                <div className="flex items-center justify-center mb-8">
                  <Button
                    onClick={handlePlayPause}
                    size="lg"
                    className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-2xl transform hover:scale-105 transition-all duration-200"
                  >
                    {session.isPlaying ? (
                      <Pause className="w-12 h-12" />
                    ) : (
                      <Play className="w-12 h-12 ml-1" />
                    )}
                  </Button>
                </div>

                {/* Progress Bar */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{Math.floor(currentTime)}s</span>
                    <span>{Math.floor(duration)}s</span>
                  </div>
                  <Progress value={(currentTime / duration) * 100} className="h-2" />
                </div>

                {/* Volume Controls */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={handleMuteToggle}
                      className="w-10 h-10 rounded-full"
                    >
                      {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                    </Button>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.1"
                      value={volume}
                      onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
                      className="w-24 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recording Controls Card */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="w-10 h-10 bg-red-500 rounded-xl flex items-center justify-center">
                    <Mic className="w-5 h-5 text-white" />
                  </div>
                  <span>Ghi âm & Đánh giá</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                {/* Recording Status */}
                <div className="text-center">
                  {session.isRecording ? (
                    <div className="space-y-3">
                      <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto animate-pulse">
                        <Mic className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-red-600 font-semibold">Đang ghi âm...</p>
                      <p className="text-2xl font-bold text-red-600">{recordingTime}s</p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto">
                        <Mic className="w-8 h-8 text-gray-500" />
                      </div>
                      <p className="text-gray-600">Sẵn sàng ghi âm</p>
                    </div>
                  )}
                </div>

                {/* Recording Buttons */}
                <div className="flex gap-3">
                  {!session.isRecording ? (
                    <Button
                      onClick={startRecording}
                      className="flex-1 bg-red-500 hover:bg-red-600 h-12"
                    >
                      <Mic className="w-5 h-5 mr-2" />
                      Bắt đầu ghi âm
                    </Button>
                  ) : (
                    <Button
                      onClick={stopRecording}
                      className="flex-1 bg-gray-500 hover:bg-gray-600 h-12"
                    >
                      <MicOff className="w-5 h-5 mr-2" />
                      Dừng ghi âm
                    </Button>
                  )}
                </div>

                {/* Current Sentence Score */}
                {sentenceScores[session.currentSentenceIndex] !== undefined && (
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <p className="text-sm text-gray-600 mb-2">Điểm câu hiện tại:</p>
                    <div className="text-3xl font-bold text-green-600">
                      {sentenceScores[session.currentSentenceIndex]}%
                    </div>
                    {sentenceScores[session.currentSentenceIndex] >= 80 ? (
                      <div className="flex items-center justify-center gap-2 text-green-600 mt-2">
                        <CheckCircle className="w-5 h-5" />
                        <span className="text-sm">Xuất sắc!</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-2 text-orange-600 mt-2">
                        <XCircle className="w-5 h-5" />
                        <span className="text-sm">Cần luyện tập thêm</span>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Sentence Display & Navigation */}
          <div className="space-y-6">
            {/* Current Sentence Card */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl rounded-2xl">
              <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 border-b border-green-100">
                <CardTitle className="flex items-center justify-between">
                  <span className="text-xl">Câu {session.currentSentenceIndex + 1}/{sentences.length}</span>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    {shadowingModes.find(m => m.id === session.currentMode)?.difficulty}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                {/* English Text */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 leading-relaxed">
                    {currentSentence.text}
                  </h3>

                  {/* Pronunciation Guide */}
                  <div className="bg-blue-50 p-4 rounded-xl">
                    <p className="text-sm text-blue-600 font-semibold mb-2">Phát âm (IPA):</p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {currentSentence.pronunciation.map((phoneme, index) => (
                        <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-lg text-sm font-mono">
                          {phoneme}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Translation Toggle */}
                <div className="text-center">
                  <Button
                    variant="outline"
                    onClick={() => setSession(prev => ({ ...prev, showTranslation: !prev.showTranslation }))}
                    className="bg-white hover:bg-gray-50"
                  >
                    {session.showTranslation ? 'Ẩn' : 'Hiện'} bản dịch
                  </Button>

                  {session.showTranslation && (
                    <div className="mt-4 p-4 bg-gray-50 rounded-xl">
                      <p className="text-lg text-gray-700 italic">
                        {currentSentence.translation}
                      </p>
                    </div>
                  )}
                </div>

                {/* Navigation Controls */}
                <div className="flex justify-between items-center">
                  <Button
                    variant="outline"
                    onClick={previousSentence}
                    disabled={session.currentSentenceIndex === 0}
                    className="px-6"
                  >
                    ← Câu trước
                  </Button>

                  <Button
                    variant="outline"
                    onClick={nextSentence}
                    disabled={session.currentSentenceIndex === sentences.length - 1}
                    className="px-6"
                  >
                    Câu tiếp →
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Lesson Progress Card */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl rounded-2xl">
              <CardHeader>
                <CardTitle className="text-xl">Tiến độ bài học</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Overall Progress */}
                  <div>
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Tiến độ chung</span>
                      <span>{Math.round(progress)}%</span>
                    </div>
                    <Progress value={progress} className="h-3" />
                  </div>

                  {/* Sentence Scores */}
                  <div className="space-y-3">
                    <p className="text-sm font-semibold text-gray-700">Điểm từng câu:</p>
                    <div className="grid grid-cols-2 gap-3">
                      {sentences.map((sentence, index) => (
                        <div key={sentence.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <span className="text-sm text-gray-600">Câu {index + 1}</span>
                          <div className="flex items-center gap-2">
                            {sentenceScores[index] !== undefined ? (
                              <>
                                <span className={`text-sm font-bold ${sentenceScores[index] >= 80 ? 'text-green-600' : 'text-orange-600'
                                  }`}>
                                  {sentenceScores[index]}%
                                </span>
                                {sentenceScores[index] >= 80 ? (
                                  <CheckCircle className="w-4 h-4 text-green-600" />
                                ) : (
                                  <XCircle className="w-4 h-4 text-orange-600" />
                                )}
                              </>
                            ) : (
                              <span className="text-sm text-gray-400">Chưa làm</span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Lesson Completion Status */}
                  {session.isLessonCompleted && (
                    <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl text-center">
                      <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-3" />
                      <h3 className="text-xl font-bold text-green-800 mb-2">Chúc mừng!</h3>
                      <p className="text-green-700">
                        Bạn đã hoàn thành bài học với điểm số {Math.round(session.totalScore)}%
                      </p>
                    </div>
                  )}

                  {/* Reset Button */}
                  <Button
                    variant="outline"
                    onClick={resetLesson}
                    className="w-full"
                  >
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Làm lại bài học
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Shadowing Modes Selection */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl rounded-2xl">
          <CardHeader>
            <CardTitle className="text-xl">Chọn chế độ Shadowing</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {shadowingModes.map((mode) => (
                <div
                  key={mode.id}
                  className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${session.currentMode === mode.id
                    ? `border-blue-500 bg-gradient-to-r ${mode.color} text-white shadow-lg`
                    : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-md'
                    }`}
                  onClick={() => setSession(prev => ({ ...prev, currentMode: mode.id }))}
                >
                  <div className="text-center space-y-3">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto ${session.currentMode === mode.id ? 'bg-white/20' : 'bg-gray-100'
                      }`}>
                      <mode.icon className={`w-8 h-8 ${session.currentMode === mode.id ? 'text-white' : 'text-gray-600'
                        }`} />
                    </div>
                    <h3 className={`font-bold text-lg ${session.currentMode === mode.id ? 'text-white' : 'text-gray-800'
                      }`}>
                      {mode.name}
                    </h3>
                    <p className={`text-sm ${session.currentMode === mode.id ? 'text-white/90' : 'text-gray-600'
                      }`}>
                      {mode.description}
                    </p>
                    <Badge
                      variant="secondary"
                      className={`${session.currentMode === mode.id
                        ? 'bg-white/20 text-white border-white/30'
                        : 'bg-gray-100 text-gray-700'
                        }`}
                    >
                      {mode.difficulty}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}