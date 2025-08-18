import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function LessonInfo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-900">Thông tin bài học</CardTitle>
      </CardHeader>

      <CardContent className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Danh mục</span>
          <span className="text-sm font-medium text-gray-900">Grammar Basics</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Cấp độ</span>
          <span className={`px-2 py-1 rounded-full text-xs font-medium bg-green-100`}>
            Beginner
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Tình huống tương tác</span>
          <span className="text-sm font-medium text-gray-900">1</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Mẹo ghi nhớ</span>
          <span className="text-sm font-medium text-gray-900">1</span>
        </div>
      </CardContent>
    </Card>
  )
}
