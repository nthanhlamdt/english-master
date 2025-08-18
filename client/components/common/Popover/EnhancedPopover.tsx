// components/common/EnhancedPopover.tsx
import { PopoverContent } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { Play, Trophy } from 'lucide-react'
import Link from 'next/link';

interface EnhancedPopoverProps {
  href: string
  skill: 'listening' | 'reading' | 'speaking' | 'writing' | 'vocabulary';
}

const skillConfig = {
  listening: {
    icon: '🎧',
    colors: {
      bg: 'from-pink-50 to-rose-50',
      iconBg: 'from-pink-500 to-rose-500',
      button: 'from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600',
      outline: 'border-pink-300 text-pink-600 hover:bg-pink-50 hover:border-pink-400',
      tip: 'from-pink-100 to-rose-100 border-pink-200'
    },
    tip: 'Nghe kỹ từng từ và lặp lại để cải thiện phát âm',
    description: 'Sẵn sàng luyện kỹ năng nghe với bài học này'
  },
  reading: {
    icon: '📖',
    colors: {
      bg: 'from-indigo-50 to-blue-50',
      iconBg: 'from-indigo-500 to-blue-500',
      button: 'from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600',
      outline: 'border-indigo-300 text-indigo-600 hover:bg-indigo-50 hover:border-indigo-400',
      tip: 'from-indigo-100 to-blue-100 border-indigo-200'
    },
    tip: 'Đọc kỹ từng đoạn và ghi chú từ vựng mới',
    description: 'Sẵn sàng luyện kỹ năng đọc với bài học này'
  },
  speaking: {
    icon: '🗣️',
    colors: {
      bg: 'from-orange-50 to-amber-50',
      iconBg: 'from-orange-500 to-amber-500',
      button: 'from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600',
      outline: 'border-orange-300 text-orange-600 hover:bg-orange-50 hover:border-orange-400',
      tip: 'from-orange-100 to-amber-100 border-orange-200'
    },
    tip: 'Nói to và rõ ràng, luyện tập phát âm chuẩn',
    description: 'Sẵn sàng luyện kỹ năng nói với bài học này'
  },
  writing: {
    icon: '✍️',
    colors: {
      bg: 'from-teal-50 to-cyan-50',
      iconBg: 'from-teal-500 to-cyan-500',
      button: 'from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600',
      outline: 'border-teal-300 text-teal-600 hover:bg-teal-50 hover:border-teal-400',
      tip: 'from-teal-100 to-cyan-100 border-teal-200'
    },
    tip: 'Viết câu đơn giản trước, sau đó mở rộng thành đoạn văn',
    description: 'Sẵn sàng luyện kỹ năng viết với bài học này'
  },
  vocabulary: {
    icon: '📚',
    colors: {
      bg: 'from-purple-50 to-violet-50',
      iconBg: 'from-purple-500 to-violet-500',
      button: 'from-purple-500 to-violet-500 hover:from-purple-600 hover:to-violet-600',
      outline: 'border-purple-300 text-purple-600 hover:bg-purple-50 hover:border-purple-400',
      tip: 'from-purple-100 to-violet-100 border-purple-200'
    },
    tip: 'Học từ vựng theo chủ đề và luyện tập thường xuyên',
    description: 'Sẵn sàng học từ vựng với bài học này'
  }
}

export function EnhancedPopover({ skill, href }: EnhancedPopoverProps) {
  const config = skillConfig[skill];

  return (
    <PopoverContent className={`w-96 bg-gradient-to-br ${config.colors.bg} text-gray-800 border-0 shadow-2xl rounded-3xl p-8`}>
      <div className="space-y-6">
        <div className="text-center">
          <div className={`bg-gradient-to-br ${config.colors.iconBg} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
            <span className="text-2xl">{config.icon}</span>
          </div>
          <h3 className="font-bold text-gray-800 text-xl mb-2">Bắt đầu học</h3>
          <p className="text-sm text-gray-600">
            {config.description}
          </p>
        </div>

        <div className="space-y-3">
          <Link href={href}>
            <Button
              className={`w-full mb-2 bg-gradient-to-r cursor-pointer ${config.colors.button} text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200`}
            >
              <Play className="w-4 h-4 mr-2" />
              Bắt đầu học ngay
            </Button>
          </Link>

          <Button
            variant="outline"
            className={`w-full ${config.colors.outline} cursor-pointer font-semibold py-3 rounded-xl transition-all duration-200`}
          >
            <Trophy className="w-4 h-4 mr-2" />
            Xem thành tích
          </Button>
        </div>

        <div className={`bg-gradient-to-r ${config.colors.tip} rounded-xl p-4`}>
          <p className="text-xs text-gray-600 text-center">
            💡 <strong>Tip:</strong> {config.tip}
          </p>
        </div>
      </div>
    </PopoverContent>
  )
}