import { AuthLayout } from "@/components/layouts";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Login English Mastery",
  description: "login learning English for English Mastery",
  icons: {
    icon: "/images/logo.png",
  }
};

export default function AuthLayoutPage({ children }: { children: React.ReactNode }) {
  return (
    <AuthLayout>
      {children}
    </AuthLayout>
  );
}
