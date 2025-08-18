'use client'
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ROUTES } from "@/constants/routes";
import { usePathname } from "next/navigation";

export function PrivateHeader() {
  const pathname = usePathname()

  const ROUTES_NAME_GROUP = () => {
    const pathnameArray = pathname.split('/')
    const pathnameGroup = pathnameArray.slice(0, 3).join('/')
    console.log(pathnameGroup)
    return pathnameGroup
  }

  return (
    <header className="sticky top-0 left-0 right-0 border-b border-gray-200 p-4 flex items-center gap-2 bg-white">
      <SidebarTrigger />
      <span>{ROUTES.ROUTES_NAME[ROUTES_NAME_GROUP() as keyof typeof ROUTES.ROUTES_NAME]}</span>
    </header>
  )
}
