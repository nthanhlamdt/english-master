import { Section } from '@/components/common'
import React from 'react'
import CardLearningPathSection from './CardLearningPathSection'
import { BookOpen, MessageCircle, Volume2 } from 'lucide-react'

export function LearningPathSection() {

  const data = [
    {
      title: 'IPA - Phát âm chuẩn',
      description: 'Học bảng chữ cái phiên âm quốc tế, nắm vững cách phát âm từng âm tiết',
      list: ['44 âm tiết tiếng Anh', 'Luyện tập phát âm AI', 'Đánh giá phát âm chuẩn'],
      color: 'primary',
      Icon: Volume2,
    },
    {
      title: 'Từ vựng thông minh',
      description: 'Học từ vựng theo chủ đề với phương pháp ghi nhớ hiệu quả',
      list: ['5000+ từ vựng thiết yếu', 'Flashcard thông minh', 'Ghi nhớ qua hình ảnh'],
      color: 'secondary',
      Icon: BookOpen,
    },
    {
      title: 'Ngữ pháp dễ hiểu',
      description: 'Nắm vững ngữ pháp qua các ví dụ thực tế và bài tập tương tác',
      list: ['Giải thích dễ hiểu', 'Bài tập tương tác', 'Ví dụ thực tế'],
      color: 'accent',
      Icon: MessageCircle,
    },
  ]

  return (
    <Section
      title='Lộ trình học tập thông minh'
      headline='Xây dựng nền tảng vững chắc'
      description="Từ cơ bản đến thành thạo với phương pháp học được cá nhân hóa hoàn toàn"
      color="primary"
      Icon={BookOpen}
    >
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto'>
        {data.map((item, index) => (
          <CardLearningPathSection
            key={index}
            title={item.title}
            description={item.description}
            list={item.list}
            color={item.color as 'primary' | 'secondary' | 'accent'}
            className={
              data.length === 3 && index === 2
                ? ''
                : ''
            }
          />
        ))}
      </div>
    </Section>
  )
}
