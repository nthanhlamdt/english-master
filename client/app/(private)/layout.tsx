import { PrivateLayout } from "@/components/layouts/PrivateLayout";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Login English Mastery",
  description: "login learning English for English Mastery",
  icons: {
    icon: "/images/logo.png",
  }
};

export default function PrivateLayoutPage({ children }: { children: React.ReactNode }) {
  return (
    <PrivateLayout>
      {children}
    </PrivateLayout>
  );
}
