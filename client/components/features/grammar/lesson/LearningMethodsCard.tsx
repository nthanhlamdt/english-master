import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Lightbulb } from 'lucide-react'
import React from 'react'

export function LearningMethodsCard() {
  return (
    <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
      <CardHeader className="flex items-center space-x-3">
        <div className="bg-green-600 p-2 rounded-lg">
          <Lightbulb className="w-5 h-5 text-white" />
        </div>
        <div>
          <CardTitle className="text-lg font-semibold text-gray-900">Phương pháp học</CardTitle>
          <CardDescription className="text-sm text-gray-600">5 cách học hiệu quả</CardDescription>
        </div>
      </CardHeader>

      <CardContent className="space-y-3 text-sm text-gray-700">
        <div className="flex items-start space-x-2">
          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
          <p>📖 Học qua câu chuyện</p>
        </div>
        <div className="flex items-start space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
          <p>🎯 Hiểu cấu trúc</p>
        </div>
        <div className="flex items-start space-x-2">
          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
          <p>👥 Biết cách dùng</p>
        </div>
        <div className="flex items-start space-x-2">
          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
          <p>💡 Tình huống tương tác</p>
        </div>
        <div className="flex items-start space-x-2">
          <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
          <p>🧠 Mẹo ghi nhớ</p>
        </div>
      </CardContent>
    </Card>
  )
}
