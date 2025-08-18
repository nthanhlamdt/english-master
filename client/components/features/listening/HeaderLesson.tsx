import { Badge } from '@/components/ui/badge'
import { Clock, Headphones, Target, Trophy } from 'lucide-react'

export function HeaderLesson() {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-4 mb-4">
        <div className="bg-gradient-to-r from-pink-500 to-rose-500 p-3 rounded-2xl">
          <Headphones className="w-8 h-8 text-white" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Nghe chép chính tả</h1>
          <p className="text-gray-600">Luyện kỹ năng nghe và viết chính xác</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Badge className="bg-pink-100 text-pink-800 border-pink-200">
          <Target className="w-4 h-4 mr-1" />
          Cấp độ B1
        </Badge>
        <Badge className="bg-blue-100 text-blue-800 border-blue-200">
          <Clock className="w-4 h-4 mr-1" />
          5 từ
        </Badge>
        <Badge className="bg-green-100 text-green-800 border-green-200">
          <Trophy className="w-4 h-4 mr-1" />
          20% hoàn thành
        </Badge>
      </div>
    </div>
  )
}
