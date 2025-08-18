'use client'

import { Button } from "@/components/ui/button";
import { useAuth } from "@/libs/contexts/AuthContext";
import { headerMainLayoutData } from "@/mock/data";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import AvatarDrowdown from "./AvatarDrowdown";

export function MainHeader() {
  const router = useRouter()
  const { user } = useAuth()

  const handleLogin = () => {
    router.push('/login')
  }
  return (
    <header className="w-full py-4 px-4 md:px-8 border-b border-gray-200 shadow flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Image src={headerMainLayoutData.logo} alt="logo" width={50} height={50} />
        <span className="text-2xl font-bold text-[var(--primary)] hidden md:block">{headerMainLayoutData.title}</span>
      </div>

      <div className="flex items-center gap-2">
        {user ? (
          <>
            <Button
              className="rounded-full text-white cursor-pointer hover:scale-105"
              onClick={() => router.push('/dashboard')}
            >
              Bắt đầu học <ArrowRight />
            </Button>

            <AvatarDrowdown />
          </>
        ) : (
          <Button
            className="rounded-full cursor-pointer hover:scale-105 text-white"
            onClick={handleLogin}
          >
            Đăng nhập <ArrowRight />
          </Button>
        )}
      </div>
    </header>
  )
}
