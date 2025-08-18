'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { ChevronsLeft, ChevronsRight, Pause, Play, RotateCcw, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function AudioSection() {
  const audioUrl = "https://res.cloudinary.com/dbavrtxsf/video/upload/v1755150005/5_Ng%C3%B3n_B%C3%A0n_Tay_%C4%90%C3%A0n_C%C3%A1_G%E1%BB%97_OST_-_Mounter_x_Nguy%E1%BB%85n_H%C3%B9ng_-_Official_Lyric_Video_hljlos.mp3"
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [hoverTime, setHoverTime] = useState<number>(0)
  const [showHoverTime, setShowHoverTime] = useState(false)
  const [volume, setVolume] = useState(1)
  const [isVolume, setIsVolume] = useState(false)

  //useEffect lấy tổng thời gian
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    //gọi hàm lấy tổng thời gian
    handleLoadedMetadata()

    //Hàm tăng giảm thời gian bằng key
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        handleIncreaseTime()
      } else if (e.key === 'ArrowLeft') {
        handleDecreaseTime()
      }
    }

    document.addEventListener('keydown', (e: KeyboardEvent) => handleKeyDown(e))
    return () => {
      document.removeEventListener('keydown', (e: KeyboardEvent) => handleKeyDown(e))
    }
  }, [])

  const handlePlay = () => {
    setIsPlaying(true)
  }

  const handlePause = () => {
    setIsPlaying(false)
  }

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) audioRef.current.pause()
      else audioRef.current.play()
    }
  }

  //Hàm cập nhật thời gian hiện tại
  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current?.currentTime || 0)
  }

  //Hàm lấy tổng thời gian
  const handleLoadedMetadata = () => {
    setDuration(audioRef.current?.duration || 0)
  }

  //Hàm Format thời giang dạng 00:00
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }


  //Hàm xử lý click vào progress
  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current) {
      const rect = e.currentTarget.getBoundingClientRect()
      const clickX = e.clientX - rect.left
      const percentage = clickX / rect.width
      const newTime = percentage * duration
      audioRef.current.currentTime = newTime
      setCurrentTime(newTime)
    }
  }

  //Hàm xử lý hover vào progress
  const handleProgressHover = (e: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current) {
      const rect = e.currentTarget.getBoundingClientRect()
      const hoverX = e.clientX - rect.left
      const percentage = hoverX / rect.width
      const hoverTime = percentage * duration
      setHoverTime(hoverTime)
      setShowHoverTime(true)
    }
  }

  //Hàm xử lý rời khỏi progress
  const handleProgressLeave = () => {
    setShowHoverTime(false)
    setHoverTime(0)
  }

  //Hàm reset thời gian
  const handleResetTime = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0
      setCurrentTime(0)
      audioRef.current.play()
      setIsPlaying(true)
    }
  }

  //Hàm tăng thời gian 5s
  const handleIncreaseTime = () => {
    if (audioRef.current) {
      audioRef.current.currentTime += 5
      setCurrentTime(audioRef.current.currentTime)
    }
  }

  //Hàm giảm thời gian 5s
  const handleDecreaseTime = () => {
    if (audioRef.current) {
      audioRef.current.currentTime -= 5
      setCurrentTime(audioRef.current.currentTime)
    }
  }

  //Hàm update volume
  const handleVolumeChange = (value: number) => {
    if (audioRef.current) {
      audioRef.current.volume = value
      setVolume(value)
    }
  }

  //Hàm click volume
  const handleVolumeClick = () => {
    if (audioRef.current) {
      audioRef.current.volume = isVolume ? volume : 0
      setIsVolume(!isVolume)
    }
  }

  return (
    <Card className="bg-white text-black">
      <CardHeader className="flex flex-col items-center gap-4">
        <CardTitle className="text-xl">Nghe đoạn văn</CardTitle>
        <div className="w-14 h-14 p-2 bg-primary rounded-full flex items-center justify-center">
          {
            isPlaying ?
              <Pause className="w-8 h-8 text-white" onClick={handlePlayPause} /> :
              <Play className="w-8 h-8 text-white" onClick={handlePlayPause} />
          }
        </div>
      </CardHeader>

      <CardContent>
        <audio
          src={audioUrl}
          ref={audioRef}
          onPlay={handlePlay}
          onPause={handlePause}
          onTimeUpdate={handleTimeUpdate}         /* Cập nhật thời gian hiện tại */
          onLoadedMetadata={handleLoadedMetadata} /* Lấy tổng thời gian */
          preload="metadata"
        />

        <div className="flex justify-between text-gray-400 text-sm">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>

        {/* Sử dụng Progress component + wrapper để thêm click và hover */}
        <div className="relative mt-2">
          {/* Hover Time Tooltip */}
          {showHoverTime && hoverTime !== 0 && (
            <div
              className="absolute -top-8 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded pointer-events-none z-10"
              style={{
                left: `${(hoverTime / duration) * 100}%`
              }}
            >
              {formatTime(hoverTime)}
            </div>
          )}

          <div
            className="relative cursor-pointer group"
            onClick={handleProgressClick}
            onMouseMove={handleProgressHover}
            onMouseLeave={handleProgressLeave}
          >
            <Progress
              className="bg-gray-200 h-3"
              value={duration > 0 ? (currentTime / duration) * 100 : 0}
            />

            {showHoverTime && (
              <div
                className="absolute top-0 h-3 w-0.5 bg-blue-400 pointer-events-none"
                style={{
                  left: `${(hoverTime / duration) * 100}%`
                }}
              />
            )}
          </div>
        </div>

        <div className="flex justify-between mt-4">
          <div className="flex justify-center gap-2">
            <Button
              className="w-10 h-10 bg-gray-200 text-gray-600 hover:bg-gray-300 hover:scale-100"
              onClick={handleResetTime}
            >
              <RotateCcw />
            </Button>

            <Button
              className="w-10 h-10 bg-gray-200 text-gray-600 hover:bg-gray-300 hover:scale-100"
              onClick={handleDecreaseTime}
            >
              <ChevronsLeft />
            </Button>

            <Button
              className="w-10 h-10 bg-gray-200 text-gray-600 hover:bg-gray-300 hover:scale-100"
              onClick={handleIncreaseTime}
            >
              <ChevronsRight />
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <Button
              className="w-10 h-10 bg-gray-200 text-gray-600 hover:bg-gray-300 hover:scale-100"
              onClick={handleVolumeClick}
            >
              {isVolume ? <VolumeX /> : <Volume2 />}
            </Button>

            <Slider
              max={100}
              min={0}
              step={1}
              className="w-24 bg-gray-200"
              value={[volume * 100]}
              onValueChange={e => handleVolumeChange(e[0] / 100)}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
