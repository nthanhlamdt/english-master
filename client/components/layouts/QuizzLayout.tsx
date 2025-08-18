import { HeaderQuizzLayout } from "../common/layout";

export function QuizzLayout({ children }: { children: React.ReactNode }) {

  return (
    <div className="w-full max-h-screen h-screen bg-primary/10 overflow-auto">
      <HeaderQuizzLayout />
      <div className="h-[calc(100vh-6rem)]">
        {children}
      </div>
    </div>
  )
}
