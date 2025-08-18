import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar, PrivateHeader } from "../common";

export function PrivateLayout({ children }: { children: React.ReactNode }) {

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <PrivateHeader />
          <main className="flex-1 overflow-auto bg-white">
            <div className="p-4">
              {children}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}
