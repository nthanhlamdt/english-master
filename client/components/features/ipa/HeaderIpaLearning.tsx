'use client'
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export function HeaderIpaLearning() {
  const router = useRouter()
  return (
    <div className="flex items-center justify-between gap-2">
      <div className="flex items-center gap-2 text-primary cursor-pointer" onClick={() => router.back()}>
        <ArrowLeft /> Quay lại
      </div>

      <Button>Bắt đầu kiểm tra</Button>
    </div>
  )
}
