import { Footer, MainHeader } from "../common";

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <MainHeader />
      {children}
      <Footer />
    </div>
  )
}
