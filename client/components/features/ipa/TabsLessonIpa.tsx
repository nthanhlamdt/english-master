import { VideoSection } from "@/components/common";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function TabsLessonIpa() {
  return (
    <div className="flex flex-col xl:flex-row gap-4">
      <Card className="flex-1">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-gray-800">Video hướng dẫn phát âm</CardTitle>
        </CardHeader>
        <CardContent>
          <VideoSection />
        </CardContent>
      </Card>

      <Card className="w-full xl:w-[400px]">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-gray-800">
            Mô tả cách phát âm
          </CardTitle>
        </CardHeader>

        <CardContent className="flex flex-col md:flex-row xl:flex-col gap-4 items-center">
          <Image
            src="/images/mataam.jpeg"
            alt="Hình ảnh minh họa cách phát âm âm /iː/"
            width={280}
            height={280}
            className="rounded-xl w-full max-w-[300px] object-cover shadow-lg"
            priority
          />
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-700 mb-3">
              Kỹ thuật phát âm âm /iː/
            </h3>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-600 leading-relaxed">
                  <span className="font-medium text-gray-700">Căng nhẹ môi:</span> Kéo nhẹ hai góc môi sang hai bên, tạo hình dáng môi hơi căng
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-600 leading-relaxed">
                  <span className="font-medium text-gray-700">Độ dài âm:</span> Âm /iː/ được phát âm dài hơn so với âm /i/ ngắn
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-600 leading-relaxed">
                  <span className="font-medium text-gray-700">Vị trí lưỡi:</span> Đầu lưỡi chạm nhẹ vào răng dưới, lưỡi nâng cao trong miệng
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
