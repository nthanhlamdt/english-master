'use client'
import { PageHeader, StatsGrid } from "@/components/common";
import FormCreateVocabularyTopic from "@/components/common/form/FormCreateVocabularyTopic";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Bookmark, Users, Eye, TrendingUp, Loader2 } from "lucide-react";
import { useState } from "react";

export function VocabularyHeader() {
  const [isLoading, setIsLoading] = useState(false)
  const stats = [
    {
      title: "Tổng Danh Mục",
      value: "5",
      change: { value: "+2 so với tháng trước", isPositive: true },
      icon: Bookmark
    },
    {
      title: "Tổng Từ Vựng",
      value: "8.890",
      change: { value: "+234 so với tháng trước", isPositive: true },
      icon: Users
    },
    {
      title: "Lượt Học Tháng",
      value: "89.2K",
      change: { value: "+15% so với tháng trước", isPositive: true },
      icon: Eye
    },
    {
      title: "Tỷ Lệ Hoàn Thành",
      value: "82%",
      change: { value: "+3% so với tháng trước", isPositive: true },
      icon: TrendingUp
    }
  ];

  return (
    <header>
      <Dialog>
        <PageHeader
          title="Từ Vựng"
          subtitle="Quản lý chủ đề từ vựng"
          primaryAction={{
            label: "Thêm chủ đề",
          }}
        />

        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Thêm chủ đề</DialogTitle>
            <DialogDescription>
              Thêm chủ đề từ vựng mới
            </DialogDescription>
          </DialogHeader>
          <FormCreateVocabularyTopic
            setIsLoading={setIsLoading}
          />
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Hủy</Button>
            </DialogClose>
            <Button
              type="submit"
              form="form-create-vocabulary-topic"
              disabled={isLoading}
            >
              {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Lưu'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <StatsGrid stats={stats} />
    </header>
  );
}
