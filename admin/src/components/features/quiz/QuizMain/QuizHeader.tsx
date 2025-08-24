'use client'
import { PageHeader, StatsGrid } from "@/components/common";
import FormCreateQuiz from "@/components/common/form/FormCreateQuiz";
import { Dialog } from "@/components/ui/dialog";
import { Bookmark, Users, Eye, TrendingUp } from "lucide-react";
import { useState } from "react";

interface props {
  callback: () => void
}

export default function QuizHeader({ callback }: props) {
  const [isLoading, setIsLoading] = useState(false)
  const stats = [
    {
      title: "Tổng Danh Mục Quiz",
      value: "5",
      change: { value: "+2 so với tháng trước", isPositive: true },
      icon: Bookmark
    },
    {
      title: "Tổng Quiz",
      value: "1.230",
      change: { value: "+120 so với tháng trước", isPositive: true },
      icon: Users
    },
    {
      title: "Lượt Làm Quiz Tháng",
      value: "12.5K",
      change: { value: "+8% so với tháng trước", isPositive: true },
      icon: Eye
    },
    {
      title: "Tỷ Lệ Hoàn Thành Quiz",
      value: "76%",
      change: { value: "+2% so với tháng trước", isPositive: true },
      icon: TrendingUp
    }
  ];

  return (
    <header>
      <Dialog>
        <PageHeader
          title="Ngân hàng câu hỏi"
          subtitle="Quản lý ngân hàng câu hỏi"
          primaryAction={{
            label: "Thêm chủ đề quiz",
          }}
        />

        <FormCreateQuiz setIsLoading={setIsLoading} callback={callback} isLoading={isLoading} />
      </Dialog>

      <StatsGrid stats={stats} />
    </header>
  );
}