import { AudioSection } from '@/components/common'
import { Card, CardContent } from '@/components/ui/card'
import { Headphones } from 'lucide-react'

export function AudioPlayerLesson() {
  return (
    <Card className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl text-white w-full">
      <CardContent className='space-y-4'>
        <div className="flex items-center gap-3">
          <Headphones className="w-8 h-8" />
          <div>
            <h3 className="text-lg font-bold">Audio Player</h3>
            <p className="text-indigo-100 text-sm">English Listening Practice</p>
          </div>
        </div>

        <AudioSection />
      </CardContent>
    </Card>
  )
}
