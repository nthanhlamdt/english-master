import { AdminLayout } from "@/components/layouts";


export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AdminLayout>{children}</AdminLayout>;
}